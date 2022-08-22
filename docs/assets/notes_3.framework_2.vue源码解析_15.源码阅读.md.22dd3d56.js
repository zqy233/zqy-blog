import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.969b4838.js";
const __pageData = JSON.parse('{"title":"vue\u6E90\u7801\u9605\u8BFB","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528flow\u7C7B\u578B\u652F\u6301","slug":"\u4F7F\u7528flow\u7C7B\u578B\u652F\u6301"},{"level":2,"title":"Snabbdom","slug":"snabbdom"},{"level":3,"title":"\u4EC0\u4E48\u662F\u865A\u62DFDOM","slug":"\u4EC0\u4E48\u662F\u865A\u62DFdom"},{"level":3,"title":"\u4E3A\u4EC0\u4E48\u9700\u8981\u865A\u62DFDOM","slug":"\u4E3A\u4EC0\u4E48\u9700\u8981\u865A\u62DFdom"},{"level":3,"title":"Snabbdom\u7684\u6838\u5FC3","slug":"snabbdom\u7684\u6838\u5FC3"},{"level":3,"title":"VNode","slug":"vnode"}],"relativePath":"notes/3.framework/2.vue\u6E90\u7801\u89E3\u6790/15.\u6E90\u7801\u9605\u8BFB.md"}');
const _sfc_main = { name: "notes/3.framework/2.vue\u6E90\u7801\u89E3\u6790/15.\u6E90\u7801\u9605\u8BFB.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="vue\u6E90\u7801\u9605\u8BFB" tabindex="-1">vue\u6E90\u7801\u9605\u8BFB <a class="header-anchor" href="#vue\u6E90\u7801\u9605\u8BFB" aria-hidden="true">#</a></h1><h2 id="\u4F7F\u7528flow\u7C7B\u578B\u652F\u6301" tabindex="-1">\u4F7F\u7528flow\u7C7B\u578B\u652F\u6301 <a class="header-anchor" href="#\u4F7F\u7528flow\u7C7B\u578B\u652F\u6301" aria-hidden="true">#</a></h2><p>vue2\u6E90\u7801\u4E2D\uFF0Cjs\u6587\u4EF6\u4E2D\u6709\u5927\u91CF\u7C7B\u4F3Cts\u8BED\u6CD5\u7684\u4EE3\u7801\uFF0C\u5B9E\u9645\u4E0A\u8FD9\u662F\u4F7F\u7528flow\u7684\u8BED\u6CD5</p><h2 id="snabbdom" tabindex="-1">Snabbdom <a class="header-anchor" href="#snabbdom" aria-hidden="true">#</a></h2><blockquote><p><code>Vue</code>\u4E2D\u7684\u865A\u62DFDOM\u662F\u6539\u9020<code>Snabbdom</code>\u5B9E\u73B0\u7684</p></blockquote><h3 id="\u4EC0\u4E48\u662F\u865A\u62DFdom" tabindex="-1">\u4EC0\u4E48\u662F\u865A\u62DFDOM <a class="header-anchor" href="#\u4EC0\u4E48\u662F\u865A\u62DFdom" aria-hidden="true">#</a></h3><p>\u662F\u4E00\u5C42\u5BF9\u771F\u5B9E<code>DOM</code>\u7684\u62BD\u8C61\uFF0C\u4EE5<code>JavaScript</code> \u5BF9\u8C61 (<code>VNode</code> \u8282\u70B9) \u4F5C\u4E3A\u57FA\u7840\u7684\u6811\uFF0C\u7528\u5BF9\u8C61\u7684\u5C5E\u6027\u6765\u63CF\u8FF0\u8282\u70B9\uFF0C\u6700\u7EC8\u53EF\u4EE5\u901A\u8FC7\u4E00\u7CFB\u5217\u64CD\u4F5C\u4F7F\u8FD9\u68F5\u6811\u6620\u5C04\u5230\u771F\u5B9E\u73AF\u5883\u4E0A</p><p>\u5728<code>Javascript</code>\u5BF9\u8C61\u4E2D\uFF0C\u865A\u62DF<code>DOM</code> \u8868\u73B0\u4E3A\u4E00\u4E2A <code>Object</code>\u5BF9\u8C61\u3002\u5E76\u4E14\u6700\u5C11\u5305\u542B\u6807\u7B7E\u540D (<code>tag</code>)\u3001\u5C5E\u6027 (<code>attrs</code>) \u548C\u5B50\u5143\u7D20\u5BF9\u8C61 (<code>children</code>) \u4E09\u4E2A\u5C5E\u6027\uFF0C\u4E0D\u540C\u6846\u67B6\u5BF9\u8FD9\u4E09\u4E2A\u5C5E\u6027\u7684\u547D\u540D\u53EF\u80FD\u4F1A\u6709\u5DEE\u522B</p><p>\u521B\u5EFA\u865A\u62DF<code>DOM</code>\u5C31\u662F\u4E3A\u4E86\u66F4\u597D\u5C06\u865A\u62DF\u7684\u8282\u70B9\u6E32\u67D3\u5230\u9875\u9762\u89C6\u56FE\u4E2D\uFF0C\u6240\u4EE5\u865A\u62DF<code>DOM</code>\u5BF9\u8C61\u7684\u8282\u70B9\u4E0E\u771F\u5B9E<code>DOM</code>\u7684\u5C5E\u6027\u4E00\u4E00\u7167\u5E94</p><p>\u901A\u8FC7<code>VNode</code>\uFF0C<code>vue</code>\u53EF\u4EE5\u5BF9\u8FD9\u9897\u62BD\u8C61\u6811\u8FDB\u884C\u521B\u5EFA\u8282\u70B9,\u5220\u9664\u8282\u70B9\u4EE5\u53CA\u4FEE\u6539\u8282\u70B9\u7684\u64CD\u4F5C\uFF0C \u7ECF\u8FC7<code>diff</code>\u7B97\u6CD5\u5F97\u51FA\u4E00\u4E9B\u9700\u8981\u4FEE\u6539\u7684\u6700\u5C0F\u5355\u4F4D,\u518D\u66F4\u65B0\u89C6\u56FE\uFF0C\u51CF\u5C11\u4E86<code>dom</code>\u64CD\u4F5C\uFF0C\u63D0\u9AD8\u4E86\u6027\u80FD</p><h3 id="\u4E3A\u4EC0\u4E48\u9700\u8981\u865A\u62DFdom" tabindex="-1">\u4E3A\u4EC0\u4E48\u9700\u8981\u865A\u62DFDOM <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u9700\u8981\u865A\u62DFdom" aria-hidden="true">#</a></h3><p><code>DOM</code>\u662F\u5F88\u6162\u7684\uFF0C\u5176\u5143\u7D20\u975E\u5E38\u5E9E\u5927\uFF0C\u9875\u9762\u7684\u6027\u80FD\u95EE\u9898\uFF0C\u5927\u90E8\u5206\u90FD\u662F\u7531<code>DOM</code>\u64CD\u4F5C\u5F15\u8D77\u7684</p><p>\u771F\u5B9E\u7684<code>DOM</code>\u8282\u70B9\uFF0C\u54EA\u6015\u4E00\u4E2A\u6700\u7B80\u5355\u7684<code>div</code>\u4E5F\u5305\u542B\u7740\u5F88\u591A\u5C5E\u6027</p><p>\u7531\u6B64\u53EF\u89C1\uFF0C\u64CD\u4F5C<code>DOM</code>\u7684\u4EE3\u4EF7\u4ECD\u65E7\u662F\u6602\u8D35\u7684\uFF0C\u9891\u7E41\u64CD\u4F5C\u8FD8\u662F\u4F1A\u51FA\u73B0\u9875\u9762\u5361\u987F\uFF0C\u5F71\u54CD\u7528\u6237\u7684\u4F53\u9A8C</p><p><strong>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</strong></p><p>\u7528\u4F20\u7EDF\u7684\u539F\u751F<code>api</code>\u6216<code>jQuery</code>\u53BB\u64CD\u4F5C<code>DOM</code>\u65F6\uFF0C\u6D4F\u89C8\u5668\u4F1A\u4ECE\u6784\u5EFA<code>DOM</code>\u6811\u5F00\u59CB\u4ECE\u5934\u5230\u5C3E\u6267\u884C\u4E00\u904D\u6D41\u7A0B</p><p>\u5F53\u4F60\u5728\u4E00\u6B21\u64CD\u4F5C\u65F6\uFF0C\u9700\u8981\u66F4\u65B010\u4E2A<code>DOM</code>\u8282\u70B9\uFF0C\u6D4F\u89C8\u5668\u6CA1\u8FD9\u4E48\u667A\u80FD\uFF0C\u6536\u5230\u7B2C\u4E00\u4E2A\u66F4\u65B0<code>DOM</code>\u8BF7\u6C42\u540E\uFF0C\u5E76\u4E0D\u77E5\u9053\u540E\u7EED\u8FD8\u67099\u6B21\u66F4\u65B0\u64CD\u4F5C\uFF0C\u56E0\u6B64\u4F1A\u9A6C\u4E0A\u6267\u884C\u6D41\u7A0B\uFF0C\u6700\u7EC8\u6267\u884C10\u6B21\u6D41\u7A0B</p><p>\u800C\u901A\u8FC7<code>VNode</code>\uFF0C\u540C\u6837\u66F4\u65B010\u4E2A<code>DOM</code>\u8282\u70B9\uFF0C\u865A\u62DF<code>DOM</code>\u4E0D\u4F1A\u7ACB\u5373\u64CD\u4F5C<code>DOM</code>\uFF0C\u800C\u662F\u5C06\u8FD910\u6B21\u66F4\u65B0\u7684<code>diff</code>\u5185\u5BB9\u4FDD\u5B58\u5230\u672C\u5730\u7684\u4E00\u4E2A<code>js</code>\u5BF9\u8C61\u4E2D\uFF0C\u6700\u7EC8\u5C06\u8FD9\u4E2A<code>js</code>\u5BF9\u8C61\u4E00\u6B21\u6027<code>attach</code>\u5230<code>DOM</code>\u6811\u4E0A\uFF0C\u907F\u514D\u5927\u91CF\u7684\u65E0\u8C13\u8BA1\u7B97</p><blockquote><p>\u5F88\u591A\u4EBA\u8BA4\u4E3A\u865A\u62DF DOM \u6700\u5927\u7684\u4F18\u52BF\u662F diff \u7B97\u6CD5\uFF0C\u51CF\u5C11 JavaScript \u64CD\u4F5C\u771F\u5B9E DOM \u7684\u5E26\u6765\u7684\u6027\u80FD\u6D88\u8017\u3002\u867D\u7136\u8FD9\u662F\u4E00\u4E2A\u865A\u62DF DOM \u5E26\u6765\u7684\u4E00\u4E2A\u4F18\u52BF\uFF0C\u4F46\u5E76\u4E0D\u662F\u5168\u90E8\u3002\u865A\u62DF DOM \u6700\u5927\u7684\u4F18\u52BF\u5728\u4E8E\u62BD\u8C61\u4E86\u539F\u672C\u7684\u6E32\u67D3\u8FC7\u7A0B\uFF0C\u5B9E\u73B0\u4E86\u8DE8\u5E73\u53F0\u7684\u80FD\u529B\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u5C40\u9650\u4E8E\u6D4F\u89C8\u5668\u7684 DOM\uFF0C\u53EF\u4EE5\u662F\u5B89\u5353\u548C IOS \u7684\u539F\u751F\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u662F\u8FD1\u671F\u5F88\u706B\u70ED\u7684\u5C0F\u7A0B\u5E8F\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5404\u79CDGUI</p></blockquote><h3 id="snabbdom\u7684\u6838\u5FC3" tabindex="-1">Snabbdom\u7684\u6838\u5FC3 <a class="header-anchor" href="#snabbdom\u7684\u6838\u5FC3" aria-hidden="true">#</a></h3><ul><li><code>init</code> \u51FD\u6570 \u8BBE\u7F6E\u6A21\u5757\uFF0C\u521B\u5EFA <code>patch</code> \u51FD\u6570</li><li>\u4F7F\u7528 <code>h</code> \u51FD\u6570\u521B\u5EFA <code>JavaScript</code>\u5BF9\u8C61(<code>VNode</code>)\u63CF\u8FF0\u771F\u5B9EDOM</li><li><code>patch</code>\u51FD\u6570\u6BD4\u8F83\u65B0\u65E7\u4E24\u4E2A <code>VNode</code></li><li>\u628A\u53D8\u5316\u7684\u5185\u5BB9\u66F4\u65B0\u5230\u771F\u5B9E<code>DOM</code>\u6811\u4E2D</li></ul><h3 id="vnode" tabindex="-1">VNode <a class="header-anchor" href="#vnode" aria-hidden="true">#</a></h3><h4 id="\u662F\u4EC0\u4E48" tabindex="-1">\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h4><p>\u5728vue.js\u4E2D\u5B58\u5728\u4E00\u4E2AVNode\u7C7B\uFF0C\u4F7F\u7528\u5B83\u53EF\u4EE5\u5B9E\u4F8B\u5316\u4E0D\u540C\u7C7B\u578B\u7684vnode\u5B9E\u4F8B\uFF0C\u800C\u4E0D\u540C\u7C7B\u578B\u7684vnode\u5B9E\u4F8B\u5404\u81EA\u8868\u793A\u4E0D\u540C\u7C7B\u578B\u7684DOM\u5143\u7D20</p><p>\u4F8B\u5982\uFF0CDOM\u5143\u7D20\u6709\u5143\u7D20\u8282\u70B9\uFF0C\u6587\u672C\u8282\u70B9\uFF0C\u6CE8\u91CA\u8282\u70B9\u7B49\uFF0Cvnode\u5B9E\u4F8B\u4E5F\u4F1A\u5BF9\u5E94\u7740\u6709\u5143\u7D20\u8282\u70B9\u548C\u6587\u672C\u8282\u70B9\u548C\u6CE8\u91CA\u8282\u70B9</p><p>\u672C\u8D28\u4E0A\u6765\u8BF4\u5C31\u662F\u4E00\u4E2A\u666E\u901A\u7684JavaScript\u5BF9\u8C61\uFF0C\u662F\u4ECEVNode\u7C7B\u5B9E\u4F8B\u5316\u7684\u5BF9\u8C61\u3002\u7528\u8FD9\u4E2AJavaScript\u5BF9\u8C61\u6765\u63CF\u8FF0\u4E00\u4E2A\u771F\u5B9EDOM\u5143\u7D20\uFF0C\u4E48\u8BE5DOM\u5143\u7D20\u4E0A\u7684\u6240\u6709\u5C5E\u6027\u5728VNode\u8FD9\u4E2A\u5BF9\u8C61\u4E0A\u90FD\u5B58\u5728\u5BF9\u5E94\u5F97\u5C5E\u6027\u3002 \u7B80\u5355\u6765\u8BF4\uFF0Cvnode\u53EF\u4EE5\u7406\u89E3\u6210\u8282\u70B9\u63CF\u8FF0\u5BF9\u8C61\uFF0C\u4ED6\u63CF\u8FF0\u4E86\u5E94\u8BE5\u600E\u6837\u53BB\u521B\u5EFA\u771F\u5B9E\u7684DOM\u8282\u70B9</p><p>\u4F8B\u5982\uFF0Ctag\u8868\u793A\u4E00\u4E2A\u5143\u7D20\u8282\u70B9\u7684\u540D\u79F0\uFF0Ctext\u8868\u793A\u4E00\u4E2A\u6587\u672C\u8282\u70B9\u7684\u6587\u672C\uFF0Cchildren\u8868\u793A\u5B50\u8282\u70B9\u7B49\u3002vnode\u8868\u793A\u4E00\u4E2A\u771F\u5B9E\u7684DOM\u5143\u7D20\uFF0C\u6240\u6709\u771F\u5B9E\u7684DOM\u8282\u70B9\u90FD\u662F\u7528vnode\u521B\u5EFA\u5E76\u63D2\u5165\u5230\u9875\u9762\u4E2D</p><p>\u56FE\u4E2D\u5C55\u793A\u4E86\u4F7F\u7528vnode\u521B\u5EFA\u771F\u5B9E\u7684DOM\u5E76\u6E32\u67D3\u5230\u89C6\u56FE\u7684\u8FC7\u7A0B\u3002\u53EF\u4EE5\u5F97\u77E5\uFF0Cvnode\u548C\u89C6\u56FE\u662F\u4E00\u4E00\u5BF9\u5E94\u7684\u3002\u6211\u4EEC\u53EF\u4EE5\u628Avnode\u7406\u89E3\u6210JavaScript\u5BF9\u8C61\u7248\u672C\u7684DOM\u5143\u7D20\u3002 \u6E32\u67D3\u89C6\u56FE\u7684\u8FC7\u7A0B\u662F\u5148\u521B\u5EFAvnode\uFF0C\u7136\u540E\u5728\u4F7F\u7528vnode\u53BB\u751F\u6210\u771F\u5B9E\u7684DOM\u5143\u7D20\uFF0C\u6700\u540E\u63D2\u5165\u5230\u9875\u9762\u6E32\u67D3\u89C6\u56FE</p><h4 id="\u6709\u5565\u4F5C\u7528" tabindex="-1">\u6709\u5565\u4F5C\u7528 <a class="header-anchor" href="#\u6709\u5565\u4F5C\u7528" aria-hidden="true">#</a></h4><p>\u7531\u4E8E\u6BCF\u6B21\u6E32\u67D3\u89C6\u56FE\u65F6\u90FD\u662F\u5148\u521B\u5EFAvnode\uFF0C\u7136\u540E\u4F7F\u7528\u5B83\u521B\u5EFA\u7684\u771F\u5B9EDOM\u63D2\u5165\u5230\u9875\u9762\u4E2D\uFF0C\u6240\u4EE5\u53EF\u4EE5\u5C06\u4E0A\u4E00\u6B21\u6E32\u67D3\u89C6\u56FE\u65F6\u5148\u6240\u521B\u5EFA\u7684vnode\u5148\u7F13\u5B58\u8D77\u6765\uFF0C\u4E4B\u540E\u6BCF\u5F53\u9700\u8981\u91CD\u65B0\u6E32\u67D3\u89C6\u56FE\u65F6\uFF0C\u5C06\u65B0\u521B\u5EFA\u7684vnode\u548C\u4E0A\u4E00\u6B21\u7F13\u5B58\u7684vnode\u5BF9\u6BD4\uFF0C\u67E5\u770B\u4ED6\u4EEC\u4E4B\u95F4\u6709\u54EA\u4E9B\u4E0D\u4E00\u6837\u7684\u5730\u65B9\uFF0C\u627E\u51FA\u4E0D\u4E00\u6837\u7684\u5730\u65B9\u5E76\u57FA\u4E8E\u6B64\u53BB\u4FEE\u6539\u771F\u5B9E\u7684DOM\u3002 Vue.js\u76EE\u524D\u5BF9\u72B6\u6001\u7684\u4FA6\u6D4B\u7B56\u7565\u91C7\u7528\u4E86\u4E2D\u7B49\u7C92\u5EA6\u3002\u5F53\u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u53EA\u901A\u77E5\u5230\u7EC4\u4EF6\u7EA7\u522B\uFF0C\u7136\u540E\u7EC4\u4EF6\u5185\u4F7F\u7528\u865A\u62DFDOM\u6765\u6E32\u67D3\u89C6\u56FE\u3002 \u5982\u56FE\u4E0B\u6240\u793A\uFF0C\u5F53\u67D0\u4E2A\u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u53EA\u901A\u77E5\u4F7F\u7528\u4E86\u8FD9\u4E2A\u72B6\u6001\u7684\u7EC4\u4EF6\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u53EA\u8981\u7EC4\u4EF6\u4F7F\u7528\u7684\u4F17\u591A\u72B6\u6001\u4E2D\u6709\u4E00\u4E2A\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u90A3\u4E48\u6574\u4E2A\u7EC4\u4EF6\u5C31\u8981\u91CD\u65B0\u6E32\u67D3\uFF0C\u5982\u679C\u7EC4\u4EF6\u53EA\u6709\u4E00\u4E2A\u8282\u70B9\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u90A3\u4E48\u91CD\u65B0\u6E32\u67D3\u6574\u4E2A\u7EC4\u4EF6\u7684\u6240\u6709\u8282\u70B9\uFF0C\u5F88\u660E\u663E\u4F1A\u9020\u6210\u5F88\u5927\u7684\u6027\u80FD\u6D6A\u8D39\u3002\u56E0\u6B64\uFF0C\u5BF9vnode\u8FDB\u884C\u7F13\u5B58\uFF0C\u5E76\u5C06\u4E0A\u4E00\u6B21\u7684\u7F13\u5B58\u548C\u5F53\u524D\u521B\u5EFA\u7684vnode\u5BF9\u6BD4\uFF0C\u53EA\u66F4\u65B0\u6709\u5DEE\u5F02\u7684\u8282\u70B9\u5C31\u53D8\u5F97\u5F88\u91CD\u8981\u3002\u8FD9\u4E5F\u662Fvnode\u6700\u91CD\u8981\u7684\u4E00\u4E2A\u4F5C\u7528</p><h4 id="\u7C7B\u578B" tabindex="-1">\u7C7B\u578B <a class="header-anchor" href="#\u7C7B\u578B" aria-hidden="true">#</a></h4><ul><li>\u6CE8\u91CA\u8282\u70B9</li><li>\u6587\u672C\u8282\u70B9</li><li>\u5143\u7D20\u8282\u70B9</li><li>\u7EC4\u4EF6\u8282\u70B9</li><li>\u51FD\u6570\u5F0F\u8282\u70B9</li><li>\u514B\u9686\u8282\u70B9</li></ul>', 32);
const _hoisted_33 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_33);
}
var _15_____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _15_____ as default };
