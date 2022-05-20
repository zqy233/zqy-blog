"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
const __pageData = '{"title":"\u95EE\u9898\u6574\u7406","description":"","frontmatter":{},"headers":[{"level":2,"title":"refusing to merge unrelated histories","slug":"refusing-to-merge-unrelated-histories"},{"level":2,"title":"The requested URL returned error: 403","slug":"the-requested-url-returned-error-403"},{"level":2,"title":"Failed to connect to 127.0.0.1 port 1181 after 2045 ms: Connection refused","slug":"failed-to-connect-to-127-0-0-1-port-1181-after-2045-ms-connection-refused"}],"relativePath":"notes/1.basic/7.git/4.\u95EE\u9898\u6574\u7406.md","lastUpdated":1652939653949}';
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="\u95EE\u9898\u6574\u7406" tabindex="-1">\u95EE\u9898\u6574\u7406 <a class="header-anchor" href="#\u95EE\u9898\u6574\u7406" aria-hidden="true">#</a></h1><h2 id="refusing-to-merge-unrelated-histories" tabindex="-1">refusing to merge unrelated histories <a class="header-anchor" href="#refusing-to-merge-unrelated-histories" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">git pull origin master --allow-unrelated-histories</span></span>
<span class="line"></span></code></pre></div><h2 id="the-requested-url-returned-error-403" tabindex="-1">The requested URL returned error: 403 <a class="header-anchor" href="#the-requested-url-returned-error-403" aria-hidden="true">#</a></h2><p>\u63A7\u5236\u9762\u677F&gt;\u7528\u6237\u8D26\u6237&gt;\u51ED\u636E\u7BA1\u7406\u5668\u4E0B\u66F4\u6539\u8D26\u6237\u540D\u548C\u5BC6\u7801\uFF0C\u786E\u4FDD\u548C\u63D0\u4EA4\u4EE3\u7801\u7684\u4ED3\u5E93\u4E00\u81F4</p><h2 id="failed-to-connect-to-127-0-0-1-port-1181-after-2045-ms-connection-refused" tabindex="-1">Failed to connect to 127.0.0.1 port 1181 after 2045 ms: Connection refused <a class="header-anchor" href="#failed-to-connect-to-127-0-0-1-port-1181-after-2045-ms-connection-refused" aria-hidden="true">#</a></h2><p>\u4E00\u822C\u662F\u7531\u4E8E\u8BBE\u7F6E\u4E86\u4EE3\u7406\u6240\u81F4</p><div class="language-bash"><pre><code><span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">git config --global --unset http.proxy</span></span>
<span class="line"></span></code></pre></div><p>\u5E76\u4E14\u9700\u8981\u68C0\u67E5windows\u662F\u5426\u5F00\u542F\u4EE3\u7406\uFF0C\u5F00\u542F\u4E86\u5219\u5173\u95ED</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/1.basic/7.git/4.\u95EE\u9898\u6574\u7406.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _4_____ = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports["default"] = _4_____;
