import { _ as _export_sfc, c as createElementBlock, o as openBlock, b as createBaseVNode, d as createTextVNode } from "./app.c432aaf9.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"ssr 服务端渲染，主要解决2个问题","slug":"ssr-服务端渲染-主要解决2个问题","link":"#ssr-服务端渲染-主要解决2个问题","children":[]}],"relativePath":"notes/3.framework/3.vue/ssr.md","lastUpdated":1675675679000}');
const _sfc_main = { name: "notes/3.framework/3.vue/ssr.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "ssr-服务端渲染-主要解决2个问题",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("ssr 服务端渲染，主要解决2个问题 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#ssr-服务端渲染-主要解决2个问题",
    "aria-hidden": "true"
  }, "#")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("更好的SEO "),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, "SPA页面的内容是Ajax获取，而搜索引擎爬取工具并不会等待Ajax异步完成后再进行爬取页面内容，所以在SPA页面是抓取不到页面通过Ajax获取到的内容，爬虫获取的html，是一个没有数据的空壳子。"),
      /* @__PURE__ */ createBaseVNode("li", null, "而SSR，是服务端直接将数据处理好，再拼接组装好，返回一个已经渲染好的页面（数据已经包含在页面中），所以爬虫可以爬取渲染好的页面。")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("首屏渲染更快 "),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, "SPA页面，需要等所有的Vue编译后的js文件全部下载完成之后，才开始进行页面的渲染，文件下载需要一定的时间，所以首屏渲染需要一定的时间。"),
      /* @__PURE__ */ createBaseVNode("li", null, "SSR直接有服务端渲染好页面直接返回显示，不需要等待下载js文件后再去渲染，所以SSR能解决SPA页面首屏渲染时间太长的问题。")
    ])
  ])
], -1);
const _hoisted_3 = [
  _hoisted_1,
  _hoisted_2
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_3);
}
const ssr = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  ssr as default
};
