import{_ as s,o as n,c as a,a as o}from"./app.bfa9bd4b.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"4.库/eharts/9.饼图.md","lastUpdated":1720835436702}'),p={name:"4.库/eharts/9.饼图.md"},l=o(`<div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">option = {</span></span>
<span class="line"><span style="color:#abb2bf;">        title: {</span></span>
<span class="line"><span style="color:#abb2bf;">          text: &quot;告警次数统计图&quot;</span></span>
<span class="line"><span style="color:#abb2bf;">        },</span></span>
<span class="line"><span style="color:#abb2bf;">        color: [&quot;#3BA1FF&quot;],</span></span>
<span class="line"><span style="color:#abb2bf;">        xAxis: {</span></span>
<span class="line"><span style="color:#abb2bf;">          type: &quot;category&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">          data: [&quot;12.01&quot;, &quot;12.02&quot;, &quot;12.03&quot;, &quot;12.04&quot;, &quot;12.05&quot;, &quot;12.06&quot;, &quot;12.07&quot;, &quot;12.08&quot;, &quot;12.09&quot;, &quot;12.11&quot;, &quot;12.12&quot;, &quot;12.13&quot;, &quot;12.14&quot;, &quot;12.15&quot;, &quot;12.166&quot;, &quot;12.17&quot;, &quot;12.18&quot;, &quot;12.19&quot;, &quot;12.20&quot;, &quot;12.21&quot;, &quot;12.22&quot;, &quot;12.23&quot;, &quot;12.24&quot;, &quot;12.25&quot;, &quot;12.26&quot;, &quot;12.27&quot;, &quot;12.28&quot;, &quot;12.29&quot;, &quot;12.30&quot;, &quot;12.31&quot;]</span></span>
<span class="line"><span style="color:#abb2bf;">        },</span></span>
<span class="line"><span style="color:#abb2bf;">        yAxis: {</span></span>
<span class="line"><span style="color:#abb2bf;">          type: &quot;value&quot;</span></span>
<span class="line"><span style="color:#abb2bf;">        },</span></span>
<span class="line"><span style="color:#abb2bf;">        series: [</span></span>
<span class="line"><span style="color:#abb2bf;">          {</span></span>
<span class="line"><span style="color:#abb2bf;">            data: [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 3, 2, 1],</span></span>
<span class="line"><span style="color:#abb2bf;">            type: &quot;bar&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">            backgroundStyle: {</span></span>
<span class="line"><span style="color:#abb2bf;">              color: &quot;rgba(180, 180, 180, 0.2)&quot;</span></span>
<span class="line"><span style="color:#abb2bf;">            }</span></span>
<span class="line"><span style="color:#abb2bf;">          }</span></span>
<span class="line"><span style="color:#abb2bf;">        ]</span></span>
<span class="line"><span style="color:#abb2bf;">      }</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#b392f0;">option = {</span></span>
<span class="line"><span style="color:#b392f0;">        title: {</span></span>
<span class="line"><span style="color:#b392f0;">          text: &quot;告警次数统计图&quot;</span></span>
<span class="line"><span style="color:#b392f0;">        },</span></span>
<span class="line"><span style="color:#b392f0;">        color: [&quot;#3BA1FF&quot;],</span></span>
<span class="line"><span style="color:#b392f0;">        xAxis: {</span></span>
<span class="line"><span style="color:#b392f0;">          type: &quot;category&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">          data: [&quot;12.01&quot;, &quot;12.02&quot;, &quot;12.03&quot;, &quot;12.04&quot;, &quot;12.05&quot;, &quot;12.06&quot;, &quot;12.07&quot;, &quot;12.08&quot;, &quot;12.09&quot;, &quot;12.11&quot;, &quot;12.12&quot;, &quot;12.13&quot;, &quot;12.14&quot;, &quot;12.15&quot;, &quot;12.166&quot;, &quot;12.17&quot;, &quot;12.18&quot;, &quot;12.19&quot;, &quot;12.20&quot;, &quot;12.21&quot;, &quot;12.22&quot;, &quot;12.23&quot;, &quot;12.24&quot;, &quot;12.25&quot;, &quot;12.26&quot;, &quot;12.27&quot;, &quot;12.28&quot;, &quot;12.29&quot;, &quot;12.30&quot;, &quot;12.31&quot;]</span></span>
<span class="line"><span style="color:#b392f0;">        },</span></span>
<span class="line"><span style="color:#b392f0;">        yAxis: {</span></span>
<span class="line"><span style="color:#b392f0;">          type: &quot;value&quot;</span></span>
<span class="line"><span style="color:#b392f0;">        },</span></span>
<span class="line"><span style="color:#b392f0;">        series: [</span></span>
<span class="line"><span style="color:#b392f0;">          {</span></span>
<span class="line"><span style="color:#b392f0;">            data: [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 3, 2, 1],</span></span>
<span class="line"><span style="color:#b392f0;">            type: &quot;bar&quot;,</span></span>
<span class="line"><span style="color:#b392f0;">            backgroundStyle: {</span></span>
<span class="line"><span style="color:#b392f0;">              color: &quot;rgba(180, 180, 180, 0.2)&quot;</span></span>
<span class="line"><span style="color:#b392f0;">            }</span></span>
<span class="line"><span style="color:#b392f0;">          }</span></span>
<span class="line"><span style="color:#b392f0;">        ]</span></span>
<span class="line"><span style="color:#b392f0;">      }</span></span>
<span class="line"><span style="color:#b392f0;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,1),t=[l];function e(u,c,b,q,r,i){return n(),a("div",null,t)}const d=s(p,[["render",e]]);export{f as __pageData,d as default};
