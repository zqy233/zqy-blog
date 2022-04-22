import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.ab02101c.js";
const __pageData = '{"title":"Array holes","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u7A00\u758F\u6570\u7EC4\u662F\u4EC0\u4E48","slug":"\u7A00\u758F\u6570\u7EC4\u662F\u4EC0\u4E48"},{"level":3,"title":"JavaScript\u6570\u7EC4\u5929\u751F\u5C31\u662F\u7A00\u758F\u6570\u7EC4","slug":"javascript\u6570\u7EC4\u5929\u751F\u5C31\u662F\u7A00\u758F\u6570\u7EC4"},{"level":3,"title":"JavaScript\u6570\u7EC4\u7A00\u758F\u7279\u6027\u5E26\u6765\u7684\u201C\u602A\u5F02\u73B0\u8C61\u201D","slug":"javascript\u6570\u7EC4\u7A00\u758F\u7279\u6027\u5E26\u6765\u7684\u201C\u602A\u5F02\u73B0\u8C61\u201D"},{"level":3,"title":"\u521D\u59CB\u5316\u65E0\u5B54\u6570\u7EC4\u7684\u65B9\u6CD5","slug":"\u521D\u59CB\u5316\u65E0\u5B54\u6570\u7EC4\u7684\u65B9\u6CD5"},{"level":3,"title":"Array.apply(null, Array(n))\u7684\u539F\u7406","slug":"array-apply-null-array-n-\u7684\u539F\u7406"}],"relativePath":"notes/1.basic/3.javaScript/9.\u5F00\u62D3.md","lastUpdated":1650534043563}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="array-holes" tabindex="-1">Array holes <a class="header-anchor" href="#array-holes" aria-hidden="true">#</a></h1><p>\u5728\u7EDD\u5927\u591A\u6570JavaScript\u7684\u5B9E\u73B0\u4E2D\uFF0C\u6570\u7EC4\u662F\u7A00\u758F\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8BA4\u4E3Ajs\u7684\u6570\u7EC4\u90FD\u662F\u7A00\u758F\u7684\uFF08\u867D\u7136ES\u6807\u51C6\u5E76\u6CA1\u6709\u8FD9\u6837\u89C4\u5B9A\uFF09</p><h3 id="\u7A00\u758F\u6570\u7EC4\u662F\u4EC0\u4E48" tabindex="-1">\u7A00\u758F\u6570\u7EC4\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u7A00\u758F\u6570\u7EC4\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h3><p>\u7A00\u758F\u6570\u7EC4\u4E0E\u5BC6\u96C6\u6570\u7EC4\u6700\u5927\u7684\u4E0D\u540C\uFF0C\u5C31\u662F\u7A00\u758F\u6570\u7EC4\u4E2D\u53EF\u4EE5\u6709**<code>\u5B54</code><strong>(</strong><code>hole</code>**)\u3002\u5B54\u662F\u903B\u8F91\u4E0A\u5B58\u5728\u4E8E\u6570\u7EC4\u4E2D\uFF0C\u4F46\u7269\u7406\u4E0A\u4E0D\u5B58\u5728\u4E0E\u5185\u5B58\u4E2D\u7684\u90A3\u4E9B\u6570\u7EC4\u9879\u3002\u5728\u90A3\u4E9B\u4EC5\u6709\u5C11\u90E8\u5206\u9879\u88AB\u4F7F\u7528\u7684\u6570\u7EC4\u4E2D\uFF0C\u5B54\u53EF\u4EE5\u5927\u5927\u51CF\u5C11\u5185\u5B58\u7A7A\u95F4\u7684\u6D6A\u8D39\u3002\u6BD4\u5982\uFF0C\u6211\u4EEC\u8981\u8868\u793A\u4E00\u4E2A\u957F\u5EA6\u4E3A10000\u7684\u6570\u7EC4\uFF0C\u5B83\u7684\u6700\u540E\u4E00\u4E2A\u9879\u662F\u5B57\u7B26\u4E32&#39;a&#39;\u3002\u5982\u679C\u6309\u7167\u5BC6\u96C6\u6570\u7EC4\u7684\u505A\u6CD5\uFF0C\u6211\u4EEC\u9700\u8981\u5F00\u8F9F10000\u4E2A\u9879\u7684\u7A7A\u95F4\uFF0C\u67099999\u4E2A\u9879\u7684\u7A7A\u95F4\u90FD\u88AB\u6D6A\u8D39\u4E86\u3002\u800C\u5982\u679C\u6309\u7167\u7A00\u758F\u6570\u7EC4\u7684\u505A\u6CD5\uFF0C\u7A00\u758F\u6570\u7EC4\u53EA\u9700\u8981\u8BB0\u5F55\uFF1A\u201C\u6570\u7EC4\u7B2C10000\u4E2A\u9879\u7684\u503C\u4E3A&#39;a&#39;\u201D\uFF0C\u8FD9\u8282\u7701\u4E86\u5F88\u591A\u5185\u5B58\u7A7A\u95F4\u3002</p><h3 id="javascript\u6570\u7EC4\u5929\u751F\u5C31\u662F\u7A00\u758F\u6570\u7EC4" tabindex="-1">JavaScript\u6570\u7EC4\u5929\u751F\u5C31\u662F\u7A00\u758F\u6570\u7EC4 <a class="header-anchor" href="#javascript\u6570\u7EC4\u5929\u751F\u5C31\u662F\u7A00\u758F\u6570\u7EC4" aria-hidden="true">#</a></h3><p><strong>js\u6570\u7EC4\u5C31\u662F\u82E5\u5E72\u4E2A\u4E0B\u6807\uFF08\u6570\u5B57\uFF09\u4E0E\u503C\u4E4B\u95F4\u7684\u6620\u5C04</strong>\u3002\u4ECE\u4E0B\u6807x\u5230\u503Cy\u7684\u6620\u5C04\u8868\u793A\uFF1A<strong>\u201C\u6570\u7EC4\u7B2Cx\u4E2A\u9879\u7684\u503C\u4E3Ay\u201D</strong>\u3002\u8FD9\u5B9E\u9645\u4E0A\u5C31\u662F\u4E0A\u4F8B\u4E2D\u7A00\u758F\u6570\u7EC4\u7684\u8BB0\u5F55\u65B9\u6CD5</p><div class="language-js"><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span></span>\n<span class="line"></span></code></pre></div><p>\u5F97\u5230\u7684\u6570\u7EC4<code>a</code>\u4E2D\u53EA\u6709\u4E00\u4E2A\u5C5E\u6027length\uFF0C\u8BB0\u5F55\u4E86\u5B83\u7684\u957F\u5EA6\uFF0C\u4F46\u662F<strong>\u6CA1\u6709\u4EFB\u4F55\u4E0B\u6807\uFF08\u6570\u5B57\uFF09\u4E0E\u503C\u4E4B\u95F4\u7684\u6620\u5C04</strong>\u3002\u8FD9\u662F\u4E00\u4E2A\u53EA\u67093\u4E2A\u5B54\u7684\u6570\u7EC4</p><p>\u5982\u679C\u6267\u884C<code>a[1] = &#39;aaa&#39;</code>\uFF0C\u90A3\u4E48\u5B9E\u9645\u4E0A\u662F\u5728\u8FD9\u4E2A\u7A00\u758F\u6570\u7EC4\u4E2D\u589E\u52A0\u4E86\u4E00\u6761<strong>\u4ECE1\u5230&quot;aaa&quot;\u4E4B\u95F4\u7684\u6620\u5C04</strong></p><p>\u5982\u679C\u7EE7\u7EED\u6267\u884C<code>a[10000]=&#39;bbb&#39;</code>\uFF0C\u4E5F\u53EA\u4E0D\u8FC7\u662F\u53C8\u589E\u52A0\u4E86\u4E00\u6761<strong>\u4ECE10000\u5230&quot;bbb&quot;\u4E4B\u95F4\u7684\u6620\u5C04</strong>\u800C\u5DF2\u3002length\u81EA\u52A8\u53D8\u4E3A\u4E8610001\uFF0C\u8FD9\u7B26\u5408\u6211\u4EEC\u7684\u76F4\u89C9\u3002<strong>\u4E0D\u5B58\u5728\u6620\u5C04\u5173\u7CFB\uFF0C\u4F46\u53C8\u5904\u5728\u6570\u7EC4\u957F\u5EA6\u8303\u56F4\u5185\u7684\u6570\u7EC4\u9879\uFF0C\u5C31\u662F\u5B54</strong></p><p>\u6B64\u65F6\uFF0C\u8FD9\u4E2A\u6570\u7EC4\u4E0E\u957F\u5EA6\u4E3A2\u7684\u666E\u901A\u6570\u7EC4[&#39;aaa&#39;, &#39;bbb&#39;]\uFF0C\u5360\u7528\u76F8\u540C\u5927\u5C0F\u7684\u5185\u5B58\u7A7A\u95F4</p><h3 id="javascript\u6570\u7EC4\u7A00\u758F\u7279\u6027\u5E26\u6765\u7684\u201C\u602A\u5F02\u73B0\u8C61\u201D" tabindex="-1">JavaScript\u6570\u7EC4\u7A00\u758F\u7279\u6027\u5E26\u6765\u7684\u201C\u602A\u5F02\u73B0\u8C61\u201D <a class="header-anchor" href="#javascript\u6570\u7EC4\u7A00\u758F\u7279\u6027\u5E26\u6765\u7684\u201C\u602A\u5F02\u73B0\u8C61\u201D" aria-hidden="true">#</a></h3><h4 id="slice\u4F1A\u590D\u5236\u5B54" tabindex="-1">slice\u4F1A\u590D\u5236\u5B54 <a class="header-anchor" href="#slice\u4F1A\u590D\u5236\u5B54" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// [&quot;a&quot;, undefined \xD7 1, &quot;b&quot;]</span></span>\n<span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// [undefined \xD7 1]</span></span>\n<span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// [&quot;a&quot;, undefined \xD7 1, &quot;b&quot;]</span></span>\n<span class="line"></span></code></pre></div><h4 id="foreach\u3001every\u4F1A\u8DF3\u8FC7\u5B54\uFF08\u4E0D\u5BF9\u5B54\u8C03\u7528\u56DE\u8C03\u51FD\u6570\uFF09" tabindex="-1">forEach\u3001every\u4F1A\u8DF3\u8FC7\u5B54\uFF08\u4E0D\u5BF9\u5B54\u8C03\u7528\u56DE\u8C03\u51FD\u6570\uFF09 <a class="header-anchor" href="#foreach\u3001every\u4F1A\u8DF3\u8FC7\u5B54\uFF08\u4E0D\u5BF9\u5B54\u8C03\u7528\u56DE\u8C03\u51FD\u6570\uFF09" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// [&quot;a&quot;, undefined \xD7 1, &quot;b&quot;]</span></span>\n<span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">+</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// 0.a</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// 2.b</span></span>\n<span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">every</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// true</span></span>\n<span class="line"></span></code></pre></div><h4 id="map\u4E0D\u5BF9\u5B54\u8C03\u7528\u56DE\u8C03\u51FD\u6570\uFF0C\u4F46\u662F\u5B54\u4F1A\u4FDD\u7559" tabindex="-1">map\u4E0D\u5BF9\u5B54\u8C03\u7528\u56DE\u8C03\u51FD\u6570\uFF0C\u4F46\u662F\u5B54\u4F1A\u4FDD\u7559 <a class="header-anchor" href="#map\u4E0D\u5BF9\u5B54\u8C03\u7528\u56DE\u8C03\u51FD\u6570\uFF0C\u4F46\u662F\u5B54\u4F1A\u4FDD\u7559" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">+</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// [ &#39;0.a&#39;, undefined \xD7 1, &#39;2.b&#39; ]</span></span>\n<span class="line"></span></code></pre></div><h4 id="filter\u4E0D\u5BF9\u5B54\u8C03\u7528\u56DE\u8C03\u51FD\u6570\uFF0C\u4F46\u662F\u5B54\u4F1A\u88AB\u8FC7\u6EE4\u6389" tabindex="-1">filter\u4E0D\u5BF9\u5B54\u8C03\u7528\u56DE\u8C03\u51FD\u6570\uFF0C\u4F46\u662F\u5B54\u4F1A\u88AB\u8FC7\u6EE4\u6389 <a class="header-anchor" href="#filter\u4E0D\u5BF9\u5B54\u8C03\u7528\u56DE\u8C03\u51FD\u6570\uFF0C\u4F46\u662F\u5B54\u4F1A\u88AB\u8FC7\u6EE4\u6389" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">filter</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// [ &#39;a&#39;, &#39;b&#39; ]</span></span>\n<span class="line"></span></code></pre></div><h4 id="join\u4F1A\u5C06\u5B54\u8F6C\u5316\u4E3A\u4E00\u4E2A\u7A7A\u5B57\u7B26\u4E32\u8FDB\u884C\u62FC\u63A5\uFF0C\u4E0Eundefined\u4E00\u6837" tabindex="-1">join\u4F1A\u5C06\u5B54\u8F6C\u5316\u4E3A\u4E00\u4E2A\u7A7A\u5B57\u7B26\u4E32\u8FDB\u884C\u62FC\u63A5\uFF0C\u4E0Eundefined\u4E00\u6837 <a class="header-anchor" href="#join\u4F1A\u5C06\u5B54\u8F6C\u5316\u4E3A\u4E00\u4E2A\u7A7A\u5B57\u7B26\u4E32\u8FDB\u884C\u62FC\u63A5\uFF0C\u4E0Eundefined\u4E00\u6837" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// &#39;a--b&#39;</span></span>\n<span class="line"><span style="color:#A6ACCD;">[ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// &#39;a--b&#39;</span></span>\n<span class="line"></span></code></pre></div><p>\u800C\u5176\u4ED6\u6240\u6709\u7684\u6570\u7EC4\u65B9\u6CD5\u4F1A\u6B63\u5E38\u5BF9\u5F85\u5B54\uFF0C\u5C31\u50CF\u6570\u7EC4\u4E2D\u771F\u7684\u5B58\u5728\u8FD9\u4E2A\u201C\u7A7A\u4F4D\u201D\u4E00\u6837\uFF1A</p><div class="language-js"><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> arr2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"><span style="color:#A6ACCD;">arr2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sort</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// [ &#39;a&#39;, &#39;b&#39;, undefined \xD7 1 ]</span></span>\n<span class="line"></span></code></pre></div><h3 id="\u521D\u59CB\u5316\u65E0\u5B54\u6570\u7EC4\u7684\u65B9\u6CD5" tabindex="-1">\u521D\u59CB\u5316\u65E0\u5B54\u6570\u7EC4\u7684\u65B9\u6CD5 <a class="header-anchor" href="#\u521D\u59CB\u5316\u65E0\u5B54\u6570\u7EC4\u7684\u65B9\u6CD5" aria-hidden="true">#</a></h3><p>\u56E0\u4E3A\u6570\u7EC4\u4E2D\u7684\u5B54\u4F1A\u9020\u6210\u4E0A\u8FF0\u7684\u90A3\u4E9B\u201C\u602A\u5F02\u73B0\u8C61\u201D\uFF0C\u6240\u4EE5\u6211\u4EEC\u6709\u65F6\u5E0C\u671B\u521D\u59CB\u5316\u4E00\u4E2A\u6CA1\u6709\u5B54\u7684\u6570\u7EC4\u3002 \u6BD4\u5982\u6211\u4EEC\u5E0C\u671B\u521D\u59CB\u5316[0,1,2]\u8FD9\u6837\u7684\u6570\u7EC4\uFF0C\u4F46\u662F\u6211\u4EEC\u65E0\u6CD5\u901A\u8FC7new Array(3)\u4E0Emap\u65B9\u6CD5\u5F97\u5230\uFF1A</p><div class="language-js"><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// [undefined \xD7 3]</span></span>\n<span class="line"><span style="color:#A6ACCD;">a1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// [undefined \xD7 3]</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// \u56E0\u4E3Amap\u4F1A\u8DF3\u8FC7\u5B54\uFF0C\u6240\u4EE5\u5B9E\u9645\u4E0A\u56DE\u8C03\u51FD\u6570\u6CA1\u6709\u88AB\u8C03\u7528\u8FC7</span></span>\n<span class="line"></span></code></pre></div><p>\u6B63\u786E\u7684\u65B9\u6CD5\uFF1A</p><div class="language-js"><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">))</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// [undefined, undefined, undefined]</span></span>\n<span class="line"><span style="color:#A6ACCD;">a2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// [0, 1, 2]</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// map\u7684\u56DE\u8C03\u51FD\u6570\u6267\u884C\u4E863\u6B21</span></span>\n<span class="line"></span></code></pre></div><p>\u6253\u5370\u7ED3\u679C\u5206\u522B\u4E3A[undefined \xD7 3]\u548C[undefined, undefined, undefined]\uFF0Cchrome\u63A7\u5236\u53F0\u7528\u8FD9\u4E24\u79CD\u8868\u793A\u65B9\u5F0F\u6765\u533A\u5206\u5B54\u548C\u771F\u6B63\u7684undefined\u503C\uFF01</p><p>\u7B2C\u4E00\u79CD\u65B9\u6CD5\u6CA1\u6709\u6784\u9020\u51FA\u6620\u5C04\uFF0C\u53EA\u521B\u9020\u51FA\u4E863\u4E2A\u5B54\u3002\u800C\u7B2C\u4E8C\u79CD\u65B9\u6CD5\u521B\u5EFA\u51FA\u4E86\u771F\u6B63\u7684\u201C\u4ECE\u4E0B\u6807\u5230\u503C\u4E4B\u95F4\u7684\u6620\u5C04\u201D\uFF0C\u6620\u5C04\u7684\u503C\u4E3Aundefined\u3002\u56E0\u6B64map\u4E0D\u4F1A\u8DF3\u8FC7\u8FD9\u4E9B\u6570\u7EC4\u9879\u3002</p><h3 id="array-apply-null-array-n-\u7684\u539F\u7406" tabindex="-1">Array.apply(null, Array(n))\u7684\u539F\u7406 <a class="header-anchor" href="#array-apply-null-array-n-\u7684\u539F\u7406" aria-hidden="true">#</a></h3><p>\u4E3A\u4EC0\u4E48<code>var a2 = Array.apply(null, Array(3))</code>\u80FD\u521B\u9020\u51FA\u65E0\u5B54\u7684\u6570\u7EC4\u5462\uFF1F \u6211\u4EEC\u5C06\u4E00\u4E2A\u542B\u67093\u4E2A\u5B54\u7684\u6570\u7EC4\u4F5C\u4E3A\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4F20\u9012\u7ED9apply\uFF0Capply\u5C06\u5229\u7528\u8FD9\u4E2A\u6570\u7EC4\u6765\u51B3\u5B9A\u8C03\u7528Array()\u7684\u53C2\u6570\u3002 \u56E0\u4E3A<strong>apply\u5C06\u6570\u7EC4\u4E2D\u7684\u5B54\u89C6\u4E3Aundefined</strong>\uFF0C\u6240\u4EE5Array\u8C03\u7528\u7684\u53C2\u6570\u5B9E\u9645\u4E0A\u4E3AArray(undefined, undefined, undefined)\u3002 \u53C8\u56E0\u4E3A\u901A\u8FC7Array(a,b,c)\u8FD9\u79CD\u65B9\u6CD5\u8C03\u7528Array\u4F1A\u8FD4\u56DE[a,b,c]\uFF0C\u6240\u4EE5Array(undefined, undefined, undefined)\u8FD4\u56DE\u7684\u662F[undefined, undefined, undefined]</p>', 33);
const _hoisted_34 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_34);
}
var _9___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _9___ as default };
