# 源码

```ts
import { AssertionError } from 'assert';
import 'source-map-support/register';
import * as vscode from 'vscode';
import {
  Disposable,
  LanguageClientOptions,
  RequestType,
  VersionedTextDocumentIdentifier
} from 'vscode-languageclient';
import {
  createLanguageClientProxy,
  LanguageClientProxy
} from './createLanguageClientProxy';

interface Tag {
  word: string;
  offset: number;
  oldWord: string;
  previousOffset: number;
}

interface Params {
  readonly textDocument: VersionedTextDocumentIdentifier;
  readonly tags: Tag[];
}

interface Result {
  readonly originalOffset: number;
  readonly originalWord: string;
  readonly startOffset: number;
  readonly endOffset: number;
  readonly tagName: string;
}

const assertDefined: <T>(value: T) => asserts value is NonNullable<T> = val => {
  if (val === undefined || val === null) {
    throw new AssertionError({
      message: `Expected 'value' to be defined, but received ${val}`
    });
  }
};

const autoRenameTagRequestType = new RequestType<Params, Result[], any>(
  '$/auto-rename-tag'
);

// TODO implement max concurrent requests

const askServerForAutoCompletionsElementRenameTag: (
  languageClientProxy: LanguageClientProxy,
  document: vscode.TextDocument,
  tags: Tag[]
) => Promise<Result[]> = async (languageClientProxy, document, tags) => {
  const params: Params = {
    textDocument:
      languageClientProxy.code2ProtocolConverter.asVersionedTextDocumentIdentifier(
        document
      ),
    tags
  };
  return languageClientProxy.sendRequest(autoRenameTagRequestType, params);
};

/**
 * Utility variable that stores the last changed version (document.uri.fsPath and document.version)
 * When a change was caused by auto-rename-tag, we can ignore that change, which is a simple performance improvement. One thing to take care of is undo, but that works now (and there are test cases).
 */
let lastChangeByAutoRenameTag: { fsPath: string; version: number } = {
  fsPath: '',
  version: -1
};

const applyResults: (results: Result[]) => Promise<void> = async results => {
  assertDefined(vscode.window.activeTextEditor);
  const prev = vscode.window.activeTextEditor.document.version;
  const applied = await vscode.window.activeTextEditor.edit(
    editBuilder => {
      assertDefined(vscode.window.activeTextEditor);
      for (const result of results) {
        const startPosition =
          vscode.window.activeTextEditor.document.positionAt(
            result.startOffset
          );
        const endPosition = vscode.window.activeTextEditor.document.positionAt(
          result.endOffset
        );
        const range = new vscode.Range(startPosition, endPosition);
        editBuilder.replace(range, result.tagName);
      }
    },
    {
      undoStopBefore: false,
      undoStopAfter: false
    }
  );

  const next = vscode.window.activeTextEditor.document.version;
  if (!applied) {
    return;
  }
  lastChangeByAutoRenameTag = {
    fsPath: vscode.window.activeTextEditor.document.uri.fsPath,
    version: vscode.window.activeTextEditor.document.version
  };
  if (prev + 1 !== next) {
    return;
  }
  for (const result of results) {
    const oldWordAtOffset = wordsAtOffsets[result.originalOffset];
    delete wordsAtOffsets[result.originalOffset];

    let moved = 0;
    if (result.originalWord.startsWith('</')) {
      moved = result.endOffset - result.startOffset + 2;
    }
    wordsAtOffsets[result.originalOffset + moved] = {
      newWord: oldWordAtOffset && oldWordAtOffset.newWord,
      oldWord: result.originalWord
    };
  }
};

let latestCancelTokenSource: vscode.CancellationTokenSource | undefined;
let previousText: string | undefined;
const tagNameReLeft = /<\/?[^<>\s\\\/\'\"\(\)\`\{\}\[\]]*$/;
const tagNameRERight = /^[^<>\s\\\/\'\"\(\)\`\{\}\[\]]*/;

let wordsAtOffsets: {
  [offset: string]: {
    oldWord: string;
    newWord: string;
  };
} = {};

const updateWordsAtOffset: (tags: Tag[]) => void = tags => {
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
  for (const tag of tags) {
    wordsAtOffsets[tag.offset] = {
      oldWord:
        (wordsAtOffsets[tag.previousOffset] &&
          wordsAtOffsets[tag.previousOffset].oldWord) ||
        tag.oldWord,
      newWord: tag.word
    };
    if (tag.previousOffset !== tag.offset) {
      delete wordsAtOffsets[tag.previousOffset];
    }
    tag.oldWord = wordsAtOffsets[tag.offset].oldWord;
  }
};
const doAutoCompletionElementRenameTag: (
  languageClientProxy: LanguageClientProxy,
  tags: Tag[]
) => Promise<void> = async (languageClientProxy, tags) => {
  if (latestCancelTokenSource) {
    latestCancelTokenSource.cancel();
  }
  const cancelTokenSource = new vscode.CancellationTokenSource();
  latestCancelTokenSource = cancelTokenSource;
  if (!vscode.window.activeTextEditor) {
    return;
  }
  const beforeVersion = vscode.window.activeTextEditor.document.version;
  // the change event is fired before we can update the version of the last change by auto rename tag, therefore we wait for that
  await new Promise(resolve => setTimeout(resolve, 0));
  if (!vscode.window.activeTextEditor) {
    return;
  }
  if (
    lastChangeByAutoRenameTag.fsPath ===
      vscode.window.activeTextEditor.document.uri.fsPath &&
    lastChangeByAutoRenameTag.version ===
      vscode.window.activeTextEditor.document.version
  ) {
    return;
  }

  if (cancelTokenSource.token.isCancellationRequested) {
    return;
  }

  const results = await askServerForAutoCompletionsElementRenameTag(
    languageClientProxy,
    vscode.window.activeTextEditor.document,
    tags
  );
  if (cancelTokenSource.token.isCancellationRequested) {
    return;
  }
  if (latestCancelTokenSource === cancelTokenSource) {
    latestCancelTokenSource = undefined;
    cancelTokenSource.dispose();
  }
  if (results.length === 0) {
    wordsAtOffsets = {};
    return;
  }
  if (!vscode.window.activeTextEditor) {
    return;
  }
  const afterVersion = vscode.window.activeTextEditor.document.version;
  if (beforeVersion !== afterVersion) {
    return;
  }
  await applyResults(results);
};

const setPreviousText: (
  textEditor: vscode.TextEditor | undefined
) => void = textEditor => {
  if (textEditor) {
    previousText = textEditor.document.getText();
  } else {
    previousText = undefined;
  }
};

export const activate: (
  context: vscode.ExtensionContext
) => Promise<void> = async context => {
  vscode.workspace
    .getConfiguration('auto-rename-tag')
    .get('activationOnLanguage');
  const isEnabled = (document: vscode.TextDocument | undefined) => {
    if (!document) {
      return false;
    }

    const languageId = document.languageId;

    if (languageId === 'html' || languageId === 'handlebars') {
      const editorSettings = vscode.workspace.getConfiguration(
        'editor',
        document
      );
      if (
        editorSettings.get('renameOnType') ||
        editorSettings.get('linkedEditing')
      ) {
        return false;
      }
    }

    const config = vscode.workspace.getConfiguration(
      'auto-rename-tag',
      document.uri
    );

    const languages = config.get<string[]>('activationOnLanguage', ['*']);
    return languages.includes('*') || languages.includes(languageId);
  };
  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration(event => {
      // purges cache for `vscode.workspace.getConfiguration`
      if (!event.affectsConfiguration('auto-rename-tag')) {
        return;
      }
    })
  );
  const clientOptions: LanguageClientOptions = {
    documentSelector: [
      {
        scheme: '*'
      }
    ]
  };
  const languageClientProxy = await createLanguageClientProxy(
    context,
    'auto-rename-tag',
    'Auto Rename Tag',
    clientOptions
  );
  let activeTextEditor: vscode.TextEditor | undefined =
    vscode.window.activeTextEditor;
  let changeListener: Disposable | undefined;
  context.subscriptions.push({
    dispose() {
      if (changeListener) {
        changeListener.dispose();
        changeListener = undefined;
      }
    }
  });
  const setupChangeListener = () => {
    if (changeListener) {
      return;
    }
    changeListener = vscode.workspace.onDidChangeTextDocument(async event => {
      if (event.document !== activeTextEditor?.document) {
        return;
      }

      if (!isEnabled(event.document)) {
        changeListener?.dispose();
        changeListener = undefined;
        return;
      }

      if (event.contentChanges.length === 0) {
        return;
      }

      const currentText = event.document.getText();
      const tags: Tag[] = [];
      let totalInserted = 0;
      const sortedChanges = event.contentChanges
        .slice()
        .sort((a, b) => a.rangeOffset - b.rangeOffset);
      const keys = Object.keys(wordsAtOffsets);
      for (const change of sortedChanges) {
        for (const key of keys) {
          const parsedKey = parseInt(key, 10);
          if (
            change.rangeOffset <= parsedKey &&
            parsedKey <= change.rangeOffset + change.rangeLength
          ) {
            delete wordsAtOffsets[key];
          }
        }
        assertDefined(previousText);
        const line = event.document.lineAt(change.range.start.line);
        const lineStart = event.document.offsetAt(line.range.start);
        const lineChangeOffset = change.rangeOffset - lineStart;
        const lineLeft = line.text.slice(0, lineChangeOffset + totalInserted);
        const lineRight = line.text.slice(lineChangeOffset + totalInserted);
        const lineTagNameLeft = lineLeft.match(tagNameReLeft);
        const lineTagNameRight = lineRight.match(tagNameRERight);
        const previousTextRight = previousText.slice(change.rangeOffset);
        const previousTagNameRight = previousTextRight.match(tagNameRERight);
        let newWord: string;
        let oldWord: string;
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
          previousOffset: offset - totalInserted
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
      doAutoCompletionElementRenameTag(languageClientProxy, tags);
    });
  };
  setPreviousText(vscode.window.activeTextEditor);
  setupChangeListener();
  context.subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor(textEditor => {
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
```

## 解析

```ts
// 导入必要的模块和类
import { AssertionError } from 'assert';
import 'source-map-support/register';
import * as vscode from 'vscode';
import {
  Disposable,
  LanguageClientOptions,
  RequestType,
  VersionedTextDocumentIdentifier
} from 'vscode-languageclient';
import {
  createLanguageClientProxy,
  LanguageClientProxy
} from './createLanguageClientProxy';

// 定义标签接口，表示标签的信息
interface Tag {
  word: string;           // 标签的名称
  offset: number;         // 标签在文档中的偏移量
  oldWord: string;        // 旧的标签名称
  previousOffset: number; // 之前的偏移量
}

// 定义请求参数接口，表示自动重命名标签的请求参数
interface Params {
  readonly textDocument: VersionedTextDocumentIdentifier; // 版本化的文档标识符
  readonly tags: Tag[];                                  // 标签列表
}

// 定义结果接口，表示自动重命名标签的结果
interface Result {
  readonly originalOffset: number; // 原始的偏移量
  readonly originalWord: string;   // 原始的标签名称
  readonly startOffset: number;    // 开始偏移量
  readonly endOffset: number;      // 结束偏移量
  readonly tagName: string;        // 新的标签名称
}

// 断言函数，确保值不为 null 或 undefined
const assertDefined: <T>(value: T) => asserts value is NonNullable<T> = val => {
  if (val === undefined || val === null) {
    throw new AssertionError({
      message: `期望 'value' 被定义，但收到了 ${val}`
    });
  }
};

// 自动重命名标签请求类型
const autoRenameTagRequestType = new RequestType<Params, Result[], any>(
  '$/auto-rename-tag'
);

// TODO: 实现最大并发请求数


/**
 * 将结果应用到文本编辑器中
 */
const applyResults: (results: Result[]) => Promise<void> = async results => {
  assertDefined(vscode.window.activeTextEditor);
  const prev = vscode.window.activeTextEditor.document.version;
  const applied = await vscode.window.activeTextEditor.edit(
    editBuilder => {
      assertDefined(vscode.window.activeTextEditor);
      for (const result of results) {
        const startPosition =
          vscode.window.activeTextEditor.document.positionAt(
            result.startOffset
          );
        const endPosition = vscode.window.activeTextEditor.document.positionAt(
          result.endOffset
        );
        const range = new vscode.Range(startPosition, endPosition);
        editBuilder.replace(range, result.tagName);
      }
    },
    {
      undoStopBefore: false,
      undoStopAfter: false
    }
  );

  const next = vscode.window.activeTextEditor.document.version;
  if (!applied) {
    return;
  }
  lastChangeByAutoRenameTag = {
    fsPath: vscode.window.activeTextEditor.document.uri.fsPath,
    version: vscode.window.activeTextEditor.document.version
  };
  if (prev + 1 !== next) {
    return;
  }
  for (const result of results) {
    const oldWordAtOffset = wordsAtOffsets[result.originalOffset];
    delete wordsAtOffsets[result.originalOffset];

    let moved = 0;
    if (result.originalWord.startsWith('</')) {
      moved = result.endOffset - result.startOffset + 2;
    }
    wordsAtOffsets[result.originalOffset + moved] = {
      newWord: oldWordAtOffset && oldWordAtOffset.newWord,
      oldWord: result.originalWord
    };
  }
};

// 用于存储最后一次由 auto-rename-tag 触发的更改的变量，用于简单的性能优化。
// 需要注意的是撤销操作，但这已经可以正常工作（并且有测试案例）。
let lastChangeByAutoRenameTag: { fsPath: string; version: number } = {
  fsPath: '',
  version: -1
};



// 执行自动完成标签重命名的函数
const doAutoCompletionElementRenameTag: (
  languageClientProxy: LanguageClientProxy,
  tags: Tag[]
) => Promise<void> = async (languageClientProxy, tags) => {
  if (latestCancelTokenSource) {
    latestCancelTokenSource.cancel();
  }
  const cancelTokenSource = new vscode.CancellationTokenSource();
  latestCancelTokenSource = cancelTokenSource;
  if (!vscode.window.activeTextEditor) {
    return;
  }
  const beforeVersion = vscode.window.activeTextEditor.document.version;
  // 等待微小延迟以处理更改事件，确保上次的 auto-rename-tag 更改版本得到更新
  await new Promise(resolve => setTimeout(resolve, 0));
  if (!vscode.window.activeTextEditor) {
    return;
  }
  if (
    lastChangeByAutoRenameTag.fsPath ===
      vscode.window.activeTextEditor.document.uri.fsPath &&
    lastChangeByAutoRenameTag.version ===
      vscode.window.activeTextEditor.document.version
  ) {
    return;
  }

  if (cancelTokenSource.token.isCancellationRequested) {
    return;
  }

  const results = await askServerForAutoCompletionsElementRenameTag(
    languageClientProxy,
    vscode.window.activeTextEditor.document,
    tags
  );
  if (cancelTokenSource.token.isCancellationRequested) {
    return;
  }
  if (latestCancelTokenSource === cancelTokenSource) {
    latestCancelTokenSource = undefined;
    cancelTokenSource.dispose();
  }
  if (results.length === 0) {
    wordsAtOffsets = {};
    return;
  }
  if (!vscode.window.activeTextEditor) {
    return;
  }
  const afterVersion = vscode.window.activeTextEditor.document.version;
  if (beforeVersion !== afterVersion) {
    return;
  }
  await applyResults(results);
};

// 设置前一次的文本内容
let previousText: string | undefined;
// 正则表达式，用于匹配标签左侧和右侧的内容
const tagNameReLeft = /<\/?[^<>\s\\\/\'\"\(\)\`\{\}\[\]]*$/;
const tagNameRERight = /^[^<>\s\\\/\'\"\(\)\`\{\}\[\]]*/;

// 用于存储标签的信息，根据偏移量索引
let wordsAtOffsets: {
  [offset: string]: {
    oldWord: string;
    newWord: string;
  };
} = {};

// 设置前一次的文本内容，并检查是否需要开启更改监听器
const setPreviousText: (
  textEditor: vscode.TextEditor | undefined
) => void = textEditor => {
  if (textEditor) {
    previousText = textEditor.document.getText();
  } else {
    previousText = undefined;
  }
};

// 扩展激活函数
export const activate: (
  context: vscode.ExtensionContext
) => Promise<void> = async context => {
  // 获取用户配置，检查激活的语言
  vscode.workspace
    .getConfiguration('auto-rename-tag')
    .get('activationOnLanguage');
  const isEnabled = (document: vscode.TextDocument | undefined) => {
    if (!document) {
      return false;
    }

    const languageId = document.languageId;

    if (languageId === 'html' || languageId === 'handlebars') {
      const editorSettings = vscode.workspace.getConfiguration(
        'editor',
        document
      );
      if (
        editorSettings.get('renameOnType') ||
        editorSettings.get('linkedEditing')
      ) {
        return false;
      }
    }

    const config = vscode.workspace.getConfiguration(
      'auto-rename-tag',
      document.uri
    );

    const languages = config.get<string[]>('activationOnLanguage', ['*']);
    return languages.includes('*') || languages.includes(languageId);
  };
  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration(event => {
      // 清除缓存，避免影响 `vscode.workspace.getConfiguration` 的结果
      if (!event.affectsConfiguration('auto-rename-tag')) {
        return;
      }
    })
  );
  // 创建 LanguageClientProxy 实例
  const clientOptions: LanguageClientOptions = {
    documentSelector: [
      {
        scheme: '*'
      }
    ]
  };
  const languageClientProxy = await createLanguageClientProxy(
    context,
    'auto-rename-tag',
    'Auto Rename Tag',
    clientOptions
  );
  let activeTextEditor: vscode.TextEditor | undefined =
    vscode.window.activeTextEditor;
  let changeListener: Disposable | undefined;
  context.subscriptions.push({
    dispose() {
      if (changeListener) {
        changeListener.dispose();
        changeListener = undefined;
      }
    }
  });
  const setupChangeListener = () => {
    if (changeListener) {
      return;
    }
    changeListener = vscode.workspace.onDidChangeTextDocument(async event => {
      if (event.document !== activeTextEditor?.document) {
        return;
      }

      if (!isEnabled(event.document)) {
        changeListener?.dispose();
        changeListener = undefined;
        return;
      }

      if (event.contentChanges.length === 0) {
        return;
      }

      const currentText = event.document.getText();
      const tags: Tag[] = [];
      let totalInserted = 0;
      const sortedChanges = event.contentChanges
        .slice()
        .sort((a, b) => a.rangeOffset - b.rangeOffset);
      const keys = Object.keys(wordsAtOffsets);
      for (const change of sortedChanges) {
        for (const key of keys) {
          const parsedKey = parseInt(key, 10);
          if (
            change.rangeOffset <= parsedKey &&
            parsedKey <= change.rangeOffset + change.rangeLength
          ) {
            delete wordsAtOffsets[key];
          }
        }
        assertDefined(previousText);
        const line = event.document.lineAt(change.range.start.line);
        const lineStart = event.document.offsetAt(line.range.start);
        const lineChangeOffset = change.rangeOffset - lineStart;
        const lineLeft = line.text.slice(0, lineChangeOffset + totalInserted);
        const lineRight = line.text.slice(lineChangeOffset + totalInserted);
        const lineTagNameLeft = lineLeft.match(tagNameReLeft);
        const lineTagNameRight = lineRight.match(tagNameRERight);
        const previousTextRight = previousText.slice(change.rangeOffset);
        const previousTagNameRight = previousTextRight.match(tagNameRERight);
        let newWord: string;
        let oldWord: string;
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
          previousOffset: offset - totalInserted
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
      doAutoCompletionElementRenameTag(languageClientProxy, tags);
    });
  };
  setPreviousText(vscode.window.activeTextEditor);
  setupChangeListener();
  context.subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor(textEditor => {
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
```

## wordsAtOffsets有啥用

`wordsAtOffsets` 是一个对象，用于存储标签的信息。它以标签在文档中的偏移量（offset）作为键，记录了每个标签的旧名称（oldWord）和新名称（newWord）。在代码的执行过程中，`wordsAtOffsets` 用于跟踪标签的名称变化。

具体用途如下：

1. 在 `updateWordsAtOffset` 函数中，当收到标签信息时，会更新 `wordsAtOffsets` 对象。它会检查标签列表中的每个标签，并根据偏移量来更新或添加标签信息。这样做是为了在接下来的操作中，可以根据标签的偏移量快速找到对应的旧名称。
2. 在 `doAutoCompletionElementRenameTag` 函数中，根据之前记录的标签信息和当前的文本内容，会计算需要自动重命名的标签，并将相关信息发送给语言服务器。这个过程中，`wordsAtOffsets` 可以帮助确定每个标签的旧名称。
3. 在 `applyResults` 函数中，通过 `wordsAtOffsets` 对象，可以将自动重命名的结果应用到活动文本编辑器中，将旧的标签名称替换为新的标签名称。

总之，`wordsAtOffsets` 是一个辅助数据结构，用于记录标签的名称信息，并在标签自动重命名的过程中帮助进行相关操作。

## 请求服务器自动完成标签重命名的结果

 请求服务器自动完成标签重命名的结果

```ts
const askServerForAutoCompletionsElementRenameTag: (
  languageClientProxy: LanguageClientProxy,
  document: vscode.TextDocument,
  tags: Tag[]
) => Promise<Result[]> = async (languageClientProxy, document, tags) => {
  const params: Params = {
    textDocument:
      languageClientProxy.code2ProtocolConverter.asVersionedTextDocumentIdentifier(
        document
      ),
    tags
  };
  return languageClientProxy.sendRequest(autoRenameTagRequestType, params);
};
```

`doAutoCompletionElementRenameTag`函数中调用

```ts
  const results = await askServerForAutoCompletionsElementRenameTag(
    languageClientProxy,
    vscode.window.activeTextEditor.document,
    tags
  );
```

客户端`languageClientProxy.sendRequest`发送请求，那么再看下服务端`server/serverMain.ts`怎么接受请求

```ts
const handleRequest: <Params, Result>(
  fn: (params: Params) => Result
) => (params: Params) => Result = fn => params => {
  try {
    return fn(params);
  } catch (error) {
    handleError(error);
    throw error;
  }
};

connection.onRequest(
  autoRenameTagRequestType,
  handleRequest(autoRenameTag(documents))
);
```

最后再来看下`autoRenameTag`方法，流程上结束了，至于`doAutoRenameTag`的具体实现，就不在这里介绍了

```ts
// 这里的ts类型是( documents: TextDocuments<TextDocument> ) => (params: Params) => Promise<Result[]>
// 表示该函数接受一个 documents 参数，然后返回一个函数，返回的函数接受一个 params 参数，返回一个 Promise，解析为 Result[] 数组。
export const autoRenameTag: (
  documents: TextDocuments<TextDocument>
) => (params: Params) => Promise<Result[]> =
  (documents) =>
    // 解构赋值获取 params 参数中的 textDocument, tags
    async ({ textDocument, tags }) => {
      await new Promise((r) => setTimeout(r, 20));
      const document = documents.get(textDocument.uri);
      if (!document) {
        return NULL_AUTO_RENAME_TAG_RESULT;
      }
      if (textDocument.version !== document.version) {
        return NULL_AUTO_RENAME_TAG_RESULT;
      }
      const text = document.getText();
      const results: Result[] = tags
        .map((tag) => {
          // service中定义的doAutoRenameTag方法
          const result = doAutoRenameTag(
            text,
            tag.offset,
            tag.word,
            tag.oldWord,
            document.languageId
          );
          if (!result) {
            return result;
          }
          (result as any).originalOffset = tag.offset;
          (result as any).originalWord = tag.word;
          return result as Result;
        })
        .filter(Boolean) as Result[];
      return results;
    };
```



## updateWordsAtOffset：更新标签信息的函数

```ts
// 更新标签信息的函数
const updateWordsAtOffset: (tags: Tag[]) => void = tags => {
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
  for (const tag of tags) {
    wordsAtOffsets[tag.offset] = {
      oldWord:
        (wordsAtOffsets[tag.previousOffset] &&
          wordsAtOffsets[tag.previousOffset].oldWord) ||
        tag.oldWord,
      newWord: tag.word
    };
    if (tag.previousOffset !== tag.offset) {
      delete wordsAtOffsets[tag.previousOffset];
    }
    tag.oldWord = wordsAtOffsets[tag.offset].oldWord;
  }
};
```

