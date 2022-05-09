import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.91e2525d.js";
const __pageData = '{"title":"\u5B9E\u6218","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E0B\u8F7D\u5B89\u88C5","slug":"\u4E0B\u8F7D\u5B89\u88C5"},{"level":2,"title":"\u4E3B\u5E94\u7528\u4E2D\u6CE8\u518C\u5FAE\u5E94\u7528","slug":"\u4E3B\u5E94\u7528\u4E2D\u6CE8\u518C\u5FAE\u5E94\u7528"},{"level":2,"title":"\u5FAE\u5E94\u7528","slug":"\u5FAE\u5E94\u7528"},{"level":3,"title":"1. \u5BFC\u51FA\u76F8\u5E94\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50","slug":"_1-\u5BFC\u51FA\u76F8\u5E94\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50"},{"level":3,"title":"2. \u914D\u7F6E\u5FAE\u5E94\u7528\u7684\u6253\u5305\u5DE5\u5177","slug":"_2-\u914D\u7F6E\u5FAE\u5E94\u7528\u7684\u6253\u5305\u5DE5\u5177"},{"level":2,"title":"\u5B98\u65B9demo","slug":"\u5B98\u65B9demo"}],"relativePath":"notes/2.framework/7.qiankun/2.\u5B9E\u6218.md","lastUpdated":1652082082084}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u5B9E\u6218" tabindex="-1">\u5B9E\u6218 <a class="header-anchor" href="#\u5B9E\u6218" aria-hidden="true">#</a></h1><h2 id="\u4E0B\u8F7D\u5B89\u88C5" tabindex="-1">\u4E0B\u8F7D\u5B89\u88C5 <a class="header-anchor" href="#\u4E0B\u8F7D\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-sh"><pre><code><span class="line"><span style="color:#A6ACCD;">yarn add qiankun </span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u6216 </span></span>\n<span class="line"><span style="color:#A6ACCD;">npm i qiankun -S</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u4E3B\u5E94\u7528\u4E2D\u6CE8\u518C\u5FAE\u5E94\u7528" tabindex="-1">\u4E3B\u5E94\u7528\u4E2D\u6CE8\u518C\u5FAE\u5E94\u7528 <a class="header-anchor" href="#\u4E3B\u5E94\u7528\u4E2D\u6CE8\u518C\u5FAE\u5E94\u7528" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">registerMicroApps</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">start</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">qiankun</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#82AAFF;">registerMicroApps</span><span style="color:#A6ACCD;">([</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// app name registered</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">entry</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">//localhost:7100</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">container</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#yourContainer</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">activeRule</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/yourActiveRule</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">entry</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">scripts</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">//localhost:7100/main.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">container</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#yourContainer2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">activeRule</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/yourActiveRule2</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">])</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#82AAFF;">start</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"></span></code></pre></div><p>\u5F53\u5FAE\u5E94\u7528\u4FE1\u606F\u6CE8\u518C\u5B8C\u4E4B\u540E\uFF0C\u4E00\u65E6\u6D4F\u89C8\u5668\u7684 url \u53D1\u751F\u53D8\u5316\uFF0C\u4FBF\u4F1A\u81EA\u52A8\u89E6\u53D1 qiankun \u7684\u5339\u914D\u903B\u8F91\uFF0C\u6240\u6709 activeRule \u89C4\u5219\u5339\u914D\u4E0A\u7684\u5FAE\u5E94\u7528\u5C31\u4F1A\u88AB\u63D2\u5165\u5230\u6307\u5B9A\u7684 container \u4E2D\uFF0C\u540C\u65F6\u4F9D\u6B21\u8C03\u7528\u5FAE\u5E94\u7528\u66B4\u9732\u51FA\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50</p><p>\u5982\u679C\u5FAE\u5E94\u7528\u4E0D\u662F\u76F4\u63A5\u8DDF\u8DEF\u7531\u5173\u8054\u7684\uFF0C\u4E5F\u53EF\u4EE5\u9009\u62E9\u624B\u52A8\u52A0\u8F7D\u5FAE\u5E94\u7528\u7684\u65B9\u5F0F</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">loadMicroApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">qiankun</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#82AAFF;">loadMicroApp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">entry</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">//localhost:7100</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">container</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#yourContainer</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u5FAE\u5E94\u7528" tabindex="-1">\u5FAE\u5E94\u7528 <a class="header-anchor" href="#\u5FAE\u5E94\u7528" aria-hidden="true">#</a></h2><p>\u5FAE\u5E94\u7528\u4E0D\u9700\u8981\u989D\u5916\u5B89\u88C5\u4EFB\u4F55\u5176\u4ED6\u4F9D\u8D56\u5373\u53EF\u63A5\u5165 qiankun \u4E3B\u5E94\u7528</p><h3 id="_1-\u5BFC\u51FA\u76F8\u5E94\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50" tabindex="-1">1. \u5BFC\u51FA\u76F8\u5E94\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50 <a class="header-anchor" href="#_1-\u5BFC\u51FA\u76F8\u5E94\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50" aria-hidden="true">#</a></h3><p>\u5FAE\u5E94\u7528\u9700\u8981\u5728\u81EA\u5DF1\u7684\u5165\u53E3 js (\u901A\u5E38\u5C31\u662F\u4F60\u914D\u7F6E\u7684 webpack \u7684 entry js) \u5BFC\u51FA <code>bootstrap</code>\u3001<code>mount</code>\u3001<code>unmount</code> \u4E09\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50\uFF0C\u4EE5\u4F9B\u4E3B\u5E94\u7528\u5728\u9002\u5F53\u7684\u65F6\u673A\u8C03\u7528</p><div class="language-jsx"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> * bootstrap \u53EA\u4F1A\u5728\u5FAE\u5E94\u7528\u521D\u59CB\u5316\u7684\u65F6\u5019\u8C03\u7528\u4E00\u6B21\uFF0C\u4E0B\u6B21\u5FAE\u5E94\u7528\u91CD\u65B0\u8FDB\u5165\u65F6\u4F1A\u76F4\u63A5\u8C03\u7528 mount \u94A9\u5B50\uFF0C\u4E0D\u4F1A\u518D\u91CD\u590D\u89E6\u53D1 bootstrap\u3002</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> * \u901A\u5E38\u6211\u4EEC\u53EF\u4EE5\u5728\u8FD9\u91CC\u505A\u4E00\u4E9B\u5168\u5C40\u53D8\u91CF\u7684\u521D\u59CB\u5316\uFF0C\u6BD4\u5982\u4E0D\u4F1A\u5728 unmount \u9636\u6BB5\u88AB\u9500\u6BC1\u7684\u5E94\u7528\u7EA7\u522B\u7684\u7F13\u5B58\u7B49\u3002</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">bootstrap</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react app bootstraped</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> * \u5E94\u7528\u6BCF\u6B21\u8FDB\u5165\u90FD\u4F1A\u8C03\u7528 mount \u65B9\u6CD5\uFF0C\u901A\u5E38\u6211\u4EEC\u5728\u8FD9\u91CC\u89E6\u53D1\u5E94\u7528\u7684\u6E32\u67D3\u65B9\u6CD5</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">mount</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">ReactDOM</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">App</span><span style="color:#89DDFF;"> /&gt;,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">container</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">container</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> * \u5E94\u7528\u6BCF\u6B21 \u5207\u51FA/\u5378\u8F7D \u4F1A\u8C03\u7528\u7684\u65B9\u6CD5\uFF0C\u901A\u5E38\u5728\u8FD9\u91CC\u6211\u4EEC\u4F1A\u5378\u8F7D\u5FAE\u5E94\u7528\u7684\u5E94\u7528\u5B9E\u4F8B</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">unmount</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">ReactDOM</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unmountComponentAtNode</span><span style="color:#F07178;">(</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">container</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">container</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">  )</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> * \u53EF\u9009\u751F\u547D\u5468\u671F\u94A9\u5B50\uFF0C\u4EC5\u4F7F\u7528 loadMicroApp \u65B9\u5F0F\u52A0\u8F7D\u5FAE\u5E94\u7528\u65F6\u751F\u6548</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">update</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">update props</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">props</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>qiankun \u57FA\u4E8E single-spa\uFF0C\u6240\u4EE5\u4F60\u53EF\u4EE5\u5728<a href="https://single-spa.js.org/docs/building-applications.html#registered-application-lifecycle" target="_blank" rel="noopener noreferrer">\u8FD9\u91CC</a>\u627E\u5230\u66F4\u591A\u5173\u4E8E\u5FAE\u5E94\u7528\u751F\u547D\u5468\u671F\u76F8\u5173\u7684\u6587\u6863\u8BF4\u660E\u3002</p><p>\u65E0 webpack \u7B49\u6784\u5EFA\u5DE5\u5177\u7684\u5E94\u7528\u63A5\u5165\u65B9\u5F0F\u8BF7\u89C1<a href="https://qiankun.umijs.org/zh/guide/tutorial#%E9%9D%9E-webpack-%E6%9E%84%E5%BB%BA%E7%9A%84%E5%BE%AE%E5%BA%94%E7%94%A8" target="_blank" rel="noopener noreferrer">\u8FD9\u91CC</a></p><h3 id="_2-\u914D\u7F6E\u5FAE\u5E94\u7528\u7684\u6253\u5305\u5DE5\u5177" tabindex="-1">2. \u914D\u7F6E\u5FAE\u5E94\u7528\u7684\u6253\u5305\u5DE5\u5177 <a class="header-anchor" href="#_2-\u914D\u7F6E\u5FAE\u5E94\u7528\u7684\u6253\u5305\u5DE5\u5177" aria-hidden="true">#</a></h3><p>\u9664\u4E86\u4EE3\u7801\u4E2D\u66B4\u9732\u51FA\u76F8\u5E94\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50\u4E4B\u5916\uFF0C\u4E3A\u4E86\u8BA9\u4E3B\u5E94\u7528\u80FD\u6B63\u786E\u8BC6\u522B\u5FAE\u5E94\u7528\u66B4\u9732\u51FA\u6765\u7684\u4E00\u4E9B\u4FE1\u606F\uFF0C\u5FAE\u5E94\u7528\u7684\u6253\u5305\u5DE5\u5177\u9700\u8981\u589E\u52A0\u5982\u4E0B\u914D\u7F6E\uFF1A</p><h4 id="webpack" tabindex="-1">webpack: <a class="header-anchor" href="#webpack" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> packageName </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./package.json</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">output</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">library</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`${</span><span style="color:#A6ACCD;">packageName</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">-[name]</span><span style="color:#89DDFF;">`</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">libraryTarget</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">umd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">jsonpFunction</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">webpackJsonp_</span><span style="color:#89DDFF;">${</span><span style="color:#A6ACCD;">packageName</span><span style="color:#89DDFF;">}`</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#89DDFF;">};</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u5B98\u65B9demo" tabindex="-1">\u5B98\u65B9demo <a class="header-anchor" href="#\u5B98\u65B9demo" aria-hidden="true">#</a></h2><div class="language-"><pre><code>\u5B66\u4E60qiankun.js\u4E4B\u524D\u5148\u6765\u4E86\u89E3\u4E0B`\u5FAE\u524D\u7AEF`\u7684\u6982\u5FF5\n</code></pre></div>', 21);
const _hoisted_22 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_22);
}
var _2___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _2___ as default };
