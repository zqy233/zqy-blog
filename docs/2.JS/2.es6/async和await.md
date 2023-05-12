# async和await

`async` 是异步的意思，`await`则可以理解为 `async wait`。所以可以理解`async`就是用来声明一个异步方法，而 `await`是用来等待异步方法执行

## async

`async`函数返回一个`promise`对象，下面两种方法是等效的

```js
function f() {
    return Promise.resolve('TEST');
}

// asyncF is equivalent to f!
async function asyncF() {
    return 'TEST';
}
```

不管`await`后面跟着的是什么，`await`都会阻塞后面的代码

```js
async function fn1 (){
    console.log(1)
    await fn2()
    console.log(2) // 阻塞
}

async function fn2 (){
    console.log('fn2')
}

fn1()
console.log(3)
```

上面的例子中，`await` 会阻塞下面的代码（即加入微任务队列），先执行 `async`外面的同步代码，同步代码执行完，再回到 `async` 函数中，再执行之前阻塞的代码

微任务的角度来看，异步函数中的 `await` 关键字会将 `await` 之后的代码封装为微任务，并将其加入微任务队列中，等待主线程执行完当前任务之后，再依次执行微任务队列中的任务。

因此，执行顺序如下：

1. 执行 `fn1()` 函数，输出 `1`，遇到 `await fn2()`，将 `console.log('fn2')` 封装为微任务。
2. 执行 `fn2()` 函数，输出 `fn2`。
3. 执行 `console.log(3)`，输出 `3`。
4. 执行微任务 `fn1()` 中 `await` 之后的代码，输出 `2`。

输出结果为：`1`，`fn2`，`3`，`2`

## async返回值

`async` 函数的返回值是一个 Promise 对象。当函数内部有明确的 `return` 语句时，该返回值将成为 Promise 的 resolved 值；如果没有明确的 `return` 语句，该 Promise 的 resolved 值将会是 undefined。

```js
async function asyncFunction() {
  console.log(await asyncFunction2()); // 1
}

async function asyncFunction2() {
  return 1;
}
```

```js
async function asyncFunction() {
  console.log(await asyncFunction2()); // unde
}

async function asyncFunction2() {
}
```

### async函数中返回异步函数的值

```js
async function asyncFunction1() {
  let a = 1;
  setTimeout(() => {
    a = 2;
  }, 200);
  return a;
}
```

在这个例子中，虽然我们在 setTimeout 中将 a 的值更改为 20，但是由于 setTimeout 是一个异步函数，它会在 200 毫秒后才会被调用。在此之前，asyncFunction1 已经在 200 毫秒之内返回了一个 Promise，Promise 的值是 a 的初始值 1，而不是更改后的值 2。

如果我们想要 asyncFunction1 的结果为更改后的值，可以将 setTimeout 包装成一个 Promise 并在其中返回一个新的值，然后在 asyncFunction1 中使用 await 等待 Promise 的完成，例如：

```js
async function asyncFunction1() {
  let a = 1;
  await new Promise(resolve => setTimeout(() => {
    a = 2;
    resolve();
  }, 200));
  return a;
}
```

