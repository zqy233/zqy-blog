"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
const __pageData = '{"title":"pull-request","description":"","frontmatter":{},"relativePath":"notes/1.basic/7.git/3.pull request.md","lastUpdated":1652939653948}';
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="pull-request" tabindex="-1">pull-request <a class="header-anchor" href="#pull-request" aria-hidden="true">#</a></h1><blockquote><p>\u4E3B\u8981\u7528\u4E8E\u4E3A\u5F00\u6E90\u9879\u76EE\u505A\u51FA\u81EA\u5DF1\u7684\u8D21\u732E\uFF0C\u4EE5\u4E0B\u4E3A\u76F8\u5E94\u6B65\u9AA4</p></blockquote><ol><li><p>\u70B9\u51FB\u5F00\u6E90\u9879\u76EE\u4ED3\u5E93\u53F3\u4E0A\u65B9fork\uFF0C\u4F1A\u5728\u81EA\u5DF1\u4ED3\u5E93\u751F\u6210fork\u7248\u672C\u7684\u9879\u76EE</p></li><li><p>git clone fork\u540E\u7684\u9879\u76EE</p></li><li><p>\u5F00\u53D1\u9879\u76EE</p></li><li><p>push\u9879\u76EE\u4EE3\u7801\u81F3\u81EA\u5DF1\u4ED3\u5E93</p></li><li><p>\u65B0\u5EFApull request\u8BF7\u6C42</p></li><li><p>\u88AB\u8BF7\u6C42\u9879\u76EE\u7684\u7BA1\u7406\u5458\u6D4B\u8BD5\u5BA1\u6838\u901A\u8FC7\uFF0C\u8FDB\u884C\u5408\u5E76</p></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/1.basic/7.git/3.pull request.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _3_pull_request = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports["default"] = _3_pull_request;
