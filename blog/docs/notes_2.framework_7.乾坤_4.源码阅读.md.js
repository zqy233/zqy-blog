"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
const __pageData = '{"title":"\u683C\u5F0F\u5316\u5DE5\u5177","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u683C\u5F0F\u5316\u5DE5\u5177","slug":"\u683C\u5F0F\u5316\u5DE5\u5177"}],"relativePath":"notes/2.framework/7.\u4E7E\u5764/4.\u6E90\u7801\u9605\u8BFB.md","lastUpdated":1654679597926}';
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h2 id="\u683C\u5F0F\u5316\u5DE5\u5177" tabindex="-1">\u683C\u5F0F\u5316\u5DE5\u5177 <a class="header-anchor" href="#\u683C\u5F0F\u5316\u5DE5\u5177" aria-hidden="true">#</a></h2><div class="language-"><pre><code>
</code></pre></div><ul><li><code>ts-jest</code> \u6D4B\u8BD5\u5DE5\u5177</li><li><code>prettier</code> \u683C\u5F0F\u5316\u5DE5\u5177</li><li><code>rimraf</code> \u4EE5\u5305\u7684\u5F62\u5F0F\u5305\u88C5<code>rm -rf</code>\u547D\u4EE4\uFF0C\u5C31\u662F\u7528\u6765\u5220\u9664\u6587\u4EF6\u548C\u6587\u4EF6\u5939\u7684\uFF0C\u4E0D\u7BA1\u6587\u4EF6\u5939\u662F\u5426\u4E3A\u7A7A\uFF0C\u90FD\u53EF\u4EE5\u5220\u9664</li><li><code>Husky</code> \u4F7F\u7528Git\u547D\u4EE4\u4F1A\u89E6\u53D1\u7684\u51FD\u6570</li><li><code>Lint-staged</code> \u4EC5\u4EC5\u8FC7\u6EE4\u51FAGit\u4EE3\u7801\u6682\u5B58\u533A\u6587\u4EF6(\u88ABcommitted\u7684\u6587\u4EF6)\u7684\u5DE5\u5177</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/2.framework/7.\u4E7E\u5764/4.\u6E90\u7801\u9605\u8BFB.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _4_____ = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports["default"] = _4_____;
