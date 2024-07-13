import{_ as s,o as n,c as a,a as l}from"./app.bfa9bd4b.js";const d=JSON.parse('{"title":"less","description":"","frontmatter":{},"headers":[{"level":2,"title":"定义变量与使用变量","slug":"定义变量与使用变量","link":"#定义变量与使用变量","children":[]},{"level":2,"title":"vite中全局使用","slug":"vite中全局使用","link":"#vite中全局使用","children":[]},{"level":2,"title":"mixins","slug":"mixins","link":"#mixins","children":[]}],"relativePath":"1.基础/2.css/3.less.md","lastUpdated":1720835436682}'),p={name:"1.基础/2.css/3.less.md"},e=l(`<h1 id="less" tabindex="-1">less <a class="header-anchor" href="#less" aria-hidden="true">#</a></h1><h2 id="定义变量与使用变量" tabindex="-1">定义变量与使用变量 <a class="header-anchor" href="#定义变量与使用变量" aria-hidden="true">#</a></h2><div class="language-less line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#E06C75;">@borderStyle</span><span style="color:#ABB2BF;">: border-style;</span></span>
<span class="line"><span style="color:#E06C75;">@Soild</span><span style="color:#ABB2BF;">:solid;</span></span>
<span class="line"><span style="color:#61AFEF;">#wrap</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">@{borderStyle}</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">@Soild</span><span style="color:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;">//变量名 必须使用大括号包裹</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* 生成的 CSS */</span></span>
<span class="line"><span style="color:#61AFEF;">#wrap</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;"> border-style:solid;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F8F8F8;">@</span><span style="color:#79B8FF;">borderStyle</span><span style="color:#F97583;">:</span><span style="color:#F8F8F8;"> </span><span style="color:#79B8FF;">border-style</span><span style="color:#F8F8F8;">;</span></span>
<span class="line"><span style="color:#F8F8F8;">@</span><span style="color:#79B8FF;">Soild</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">solid</span><span style="color:#F8F8F8;">;</span></span>
<span class="line"><span style="color:#B392F0;">#wrap{</span></span>
<span class="line"><span style="color:#B392F0;">  @{</span><span style="color:#79B8FF;">borderStyle</span><span style="color:#B392F0;">}: </span><span style="color:#F8F8F8;">@</span><span style="color:#79B8FF;">Soild</span><span style="color:#F8F8F8;">;</span><span style="color:#6B737C;">//变量名 必须使用大括号包裹</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#6B737C;">/* 生成的 CSS */</span></span>
<span class="line"><span style="color:#B392F0;">#wrap{</span></span>
<span class="line"><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">border-style</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">solid</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="vite中全局使用" tabindex="-1">vite中全局使用 <a class="header-anchor" href="#vite中全局使用" aria-hidden="true">#</a></h2><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">defineConfig</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">css</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">preprocessorOptions</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">less</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">charset</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">additionalData</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;@import &quot;./src/assets/style/global.less&quot;;&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">default</span><span style="color:#B392F0;"> defineConfig({</span></span>
<span class="line"><span style="color:#B392F0;">  css</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    preprocessorOptions</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      less</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        charset</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">false</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">        additionalData</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;@import &quot;./src/assets/style/global.less&quot;;&#39;</span></span>
<span class="line"><span style="color:#B392F0;">      }</span></span>
<span class="line"><span style="color:#B392F0;">    }</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="mixins" tabindex="-1">mixins <a class="header-anchor" href="#mixins" aria-hidden="true">#</a></h2><p>把重复代码抽离出来，（）代表这个重复代码只会被引用，而不会自己生成</p><div class="language-less line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#D19A66;">.mixins-positon</span><span style="color:#C678DD;">() </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  content: </span><span style="color:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: absolute;</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.mixins-border-top</span><span style="color:#C678DD;">() </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  top: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-top: </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> solid</span><span style="color:#E06C75;"> @skyblue</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">&amp;</span><span style="color:#56B6C2;">:before</span><span style="color:#C678DD;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.mixins-positon</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.mixins-border-top</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  left: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-left: </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> solid</span><span style="color:#E06C75;"> @skyblue</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">&amp;</span><span style="color:#56B6C2;">:after</span><span style="color:#C678DD;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.mixins-positon</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.mixins-border-top</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  right: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-right: </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> solid</span><span style="color:#E06C75;"> @skyblue</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">.mixins-positon() {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">content</span><span style="color:#F97583;">:</span><span style="color:#F8F8F8;"> </span><span style="color:#FFAB70;">&quot;&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">position</span><span style="color:#F97583;">:</span><span style="color:#F8F8F8;"> </span><span style="color:#79B8FF;">absolute</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#F8F8F8;"> 10px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#F8F8F8;"> 10px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#B392F0;">.mixins-border-top() {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">top</span><span style="color:#F97583;">:</span><span style="color:#F8F8F8;"> 0</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">border-top</span><span style="color:#F97583;">:</span><span style="color:#F8F8F8;"> 2px </span><span style="color:#79B8FF;">solid</span><span style="color:#F8F8F8;"> @</span><span style="color:#79B8FF;">skyblue</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">&amp;:before {</span></span>
<span class="line"><span style="color:#B392F0;">  .mixins-positon;</span></span>
<span class="line"><span style="color:#B392F0;">  .mixins-border-top;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">left</span><span style="color:#F97583;">:</span><span style="color:#F8F8F8;"> 0</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">border-left</span><span style="color:#F97583;">:</span><span style="color:#F8F8F8;"> 2px </span><span style="color:#79B8FF;">solid</span><span style="color:#F8F8F8;"> @</span><span style="color:#79B8FF;">skyblue</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#B392F0;">&amp;:after {</span></span>
<span class="line"><span style="color:#B392F0;">  .mixins-positon;</span></span>
<span class="line"><span style="color:#B392F0;">  .mixins-border-top;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">right</span><span style="color:#F97583;">:</span><span style="color:#F8F8F8;"> 0</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">border-right</span><span style="color:#F97583;">:</span><span style="color:#F8F8F8;"> 2px </span><span style="color:#79B8FF;">solid</span><span style="color:#F8F8F8;"> @</span><span style="color:#79B8FF;">skyblue</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,8),o=[e];function r(c,t,i,B,y,F){return n(),a("div",null,o)}const A=s(p,[["render",r]]);export{d as __pageData,A as default};
