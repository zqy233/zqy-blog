import{_ as s,o as n,c as a,a as l}from"./app.bfa9bd4b.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"设置表头样式","slug":"设置表头样式","link":"#设置表头样式","children":[]},{"level":2,"title":"插槽","slug":"插槽","link":"#插槽","children":[]}],"relativePath":"4.库/element-ui/el-table.md","lastUpdated":1720835436702}'),p={name:"4.库/element-ui/el-table.md"},e=l(`<h2 id="设置表头样式" tabindex="-1">设置表头样式 <a class="header-anchor" href="#设置表头样式" aria-hidden="true">#</a></h2><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">el-table</span></span>
<span class="line"><span style="color:#ABB2BF;">            :</span><span style="color:#D19A66;">data</span><span style="color:#ABB2BF;">=</span><span style="color:#ABB2BF;">&quot;</span><span style="color:#E06C75;">bottomTableData</span><span style="color:#ABB2BF;">&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#D19A66;">border</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#D19A66;">stripe</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#D19A66;">fit</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#D19A66;">height</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;100%&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">            :</span><span style="color:#D19A66;">row-style</span><span style="color:#ABB2BF;">=</span><span style="color:#ABB2BF;">&quot;</span><span style="color:#ABB2BF;">{}</span><span style="color:#ABB2BF;">&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">            :</span><span style="color:#D19A66;">header-cell-style</span><span style="color:#ABB2BF;">=</span><span style="color:#ABB2BF;">&quot;</span><span style="color:#E06C75;">getHeaderStyle</span><span style="color:#ABB2BF;">&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            &lt;el-table-column</span></span>
<span class="line"><span style="color:#ABB2BF;">              type=&quot;index&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">              label=&quot;序号&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">              align=&quot;center&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">              width=&quot;68&quot;&gt;&lt;/el-table-column&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            &lt;el-table-column</span></span>
<span class="line"><span style="color:#ABB2BF;">              prop=&quot;sqdBh&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">              label=&quot;流程单编号&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">              align=&quot;center&quot;&gt;&lt;/el-table-column&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">          &lt;/</span><span style="color:#E06C75;">el-table</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">&lt;</span><span style="color:#FFAB70;">el-table</span></span>
<span class="line"><span style="color:#B392F0;">            :data</span><span style="color:#F97583;">=</span><span style="color:#B392F0;">&quot;</span><span style="color:#B392F0;">bottomTableData</span><span style="color:#B392F0;">&quot;</span></span>
<span class="line"><span style="color:#B392F0;">            border</span></span>
<span class="line"><span style="color:#B392F0;">            stripe</span></span>
<span class="line"><span style="color:#B392F0;">            fit</span></span>
<span class="line"><span style="color:#B392F0;">            height</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;100%&quot;</span></span>
<span class="line"><span style="color:#B392F0;">            :row-style</span><span style="color:#F97583;">=</span><span style="color:#B392F0;">&quot;</span><span style="color:#B392F0;">{}</span><span style="color:#B392F0;">&quot;</span></span>
<span class="line"><span style="color:#B392F0;">            :header-cell-style</span><span style="color:#F97583;">=</span><span style="color:#B392F0;">&quot;</span><span style="color:#B392F0;">getHeaderStyle</span><span style="color:#B392F0;">&quot;</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">            &lt;el-table-column</span></span>
<span class="line"><span style="color:#B392F0;">              type=&quot;index&quot;</span></span>
<span class="line"><span style="color:#B392F0;">              label=&quot;序号&quot;</span></span>
<span class="line"><span style="color:#B392F0;">              align=&quot;center&quot;</span></span>
<span class="line"><span style="color:#B392F0;">              width=&quot;68&quot;&gt;&lt;/el-table-column&gt;</span></span>
<span class="line"><span style="color:#B392F0;">            &lt;el-table-column</span></span>
<span class="line"><span style="color:#B392F0;">              prop=&quot;sqdBh&quot;</span></span>
<span class="line"><span style="color:#B392F0;">              label=&quot;流程单编号&quot;</span></span>
<span class="line"><span style="color:#B392F0;">              align=&quot;center&quot;&gt;&lt;/el-table-column&gt;</span></span>
<span class="line"><span style="color:#B392F0;">          &lt;/</span><span style="color:#FFAB70;">el-table</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">getHeaderStyle</span><span style="color:#ABB2BF;">({ </span><span style="color:#E06C75;">row</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">column</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">rowIndex</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">columnIndex</span><span style="color:#ABB2BF;"> }) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">columnIndex</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">row</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">length</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;color:#0761d1;backgroundColor:#96bdf8;&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      } </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;color:#333;backgroundColor:#b6cff5;&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;"> getHeaderStyle({ row</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> column</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> rowIndex</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> columnIndex }) {</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#F97583;">if</span><span style="color:#B392F0;"> (columnIndex </span><span style="color:#F97583;">===</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">row</span><span style="color:#B392F0;">.</span><span style="color:#79B8FF;">length</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">-</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1</span><span style="color:#B392F0;">) {</span></span>
<span class="line"><span style="color:#B392F0;">        </span><span style="color:#F97583;">return</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;color:#0761d1;backgroundColor:#96bdf8;&#39;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">      } </span><span style="color:#F97583;">else</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        </span><span style="color:#F97583;">return</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;color:#333;backgroundColor:#b6cff5;&#39;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">      }</span></span>
<span class="line"><span style="color:#B392F0;">    }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-hidden="true">#</a></h2><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">el-table-column</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#D19A66;">align</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;center&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#D19A66;">label</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;流程操作&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">              &lt;template slot-scope=&quot;scope&quot;&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                &lt;el-button</span></span>
<span class="line"><span style="color:#ABB2BF;">                  type=&quot;text&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">                  size=&quot;small&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">                  :style=&quot;{ color: &#39;#2b7ed9&#39; }&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">                  icon=&quot;icon icon-click-handle&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">                  class=&quot;throttle&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">                  @click=&quot;(e) =&gt; getFormDetail(scope.row)&quot;&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                  点击处理</span></span>
<span class="line"><span style="color:#ABB2BF;">                &lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                &lt;el-button</span></span>
<span class="line"><span style="color:#ABB2BF;">                  @click=&quot;handleViewLog(scope.row)&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">                  type=&quot;text&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">                  size=&quot;small&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">                  :style=&quot;{ color: &#39;#2b7ed9&#39; }&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">                  icon=&quot;icon icon-view-log&quot;&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                  查看日志</span></span>
<span class="line"><span style="color:#ABB2BF;">                &lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                &lt;el-button</span></span>
<span class="line"><span style="color:#ABB2BF;">                  @click=&quot;handleDiscard(scope.row)&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">                  type=&quot;text&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">                  size=&quot;small&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">                  :style=&quot;{ color: &#39;#2b7ed9&#39; }&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">                  icon=&quot;icon icon-click-discard&quot;&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                  作废表单</span></span>
<span class="line"><span style="color:#ABB2BF;">                &lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">              &lt;/template&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            &lt;/</span><span style="color:#E06C75;">el-table-column</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">&lt;</span><span style="color:#FFAB70;">el-table-column</span></span>
<span class="line"><span style="color:#B392F0;">              align</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;center&quot;</span></span>
<span class="line"><span style="color:#B392F0;">              label</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;流程操作&quot;</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">              &lt;template slot-scope=&quot;scope&quot;&gt;</span></span>
<span class="line"><span style="color:#B392F0;">                &lt;el-button</span></span>
<span class="line"><span style="color:#B392F0;">                  type=&quot;text&quot;</span></span>
<span class="line"><span style="color:#B392F0;">                  size=&quot;small&quot;</span></span>
<span class="line"><span style="color:#B392F0;">                  :style=&quot;{ color: &#39;#2b7ed9&#39; }&quot;</span></span>
<span class="line"><span style="color:#B392F0;">                  icon=&quot;icon icon-click-handle&quot;</span></span>
<span class="line"><span style="color:#B392F0;">                  class=&quot;throttle&quot;</span></span>
<span class="line"><span style="color:#B392F0;">                  @click=&quot;(e) =&gt; getFormDetail(scope.row)&quot;&gt;</span></span>
<span class="line"><span style="color:#B392F0;">                  点击处理</span></span>
<span class="line"><span style="color:#B392F0;">                &lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#B392F0;">                &lt;el-button</span></span>
<span class="line"><span style="color:#B392F0;">                  @click=&quot;handleViewLog(scope.row)&quot;</span></span>
<span class="line"><span style="color:#B392F0;">                  type=&quot;text&quot;</span></span>
<span class="line"><span style="color:#B392F0;">                  size=&quot;small&quot;</span></span>
<span class="line"><span style="color:#B392F0;">                  :style=&quot;{ color: &#39;#2b7ed9&#39; }&quot;</span></span>
<span class="line"><span style="color:#B392F0;">                  icon=&quot;icon icon-view-log&quot;&gt;</span></span>
<span class="line"><span style="color:#B392F0;">                  查看日志</span></span>
<span class="line"><span style="color:#B392F0;">                &lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#B392F0;">                &lt;el-button</span></span>
<span class="line"><span style="color:#B392F0;">                  @click=&quot;handleDiscard(scope.row)&quot;</span></span>
<span class="line"><span style="color:#B392F0;">                  type=&quot;text&quot;</span></span>
<span class="line"><span style="color:#B392F0;">                  size=&quot;small&quot;</span></span>
<span class="line"><span style="color:#B392F0;">                  :style=&quot;{ color: &#39;#2b7ed9&#39; }&quot;</span></span>
<span class="line"><span style="color:#B392F0;">                  icon=&quot;icon icon-click-discard&quot;&gt;</span></span>
<span class="line"><span style="color:#B392F0;">                  作废表单</span></span>
<span class="line"><span style="color:#B392F0;">                &lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#B392F0;">              &lt;/template&gt;</span></span>
<span class="line"><span style="color:#B392F0;">            &lt;/</span><span style="color:#FFAB70;">el-table-column</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div>`,5),o=[e];function t(c,r,B,i,y,u){return n(),a("div",null,o)}const d=s(p,[["render",t]]);export{b as __pageData,d as default};
