import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.864f9b59.js";
const __pageData = JSON.parse('{"title":"\u4E8B\u4EF6\u5FAA\u73AF","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u540C\u6B65\u5F02\u6B65","slug":"\u540C\u6B65\u5F02\u6B65"},{"level":2,"title":"\u4E8B\u4EF6\u5FAA\u73AF","slug":"\u4E8B\u4EF6\u5FAA\u73AF-1"},{"level":2,"title":"\u5B8F\u4EFB\u52A1\u4E0E\u5FAE\u4EFB\u52A1","slug":"\u5B8F\u4EFB\u52A1\u4E0E\u5FAE\u4EFB\u52A1"}],"relativePath":"notes/1.javaScript/\u57FA\u7840/\u4E8B\u4EF6\u5FAA\u73AF.md"}');
const _sfc_main = { name: "notes/1.javaScript/\u57FA\u7840/\u4E8B\u4EF6\u5FAA\u73AF.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u4E8B\u4EF6\u5FAA\u73AF" tabindex="-1">\u4E8B\u4EF6\u5FAA\u73AF <a class="header-anchor" href="#\u4E8B\u4EF6\u5FAA\u73AF" aria-hidden="true">#</a></h1><p><code>JavaScript</code>\u662F\u4E00\u95E8\u5355\u7EBF\u7A0B\u7684\u8BED\u8A00\uFF0C\u610F\u5473\u7740\u540C\u4E00\u65F6\u95F4\u5185\u53EA\u80FD\u505A\u4E00\u4EF6\u4E8B\uFF0C\u4F46\u662F\u8FD9\u5E76\u4E0D\u610F\u5473\u7740\u5355\u7EBF\u7A0B\u5C31\u662F\u963B\u585E\uFF0C\u800C\u5B9E\u73B0\u5355\u7EBF\u7A0B\u975E\u963B\u585E\u7684\u65B9\u6CD5\u5C31\u662F\u4E8B\u4EF6\u5FAA\u73AF</p><h2 id="\u540C\u6B65\u5F02\u6B65" tabindex="-1">\u540C\u6B65\u5F02\u6B65 <a class="header-anchor" href="#\u540C\u6B65\u5F02\u6B65" aria-hidden="true">#</a></h2><p>\u5728<code>JavaScript</code>\u4E2D\uFF0C\u6240\u6709\u7684\u4EFB\u52A1\u90FD\u53EF\u4EE5\u5206\u4E3A</p><ul><li>\u540C\u6B65\u4EFB\u52A1\uFF1A\u7ACB\u5373\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u540C\u6B65\u4EFB\u52A1\u4E00\u822C\u4F1A\u76F4\u63A5\u8FDB\u5165\u5230\u4E3B\u7EBF\u7A0B\u4E2D\u6267\u884C</li><li>\u5F02\u6B65\u4EFB\u52A1\uFF1A\u5F02\u6B65\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u6BD4\u5982<code>ajax</code>\u7F51\u7EDC\u8BF7\u6C42\uFF0C<code>setTimeout</code>\u5B9A\u65F6\u51FD\u6570\u7B49</li></ul><h2 id="\u4E8B\u4EF6\u5FAA\u73AF-1" tabindex="-1">\u4E8B\u4EF6\u5FAA\u73AF <a class="header-anchor" href="#\u4E8B\u4EF6\u5FAA\u73AF-1" aria-hidden="true">#</a></h2><p>\u540C\u6B65\u4EFB\u52A1\u8FDB\u5165\u4E3B\u7EBF\u7A0B\uFF0C\u5373\u4E3B\u6267\u884C\u6808\uFF0C\u5F02\u6B65\u4EFB\u52A1\u8FDB\u5165\u4EFB\u52A1\u961F\u5217\uFF0C\u4E3B\u7EBF\u7A0B\u5185\u7684\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\u4E3A\u7A7A\uFF0C\u4F1A\u53BB\u4EFB\u52A1\u961F\u5217\u8BFB\u53D6\u5BF9\u5E94\u7684\u4EFB\u52A1\uFF0C\u63A8\u5165\u4E3B\u7EBF\u7A0B\u6267\u884C\u3002\u4E0A\u8FF0\u8FC7\u7A0B\u7684\u4E0D\u65AD\u91CD\u590D\u5C31\u4E8B\u4EF6\u5FAA\u73AF</p><h2 id="\u5B8F\u4EFB\u52A1\u4E0E\u5FAE\u4EFB\u52A1" tabindex="-1">\u5B8F\u4EFB\u52A1\u4E0E\u5FAE\u4EFB\u52A1 <a class="header-anchor" href="#\u5B8F\u4EFB\u52A1\u4E0E\u5FAE\u4EFB\u52A1" aria-hidden="true">#</a></h2><p>\u5982\u679C\u5C06\u4EFB\u52A1\u5212\u5206\u4E3A\u540C\u6B65\u4EFB\u52A1\u548C\u5F02\u6B65\u4EFB\u52A1\u5E76\u4E0D\u662F\u90A3\u4E48\u7684\u51C6\u786E\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> reject</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">new Promise</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">()</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">then</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div>', 10);
const _hoisted_11 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_11);
}
var ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, ____ as default };
