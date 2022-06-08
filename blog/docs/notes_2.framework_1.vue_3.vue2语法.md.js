"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
const __pageData = '{"title":"vue2\u8BED\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"watch","slug":"watch"}],"relativePath":"notes/2.framework/1.vue/3.vue2\u8BED\u6CD5.md","lastUpdated":1652943543104}';
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="vue2\u8BED\u6CD5" tabindex="-1">vue2\u8BED\u6CD5 <a class="header-anchor" href="#vue2\u8BED\u6CD5" aria-hidden="true">#</a></h1><h2 id="watch" tabindex="-1">watch <a class="header-anchor" href="#watch" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u76D1\u542C\u5BF9\u8C61\u7684\u5C5E\u6027\u503C\u53D8\u5316\uFF0Cimmediate\u8868\u793A\u521D\u59CB\u65F6\u5C31\u6267\u884C</p><div class="language-js"><pre><code><span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#FFCB6B" })}">watch</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">    </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#C3E88D" })}">obj.key</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">: </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">      handler</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">(</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">val</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">)</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">       </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">...</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">},</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">      deep</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#FF9CAC" })}">true</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">      immediate</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#FF9CAC" })}">true</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">    </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/2.framework/1.vue/3.vue2\u8BED\u6CD5.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _3_vue2__ = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports["default"] = _3_vue2__;
