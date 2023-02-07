import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.e46b6032.js";
const __pageData = JSON.parse('{"title":"nvue","description":"","frontmatter":{},"headers":[{"level":2,"title":"为什么要使用nvue","slug":"为什么要使用nvue","link":"#为什么要使用nvue","children":[]},{"level":2,"title":"css受限","slug":"css受限","link":"#css受限","children":[]}],"relativePath":"notes/3.framework/4.uniapp/nvue.md","lastUpdated":1675736586000}');
const _sfc_main = { name: "notes/3.framework/4.uniapp/nvue.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="nvue" tabindex="-1">nvue <a class="header-anchor" href="#nvue" aria-hidden="true">#</a></h1><h2 id="为什么要使用nvue" tabindex="-1">为什么要使用nvue <a class="header-anchor" href="#为什么要使用nvue" aria-hidden="true">#</a></h2><blockquote><p>uni-app渲染层在app端提供了两套排版引擎：小程序方式的webview渲染，和weex方式的原生渲染</p></blockquote><p>在App端，如果使用vue页面，则使用webview渲染；如果使用nvue页面(native vue的缩写)，则使用原生渲染。一个App中可以同时使用两种页面，比如首页使用nvue，二级页使用vue页面，hello uni-app示例就是如此</p><p>两种渲染引擎可以自己根据需要选。vue文件走的webview渲染，nvue走的原生渲染 组件和js写法是一样的，css不一样，原生排版的能用的css必须是flex布局，这是web的css的子集。当然什么界面都可以用flex布出来。不懂flex布局就自己学</p><p>一般情况下用vue就可以了。如果是app且有部分场景vue页面的性能不满足你的需求时，这个页面可以改用nvue页面。如果app里同时存在同名的vue和nvue页面，在app端会优先执行nvue页面，而其他端仍然优先vue页面 当然，nvue也可以编译到h5和小程序，也是可以跨端的，只是相比vue写法多些限制</p><h2 id="css受限" tabindex="-1">css受限 <a class="header-anchor" href="#css受限" aria-hidden="true">#</a></h2>', 7);
const _hoisted_8 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_8);
}
const nvue = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  nvue as default
};
