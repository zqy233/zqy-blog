# 源码

```ts
import { MultiLineStream } from './MultiLineStream';

/**
 * HTML tag name (explaining the regex)
 *
 * This regex is for the name of the html tag
 * E.g. we want to match "div" inside "<div>"
 *
 * ^  ### start
 * [:\w]  ### ":" or character or digit
 * ((?![>\/])[\S])  ### everything except closing brackets
 */
const htmlTagNameRE = /^[!:\w\$]((?![>\/])[\S])*/;

/**
 * Empty html tag, e.g. `< ></>`
 */
const htmlTagNameEmptyRE = /^\s+/;

/**
 * Html attribute name (explaining the regex)
 *
 * This regex is for html attribute names,
 * E.g. we want to match "class" in "<div class="center">"
 *
 * ^  ### start
 *   [^\s"'>/=]*  ### any anything that isn't whitespace, ", ', >, / or =
 */
const htmlAttributeNameRE = /^[^\s"'>/=]*/;

/**
 * Html attribute value (explaining the regex)
 *
 * ^  ### start
 *   [^\s"'`=<>/]+  ### no whitespace, double quotes, single quotes, back quotes, "=", "<", ">" and "/"
 */
const htmlAttributeValueRE = /^[^\s"'`=<>/]+/;

export const enum TokenTypeFast {
  StartCommentTag, // "<--" part of "<!-- this is a comment -->"
  Comment, // " this is a comment " part of "<!-- this is a comment -->"
  EndCommentTag, // "-->" part of "<!-- this is a comment -->"
  StartTagOpen, // "<" part of "<html>"
  StartTagClose, // ">" part of "<html>"
  StartTagSelfClose, // "/>" part of "<input />"
  StartTag, // "input" part of "<input>"
  EndTagOpen, // "<" part of "</html>"
  EndTagClose, // ">" part of "</html>"
  EndTag, // "html" part of </html>
  AttributeName, // "class" part of "<div class="center">"
  AttributeValue, // "center" part of "<div class="center">"
  Content, // "this is text" part of "<p>this is text</p>"
  EOS, // end of stream
  DelimiterAssign, // "=" part of "<div class="center">
  Unknown, // anything that doesn't make sense, e.g. ";" in "i <length;"
  WhiteSpace
}

export interface ScannerFast {
  readonly scan: () => TokenTypeFast;
  readonly getTokenText: () => string;
  readonly stream: MultiLineStream;
  state: ScannerStateFast;
}

export const enum ScannerStateFast {
  WithinContent,
  AfterOpeningStartTag,
  AfterOpeningEndTag,
  WithinStartTag,
  WithinEndTag,
  WithinComment,
  AfterAttributeName,
  BeforeAttributeValue
}

export function createScannerFast({
  input,
  initialOffset,
  initialState,
  matchingTagPairs
}: {
  input: string;
  initialOffset: number;
  initialState: ScannerStateFast;
  matchingTagPairs: readonly [string, string][];
}): ScannerFast {
  const stream = new MultiLineStream(input, initialOffset, matchingTagPairs);
  let state: ScannerStateFast = initialState;
  let tokenOffset: number;
  /**
   * Whether or not a space is after the starting tag name.
   * E.g. "<div >" but not "<div''>" and "<div class="center" >" but not "<div class="center">""
   * This is used to determine whether the following characters are attributes or just invalid
   */

  function nextElementName(): string | undefined {
    let result = stream.advanceIfRegExp(htmlTagNameRE);
    if (result === undefined) {
      if (stream.advanceIfRegExp(htmlTagNameEmptyRE)) {
        result = '';
      }
    }
    return result;
  }

  let lastTagName: string | undefined;
  // @ts-ignore
  function scan(): TokenTypeFast {
    tokenOffset = stream.position;
    if (stream.eos()) {
      return TokenTypeFast.EOS;
    }
    switch (state) {
      case ScannerStateFast.AfterOpeningEndTag:
        const tagName = nextElementName();
        if (tagName) {
          state = ScannerStateFast.WithinEndTag;
          return TokenTypeFast.EndTag;
        } else if (stream.peekRight(0) === '>') {
          state = ScannerStateFast.WithinEndTag;
          return TokenTypeFast.EndTag;
        }
        return TokenTypeFast.Unknown;

      case ScannerStateFast.AfterOpeningStartTag:
        lastTagName = nextElementName();
        if (lastTagName !== undefined) {
          if (lastTagName === '') {
            tokenOffset = stream.position;
          }
          state = ScannerStateFast.WithinStartTag;
          return TokenTypeFast.StartTag;
        }
        // this is a tag like "<>"
        if (stream.peekRight() === '>') {
          state = ScannerStateFast.WithinStartTag;
          return TokenTypeFast.StartTag;
        }
        // At this point there is no tag name sign after the opening tag "<"
        // E.g. "< div"
        // So we just assume that it is text
        state = ScannerStateFast.WithinContent;
        return scan();
      default:
        break;
    }
  }

  return {
    scan,
    stream,
    getTokenText() {
      return stream.getSource().slice(tokenOffset, stream.position);
    },
    set state(newState: any) {
      state = newState;
    }
  };
}
```

## htmlTagNameRE：用于匹配 HTML 标签的名称的正则表达式

```ts
/**
 * HTML 标签名称（解释正则表达式）
 *
 * 此正则表达式用于匹配 HTML 标签的名称，例如我们希望在 "<div>" 中匹配 "div"。
 *
 * ^  ### 开始位置
 * [:\w]  ### ":" 或 字母或数字
 * ((?![>\/])[\S])*  ### 除了闭合括号之外的任意字符
 */
const htmlTagNameRE = /^[!:\w\$]((?![>\/])[\S])*/;
```

## htmlTagNameEmptyRE：匹配空标签的正则表达式

```ts
/**
 * 空的 HTML 标签，例如 `< ></>`
 */
const htmlTagNameEmptyRE = /^\s+/;
```

## 创建一个快速的 HTML 扫描器，用于识别和扫描 HTML 文本中的不同记号

这段代码是一个快速的 HTML 扫描器，用于识别和扫描 HTML 文本中的不同记号，如标签、属性、注释和内容文本等。快速扫描器利用了正则表达式进行快速匹配，从而提高了扫描的效率。其中，`ScannerFast` 和 `ScannerStateFast` 是相关的接口和枚举类型，用于描述扫描器的状态和行为。该扫描器适用于对 HTML 文本进行快速的记号识别和解析，以便在后续的语法解析和处理中使用。

```ts
/**
 * 创建快速扫描器
 *
 * @param {object} params - 创建扫描器所需的参数
 * @param {string} params.input - 输入文本
 * @param {number} params.initialOffset - 初始偏移量
 * @param {ScannerStateFast} params.initialState - 初始扫描状态
 * @param {readonly [string, string][]} params.matchingTagPairs - 标签对列表
 * @returns {ScannerFast} - 返回快速扫描器对象
 */
export function createScannerFast({
  input,
  initialOffset,
  initialState,
  matchingTagPairs
}: {
  input: string;
  initialOffset: number;
  initialState: ScannerStateFast;
  matchingTagPairs: readonly [string, string][];
}): ScannerFast {
  // 创建 MultiLineStream 实例，用于处理多行文本流
  const stream = new MultiLineStream(input, initialOffset, matchingTagPairs);
  let state: ScannerStateFast = initialState;
  let tokenOffset: number;

  /**
   * 获取下一个元素名称（标签名或属性名）
   *
   * @returns {string | undefined} - 返回下一个元素名称，如果没有，则返回 undefined
   */
  function nextElementName(): string | undefined {
    let result = stream.advanceIfRegExp(htmlTagNameRE);
    if (result === undefined) {
      if (stream.advanceIfRegExp(htmlTagNameEmptyRE)) {
        result = '';
      }
    }
    return result;
  }

  let lastTagName: string | undefined;
  // 定义 scan 函数，用于扫描并返回记号类型
  function scan(): TokenTypeFast {
    tokenOffset = stream.position;
    if (stream.eos()) {
      return TokenTypeFast.EOS;
    }
    switch (state) {
      case ScannerStateFast.AfterOpeningEndTag:
        const tagName = nextElementName();
        if (tagName) {
          state = ScannerStateFast.WithinEndTag;
          return TokenTypeFast.EndTag;
        } else if (stream.peekRight(0) === '>') {
          state = ScannerStateFast.WithinEndTag;
          return TokenTypeFast.EndTag;
        }
        return TokenTypeFast.Unknown;

      case ScannerStateFast.AfterOpeningStartTag:
        lastTagName = nextElementName();
        if (lastTagName !== undefined) {
          if (lastTagName === '') {
            tokenOffset = stream.position;
          }
          state = ScannerStateFast.WithinStartTag;
          return TokenTypeFast.StartTag;
        }
        // this is a tag like "<>"
        if (stream.peekRight() === '>') {
          state = ScannerStateFast.WithinStartTag;
          return TokenTypeFast.StartTag;
        }
        // At this point there is no tag name sign after the opening tag "<"
        // E.g. "< div"
        // So we just assume that it is text
        state = ScannerStateFast.WithinContent;
        return scan();
      default:
        break;
    }
  }

  // 返回 ScannerFast 对象
  return {
    scan,
    stream,
    getTokenText() {
      return stream.getSource().slice(tokenOffset, stream.position);
    },
    set state(newState: any) {
      state = newState;
    }
  };
}
```

