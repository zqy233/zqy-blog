import{_ as s,c as n,o as a,a as l}from"./app.a9997904.js";const d=JSON.parse('{"title":"scss","description":"","frontmatter":{},"headers":[{"level":2,"title":"dart-sass与node-sass区别","slug":"dart-sass与node-sass区别","link":"#dart-sass与node-sass区别","children":[]},{"level":2,"title":"sass和scss的区别","slug":"sass和scss的区别","link":"#sass和scss的区别","children":[]},{"level":2,"title":"html中使用","slug":"html中使用","link":"#html中使用","children":[]},{"level":2,"title":"vue中使用","slug":"vue中使用","link":"#vue中使用","children":[{"level":3,"title":"局部使用","slug":"局部使用","link":"#局部使用","children":[]},{"level":3,"title":"全局使用","slug":"全局使用","link":"#全局使用","children":[]}]},{"level":2,"title":"嵌套css规则","slug":"嵌套css规则","link":"#嵌套css规则","children":[]},{"level":2,"title":"& 父选择器","slug":"父选择器","link":"#父选择器","children":[]},{"level":2,"title":"属性嵌套","slug":"属性嵌套","link":"#属性嵌套","children":[]},{"level":2,"title":"$ 定义变量","slug":"定义变量","link":"#定义变量","children":[{"level":3,"title":"连接符与下划线","slug":"连接符与下划线","link":"#连接符与下划线","children":[]},{"level":3,"title":"全局变量","slug":"全局变量","link":"#全局变量","children":[]},{"level":3,"title":"默认值","slug":"默认值","link":"#默认值","children":[]}]},{"level":2,"title":"与css遍历区别","slug":"与css遍历区别","link":"#与css遍历区别","children":[]},{"level":2,"title":"@import","slug":"import","link":"#import","children":[]},{"level":2,"title":"@mixin","slug":"mixin","link":"#mixin","children":[]}],"relativePath":"1.前端基础/2.css/4.scss.md","lastUpdated":1676276426000}'),p={name:"1.前端基础/2.css/4.scss.md"},e=l(`<h1 id="scss" tabindex="-1">scss <a class="header-anchor" href="#scss" aria-hidden="true">#</a></h1><h2 id="dart-sass与node-sass区别" tabindex="-1">dart-sass与node-sass区别 <a class="header-anchor" href="#dart-sass与node-sass区别" aria-hidden="true">#</a></h2><p>相同点：都是用来将 sass 编译成 css 的工具</p><p>区别：</p><ul><li>node-sass 是用 node (调用 cpp 编写的 libsass) 来编译 sass，dart-sass是用 drat VM 来编译 sass</li><li>node-sass 是实时自动编译的，dart-sass 需要保存后才会生效</li><li>dart sass是sass的主要实现，它快速，易于安装，并且可以编译为纯 JavaScript，从而可以轻松集成到现代 Web开发工作流中，sass 官方目前主力推 dart-sass，最新的特性都会在这个上面先实现</li></ul><h2 id="sass和scss的区别" tabindex="-1">sass和scss的区别 <a class="header-anchor" href="#sass和scss的区别" aria-hidden="true">#</a></h2><p>主要在于缩进语法的区别，原先版本称为sass，不使用{}的写法，第三代开始，使用传统的{}的写法，称为scss</p><h2 id="html中使用" tabindex="-1">html中使用 <a class="header-anchor" href="#html中使用" aria-hidden="true">#</a></h2><p>搭配vscode插件live sass compiler，点击vscode下方栏中图标，即可自动转换scss文件为css文件</p><p>vscode的settings.json可以配置live sass compiler，scss有以下输出风格</p><ul><li>nested 嵌套格式</li><li>expanded 展开格式</li><li>compact 紧凑格式</li><li>compressed 压缩格式</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;liveSassCompile.settings.formats&quot;</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#98C379;">&quot;format&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;nested&quot;</span><span style="color:#ABB2BF;">,  </span><span style="color:#7F848E;font-style:italic;">// nested/expanded/compact/compressed四种格式</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#98C379;">&quot;extensionName&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;.css&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#98C379;">&quot;savePath&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">// 为null代表当前目录</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  ],</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;liveSassCompile.settings.generateMap&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;">// 不生成map.css</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;liveSassCompile.settings.autoprefix&quot;</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">&quot;&gt; 1%&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;last 2 versions&quot;</span><span style="color:#ABB2BF;">], </span><span style="color:#7F848E;font-style:italic;">// 自动添加兼容前缀</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;liveSassCompile.settings.excludeList&quot;</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">&quot;**/node_modules/**&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;.vscode/**&quot;</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;liveSassCompile.settings.formats&quot;</span><span style="color:#B392F0;">: [</span></span>
<span class="line"><span style="color:#B392F0;">    {</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#FFAB70;">&quot;format&quot;</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;nested&quot;</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;">  </span><span style="color:#6B737C;">// nested/expanded/compact/compressed四种格式</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#FFAB70;">&quot;extensionName&quot;</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;.css&quot;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#FFAB70;">&quot;savePath&quot;</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">null</span><span style="color:#B392F0;"> </span><span style="color:#6B737C;">// 为null代表当前目录</span></span>
<span class="line"><span style="color:#B392F0;">    }</span></span>
<span class="line"><span style="color:#B392F0;">  ]</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">&quot;liveSassCompile.settings.generateMap&quot;</span><span style="color:#B392F0;">: </span><span style="color:#79B8FF;">false</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#6B737C;">// 不生成map.css</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">&quot;liveSassCompile.settings.autoprefix&quot;</span><span style="color:#B392F0;">: [</span><span style="color:#FFAB70;">&quot;&gt; 1%&quot;</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;last 2 versions&quot;</span><span style="color:#B392F0;">]</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#6B737C;">// 自动添加兼容前缀</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">&quot;liveSassCompile.settings.excludeList&quot;</span><span style="color:#B392F0;">: [</span><span style="color:#FFAB70;">&quot;**/node_modules/**&quot;</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;.vscode/**&quot;</span><span style="color:#B392F0;">]</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="vue中使用" tabindex="-1">vue中使用 <a class="header-anchor" href="#vue中使用" aria-hidden="true">#</a></h2><p>安装</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">yarn </span><span style="color:#98C379;">add</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-D</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">sass</span><span style="color:#ABB2BF;">  </span></span>
<span class="line"><span style="color:#ABB2BF;">yarn </span><span style="color:#98C379;">add</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-D</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">sass-loader@10.2.0</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">yarn </span><span style="color:#9DB1C5;">add</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">-D</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">sass</span><span style="color:#B392F0;">  </span></span>
<span class="line"><span style="color:#B392F0;">yarn </span><span style="color:#9DB1C5;">add</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">-D</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">sass-loader@10.2.0</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>使用</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">style</span><span style="color:#C678DD;"> lang=&quot;scss&quot; scoped</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">$</span><span style="color:#E06C75;">bg-pink</span><span style="color:#C678DD;">: deeppink;</span></span>
<span class="line"><span style="color:#D19A66;">.home</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: $bg-pink;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">style</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">&lt;</span><span style="color:#FFAB70;">style</span><span style="color:#B392F0;"> lang=&quot;scss&quot; scoped</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#FFAB70;">bg-pink</span><span style="color:#B392F0;">: deeppink;</span></span>
<span class="line"><span style="color:#B392F0;">.home {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$bg-pink</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#B392F0;">&lt;/</span><span style="color:#FFAB70;">style</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="局部使用" tabindex="-1">局部使用 <a class="header-anchor" href="#局部使用" aria-hidden="true">#</a></h3><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">style</span><span style="color:#ABB2BF;"> lang=&quot;scss&quot; scoped&gt;</span></span>
<span class="line"><span style="color:#C678DD;">@import</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;../styles/global.scss&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$bg-pink</span><span style="color:#ABB2BF;">: deeppink;</span></span>
<span class="line"><span style="color:#D19A66;">.box</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#E06C75;">$bg-pink</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">style</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">&lt;</span><span style="color:#FFAB70;">style</span><span style="color:#B392F0;"> lang=&quot;scss&quot; scoped&gt;</span></span>
<span class="line"><span style="color:#F97583;">@import</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;../styles/global.scss&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">$bg-pink</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">deeppink</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">.box {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$bg-pink</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#B392F0;">&lt;/</span><span style="color:#FFAB70;">style</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="全局使用" tabindex="-1">全局使用 <a class="header-anchor" href="#全局使用" aria-hidden="true">#</a></h3><p>方法一</p><p>main.ts或main.js中引入全局scss文件</p><p>方法二</p><p>如使用vue脚手架，可在vue.config.js中配置全局scss文件</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">module</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">exports</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">css</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">loaderOptions</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">scss</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">additionalData</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">\`@import &quot;styles/global.scss&quot;;\`</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#B392F0;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  css</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    loaderOptions</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      scss</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        additionalData</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">\`@import &quot;styles/global.scss&quot;;\`</span></span>
<span class="line"><span style="color:#B392F0;">      }</span></span>
<span class="line"><span style="color:#B392F0;">    }</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>vite.config.ts</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">css: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    preprocessorOptions: {</span></span>
<span class="line"><span style="color:#ABB2BF;">      scss: {</span></span>
<span class="line"><span style="color:#ABB2BF;">        additionalData: </span><span style="color:#98C379;">\`@use &quot;src/assets/theme/index.scss&quot; as *;\`</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">css</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    preprocessorOptions</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      scss</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        additionalData</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">\`@use &quot;src/assets/theme/index.scss&quot; as *;\`</span></span>
<span class="line"><span style="color:#B392F0;">      }</span></span>
<span class="line"><span style="color:#B392F0;">    }</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="嵌套css规则" tabindex="-1">嵌套css规则 <a class="header-anchor" href="#嵌套css规则" aria-hidden="true">#</a></h2><blockquote><p>减少重复css选择器的书写，这一功能less也具备</p><p>避免非必要的嵌套，因为过多的嵌套会导致最终编译的css选择器很长，会增加浏览器的性能消耗（当然，绝大部分情况下不会有明显感受，但是这会是一个好习惯）</p></blockquote><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 传统的css</span></span>
<span class="line"><span style="color:#D19A66;">.flex</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">flex</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.flex</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">.left</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.flex</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">.right</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 嵌套css</span></span>
<span class="line"><span style="color:#D19A66;">.flex</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">flex</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.left</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    width: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.right</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    width: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#6B737C;">// 传统的css</span></span>
<span class="line"><span style="color:#B392F0;">.flex {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">display</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">flex</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.flex .left {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">100px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.flex .right {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#6B737C;">// 嵌套css</span></span>
<span class="line"><span style="color:#B392F0;">.flex {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">display</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">flex</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  .left {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">100px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  .right {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="父选择器" tabindex="-1">&amp; 父选择器 <a class="header-anchor" href="#父选择器" aria-hidden="true">#</a></h2><p>在嵌套css规则时，有时需要使用嵌套外层的父选择器，可以使用&amp;代表父选择器，可以拼接，示例：</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#D19A66;">.box</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#000</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&amp;</span><span style="color:#56B6C2;">:hover</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    color: </span><span style="color:#D19A66;">#fff</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.flex</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    color: pink;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&amp;</span><span style="color:#D19A66;">-left</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 编译为</span></span>
<span class="line"><span style="color:#D19A66;">.box</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#000</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.box</span><span style="color:#56B6C2;">:hover</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#fff</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.box</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">.flex</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: pink;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.box</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">.flex-left</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">.box {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#000</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">&amp;</span><span style="color:#B392F0;">:hover {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#fff</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  .flex {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">pink</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#FFAB70;">&amp;</span><span style="color:#B392F0;">-left {</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">red</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    }</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#6B737C;">// 编译为</span></span>
<span class="line"><span style="color:#B392F0;">.box {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#000</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.box:hover {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#fff</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.box .flex {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">pink</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.box .flex-left {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">red</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="属性嵌套" tabindex="-1">属性嵌套 <a class="header-anchor" href="#属性嵌套" aria-hidden="true">#</a></h2><p>有些css属性遵循相同的命名空间（namespace），比如font-family,font-size,font-weight都以font作为属性的命名空间，为了便于管理这样的属性，同时也为了避免重复输入，sass允许将属性嵌套在命名空间中（对象形式的写法）</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#D19A66;">.flex</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: pink;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">font</span><span style="color:#ABB2BF;"> : {</span></span>
<span class="line"><span style="color:#ABB2BF;">    size: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    family: </span><span style="color:#D19A66;">sans-serif</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    weight: </span><span style="color:#D19A66;">bold</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 编译为</span></span>
<span class="line"><span style="color:#D19A66;">.flex</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: pink;</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-family: </span><span style="color:#D19A66;">sans-serif</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-weight: </span><span style="color:#D19A66;">bold</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">.flex {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">pink</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">font</span><span style="color:#B392F0;"> : {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">10px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">family</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">sans-serif</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">weight</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">bold</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#6B737C;">// 编译为</span></span>
<span class="line"><span style="color:#B392F0;">.flex {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">pink</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">10px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-family</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">sans-serif</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-weight</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">bold</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="定义变量" tabindex="-1">$ 定义变量 <a class="header-anchor" href="#定义变量" aria-hidden="true">#</a></h2><p>变量具有块级作用域</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#E06C75;">$pink</span><span style="color:#ABB2BF;">: pink;</span></span>
<span class="line"><span style="color:#D19A66;">.box</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#E06C75;">$pink</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 编译为</span></span>
<span class="line"><span style="color:#D19A66;">.box</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: pink;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">$pink</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">pink</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">.box {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$pink</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#6B737C;">// 编译为</span></span>
<span class="line"><span style="color:#B392F0;">.box {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">pink</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="连接符与下划线" tabindex="-1">连接符与下划线 <a class="header-anchor" href="#连接符与下划线" aria-hidden="true">#</a></h3><p>通过连接符与下划线定义的同名变量为同一变量，建议使用连接符</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#E06C75;">$font-size</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">14</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 同一</span></span>
<span class="line"><span style="color:#E06C75;">$font_size</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">14</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">$font-size</span><span style="color:#F97583;">:</span><span style="color:#F8F8F8;">14px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#6B737C;">// 同一</span></span>
<span class="line"><span style="color:#B392F0;">$font_size</span><span style="color:#F97583;">:</span><span style="color:#F8F8F8;">14px</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="全局变量" tabindex="-1">全局变量 <a class="header-anchor" href="#全局变量" aria-hidden="true">#</a></h3><p>方法一，在选择器最外部定义变量</p><p>方法二，使用!global</p><h3 id="默认值" tabindex="-1">默认值 <a class="header-anchor" href="#默认值" aria-hidden="true">#</a></h3><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">#333</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">#666</span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">// 如果变量之前未定义就采用该默认值</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">$color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;">#333;</span></span>
<span class="line"><span style="color:#B392F0;">$color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;">#666</span><span style="color:#F97583;">!default</span><span style="color:#B392F0;">; </span><span style="color:#6B737C;">// 如果变量之前未定义就采用该默认值</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="与css遍历区别" tabindex="-1">与css遍历区别 <a class="header-anchor" href="#与css遍历区别" aria-hidden="true">#</a></h2><p>CSS有<a href="https://sass-lang.com/documentation/style-rules/declarations#custom-properties" target="_blank" rel="noreferrer">自己的变量，</a>与 Sass 变量完全不同。了解差异！</p><ul><li>Sass 变量都被 Sass 编译掉了。CSS变量包含在CSS 输出中</li><li>CSS变量对于不同的元素可以有不同的值，但 Sass 变量一次只有一个值</li><li>Sass 变量是<em>命令式</em>的，这意味着如果你使用一个变量然后改变它的值，之前的使用将保持不变。CSS变量是<em>声明性</em>的，这意味着如果您更改值，它将影响早期使用和后期使用</li></ul><h2 id="import" tabindex="-1">@import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><p>区别于less的@import url(),scss直接使用@import引入</p><h2 id="mixin" tabindex="-1">@mixin <a class="header-anchor" href="#mixin" aria-hidden="true">#</a></h2><p>@mixin 定义重复的css，@include引入，支持类似函数的写法，传参定义属性</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">@mixin</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">block</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$width</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">$height</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#E06C75;">$width</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#E06C75;">$height</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@include</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">block</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">400</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#fff</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#B392F0;"> block($width, $height) {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$width</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$height</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#FFAB70;">p</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@include</span><span style="color:#B392F0;"> block(</span><span style="color:#F8F8F8;">400px</span><span style="color:#B392F0;">, </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">);</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#fff</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#E06C75;">$skyblue</span><span style="color:#ABB2BF;">: skyblue;</span></span>
<span class="line"><span style="color:#E06C75;">$red</span><span style="color:#ABB2BF;">: pink;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">$themes</span><span style="color:#ABB2BF;">: (</span></span>
<span class="line"><span style="color:#ABB2BF;">  blue: (</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">//主题 蓝</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">//布局</span></span>
<span class="line"><span style="color:#ABB2BF;">    theme-background: </span><span style="color:#E06C75;">$skyblue</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    theme-color: </span><span style="color:#E06C75;">$red</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 按钮</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// btn-primary-background: $blue,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// btn-primary-boder: 1px solid $blue,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// btn-primary-color: #ffffff,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// btn-primary-background-hover: #409eff,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// btn-primary-boder-hover: 1px solid #409eff,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// btn-primary-color-hover: #ffffff</span></span>
<span class="line"><span style="color:#ABB2BF;">  ),</span></span>
<span class="line"><span style="color:#ABB2BF;">  red: (</span></span>
<span class="line"><span style="color:#ABB2BF;">    theme-background: </span><span style="color:#E06C75;">$red</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    theme-color: </span><span style="color:#E06C75;">$skyblue</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 按钮</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// btn-primary-background: $red,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// btn-primary-boder: 1px solid $red,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// btn-primary-color: #ffffff,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// btn-primary-background-hover: #f86065,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// btn-primary-boder-hover: 1px solid #f86065,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// btn-primary-color-hover: #ffffff</span></span>
<span class="line"><span style="color:#ABB2BF;">  )</span></span>
<span class="line"><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//取出主题色</span></span>
<span class="line"><span style="color:#C678DD;">@mixin</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">themify</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$themes</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@each</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$theme-name</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">$map</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$themes</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">$myMap</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">$map</span><span style="color:#ABB2BF;"> !global; </span><span style="color:#7F848E;font-style:italic;">//全局变量供函数调用</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">//新定义一个类</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">.theme-</span><span style="color:#E06C75;">#{$theme-name}</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">@content</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">//插入位置</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//从主题色map中取出对应颜色</span></span>
<span class="line"><span style="color:#C678DD;">@function</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">themed</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$key</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@return</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">map-get</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$myMap</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">$key</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//按钮混合</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// @mixin button($value: default) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//   background-color: themed(&quot;btn-#{$value}-background&quot;);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//   border: themed(&quot;btn-#{$value}-color&quot;);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//   color: themed(&quot;btn-#{value}-color&quot;);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//   border: 1px solid;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//   width: 100px;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//   height: 50px;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//   border-radius: 10px;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//   &amp;:hover {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//     background-color: themed(&quot;btn-#{$value}-background-hover&quot;);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//     border: themed(&quot;btn-#{$value}-border-hover&quot;);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//     color: themed(&quot;btn-#{$value}-color-hover&quot;);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//   }</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//全局类 使用混合方法</span></span>
<span class="line"><span style="color:#C678DD;">@include</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">themify</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$themes</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.them_title</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    width: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    height: </span><span style="color:#D19A66;">40</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    background-color: </span><span style="color:#56B6C2;">themed</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;theme-background&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    color: </span><span style="color:#56B6C2;">themed</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;theme-color&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// .them-btn-primary {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">//   @include button(&quot;primary&quot;);</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// .them-btn-info {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">//   @include button(&quot;info&quot;);</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">$skyblue</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">skyblue</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">$red</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">pink</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">$themes</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> (</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">blue</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> (</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#6B737C;">//主题 蓝</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#6B737C;">//布局</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">theme-background</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> $skyblue</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">theme-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> $red</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#6B737C;">// 按钮</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#6B737C;">// btn-primary-background: $blue,</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#6B737C;">// btn-primary-boder: 1px solid $blue,</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#6B737C;">// btn-primary-color: #ffffff,</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#6B737C;">// btn-primary-background-hover: #409eff,</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#6B737C;">// btn-primary-boder-hover: 1px solid #409eff,</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#6B737C;">// btn-primary-color-hover: #ffffff</span></span>
<span class="line"><span style="color:#B392F0;">  )</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">red</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> (</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">theme-background</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> $red</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">theme-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> $skyblue</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#6B737C;">// 按钮</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#6B737C;">// btn-primary-background: $red,</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#6B737C;">// btn-primary-boder: 1px solid $red,</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#6B737C;">// btn-primary-color: #ffffff,</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#6B737C;">// btn-primary-background-hover: #f86065,</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#6B737C;">// btn-primary-boder-hover: 1px solid #f86065,</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#6B737C;">// btn-primary-color-hover: #ffffff</span></span>
<span class="line"><span style="color:#B392F0;">  )</span></span>
<span class="line"><span style="color:#B392F0;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6B737C;">//取出主题色</span></span>
<span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#B392F0;"> themify($themes) {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@each</span><span style="color:#B392F0;"> $theme-name, $map </span><span style="color:#F97583;">in</span><span style="color:#B392F0;"> $themes {</span></span>
<span class="line"><span style="color:#B392F0;">    $myMap</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$map !global</span><span style="color:#B392F0;">; </span><span style="color:#6B737C;">//全局变量供函数调用</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#6B737C;">//新定义一个类</span></span>
<span class="line"><span style="color:#B392F0;">    .theme-#{$theme-name} {</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#F97583;">@content</span><span style="color:#B392F0;">; </span><span style="color:#6B737C;">//插入位置</span></span>
<span class="line"><span style="color:#B392F0;">    }</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6B737C;">//从主题色map中取出对应颜色</span></span>
<span class="line"><span style="color:#F97583;">@function</span><span style="color:#B392F0;"> themed($key) {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@return</span><span style="color:#B392F0;"> map-get($myMap</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> $key);</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6B737C;">//按钮混合</span></span>
<span class="line"><span style="color:#6B737C;">// @mixin button($value: default) {</span></span>
<span class="line"><span style="color:#6B737C;">//   background-color: themed(&quot;btn-#{$value}-background&quot;);</span></span>
<span class="line"><span style="color:#6B737C;">//   border: themed(&quot;btn-#{$value}-color&quot;);</span></span>
<span class="line"><span style="color:#6B737C;">//   color: themed(&quot;btn-#{value}-color&quot;);</span></span>
<span class="line"><span style="color:#6B737C;">//   border: 1px solid;</span></span>
<span class="line"><span style="color:#6B737C;">//   width: 100px;</span></span>
<span class="line"><span style="color:#6B737C;">//   height: 50px;</span></span>
<span class="line"><span style="color:#6B737C;">//   border-radius: 10px;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6B737C;">//   &amp;:hover {</span></span>
<span class="line"><span style="color:#6B737C;">//     background-color: themed(&quot;btn-#{$value}-background-hover&quot;);</span></span>
<span class="line"><span style="color:#6B737C;">//     border: themed(&quot;btn-#{$value}-border-hover&quot;);</span></span>
<span class="line"><span style="color:#6B737C;">//     color: themed(&quot;btn-#{$value}-color-hover&quot;);</span></span>
<span class="line"><span style="color:#6B737C;">//   }</span></span>
<span class="line"><span style="color:#6B737C;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6B737C;">//全局类 使用混合方法</span></span>
<span class="line"><span style="color:#F97583;">@include</span><span style="color:#B392F0;"> themify($themes) {</span></span>
<span class="line"><span style="color:#B392F0;">  .them_title {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">100%</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">40px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> themed</span><span style="color:#F8F8F8;">(</span><span style="color:#FFAB70;">&quot;theme-background&quot;</span><span style="color:#F8F8F8;">)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> themed</span><span style="color:#F8F8F8;">(</span><span style="color:#FFAB70;">&quot;theme-color&quot;</span><span style="color:#F8F8F8;">)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#6B737C;">// .them-btn-primary {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#6B737C;">//   @include button(&quot;primary&quot;);</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#6B737C;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#6B737C;">// .them-btn-info {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#6B737C;">//   @include button(&quot;info&quot;);</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#6B737C;">// }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br></div></div>`,56),o=[e];function c(r,t,i,B,y,F){return a(),n("div",null,o)}const u=s(p,[["render",c]]);export{d as __pageData,u as default};
