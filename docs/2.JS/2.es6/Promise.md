# Promise

> Promises属于es6规范，是异步编程新的解决方案（旧方案是使用回调函数）
>
> 从语法上来说，Promises是一个构造函数，从功能上讲，用于表示一个异步操作的最终完成（或失败）及其结果值
>
> Promises使得异步方法可以像同步方法那样返回值：异步方法并不会立即返回最终的值，而是会返回一个Promises，以便在未来某个时候把值交给使用者
>

## 为什么使用Promise

### 常见异步操作

- fs 文件操作

  ```js
  require("fs").readFile("./index.html",(err,data)=>{})
  ```

- ajax

  ```js
  axios.get('/api',(data)=>{})
  ```

- 定时器

  ```js
  setTimeout(()=>{},2000)
  ```

### 回调的缺点

- 必须在启动异步任务前指定回调函数
- 会出现回调地狱，回调函数嵌套调用，外部回调函数异步执行的结果是嵌套的回调执行的条件，回调地狱的情况下代码不易于阅读，不便于异常处理

### Promise的优点

- 指定回调函数的方式更加灵活，启动异步任务，返回promise，给promise绑定异步函数
- 支持链式调用，可以解决回调地狱问题

## new Promise

Promise接收一个函数，这个函数具有两个参数，这两个参数都是函数，一般通用规范命名为resolve和reject

Promise异步执行这个函数，执行成功调用resolve函数，执行失败调用reject函数

一个 `Promise` 必然处于以下几种状态之一：

- *待定（pending）*：初始状态，既没有被兑现，也没有被拒绝
- *已兑现（fulfilled）*：意味着操作成功完成
- *已拒绝（rejected）*：意味着操作失败

```js
new Promise((resolve, reject) => {
  console.log("初始化")
  resolve()
}).then(function (result) {
    console.log('成功：' + result);
}).catch(function (reason) {
    console.log('失败：' + reason);
});
```

### 多个异步任务

Promise还可以做更多的事情，比如，有若干个异步任务，需要先做任务1，如果成功后再做任务2，任何任务失败则不再继续并执行错误处理函数。

要串行执行这样的异步任务，不用Promise需要写一层一层的嵌套代码。有了Promise，我们只需要简单地写：

```js
job1.then(job2).then(job3).catch(handleError)
```

## Promise.prototype.then()

返回一个 Promise。它最多需要有两个参数：Promise 的成功和失败情况的回调函数

```js
const promise1 = new Promise((resolve, reject) => {
  resolve('Success!')
});

promise1.then((value) => {
  console.log(value)
  // "Success!"
});
```

### 参数

- `onFulfilled` 可选

  当 Promise 变成接受状态（fulfilled）时调用的[`函数`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)。该函数有一个参数，即接受的最终结果（the fulfillment value）。如果该参数不是函数，则会在内部被替换为 `(x) => x`，即原样返回 promise 最终结果的函数

- `onRejected` 可选

  当 Promise 变成拒绝状态（rejected）时调用的[`函数`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)。该函数有一个参数，即拒绝的原因（`rejection reason`）。如果该参数不是函数，则会在内部被替换为一个 "Thrower" 函数 (it throws an error it received as argument)

```js
new Promise((resolve, reject) => {
  console.log("初始化")
  resolve("成功了")
  reject("失败了")
})
  .then(() => {
    throw new Error("有哪里不对了")
    console.log("执行「这个」”")
  })
  .catch(() => {
    console.log("执行「那个」")
  })
  .then(() => {
    console.log("执行「这个」，无论前面发生了什么")
  })

  console.log(a);
```

## Promise.catch

**catch()** 方法返回一个[Promise (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)，并且处理拒绝的情况。等同于调用[`Promise.prototype.then(undefined, onRejected)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) 

参数

- **onRejected**

  当 Promise 被 rejected 时，被调用的一个[`Function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)。 该函数拥有一个参数：`reason` rejection 的原因。如果 `onRejected` 抛出一个错误或返回一个本身失败的 Promise ， 通过 `catch()` 返回的 Promise 被 rejected；否则，它将显示为成功（resolved）

返回值

一个[`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Promise.resolve

### 参数

value

将被 Promise 对象解析的参数，也可以是一个Promise 对象，或者是一个 thenable。

### 返回值

返回一个带着给定值解析过的 Promise 对象，如果参数本身就是一个 Promise 对象，则直接返回这个 Promise 对象

```js
const promise1 = Promise.resolve(123);

promise1.then((value) => {
  console.log(value);
  // expected output: 123
});

```

## Promise.reject

返回一个带有拒绝原因的 `Promise` 对象

```js
function resolved() {
    //不会被调用
}
function rejected(error) {
  console.error(error);
}
Promise.reject(new Error('fail')).then(resolved, rejected) // [Error: fail]
```

```js
Promise.reject(new Error("fail")).then(
  function () {
    //不会被调用
  },
  function (error) {
    console.error(error) // [Error: fail]
  }
)
```

## Promise.prototype.finally

`finally` 方法返回一个 [`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。在 promise 结束时，无论结果是 fulfilled 或者是 rejected，都会执行指定的回调函数。这为在 `Promise` 是否成功完成后都需要执行的代码提供了一种方式

这避免了同样的语句需要在 [`then()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) 和 [`catch()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) 中各写一次的情况

## Promise.race

`Promise.race(iterable)`方法返回一个promise，第一个改变状态的promise的结果状态就是最终的结果状态

## Promise.finally

`finally`方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的

## 链式调用

有了执行函数，我们就可以用一个Promise对象来执行它，并在将来某个时刻获得成功或失败的结果

上一个promise调用resolve会触发then方法，上一个promise调用reject会触发catch方法

因为 `Promise.prototype.then` 和 `Promise.prototype.catch` 方法返回的是 promise，所以它们可以被链式调用。

## Promise.all

用于并行执行异步任务

试想一个页面聊天系统，我们需要请求两个不同的接口分别获得用户的个人信息和好友列表，这两个任务是可以并行执行的，实现如下：

```js
var p1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, 'P1');
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 600, 'P2');
});
// 同时执行p1和p2，并在它们都完成后执行then:
Promise.all([p1, p2]).then(function (results) {
    console.log(results); // 获得一个Array: ['P1', 'P2']
});
```

### 假如promise.all中有五个异步函数 ，第二个错误了，第三个还会执行吗

如果其中一个函数执行失败（即返回一个 rejected 状态的 Promise），那么整个 `Promise.all` 将会直接进入 rejected 状态并返回该失败的 Promise 对象，同时剩余的未完成的 Promise 都会被取消。因此，第三个异步函数不会执行

Promise.all会在其中任何一个`reject`时立即结束，也就是一个请求失败了就不能进行其余正确的请求了

### 请求失败不影响其他正确异步

解决方案：map的每一项都是promise，catch方法返回值会被promise.reslove()包裹，这样传进promise.all的数据都是resolved状态的

```js
Promise.all([Promise.reject({ code: 500, msg: "服务异常" }), Promise.resolve({ code: 200, list: [] }), Promise.resolve({ code: 200, list: [] })].map(p => p.catch(e => e)))
  .then(res => {
    console.log("res=>", res)
  })
  .catch(error => {
    console.log("error=>", error)
  })

console.log(Promise.reject({ code: 500, msg: "服务异常" }).catch(e => e)); // Promise { <pending> }
```

### 自行实现

```js
function myAll(arr) {
  let length = arr.length; // 先获取传入的数组的长度
  let currentCount = 0; // 记录当前执行的下标
  let results = []; // 存储返回结果
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i]).then((res) => {
        results[i] = res; // 存储在results中，下标加一
        currentCount++;
        // 如果执行完全部，返回结果
        if (currentCount === length) {
          resolve(results)
        }
      }).catch((err) => {
        reject(err) // 如果其中一个执行失败，直接reject
      })
    }
    // 如果传入空数组，直接return results
    if(length === 0) {
      resolve(results)
    }
  })
}
```

### 改写

```js
function myAll(arr) {
  let length = arr.length; // 先获取传入的数组的长度
  let currentCount = 0; // 记录当前执行的下标
  let results = []; // 存储返回结果
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i]).then((res) => {
        results[i] = res; // 存储在results中
      }).catch((err) => {
        results[i] = false; // 改动：如果其中一个执行失败，返回一个false
      }).finally(() => {
        currentCount++; // 无论成功或失败，下标都加一
        if (currentCount === length) {
          resolve(results)
        }
      })
    }
    // 如果传入空数组，直接return results
    if(length === 0) {
      resolve(results)
    }
  })
```

## Promise.allSettled

该`Promise.allSettled()`方法返回一个在所有给定的 promise 都已经`fulfilled`或`rejected`后的 promise，并带有一个对象数组，每个对象表示对应的 promise 结果

当您有多个彼此不依赖的异步任务成功完成时，或者您总是想知道每个`promise`的结果时，通常使用它

相比之下，`Promise.all()` 更适合彼此相互依赖或者在其中任何一个`reject`时立即结束

## 中断promise

返回一个状态为pending的promise

```js
let p = new Promise((resolve, regect) => {
  resolve(1)
})
p.then(value => {
  console.log(2);
  return new Promise(() => {
  })
}).then(() => {
  console.log(3);

}).then(() => {
  console.log(4);
}).catch(()=>{
  console.log("err");
})
```

## Promise 是用来管理异步编程的，它本身不是异步的

new Promise的时候会立即把executor函数执行，只不过我们一般会在executor函数中处理一个异步操作。例如下面一段代码：

```js
let firstPromise = new Promise(()=>{
    setTimeout(()=>{
      console.log(1)
    },1000)
    console.log(2)
  })
console.log(3) // 2 3 1
```

### Promise 采用了回调函数延迟绑定技术

在执行 resolve 函数的时候，回调函数还没有绑定，那么只能推迟回调函数的执行。这具体是啥意思呢？我们先来看下面的例子：

```js
let p1 = new Promise((resolve,reject)=>{
  console.log(1);
  resolve('浪里行舟')
  console.log(2)
})
// then:设置成功或者失败后处理的方法
p1.then(result=>{
 //p1延迟绑定回调函数
  console.log('成功 '+result)
},reason=>{
  console.log('失败 '+reason)
})
console.log(3)
// 1
// 2
// 3
// 成功 浪里行舟
```

new Promise的时候先执行executor函数，打印出 1、2，Promise在执行resolve时，触发微任务，还是继续往下执行同步任务， 执行p1.then时，存储起来两个函数（此时这两个函数还没有执行）,然后打印出3，此时同步任务执行完成，最后执行刚刚那个微任务，从而执行.then中成功的方法

## promise与async/await

在JavaScript中，Promise是一种用于处理异步操作的机制。它是一个表示操作的未来结果的对象，这个对象可能会被解决（resolved）或者被拒绝（rejected）。

当我们创建一个Promise时，它会立即处于pending状态。我们可以通过调用Promise实例的resolve和reject方法，将其从pending状态转换为resolved或rejected状态。

resolve方法会将Promise从pending状态转换为resolved状态，并将解决结果作为参数传递给then方法的回调函数。这表示异步操作已经成功完成并返回了一个值。

例如，下面的代码创建了一个Promise，然后在1秒后使用resolve方法将其解决：

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Operation completed successfully!");
  }, 1000);
});

myPromise.then((result) => {
  console.log(result); // "Operation completed successfully!"
});
```

reject方法会将Promise从pending状态转换为rejected状态，并将错误信息作为参数传递给catch方法的回调函数。这表示异步操作发生了错误并返回了一个错误对象。

例如，下面的代码创建了一个Promise，然后立即使用reject方法将其拒绝：

```js
const myPromise = new Promise((resolve, reject) => {
  reject(new Error("Operation failed!"));
});

myPromise.catch((error) => {
  console.error(error); // Error: Operation failed!
});
```

总之，Promise对象的resolve方法表示异步操作已成功完成并返回了一个值，而reject方法表示异步操作发生了错误并返回了一个错误对象。

### 使用async/await

需要使用try/catch接受异步操作生的错误和一个错误对象

```js
const myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Operation completed successfully!");
      // reject("Operation completed err!");
    }, 1000);
  });
};

async function asyncFunction() {
  try {
    const res = await myPromise();
    console.log(res); // Operation completed successfully!
  } catch (err) {
    console.log(err);
  }
}

asyncFunction();
```

```js
const myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Operation completed successfully!");
      reject("Operation completed err!");
    }, 1000);
  });
};

async function asyncFunction() {
  try {
    const res = await myPromise();
    console.log(res); 
  } catch (err) {
    console.log(err); // Operation completed successfully!
  }
}

asyncFunction();
```

## async函数返回值

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

## 为什么resolve后面的代码还会执行

```js
async function asyncFunction1() {
  let a = 1;
  await new Promise((resolve)=>{
    setTimeout(() => {
      resolve()
      a = 100; 
      console.log(a); // 100
    }, 200);
  })
  return a;
}
async function asyncFunction2() {
  const res = await asyncFunction1();
  console.log(res); // 100
}

asyncFunction2()
```

而Promise实例本身是同步执行的，会直接返回一个pending状态的Promise对象。之后，异步操作会被推到宏任务队列中等待执行。

这是因为在 `asyncFunction1()` 中，`setTimeout()` 是一个异步操作，它会在200ms后才会执行其中的回调函数。当 `await` 等待 `Promise` 对象被 `resolve` 时，事件循环将暂停执行 `asyncFunction1()` 直到 `Promise` 对象的状态变为 `resolved`。在这个过程中，`setTimeout()` 中的回调函数并没有执行，`await` 关键字暂停了 `asyncFunction1()` 的执行直到 `Promise` 对象被解决。

当 `Promise` 对象被 `resolve` 后，它的状态变为 `resolved`，然后事件循环将开始执行下一个任务，即 `setTimeout()` 中的回调函数。在回调函数中，`a` 的值被更改为 `100`，并且打印出了这个值。

最后，`Promise` 对象在 `asyncFunction1()` 中被解决，并将 `a` 的值作为 `Promise` 对象的值返回。
