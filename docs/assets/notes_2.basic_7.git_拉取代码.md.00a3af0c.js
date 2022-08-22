import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.969b4838.js";
const __pageData = JSON.parse('{"title":"\u62C9\u53D6\u4EE3\u7801","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u514B\u9686\u8FDC\u7A0B\u4ED3\u5E93\u9879\u76EE","slug":"\u514B\u9686\u8FDC\u7A0B\u4ED3\u5E93\u9879\u76EE"},{"level":2,"title":"git pull --rebase","slug":"git-pull-rebase"},{"level":3,"title":"\u6CE8\u610F\u4E8B\u9879","slug":"\u6CE8\u610F\u4E8B\u9879"},{"level":3,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3"},{"level":2,"title":"git reset\u56DE\u9000","slug":"git-reset\u56DE\u9000"},{"level":3,"title":"--mixed","slug":"mixed"},{"level":3,"title":"--soft","slug":"soft"},{"level":3,"title":"--hard","slug":"hard"}],"relativePath":"notes/2.basic/7.git/\u62C9\u53D6\u4EE3\u7801.md"}');
const _sfc_main = { name: "notes/2.basic/7.git/\u62C9\u53D6\u4EE3\u7801.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u62C9\u53D6\u4EE3\u7801" tabindex="-1">\u62C9\u53D6\u4EE3\u7801 <a class="header-anchor" href="#\u62C9\u53D6\u4EE3\u7801" aria-hidden="true">#</a></h1><p>git\u5206\u4E3A\u672C\u5730\u4ED3\u5E93\u548C\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u4E00\u822C\u60C5\u51B5\u90FD\u662F\u5199\u5B8C\u4EE3\u7801\uFF0Ccommit\u5230\u672C\u5730\u4ED3\u5E93\uFF08\u751F\u6210\u672C\u5730\u4ED3\u7684commit ID\uFF0C\u4EE3\u8868\u5F53\u524D\u63D0\u4EA4\u4EE3\u7801\u7684\u7248\u672C\u53F7\uFF09\uFF0C\u7136\u540Epush\u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF08\u8BB0\u5F55\u8FD9\u4E2A\u7248\u672C\u53F7\uFF09</p><p>\u6211\u4EEC\u672C\u5730\u7684git\u6587\u4EF6\u5939\u91CC\u9762\u5BF9\u5E94\u4E5F\u5B58\u50A8\u4E86git\u672C\u5730\u4ED3\u5E93maste</p><h2 id="\u514B\u9686\u8FDC\u7A0B\u4ED3\u5E93\u9879\u76EE" tabindex="-1">\u514B\u9686\u8FDC\u7A0B\u4ED3\u5E93\u9879\u76EE <a class="header-anchor" href="#\u514B\u9686\u8FDC\u7A0B\u4ED3\u5E93\u9879\u76EE" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u6839\u636E\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740\u5C06\u9879\u76EE\u514B\u9686\u5230\u672C\u5730,\u4F1A\u751F\u6210\u9690\u85CF\u7684.git\u6587\u4EF6\uFF0C\u8BE5\u6587\u4EF6\u5B58\u50A8\u4ED3\u5E93\u7684git\u76F8\u5173\u4FE1\u606F</span></span>\n<span class="line"><span style="color:#A6ACCD;">git clone https://git-repo-address.git   </span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u7B49\u4EF7\u4E8E</span></span>\n<span class="line"><span style="color:#A6ACCD;">git init</span></span>\n<span class="line"><span style="color:#A6ACCD;">git remote add origin https://git-repo-address.git    </span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u62C9\u53D6\u8FDC\u7A0B\u4ED3\u5E93\u9ED8\u8BA4\u5206\u652F\u5E76\u4E14\u672C\u5730\u751F\u6210\u540C\u540D\u5206\u652F</span></span>\n<span class="line"><span style="color:#A6ACCD;">git pull origin </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">default-branchname</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">  </span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u514B\u9686\u8FDC\u7A0B\u4ED3\u5E93\u6307\u5B9A\u5206\u652F</span></span>\n<span class="line"><span style="color:#A6ACCD;">git clone -b </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">branchname</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> https://git-repo-address.git  </span></span>\n<span class="line"></span></code></pre></div><h2 id="git-pull-rebase" tabindex="-1">git pull --rebase <a class="header-anchor" href="#git-pull-rebase" aria-hidden="true">#</a></h2><p>\u5728\u591A\u4EBA\u4F7F\u7528\u540C\u4E00\u4E2A\u8FDC\u7A0B\u5206\u652F\u5408\u4F5C\u5F00\u53D1\u7684\u65F6\u5019\uFF0C\u5F88\u53EF\u80FD\u51FA\u73B0push\u4EE3\u7801\u7684\u65F6\u5019\u51FA\u73B0\u4EE5\u4E0B\u95EE\u9898\uFF1A</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">To https://github.com/zqy233/git.git</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">rejected</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">        main -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> main </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fetch first</span><span style="color:#89DDFF;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">error: failed to push some refs to </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://github.com/zqy233/git.git</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#A6ACCD;">hint: Updates were rejected because the remote contains work that you </span><span style="color:#89DDFF;font-style:italic;">do</span></span>\n<span class="line"><span style="color:#A6ACCD;">hint: not have locally. This is usually caused by another repository pushing</span></span>\n<span class="line"><span style="color:#A6ACCD;">hint: to the same ref. You may want to first integrate the remote changes</span></span>\n<span class="line"><span style="color:#A6ACCD;">hint: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e.g., </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git pull ...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> before pushing again.</span></span>\n<span class="line"><span style="color:#A6ACCD;">hint: See the </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Note about fast-forwards</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git push --help</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> details.</span></span>\n<span class="line"></span></code></pre></div><p>\u5F88\u660E\u663E\u6B64\u65F6\u8FDC\u7A0B\u5206\u652F\u6709\u65B0\u7684 commit \u672A\u540C\u6B65\u5230\u672C\u5730\uFF0C\u65E0\u6CD5\u63A8\u9001\u3002\u6B63\u5E38\u60C5\u51B5\u4E0B\u6267\u884C<code>git pull</code>\uFF0C\u518Dpush\u4EE3\u7801\u5373\u53EF</p><p>\u4F46\u8FD9\u65F6<code>git log</code>\u4F1A\u591A\u51FA\u4E86\u4E00\u6761 merge commit\uFF0C\u8FD9\u4E2A commit \u5C31\u662F\u5728\u6267\u884C <code>git pull</code> \u7684\u65F6\u5019\u81EA\u52A8\u751F\u6210\u7684\u3002\u5982\u679C\u591A\u4EBA\u591A\u6B21\u5982\u6B64\u64CD\u4F5C\uFF0C\u90A3\u4E48\u63D0\u4EA4\u8BB0\u5F55\u5C31\u4F1A\u51FA\u73B0\u5F88\u591A\u6761\u8FD9\u79CD\u81EA\u52A8\u751F\u6210\u7684 merge commit\uFF0C\u975E\u5E38\u96BE\u770B \u8981\u89E3\u51B3\u4EE5\u4E0A\u95EE\u9898\uFF0C\u4E0D\u518D\u51FA\u73B0\u81EA\u52A8\u751F\u6210\u7684 merge commit\uFF0C\u90A3\u4E48\u53EA\u8981\u5728\u6267\u884C <code>git pull</code> \u7684\u65F6\u5019\u5E26\u4E0A <code>--rebase</code> \u5373\u53EF</p><h3 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1">\u6CE8\u610F\u4E8B\u9879 <a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a></h3><ul><li><strong>\u6267\u884C <code>git pull --rebase</code>\u7684\u65F6\u5019\u5FC5\u987B\u4FDD\u6301\u672C\u5730\u76EE\u5F55\u5E72\u51C0\u3002</strong> \u5373\uFF1A\u4E0D\u80FD\u5B58\u5728\u72B6\u6001\u4E3A <code>modified</code> \u7684\u6587\u4EF6\u3002\uFF08\u5B58\u5728<code>Untracked files</code>\u662F\u6CA1\u5173\u7CFB\u7684\uFF09</li><li><strong>\u5982\u679C\u51FA\u73B0\u51B2\u7A81\uFF0C\u53EF\u4EE5\u9009\u62E9\u624B\u52A8\u89E3\u51B3\u51B2\u7A81\u540E\u7EE7\u7EED<code>rebase</code>\uFF0C\u4E5F\u53EF\u4EE5\u653E\u5F03\u672C\u6B21<code>rebase</code></strong></li></ul><h4 id="\u6267\u884C-git-pull-rebase-\u7684\u65F6\u5019\u5FC5\u987B\u4FDD\u6301\u672C\u5730\u76EE\u5F55\u5E72\u51C0" tabindex="-1">\u6267\u884C git pull --rebase \u7684\u65F6\u5019\u5FC5\u987B\u4FDD\u6301\u672C\u5730\u76EE\u5F55\u5E72\u51C0 <a class="header-anchor" href="#\u6267\u884C-git-pull-rebase-\u7684\u65F6\u5019\u5FC5\u987B\u4FDD\u6301\u672C\u5730\u76EE\u5F55\u5E72\u51C0" aria-hidden="true">#</a></h4><p><strong>1.</strong> \u6709 modified \u72B6\u6001\u7684\u6587\u4EF6</p><p>\u672C\u5730\u6709\u53D7\u7248\u672C\u63A7\u5236\u7684\u6587\u4EF6\u6539\u52A8\u7684\u65F6\u5019\uFF0C\u6267\u884C<code>git pull --rebase</code></p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">error: cannot pull with rebase: You have unstaged changes.</span></span>\n<span class="line"><span style="color:#A6ACCD;">error: please commit or stash them.</span></span>\n<span class="line"></span></code></pre></div><p>\u4F1A\u51FA\u73B0\u4EE5\u4E0A\u62A5\u9519\uFF0C\u65E0\u6CD5\u64CD\u4F5C</p><p>\u5C31\u662F\u56E0\u4E3A\u672C\u5730\u6709\u6587\u4EF6\u6539\u52A8\u5C1A\u672A\u63D0\u4EA4\u9020\u6210\u7684\u3002\u6B64\u65F6\u6709\u4E24\u79CD\u505A\u6CD5</p><ul><li><strong>\u5982\u679C\u672C\u6B21\u4FEE\u6539\u5DF2\u7ECF\u5B8C\u6210\uFF0C\u5219\u53EF\u4EE5\u5148\u63D0\u4EA4\uFF08commit\uFF09\u4E00\u4E0B</strong></li><li><strong>\u5982\u679C\u672C\u6B21\u4FEE\u6539\u5C1A\u672A\u5B8C\u6210\uFF0C\u5219\u53EF\u4EE5\u5148\u8D2E\u85CF\uFF1Agit stash</strong></li></ul><p>\u505A\u4E86\u4EE5\u4E0A\u4E00\u79CD\u64CD\u4F5C\u4E4B\u540E\u518D\u5C1D\u8BD5 <code>git pull --rebase</code>\uFF0C\u4E0D\u4F1A\u518D\u62A5\u9519\u3002 \u5982\u679C\u505A\u4E86 <code>git stash</code> \u64CD\u4F5C\uFF0C\u6B64\u65F6\u53EF\u4EE5\u901A\u8FC7 <code>git stash pop</code> \u56DE\u5230\u4E4B\u524D\u7684\u5DE5\u4F5C\u72B6\u6001</p><p><code>git pull --rebase</code>\u5982\u679C\u51FA\u73B0\u51B2\u7A81\uFF0C\u53EF\u4EE5\u9009\u62E9\u624B\u52A8\u89E3\u51B3\u51B2\u7A81\u540E\u7EE7\u7EED rebase\uFF0C\u4E5F\u53EF\u4EE5\u653E\u5F03\u672C\u6B21 rebase</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u89E3\u51B3\u51B2\u7A81\u540E\u4F7F\u7528</span></span>\n<span class="line"><span style="color:#A6ACCD;">git rebase --continue</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u6216\u8005\u653E\u5F03\u672C\u6B21rebase</span></span>\n<span class="line"><span style="color:#A6ACCD;">git rebase --abort</span></span>\n<span class="line"></span></code></pre></div><h3 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h3><p>\u591A\u4EBA\u57FA\u4E8E\u540C\u4E00\u4E2A\u8FDC\u7A0B\u5206\u652F\u5F00\u53D1\u7684\u65F6\u5019\uFF0C\u5982\u679C\u60F3\u8981\u987A\u5229 push \u53C8\u4E0D\u81EA\u52A8\u751F\u6210 merge commit\uFF0C\u5EFA\u8BAE\u5728\u6BCF\u6B21\u63D0\u4EA4\u90FD\u6309\u7167\u5982\u4E0B\u987A\u5E8F\u64CD\u4F5C</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git stash</span></span>\n<span class="line"><span style="color:#A6ACCD;">git pull --rebase</span></span>\n<span class="line"><span style="color:#A6ACCD;">git push</span></span>\n<span class="line"><span style="color:#A6ACCD;">git stash pop</span></span>\n<span class="line"></span></code></pre></div><h2 id="git-reset\u56DE\u9000" tabindex="-1">git reset\u56DE\u9000 <a class="header-anchor" href="#git-reset\u56DE\u9000" aria-hidden="true">#</a></h2><blockquote><p>git reset \u547D\u4EE4\u7528\u4E8E\u56DE\u9000\u7248\u672C\uFF0C\u53EF\u4EE5\u6307\u5B9A\u9000\u56DE\u67D0\u4E00\u6B21\u63D0\u4EA4\u7684\u7248\u672C</p></blockquote><p>\u547D\u4EE4\u8BED\u6CD5\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git reset </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">--soft </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> --mixed </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> --hard</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">HEAD</span><span style="color:#89DDFF;">]</span></span>\n<span class="line"></span></code></pre></div><h3 id="mixed" tabindex="-1"><strong>--mixed</strong> <a class="header-anchor" href="#mixed" aria-hidden="true">#</a></h3><p>\u9ED8\u8BA4\uFF0C\u53EF\u4EE5\u4E0D\u7528\u5E26\u8BE5\u53C2\u6570\uFF0C\u7528\u4E8E\u91CD\u7F6E\u6682\u5B58\u533A\u7684\u6587\u4EF6\u4E0E\u4E0A\u4E00\u6B21\u7684\u63D0\u4EA4(commit)\u4FDD\u6301\u4E00\u81F4\uFF0C\u5DE5\u4F5C\u533A\u6587\u4EF6\u5185\u5BB9\u4FDD\u6301\u4E0D\u53D8\u3002</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git reset  </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">HEAD</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"></span></code></pre></div><p>\u5B9E\u4F8B\uFF1A</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git reset HEAD^            </span><span style="color:#676E95;font-style:italic;"># \u56DE\u9000\u6240\u6709\u5185\u5BB9\u5230\u4E0A\u4E00\u4E2A\u7248\u672C  </span></span>\n<span class="line"><span style="color:#A6ACCD;">git reset HEAD^ hello.php  </span><span style="color:#676E95;font-style:italic;"># \u56DE\u9000 hello.php \u6587\u4EF6\u7684\u7248\u672C\u5230\u4E0A\u4E00\u4E2A\u7248\u672C  </span></span>\n<span class="line"><span style="color:#A6ACCD;">git reset 052e             </span><span style="color:#676E95;font-style:italic;"># \u56DE\u9000\u5230\u6307\u5B9A\u7248\u672C</span></span>\n<span class="line"></span></code></pre></div><h3 id="soft" tabindex="-1"><strong>--soft</strong> <a class="header-anchor" href="#soft" aria-hidden="true">#</a></h3><p>\u7528\u4E8E\u56DE\u9000\u5230\u67D0\u4E2A\u7248\u672C\uFF1A</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git reset --soft HEAD~index</span></span>\n<span class="line"></span></code></pre></div><p>\u5B9E\u4F8B\uFF1A</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git reset --soft HEAD~3   </span><span style="color:#676E95;font-style:italic;"># \u56DE\u9000\u4E0A\u4E0A\u4E0A\u4E00\u4E2A\u7248\u672C </span></span>\n<span class="line"></span></code></pre></div><h3 id="hard" tabindex="-1"><strong>--hard</strong> <a class="header-anchor" href="#hard" aria-hidden="true">#</a></h3><p>\u64A4\u9500\u5DE5\u4F5C\u533A\u4E2D\u6240\u6709\u672A\u63D0\u4EA4\u7684\u4FEE\u6539\u5185\u5BB9\uFF0C\u5C06\u6682\u5B58\u533A\u4E0E\u5DE5\u4F5C\u533A\u90FD\u56DE\u5230\u4E0A\u4E00\u6B21\u7248\u672C\uFF0C\u5E76\u5220\u9664\u4E4B\u524D\u7684\u6240\u6709\u4FE1\u606F\u63D0\u4EA4\uFF1A</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git reset --hard HEAD</span></span>\n<span class="line"></span></code></pre></div><p>**\u6CE8\u610F\uFF1A**\u8C28\u614E\u4F7F\u7528 <strong>\u2013-hard</strong> \u53C2\u6570\uFF0C\u5B83\u4F1A\u5220\u9664\u56DE\u9000\u70B9\u4E4B\u524D\u7684\u6240\u6709\u4FE1\u606F</p><p>\u5B9E\u4F8B\uFF1A</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git reset --hard HEAD~3  </span><span style="color:#676E95;font-style:italic;"># \u56DE\u9000\u4E0A\u4E0A\u4E0A\u4E00\u4E2A\u7248\u672C  </span></span>\n<span class="line"><span style="color:#A6ACCD;">git reset \u2013hard bae128  </span><span style="color:#676E95;font-style:italic;"># \u56DE\u9000\u5230\u67D0\u4E2A\u7248\u672C\u56DE\u9000\u70B9\u4E4B\u524D\u7684\u6240\u6709\u4FE1\u606F\u3002 </span></span>\n<span class="line"><span style="color:#A6ACCD;">git reset --hard origin/master    </span><span style="color:#676E95;font-style:italic;"># \u5C06\u672C\u5730\u7684\u72B6\u6001\u56DE\u9000\u5230\u548C\u8FDC\u7A0B\u7684\u4E00\u6837 </span></span>\n<span class="line"></span></code></pre></div><p><strong>HEAD \u8BF4\u660E\uFF1A</strong></p><ul><li>HEAD \u8868\u793A\u5F53\u524D\u7248\u672C</li><li>HEAD^ \u4E0A\u4E00\u4E2A\u7248\u672C</li><li>HEAD^^ \u4E0A\u4E0A\u4E00\u4E2A\u7248\u672C</li><li>HEAD^^^ \u4E0A\u4E0A\u4E0A\u4E00\u4E2A\u7248\u672C</li><li>\u4EE5\u6B64\u7C7B\u63A8...</li></ul><p>\u53EF\u4EE5\u4F7F\u7528 \uFF5E\u6570\u5B57\u8868\u793A</p><ul><li>HEAD~0 \u8868\u793A\u5F53\u524D\u7248\u672C</li><li>HEAD~1 \u4E0A\u4E00\u4E2A\u7248\u672C</li><li>HEAD^2 \u4E0A\u4E0A\u4E00\u4E2A\u7248\u672C</li><li>HEAD^3 \u4E0A\u4E0A\u4E0A\u4E00\u4E2A\u7248\u672C</li><li>\u4EE5\u6B64\u7C7B\u63A8...</li></ul>', 49);
const _hoisted_50 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_50);
}
var ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, ____ as default };
