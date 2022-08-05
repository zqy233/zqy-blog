## setTimeout

> **`setTimeout()`**方法设置一个定时器，该定时器在定时器到期后执行一个函数或指定的一段代码

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/API/setTimeout#参数)

- `function`

  function 是你想要在到期时间 (`delay`毫秒) 之后执行的函数

- `code`

  这是一个可选语法，你可以使用字符串而不是[`function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function) ，在`delay`毫秒之后编译和执行字符串 (使用该语法是**不推荐的，** 原因和使用 [`eval()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval)一样，有安全风险)

- `delay` 可选

  延迟的毫秒数 (一秒等于 1000 毫秒)，函数的调用会在该延迟之后发生。如果省略该参数，delay 取默认值 0，意味着“马上”执行，或者尽快执行。不管是哪种情况，实际的延迟时间可能会比期待的 (delay 毫秒数) 值长，原因请查看[实际延时比设定值更久的原因：最小延迟时间](https://developer.mozilla.org/zh-CN/docs/Web/API/setTimeout#实际延时比设定值更久的原因：最小延迟时间)

- `arg1, ..., argN` 可选

  附加参数，一旦定时器到期，它们会作为参数传递给[`function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)

  ```js
   return new Promise(function (resolve, reject) {
          log('calculating ' + input + ' x ' + input + '...')
          // 这里的第三个参数会传递给第一个函数，作为其参数
          setTimeout(resolve, 500, input * input)
      })
  ```

  