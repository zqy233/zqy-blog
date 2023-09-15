import{_ as n,c as s,o as a,a as p}from"./app.8bfa11d3.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"monorepo 是什么","slug":"monorepo-是什么","link":"#monorepo-是什么","children":[]},{"level":2,"title":"pnpm 是什么","slug":"pnpm-是什么","link":"#pnpm-是什么","children":[]},{"level":2,"title":"为什么要使用 monorepo","slug":"为什么要使用-monorepo","link":"#为什么要使用-monorepo","children":[]}],"relativePath":"3.框架/wujie微前端/pnpm-workspace.md","lastUpdated":1694759414000}'),e={name:"3.框架/wujie微前端/pnpm-workspace.md"},l=p(`<blockquote><p><a href="https://zhuanlan.zhihu.com/p/373935751" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/373935751</a></p></blockquote><h2 id="monorepo-是什么" tabindex="-1">monorepo 是什么 <a class="header-anchor" href="#monorepo-是什么" aria-hidden="true">#</a></h2><p>monorepo 是把多个项目的所有代码放到一个 git 仓库中进行管理，多个项目中会有共享的代码则可以分包引用。整个项目就是有 root 管理的 dependencies 加上多个 packages，每个 package 也可以在自己的作用域引入自己的 dependencies</p><p>项目结构如下：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">├── node_modules</span></span>
<span class="line"><span style="color:#abb2bf;">├── package.json</span></span>
<span class="line"><span style="color:#abb2bf;">├── packages</span></span>
<span class="line"><span style="color:#abb2bf;">│   ├── ui</span></span>
<span class="line"><span style="color:#abb2bf;">│   ├── utils</span></span>
<span class="line"><span style="color:#abb2bf;">│   └── web</span></span>
<span class="line"><span style="color:#abb2bf;">├── pnpm-lock.yaml</span></span>
<span class="line"><span style="color:#abb2bf;">├── pnpm-workspace.yaml</span></span>
<span class="line"><span style="color:#abb2bf;">├── readme.md</span></span>
<span class="line"><span style="color:#abb2bf;">└── tsconfig.json</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#b392f0;">├── node_modules</span></span>
<span class="line"><span style="color:#b392f0;">├── package.json</span></span>
<span class="line"><span style="color:#b392f0;">├── packages</span></span>
<span class="line"><span style="color:#b392f0;">│   ├── ui</span></span>
<span class="line"><span style="color:#b392f0;">│   ├── utils</span></span>
<span class="line"><span style="color:#b392f0;">│   └── web</span></span>
<span class="line"><span style="color:#b392f0;">├── pnpm-lock.yaml</span></span>
<span class="line"><span style="color:#b392f0;">├── pnpm-workspace.yaml</span></span>
<span class="line"><span style="color:#b392f0;">├── readme.md</span></span>
<span class="line"><span style="color:#b392f0;">└── tsconfig.json</span></span>
<span class="line"><span style="color:#b392f0;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>packages 文件夹中的就是原本每个独立的项目(下文称之为 package )了，现在放在一起用 workspace 去管理。最外层路径称之为 root。在 root package.json 中的 deps 是所有子 package 共用的</p><h2 id="pnpm-是什么" tabindex="-1">pnpm 是什么 <a class="header-anchor" href="#pnpm-是什么" aria-hidden="true">#</a></h2><p>pnpm 是新一代 node 包管理器。它由 npm/yarn 衍生而来，但却解决了 npm/yarn 内部潜在的 bug，并且极大了地优化了性能，扩展了使用场景</p><p>pnpm 相比 yarn，npm，yarn 安装包更快速，对包的依赖管理更偏平，对磁盘占用也有优势</p><h2 id="为什么要使用-monorepo" tabindex="-1">为什么要使用 monorepo <a class="header-anchor" href="#为什么要使用-monorepo" aria-hidden="true">#</a></h2><p>使用 monorepo 可以把原本一个项目的多个模块拆分成多个 packages，在 packages 之间相互引用，也可以单独发布成包，极大地解决了项目之间代码无法重用的痛点。在项目打包或者编译操作时也可重用一套配置，通吃所有 packages。</p>`,11),o=[l];function r(c,i,t,b,m,d){return a(),s("div",null,o)}const f=n(e,[["render",r]]);export{h as __pageData,f as default};
