# 源码

```ts
/**
 * For these chars code can be ambiguous, e.g.
 * `<div class="<button class="></div>"</button>`
 * Here, the button start tag can be interpreted as a class
 * or the closing div tag can be interpreted as a class.
 * In case of quotes we always skip.
 *
 * This is in contrast to chars that cannot be skipped, e.g. when
 * going forward and encountering `-->` we cannot go further
 * because we would go outside of the comment but when going
 * forward and encountering `"` we can go forward until
 * the next quote.
 *
 */
const quotes = new Set(['`', '"', "'"]);

// const whitespaceSet = new Set([' ', '\n', '\t', '\f', '\r']);
// const isWhitespace: (char: string) => boolean = char => whitespaceSet.has(char);

export class MultiLineStream {
  public position: number;

  private source: string;

  private length: number;
  private matchingTagPairs: readonly [string, string][];
  private nonQuoteMatchingTagPairs: readonly [string, string][];

  constructor(
    source: string,
    position: number,
    matchingTagPairs: readonly [string, string][]
  ) {
    this.source = source;
    this.length = source.length;
    this.position = position;
    this.matchingTagPairs = matchingTagPairs;
    this.nonQuoteMatchingTagPairs = matchingTagPairs.filter(
      matchingTagPair => !quotes.has(matchingTagPair[0])
    );
  }

  public eos(): boolean {
    return this.length <= this.position;
  }

  public getSource(): string {
    return this.source;
  }

  public goTo(position: number): void {
    this.position = position;
  }

  public goBack(n: number): void {
    this.position -= n;
  }

  public advance(n: number): void {
    this.position += n;
  }

  private goToEnd(): void {
    this.position = this.source.length;
  }

  // TODO
  // public raceBackUntilChars(firstChar: string, secondChar: string): string {
  //   this.position--;
  //   while (
  //     this.position >= 0 &&
  //     this.source[this.position] !== firstChar &&
  //     this.source[this.position] !== secondChar
  //   ) {
  //     this.position--;
  //   }
  //   this.position++;
  //   if (this.position === 0) {
  //     return '';
  //   }
  //   return this.source[this.position - 1];
  // }

  private goBackToUntilChars(chars: string): void {
    const reversedChars = chars.split('').reverse().join('');
    outer: while (this.position >= 0) {
      for (let i = 0; i < reversedChars.length; i++) {
        if (this.source[this.position - i] !== reversedChars[i]) {
          this.position--;
          continue outer;
        }
      }
      break;
    }
    this.position++;
  }

  public goBackUntilEitherChar(
    chars: string[],
    skipQuotes: boolean,
    isReact: boolean
  ): boolean {
    const specialCharSet = new Set([...(isReact ? ['{', '}'] : [])]);
    while (this.position >= 0) {
      if (isReact) {
        if (specialCharSet.has(this.source[this.position])) {
          if (this.source[this.position] === '{') {
            return false;
          }
          if (this.source[this.position] === '}') {
            let stackSize = 1;
            while (--this.position > 0) {
              if (this.source[this.position] === '}') {
                stackSize++;
              } else if (this.source[this.position] === '{') {
                stackSize--;
                if (stackSize === 0) {
                  break;
                }
              }
            }
          }
        }
      }
      // don't go outside of matching tag pairs, e.g. don't go before `<!--` in `<!-- <but|ton> -->`
      outerForLoop1: for (const matchingTagPair of this
        .nonQuoteMatchingTagPairs) {
        for (let j = 0; j < matchingTagPair[0].length; j++) {
          if (
            matchingTagPair[0][matchingTagPair[0].length - 1 - j] !==
            this.source[this.position - j]
          ) {
            continue outerForLoop1;
          }
        }
        return false;
      }
      // skip matching tag pairs, e.g. skip '<!-- </button> -->' in '<button><!-- </button> --></button>'
      outerForLoop2: for (const matchingTagPair of this.matchingTagPairs) {
        for (let i = 0; i < matchingTagPair[1].length; i++) {
          if (
            matchingTagPair[1][matchingTagPair[1].length - 1 - i] !==
            this.source[this.position - i]
          ) {
            continue outerForLoop2;
          }
        }
        if (quotes.has(matchingTagPair[0])) {
          if (!skipQuotes) {
            this.goBack(1);
            return this.goBackUntilEitherChar(chars, skipQuotes, isReact);
          }
        }
        this.goBack(matchingTagPair[1].length); // e.g. go before `-->`
        this.goBackToUntilChars(matchingTagPair[0]); // e.g. go back until `<!--`
        this.goBack(matchingTagPair[0].length + 1); // e.g. go before `<!--`
        return this.goBackUntilEitherChar(chars, skipQuotes, isReact);
      }
      if (chars.includes(this.source[this.position])) {
        this.position++;
        return true;
      }
      this.position--;
    }
    return false;
  }
  
  public advanceUntilEitherChar(
    chars: string[],
    skipQuotes: boolean,
    isReact: boolean
  ): boolean {
    const specialCharSet = new Set([
      ...chars,
      ...this.matchingTagPairs.map(x => x[1][0]),
      ...this.matchingTagPairs.map(x => x[0][0]),
      ...(isReact ? ['{', '}'] : [])
    ]);
    while (this.position < this.source.length) {
      if (!specialCharSet.has(this.source[this.position])) {
        this.position++;
        continue;
      }
      if (isReact) {
        if (this.source[this.position] === '{') {
          let stackSize = 1;
          while (++this.position < this.source.length) {
            if (this.source[this.position] === '{') {
              stackSize++;
            } else if (this.source[this.position] === '}') {
              stackSize--;
              if (stackSize === 0) {
                this.position++;
                break;
              }
            }
          }
        } else if (this.source[this.position] === '}') {
          return false;
        }
      }
      // don't go outside of matching tag pair, e.g. don't go past `-->` in `<!-- <but|ton> -->`
      outerForLoop1: for (const matchingTagPair of this
        .nonQuoteMatchingTagPairs) {
        for (let j = 0; j < matchingTagPair[1].length; j++) {
          if (matchingTagPair[1][j] !== this.source[this.position + j]) {
            continue outerForLoop1;
          }
        }
        return false;
      }

      // skip matching tag pairs, e.g. skip '<!-- </button> -->' in '<button><!-- </button> --></button>'
      outerForLoop2: for (const matchingTagPair of this.matchingTagPairs) {
        for (let i = 0; i < matchingTagPair[0].length; i++) {
          if (matchingTagPair[0][i] !== this.source[this.position + i]) {
            continue outerForLoop2;
          }
        }
        if (quotes.has(matchingTagPair[0])) {
          if (!skipQuotes) {
            this.advance(1);
            return this.advanceUntilEitherChar(chars, skipQuotes, isReact);
          }
        }
        this.advance(matchingTagPair[0].length); // e.g. advance until after `<!--`
        this.advanceUntilChars(matchingTagPair[1]); // e.g. advance until `-->`
        this.advance(matchingTagPair[1].length); // e.g. advance until after `-->`
        return this.advanceUntilEitherChar(chars, skipQuotes, isReact);
      }
      if (chars.includes(this.source[this.position])) {
        return true;
      }
      this.position++;
    }
    return false;
  }

  public peekLeft(n: number = 0): string {
    return this.source[this.position - n];
  }

  public previousChars(n: number): string {
    return this.source.slice(this.position - n, this.position);
  }

  public peekRight(n: number = 0): string {
    return this.source[this.position + n] || '';
  }

  public advanceIfRegExp(regex: RegExp): string | undefined {
    const str = this.source.substr(this.position);
    const match = str.match(regex);
    if (match) {
      this.position = this.position + match.index! + match[0].length;
      return match[0];
    }
    return undefined;
  }

  private advanceUntilChars(ch: string): boolean {
    while (this.position + ch.length <= this.source.length) {
      let i = 0;
      while (i < ch.length && this.source[this.position + i] === ch[i]) {
        i++;
      }
      if (i === ch.length) {
        return true;
      }
      this.advance(1);
    }
    this.goToEnd();
    return false;
  }
}
```

## nonQuoteMatchingTagPairs：从`matchingTagPairs`数组中过滤出不具有引号字符的标签对

是从`matchingTagPairs`数组中过滤出不具有引号字符的标签对，并将它们存储在`nonQuoteMatchingTagPairs`数组中，以供后续的文本流处理使用。

`Set.has` 和 `Array.includes` 在功能上是类似的，它们都用于检查某个元素是否存在于集合中。然而，它们有一些不同之处，主要取决于它们操作的数据结构和使用场景：

1. **数据结构：**
   - `Set.has`: `Set` 是一种集合数据结构，它只存储唯一的值，不允许重复。在 `Set` 中，元素是无序的，没有索引，因此不能通过索引来访问元素。`Set.has` 方法用于检查集合中是否存在指定的元素。
   - `Array.includes`: `Array` 是一种动态数组，它是有序的，支持索引访问，允许重复元素。`Array.includes` 方法用于检查数组中是否存在指定的元素。
2. **查找性能：**
   - `Set.has`: 在 `Set` 中，查找某个元素的时间复杂度是常量时间（O(1)），无论集合中有多少元素，查找速度都相对恒定。
   - `Array.includes`: 在 `Array` 中，查找某个元素的时间复杂度是线性时间（O(n)），其中 n 是数组的长度。随着数组长度的增加，查找速度会线性增加。
3. **重复元素：**
   - `Set.has`: `Set` 中不允许重复的元素，每个元素都是唯一的。
   - `Array.includes`: `Array` 中允许包含重复的元素。

根据具体的使用场景和数据结构的需求，选择合适的方法。如果需要在一个集合中快速检查是否存在某个元素且不允许重复值，可以使用 `Set.has`。如果需要在一

## eos：检查当前处理的字符是否已经到达文本流的末尾

```ts
  /**
   * 检查当前处理的字符是否已经到达文本流的末尾
   * @returns 如果到达末尾，返回 true；否则，返回 false
   */
  public eos(): boolean {
    return this.length <= this.position;
  }
```

## getSource：获取处理的源字符串

```ts
  /**
   * 获取处理的源字符串
   * @returns 处理的源字符串
   */
  public getSource(): string {
    return this.source;
  }
```

## goTo：将当前处理的字符位置设置为指定的位置

```ts
  /**
   * 将当前处理的字符位置设置为指定的位置
   * @param position 要设置的位置
   */
  public goTo(position: number): void {
    this.position = position;
  }
```

## goBack：将当前处理的字符位置回退指定的步数

```ts
  /**
   * 将当前处理的字符位置回退指定的步数
   * @param n 要回退的步数
   */
  public goBack(n: number): void {
    this.position -= n;
  }
```

## advance：向前移动指定步数

```ts
  /**
   * 向前移动指定步数
   * @param n 要移动的步数
   */
  public advance(n: number): void {
    this.position += n;
  }
```

## goToEnd：将位置设置为源字符串的末尾

```ts
  /**
   * 将位置设置为源字符串的末尾
   */
  private goToEnd(): void {
    this.position = this.source.length;
  }
```

## goBackToUntilChars：当前处理位置回退，直到遇到指定的字符序列为止，并将当前处理位置移动到字符序列的下一个位置

```ts
/**
 * 当前处理位置回退，直到遇到指定的字符序列为止，并将当前处理位置移动到字符序列的下一个位置。
 * @param {string} chars - 要查找的字符序列
 */
private goBackToUntilChars(chars) {
  // 将要查找的字符序列 chars 反转，以便从后往前匹配字符序列
  const reversedChars = chars.split('').reverse().join('');

  outer: while (this.position >= 0) {
    // 逐个比较 reversedChars 中的字符和源字符串中对应位置的字符
    for (let i = 0; i < reversedChars.length; i++) {
      if (this.source[this.position - i] !== reversedChars[i]) {
        // 如果发现不匹配的字符，则将位置向后移动一步，并继续外层循环
        this.position--;
        continue outer;
      }
    }
    // 如果 reversedChars 中的所有字符都与源字符串中对应位置的字符匹配，则退出外层循环
    break;
  }

  // 将位置向前移动一步，使其位于字符序列的后面
  this.position++;
}
```

`outer:` 是 JavaScript 中的标签语法。在 JavaScript 中，可以使用标签（label）语法为代码块（通常是循环或条件语句）创建一个标识符，以便在特定情况下通过 `break` 或 `continue` 语句来跳出或跳过该代码块。

当 `continue outer;` 语句执行时，它会继续下一次 `outer` 标签标记的循环迭代（即 `while` 循环的下一次迭代），而不是默认情况下继续当前循环。类似地，`break outer;` 语句将会跳出 `outer` 标签标记的循环。

这种标签语法在某些情况下可以增加代码的灵活性，但过度使用标签语法可能会导致代码难以维护和理解，因此在使用标签时应谨慎考虑。在大多数情况下，使用普通的 `break` 和 `continue` 语句足以满足需求。

## goBackUntilEitherChar：在源字符串中后退，直到遇到指定字符集中的任意字符

```ts
/**
 * 在源字符串中后退，直到遇到指定字符集中的任意字符。
 *
 * @param {string[]} chars - 包含要匹配的特定字符集的字符串数组。
 * @param {boolean} skipQuotes - 是否跳过引号（引号内的字符）。
 * @param {boolean} isReact - 是否在React环境中运行。
 * @returns {boolean} - 如果在后退过程中遇到了指定字符集中的字符，则返回true；否则返回false。
 */
public goBackUntilEitherChar(chars, skipQuotes, isReact) {
  // 创建特殊字符集，如果当前环境是React，则只包含 '{' 和 '}'。
  const specialCharSet = new Set([...(isReact ? ['{', '}'] : [])]);

  // 使用while循环，从当前位置（this.position）开始倒序遍历源字符串（this.source）。
  while (this.position >= 0) {
    // 若当前环境是React并且当前字符是特殊字符，则根据情况处理花括号块，避免后退过多。
    if (isReact) {
      if (specialCharSet.has(this.source[this.position])) {
        if (this.source[this.position] === '{') {
          return false;
        }
        if (this.source[this.position] === '}') {
          let stackSize = 1;
          while (--this.position >= 0) {
            if (this.source[this.position] === '}') {
              stackSize++;
            } else if (this.source[this.position] === '{') {
              stackSize--;
              if (stackSize === 0) {
                break;
              }
            }
          }
        }
      }
    }

    // 检查是否在任何非引号标签对的范围内，以确保不会越过这些标签对的开始字符。
    outerForLoop1: for (const matchingTagPair of this.nonQuoteMatchingTagPairs) {
      for (let j = 0; j < matchingTagPair[0].length; j++) {
        if (
          matchingTagPair[0][matchingTagPair[0].length - 1 - j] !==
          this.source[this.position - j]
        ) {
          continue outerForLoop1;
        }
      }
      return false;
    }

    // 检查是否在任何引号标签对的范围内，若不跳过引号，则递归调用该函数处理引号内的内容。
    outerForLoop2: for (const matchingTagPair of this.matchingTagPairs) {
      for (let i = 0; i < matchingTagPair[1].length; i++) {
        if (
          matchingTagPair[1][matchingTagPair[1].length - 1 - i] !==
          this.source[this.position - i]
        ) {
          continue outerForLoop2;
        }
      }
      if (quotes.has(matchingTagPair[0])) {
        if (!skipQuotes) {
          this.goBack(1);
          return this.goBackUntilEitherChar(chars, skipQuotes, isReact);
        }
      }
      this.goBack(matchingTagPair[1].length); // e.g. go before `-->`
      this.goBackToUntilChars(matchingTagPair[0]); // e.g. go back until `<!--`
      this.goBack(matchingTagPair[0].length + 1); // e.g. go before `<!--`
      return this.goBackUntilEitherChar(chars, skipQuotes, isReact);
    }

    // 若当前字符在传入的chars数组中，返回true，并使this.position后退1以在上层调用中正确处理该字符。
    if (chars.includes(this.source[this.position])) {
      this.position++;
      return true;
    }

    // 继续后退。
    this.position--;
  }

  // 整个源字符串遍历完毕仍未找到任何特定字符，返回false。
  return false;
}
```

## advanceUntilEitherChar：在源字符串中前进，直到遇到指定字符集中的任意字符

```ts
/**
 * 在源字符串中前进，直到遇到指定字符集中的任意字符。
 *
 * @param {string[]} chars - 包含要匹配的特定字符集的字符串数组。
 * @param {boolean} skipQuotes - 是否跳过引号（引号内的字符）。
 * @param {boolean} isReact - 是否在React环境中运行。
 * @returns {boolean} - 如果在前进过程中遇到了指定字符集中的字符，则返回true；否则返回false。
 */
public advanceUntilEitherChar(chars, skipQuotes, isReact) {
  // 创建特殊字符集，包含传入的chars数组中的所有字符以及匹配的标签对的首字符（对于React环境还包括 '{' 和 '}'）。
  const specialCharSet = new Set([
    ...chars,
    ...this.matchingTagPairs.map(x => x[1][0]),
    ...this.matchingTagPairs.map(x => x[0][0]),
    ...(isReact ? ['{', '}'] : [])
  ]);

  // 使用while循环，从当前位置（this.position）开始遍历源字符串（this.source）。
  while (this.position < this.source.length) {
    // 若当前位置的字符不在特殊字符集中，就继续前进。
    if (!specialCharSet.has(this.source[this.position])) {
      this.position++;
      continue;
    }

    // 若当前环境是React并且当前字符为 '{'，则进入一个嵌套的while循环，找到对应的'}'，确保能正确处理React中的花括号块。
    if (isReact) {
      if (this.source[this.position] === '{') {
        let stackSize = 1;
        while (++this.position < this.source.length) {
          if (this.source[this.position] === '{') {
            stackSize++;
          } else if (this.source[this.position] === '}') {
            stackSize--;
            if (stackSize === 0) {
              this.position++;
              break;
            }
          }
        }
      } else if (this.source[this.position] === '}') {
        return false;
      }
    }

    // 检查是否在任何非引号标签对的范围内，以确保不会越过这些标签对的结束字符。
    outerForLoop1: for (const matchingTagPair of this.nonQuoteMatchingTagPairs) {
      for (let j = 0; j < matchingTagPair[1].length; j++) {
        if (matchingTagPair[1][j] !== this.source[this.position + j]) {
          continue outerForLoop1;
        }
      }
      return false;
    }

    // 检查是否在任何引号标签对的范围内，若不跳过引号，则递归调用该函数处理引号内的内容。
    outerForLoop2: for (const matchingTagPair of this.matchingTagPairs) {
      for (let i = 0; i < matchingTagPair[0].length; i++) {
        if (matchingTagPair[0][i] !== this.source[this.position + i]) {
          continue outerForLoop2;
        }
      }
      if (quotes.has(matchingTagPair[0])) {
        if (!skipQuotes) {
          this.advance(1);
          return this.advanceUntilEitherChar(chars, skipQuotes, isReact);
        }
      }
      this.advance(matchingTagPair[0].length); // e.g. advance until after `<!--`
      this.advanceUntilChars(matchingTagPair[1]); // e.g. advance until `-->`
      this.advance(matchingTagPair[1].length); // e.g. advance until after `-->`
      return this.advanceUntilEitherChar(chars, skipQuotes, isReact);
    }

    // 若当前字符在传入的chars数组中，返回true。
    if (chars.includes(this.source[this.position])) {
      return true;
    }

    // 继续前进。
    this.position++;
  }

  // 整个源字符串遍历完毕仍未找到任何特定字符，返回false。
  return false;
}
```

## peekLeft：获取源字符串中当前位置向前数 `n` 个字符的字符

```ts
  /**
   * 获取源字符串中当前位置向前数 `n` 个字符的字符
   * @param n 字符数
   * @returns 源字符串中当前位置向前数 `n` 个字符的字符
   */
  public peekLeft(n: number = 0): string {
    return this.source[this.position - n];
  }
```

## previousChars：获取当前位置前的指定长度的字符串

```ts
  /**
   * 获取当前位置之前的指定长度的字符串
   * @param n 指定长度
   * @returns 当前位置之前的指定长度的字符串
   */
  public previousChars(n: number): string {
    return this.source.slice(this.position - n, this.position);
  }
```

## peekRight：获取源字符串中当前位置向后数 `n` 个字符的字符

```ts
  /**
   * 获取源字符串中当前位置向后数 `n` 个字符的字符
   * @param n 字符数
   * @returns 源字符串中当前位置向后数 `n` 个字符的字符
   */
  public peekRight(n: number = 0): string {
    return this.source[this.position + n] || '';
  }
```

## advanceIfRegExp：如果当前位置开始的字符串匹配给定的正则表达式，则向前移动

```ts
  /**
   * 如果当前位置开始的字符串匹配给定的正则表达式，则向前移动
   * @param regex 要匹配的正则表达式
   * @returns 如果匹配成功，则返回匹配的字符串，否则返回undefined
   */
  public advanceIfRegExp(regex: RegExp): string | undefined {
    // 从 position 索引开始一直提取到 source 字符串的末尾
    const str = this.source.substr(this.position);
    const match = str.match(regex);
    if (match) {
      // match.index 表示匹配到的子字符串在原始字符串中的起始索引。! 是 TypeScript 中的非空断言操作符，它表示确保 match.index 不是 null 或 undefined。match[0] 表示匹配到的完整子字符串
      this.position = this.position + match.index! + match[0].length;
      return match[0];
    }
    return undefined;
  }
```

## advanceUntilChars：向前移动，直到匹配到指定的字符串为止

```ts
/**
   * 向前移动，直到匹配到指定的字符串为止
   * @param ch 指定的字符串
   * @returns 如果成功匹配到指定字符串，则返回true，否则返回false
   */
  private advanceUntilChars(ch: string): boolean {
    while (this.position + ch.length <= this.source.length) {
      let i = 0;
      // i < ch.length的作用是确保this.source[this.position + i]不会越界
      while (i < ch.length && this.source[this.position + i] === ch[i]) {
        i++;
      }
      if (i === ch.length) {
        return true;
      }
      // 不匹配则比较下一个字符
      this.advance(1);
    }
    // 整个源字符串都未匹配到，将位置设置为源字符串的末尾，并返回false
    this.goToEnd();
    return false;
  }
```

