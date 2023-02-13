import{_ as s,c as n,o as a,a as l}from"./app.a9997904.js";const d=JSON.parse('{"title":"起步","description":"","frontmatter":{},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"初始化编辑器","slug":"初始化编辑器","link":"#初始化编辑器","children":[]},{"level":2,"title":"在页面上加载Monaco","slug":"在页面上加载monaco","link":"#在页面上加载monaco","children":[]},{"level":2,"title":"载入自己的Type Definition","slug":"载入自己的type-definition","link":"#载入自己的type-definition","children":[]},{"level":2,"title":"注册主题","slug":"注册主题","link":"#注册主题","children":[]},{"level":2,"title":"更新编辑器配置","slug":"更新编辑器配置","link":"#更新编辑器配置","children":[]}],"relativePath":"4.第三方库/Monaco-Editor/Monaco-Editor.md","lastUpdated":1676276426000}'),p={name:"4.第三方库/Monaco-Editor/Monaco-Editor.md"},e=l(`<h1 id="起步" tabindex="-1">起步 <a class="header-anchor" href="#起步" aria-hidden="true">#</a></h1><blockquote><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fmicrosoft.github.io%2Fmonaco-editor%2F" target="_blank" rel="noreferrer">Monaco Editor</a> 是 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FMicrosoft%2Fvscode" target="_blank" rel="noreferrer">VS Code</a> 底层的代码编辑器，开源协议是MIT，支持Edge、 Chrome、Firefox、Safari和Opera浏览器，但是不支持移动端浏览器或移动端框架</p></blockquote><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">npm </span><span style="color:#98C379;">install</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">monaco-editor</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">npm </span><span style="color:#9DB1C5;">install</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">monaco-editor</span><span style="color:#B392F0;"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">monaco</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;monaco-editor/esm/vs/editor/editor.main.js&quot;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">*</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">as</span><span style="color:#B392F0;"> monaco </span><span style="color:#F97583;">from</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;monaco-editor/esm/vs/editor/editor.main.js&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="初始化编辑器" tabindex="-1">初始化编辑器 <a class="header-anchor" href="#初始化编辑器" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 初始化的dom节点</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">monacoEditor</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">monaco</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">editor</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">create</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">targetDom</span><span style="color:#ABB2BF;">, { </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;">// 初始化值     </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">readOnly</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;">// 是否只读</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">language</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;json&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;">// 语言类型     </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">theme</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;vs-dark&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;">// 主题 </span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#6B737C;">// 初始化的dom节点</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">monacoEditor</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">monaco</span><span style="color:#B392F0;">.</span><span style="color:#79B8FF;">editor</span><span style="color:#B392F0;">.create(targetDom</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> { </span></span>
<span class="line"><span style="color:#B392F0;">    value</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;&#39;</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#6B737C;">// 初始化值     </span></span>
<span class="line"><span style="color:#B392F0;">    readOnly</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">false</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#6B737C;">// 是否只读</span></span>
<span class="line"><span style="color:#B392F0;">    language</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;json&#39;</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#6B737C;">// 语言类型     </span></span>
<span class="line"><span style="color:#B392F0;">    theme</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;vs-dark&#39;</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#6B737C;">// 主题 </span></span>
<span class="line"><span style="color:#B392F0;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 初始化编辑器的值 </span></span>
<span class="line"><span style="color:#E5C07B;">monacoEditor</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setValue</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">\`{&quot;key&quot;:&quot;value&quot;}\`</span><span style="color:#ABB2BF;">) </span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 获取件编辑器的值 </span></span>
<span class="line"><span style="color:#E5C07B;">monacoEditor</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getValue</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 注销编辑器实例 </span></span>
<span class="line"><span style="color:#E5C07B;">monacoEditor</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">dispose</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#6B737C;">// 初始化编辑器的值 </span></span>
<span class="line"><span style="color:#79B8FF;">monacoEditor</span><span style="color:#B392F0;">.setValue(</span><span style="color:#FFAB70;">\`{&quot;key&quot;:&quot;value&quot;}\`</span><span style="color:#B392F0;">) </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6B737C;">// 获取件编辑器的值 </span></span>
<span class="line"><span style="color:#79B8FF;">monacoEditor</span><span style="color:#B392F0;">.getValue();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6B737C;">// 注销编辑器实例 </span></span>
<span class="line"><span style="color:#79B8FF;">monacoEditor</span><span style="color:#B392F0;">.dispose()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="在页面上加载monaco" tabindex="-1">在页面上加载Monaco <a class="header-anchor" href="#在页面上加载monaco" aria-hidden="true">#</a></h2><h2 id="载入自己的type-definition" tabindex="-1">载入自己的Type Definition <a class="header-anchor" href="#载入自己的type-definition" aria-hidden="true">#</a></h2><p>需要使用monaco.languages.typescript.javascriptDefaults.addExtraLib 以及 monaco.editor.createModel</p><p>提前准备index.d.ts，如果内容小直接塞代码里。 我这里直接把文件放到了public文件下面。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">libUri</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;ts:filename/index.d.ts&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">libSource</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">await</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">axios</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;index.d.ts&quot;</span><span style="color:#ABB2BF;">)).</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;">monaco</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">languages</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">typescript</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">javascriptDefaults</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">addExtraLib</span><span style="color:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">libSource</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">libUri</span></span>
<span class="line"><span style="color:#ABB2BF;">  );</span></span>
<span class="line"><span style="color:#E5C07B;">monaco</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">editor</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">createModel</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">libSource</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;typescript&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">monaco</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">Uri</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">parse</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">libUri</span><span style="color:#ABB2BF;">));</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> {} </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;echarts/charts.d.ts&quot;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#B392F0;"> libUri </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;ts:filename/index.d.ts&#39;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#B392F0;"> libSource </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> (</span><span style="color:#F97583;">await</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">axios</span><span style="color:#B392F0;">.get(</span><span style="color:#FFAB70;">&quot;index.d.ts&quot;</span><span style="color:#B392F0;">)).data;</span></span>
<span class="line"><span style="color:#79B8FF;">monaco</span><span style="color:#B392F0;">.</span><span style="color:#79B8FF;">languages</span><span style="color:#B392F0;">.</span><span style="color:#79B8FF;">typescript</span><span style="color:#B392F0;">.</span><span style="color:#79B8FF;">javascriptDefaults</span><span style="color:#B392F0;">.addExtraLib(</span></span>
<span class="line"><span style="color:#B392F0;">      libSource</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">      libUri</span></span>
<span class="line"><span style="color:#B392F0;">  );</span></span>
<span class="line"><span style="color:#79B8FF;">monaco</span><span style="color:#B392F0;">.</span><span style="color:#79B8FF;">editor</span><span style="color:#B392F0;">.createModel(libSource</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;typescript&#39;</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">monaco</span><span style="color:#B392F0;">.</span><span style="color:#79B8FF;">Uri</span><span style="color:#B392F0;">.parse(libUri));</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#B392F0;"> {} </span><span style="color:#F97583;">from</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;echarts/charts.d.ts&quot;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="注册主题" tabindex="-1">注册主题 <a class="header-anchor" href="#注册主题" aria-hidden="true">#</a></h2><p>主题的配置创建完成之后，我们可以在 monaco-editor 中定义属于我们的主题了：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">monaco</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;monaco-editor&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">theme</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;../lib/markdownEx-theme.js&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">monaco</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">editor</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">defineTheme</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;acrmd&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">theme</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">mdEditor</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">monaco</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">editor</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">create</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">containerDom</span><span style="color:#ABB2BF;">, {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">theme</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;acrmd&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">//...</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">*</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">as</span><span style="color:#B392F0;"> monaco </span><span style="color:#F97583;">from</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;monaco-editor&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#B392F0;"> theme </span><span style="color:#F97583;">from</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;../lib/markdownEx-theme.js&#39;</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">monaco</span><span style="color:#B392F0;">.</span><span style="color:#79B8FF;">editor</span><span style="color:#B392F0;">.defineTheme(</span><span style="color:#FFAB70;">&quot;acrmd&quot;</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> theme);</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#B392F0;"> mdEditor </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">monaco</span><span style="color:#B392F0;">.</span><span style="color:#79B8FF;">editor</span><span style="color:#B392F0;">.create(containerDom</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    value</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;&quot;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    theme</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;acrmd&quot;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#6B737C;">//...</span></span>
<span class="line"><span style="color:#B392F0;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">  &lt;el-button type=&quot;primary&quot; @click=&quot;run&quot;&gt;运行&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">  &lt;div ref=&quot;editContainer&quot; class=&quot;code-editor&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">import { onMounted, ref } from &quot;vue&quot;</span></span>
<span class="line"><span style="color:#abb2bf;">import TsWorker from &quot;monaco-editor/esm/vs/language/typescript/ts.worker?worker&quot;</span></span>
<span class="line"><span style="color:#abb2bf;">import EditorWorker from &quot;monaco-editor/esm/vs/editor/editor.worker?worker&quot;</span></span>
<span class="line"><span style="color:#abb2bf;">import * as monaco from &quot;monaco-editor&quot;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">// @ts-ignore</span></span>
<span class="line"><span style="color:#abb2bf;">self.MonacoEnvironment = {</span></span>
<span class="line"><span style="color:#abb2bf;">  getWorker(_: string, label: string) {</span></span>
<span class="line"><span style="color:#abb2bf;">    if ([&quot;typescript&quot;, &quot;javascript&quot;].includes(label)) {</span></span>
<span class="line"><span style="color:#abb2bf;">      return new TsWorker()</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">    return new EditorWorker()</span></span>
<span class="line"><span style="color:#abb2bf;">  }</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">const props = defineProps&lt;{</span></span>
<span class="line"><span style="color:#abb2bf;">  modelValue: string</span></span>
<span class="line"><span style="color:#abb2bf;">}&gt;()</span></span>
<span class="line"><span style="color:#abb2bf;">const emits = defineEmits&lt;{</span></span>
<span class="line"><span style="color:#abb2bf;">  (e: &quot;update:modelValue&quot;, b: string): void</span></span>
<span class="line"><span style="color:#abb2bf;">  (e: &quot;run&quot;): void</span></span>
<span class="line"><span style="color:#abb2bf;">}&gt;()</span></span>
<span class="line"><span style="color:#abb2bf;">const run = () =&gt; {</span></span>
<span class="line"><span style="color:#abb2bf;">  emits(&quot;run&quot;)</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">// watch(</span></span>
<span class="line"><span style="color:#abb2bf;">//   () =&gt; props.value,</span></span>
<span class="line"><span style="color:#abb2bf;">//   value =&gt; {</span></span>
<span class="line"><span style="color:#abb2bf;">//     // 防止改变编辑器内容时光标重定向</span></span>
<span class="line"><span style="color:#abb2bf;">//     if (value !== monacoEditor?.getValue()) {</span></span>
<span class="line"><span style="color:#abb2bf;">//       monacoEditor.setValue(value)</span></span>
<span class="line"><span style="color:#abb2bf;">//     }</span></span>
<span class="line"><span style="color:#abb2bf;">//   }</span></span>
<span class="line"><span style="color:#abb2bf;">// )</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">const editContainer = ref&lt;null | HTMLElement&gt;(null)</span></span>
<span class="line"><span style="color:#abb2bf;">onMounted(() =&gt; {</span></span>
<span class="line"><span style="color:#abb2bf;">  // 自定义代码补全</span></span>
<span class="line"><span style="color:#abb2bf;">  const keywords = [&quot;options&quot;]</span></span>
<span class="line"><span style="color:#abb2bf;">  monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({</span></span>
<span class="line"><span style="color:#abb2bf;">    noSemanticValidation: true,</span></span>
<span class="line"><span style="color:#abb2bf;">    noSyntaxValidation: false</span></span>
<span class="line"><span style="color:#abb2bf;">  })</span></span>
<span class="line"><span style="color:#abb2bf;">  monaco.languages.typescript.javascriptDefaults.setCompilerOptions({</span></span>
<span class="line"><span style="color:#abb2bf;">    target: monaco.languages.typescript.ScriptTarget.ES2016,</span></span>
<span class="line"><span style="color:#abb2bf;">    allowNonTsExtensions: true</span></span>
<span class="line"><span style="color:#abb2bf;">  })</span></span>
<span class="line"><span style="color:#abb2bf;">  monaco.languages.registerCompletionItemProvider(&quot;typescript&quot;, {</span></span>
<span class="line"><span style="color:#abb2bf;">    provideCompletionItems: () =&gt; {</span></span>
<span class="line"><span style="color:#abb2bf;">      let suggestions: any[] = []</span></span>
<span class="line"><span style="color:#abb2bf;">      keywords.forEach(item =&gt; {</span></span>
<span class="line"><span style="color:#abb2bf;">        suggestions.push({</span></span>
<span class="line"><span style="color:#abb2bf;">          detail: &quot;任何文字提示&quot;, // 代码补全右侧文本提示</span></span>
<span class="line"><span style="color:#abb2bf;">          label: item, // 代码补全左侧文本</span></span>
<span class="line"><span style="color:#abb2bf;">          insertText: item, // 插入编辑器中的补全代码</span></span>
<span class="line"><span style="color:#abb2bf;">          kind: monaco.languages.CompletionItemKind.Function // 代码补全最左侧显示的图标</span></span>
<span class="line"><span style="color:#abb2bf;">        })</span></span>
<span class="line"><span style="color:#abb2bf;">      })</span></span>
<span class="line"><span style="color:#abb2bf;">      return {</span></span>
<span class="line"><span style="color:#abb2bf;">        suggestions: suggestions</span></span>
<span class="line"><span style="color:#abb2bf;">      }</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">  })</span></span>
<span class="line"><span style="color:#abb2bf;">  const monacoEditor = monaco.editor.create(editContainer.value as HTMLElement, {</span></span>
<span class="line"><span style="color:#abb2bf;">    value: props.modelValue,</span></span>
<span class="line"><span style="color:#abb2bf;">    readOnly: false, // 只读</span></span>
<span class="line"><span style="color:#abb2bf;">    language: &quot;typescript&quot;, // 语言</span></span>
<span class="line"><span style="color:#abb2bf;">    theme: &quot;vs-dark&quot;, // 主题，黑暗主题为vs-dark</span></span>
<span class="line"><span style="color:#abb2bf;">    selectOnLineNumbers: true, // 选中行数</span></span>
<span class="line"><span style="color:#abb2bf;">    automaticLayout: true, // 自动调整布局</span></span>
<span class="line"><span style="color:#abb2bf;">    fontSize: 18, //字体大小</span></span>
<span class="line"><span style="color:#abb2bf;">    autoIndent: &quot;keep&quot;, //自动空行</span></span>
<span class="line"><span style="color:#abb2bf;">    folding: true, // 是否启用代码折叠</span></span>
<span class="line"><span style="color:#abb2bf;">    scrollBeyondLastLine: false, // 不到最后一行就开始滚动</span></span>
<span class="line"><span style="color:#abb2bf;">    wordWrap: &quot;on&quot;, // 自动换行</span></span>
<span class="line"><span style="color:#abb2bf;">    showUnused: false // 不显示未使用的变量</span></span>
<span class="line"><span style="color:#abb2bf;">  })</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">  // 编辑器内容发生变化时触发</span></span>
<span class="line"><span style="color:#abb2bf;">  monacoEditor.onDidChangeModelContent(() =&gt; {</span></span>
<span class="line"><span style="color:#abb2bf;">    const currenValue = monacoEditor?.getValue() // 获取编辑器内容</span></span>
<span class="line"><span style="color:#abb2bf;">    emits(&quot;update:modelValue&quot;, currenValue) // 传递父组件v-model值</span></span>
<span class="line"><span style="color:#abb2bf;">  })</span></span>
<span class="line"><span style="color:#abb2bf;">})</span></span>
<span class="line"><span style="color:#abb2bf;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">.code-editor {</span></span>
<span class="line"><span style="color:#abb2bf;">  height: 100%;</span></span>
<span class="line"><span style="color:#abb2bf;">  /* border: 1px solid skyblue; */</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#b392f0;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#b392f0;">  &lt;el-button type=&quot;primary&quot; @click=&quot;run&quot;&gt;运行&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#b392f0;">  &lt;div ref=&quot;editContainer&quot; class=&quot;code-editor&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#b392f0;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#b392f0;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#b392f0;">import { onMounted, ref } from &quot;vue&quot;</span></span>
<span class="line"><span style="color:#b392f0;">import TsWorker from &quot;monaco-editor/esm/vs/language/typescript/ts.worker?worker&quot;</span></span>
<span class="line"><span style="color:#b392f0;">import EditorWorker from &quot;monaco-editor/esm/vs/editor/editor.worker?worker&quot;</span></span>
<span class="line"><span style="color:#b392f0;">import * as monaco from &quot;monaco-editor&quot;</span></span>
<span class="line"><span style="color:#b392f0;"></span></span>
<span class="line"><span style="color:#b392f0;">// @ts-ignore</span></span>
<span class="line"><span style="color:#b392f0;">self.MonacoEnvironment = {</span></span>
<span class="line"><span style="color:#b392f0;">  getWorker(_: string, label: string) {</span></span>
<span class="line"><span style="color:#b392f0;">    if ([&quot;typescript&quot;, &quot;javascript&quot;].includes(label)) {</span></span>
<span class="line"><span style="color:#b392f0;">      return new TsWorker()</span></span>
<span class="line"><span style="color:#b392f0;">    }</span></span>
<span class="line"><span style="color:#b392f0;">    return new EditorWorker()</span></span>
<span class="line"><span style="color:#b392f0;">  }</span></span>
<span class="line"><span style="color:#b392f0;">}</span></span>
<span class="line"><span style="color:#b392f0;"></span></span>
<span class="line"><span style="color:#b392f0;">const props = defineProps&lt;{</span></span>
<span class="line"><span style="color:#b392f0;">  modelValue: string</span></span>
<span class="line"><span style="color:#b392f0;">}&gt;()</span></span>
<span class="line"><span style="color:#b392f0;">const emits = defineEmits&lt;{</span></span>
<span class="line"><span style="color:#b392f0;">  (e: &quot;update:modelValue&quot;, b: string): void</span></span>
<span class="line"><span style="color:#b392f0;">  (e: &quot;run&quot;): void</span></span>
<span class="line"><span style="color:#b392f0;">}&gt;()</span></span>
<span class="line"><span style="color:#b392f0;">const run = () =&gt; {</span></span>
<span class="line"><span style="color:#b392f0;">  emits(&quot;run&quot;)</span></span>
<span class="line"><span style="color:#b392f0;">}</span></span>
<span class="line"><span style="color:#b392f0;"></span></span>
<span class="line"><span style="color:#b392f0;">// watch(</span></span>
<span class="line"><span style="color:#b392f0;">//   () =&gt; props.value,</span></span>
<span class="line"><span style="color:#b392f0;">//   value =&gt; {</span></span>
<span class="line"><span style="color:#b392f0;">//     // 防止改变编辑器内容时光标重定向</span></span>
<span class="line"><span style="color:#b392f0;">//     if (value !== monacoEditor?.getValue()) {</span></span>
<span class="line"><span style="color:#b392f0;">//       monacoEditor.setValue(value)</span></span>
<span class="line"><span style="color:#b392f0;">//     }</span></span>
<span class="line"><span style="color:#b392f0;">//   }</span></span>
<span class="line"><span style="color:#b392f0;">// )</span></span>
<span class="line"><span style="color:#b392f0;"></span></span>
<span class="line"><span style="color:#b392f0;">const editContainer = ref&lt;null | HTMLElement&gt;(null)</span></span>
<span class="line"><span style="color:#b392f0;">onMounted(() =&gt; {</span></span>
<span class="line"><span style="color:#b392f0;">  // 自定义代码补全</span></span>
<span class="line"><span style="color:#b392f0;">  const keywords = [&quot;options&quot;]</span></span>
<span class="line"><span style="color:#b392f0;">  monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({</span></span>
<span class="line"><span style="color:#b392f0;">    noSemanticValidation: true,</span></span>
<span class="line"><span style="color:#b392f0;">    noSyntaxValidation: false</span></span>
<span class="line"><span style="color:#b392f0;">  })</span></span>
<span class="line"><span style="color:#b392f0;">  monaco.languages.typescript.javascriptDefaults.setCompilerOptions({</span></span>
<span class="line"><span style="color:#b392f0;">    target: monaco.languages.typescript.ScriptTarget.ES2016,</span></span>
<span class="line"><span style="color:#b392f0;">    allowNonTsExtensions: true</span></span>
<span class="line"><span style="color:#b392f0;">  })</span></span>
<span class="line"><span style="color:#b392f0;">  monaco.languages.registerCompletionItemProvider(&quot;typescript&quot;, {</span></span>
<span class="line"><span style="color:#b392f0;">    provideCompletionItems: () =&gt; {</span></span>
<span class="line"><span style="color:#b392f0;">      let suggestions: any[] = []</span></span>
<span class="line"><span style="color:#b392f0;">      keywords.forEach(item =&gt; {</span></span>
<span class="line"><span style="color:#b392f0;">        suggestions.push({</span></span>
<span class="line"><span style="color:#b392f0;">          detail: &quot;任何文字提示&quot;, // 代码补全右侧文本提示</span></span>
<span class="line"><span style="color:#b392f0;">          label: item, // 代码补全左侧文本</span></span>
<span class="line"><span style="color:#b392f0;">          insertText: item, // 插入编辑器中的补全代码</span></span>
<span class="line"><span style="color:#b392f0;">          kind: monaco.languages.CompletionItemKind.Function // 代码补全最左侧显示的图标</span></span>
<span class="line"><span style="color:#b392f0;">        })</span></span>
<span class="line"><span style="color:#b392f0;">      })</span></span>
<span class="line"><span style="color:#b392f0;">      return {</span></span>
<span class="line"><span style="color:#b392f0;">        suggestions: suggestions</span></span>
<span class="line"><span style="color:#b392f0;">      }</span></span>
<span class="line"><span style="color:#b392f0;">    }</span></span>
<span class="line"><span style="color:#b392f0;">  })</span></span>
<span class="line"><span style="color:#b392f0;">  const monacoEditor = monaco.editor.create(editContainer.value as HTMLElement, {</span></span>
<span class="line"><span style="color:#b392f0;">    value: props.modelValue,</span></span>
<span class="line"><span style="color:#b392f0;">    readOnly: false, // 只读</span></span>
<span class="line"><span style="color:#b392f0;">    language: &quot;typescript&quot;, // 语言</span></span>
<span class="line"><span style="color:#b392f0;">    theme: &quot;vs-dark&quot;, // 主题，黑暗主题为vs-dark</span></span>
<span class="line"><span style="color:#b392f0;">    selectOnLineNumbers: true, // 选中行数</span></span>
<span class="line"><span style="color:#b392f0;">    automaticLayout: true, // 自动调整布局</span></span>
<span class="line"><span style="color:#b392f0;">    fontSize: 18, //字体大小</span></span>
<span class="line"><span style="color:#b392f0;">    autoIndent: &quot;keep&quot;, //自动空行</span></span>
<span class="line"><span style="color:#b392f0;">    folding: true, // 是否启用代码折叠</span></span>
<span class="line"><span style="color:#b392f0;">    scrollBeyondLastLine: false, // 不到最后一行就开始滚动</span></span>
<span class="line"><span style="color:#b392f0;">    wordWrap: &quot;on&quot;, // 自动换行</span></span>
<span class="line"><span style="color:#b392f0;">    showUnused: false // 不显示未使用的变量</span></span>
<span class="line"><span style="color:#b392f0;">  })</span></span>
<span class="line"><span style="color:#b392f0;"></span></span>
<span class="line"><span style="color:#b392f0;">  // 编辑器内容发生变化时触发</span></span>
<span class="line"><span style="color:#b392f0;">  monacoEditor.onDidChangeModelContent(() =&gt; {</span></span>
<span class="line"><span style="color:#b392f0;">    const currenValue = monacoEditor?.getValue() // 获取编辑器内容</span></span>
<span class="line"><span style="color:#b392f0;">    emits(&quot;update:modelValue&quot;, currenValue) // 传递父组件v-model值</span></span>
<span class="line"><span style="color:#b392f0;">  })</span></span>
<span class="line"><span style="color:#b392f0;">})</span></span>
<span class="line"><span style="color:#b392f0;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#b392f0;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#b392f0;">.code-editor {</span></span>
<span class="line"><span style="color:#b392f0;">  height: 100%;</span></span>
<span class="line"><span style="color:#b392f0;">  /* border: 1px solid skyblue; */</span></span>
<span class="line"><span style="color:#b392f0;">}</span></span>
<span class="line"><span style="color:#b392f0;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#b392f0;"></span></span>
<span class="line"><span style="color:#b392f0;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br></div></div><h2 id="更新编辑器配置" tabindex="-1">更新编辑器配置 <a class="header-anchor" href="#更新编辑器配置" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">monacoEditor</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">updateOptions</span><span style="color:#ABB2BF;">({</span><span style="color:#E06C75;">readOnly</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">});</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#79B8FF;">monacoEditor</span><span style="color:#B392F0;">.updateOptions({readOnly</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">true</span><span style="color:#B392F0;">});</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,19),o=[e];function r(t,c,i,b,y,B){return a(),n("div",null,o)}const m=s(p,[["render",r]]);export{d as __pageData,m as default};
