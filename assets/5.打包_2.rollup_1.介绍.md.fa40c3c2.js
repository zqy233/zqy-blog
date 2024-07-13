import{_ as s,o as n,c as a,a as l}from"./app.bfa9bd4b.js";const d=JSON.parse('{"title":"介绍","description":"","frontmatter":{},"headers":[{"level":2,"title":"起步","slug":"起步","link":"#起步","children":[]},{"level":2,"title":"常用参数","slug":"常用参数","link":"#常用参数","children":[{"level":3,"title":"-c, --config","slug":"c-config","link":"#c-config","children":[]},{"level":3,"title":"strictDeprecations","slug":"strictdeprecations","link":"#strictdeprecations","children":[]}]},{"level":2,"title":"rollup.config.js","slug":"rollup-config-js","link":"#rollup-config-js","children":[]}],"relativePath":"5.打包/2.rollup/1.介绍.md","lastUpdated":1720835436706}'),p={name:"5.打包/2.rollup/1.介绍.md"},e=l(`<h1 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-hidden="true">#</a></h1><blockquote><p>中文文档 <a href="https://rollup-docs-cn.netlify.app/" target="_blank" rel="noreferrer">https://rollup-docs-cn.netlify.app/</a></p></blockquote><p>Rollup 是一个用于 JavaScript 的模块打包工具，它将小的代码片段编译成更大、更复杂的代码，例如库或应用程序。它使用 JavaScript 的 ES6 版本中包含的新标准化代码模块格式，而不是以前的 CommonJS 和 AMD 等特殊解决方案。ES 模块允许您自由无缝地组合您最喜欢的库中最有用的个别函数。这在未来将在所有场景原生支持，但 Rollup 让您今天就可以开始这样做。</p><h2 id="起步" tabindex="-1">起步 <a class="header-anchor" href="#起步" aria-hidden="true">#</a></h2><p>新建一个空项目，导入<code>rollup</code></p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">pnpm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-D</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">rollup</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">pnpm </span><span style="color:#9DB1C5;">i</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">-D</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">rollup</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>新建<code>src/main.js</code></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">foo</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;./foo.js&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">foo</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#B392F0;"> foo </span><span style="color:#F97583;">from</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;./foo.js&#39;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">default</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">function</span><span style="color:#B392F0;"> () {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">console</span><span style="color:#B392F0;">.log(foo);</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>新建<code>src/foo.js</code></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;hello world!&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">default</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;hello world!&#39;</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>根目录新建<code>rollup.config.js</code>，这是rollup默认的配置文件，rollup会读取其中配置进行打包</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 入口</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">input</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;src/main.js&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 出口（输出）</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">output</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 文件名</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">file</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;bundle.js&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 打包格式为commonjs</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">format</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;cjs&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">default</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#6B737C;">// 入口</span></span>
<span class="line"><span style="color:#B392F0;">  input</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;src/main.js&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#6B737C;">// 出口（输出）</span></span>
<span class="line"><span style="color:#B392F0;">  output</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#6B737C;">// 文件名</span></span>
<span class="line"><span style="color:#B392F0;">    file</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;bundle.js&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#6B737C;">// 打包格式为commonjs</span></span>
<span class="line"><span style="color:#B392F0;">    format</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;cjs&#39;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><code>package.json</code>加入<code>scripts</code>， <code>--config</code>参数表示使用配置文件，即<code>rollup.config.js</code></p><p><code>package.json</code>加入<code>&quot;type&quot;: &quot;module&quot;,</code>，表示是es模块</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#98C379;">&quot;scripts&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;build&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;rollup --config&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#FFAB70;">&quot;scripts&quot;</span><span style="color:#B392F0;">: {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#F8F8F8;">&quot;build&quot;</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;rollup --config&quot;</span></span>
<span class="line"><span style="color:#B392F0;">  },</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>npm run build</code>后，生成<code>bundle.js</code>文件，内容就是<code>main.js</code>和<code>foo.js</code>打包后的代码</p><h2 id="常用参数" tabindex="-1">常用参数 <a class="header-anchor" href="#常用参数" aria-hidden="true">#</a></h2><h3 id="c-config" tabindex="-1">-c, --config <a class="header-anchor" href="#c-config" aria-hidden="true">#</a></h3><p>使用配置文件，如果未指定配置文件，则默认为<code>rollup.config.js</code></p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">-c,</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--config</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#98C379;">filenam</span><span style="color:#ABB2BF;">e&gt; </span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">-c, </span><span style="color:#9DB1C5;">--config</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9DB1C5;">filenam</span><span style="color:#B392F0;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#B392F0;"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="w-watch" tabindex="-1">w/--watch <a class="header-anchor" href="#w-watch" aria-hidden="true">#</a></h4><p>当源文件在磁盘上发生变化时重新打包</p><h3 id="strictdeprecations" tabindex="-1">strictDeprecations <a class="header-anchor" href="#strictdeprecations" aria-hidden="true">#</a></h3><p>报错来提醒废弃特性，常用于api变更的场景</p><h2 id="rollup-config-js" tabindex="-1">rollup.config.js <a class="header-anchor" href="#rollup-config-js" aria-hidden="true">#</a></h2><p>总共有以下这些配置</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// core input options</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">external</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">input</span><span style="color:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;">// conditionally required</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">plugins</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// advanced input options</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">cache</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">onwarn</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">preserveEntrySignatures</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">strictDeprecations</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// danger zone</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">acorn</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">acornInjectPlugins</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">context</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">moduleContext</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">preserveSymlinks</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">shimMissingExports</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">treeshake</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// experimental</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">experimentalCacheExpiry</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">perf</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// required (can be an array, for multiple outputs)</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">output</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// core output options</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">dir</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">file</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">format</span><span style="color:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;">// required</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">globals</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">plugins</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// advanced output options</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">assetFileNames</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">banner</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">chunkFileNames</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">compact</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">entryFileNames</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">extend</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">footer</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">hoistTransitiveImports</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">inlineDynamicImports</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">interop</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">intro</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">manualChunks</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">minifyInternalExports</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">outro</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">paths</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">preserveModules</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">preserveModulesRoot</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">sourcemap</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">sourcemapExcludeSources</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">sourcemapFile</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">sourcemapPathTransform</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">validate</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// danger zone</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">amd</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">esModule</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">exports</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">externalLiveBindings</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">freeze</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">indent</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">namespaceToStringTag</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">noConflict</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">preferConst</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">sanitizeFileName</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">strict</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">systemNullSetters</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">watch</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">buildDelay</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">chokidar</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">clearScreen</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">skipWrite</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">exclude</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">include</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">default</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#6B737C;">// core input options</span></span>
<span class="line"><span style="color:#B392F0;">  external</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  input</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#6B737C;">// conditionally required</span></span>
<span class="line"><span style="color:#B392F0;">  plugins</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#6B737C;">// advanced input options</span></span>
<span class="line"><span style="color:#B392F0;">  cache</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  onwarn</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  preserveEntrySignatures</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  strictDeprecations</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#6B737C;">// danger zone</span></span>
<span class="line"><span style="color:#B392F0;">  acorn</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  acornInjectPlugins</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  context</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  moduleContext</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  preserveSymlinks</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  shimMissingExports</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  treeshake</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#6B737C;">// experimental</span></span>
<span class="line"><span style="color:#B392F0;">  experimentalCacheExpiry</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  perf</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#6B737C;">// required (can be an array, for multiple outputs)</span></span>
<span class="line"><span style="color:#B392F0;">  output</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#6B737C;">// core output options</span></span>
<span class="line"><span style="color:#B392F0;">    dir</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    file</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    format</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#6B737C;">// required</span></span>
<span class="line"><span style="color:#B392F0;">    globals</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    name</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    plugins</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#6B737C;">// advanced output options</span></span>
<span class="line"><span style="color:#B392F0;">    assetFileNames</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    banner</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    chunkFileNames</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    compact</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    entryFileNames</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    extend</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    footer</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    hoistTransitiveImports</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    inlineDynamicImports</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    interop</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    intro</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    manualChunks</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    minifyInternalExports</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    outro</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    paths</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    preserveModules</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    preserveModulesRoot</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    sourcemap</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    sourcemapExcludeSources</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    sourcemapFile</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    sourcemapPathTransform</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    validate</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#6B737C;">// danger zone</span></span>
<span class="line"><span style="color:#B392F0;">    amd</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    esModule</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    exports</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    externalLiveBindings</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    freeze</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    indent</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    namespaceToStringTag</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    noConflict</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    preferConst</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    sanitizeFileName</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    strict</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    systemNullSetters</span></span>
<span class="line"><span style="color:#B392F0;">  }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  watch</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    buildDelay</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    chokidar</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    clearScreen</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    skipWrite</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    exclude</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    include</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br></div></div>`,27),o=[e];function c(r,B,t,i,y,F){return n(),a("div",null,o)}const b=s(p,[["render",c]]);export{d as __pageData,b as default};
