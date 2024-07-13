import{_ as s,o as n,c as a,a as p}from"./app.bfa9bd4b.js";const F=JSON.parse('{"title":"package.json","description":"","frontmatter":{},"headers":[{"level":2,"title":"files","slug":"files","link":"#files","children":[]},{"level":2,"title":"packageManager","slug":"packagemanager","link":"#packagemanager","children":[]},{"level":2,"title":"pnpm","slug":"pnpm","link":"#pnpm","children":[]},{"level":2,"title":"simple-git-hooks","slug":"simple-git-hooks","link":"#simple-git-hooks","children":[]},{"level":2,"title":"lint-staged","slug":"lint-staged","link":"#lint-staged","children":[]},{"level":2,"title":"types","slug":"types","link":"#types","children":[]}],"relativePath":"2.JS/6.node/package.md","lastUpdated":1720835436690}'),l={name:"2.JS/6.node/package.md"},e=p(`<h1 id="package-json" tabindex="-1">package.json <a class="header-anchor" href="#package-json" aria-hidden="true">#</a></h1><p>创建package.json</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 使用输入的方式初始化配置package.json</span></span>
<span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">init</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 使用默认参数创建package.json文件</span></span>
<span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">init</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--yes</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 上方简写</span></span>
<span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">init</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-y</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#6B737C;"># 使用输入的方式初始化配置package.json</span></span>
<span class="line"><span style="color:#B392F0;">npm </span><span style="color:#9DB1C5;">init</span></span>
<span class="line"><span style="color:#6B737C;"># 使用默认参数创建package.json文件</span></span>
<span class="line"><span style="color:#B392F0;">npm </span><span style="color:#9DB1C5;">init</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">--yes</span></span>
<span class="line"><span style="color:#6B737C;"># 上方简写</span></span>
<span class="line"><span style="color:#B392F0;">npm </span><span style="color:#9DB1C5;">init</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">-y</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="files" tabindex="-1">files <a class="header-anchor" href="#files" aria-hidden="true">#</a></h2><p>这个不是必选项, 也并不常见, 但是很重要, 因为有配置这个信息会显得非常专业</p><p><strong>files</strong>是一个数组, 它描述了你 <code>npm publish</code>的时候推送到<strong>npm</strong>服务器的文件列表,支持目录和通配 比如</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#98C379;">&quot;files&quot;</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#98C379;">&quot;LICENSE&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#98C379;">&quot;History.md&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#98C379;">&quot;Readme.md&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#98C379;">&quot;index.js&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#98C379;">&quot;lib/&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  ],</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#FFAB70;">&quot;files&quot;</span><span style="color:#B392F0;">: [</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#FFAB70;">&quot;LICENSE&quot;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#FFAB70;">&quot;History.md&quot;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#FFAB70;">&quot;Readme.md&quot;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#FFAB70;">&quot;index.js&quot;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#FFAB70;">&quot;lib/&quot;</span></span>
<span class="line"><span style="color:#B392F0;">  ],</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>反过来, 你可以通过一个 <code>.npmignore</code> 文件来排除一些文件, 防止大量的垃圾文件推送到<strong>npm</strong>, 规则上和你用的<code>gitignore</code>是一样的.</p><blockquote><p>Tips 如果你的项目下有 <strong>.gitignore</strong> 文件, 那么它也能充当**.npmignore<strong>的功能. 这意味着, 如果没有特别的需求, 一个</strong>.gitignore**就行了.</p></blockquote><h2 id="packagemanager" tabindex="-1">packageManager <a class="header-anchor" href="#packagemanager" aria-hidden="true">#</a></h2><p>定义处理当前项目时预期使用的包管理器。该领域目前处于试验阶段，应选择使用；查看<a href="https://nodejs.org/api/corepack.html" target="_blank" rel="noreferrer">https://nodejs.org/api/corepack.html</a></p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#98C379;">&quot;packageManager&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;pnpm@7.26.1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#FFAB70;">&quot;packageManager&quot;</span><span style="color:#B392F0;">: </span><span style="color:#FFAB70;">&quot;pnpm@7.26.1&quot;</span><span style="color:#B392F0;">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="pnpm" tabindex="-1">pnpm <a class="header-anchor" href="#pnpm" aria-hidden="true">#</a></h2><p>pnpm忽略下载依赖包丢失的警告</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;pnpm&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;peerDependencyRules&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">&quot;ignoreMissing&quot;</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#98C379;">&quot;@algolia/client-search&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">      ]</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;pnpm&quot;</span><span style="color:#B392F0;">: {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#F8F8F8;">&quot;peerDependencyRules&quot;</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#F8F8F8;">&quot;ignoreMissing&quot;</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> [</span></span>
<span class="line"><span style="color:#B392F0;">        </span><span style="color:#FFAB70;">&quot;@algolia/client-search&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      ]</span></span>
<span class="line"><span style="color:#B392F0;">    }</span></span>
<span class="line"><span style="color:#B392F0;">  },</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="simple-git-hooks" tabindex="-1">simple-git-hooks <a class="header-anchor" href="#simple-git-hooks" aria-hidden="true">#</a></h2><p>git钩子，例如如下示例、表示commit前会先调用<code>lint-staged</code></p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;simple-git-hooks&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;pre-commit&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;pnpm lint-staged&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">&quot;simple-git-hooks&quot;</span><span style="color:#B392F0;">: {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#F8F8F8;">&quot;pre-commit&quot;</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;pnpm lint-staged&quot;</span></span>
<span class="line"><span style="color:#B392F0;">  },</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="lint-staged" tabindex="-1">lint-staged <a class="header-anchor" href="#lint-staged" aria-hidden="true">#</a></h2><p>搭配<code>simple-git-hooks</code>，所有文件使用prettier进行格式化</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;lint-staged&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;*&quot;</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#98C379;">&quot;prettier --write --ignore-unknown&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">    ]</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;lint-staged&quot;</span><span style="color:#B392F0;">: {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#F8F8F8;">&quot;*&quot;</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> [</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#FFAB70;">&quot;prettier --write --ignore-unknown&quot;</span></span>
<span class="line"><span style="color:#B392F0;">    ]</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="types" tabindex="-1">types <a class="header-anchor" href="#types" aria-hidden="true">#</a></h2><p>将types属性设置为指向绑定的声明文件</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;types&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;types/index.d.ts&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;types&quot;</span><span style="color:#B392F0;">: </span><span style="color:#FFAB70;">&quot;types/index.d.ts&quot;</span><span style="color:#B392F0;">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,24),o=[e];function t(c,r,i,B,d,y){return n(),a("div",null,o)}const m=s(l,[["render",t]]);export{F as __pageData,m as default};