# vue2

## 参考链接

> vue2代码仓库 https://github.com/vuejs/vue
>
> vue2源码解析文章 https://ustbhuangyi.github.io/vue-analysis/v2/prepare/

## src/core/instance/index.js

```js
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
```

Vue实际上就是一个用 Function 实现的类，我们只能通过 `new Vue` 去实例化它。

### 为何 Vue 不用 ES6 的 Class 去实现呢？

这里有很多 `xxxMixin` 的函数调用，并把 `Vue` 当参数传入，它们的功能都是给 Vue 的 prototype 上扩展一些方法，Vue 按功能把这些扩展分散到多个模块中去实现，而不是在一个模块里实现所有，这种方式是用 Class 难以实现的

这么做的好处是非常方便代码的维护和管理，这种编程技巧也非常值得我们去学习

## src/core/instance/init.js

`this._init(options)`在`./init`中定义

```

```

## src/platform/web/entry-runtime-with-compiler.js

Vue 中是通过 `$mount` 实例方法去挂载 `vm` 的，`$mount` 方法在多个文件中都有定义，如 `src/platform/web/entry-runtime-with-compiler.js`、`src/platform/web/runtime/index.js`、`src/platform/weex/runtime/index.js`

因为 `$mount` 这个方法的实现是和平台、构建方式都相关的

接下来我们重点分析带 `compiler` 版本的 `$mount` 实现，因为抛开 webpack 的 vue-loader，我们在纯前端浏览器环境分析 Vue 的工作原理，有助于我们对原理理解的深入。