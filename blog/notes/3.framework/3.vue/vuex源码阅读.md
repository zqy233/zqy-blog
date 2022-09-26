## src/index.js

vuex的目录结构非常简单，打开src文件夹，肯定先看index.js文件

```js
import { Store, createStore } from './store'
import { storeKey, useStore } from './injectKey'
import { mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers } from './helpers'
import { createLogger } from './plugins/logger'

export default {
  version: '__VERSION__',
  Store,
  storeKey,
  createStore,
  useStore,
  mapState,
  mapMutations,
  mapGetters,
  mapActions,
  createNamespacedHelpers,
  createLogger
}

export {
  Store,
  storeKey,
  createStore,
  useStore,
  mapState,
  mapMutations,
  mapGetters,
  mapActions,
  createNamespacedHelpers,
  createLogger
}
```

## useStore

先来查看`useStore`如何实现的，打开`src\injectKey.js`，可以看到代码非常简单，使用[inject](https://cn.vuejs.org/guide/components/provide-inject.html)了`store`

```js
import { inject } from 'vue'

export const storeKey = 'store'

export function useStore (key = null) {
  return inject(key !== null ? key : storeKey)
}
```

有`inject`说明有`provide`，全局搜索`provide`，发现在`src\store.js`中，install函数第一行就`provide`了`store`

```js
 install (app, injectKey) {
    app.provide(injectKey || storeKey, this)
    ...
  }
```

## mapState

再打开`src\helpers.js`，看看辅助函数们是怎么实现的

```js
/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
export const mapState = normalizeNamespace((namespace, states) => {
  const res = {}
  if (__DEV__ && !isValidMap(states)) {
    console.error("[vuex] mapState: mapper parameter must be either an Array or an Object")
  }
  normalizeMap(states).forEach(({ key, val }) => {
    res[key] = function mappedState() {
      let state = this.$store.state
      let getters = this.$store.getters
      if (namespace) {
        const module = getModuleByNamespace(this.$store, "mapState", namespace)
        if (!module) {
          return
        }
        state = module.context.state
        getters = module.context.getters
      }
      return typeof val === "function" ? val.call(this, state, getters) : state[val]
    }
    // mark vuex getter for devtools
    res[key].vuex = true
  })
  return res
})
```

mapState最终返回一个对象，然后可以通过扩展运算符来合并对象中的属性

```js
const a = {a:1}
const b = {b:2}
console.log({...a, ...b}) // { a: 1, b: 2 }
```

## normalizeMap

这个函数用于将对象和数组，转换成统一的数组格式` [{ key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 }]`，因为mapState这些函数可以传对象也可以传数组

```js
/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap(map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map) ? map.map(key => ({ key, val: key })) : Object.keys(map).map(key => ({ key, val: map[key] }))
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap(map) {
  // 判断是数组或是对象
  return Array.isArray(map) || isObject(map)
}
```

## createNamespacedHelpers

- 创建基于某个命名空间辅助函数
- 返回一个对象，对象中有新的绑定在（给定命名空间值上）的组件绑定辅助函数

```js
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('main')
export default {
	computed: {
	//在`main`中查找
		...mapState({
			a: state => state.a
		})
	},
	methods: {
	//在`main`中查找
		...mapActions([
			'fn'
		])
	}
}
```

### 源码

bind第一个参数null，表示不改变指向，第二个参数传入命名空间，返回相应命名空间对象

```js
/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
export const createNamespacedHelpers = namespace => ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace),
})
```

