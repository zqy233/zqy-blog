"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
const __pageData = '{"title":"postmon","description":"","frontmatter":{},"headers":[{"level":2,"title":"tunneling socket could not be established, cause=connect ECONNREFUSED 192.168.18.17:8080","slug":"tunneling-socket-could-not-be-established-cause-connect-econnrefused-192-168-18-17-8080"}],"relativePath":"notes/6.other/4.solve-problems/postmon.md","lastUpdated":1652939654002}';
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="postmon" tabindex="-1">postmon <a class="header-anchor" href="#postmon" aria-hidden="true">#</a></h1><h2 id="tunneling-socket-could-not-be-established-cause-connect-econnrefused-192-168-18-17-8080" tabindex="-1">tunneling <a href="https://gitee.com/link?target=https%3A%2F%2Fso.csdn.net%2Fso%2Fsearch%3Fq%3Dsocket%26spm%3D1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">socket</a> could not be established, cause=connect ECONNREFUSED 192.168.18.17:8080 <a class="header-anchor" href="#tunneling-socket-could-not-be-established-cause-connect-econnrefused-192-168-18-17-8080" aria-hidden="true">#</a></h2><p>\u8BBF\u95EE\u80FD\u6B63\u5E38\u8BBF\u95EE\u7684\u63A5\u53E3\uFF0C\u4E00\u76F4\u62A5\u9519</p><p>postman\u5DE6\u4E0A\u89D2file-&gt;settings-&gt;proxy-&gt;\u53BB\u6389\u6240\u6709proxy\u9009\u9879</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/6.other/4.solve-problems/postmon.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var postmon = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports["default"] = postmon;
