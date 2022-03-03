import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.d8c531d5.js";
const __pageData = '{"title":"\u5E38\u7528npm\u5E93","description":"","frontmatter":{},"headers":[{"level":2,"title":"simple-git-hooks","slug":"simple-git-hooks"},{"level":2,"title":"mockjs","slug":"mockjs"},{"level":2,"title":"chalk","slug":"chalk"},{"level":2,"title":"@darkobits/lolcatjs","slug":"darkobits-lolcatjs"},{"level":2,"title":"figlet","slug":"figlet"},{"level":2,"title":"ora","slug":"ora"},{"level":3,"title":"fs/path","slug":"fs-path"},{"level":2,"title":"\u751F\u6210npm\u5305\u7684logo","slug":"\u751F\u6210npm\u5305\u7684logo"}],"relativePath":"notes/git-node/node/\u5E38\u7528npm\u5E93.md","lastUpdated":1646275349649}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u5E38\u7528npm\u5E93" tabindex="-1">\u5E38\u7528npm\u5E93 <a class="header-anchor" href="#\u5E38\u7528npm\u5E93" aria-hidden="true">#</a></h1><h2 id="simple-git-hooks" tabindex="-1">simple-git-hooks <a class="header-anchor" href="#simple-git-hooks" aria-hidden="true">#</a></h2><p>git\u94A9\u5B50\u5DE5\u5177,\u5728git commit\u548Cgit push\u524D\u89E6\u53D1\u4E00\u4E9B\u81EA\u5DF1\u60F3\u505A\u7684\u4E8B\u60C5</p><h2 id="mockjs" tabindex="-1">mockjs <a class="header-anchor" href="#mockjs" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="line"><span style="color:#A6ACCD;">npm i -s mockjs</span></span>\n<span class="line"></span></code></pre></div><div class="language-js"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">//\u5F15\u5165mockjs</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Mock </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mockjs</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">//\u4F7F\u7528mockjs\u6A21\u62DF\u6570\u636E</span></span>\n<span class="line"><span style="color:#A6ACCD;">Mock</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mock</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">ret</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">mtime</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@datetime</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//\u968F\u673A\u751F\u6210\u65E5\u671F\u65F6\u95F4</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">score|1-800</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">800</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//\u968F\u673A\u751F\u62101-800\u7684\u6570\u5B57</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">rank|1-100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//\u968F\u673A\u751F\u62101-100\u7684\u6570\u5B57</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">stars|1-5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//\u968F\u673A\u751F\u62101-5\u7684\u6570\u5B57</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">nickname</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@cname</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//\u968F\u673A\u751F\u6210\u4E2D\u6587\u540D\u5B57</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><p>main.js\u4E2D\u5F15\u7528</p><p>vue\u6587\u4EF6\u4E2D\u8BBF\u95EE</p><div class="language-js"><pre><code><span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">aaa</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">http</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h2 id="chalk" tabindex="-1">chalk <a class="header-anchor" href="#chalk" aria-hidden="true">#</a></h2><p>\u53EF\u8BBE\u7F6Enode\u73AF\u5883\u4E0B\uFF0Cconsole.log\u5B57\u4F53\u989C\u8272\u548C\u80CC\u666F\u989C\u8272\uFF0C\u53EF\u94FE\u5F0F\u8C03\u7528</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> chalk </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">chalk</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(chalk</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">red</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u7EA2\u8272</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span></span>\n<span class="line"></span></code></pre></div><h2 id="darkobits-lolcatjs" tabindex="-1">@darkobits/lolcatjs <a class="header-anchor" href="#darkobits-lolcatjs" aria-hidden="true">#</a></h2><p>\u53EF\u8BBE\u7F6Enode\u73AF\u5883\u4E0B\uFF0Cconsole.log\u5B57\u4F53\u989C\u8272\uFF0C\u989C\u8272\u968F\u673A,\u5373\u70AB\u5F69</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@darkobits/lolcatjs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> textColor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> lolcat</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fromString</span><span style="color:#A6ACCD;">(text)</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(chalk</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">red</span><span style="color:#A6ACCD;">(textColor))</span></span>\n<span class="line"></span></code></pre></div><p><img src="https://gitee.com/zqylzcwcxy/drawing-bed/raw/master/img/image-20211216154907336.png" alt="image-20211216154838905"></p><h2 id="figlet" tabindex="-1">figlet <a class="header-anchor" href="#figlet" aria-hidden="true">#</a></h2><p>\u53EF\u8BBE\u7F6Enode\u73AF\u5883\u4E0B\uFF0Cconsole.log\u6587\u672C\u4E3A\u5927\u800C\u597D\u770B\u7684logo\u6587\u672C\uFF0C\u642D\u914D@darkobits/lolcatjs \u6548\u679C\u66F4\u4F73\uFF08\u66F4\u82B1\u91CC\u80E1\u54E8\uFF09</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> figlet </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">figlet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> text </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> figlet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">textSync</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u8FD9\u65F6\u4E00\u884Clogo\u6587\u672C</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><h2 id="ora" tabindex="-1">ora <a class="header-anchor" href="#ora" aria-hidden="true">#</a></h2><p>\u8FDB\u5EA6\u6761 loading</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> ora </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ora</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> spinner </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ora</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u6B63\u5728\u4E0B\u8F7D\u9875\u9762\u6A21\u677F</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">start</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">spinner</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stop</span><span style="color:#F07178;">()</span></span>\n<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2000</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><div class="language-js"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">#! /usr/bin/env node</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> program </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">commander</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> inquirer </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inquirer</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> symbols </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">log-symbols</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> chalk </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">chalk</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> ora </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ora</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> shell </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">shelljs</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> hander </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> env </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">inquirer</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">prompt</span><span style="color:#F07178;">([</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">          type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">list</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">          name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">kind</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">          message</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u8BF7\u9009\u62E9\u4E0B\u8F7D\u6A21\u677F</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">          choices</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">angular</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">      ])</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">answers</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">spinner</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">ora</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u6B63\u5728\u4E0B\u8F7D\u9875\u9762\u6A21\u677F</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">start</span><span style="color:#F07178;">()</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">shell</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">which</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">git</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">shell</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">echo</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Sorry, this script requires git</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">shell</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exit</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">shell</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exec</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">git clone https://gitee.com/zqylzcwcxy/vite-vue3-ts-router-vuex-template.git</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">shell</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exec</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">sed -i &#39;&#39; -e &quot;s/vite-vue3-ts-router-vuex-template/</span><span style="color:#89DDFF;">${</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/g&quot; ./vite-vue3-ts-router-vuex-template/package.json</span><span style="color:#89DDFF;">`</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">spinner</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stop</span><span style="color:#F07178;">()</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">program</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">arguments</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;cmd&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">action</span><span style="color:#A6ACCD;">(cmd </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">hander</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">hander</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">hander</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">env</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">\u5F88\u62B1\u6B49\uFF0C\u6682\u672A\u5B9E\u73B0\u8BE5</span><span style="color:#89DDFF;">${</span><span style="color:#A6ACCD;">cmd</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">\u547D\u4EE4</span><span style="color:#89DDFF;">`</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// \u5904\u7406\u53C2\u6570\u5165\u53E3</span></span>\n<span class="line"><span style="color:#A6ACCD;">program</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#A6ACCD;">(process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">argv)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// shell.exec(`git add .`)</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// shell.exec(`git commit -m &quot;:sparkles:\u563F\u563F\uFF0C\u53C8\u524D\u8FDB\u4E86\u4E00\u70B9\u70B9&quot;`)</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// shell.exec(&quot;git push&quot;)</span></span>\n<span class="line"></span></code></pre></div><h3 id="fs-path" tabindex="-1">fs/path <a class="header-anchor" href="#fs-path" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// import fs from &quot;fs&quot;</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// import path from &quot;path&quot;</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// fs.readFile(&quot;./package.json&quot;, &quot;utf-8&quot;, res =&gt; {</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">//   console.log(11111, res)</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// })</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u751F\u6210npm\u5305\u7684logo" tabindex="-1">\u751F\u6210npm\u5305\u7684logo <a class="header-anchor" href="#\u751F\u6210npm\u5305\u7684logo" aria-hidden="true">#</a></h2><p>figlet\u642D\u914D@darkobits/lolcatjs</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> figlet </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">figlet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u8F6C\u6362\u6587\u672C\u6837\u5F0F\uFF0C\u6587\u672C</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> lolcat </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@darkobits/lolcatjs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u968F\u673A\u989C\u8272,\u4E5F\u5C31\u662F\u70AB\u5F69</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> text </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> figlet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">textSync</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">git-quick-push</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// \u8BBE\u7F6E\u6587\u672C\u6837\u5F0F</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> textColor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> lolcat</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fromString</span><span style="color:#A6ACCD;">(text) </span><span style="color:#676E95;font-style:italic;">// \u70AB\u5F69logo</span></span>\n<span class="line"></span></code></pre></div>', 28);
const _hoisted_29 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_29);
}
var __npm_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, __npm_ as default };
