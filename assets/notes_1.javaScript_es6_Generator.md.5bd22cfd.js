import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.c432aaf9.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[]}],"relativePath":"notes/1.javaScript/es6/Generator.md","lastUpdated":1675675679000}');
const _sfc_main = { name: "notes/1.javaScript/es6/Generator.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h3 id="基本概念" tabindex="-1">基本概念 <a class="header-anchor" href="#基本概念" aria-hidden="true">#</a></h3><p>Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。本章详细介绍 Generator 函数的语法和 API，它的异步编程应用请看《Generator 函数的异步应用》一章。</p><p>Generator 函数有多种理解角度。语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。</p><p>执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。</p><p>形式上，Generator 函数是一个普通函数，但是有两个特征。一是，<code>function</code>关键字与函数名之间有一个星号；二是，函数体内部使用<code>yield</code>表达式，定义不同的内部状态（<code>yield</code>在英语里的意思就是“产出”）。</p>', 5);
const _hoisted_6 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_6);
}
const Generator = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  Generator as default
};
