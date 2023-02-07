import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.5df4c1a2.js";
const __pageData = JSON.parse('{"title":"响应式","description":"","frontmatter":{},"headers":[{"level":2,"title":"常用宽度","slug":"常用宽度","link":"#常用宽度","children":[]}],"relativePath":"notes/2.basic/2.css/5.响应式.md","lastUpdated":1675736838000}');
const _sfc_main = { name: "notes/2.basic/2.css/5.响应式.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="响应式" tabindex="-1">响应式 <a class="header-anchor" href="#响应式" aria-hidden="true">#</a></h1><h2 id="常用宽度" tabindex="-1">常用宽度 <a class="header-anchor" href="#常用宽度" aria-hidden="true">#</a></h2><table><thead><tr><th>—</th><th>超小屏幕（手机）</th><th>小屏设备（平板）</th><th>中屏设备（桌面显示器）</th><th>宽屏设备（大桌面显示器）</th></tr></thead><tbody><tr><td>大小</td><td>&lt;768px</td><td>&gt;=768px</td><td>&gt;=992px</td><td>&gt;=1200px</td></tr><tr><td>.container最大宽度</td><td>自动(100%)</td><td>750px</td><td>970px</td><td>1170px</td></tr><tr><td>类前缀</td><td>.col-xs</td><td>.col-sm</td><td>.col-md</td><td>.col-lg</td></tr></tbody></table><ol><li>按照不同屏幕划分为 1~12 等份;</li><li>行（ row) 可以去除父容器作用 15px 的边距</li><li>xs extra small 超小</li><li>sm-small 小</li><li>md-medium 中等</li><li>lg-large 大</li><li>列（ column ）大于 12 ，多余的“列 column ）”所在的元素将被作为一个整体另起一行排列</li><li>每一列默认有左右 15 像素的 padding</li><li>可以同时为一列指定多个设备的类名，以便划分不同份数 例如 class=&quot;col-md-4 col-sm-6&quot;</li></ol>', 4);
const _hoisted_5 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_5);
}
const _5____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _5____ as default
};
