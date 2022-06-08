"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
const __pageData = '{"title":"javaweb","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E13\u4E1A\u540D\u8BCD","slug":"\u4E13\u4E1A\u540D\u8BCD"}],"relativePath":"notes/1.basic/8.java/4.javaweb.md","lastUpdated":1654413807392}';
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="javaweb" tabindex="-1">javaweb <a class="header-anchor" href="#javaweb" aria-hidden="true">#</a></h1><p>\u6D4F\u89C8\u5668\u901A\u8FC7http\u901A\u4FE1\u534F\u8BAE\uFF0C\u4E0Eweb\u670D\u52A1\u5668\u901A\u4FE1\uFF0C\u670D\u52A1\u5668\u8FD4\u56DE\u8BF7\u6C42\u7684html,css,js\u53CA\u56FE\u7247\u8D44\u6E90\u7B49\u7B49</p><h2 id="\u4E13\u4E1A\u540D\u8BCD" tabindex="-1">\u4E13\u4E1A\u540D\u8BCD <a class="header-anchor" href="#\u4E13\u4E1A\u540D\u8BCD" aria-hidden="true">#</a></h2></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/1.basic/8.java/4.javaweb.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _4_javaweb = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports["default"] = _4_javaweb;
