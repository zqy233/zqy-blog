import{_ as s,o as n,c as a,a as l}from"./app.bfa9bd4b.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"2.JS/3.工具函数/动画.md","lastUpdated":1720835436690}'),p={name:"2.JS/3.工具函数/动画.md"},o=l(`<p><code>gsap.to(targets,vars)</code>：从开始的位置到结束的位置</p><ul><li><code>targets</code> - 你需要添加动画的对象，可以是<code>object</code>,<code>array</code>和选择器<code>&quot;.myClass&quot;</code></li><li><code>vars</code> - 一个对象，里面包含你想要改变的属性，延时，已经回调函数等</li></ul><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">gsap</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;gsap&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">data</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">number</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">tweened</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">watch</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">number</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">n</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// 更改this中的tweened属性</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">gsap</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">to</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">, { </span><span style="color:#E06C75;">duration</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0.5</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">tweened</span><span style="color:#ABB2BF;">: </span><span style="color:#61AFEF;">Number</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">n</span><span style="color:#ABB2BF;">) </span><span style="color:#56B6C2;">||</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> })</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	Type a number: &lt;</span><span style="color:#E06C75;">input</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">v-model.number</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;number&quot;</span><span style="color:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	&lt;</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;big-number&quot;</span><span style="color:#ABB2BF;">&gt;{{ tweened.toFixed(0) }}&lt;/</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">style</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#D19A66;">.big-number</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-weight: </span><span style="color:#D19A66;">bold</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">style</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">&lt;</span><span style="color:#FFAB70;">script</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#B392F0;"> gsap </span><span style="color:#F97583;">from</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;gsap&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">default</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  data() {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#F97583;">return</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      number</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">      tweened</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span></span>
<span class="line"><span style="color:#B392F0;">    }</span></span>
<span class="line"><span style="color:#B392F0;">  }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  watch</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    number(n) {</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#6B737C;">// 更改this中的tweened属性</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#79B8FF;">gsap</span><span style="color:#B392F0;">.to(</span><span style="color:#79B8FF;">this</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> { duration</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0.5</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> tweened</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> Number(n) </span><span style="color:#F97583;">||</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span><span style="color:#B392F0;"> })</span></span>
<span class="line"><span style="color:#B392F0;">    }</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#B392F0;">&lt;/</span><span style="color:#FFAB70;">script</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">&lt;</span><span style="color:#FFAB70;">template</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">	Type a number: &lt;</span><span style="color:#FFAB70;">input</span><span style="color:#B392F0;"> v-model.number</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;number&quot;</span><span style="color:#B392F0;"> /&gt;</span></span>
<span class="line"><span style="color:#B392F0;">	&lt;</span><span style="color:#FFAB70;">p</span><span style="color:#B392F0;"> class</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;big-number&quot;</span><span style="color:#B392F0;">&gt;{{ tweened.toFixed(0) }}&lt;/</span><span style="color:#FFAB70;">p</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">&lt;/</span><span style="color:#FFAB70;">template</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">&lt;</span><span style="color:#FFAB70;">style</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.big-number {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-weight</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">bold</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">2em</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#B392F0;">&lt;/</span><span style="color:#FFAB70;">style</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div>`,3),e=[o];function t(c,r,B,y,F,i){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{b as __pageData,u as default};
