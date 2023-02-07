import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.5df4c1a2.js";
const __pageData = JSON.parse('{"title":"区别","description":"","frontmatter":{},"headers":[{"level":3,"title":"懒加载：","slug":"懒加载","link":"#懒加载","children":[]},{"level":3,"title":"虚拟滚动：","slug":"虚拟滚动","link":"#虚拟滚动","children":[]}],"relativePath":"notes/1.javaScript/基础/懒加载和虚拟滚动.md","lastUpdated":1675736838000}');
const _sfc_main = { name: "notes/1.javaScript/基础/懒加载和虚拟滚动.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="区别" tabindex="-1">区别 <a class="header-anchor" href="#区别" aria-hidden="true">#</a></h1><h3 id="懒加载" tabindex="-1">懒加载： <a class="header-anchor" href="#懒加载" aria-hidden="true">#</a></h3><p>常见场景，滚动底部加载新的数据，缺点很明显，用户不能得知总数据量的高度，不能快速滚动</p><h3 id="虚拟滚动" tabindex="-1">虚拟滚动： <a class="header-anchor" href="#虚拟滚动" aria-hidden="true">#</a></h3><p>常见场景，只渲染可视区域的dom，用户进行滚动时js判断相应的数据，进行可视区域dom的更新，原理就是js运行速度远快于dom渲染的速度，用js的时间换dom渲染的时间</p>', 5);
const _hoisted_6 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_6);
}
const ________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  ________ as default
};
