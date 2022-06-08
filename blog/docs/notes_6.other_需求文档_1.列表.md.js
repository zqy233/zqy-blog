"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
const __pageData = '{"title":"\u9700\u6C42","description":"","frontmatter":{},"relativePath":"notes/6.other/\u9700\u6C42\u6587\u6863/1.\u5217\u8868.md","lastUpdated":1654157197122}';
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="\u9700\u6C42" tabindex="-1">\u9700\u6C42 <a class="header-anchor" href="#\u9700\u6C42" aria-hidden="true">#</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/6.other/\u9700\u6C42\u6587\u6863/1.\u5217\u8868.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _1___ = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports["default"] = _1___;
