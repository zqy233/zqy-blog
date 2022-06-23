# ES6

## 函数

- 只有一个参数时可省略括号
- 函数内只有一行代码时可省略{}和 return
- 如果有{}则必须有 return

```js
const b = (a) => {
  //完整形式
  return a
}
const c = (a) => a //简化模式
```

## ES6拼接语法

```js
`数据${data}`
```

## ES6-symbol

symbol 不支持语法："`new Symbol()`"。围绕原始数据类型创建一个显式包装器对象从 ECMAScript 6 开始不再被支持。 然而，现有的原始包装器对象，如 `new Boolean`、`new String`以及`new Number`，因为遗留原因仍可被创建。所以想创建一个 Symbol 对象，可以通过 object()函数来包装。

直接使用 Symbol()传参后不会转换参数为 symbol 类型而是新建一个 symbol 类型， 使用 [`Symbol.for()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for) 方法和 [`Symbol.keyFor()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor) 方法从全局的 symbol 注册表设置和取得 symbol。

[`Object.getOwnPropertySymbols()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols) 方法让你在查找一个给定对象的符号属性时返回一个 symbol 类型的数组。注意，每个初始化的对象都是没有自己的 symbol 属性的，因此这个数组可能为空，除非你已经在对象上设置了 symbol 属性。

## ES6-BigInt

是一种内置对象，它提供了一种方法来表示大于 `253 - 1` 的整数。这原本是 Javascript 中可以用 [`Number`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number) 表示的最大数字。**`BigInt`** 可以表示任意大的整数。

不能用于 [`Math`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math) 对象中的方法；不能和任何 [`Number`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number) 实例混合运算，两者必须转换成同一种类型。在两种类型来回转换时要小心，因为 `BigInt` 变量在转换成 [`Number`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number) 变量时可能会丢失精度。

`BigInt` 和 [`Number`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number) 不是严格相等的，但是宽松相等的。 === false == true

## ES6-const/let

先来了解一下 var 的规则，在 function 内部， 加 var 的是局部变量， 不加 var 的则是全局变量，在 function 外部， 不管有没有使用 var 声明变量，都是全局变量

举个栗子：

局部变量

```js
function a() {
  var b = 1
}
a()
console.log(b) // 报错 b is not defined
```

全局变量

```js
function a() {
  b = 1
}
a()
console.log(b) // 1
```

var 的缺陷:

- 希望是局部变量的变量外部却可以访问到
- for 循环指向的都是同一个变量
- 可以重复定义

```js
for (var i = 0; i < 10; i++) {
  var a = 1
}
console.log(i) // 10
console.log(a) // 1
```

```js
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i) //3 3 3
  })
}
```

```js
var a = 1
var a = 2
console.log(a) // 2
```

使用 let 后

```js
for (let i = 0; i < 10; i++) {
  let a = 1
}
console.log(i) // 报错 i is not defined
console.log(a) // 上一步报错，执行不到这一步
```

```js
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i) // 0 1 2
  })
}
```

const 常量 let 变量

优点：

- 声明的变量拥有块级作用域
- 如 for 循环等在每次循环时都创建新的绑定
- 不可以重复定义

声明的全局变量不是全局对象的属性，不存在 window 对象上，而是一个不可见的块作用域中

const 定义原始类型的时候，这个变量是不可以改变的；定义引用类型的时候，指的是当前变量的指针不可以更改，与对象内部的值是否更改无关

## ES6-箭头函数

箭头函数只有一个参数时可以省略（），函数内只有一行代码时可以省略{ } ，同时可以省略 return

注意！有{ } 时，不能省略 return，否则返回空，有 return 时，不能省略 { }，否则直接报错

## ES6-拓展运算符(对象展开符)

展开对象

```js
const obj1 = { name: '周', age: 23 }
const obj2 = {
  ...obj1,
  sex: '男'
}
console.log(obj2) // { name: '周', age: 23, sex: '男' }
```

函数传参

```js
const numbers = [1, 2]
function push(array, ...numbers) {
  array.push(...numbers)
  return array
}
const array = [0]
console.log(push(array, ...numbers)) // [ 0, 1, 2 ]
function add(x, y) {
  return x + y
}
console.log(add(...numbers)) // 3
```

展开数组

```js
console.log(...[1, 2, 3])
// 1 2 3
console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5
```

字符串拆为数组

```js
console.log([...'hello']) // [ "h", "e", "l", "l", "o" ]
```

## ES6-for ... in/for ... of

i 是数组的索引，可以根据索引取值

```js
const a = [{ A: 1 }, { B: 2 }, { C: 3 }]
for (let i in a) console.log(a[i]) //{A:1},{B:2},{C:3}
```

i of 是数据元素

```js
const a = [{ A: 1 }, { B: 2 }, { C: 3 }]
for (let i of a) console.log(i) //{A:1},{B:2},{C:3}
```

## ES6--Promise.all

同时执行接口请求

```js
 async getCode() {
      const res = await Promise.all([getCode("post", { code: "BUSINESS_TYPR" }, "json"), getCode("post", { code: "ROLE_TYPR" }, "json")])
```

