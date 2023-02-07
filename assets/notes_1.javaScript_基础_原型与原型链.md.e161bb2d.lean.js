import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode, b as createBaseVNode, d as createTextVNode } from "./app.92404ad2.js";
const __pageData = JSON.parse('{"title":"原型与原型链","description":"","frontmatter":{},"headers":[{"level":2,"title":"创建对象的方法","slug":"创建对象的方法","link":"#创建对象的方法","children":[]},{"level":2,"title":"什么是实例？原型对象？","slug":"什么是实例-原型对象","link":"#什么是实例-原型对象","children":[]},{"level":2,"title":"什么是构造函数？","slug":"什么是构造函数","link":"#什么是构造函数","children":[{"level":3,"title":"构造函数的__proto__","slug":"构造函数的-proto","link":"#构造函数的-proto","children":[]}]},{"level":2,"title":"什么是原型对象？","slug":"什么是原型对象","link":"#什么是原型对象","children":[{"level":3,"title":"prototype","slug":"prototype","link":"#prototype","children":[]}]},{"level":2,"title":"什么是原型链？","slug":"什么是原型链","link":"#什么是原型链","children":[{"level":3,"title":"为什么原型链的终点是null,而不是Object.prototype","slug":"为什么原型链的终点是null-而不是object-prototype","link":"#为什么原型链的终点是null-而不是object-prototype","children":[]}]},{"level":2,"title":"__proto__","slug":"proto","link":"#proto","children":[]},{"level":2,"title":"prototype","slug":"prototype-1","link":"#prototype-1","children":[]},{"level":2,"title":"constructor","slug":"constructor","link":"#constructor","children":[{"level":3,"title":"实例和原型","slug":"实例和原型","link":"#实例和原型","children":[]}]},{"level":2,"title":"实例、构造函数、原型对象之间的关系","slug":"实例、构造函数、原型对象之间的关系","link":"#实例、构造函数、原型对象之间的关系","children":[]},{"level":2,"title":"instanceof原理","slug":"instanceof原理","link":"#instanceof原理","children":[]},{"level":2,"title":"new运算符","slug":"new运算符","link":"#new运算符","children":[]},{"level":2,"title":"Function与Object","slug":"function与object","link":"#function与object","children":[]},{"level":2,"title":"根源对象null","slug":"根源对象null","link":"#根源对象null","children":[]},{"level":2,"title":"第二层原型对象","slug":"第二层原型对象","link":"#第二层原型对象","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[{"level":3,"title":"Person.__proto__ === Function.prototype","slug":"person-proto-function-prototype","link":"#person-proto-function-prototype","children":[]},{"level":3,"title":"Person.prototype.__proto__ === Object.prototype","slug":"person-prototype-proto-object-prototype","link":"#person-prototype-proto-object-prototype","children":[]}]},{"level":2,"title":"既然 Function instanceof Object === true，为什么Function.__proto__ !== Object.prototype ?","slug":"既然-function-instanceof-object-true-为什么function-proto-object-prototype","link":"#既然-function-instanceof-object-true-为什么function-proto-object-prototype","children":[]},{"level":2,"title":"ƒ ()","slug":"ƒ","link":"#ƒ","children":[{"level":3,"title":"","slug":"","link":"#","children":[]}]}],"relativePath":"notes/1.javaScript/基础/原型与原型链.md","lastUpdated":1675737445000}');
const _sfc_main = { name: "notes/1.javaScript/基础/原型与原型链.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode("", 100);
const _hoisted_101 = /* @__PURE__ */ createBaseVNode("h2", {
  "[native": "",
  "code]": "",
  id: "ƒ",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("ƒ () "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#ƒ",
    "aria-hidden": "true"
  }, "#")
], -1);
const _hoisted_102 = /* @__PURE__ */ createStaticVNode("", 6);
const _hoisted_108 = [
  _hoisted_1,
  _hoisted_101,
  _hoisted_102
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_108);
}
const ______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  ______ as default
};
