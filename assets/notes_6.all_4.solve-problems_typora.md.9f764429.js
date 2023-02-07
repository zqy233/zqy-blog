import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.e46b6032.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"关闭更新","slug":"关闭更新","link":"#关闭更新","children":[]}],"relativePath":"notes/6.all/4.solve-problems/typora.md","lastUpdated":1675736586000}');
const _sfc_main = { name: "notes/6.all/4.solve-problems/typora.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="关闭更新" tabindex="-1">关闭更新 <a class="header-anchor" href="#关闭更新" aria-hidden="true">#</a></h2><p>按<code>Windows+R</code>打开运行窗口，输入<code>regedit</code>，点确定，打开注册表，依次展开<code>计算机\\HKEY_CURRENT_USER\\Software\\Typora</code>，然后在<code>Typora</code>上右键，点<code>权限</code>，选中<code>Administrtors</code>，把权限全部设置为<code>拒绝</code></p>', 2);
const _hoisted_3 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_3);
}
const typora = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  typora as default
};
