import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.c432aaf9.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"notes/4.library/node包/npm-run-all.md","lastUpdated":1675675679000}');
const _sfc_main = { name: "notes/4.library/node包/npm-run-all.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>npm-run-all 提供了多种运行多个命令的方式，常用的有以下几个：</p><div class="language-csharp"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">--</span><span style="color:#FFCB6B;">parallel</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 并行运行多个命令，例如：npm</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">run</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">all </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">parallel lint build</span></span>\n<span class="line"><span style="color:#89DDFF;">--</span><span style="color:#FFCB6B;">serial</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 多个命令按排列顺序执行，例如：npm</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">run</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">all </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">serial clean lint </span><span style="color:#FFCB6B;">build</span><span style="color:#89DDFF;">:**</span></span>\n<span class="line"><span style="color:#89DDFF;">--</span><span style="color:#89DDFF;font-style:italic;">continue</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">on</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">error</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 是否忽略错误，添加此参数 npm</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">run</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">all 会自动退出出错的命令，继续运行正常的</span></span>\n<span class="line"><span style="color:#89DDFF;">--</span><span style="color:#FFCB6B;">race</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 添加此参数之后，只要有一个命令运行出错，那么 npm</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">run</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">all 就会结束掉全部的命令</span></span>\n<span class="line"></span></code></pre></div>', 2);
const _hoisted_3 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_3);
}
const npmRunAll = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  npmRunAll as default
};
