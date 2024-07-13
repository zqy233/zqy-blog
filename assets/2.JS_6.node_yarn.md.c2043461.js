import{_ as s,o as n,c as a,a as l}from"./app.bfa9bd4b.js";const q=JSON.parse('{"title":"yarn","description":"","frontmatter":{},"headers":[{"level":3,"title":"全局安装","slug":"全局安装","link":"#全局安装","children":[]},{"level":3,"title":"镜像操作","slug":"镜像操作","link":"#镜像操作","children":[]},{"level":3,"title":"下载所有依赖包","slug":"下载所有依赖包","link":"#下载所有依赖包","children":[]},{"level":3,"title":"下载包","slug":"下载包","link":"#下载包","children":[]},{"level":3,"title":"全局安装依赖包","slug":"全局安装依赖包","link":"#全局安装依赖包","children":[]},{"level":3,"title":"删除包","slug":"删除包","link":"#删除包","children":[]},{"level":3,"title":"删除代理","slug":"删除代理","link":"#删除代理","children":[]}],"relativePath":"2.JS/6.node/yarn.md","lastUpdated":1720835436690}'),p={name:"2.JS/6.node/yarn.md"},o=l(`<h1 id="yarn" tabindex="-1">yarn <a class="header-anchor" href="#yarn" aria-hidden="true">#</a></h1><p>yarn可以看作更优秀的npm命令</p><h3 id="全局安装" tabindex="-1">全局安装 <a class="header-anchor" href="#全局安装" aria-hidden="true">#</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-g</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">yarn</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">npm </span><span style="color:#9DB1C5;">i</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">-g</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">yarn</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="镜像操作" tabindex="-1">镜像操作 <a class="header-anchor" href="#镜像操作" aria-hidden="true">#</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 查询当前地址配置</span></span>
<span class="line"><span style="color:#61AFEF;">yarn</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">config</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">get</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">registry</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 切换淘宝镜像</span></span>
<span class="line"><span style="color:#61AFEF;">yarn</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">config</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">set</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">registry</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">https://registry.npmmirror.com/</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 切换回原先地址</span></span>
<span class="line"><span style="color:#61AFEF;">yarn</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">config</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">set</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">registry</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">https://registry.npmjs.org/</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#6B737C;"># 查询当前地址配置</span></span>
<span class="line"><span style="color:#B392F0;">yarn </span><span style="color:#9DB1C5;">config</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">get</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">registry</span></span>
<span class="line"><span style="color:#6B737C;"># 切换淘宝镜像</span></span>
<span class="line"><span style="color:#B392F0;">yarn </span><span style="color:#9DB1C5;">config</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">set</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">registry</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">https://registry.npmmirror.com/</span></span>
<span class="line"><span style="color:#6B737C;"># 切换回原先地址</span></span>
<span class="line"><span style="color:#B392F0;">yarn </span><span style="color:#9DB1C5;">config</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">set</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">registry</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">https://registry.npmjs.org/</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="下载所有依赖包" tabindex="-1">下载所有依赖包 <a class="header-anchor" href="#下载所有依赖包" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">yarn</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#b392f0;">yarn</span></span>
<span class="line"><span style="color:#b392f0;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="下载包" tabindex="-1">下载包 <a class="header-anchor" href="#下载包" aria-hidden="true">#</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 下载用于用于开发环境与打包环境的包</span></span>
<span class="line"><span style="color:#61AFEF;">yarn</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">add</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">package</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 下载用于仅用于开发环境的包</span></span>
<span class="line"><span style="color:#61AFEF;">yarn</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">add</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--dev</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">package</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 上方简写</span></span>
<span class="line"><span style="color:#61AFEF;">yarn</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">add</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-D</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">package</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#6B737C;"># 下载用于用于开发环境与打包环境的包</span></span>
<span class="line"><span style="color:#B392F0;">yarn </span><span style="color:#9DB1C5;">add</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">package</span></span>
<span class="line"><span style="color:#6B737C;"># 下载用于仅用于开发环境的包</span></span>
<span class="line"><span style="color:#B392F0;">yarn </span><span style="color:#9DB1C5;">add</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">--dev</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">package</span></span>
<span class="line"><span style="color:#6B737C;"># 上方简写</span></span>
<span class="line"><span style="color:#B392F0;">yarn </span><span style="color:#9DB1C5;">add</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">-D</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">package</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="全局安装依赖包" tabindex="-1">全局安装依赖包 <a class="header-anchor" href="#全局安装依赖包" aria-hidden="true">#</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">yarn</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">global</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">add</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">package</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">yarn </span><span style="color:#9DB1C5;">global</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">add</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">package</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="删除包" tabindex="-1">删除包 <a class="header-anchor" href="#删除包" aria-hidden="true">#</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">yarn</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">remove</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">package</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">yarn </span><span style="color:#9DB1C5;">remove</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">package</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="删除代理" tabindex="-1">删除代理 <a class="header-anchor" href="#删除代理" aria-hidden="true">#</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">yarn</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">config</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">delete</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">proxy</span></span>
<span class="line"><span style="color:#61AFEF;">yarn</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">config</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">delete</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">https-proxy</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">yarn </span><span style="color:#9DB1C5;">config</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">delete</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">proxy</span></span>
<span class="line"><span style="color:#B392F0;">yarn </span><span style="color:#9DB1C5;">config</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">delete</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">https-proxy</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">{</span></span>
<span class="line"><span style="color:#abb2bf;">  &quot;name&quot;: &quot;vue-project-name&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">  &quot;private&quot;: true,</span></span>
<span class="line"><span style="color:#abb2bf;">  &quot;version&quot;: &quot;0.0.0&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">  &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;dev&quot;: &quot;vite --host&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;build&quot;: &quot;vite build&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;preview&quot;: &quot;vite preview&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;mock&quot;: &quot;npx nodemon ./mock/src/index.js&quot;</span></span>
<span class="line"><span style="color:#abb2bf;">  },</span></span>
<span class="line"><span style="color:#abb2bf;">  &quot;dependencies&quot;: {</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;@element-plus/icons-vue&quot;: &quot;^2.0.10&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;axios&quot;: &quot;^1.1.3&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;dayjs&quot;: &quot;^1.11.5&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;echarts&quot;: &quot;^5.3.3&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;element-plus&quot;: &quot;^2.2.20&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;nprogress&quot;: &quot;^0.2.0&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;qs&quot;: &quot;^6.11.0&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;swiper&quot;: &quot;^8.4.4&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;vue&quot;: &quot;^3.2.45&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;vue-echarts&quot;: &quot;^6.1.0&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;vue-router&quot;: &quot;^4.1.5&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;vuex&quot;: &quot;^4.0.2&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;vxe-table&quot;: &quot;^4.3.5&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;xe-utils&quot;: &quot;^3.5.6&quot;</span></span>
<span class="line"><span style="color:#abb2bf;">  },</span></span>
<span class="line"><span style="color:#abb2bf;">  &quot;devDependencies&quot;: {</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;@iconify-json/ep&quot;: &quot;^1.1.7&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;@vitejs/plugin-vue&quot;: &quot;^3.1.0&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;autoprefixer&quot;: &quot;^10.4.11&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;express&quot;: &quot;^4.18.2&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;postcss-pxtorem&quot;: &quot;^6.0.0&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;rollup-plugin-compression&quot;: &quot;^1.0.2&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;sass&quot;: &quot;^1.56.0&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;unplugin-auto-import&quot;: &quot;^0.11.2&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;unplugin-icons&quot;: &quot;^0.14.9&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;unplugin-vue-components&quot;: &quot;^0.22.7&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;vite&quot;: &quot;^3.2.3&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;vite-plugin-html&quot;: &quot;^3.2.0&quot;</span></span>
<span class="line"><span style="color:#abb2bf;">  }</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#b392f0;">{</span></span>
<span class="line"><span style="color:#b392f0;">  &quot;name&quot;: &quot;vue-project-name&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">  &quot;private&quot;: true,</span></span>
<span class="line"><span style="color:#b392f0;">  &quot;version&quot;: &quot;0.0.0&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">  &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;dev&quot;: &quot;vite --host&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;build&quot;: &quot;vite build&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;preview&quot;: &quot;vite preview&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;mock&quot;: &quot;npx nodemon ./mock/src/index.js&quot;</span></span>
<span class="line"><span style="color:#b392f0;">  },</span></span>
<span class="line"><span style="color:#b392f0;">  &quot;dependencies&quot;: {</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;@element-plus/icons-vue&quot;: &quot;^2.0.10&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;axios&quot;: &quot;^1.1.3&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;dayjs&quot;: &quot;^1.11.5&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;echarts&quot;: &quot;^5.3.3&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;element-plus&quot;: &quot;^2.2.20&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;nprogress&quot;: &quot;^0.2.0&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;qs&quot;: &quot;^6.11.0&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;swiper&quot;: &quot;^8.4.4&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;vue&quot;: &quot;^3.2.45&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;vue-echarts&quot;: &quot;^6.1.0&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;vue-router&quot;: &quot;^4.1.5&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;vuex&quot;: &quot;^4.0.2&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;vxe-table&quot;: &quot;^4.3.5&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;xe-utils&quot;: &quot;^3.5.6&quot;</span></span>
<span class="line"><span style="color:#b392f0;">  },</span></span>
<span class="line"><span style="color:#b392f0;">  &quot;devDependencies&quot;: {</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;@iconify-json/ep&quot;: &quot;^1.1.7&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;@vitejs/plugin-vue&quot;: &quot;^3.1.0&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;autoprefixer&quot;: &quot;^10.4.11&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;express&quot;: &quot;^4.18.2&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;postcss-pxtorem&quot;: &quot;^6.0.0&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;rollup-plugin-compression&quot;: &quot;^1.0.2&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;sass&quot;: &quot;^1.56.0&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;unplugin-auto-import&quot;: &quot;^0.11.2&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;unplugin-icons&quot;: &quot;^0.14.9&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;unplugin-vue-components&quot;: &quot;^0.22.7&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;vite&quot;: &quot;^3.2.3&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">    &quot;vite-plugin-html&quot;: &quot;^3.2.0&quot;</span></span>
<span class="line"><span style="color:#b392f0;">  }</span></span>
<span class="line"><span style="color:#b392f0;">}</span></span>
<span class="line"><span style="color:#b392f0;"></span></span>
<span class="line"><span style="color:#b392f0;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">C:\\Program Files</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#b392f0;">C:\\Program Files</span></span>
<span class="line"><span style="color:#b392f0;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,18),e=[o];function t(r,c,i,u,b,y){return n(),a("div",null,e)}const B=s(p,[["render",t]]);export{q as __pageData,B as default};
