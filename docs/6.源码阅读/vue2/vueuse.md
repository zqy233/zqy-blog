# 实现Vue.use

## 参考文档

> https://www.cnblogs.com/itgezhu/p/11950997.html

## vue.use的作用

官方文档的解释：

安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入

示例：

```js
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
```

## src/core/global-api/use

```js
/* @flow */

import { toArray } from "../util/index";

/**
 * 初始化Vue.use方法
 * @param {*} Vue
 */
export function initUse(Vue: GlobalAPI) {
  Vue.use = function (plugin: Function | Object) {
    const installedPlugins =
      this._installedPlugins || (this._installedPlugins = []);
    // 如果已经安装过了，直接返回
    if (installedPlugins.indexOf(plugin) > -1) {
      return this;
    }
    // additional parameters/附加参数
    // toArray方法将类数组转换为数组
    const args = toArray(arguments, 1);
    // unshift方法将新项添加到数组的开头，并返回新的长度
    args.unshift(this);
    // 插件的install是函数
    if (typeof plugin.install === "function") {
      plugin.install.apply(plugin, args);
    }
    // 插件本身就是函数
    else if (typeof plugin === "function") {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this;
  };
}
```

