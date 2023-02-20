## env.js

判断当前环境

```js
/* @flow */

// can we use __proto__?
/**
 * 是否可以使用__proto__
 */
export const hasProto = "__proto__" in {};

// Browser environment sniffing
// 浏览器环境嗅探
/**
 * 是否是浏览器环境
 */
export const inBrowser = typeof window !== "undefined";

/**
 * 是否是weex环境
 * @type {boolean}
 * @see https://weex.apache.org/zh/guide/introduction/what-is-weex.html
 * @see https://weex.apache.org/zh/guide/advanced/extend-js-runtime.html
 */
export const inWeex =
  typeof WXEnvironment !== "undefined" && !!WXEnvironment.platform;
export const weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();

/**
 * 获取浏览器
 */
export const UA = inBrowser && window.navigator.userAgent.toLowerCase();

/**
 * 判断是ie
 */
export const isIE = UA && /msie|trident/.test(UA);

/**
 * 是否是ie9
 */
export const isIE9 = UA && UA.indexOf("msie 9.0") > 0;

/**
 * 是否是edge
 */
export const isEdge = UA && UA.indexOf("edge/") > 0;

export const isAndroid =
  (UA && UA.indexOf("android") > 0) || weexPlatform === "android";

export const isIOS =
  (UA && /iphone|ipad|ipod|ios/.test(UA)) || weexPlatform === "ios";
/**
 * 是否是谷歌浏览器
 */
export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
export const isPhantomJS = UA && /phantomjs/.test(UA);
/**
 * 是否是火狐
 */
export const isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
export const nativeWatch = {}.watch;

export let supportsPassive = false;
if (inBrowser) {
  try {
    const opts = {};
    Object.defineProperty(
      opts,
      "passive",
      ({
        get() {
          /* istanbul ignore next */
          supportsPassive = true;
        },
      }: Object)
    ); // https://github.com/facebook/flow/issues/285
    window.addEventListener("test-passive", null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
let _isServer;
export const isServerRendering = () => {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== "undefined") {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer =
        global["process"] && global["process"].env.VUE_ENV === "server";
    } else {
      _isServer = false;
    }
  }
  return _isServer;
};

// detect devtools
export const devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

// https://www.cnblogs.com/Renyi-Fan/p/12683554.html
/**
 * 是否是原生
 * @param {*} Ctor
 * @returns
 */
/* istanbul ignore next */
export function isNative(Ctor: any): boolean {
  return typeof Ctor === "function" && /native code/.test(Ctor.toString());
}

/**
 * 是否具备原生的Symbol
 */
export const hasSymbol =
  typeof Symbol !== "undefined" &&
  isNative(Symbol) &&
  typeof Reflect !== "undefined" &&
  isNative(Reflect.ownKeys);

let _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== "undefined" && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = class Set implements SimpleSet {
    set: Object;
    constructor() {
      this.set = Object.create(null);
    }
    has(key: string | number) {
      return this.set[key] === true;
    }
    add(key: string | number) {
      this.set[key] = true;
    }
    clear() {
      this.set = Object.create(null);
    }
  };
}

export interface SimpleSet {
  has(key: string | number): boolean;
  add(key: string | number): mixed;
  clear(): void;
}

export { _Set };
```

