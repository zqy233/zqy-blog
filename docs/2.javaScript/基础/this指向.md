## this用法

`this`是 JavaScript 语言的一个关键字。

它是函数运行时，在函数体内部自动生成的一个对象，只能在函数体内部使用。

```js
function test() {
　this.x = 1;
}
```

上面代码中，函数`test`运行时，内部会自动有一个`this`对象可以使用。

那么，`this`的值是什么呢？

函数的不同使用场合，`this`有不同的值。总的来说，`this`就是函数运行时所在的环境对象。下面分四种情况，详细讨论`this`的用法。

**情况一：纯粹的函数调用**

这是函数的最通常用法，属于全局性调用，因此`this`就代表全局对象。请看下面这段代码，它的运行结果是1。

```js
var x = 1;
function test() {
   console.log(this.x);
}
test();  // 1
```

**情况二：作为对象方法的调用**

函数还可以作为某个对象的方法调用，这时`this`就指这个上级对象。

```js
function test() {
  console.log(this.x);
}

var obj = {};
obj.x = 1;
obj.m = test;

obj.m(); // 1
```

**情况三 作为构造函数调用**

所谓构造函数，就是通过这个函数，可以生成一个新对象。这时，`this`就指这个新对象。

```js
function test() {
  this.x = 1;
}

var obj = new test();
console.log(obj.x); // 1
```

运行结果为1。为了表明这时this不是全局对象，我们对代码做一些改变：

```js
var x = 2;
function test() {
  this.x = 1;
}

var obj = new test();
console.log(x);  // 2
```

运行结果为2，表明全局变量`x`的值根本没变。

**情况四 apply 调用**

`apply()`是函数的一个方法，作用是改变函数的调用对象。它的第一个参数就表示改变后的调用这个函数的对象。因此，这时`this`指的就是这第一个参数。

```js
var x = 0;
function test() {
　console.log(this.x);
}

var obj = {};
obj.x = 1;
obj.m = test;
obj.m.apply() // 0
```

`apply()`的参数为空时，默认调用全局对象。因此，这时的运行结果为`0`，证明`this`指的是全局对象。

如果把最后一行代码修改为

```js
obj.m.apply(obj); //1
```

运行结果就变成了`1`，证明了这时`this`代表的是对象`obj`

## this原理

### 一、问题的由来

学懂 JavaScript 语言，一个标志就是理解下面两种写法，可能有不一样的结果。

```js
var obj = {
  foo: function () {}
};

var foo = obj.foo;

// 写法一
obj.foo()

// 写法二
foo()
```

上面代码中，虽然`obj.foo`和`foo`指向同一个函数，但是执行结果可能不一样。请看下面的例子

```js
var obj = {
  foo: function () { console.log(this.bar) },
  bar: 1
};

var foo = obj.foo;
var bar = 2;

obj.foo() // 1
foo() // 2
```

这种差异的原因，就在于函数体内部使用了`this`关键字。很多教科书会告诉你，`this`指的是函数运行时所在的环境。对于`obj.foo()`来说，`foo`运行在`obj`环境，所以`this`指向`obj`；对于`foo()`来说，`foo`运行在全局环境，所以`this`指向全局环境。所以，两者的运行结果不一样。

这种解释没错，但是教科书往往不告诉你，为什么会这样？也就是说，函数的运行环境到底是怎么决定的？举例来说，为什么`obj.foo()`就是在`obj`环境执行，而一旦`var foo = obj.foo`，`foo()`就变成在全局环境执行？

本文就来解释 JavaScript 这样处理的原理。理解了这一点，你就会彻底理解`this`的作用。

### 二、内存的数据结构

JavaScript 语言之所以有`this`的设计，跟内存里面的数据结构有关系。

```js
var obj = { foo:  5 };
```

上面的代码将一个对象赋值给变量`obj`。JavaScript 引擎会先在内存里面，生成一个对象`{ foo: 5 }`，然后把这个对象的内存地址赋值给变量`obj`。

也就是说，变量`obj`是一个地址（reference）。后面如果要读取`obj.foo`，引擎先从`obj`拿到内存地址，然后再从该地址读出原始的对象，返回它的`foo`属性。

原始的对象以字典结构保存，每一个属性名都对应一个属性描述对象。举例来说，上面例子的`foo`属性，实际上是以下面的形式保存的。

```js
{
  foo: {
    [[value]]: 5
    [[writable]]: true
    [[enumerable]]: true
    [[configurable]]: true
  }
}
```

注意，`foo`属性的值保存在属性描述对象的`value`属性里面。

### 三、函数

这样的结构是很清晰的，问题在于属性的值可能是一个函数

```js
var obj = { foo: function () {} };
```

这时，引擎会将函数单独保存在内存中，然后再将函数的地址赋值给`foo`属性的`value`属性。

```js
{
  foo: {
    [[value]]: 函数的地址
    ...
  }
}
```

由于函数是一个单独的值，所以它可以在不同的环境（上下文）执行。

```js
var f = function () {};
var obj = { f: f };

// 单独执行
f()

// obj 环境执行
obj.f()
```

### 四、环境变量

JavaScript 允许在函数体内部，引用当前环境的其他变量。

```js
var f = function () {
  console.log(x);
};
```

上面代码中，函数体里面使用了变量`x`。该变量由运行环境提供。

现在问题就来了，由于函数可以在不同的运行环境执行，所以需要有一种机制，能够在函数体内部获得当前的运行环境（context）。所以，`this`就出现了，它的设计目的就是在函数体内部，指代函数当前的运行环境。

```js
var f = function () {
  console.log(this.x);
}
```

上面代码中，函数体里面的`this.x`就是指当前运行环境的`x`

```js
var f = function () {
  console.log(this.x);
}

var x = 1;
var obj = {
  f: f,
  x: 2,
};

// 单独执行
f() // 1

// obj 环境执行
obj.f() // 2
```

上面代码中，函数`f`在全局环境执行，`this.x`指向全局环境的`x`。

在`obj`环境执行，`this.x`指向`obj.x`。

回到本文开头提出的问题，`obj.foo()`是通过`obj`找到`foo`，所以就是在`obj`环境执行。一旦`var foo = obj.foo`，变量`foo`就直接指向函数本身，所以`foo()`就变成在全局环境执行。

## 定义

函数的 `this` 关键字在 `JavaScript` 中的表现略有不同，此外，在严格模式和非严格模式之间也会有一些差别

在绝大多数情况下，函数的调用方式决定了 `this` 的值（运行时绑定）

`this` 关键字是函数运行时自动生成的一个内部对象，只能在函数内部使用，总指向调用它的对象

举个例子：

```js
function baz() {
    // 当前调用栈是：baz
    // 因此，当前调用位置是全局作用域
    
    console.log( "baz" );
    bar(); // <-- bar的调用位置
}

function bar() {
    // 当前调用栈是：baz --> bar
    // 因此，当前调用位置在baz中
    
    console.log( "bar" );
    foo(); // <-- foo的调用位置
}

function foo() {
    // 当前调用栈是：baz --> bar --> foo
    // 因此，当前调用位置在bar中
    
    console.log( "foo" );
}

baz(); // <-- baz的调用位置
```

同时，`this`在函数执行过程中，`this`一旦被确定了，就不可以再更改

```js
var a = 10;
var obj = {
  a: 20
}

function fn() {
  this = obj; // 修改this，运行后会报错
  console.log(this.a);
}

fn();
```

## 箭头函数

在 ES6 的语法中还提供了箭头函语法，让我们在代码书写时就能确定 `this` 的指向（编译时绑定）

举个例子：

```js
const obj = {
  sayThis: () => {
    console.log(this);
  }
};

obj.sayThis(); // window 因为 JavaScript 没有块作用域，所以在定义 sayThis 的时候，里面的 this 就绑到 window 上去了
const globalSay = obj.sayThis;
globalSay(); // window 浏览器中的 global 对象
```

虽然箭头函数的`this`能够在编译的时候就确定了`this`的指向，但也需要注意一些潜在的坑

下面举个例子：

绑定事件监听

```js
const button = document.getElementById('mngb');
button.addEventListener('click', ()=> {
    console.log(this === window) // true
    this.innerHTML = 'clicked button'
})
```

上述可以看到，我们其实是想要`this`为点击的`button`，但此时`this`指向了`window`

包括在原型上添加方法时候，此时`this`指向`window`

```js
Cat.prototype.sayName = () => {
    console.log(this === window) //true
    return this.name
}
const cat = new Cat('mm');
cat.sayName()
```

同样的，箭头函数不能作为构建函数