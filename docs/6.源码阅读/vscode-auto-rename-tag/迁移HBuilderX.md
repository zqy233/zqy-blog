## 测试内容

```vue
<template>
  <view class="container">
    <view class="intro">
      本项目已包含uni
      ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。
    </view>
    <text class="intro">详见：</text>
    <uni-link :href="href" :text="href"></uni-link>
  </view>
</template>

<script>
export default {
  data() {
    return {
      href: "https://uniapp.dcloud.io/component/README?id=uniui",
    };
  },
  methods: {},
};
</script>

<style>
.container {
  padding: 20px;
  font-size: 14px;
  line-height: 24px;
}
</style>
```

## vscode和hbuilderx一致性

统一修改`<text class="intro">详见：</text>`

### event.contentChanges触发不一样

vsocde中如果是修改则直接是修改内容，hbuilderx中修改则是触发两次，第一次是删除，第二次是新增内容

放在队列中去取最后一次操作，20ms应该够用了，待测试

```ts
if (results.length === 0) {
    wordsAtOffsets = {};
  } else {
    if (setTimer) {
      clearTimeout(setTimer);
    }
    setTimer = setTimeout(() => {
      applyResults();
    }, 20);
  }
```

### event.contentChanges中rangeOffset不一致

vsocde的rangeOffset是181，hbuilderx的rangeOffset是312

找到问题了：hbuilderx里面一个中文字符占三个rangeOffset，而vsocde里只占一个，所以中文字符越多差的越大

```js
        const lineStart = event.document.offsetAt(line.range.start);
        console.log("lineStart", lineStart);
        const lineChangeOffset = change.rangeOffset - lineStart;
        console.log("lineChangeOffset", lineChangeOffset);
        const lineLeft = line.text.slice(0, lineChangeOffset + totalInserted);
        console.log("lineLeft", lineLeft);
        const lineRight = line.text.slice(lineChangeOffset + totalInserted);
        console.log("lineRight", lineRight);
        const lineTagNameLeft = lineLeft.match(tagNameReLeft);
        console.log("lineTagNameLeft", lineTagNameLeft);
        const lineTagNameRight = lineRight.match(tagNameRERight);
        console.log("lineTagNameRight", lineTagNameRight);
        const previousTextRight = previousText.slice(change.rangeOffset);
        console.log("previousTextRight", previousTextRight);
        const previousTagNameRight = previousTextRight.match(tagNameRERight);
        console.log("previousTagNameRight", previousTagNameRight)
```

调用`edit`修改编辑器也会触发`vscode.workspace.onDidChangeTextDocument`方法

## 目前问题

1. 偶现插件自动更改标签失败
2. 撤销需要太多次
3. 无法撤销，撤销时也触发插件自动更改了

## 目前源码

```js
const vscode = require("vscode");
const doAutoRenameTag = require("./service.js");
const hx = require("hbuilderx");
const diff = require("fast-diff");

const assertDefined = (val) => {
  if (val === undefined || val === null) {
    throw new Error(`Expected 'value' to be defined, but received ${val}`);
  }
};

let lastChangeByAutoRenameTag = {
  fsPath: "",
  version: -1,
};

let activeTextEditor;
let results = [];
let setTimer = null;
const applyResults = async () => {
  console.log("出发了", results);
  activeTextEditor = await hx.window.getActiveTextEditor();
  assertDefined(activeTextEditor);
  const prev = activeTextEditor.document.version;
  const applied = activeTextEditor.edit((editBuilder) => {
    for (const result of results) {
      editBuilder.replace(
        { start: result.startOffset, end: result.endOffset },
        result.tagName
      );
    }
  });
  console.log("applied", applied);
  // if (!applied) {
  //   return;
  // }
  // lastChangeByAutoRenameTag = {
  //   fsPath: vscode.window.activeTextEditor.document.uri.fsPath,
  //   version: vscode.window.activeTextEditor.document.version,
  // };
  setTimer(() => {
    const next = vscode.window.activeTextEditor.document.version;
    if (prev + 1 !== next) {
      return;
    }
    for (const result of results) {
      const oldWordAtOffset = wordsAtOffsets[result.originalOffset];
      delete wordsAtOffsets[result.originalOffset];

      let moved = 0;
      if (result.originalWord.startsWith("</")) {
        moved = result.endOffset - result.startOffset + 2;
      }
      wordsAtOffsets[result.originalOffset + moved] = {
        newWord: oldWordAtOffset && oldWordAtOffset.newWord,
        oldWord: result.originalWord,
      };
    }
  }, 0);
};

let previousText;

// \/?: 匹配可选的 / 字符（用于匹配闭合标签的斜杠）。
// [^<>\s\\\/\'\"\(\)\{}
// ]*: 匹配零个或多个非 <>\s/'"
// {}[]` 字符。这是用于匹配标签名的部分，确保不包含空格、斜杠、单引号、双引号、括号等特殊字符。
// 这个正则表达式的目的是匹配 HTML 或 XML 开始标签或闭合标签的标签名。
const tagNameReLeft = /<\/?[^<>\s\\\/\'\"\(\)\`\{\}\[\]]*$/;
const tagNameRERight = /^[^<>\s\\\/\'\"\(\)\`\{\}\[\]]*/;

let wordsAtOffsets = {};

const updateWordsAtOffset = (tags) => {
  const keys = Object.keys(wordsAtOffsets);
  if (keys.length > 0) {
    if (keys.length !== tags.length) {
      wordsAtOffsets = {};
    }
    for (const tag of tags) {
      if (!wordsAtOffsets.hasOwnProperty(tag.previousOffset)) {
        wordsAtOffsets = {};
        break;
      }
    }
  }
  // 遍历tags数组
  for (const tag of tags) {
    wordsAtOffsets[tag.offset] = {
      oldWord:
        (wordsAtOffsets[tag.previousOffset] &&
          wordsAtOffsets[tag.previousOffset].oldWord) ||
        tag.oldWord,
      newWord: tag.word,
    };
    if (tag.previousOffset !== tag.offset) {
      delete wordsAtOffsets[tag.previousOffset];
    }
    tag.oldWord = wordsAtOffsets[tag.offset].oldWord;
  }
};

const setPreviousText = (textEditor) => {
  if (textEditor) {
    previousText = textEditor.document.getText();
  } else {
    previousText = undefined;
  }
};

const NULL_AUTO_RENAME_TAG_RESULT = [];

const autoRenameTag = async (document, tags) => {
  if (!document) {
    return NULL_AUTO_RENAME_TAG_RESULT;
  }
  const text = document.getText();
  console.log("tags", tags);
  results = tags
    .map((tag) => {
      const result = doAutoRenameTag.doAutoRenameTag(
        text,
        tag.offset,
        tag.word,
        tag.oldWord,
        document.languageId
      );
      if (!result) {
        return result;
      }
      result.originalOffset = tag.offset;
      result.originalWord = tag.word;
      return result;
    })
    .filter(Boolean);
  console.log("results", results);
  if (results.length === 0) {
    wordsAtOffsets = {};
  } else {
    // setTimeout(() => {
    //   if (setTimer) {
    //     clearTimeout(setTimer);
    //   }
    //   setTimer = setTimeout(() => {
    applyResults();
    // }, 10);
    // }, 0);
  }
};

const activate = async (context) => {
  // 是否需要开启插件
  const isEnabled = (document) => {
    if (!document) {
      return false;
    } else {
      return true;
    }
  };

  // `context.subscriptions.push`添加了一个可被清理的对象到插件的订阅中。这个对象包含一个`dispose`方法，用于执行资源清理。当插件被禁用或销毁时，VSCode会自动调用这些`dispose`方法，从而进行资源的释放。总而言之，`dispose`函数是用于释放资源和执行清理操作的一种规范方法，确保在插件不再需要某些资源时，这些资源能够被正确释放。
  let activeTextEditor = vscode.window.activeTextEditor;
  let changeListener;
  context.subscriptions.push({
    dispose() {
      if (changeListener) {
        changeListener.dispose();
        changeListener = undefined;
      }
    },
  });
  const setupChangeListener = () => {
    if (changeListener) {
      return;
    }
    // 创建一个`vscode.workspace.onDidChangeTextDocument`事件，编辑器内容变化会触发该事件
    changeListener = vscode.workspace.onDidChangeTextDocument(async (event) => {
      if (event.document !== activeTextEditor?.document) {
        return;
      }

      if (!isEnabled(event.document)) {
        changeListener?.dispose();
        changeListener = undefined;
        return;
      }
      console.log(vscode.window.activeTextEditor.document.version);
      // event.contentChanges数据格式 [
      //   {
      //     range: { end: [Object], start: [Object] },
      //     rangeLength: 1,
      //     rangeOffset: 292,
      //     text: '1'
      //   }
      // ]
      // event.contentChanges是编辑器的修改内容
      if (event.contentChanges.length === 0) {
        return;
      }
      console.log("event.contentChanges", event.contentChanges);
      // 修复event.contentChanges出现中文字符下错误的rangeOffset
      event.contentChanges.forEach((item) => {
        item.rangeOffset = item.text
          ? event.document.offsetAt(
              new vscode.Position(item.range.end.line, item.range.end.character)
            )
          : event.document.offsetAt(
              new vscode.Position(
                item.range.start.line,
                item.range.start.character
              )
            );
      });
      const currentText = event.document.getText();
      // 获取编辑器内的内容
      const tags = [];
      let totalInserted = 0;
      // slice浅拷贝，根据rangeOffset排好序
      const sortedChanges = event.contentChanges
        .slice()
        .sort((a, b) => a.rangeOffset - b.rangeOffset);
      const keys = Object.keys(wordsAtOffsets);
      // {
      //   oldWord: "<title",
      //   word: "<1",
      //   offset: 389,
      //   previousOffset: 389,
      // }
      for (const change of sortedChanges) {
        for (const key of keys) {
          const parsedKey = parseInt(key, 10);
          // 修改
          if (
            change.rangeOffset <= parsedKey &&
            parsedKey <= change.rangeOffset + change.rangeLength
          ) {
            delete wordsAtOffsets[key];
          }
        }
        console.log("change", JSON.stringify(change));
        assertDefined(previousText);
        // 获取更改开始位置所在行的信息
        const line = event.document.lineAt(change.range.start.line);
        console.log("line", line);
        // 获取行开始位置索引
        const lineStart = event.document.offsetAt(line.range.start);
        console.log("lineStart", lineStart);
        // change.rangeOffset 被替换的区域的偏移量
        const lineChangeOffset = change.rangeOffset - lineStart;
        console.log("lineChangeOffset", lineChangeOffset);
        const lineLeft = line.text.slice(0, lineChangeOffset + totalInserted);
        console.log("lineLeft", lineLeft);
        const lineRight = line.text.slice(lineChangeOffset + totalInserted);
        console.log("lineRight", lineRight);
        const lineTagNameLeft = lineLeft.match(tagNameReLeft);
        console.log("lineTagNameLeft", lineTagNameLeft);
        const lineTagNameRight = lineRight.match(tagNameRERight);
        console.log("lineTagNameRight", lineTagNameRight);
        const previousTextRight = previousText.slice(change.rangeOffset);
        const previousTagNameRight = previousTextRight.match(tagNameRERight);
        let newWord;
        let oldWord;
        // 如果没有左侧
        if (!lineTagNameLeft) {
          totalInserted += change.text.length - change.rangeLength;
          continue;
        }
        newWord = lineTagNameLeft[0];
        oldWord = lineTagNameLeft[0];
        if (lineTagNameRight) {
          newWord += lineTagNameRight[0];
        }
        if (previousTagNameRight) {
          oldWord += previousTagNameRight[0];
        }
        const offset =
          change.rangeOffset - lineTagNameLeft[0].length + totalInserted;
        tags.push({
          oldWord,
          word: newWord,
          offset,
          previousOffset: offset - totalInserted,
        });
        totalInserted += change.text.length - change.rangeLength;
      }
      updateWordsAtOffset(tags);
      if (tags.length === 0) {
        previousText = currentText;
        return;
      }
      assertDefined(vscode.window.activeTextEditor);
      previousText = currentText;
      console.log("tags", tags);
      if (event.contentChanges.length === 1) {
        autoRenameTag(vscode.window.activeTextEditor.document, tags);
      }
    });
  };
  setPreviousText(vscode.window.activeTextEditor);
  setupChangeListener();
  context.subscriptions.push(
    // `vscode.window.onDidChangeActiveTextEditor`更改聚焦的编辑器触发，触发后重新设置监听器
    vscode.window.onDidChangeActiveTextEditor((textEditor) => {
      activeTextEditor = textEditor;
      const doument = activeTextEditor?.document;
      if (!isEnabled(doument)) {
        if (changeListener) {
          changeListener.dispose();
          changeListener = undefined;
        }
        return;
      }
      setPreviousText(textEditor);
      setupChangeListener();
    })
  );
};

module.exports = {
  activate,
};
```

