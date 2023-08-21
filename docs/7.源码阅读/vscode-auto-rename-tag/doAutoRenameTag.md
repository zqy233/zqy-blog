## 自动重命名 HTML 标签的函数 `doAutoRenameTag`

它接受输入的文本 `text`、光标位置 `offset`、新的标签名 `newWord`、旧的标签名 `oldWord` 和语言标识 `languageId`，并尝试根据输入的信息来自动重命名标签。

```ts
export const doAutoRenameTag = (
  text: string,
  offset: number,
  newWord: string,
  oldWord: string,
  languageId: string
) =>
  | {
      startOffset: number;
      endOffset: number;
      tagName: string;
    }
  | undefined = (text, offset, newWord, oldWord, languageId) => {
  // 获取匹配的标签对
  const matchingTagPairs = getMatchingTagPairs(languageId);
  // 判断标签是否是自闭合标签
  const isSelfClosingTag = isSelfClosingTagInLanguage(languageId);
  // 判断是否是 React 语言
  const isReact =
    languageId === 'javascript' ||
    languageId === 'typescript' ||
    languageId === 'javascriptreact' ||
    languageId === 'typescriptreact';
  // 创建一个快速扫描器
  const scanner = createScannerFast({
    input: text,
    initialOffset: 0,
    initialState: ScannerStateFast.WithinContent,
    matchingTagPairs
  });

  // 检查新的标签名是否以 "</" 开头，如果是，执行以下逻辑
  if (newWord.startsWith('</')) {
    // 将扫描器定位到光标位置
    scanner.stream.goTo(offset);
    // 提取新的标签名（去掉 "</"）
    const tagName = newWord.slice(2);
    // 提取旧的标签名（去掉 "</"）
    const oldTagName = oldWord.slice(2);
    // 如果旧的标签名以 "script" 或 "style" 开头
    if (oldTagName.startsWith('script') || oldTagName.startsWith('style')) {
      // 构造一个匹配的标签，例如 "</oldTagName>"
      const tag = `<${oldTagName}`;
      let i = scanner.stream.position;
      let found = false;
      // 从当前位置开始向前搜索
      while (i--) {
        // 如果找到了与标签匹配的内容
        if (text.slice(i).startsWith(tag)) {
          found = true;
          break;
        }
      }
      // 如果没有找到匹配的内容，返回 undefined
      if (!found) {
        return undefined;
      }
      // 如果找到了匹配的内容，返回对应的标签名和位置
      return {
        startOffset: i + 1,
        endOffset: i + 1 + oldTagName.length,
        tagName
      };
    }

    // 如果不是以 "script" 或 "style" 开头的标签
    // 获取当前标签的父标签信息
    const parent = getPreviousOpeningTagName(
      scanner,
      scanner.stream.position,
      isSelfClosingTag,
      isReact
    );
    // 如果没有找到父标签，返回 undefined
    if (!parent) {
      return undefined;
    }
    // 如果当前标签的父标签名与新标签名相同，返回 undefined
    if (parent.tagName === tagName) {
      return undefined;
    }
    // 如果当前标签的父标签名与旧标签名不同，返回 undefined
    if (parent.tagName !== oldTagName) {
      return undefined;
    }
    // 如果当前标签的父标签没有闭合，返回 undefined
    if (!parent.seenRightAngleBracket) {
      return undefined;
    }

    // 返回对应的标签名和位置
    const startOffset = parent.offset;
    const endOffset = parent.offset + parent.tagName.length;
    return {
      startOffset,
      endOffset,
      tagName
    };
  } else {
    // 如果新的标签名不是以 "</" 开头，执行以下逻辑
    // 将扫描器定位到光标位置后一位
    scanner.stream.goTo(offset + 1);
    // 提取新的标签名（去掉 "<"）
    const tagName = newWord.slice(1);
    // 提取旧的标签名（去掉 "<"）
    const oldTagName = oldWord.slice(1);
    // 如果旧的标签名以 "script" 或 "style" 开头
    if (oldTagName.startsWith('script') || oldTagName.startsWith('style')) {
      // 继续扫描直到遇到 ">"
      const hasAdvanced = scanner.stream.advanceUntilEitherChar(
        ['>'],
        true,
        isReact
      );
      // 如果没有扫描到 ">", 返回 undefined
      if (!hasAdvanced) {
        return undefined;
      }
      // 在扫描到 ">", 之后的文本中查找 "</oldTagName>"
      const match = text
        .slice(scanner.stream.position)
        .match(new RegExp(`</${oldTagName}`));
      // 如果没有找到 "</oldTagName>"，返回 undefined
      if (!match) {
        return undefined;
      }
      // 找到 "</oldTagName>" 的位置
      const index = match.index as number;
      // 返回对应的标签名和位置
      return {
        startOffset: scanner.stream.position + index + 2,
        endOffset: scanner.stream.position + index + 2 + oldTagName.length,
        tagName
      };
    }

    // 如果不是以 "script" 或 "style" 开头的标签
    // 继续扫描直到遇到 "<" 或 ">"
    const hasAdvanced = scanner.stream.advanceUntilEitherChar(
      ['<', '>'],
      true,
      isReact
    );
    // 如果遇到了 "<"，返回 undefined
    if (scanner.stream.peekRight(0) === '<') {
      return undefined;
    }
    // 如果没有扫描到 "<" 或 ">", 返回 undefined
    if (!hasAdvanced) {
      return undefined;
    }
    // 如果光标前面的一个字符是 "/"，返回 undefined
    if (scanner.stream.peekLeft(1) === '/') {
      return undefined;
    }

    // 获取当前位置的可能是标签的结束位置
    const possibleEndOfStartTag = scanner.stream.position;
    // 检查是否可能是结束标签
    while (scanner.stream.peekLeft(1).match(/[a-zA-Z\-\:]/)) {
      scanner.stream.goBack(1);
      if (scanner.stream.peekLeft(1) === '/') {
        return undefined;
      }
    }
    scanner.stream.goTo(possibleEndOfStartTag);
    scanner.stream.advance(1);
    // 获取下一个闭合标签的信息
    const nextClosingTag = getNextClosingTagName(
      scanner,
      scanner.stream.position,
      isSelfClosingTag,
      isReact
    );
    // 如果没有找到下一个闭合标签，返回 undefined
    if (!nextClosingTag) {
      return undefined;
    }
    // 如果下一个闭合标签名与新标签名相同，返回 undefined
    if (nextClosingTag.tagName === tagName) {
      return undefined;
    }
    // 如果下一个闭合标签名与旧标签名不同，返回 undefined
    if (nextClosingTag.tagName !== oldTagName) {
      return undefined;
    }

    // 获取当前光标位置之前的标签信息
    const previousOpenTag = getPreviousOpeningTagName(
      scanner,
      offset,
      isSelfClosingTag,
      isReact
    );

    // 如果之前有一个与旧标签名相同且缩进相同的开始标签，返回 undefined
    if (
      previousOpenTag &&
      previousOpenTag.tagName === oldTagName &&
      previousOpenTag.indent === nextClosingTag.indent
    ) {
      return undefined;
    }

    // 返回对应的标签名和位置
    const startOffset = nextClosingTag.offset;
    const endOffset = nextClosingTag.offset + nextClosingTag.tagName.length;

    return {
      startOffset,
      endOffset,
      tagName
    };
  }
};
```

