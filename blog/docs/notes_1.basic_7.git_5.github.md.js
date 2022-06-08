"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
const __pageData = '{"title":"\u7F51\u9875\u7AEF\u6253\u5F00\u9879\u76EE","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7F51\u9875\u7AEF\u6253\u5F00\u9879\u76EE","slug":"\u7F51\u9875\u7AEF\u6253\u5F00\u9879\u76EE"},{"level":2,"title":"gitpod","slug":"gitpod"},{"level":2,"title":"hosts","slug":"hosts"}],"relativePath":"notes/1.basic/7.git/5.github.md","lastUpdated":1654593100475}';
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h2 id="\u7F51\u9875\u7AEF\u6253\u5F00\u9879\u76EE" tabindex="-1">\u7F51\u9875\u7AEF\u6253\u5F00\u9879\u76EE <a class="header-anchor" href="#\u7F51\u9875\u7AEF\u6253\u5F00\u9879\u76EE" aria-hidden="true">#</a></h2><p>github\u9879\u76EE\u9875\u9762\u6309\u4E0B<code>.</code>\u952E\uFF0C\u5373\u53EF\u4F7F\u7528\u7F51\u9875\u7248vscode\u6253\u5F00\u5F53\u524D\u9879\u76EE</p><h2 id="gitpod" tabindex="-1">gitpod <a class="header-anchor" href="#gitpod" aria-hidden="true">#</a></h2><p>\u4E91\u5F00\u53D1\u4E0E\u8FD0\u884C\u9879\u76EE\u7684\u5E73\u53F0</p><p>\u5728github\u5730\u5740\u524D\u52A0\u4E0A<code>gitpod.io/#/</code>\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-sh"><pre><code><span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">https://gitpod.io/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}">#/github.com/antfu/unplugin-auto-import</span></span>
<span class="line"></span></code></pre></div><p>\u4ECE\u800C\u4F1A\u8DF3\u8F6C\u81F3gitpod\u5E73\u53F0</p><div class="language-sh"><pre><code><span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">https://antfu-unpluginautoimpo-v4a7st4kzi7.ws-us45.gitpod.io/</span></span>
<span class="line"></span></code></pre></div><h2 id="hosts" tabindex="-1">hosts <a class="header-anchor" href="#hosts" aria-hidden="true">#</a></h2><p><a href="https://so.csdn.net/so/search?q=github&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">github</a>\u7684ip\u5730\u5740\u7ECF\u5E38\u53D8\uFF0C\u53EF\u4EE5\u5728<a href="https://www.ipaddress.com/" target="_blank" rel="noopener noreferrer">\u8FD9\u91CC</a>\u67E5\u8BE2</p><p>C:\\Windows\\System32\\drivers\\etc\\hosts</p><p><a href="https://www.ipaddress.com/ipv4/140.82.112.4" target="_blank" rel="noopener noreferrer">140.82.112.4</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/1.basic/7.git/5.github.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _5_github = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports["default"] = _5_github;
