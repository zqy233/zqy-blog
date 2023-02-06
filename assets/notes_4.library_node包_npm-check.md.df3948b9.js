import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.c432aaf9.js";
const __pageData = JSON.parse('{"title":"npm-check","description":"","frontmatter":{},"headers":[{"level":2,"title":"全局安装","slug":"全局安装","link":"#全局安装","children":[]},{"level":2,"title":"批量更新当前项目包版本","slug":"批量更新当前项目包版本","link":"#批量更新当前项目包版本","children":[]}],"relativePath":"notes/4.library/node包/npm-check.md","lastUpdated":1675675679000}');
const _sfc_main = { name: "notes/4.library/node包/npm-check.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="npm-check" tabindex="-1">npm-check <a class="header-anchor" href="#npm-check" aria-hidden="true">#</a></h1><blockquote><p>检查npm依赖包是否有更新，并可以进行批量更新</p></blockquote><h2 id="全局安装" tabindex="-1">全局安装 <a class="header-anchor" href="#全局安装" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm-check</span></span>\n<span class="line"></span></code></pre></div><h2 id="批量更新当前项目包版本" tabindex="-1">批量更新当前项目包版本 <a class="header-anchor" href="#批量更新当前项目包版本" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 按空格选择</span></span>\n<span class="line"><span style="color:#FFCB6B;">npm-check</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 更新全局包版本</span></span>\n<span class="line"><span style="color:#FFCB6B;">npm-check</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span></span>\n<span class="line"></span></code></pre></div>', 6);
const _hoisted_7 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_7);
}
const npmCheck = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  npmCheck as default
};
