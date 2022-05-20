"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
var _imports_0 = "/vite-vue-blog/assets/image-20220402102813349.6d3b10ac.png";
const __pageData = '{"title":"","description":"","frontmatter":{},"relativePath":"notes/6.other/11.\u6742\u8BB0/1.\u7BA1\u7406\u7CFB\u7EDF\u793A\u4F8B.md","lastUpdated":1652939653992}';
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><p><img${serverRenderer.ssrRenderAttr("src", _imports_0)} alt="image-20220402102813349"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/6.other/11.\u6742\u8BB0/1.\u7BA1\u7406\u7CFB\u7EDF\u793A\u4F8B.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _1_______ = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports["default"] = _1_______;
