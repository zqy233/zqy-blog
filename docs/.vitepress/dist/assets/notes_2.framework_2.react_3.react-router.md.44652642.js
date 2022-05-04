import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.92049e59.js";
const __pageData = '{"title":"react-router","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":2,"title":"\u8DF3\u8F6C","slug":"\u8DF3\u8F6C"},{"level":3,"title":"\u9875\u9762\u8DF3\u8F6C","slug":"\u9875\u9762\u8DF3\u8F6C"},{"level":3,"title":"js\u8DF3\u8F6C","slug":"js\u8DF3\u8F6C"}],"relativePath":"notes/2.framework/2.react/3.react-router.md","lastUpdated":1647227542081}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="react-router" tabindex="-1">react-router <a class="header-anchor" href="#react-router" aria-hidden="true">#</a></h1><p>react-router\u5E93\u5305\u542B\u4E09\u4E2A\u4E0D\u540C\u7684npm\u5305\uFF0C\u4EE5\u4E0B\u6BCF\u4E2A\u5305\u90FD\u6709\u4E0D\u540C\u7684\u7528\u9014</p><ul><li>react-router</li><li>react-router-dom</li><li>react-router-native</li></ul><p><code>react-router</code> \u662F\u6838\u5FC3\u7A0B\u5E8F\u5305\uFF0C\u7528\u4F5C\u5217\u51FA<code>react-router-dom</code>\u548C<code>react-router-native</code> \u7684\u5BF9\u7B49\u4F9D\u8D56\u9879</p><p><code>react-router-dom</code> \u662Fweb\u5E94\u7528\u8DEF\u7531\u5305</p><p><code>react-router-native</code> \u7528\u4E8E\u5F00\u53D1react native\u5E94\u7528\u7684\u7ED1\u5B9A</p><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><p>\u6240\u4EE5\u6B63\u5E38\u5F00\u53D1web\u5E94\u7528\u9009\u62E9\u4F7F\u7528<code>react-router-dom</code></p><div class="language-sh"><pre><code><span class="line"><span style="color:#A6ACCD;">npm i -s react-router-dom</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-tsx"><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> React </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">BrowserRouter</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Route</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Routes</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">react-router-dom</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Register </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./pages/Register</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Login </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./pages/Register</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Chat </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./pages/Chat</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">App</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">BrowserRouter</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Routes</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">path</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/register</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">element</span><span style="color:#89DDFF;">={&lt;</span><span style="color:#FFCB6B;">Register</span><span style="color:#89DDFF;"> /&gt;}&gt;&lt;/</span><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">path</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/login</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">element</span><span style="color:#89DDFF;">={&lt;</span><span style="color:#FFCB6B;">Login</span><span style="color:#89DDFF;"> /&gt;}&gt;&lt;/</span><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">path</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">element</span><span style="color:#89DDFF;">={&lt;</span><span style="color:#FFCB6B;">Chat</span><span style="color:#89DDFF;"> /&gt;}&gt;&lt;/</span><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Routes</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">BrowserRouter</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#F07178;">  )</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> App</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u8DF3\u8F6C" tabindex="-1">\u8DF3\u8F6C <a class="header-anchor" href="#\u8DF3\u8F6C" aria-hidden="true">#</a></h2><h3 id="\u9875\u9762\u8DF3\u8F6C" tabindex="-1">\u9875\u9762\u8DF3\u8F6C <a class="header-anchor" href="#\u9875\u9762\u8DF3\u8F6C" aria-hidden="true">#</a></h3><div class="language-tsx"><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Link</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">react-router-dom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Home</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&lt;&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">main</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h2</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Welcome to the homepage!</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h2</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">main</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">nav</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">to</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/about</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">About</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Link</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">nav</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/&gt;</span></span>\n<span class="line"><span style="color:#F07178;">  )</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h3 id="js\u8DF3\u8F6C" tabindex="-1">js\u8DF3\u8F6C <a class="header-anchor" href="#js\u8DF3\u8F6C" aria-hidden="true">#</a></h3><div class="language-tsx"><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">seNavigate</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">react-router-dom</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Register</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">navigator</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useNavigate</span><span style="color:#F07178;">()</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">navigator</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/home</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  )</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>navigete\u9ED8\u8BA4push\u6A21\u5F0F\uFF0C\u4F7F\u7528replace\u6A21\u5F0F\u9700\u8981\u6DFB\u52A0 navigate(&quot;/home&quot;, { replace: true })</p></div>', 17);
const _hoisted_18 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_18);
}
var _3_reactRouter = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _3_reactRouter as default };