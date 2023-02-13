import{_ as s,c as n,o as a,a as l}from"./app.a9997904.js";const A=JSON.parse('{"title":"饼图","description":"","frontmatter":{},"headers":[{"level":2,"title":"颜色设置","slug":"颜色设置","link":"#颜色设置","children":[]},{"level":2,"title":"饼图的左右位置","slug":"饼图的左右位置","link":"#饼图的左右位置","children":[]},{"level":2,"title":"标题居中","slug":"标题居中","link":"#标题居中","children":[]},{"level":2,"title":"悬浮文本","slug":"悬浮文本","link":"#悬浮文本","children":[]},{"level":2,"title":"玫瑰图","slug":"玫瑰图","link":"#玫瑰图","children":[]}],"relativePath":"4.第三方库/eharts/4.饼图.md","lastUpdated":1676276426000}'),p={name:"4.第三方库/eharts/4.饼图.md"},o=l(`<h1 id="饼图" tabindex="-1">饼图 <a class="header-anchor" href="#饼图" aria-hidden="true">#</a></h1><blockquote><p>所有实例代码均可在ehcarts的<a href="https://echarts.apache.org/examples/zh/editor.html" target="_blank" rel="noreferrer">background</a>环境中直接运行</p></blockquote><h2 id="颜色设置" tabindex="-1">颜色设置 <a class="header-anchor" href="#颜色设置" aria-hidden="true">#</a></h2><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">option  = {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#FFFFFF;">color</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">&quot;#6B9CF5&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;#8FD59F&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;#CA8EE3&quot;</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#FFFFFF;">series</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#FFFFFF;">type</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;pie&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#FFFFFF;">radius</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">&quot;40%&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;60%&quot;</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#FFFFFF;">data</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">        { </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">15.79</span><span style="color:#ABB2BF;">, </span><span style="color:#FFFFFF;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;故障&quot;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">        { </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">10.53</span><span style="color:#ABB2BF;">, </span><span style="color:#FFFFFF;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;正常&quot;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">        { </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">47.37</span><span style="color:#ABB2BF;">, </span><span style="color:#FFFFFF;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;其他&quot;</span><span style="color:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#ABB2BF;">      ]</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  ]</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">option  = {</span></span>
<span class="line"><span style="color:#B392F0;">  color</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> [</span><span style="color:#FFAB70;">&quot;#6B9CF5&quot;</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;#8FD59F&quot;</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;#CA8EE3&quot;</span><span style="color:#B392F0;">]</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  series</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> [</span></span>
<span class="line"><span style="color:#B392F0;">    {</span></span>
<span class="line"><span style="color:#B392F0;">      type</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;pie&quot;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">      radius</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> [</span><span style="color:#FFAB70;">&quot;40%&quot;</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;60%&quot;</span><span style="color:#B392F0;">]</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">      data</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> [</span></span>
<span class="line"><span style="color:#B392F0;">        { value</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">15.79</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> name</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;故障&quot;</span><span style="color:#B392F0;"> }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">        { value</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">10.53</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> name</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;正常&quot;</span><span style="color:#B392F0;"> }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">        { value</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">47.37</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> name</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;其他&quot;</span><span style="color:#B392F0;"> }</span></span>
<span class="line"><span style="color:#B392F0;">      ]</span></span>
<span class="line"><span style="color:#B392F0;">    }</span></span>
<span class="line"><span style="color:#B392F0;">  ]</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="饼图的左右位置" tabindex="-1">饼图的左右位置 <a class="header-anchor" href="#饼图的左右位置" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">series: [</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    ...</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">center</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">&#39;30%&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;50%&#39;</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">series</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> [</span></span>
<span class="line"><span style="color:#B392F0;">  {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#B392F0;">    center: [</span><span style="color:#FFAB70;">&#39;30%&#39;</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;50%&#39;</span><span style="color:#B392F0;">]</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="标题居中" tabindex="-1">标题居中 <a class="header-anchor" href="#标题居中" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">left:</span><span style="color:#98C379;">&quot;center&quot;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">left</span><span style="color:#BBBBBB;">:</span><span style="color:#FFAB70;">&quot;center&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="悬浮文本" tabindex="-1">悬浮文本 <a class="header-anchor" href="#悬浮文本" aria-hidden="true">#</a></h2><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">option  = {</span></span>
<span class="line"><span style="color:#ABB2BF;">   </span><span style="color:#FFFFFF;">tooltip</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#FFFFFF;">trigger</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;item&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#FFFFFF;">series</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#FFFFFF;">type</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;pie&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#FFFFFF;">radius</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">&quot;40%&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;60%&quot;</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#FFFFFF;">data</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">        { </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">15.79</span><span style="color:#ABB2BF;">, </span><span style="color:#FFFFFF;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;故障&quot;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">        { </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">10.53</span><span style="color:#ABB2BF;">, </span><span style="color:#FFFFFF;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;正常&quot;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">        { </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">47.37</span><span style="color:#ABB2BF;">, </span><span style="color:#FFFFFF;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;其他&quot;</span><span style="color:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#ABB2BF;">      ]</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  ]</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">option  = {</span></span>
<span class="line"><span style="color:#B392F0;">   tooltip</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    trigger</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;item&quot;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  series</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> [</span></span>
<span class="line"><span style="color:#B392F0;">    {</span></span>
<span class="line"><span style="color:#B392F0;">      type</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;pie&quot;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">      radius</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> [</span><span style="color:#FFAB70;">&quot;40%&quot;</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;60%&quot;</span><span style="color:#B392F0;">]</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">      data</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> [</span></span>
<span class="line"><span style="color:#B392F0;">        { value</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">15.79</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> name</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;故障&quot;</span><span style="color:#B392F0;"> }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">        { value</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">10.53</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> name</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;正常&quot;</span><span style="color:#B392F0;"> }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">        { value</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">47.37</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> name</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;其他&quot;</span><span style="color:#B392F0;"> }</span></span>
<span class="line"><span style="color:#B392F0;">      ]</span></span>
<span class="line"><span style="color:#B392F0;">    }</span></span>
<span class="line"><span style="color:#B392F0;">  ]</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="玫瑰图" tabindex="-1">玫瑰图 <a class="header-anchor" href="#玫瑰图" aria-hidden="true">#</a></h2><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">option = {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#FFFFFF;">backgroundColor</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;rgb(</span><span style="color:#D19A66;">43</span><span style="color:#ABB2BF;">, </span><span style="color:#FFFFFF;">51,</span><span style="color:#ABB2BF;"> </span><span style="color:#FFFFFF;">59)&#39;,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#FFFFFF;">series</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#FFFFFF;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;XX线索&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#FFFFFF;">type</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;pie&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#FFFFFF;">radius</span><span style="color:#ABB2BF;">: [</span><span style="color:#D19A66;">37</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">155</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// avoidLabelOverlap: false,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// startAngle: 0,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#FFFFFF;">center</span><span style="color:#ABB2BF;">: [</span><span style="color:#FFFFFF;">&#39;</span><span style="color:#D19A66;">50.1</span><span style="color:#FFFFFF;">%&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#FFFFFF;">&#39;</span><span style="color:#D19A66;">34</span><span style="color:#FFFFFF;">%&#39;</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#FFFFFF;">roseType</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;area&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#FFFFFF;">selectedMode</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;single&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#FFFFFF;">label</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#FFFFFF;">normal</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">show</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">formatter</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;</span><span style="color:#ABB2BF;">{</span><span style="color:#FFFFFF;">c</span><span style="color:#ABB2BF;">}</span><span style="color:#FFFFFF;">千万元&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#FFFFFF;">emphasis</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">show</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#FFFFFF;">labelLine</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#FFFFFF;">normal</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">show</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">smooth</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">length</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">length2</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">10</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#FFFFFF;">emphasis</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">show</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#FFFFFF;">data</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">600.58</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;义乌市</span><span style="color:#D19A66;">1</span><span style="color:#FFFFFF;">&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">itemStyle</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#FFFFFF;">normal</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#FFFFFF;">color</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;#f</span><span style="color:#D19A66;">845</span><span style="color:#FFFFFF;">f</span><span style="color:#D19A66;">1</span><span style="color:#FFFFFF;">&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1100.58</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;义乌市</span><span style="color:#D19A66;">2</span><span style="color:#FFFFFF;">&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">itemStyle</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#FFFFFF;">normal</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#FFFFFF;">color</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;#ad</span><span style="color:#D19A66;">46</span><span style="color:#FFFFFF;">f</span><span style="color:#D19A66;">3</span><span style="color:#FFFFFF;">&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1200.58</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;义乌市</span><span style="color:#D19A66;">3</span><span style="color:#FFFFFF;">&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">itemStyle</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#FFFFFF;">normal</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#FFFFFF;">color</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;#</span><span style="color:#D19A66;">5045</span><span style="color:#FFFFFF;">f</span><span style="color:#D19A66;">6</span><span style="color:#FFFFFF;">&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1300.58</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;义乌市</span><span style="color:#D19A66;">4</span><span style="color:#FFFFFF;">&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">itemStyle</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#FFFFFF;">normal</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#FFFFFF;">color</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;#</span><span style="color:#D19A66;">4777</span><span style="color:#FFFFFF;">f</span><span style="color:#D19A66;">5</span><span style="color:#FFFFFF;">&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1400.58</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;义乌市</span><span style="color:#D19A66;">5</span><span style="color:#FFFFFF;">&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">itemStyle</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#FFFFFF;">normal</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#FFFFFF;">color</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;#</span><span style="color:#D19A66;">44</span><span style="color:#FFFFFF;">aff</span><span style="color:#D19A66;">0</span><span style="color:#FFFFFF;">&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1500.58</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;义乌市</span><span style="color:#D19A66;">6</span><span style="color:#FFFFFF;">&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">itemStyle</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#FFFFFF;">normal</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#FFFFFF;">color</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;#</span><span style="color:#D19A66;">45</span><span style="color:#FFFFFF;">dbf</span><span style="color:#D19A66;">7</span><span style="color:#FFFFFF;">&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1500.58</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;义乌市</span><span style="color:#D19A66;">7</span><span style="color:#FFFFFF;">&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">itemStyle</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#FFFFFF;">normal</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#FFFFFF;">color</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;#f</span><span style="color:#D19A66;">6</span><span style="color:#FFFFFF;">d</span><span style="color:#D19A66;">54</span><span style="color:#FFFFFF;">a&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1600.58</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;义乌市</span><span style="color:#D19A66;">8</span><span style="color:#FFFFFF;">&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">itemStyle</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#FFFFFF;">normal</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#FFFFFF;">color</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;#f</span><span style="color:#D19A66;">69846</span><span style="color:#FFFFFF;">&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1800</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;义乌市</span><span style="color:#D19A66;">9</span><span style="color:#FFFFFF;">&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">itemStyle</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#FFFFFF;">normal</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#FFFFFF;">color</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;#ff</span><span style="color:#D19A66;">4343</span><span style="color:#FFFFFF;">&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">itemStyle</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#FFFFFF;">normal</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#FFFFFF;">label</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#FFFFFF;">show</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">              },</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#FFFFFF;">labelLine</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#FFFFFF;">show</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">              }</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">itemStyle</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#FFFFFF;">normal</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#FFFFFF;">label</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#FFFFFF;">show</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">              },</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#FFFFFF;">labelLine</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#FFFFFF;">show</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">              }</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">itemStyle</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#FFFFFF;">normal</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#FFFFFF;">label</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#FFFFFF;">show</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">              },</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#FFFFFF;">labelLine</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#FFFFFF;">show</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">              }</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">itemStyle</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#FFFFFF;">normal</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#FFFFFF;">label</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#FFFFFF;">show</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">              },</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#FFFFFF;">labelLine</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#FFFFFF;">show</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">              }</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">itemStyle</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#FFFFFF;">normal</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#FFFFFF;">label</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#FFFFFF;">show</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">              },</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#FFFFFF;">labelLine</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#FFFFFF;">show</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">              }</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">itemStyle</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#FFFFFF;">normal</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#FFFFFF;">label</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#FFFFFF;">show</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">              },</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#FFFFFF;">labelLine</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#FFFFFF;">show</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">              }</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">itemStyle</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#FFFFFF;">normal</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#FFFFFF;">label</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#FFFFFF;">show</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">              },</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#FFFFFF;">labelLine</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#FFFFFF;">show</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">              }</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">itemStyle</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#FFFFFF;">normal</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#FFFFFF;">label</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#FFFFFF;">show</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">              },</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#FFFFFF;">labelLine</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#FFFFFF;">show</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">              }</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#FFFFFF;">&#39;&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#FFFFFF;">itemStyle</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#FFFFFF;">normal</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#FFFFFF;">label</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#FFFFFF;">show</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">              },</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#FFFFFF;">labelLine</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#FFFFFF;">show</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">              }</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">      ]</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  ]</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">option = {</span></span>
<span class="line"><span style="color:#B392F0;">  backgroundColor</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;rgb(</span><span style="color:#F8F8F8;">43</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> 51, 59)&#39;,</span></span>
<span class="line"><span style="color:#B392F0;">  series</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> [</span></span>
<span class="line"><span style="color:#B392F0;">    {</span></span>
<span class="line"><span style="color:#B392F0;">      name</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;XX线索&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">      type</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;pie&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">      radius</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> [</span><span style="color:#F8F8F8;">37</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">155</span><span style="color:#B392F0;">]</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#6B737C;">// avoidLabelOverlap: false,</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#6B737C;">// startAngle: 0,</span></span>
<span class="line"><span style="color:#B392F0;">      center</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> [&#39;</span><span style="color:#F8F8F8;">50.1</span><span style="color:#B392F0;">%&#39;</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> &#39;</span><span style="color:#F8F8F8;">34</span><span style="color:#B392F0;">%&#39;]</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">      roseType</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;area&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">      selectedMode</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;single&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">      label</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        normal</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">          show</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">true</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          formatter</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;{c}千万元&#39;</span></span>
<span class="line"><span style="color:#B392F0;">        }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">        emphasis</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">          show</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#B392F0;">        }</span></span>
<span class="line"><span style="color:#B392F0;">      }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">      labelLine</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        normal</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">          show</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">true</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          smooth</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">false</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          length</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">20</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          length2</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">10</span></span>
<span class="line"><span style="color:#B392F0;">        }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">        emphasis</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">          show</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#B392F0;">        }</span></span>
<span class="line"><span style="color:#B392F0;">      }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">      data</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> [</span></span>
<span class="line"><span style="color:#B392F0;">        {</span></span>
<span class="line"><span style="color:#B392F0;">          value</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">600.58</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          name</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;义乌市</span><span style="color:#F8F8F8;">1</span><span style="color:#B392F0;">&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          itemStyle</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">            normal</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">              color</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;#f</span><span style="color:#F8F8F8;">845</span><span style="color:#B392F0;">f</span><span style="color:#F8F8F8;">1</span><span style="color:#B392F0;">&#39;</span></span>
<span class="line"><span style="color:#B392F0;">            }</span></span>
<span class="line"><span style="color:#B392F0;">          }</span></span>
<span class="line"><span style="color:#B392F0;">        }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">        {</span></span>
<span class="line"><span style="color:#B392F0;">          value</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1100.58</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          name</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;义乌市</span><span style="color:#F8F8F8;">2</span><span style="color:#B392F0;">&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          itemStyle</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">            normal</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">              color</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;#ad</span><span style="color:#F8F8F8;">46</span><span style="color:#B392F0;">f</span><span style="color:#F8F8F8;">3</span><span style="color:#B392F0;">&#39;</span></span>
<span class="line"><span style="color:#B392F0;">            }</span></span>
<span class="line"><span style="color:#B392F0;">          }</span></span>
<span class="line"><span style="color:#B392F0;">        }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">        {</span></span>
<span class="line"><span style="color:#B392F0;">          value</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1200.58</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          name</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;义乌市</span><span style="color:#F8F8F8;">3</span><span style="color:#B392F0;">&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          itemStyle</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">            normal</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">              color</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;#</span><span style="color:#F8F8F8;">5045</span><span style="color:#B392F0;">f</span><span style="color:#F8F8F8;">6</span><span style="color:#B392F0;">&#39;</span></span>
<span class="line"><span style="color:#B392F0;">            }</span></span>
<span class="line"><span style="color:#B392F0;">          }</span></span>
<span class="line"><span style="color:#B392F0;">        }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">        {</span></span>
<span class="line"><span style="color:#B392F0;">          value</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1300.58</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          name</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;义乌市</span><span style="color:#F8F8F8;">4</span><span style="color:#B392F0;">&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          itemStyle</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">            normal</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">              color</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;#</span><span style="color:#F8F8F8;">4777</span><span style="color:#B392F0;">f</span><span style="color:#F8F8F8;">5</span><span style="color:#B392F0;">&#39;</span></span>
<span class="line"><span style="color:#B392F0;">            }</span></span>
<span class="line"><span style="color:#B392F0;">          }</span></span>
<span class="line"><span style="color:#B392F0;">        }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">        {</span></span>
<span class="line"><span style="color:#B392F0;">          value</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1400.58</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          name</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;义乌市</span><span style="color:#F8F8F8;">5</span><span style="color:#B392F0;">&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          itemStyle</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">            normal</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">              color</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;#</span><span style="color:#F8F8F8;">44</span><span style="color:#B392F0;">aff</span><span style="color:#F8F8F8;">0</span><span style="color:#B392F0;">&#39;</span></span>
<span class="line"><span style="color:#B392F0;">            }</span></span>
<span class="line"><span style="color:#B392F0;">          }</span></span>
<span class="line"><span style="color:#B392F0;">        }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">        {</span></span>
<span class="line"><span style="color:#B392F0;">          value</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1500.58</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          name</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;义乌市</span><span style="color:#F8F8F8;">6</span><span style="color:#B392F0;">&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          itemStyle</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">            normal</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">              color</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;#</span><span style="color:#F8F8F8;">45</span><span style="color:#B392F0;">dbf</span><span style="color:#F8F8F8;">7</span><span style="color:#B392F0;">&#39;</span></span>
<span class="line"><span style="color:#B392F0;">            }</span></span>
<span class="line"><span style="color:#B392F0;">          }</span></span>
<span class="line"><span style="color:#B392F0;">        }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">        {</span></span>
<span class="line"><span style="color:#B392F0;">          value</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1500.58</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          name</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;义乌市</span><span style="color:#F8F8F8;">7</span><span style="color:#B392F0;">&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          itemStyle</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">            normal</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">              color</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;#f</span><span style="color:#F8F8F8;">6</span><span style="color:#B392F0;">d</span><span style="color:#F8F8F8;">54</span><span style="color:#B392F0;">a&#39;</span></span>
<span class="line"><span style="color:#B392F0;">            }</span></span>
<span class="line"><span style="color:#B392F0;">          }</span></span>
<span class="line"><span style="color:#B392F0;">        }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">        {</span></span>
<span class="line"><span style="color:#B392F0;">          value</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1600.58</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          name</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;义乌市</span><span style="color:#F8F8F8;">8</span><span style="color:#B392F0;">&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          itemStyle</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">            normal</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">              color</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;#f</span><span style="color:#F8F8F8;">69846</span><span style="color:#B392F0;">&#39;</span></span>
<span class="line"><span style="color:#B392F0;">            }</span></span>
<span class="line"><span style="color:#B392F0;">          }</span></span>
<span class="line"><span style="color:#B392F0;">        }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">        {</span></span>
<span class="line"><span style="color:#B392F0;">          value</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1800</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          name</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;义乌市</span><span style="color:#F8F8F8;">9</span><span style="color:#B392F0;">&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          itemStyle</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">            normal</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">              color</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;#ff</span><span style="color:#F8F8F8;">4343</span><span style="color:#B392F0;">&#39;</span></span>
<span class="line"><span style="color:#B392F0;">            }</span></span>
<span class="line"><span style="color:#B392F0;">          }</span></span>
<span class="line"><span style="color:#B392F0;">        }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">        {</span></span>
<span class="line"><span style="color:#B392F0;">          value</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          name</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          itemStyle</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">            normal</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">              label</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">                show</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#B392F0;">              }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">              labelLine</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">                show</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#B392F0;">              }</span></span>
<span class="line"><span style="color:#B392F0;">            }</span></span>
<span class="line"><span style="color:#B392F0;">          }</span></span>
<span class="line"><span style="color:#B392F0;">        }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">        {</span></span>
<span class="line"><span style="color:#B392F0;">          value</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          name</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          itemStyle</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">            normal</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">              label</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">                show</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#B392F0;">              }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">              labelLine</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">                show</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#B392F0;">              }</span></span>
<span class="line"><span style="color:#B392F0;">            }</span></span>
<span class="line"><span style="color:#B392F0;">          }</span></span>
<span class="line"><span style="color:#B392F0;">        }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">        {</span></span>
<span class="line"><span style="color:#B392F0;">          value</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          name</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          itemStyle</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">            normal</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">              label</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">                show</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#B392F0;">              }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">              labelLine</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">                show</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#B392F0;">              }</span></span>
<span class="line"><span style="color:#B392F0;">            }</span></span>
<span class="line"><span style="color:#B392F0;">          }</span></span>
<span class="line"><span style="color:#B392F0;">        }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">        {</span></span>
<span class="line"><span style="color:#B392F0;">          value</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          name</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          itemStyle</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">            normal</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">              label</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">                show</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#B392F0;">              }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">              labelLine</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">                show</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#B392F0;">              }</span></span>
<span class="line"><span style="color:#B392F0;">            }</span></span>
<span class="line"><span style="color:#B392F0;">          }</span></span>
<span class="line"><span style="color:#B392F0;">        }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">        {</span></span>
<span class="line"><span style="color:#B392F0;">          value</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          name</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          itemStyle</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">            normal</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">              label</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">                show</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#B392F0;">              }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">              labelLine</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">                show</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#B392F0;">              }</span></span>
<span class="line"><span style="color:#B392F0;">            }</span></span>
<span class="line"><span style="color:#B392F0;">          }</span></span>
<span class="line"><span style="color:#B392F0;">        }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">        {</span></span>
<span class="line"><span style="color:#B392F0;">          value</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          name</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          itemStyle</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">            normal</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">              label</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">                show</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#B392F0;">              }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">              labelLine</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">                show</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#B392F0;">              }</span></span>
<span class="line"><span style="color:#B392F0;">            }</span></span>
<span class="line"><span style="color:#B392F0;">          }</span></span>
<span class="line"><span style="color:#B392F0;">        }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">        {</span></span>
<span class="line"><span style="color:#B392F0;">          value</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          name</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          itemStyle</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">            normal</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">              label</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">                show</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#B392F0;">              }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">              labelLine</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">                show</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#B392F0;">              }</span></span>
<span class="line"><span style="color:#B392F0;">            }</span></span>
<span class="line"><span style="color:#B392F0;">          }</span></span>
<span class="line"><span style="color:#B392F0;">        }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">        {</span></span>
<span class="line"><span style="color:#B392F0;">          value</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          name</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          itemStyle</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">            normal</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">              label</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">                show</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#B392F0;">              }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">              labelLine</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">                show</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#B392F0;">              }</span></span>
<span class="line"><span style="color:#B392F0;">            }</span></span>
<span class="line"><span style="color:#B392F0;">          }</span></span>
<span class="line"><span style="color:#B392F0;">        }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">        {</span></span>
<span class="line"><span style="color:#B392F0;">          value</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          name</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> &#39;&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          itemStyle</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">            normal</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">              label</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">                show</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#B392F0;">              }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">              labelLine</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">                show</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#B392F0;">              }</span></span>
<span class="line"><span style="color:#B392F0;">            }</span></span>
<span class="line"><span style="color:#B392F0;">          }</span></span>
<span class="line"><span style="color:#B392F0;">        }</span></span>
<span class="line"><span style="color:#B392F0;">      ]</span></span>
<span class="line"><span style="color:#B392F0;">    }</span></span>
<span class="line"><span style="color:#B392F0;">  ]</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br></div></div>`,12),B=[o];function e(c,F,r,t,y,i){return a(),n("div",null,B)}const u=s(p,[["render",e]]);export{A as __pageData,u as default};
