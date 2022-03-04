import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.456959a4.js";
const __pageData = '{"title":"less","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9A\u4E49\u53D8\u91CF\u4E0E\u4F7F\u7528\u53D8\u91CF","slug":"\u5B9A\u4E49\u53D8\u91CF\u4E0E\u4F7F\u7528\u53D8\u91CF"},{"level":2,"title":"vite\u4E2D\u5168\u5C40\u4F7F\u7528","slug":"vite\u4E2D\u5168\u5C40\u4F7F\u7528"},{"level":2,"title":"mixins","slug":"mixins"}],"relativePath":"notes/basic/css/less.md","lastUpdated":1646397812680}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="less" tabindex="-1">less <a class="header-anchor" href="#less" aria-hidden="true">#</a></h1><h2 id="\u5B9A\u4E49\u53D8\u91CF\u4E0E\u4F7F\u7528\u53D8\u91CF" tabindex="-1">\u5B9A\u4E49\u53D8\u91CF\u4E0E\u4F7F\u7528\u53D8\u91CF <a class="header-anchor" href="#\u5B9A\u4E49\u53D8\u91CF\u4E0E\u4F7F\u7528\u53D8\u91CF" aria-hidden="true">#</a></h2><div class="language-less"><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">borderStyle</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">border-style</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">Soild</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">solid</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">wrap</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  @{borderStyle}</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">Soild</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//\u53D8\u91CF\u540D \u5FC5\u987B\u4F7F\u7528\u5927\u62EC\u53F7\u5305\u88F9</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">/* \u751F\u6210\u7684 CSS */</span></span>\n<span class="line"><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">wrap</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#B2CCD6;">border-style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">solid</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h2 id="vite\u4E2D\u5168\u5C40\u4F7F\u7528" tabindex="-1">vite\u4E2D\u5168\u5C40\u4F7F\u7528 <a class="header-anchor" href="#vite\u4E2D\u5168\u5C40\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-typescript"><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">css</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">preprocessorOptions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">less</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">charset</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">additionalData</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@import &quot;./src/assets/style/global.less&quot;;</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><h2 id="mixins" tabindex="-1">mixins <a class="header-anchor" href="#mixins" aria-hidden="true">#</a></h2><p>\u628A\u91CD\u590D\u4EE3\u7801\u62BD\u79BB\u51FA\u6765\uFF0C\uFF08\uFF09\u4EE3\u8868\u8FD9\u4E2A\u91CD\u590D\u4EE3\u7801\u53EA\u4F1A\u88AB\u5F15\u7528\uFF0C\u800C\u4E0D\u4F1A\u81EA\u5DF1\u751F\u6210</p><div class="language-less"><pre><code><span class="line"><span style="color:#FFCB6B;">.mixins-positon</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#FFCB6B;">.mixins-border-top</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2px</span><span style="color:#A6ACCD;"> solid </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">skyblue</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&amp;:</span><span style="color:#C792EA;">before</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">mixins-positon</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">mixins-border-top</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2px</span><span style="color:#A6ACCD;"> solid </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">skyblue</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">&amp;:</span><span style="color:#C792EA;">after</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">mixins-positon</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">mixins-border-top</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2px</span><span style="color:#A6ACCD;"> solid </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">skyblue</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div>', 8);
const _hoisted_9 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_9);
}
var less = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, less as default };
