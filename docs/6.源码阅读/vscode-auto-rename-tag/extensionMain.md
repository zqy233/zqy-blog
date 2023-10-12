# extensionMain

vscode插件的主函数、入口函数，先看这个文件

## 监听编辑器内容变化

#### 1.vscode提供`vscode.workspace.onDidChangeTextDocument`api用来监听编辑器内容变化

插件进行调用

```js
const setupChangeListener = () => {
    if (changeListener) {
      return;
    }
    changeListener = vscode.workspace.onDidChangeTextDocument(async event => {
      if (event.document !== activeTextEditor?.document) {
        return;
      }
    ...
```

#### 2.对`onDidChangeTextDocument`返回的结果进行了处理，处理成自己需要的格式

#### 3.请求服务器来处理标签，返回处理结果

```js
  const results = await askServerForAutoCompletionsElementRenameTag(
    languageClientProxy,
    vscode.window.activeTextEditor.document,
    tags
  );
```

#### 4.根据处理结果修改编辑器内容

`vscode.window.activeTextEditor.edit`api用于修改编辑器内容

```js
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

