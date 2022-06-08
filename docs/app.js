"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  var n = { __proto__: null, [Symbol.toStringTag]: "Module" };
  if (e) {
    Object.keys(e).forEach(function(k) {
      if (k !== "default") {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k];
          }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}
var serializedSiteData = `{"lang":"en-US","title":"\u4E2A\u4EBA\u7B14\u8BB0","description":"\u4E2A\u4EBA\u7B14\u8BB0","base":"/vite-vue-blog/","head":[["link",{"rel":"icon","href":"/vite-vue-blog/logo.svg"}],["link",{"rel":"preload","href":"/assets/inter-latin.7b37fe23.woff2","as":"font","type":"font/woff2","crossorigin":"anonymous"}],["script",{},";(() => {\\r\\n  const saved = localStorage.getItem('vue-theme-appearance')\\r\\n  if (\\r\\n    !saved || saved === 'auto'\\r\\n      ? window.matchMedia(\`(prefers-color-scheme: dark)\`).matches\\r\\n      : saved === 'dark'\\r\\n  ) {\\r\\n    document.documentElement.classList.add('dark')\\r\\n  }\\r\\n})()\\r\\n"]],"themeConfig":{"logo":"/img/logo-vue.svg","socialLinks":[{"icon":"gitee","link":"https://gitee.com/zqylzcwcxy/vite-vue-blog"}],"nav":[{"text":"basic","items":[{"text":"html","link":"/notes/1.basic/1.html/1.\u57FA\u7840.md"},{"text":"css","link":"/notes/1.basic/2.css/1.\u57FA\u7840.md"},{"text":"javaScript","link":"/notes/1.basic/3.javaScript/1.\u57FA\u7840\u8BED\u6CD5.md"},{"text":"typescript","link":"/notes/1.basic/4.typescript/1.\u4ECB\u7ECD\u4E0E\u5B89\u88C5.md"},{"text":"node","link":"/notes/1.basic/5.node/1.npm.md"},{"text":"git","link":"/notes/1.basic/7.git/1.git\u57FA\u7840\u7528\u6CD5.md"}]},{"text":"framework","items":[{"text":"vue","link":"/notes/2.framework/1.vue/1.\u9879\u76EE\u521B\u5EFA.md"},{"text":"react","link":"/notes/2.framework/2.react/1.\u9879\u76EE\u521B\u5EFA\u4E0E\u914D\u7F6E.md"},{"text":"express","link":"/notes/2.framework/3.express/1.\u8D77\u6B65.md"},{"text":"uniapp","link":"/notes/2.framework/4.uniapp/1.\u521B\u5EFA\u9879\u76EE.md"},{"text":"electron","link":"/notes/2.framework/5.electron/1.\u8D77\u6B65.md"},{"text":"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F","link":"/notes/2.framework/6.\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/1.\u521B\u5EFA\u9879\u76EE.md"},{"text":"\u4E7E\u5764","link":"/notes/2.framework/7.\u4E7E\u5764/1.\u524D\u7F6E\u77E5\u8BC6.md"}]},{"text":"build","items":[{"text":"webpack","link":"/notes/3.build/1.webpack/1.webpack.md"},{"text":"rollup","link":"/notes/3.build/2.rollup/1.\u4ECB\u7ECD.md"},{"text":"babel","link":"/notes/3.build/3.babel/3.babel.md"},{"text":"server","link":"/notes/3.build/4.server/4.\u4E0A\u7EBF.md"}]},{"text":"vscode","items":[{"text":"\u4F7F\u7528","link":"/notes/4.vscode/1.\u4F7F\u7528/1.vscode\u4F7F\u7528.md"},{"text":"\u63D2\u4EF6API\u6982\u62EC","link":"/notes/4.vscode/2.\u63D2\u4EF6API\u6982\u62EC/\u6982\u62EC.md"},{"text":"\u63D2\u4EF6\u5F00\u53D1","link":"/notes/4.vscode/2.\u63D2\u4EF6\u5F00\u53D1/1.\u63D2\u4EF6\u5F00\u53D1\u6D41\u7A0B.md"},{"text":"\u8BED\u8A00\u62D3\u5C55","link":"/notes/4.vscode/3.\u8BED\u8A00\u62D3\u5C55/1.\u6982\u62EC.md"},{"text":"\u63D2\u4EF6\u6307\u5357","link":"/notes/4.vscode/5.\u63D2\u4EF6\u6307\u5357/2.Commands.md"}]},{"text":"library","items":[{"text":"axios","link":"/notes/5.library/axios/1.\u8D77\u6B65.md"},{"text":"logic-flow","link":"/notes/5.library/logic-flow/1.\u8D77\u6B65.md"}]},{"text":"other","items":[{"text":"eharts","link":"/notes/6.other/1.eharts/1.vue\u4E2D\u4F7F\u7528.md"},{"text":"\u6742\u8BB0","link":"/notes/6.other/11.\u6742\u8BB0/1.\u7BA1\u7406\u7CFB\u7EDF\u793A\u4F8B.md"},{"text":"xlsx","link":"/notes/6.other/2.xlsx/1.\u6587\u6863\u7FFB\u8BD1.md"},{"text":"just-start","link":"/notes/6.other/3.just-start/1.english.md"},{"text":"solve-problems","link":"/notes/6.other/4.solve-problems/postmon.md"},{"text":"\u9762\u8BD5","link":"/notes/6.other/5.\u9762\u8BD5/1.\u9762\u8BD5.md"}]}],"sidebar":{"/notes/1.basic/":[{"text":"html","items":[{"text":"\u57FA\u7840","link":"/notes/1.basic/1.html/1.\u57FA\u7840.md"}]},{"text":"css","items":[{"text":"\u57FA\u7840","link":"/notes/1.basic/2.css/1.\u57FA\u7840.md"},{"text":"flex","link":"/notes/1.basic/2.css/2.flex.md"},{"text":"less","link":"/notes/1.basic/2.css/3.less.md"},{"text":"scss","link":"/notes/1.basic/2.css/4.scss.md"},{"text":"\u54CD\u5E94\u5F0F","link":"/notes/1.basic/2.css/5.\u54CD\u5E94\u5F0F.md"},{"text":"\u4E3B\u9898\u5207\u6362","link":"/notes/1.basic/2.css/6.\u4E3B\u9898\u5207\u6362.md"},{"text":"\u793A\u4F8B","link":"/notes/1.basic/2.css/7.\u793A\u4F8B.md"},{"text":"\u8FDB\u9636","link":"/notes/1.basic/2.css/8.\u8FDB\u9636.md"}]},{"text":"javaScript","items":[{"text":"\u57FA\u7840\u8BED\u6CD5","link":"/notes/1.basic/3.javaScript/1.\u57FA\u7840\u8BED\u6CD5.md"},{"text":"\u5DE5\u5177\u51FD\u6570","link":"/notes/1.basic/3.javaScript/2.\u5DE5\u5177\u51FD\u6570.md"},{"text":"\u6587\u4EF6\u4E8C\u8FDB\u5236","link":"/notes/1.basic/3.javaScript/3.\u6587\u4EF6\u4E8C\u8FDB\u5236.md"},{"text":"\u6B63\u5219\u8868\u8FBE\u5F0F","link":"/notes/1.basic/3.javaScript/4.\u6B63\u5219\u8868\u8FBE\u5F0F.md"},{"text":"\u6EDA\u52A8","link":"/notes/1.basic/3.javaScript/5.\u6EDA\u52A8.md"},{"text":"canvas","link":"/notes/1.basic/3.javaScript/6.canvas.md"},{"text":"\u9632\u6296\u4E0E\u8282\u6D41","link":"/notes/1.basic/3.javaScript/7.\u9632\u6296\u4E0E\u8282\u6D41.md"},{"text":"\u6DF1\u6D45\u62F7\u8D1D","link":"/notes/1.basic/3.javaScript/8.\u6DF1\u6D45\u62F7\u8D1D.md"},{"text":"\u77E5\u8BC6\u6574\u7406","link":"/notes/1.basic/3.javaScript/9.\u77E5\u8BC6\u6574\u7406.md"},{"text":"call-apply-bind","link":"/notes/1.basic/3.javaScript/10.call-apply-bind.md"},{"text":"Array","link":"/notes/1.basic/3.javaScript/11.Array.md"},{"text":"Date","link":"/notes/1.basic/3.javaScript/12.Date.md"},{"text":"String","link":"/notes/1.basic/3.javaScript/13.String.md"},{"text":"svg","link":"/notes/1.basic/3.javaScript/14.svg.md"}]},{"text":"typescript","items":[{"text":"\u4ECB\u7ECD\u4E0E\u5B89\u88C5","link":"/notes/1.basic/4.typescript/1.\u4ECB\u7ECD\u4E0E\u5B89\u88C5.md"},{"text":"\u57FA\u7840\u8BED\u6CD5","link":"/notes/1.basic/4.typescript/2.\u57FA\u7840\u8BED\u6CD5.md"},{"text":"\u8FDB\u9636\u8BED\u6CD5","link":"/notes/1.basic/4.typescript/3.\u8FDB\u9636\u8BED\u6CD5.md"},{"text":"\u7EFC\u5408\u793A\u4F8B","link":"/notes/1.basic/4.typescript/4.\u7EFC\u5408\u793A\u4F8B.md"},{"text":"leecode","link":"/notes/1.basic/4.typescript/5.leecode.md"},{"text":"type-challenges","link":"/notes/1.basic/4.typescript/6.type-challenges.md"},{"text":"doc\u6CE8\u91CA\u6CD5","link":"/notes/1.basic/4.typescript/7.doc\u6CE8\u91CA\u6CD5.md"}]},{"text":"node","items":[{"text":"npm","link":"/notes/1.basic/5.node/1.npm.md"},{"text":"\u8D77\u6B65","link":"/notes/1.basic/5.node/1.\u8D77\u6B65.md"},{"text":"node\u811A\u672C\u5F00\u53D1","link":"/notes/1.basic/5.node/2.node\u811A\u672C\u5F00\u53D1.md"},{"text":"node\u811A\u672Cnpm\u5E93","link":"/notes/1.basic/5.node/3.node\u811A\u672Cnpm\u5E93.md"}]},{"text":"git","items":[{"text":"git\u57FA\u7840\u7528\u6CD5","link":"/notes/1.basic/7.git/1.git\u57FA\u7840\u7528\u6CD5.md"},{"text":"commit\u7684emoji\u89C4\u8303","link":"/notes/1.basic/7.git/2.commit\u7684emoji\u89C4\u8303.md"},{"text":"pull request","link":"/notes/1.basic/7.git/3.pull request.md"},{"text":"\u95EE\u9898\u6574\u7406","link":"/notes/1.basic/7.git/4.\u95EE\u9898\u6574\u7406.md"}]}],"/notes/2.framework/":[{"text":"vue","items":[{"text":"\u9879\u76EE\u521B\u5EFA","link":"/notes/2.framework/1.vue/1.\u9879\u76EE\u521B\u5EFA.md"},{"text":"\u9879\u76EE\u914D\u7F6E","link":"/notes/2.framework/1.vue/2.\u9879\u76EE\u914D\u7F6E.md"},{"text":"\u57FA\u7840\u8BED\u6CD5","link":"/notes/2.framework/1.vue/3.\u57FA\u7840\u8BED\u6CD5.md"},{"text":"composition api","link":"/notes/2.framework/1.vue/4.composition api.md"},{"text":"vite\u63D2\u4EF6\u5F00\u53D1","link":"/notes/2.framework/1.vue/5.vite\u63D2\u4EF6\u5F00\u53D1.md"},{"text":"pinna","link":"/notes/2.framework/1.vue/6.pinna.md"},{"text":"\u5F85\u6574\u7406\u7B14\u8BB0","link":"/notes/2.framework/1.vue/7.\u5F85\u6574\u7406\u7B14\u8BB0.md"},{"text":"\u529F\u80FD\u5B9E\u73B0","link":"/notes/2.framework/1.vue/8.\u529F\u80FD\u5B9E\u73B0.md"},{"text":"vitepress","link":"/notes/2.framework/1.vue/12.vitepress.md"}]},{"text":"react","items":[{"text":"\u9879\u76EE\u521B\u5EFA\u4E0E\u914D\u7F6E","link":"/notes/2.framework/2.react/1.\u9879\u76EE\u521B\u5EFA\u4E0E\u914D\u7F6E.md"},{"text":"\u8BED\u6CD5","link":"/notes/2.framework/2.react/2.\u8BED\u6CD5.md"},{"text":"react-router","link":"/notes/2.framework/2.react/3.react-router.md"}]},{"text":"express","items":[{"text":"\u8D77\u6B65","link":"/notes/2.framework/3.express/1.\u8D77\u6B65.md"},{"text":"express\u65B9\u6CD5","link":"/notes/2.framework/3.express/2.express\u65B9\u6CD5.md"},{"text":"jwt","link":"/notes/2.framework/3.express/3.jwt.md"},{"text":"mysql","link":"/notes/2.framework/3.express/4.mysql.md"}]},{"text":"uniapp","items":[{"text":"\u521B\u5EFA\u9879\u76EE","link":"/notes/2.framework/4.uniapp/1.\u521B\u5EFA\u9879\u76EE.md"},{"text":"\u8BED\u6CD5","link":"/notes/2.framework/4.uniapp/2.\u8BED\u6CD5.md"},{"text":"\u5B9E\u4F8B","link":"/notes/2.framework/4.uniapp/3.\u5B9E\u4F8B.md"},{"text":"uniCloud","link":"/notes/2.framework/4.uniapp/4.uniCloud.md"},{"text":"\u5C0F\u7A0B\u5E8F\u5F00\u53D1","link":"/notes/2.framework/4.uniapp/5.\u5C0F\u7A0B\u5E8F\u5F00\u53D1.md"},{"text":"sqlite","link":"/notes/2.framework/4.uniapp/6.sqlite.md"},{"text":"\u5F00\u53D1HbuilderX\u63D2\u4EF6","link":"/notes/2.framework/4.uniapp/10.\u5F00\u53D1HbuilderX\u63D2\u4EF6.md"}]},{"text":"electron","items":[{"text":"\u8D77\u6B65","link":"/notes/2.framework/5.electron/1.\u8D77\u6B65.md"},{"text":"vite-electron","link":"/notes/2.framework/5.electron/2.vite-electron.md"},{"text":"\u5F00\u59CB","link":"/notes/2.framework/5.electron/2.\u5F00\u59CB.md"},{"text":"\u8BED\u6CD5\u5B9E\u4F8B","link":"/notes/2.framework/5.electron/4.\u8BED\u6CD5\u5B9E\u4F8B.md"},{"text":"electron\u6253\u5305vue","link":"/notes/2.framework/5.electron/5.electron\u6253\u5305vue.md"},{"text":"\u8FDB\u7A0B\u901A\u4FE1","link":"/notes/2.framework/5.electron/6.\u8FDB\u7A0B\u901A\u4FE1.md"},{"text":"\u9ED1\u591C\u6A21\u5F0F","link":"/notes/2.framework/5.electron/7.\u9ED1\u591C\u6A21\u5F0F.md"}]},{"text":"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F","items":[{"text":"\u521B\u5EFA\u9879\u76EE","link":"/notes/2.framework/6.\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/1.\u521B\u5EFA\u9879\u76EE.md"}]},{"text":"\u4E7E\u5764","items":[{"text":"\u524D\u7F6E\u77E5\u8BC6","link":"/notes/2.framework/7.\u4E7E\u5764/1.\u524D\u7F6E\u77E5\u8BC6.md"},{"text":"\u5B9E\u6218","link":"/notes/2.framework/7.\u4E7E\u5764/2.\u5B9E\u6218.md"}]}],"/notes/3.build/":[{"text":"webpack","items":[{"text":"webpack","link":"/notes/3.build/1.webpack/1.webpack.md"},{"text":"\u8D77\u6B65","link":"/notes/3.build/1.webpack/2.\u8D77\u6B65.md"}]},{"text":"rollup","items":[{"text":"\u4ECB\u7ECD","link":"/notes/3.build/2.rollup/1.\u4ECB\u7ECD.md"},{"text":"\u8D77\u6B65","link":"/notes/3.build/2.rollup/1.\u8D77\u6B65.md"},{"text":"\u6587\u6863\u7FFB\u8BD1","link":"/notes/3.build/2.rollup/3.\u6587\u6863\u7FFB\u8BD1.md"},{"text":"\u5B98\u65B9\u63D2\u4EF6","link":"/notes/3.build/2.rollup/4.\u5B98\u65B9\u63D2\u4EF6.md"},{"text":"\u5E38\u7528\u63D2\u4EF6","link":"/notes/3.build/2.rollup/5.\u5E38\u7528\u63D2\u4EF6.md"}]},{"text":"babel","items":[{"text":"babel","link":"/notes/3.build/3.babel/3.babel.md"}]},{"text":"server","items":[{"text":"\u4E0A\u7EBF","link":"/notes/3.build/4.server/4.\u4E0A\u7EBF.md"}]}],"/notes/4.vscode/":[{"text":"\u4F7F\u7528","items":[{"text":"vscode\u4F7F\u7528","link":"/notes/4.vscode/1.\u4F7F\u7528/1.vscode\u4F7F\u7528.md"},{"text":"vscode\u5E38\u7528\u63D2\u4EF6","link":"/notes/4.vscode/1.\u4F7F\u7528/2.vscode\u5E38\u7528\u63D2\u4EF6.md"}]},{"text":"\u63D2\u4EF6API\u6982\u62EC","items":[{"text":"\u6982\u62EC","link":"/notes/4.vscode/2.\u63D2\u4EF6API\u6982\u62EC/\u6982\u62EC.md"}]},{"text":"\u63D2\u4EF6\u5F00\u53D1","items":[{"text":"\u63D2\u4EF6\u5F00\u53D1\u6D41\u7A0B","link":"/notes/4.vscode/2.\u63D2\u4EF6\u5F00\u53D1/1.\u63D2\u4EF6\u5F00\u53D1\u6D41\u7A0B.md"},{"text":"languages","link":"/notes/4.vscode/2.\u63D2\u4EF6\u5F00\u53D1/2.languages.md"},{"text":"\u63D2\u4EF6api","link":"/notes/4.vscode/2.\u63D2\u4EF6\u5F00\u53D1/4.\u63D2\u4EF6api.md"},{"text":"\u63D2\u4EF6\u5F00\u53D1\u5B9E\u4F8B","link":"/notes/4.vscode/2.\u63D2\u4EF6\u5F00\u53D1/5.\u63D2\u4EF6\u5F00\u53D1\u5B9E\u4F8B.md"},{"text":"package.json","link":"/notes/4.vscode/2.\u63D2\u4EF6\u5F00\u53D1/6.package.json.md"}]},{"text":"\u8BED\u8A00\u62D3\u5C55","items":[{"text":"\u6982\u62EC","link":"/notes/4.vscode/3.\u8BED\u8A00\u62D3\u5C55/1.\u6982\u62EC.md"},{"text":"\u8BED\u6CD5\u9AD8\u4EAE\u6307\u5357","link":"/notes/4.vscode/3.\u8BED\u8A00\u62D3\u5C55/2.\u8BED\u6CD5\u9AD8\u4EAE\u6307\u5357.md"}]},{"text":"\u63D2\u4EF6\u6307\u5357","items":[{"text":"Commands","link":"/notes/4.vscode/5.\u63D2\u4EF6\u6307\u5357/2.Commands.md"}]}],"/notes/5.library/":[{"text":"axios","items":[{"text":"\u8D77\u6B65","link":"/notes/5.library/axios/1.\u8D77\u6B65.md"},{"text":"http","link":"/notes/5.library/axios/2.http.md"}]},{"text":"logic-flow","items":[{"text":"\u8D77\u6B65","link":"/notes/5.library/logic-flow/1.\u8D77\u6B65.md"},{"text":"\u7528\u6CD5","link":"/notes/5.library/logic-flow/3.\u7528\u6CD5.md"}]}],"/notes/6.other/":[{"text":"eharts","items":[{"text":"vue\u4E2D\u4F7F\u7528","link":"/notes/6.other/1.eharts/1.vue\u4E2D\u4F7F\u7528.md"},{"text":"react\u4E2D\u4F7F\u7528","link":"/notes/6.other/1.eharts/2.react\u4E2D\u4F7F\u7528.md"},{"text":"\u5730\u56FE","link":"/notes/6.other/1.eharts/3.\u5730\u56FE.md"},{"text":"\u997C\u56FE","link":"/notes/6.other/1.eharts/4.\u997C\u56FE.md"},{"text":"\u67F1\u72B6\u56FE","link":"/notes/6.other/1.eharts/5.\u67F1\u72B6\u56FE.md"},{"text":"\u6298\u7EBF\u56FE","link":"/notes/6.other/1.eharts/6.\u6298\u7EBF\u56FE.md"},{"text":"tooltip","link":"/notes/6.other/1.eharts/7.tooltip.md"}]},{"text":"\u6742\u8BB0","items":[{"text":"\u7BA1\u7406\u7CFB\u7EDF\u793A\u4F8B","link":"/notes/6.other/11.\u6742\u8BB0/1.\u7BA1\u7406\u7CFB\u7EDF\u793A\u4F8B.md"},{"text":"typora\u9B54\u6539","link":"/notes/6.other/11.\u6742\u8BB0/2.typora\u9B54\u6539.md"},{"text":"\u79FB\u52A8\u7AEF","link":"/notes/6.other/11.\u6742\u8BB0/3.\u79FB\u52A8\u7AEF.md"},{"text":"\u5357\u4EAC","link":"/notes/6.other/11.\u6742\u8BB0/4.\u5357\u4EAC.md"},{"text":"\u811A\u672C","link":"/notes/6.other/11.\u6742\u8BB0/5.\u811A\u672C.md"}]},{"text":"xlsx","items":[{"text":"\u6587\u6863\u7FFB\u8BD1","link":"/notes/6.other/2.xlsx/1.\u6587\u6863\u7FFB\u8BD1.md"},{"text":"\u5B66\u4E60xlsx","link":"/notes/6.other/2.xlsx/2.\u5B66\u4E60xlsx.md"}]},{"text":"just-start","items":[{"text":"english","link":"/notes/6.other/3.just-start/1.english.md"},{"text":"mongodb","link":"/notes/6.other/3.just-start/2.mongodb.md"},{"text":"javaweb","link":"/notes/6.other/3.just-start/3.javaweb.md"}]},{"text":"solve-problems","items":[{"text":"postmon","link":"/notes/6.other/4.solve-problems/postmon.md"},{"text":"ps","link":"/notes/6.other/4.solve-problems/ps.md"},{"text":"uniapp","link":"/notes/6.other/4.solve-problems/uniapp.md"},{"text":"windows10","link":"/notes/6.other/4.solve-problems/windows10.md"},{"text":"\u5F00\u53D1","link":"/notes/6.other/4.solve-problems/\u5F00\u53D1.md"},{"text":"\u6D4F\u89C8\u5668","link":"/notes/6.other/4.solve-problems/\u6D4F\u89C8\u5668.md"},{"text":"\u8BBA\u6587\u67E5\u91CD","link":"/notes/6.other/4.solve-problems/\u8BBA\u6587\u67E5\u91CD.md"}]},{"text":"\u9762\u8BD5","items":[{"text":"\u9762\u8BD5","link":"/notes/6.other/5.\u9762\u8BD5/1.\u9762\u8BD5.md"}]}]}},"locales":{},"langs":{}}`;
const EXTERNAL_URL_RE = /^https?:/i;
const inBrowser$1 = typeof window !== "undefined";
function findMatchRoot(route, roots) {
  roots.sort((a, b) => {
    const levelDelta = b.split("/").length - a.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    } else {
      return b.length - a.length;
    }
  });
  for (const r of roots) {
    if (route.startsWith(r))
      return r;
  }
}
function resolveLocales(locales, route) {
  const localeRoot = findMatchRoot(route, Object.keys(locales));
  return localeRoot ? locales[localeRoot] : void 0;
}
function createLangDictionary(siteData) {
  const { locales } = siteData.themeConfig || {};
  const siteLocales = siteData.locales;
  return locales && siteLocales ? Object.keys(locales).reduce((langs, path) => {
    langs[path] = {
      label: locales[path].label,
      lang: siteLocales[path].lang
    };
    return langs;
  }, {}) : {};
}
function resolveSiteDataByRoute(siteData, route) {
  route = cleanRoute(siteData, route);
  const localeData = resolveLocales(siteData.locales || {}, route);
  const localeThemeConfig = resolveLocales(siteData.themeConfig.locales || {}, route);
  return Object.assign({}, siteData, localeData, {
    themeConfig: Object.assign({}, siteData.themeConfig, localeThemeConfig, {
      locales: {}
    }),
    lang: (localeData || siteData).lang,
    locales: {},
    langs: createLangDictionary(siteData)
  });
}
function cleanRoute(siteData, route) {
  if (!inBrowser$1) {
    return route;
  }
  const base = siteData.base;
  const baseWithoutSuffix = base.endsWith("/") ? base.slice(0, -1) : base;
  return route.slice(baseWithoutSuffix.length);
}
const dataSymbol = Symbol();
const siteDataRef = vue.shallowRef(parse(serializedSiteData));
function parse(data) {
  return vue.readonly(JSON.parse(data));
}
function initData(route) {
  const site = vue.computed(() => resolveSiteDataByRoute(siteDataRef.value, route.path));
  return {
    site,
    theme: vue.computed(() => site.value.themeConfig),
    page: vue.computed(() => route.data),
    frontmatter: vue.computed(() => route.data.frontmatter),
    lang: vue.computed(() => site.value.lang),
    localePath: vue.computed(() => {
      const { langs, lang } = site.value;
      const path = Object.keys(langs).find((langPath) => langs[langPath].lang === lang);
      return withBase(path || "/");
    }),
    title: vue.computed(() => {
      return route.data.title ? route.data.title + " | " + site.value.title : site.value.title;
    }),
    description: vue.computed(() => {
      return route.data.description || site.value.description;
    })
  };
}
function useData() {
  const data = vue.inject(dataSymbol);
  if (!data) {
    throw new Error("vitepress data not properly injected in app");
  }
  return data;
}
function joinPath(base, path) {
  return `${base}${path}`.replace(/\/+/g, "/");
}
function withBase(path) {
  return EXTERNAL_URL_RE.test(path) ? path : joinPath(siteDataRef.value.base, path);
}
function pathToFile(path) {
  let pagePath = path.replace(/\.html$/, "");
  pagePath = decodeURIComponent(pagePath);
  if (pagePath.endsWith("/")) {
    pagePath += "index";
  }
  {
    if (inBrowser$1) {
      const base = "/vite-vue-blog/";
      pagePath = pagePath.slice(base.length).replace(/\//g, "_") + ".md";
      const pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      pagePath = `${base}assets/${pagePath}.${pageHash}.js`;
    } else {
      pagePath = `./${pagePath.slice(1).replace(/\//g, "_")}.md.js`;
    }
  }
  return pagePath;
}
const RouterSymbol = Symbol();
const fakeHost = `http://a.com`;
const getDefaultRoute = () => ({
  path: "/",
  component: null,
  data: null
});
function createRouter(loadPageModule, fallbackComponent) {
  const route = vue.reactive(getDefaultRoute());
  function go(href = inBrowser$1 ? location.href : "/") {
    const url = new URL(href, fakeHost);
    if (!url.pathname.endsWith("/") && !url.pathname.endsWith(".html")) {
      url.pathname += ".html";
      href = url.pathname + url.search + url.hash;
    }
    if (inBrowser$1) {
      history.replaceState({ scrollPosition: window.scrollY }, document.title);
      history.pushState(null, "", href);
    }
    return loadPage(href);
  }
  let latestPendingPath = null;
  async function loadPage(href, scrollPosition = 0) {
    const targetLoc = new URL(href, fakeHost);
    const pendingPath = latestPendingPath = targetLoc.pathname;
    try {
      let page = loadPageModule(pendingPath);
      if ("then" in page && typeof page.then === "function") {
        page = await page;
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        const { default: comp, __pageData } = page;
        if (!comp) {
          throw new Error(`Invalid route component: ${comp}`);
        }
        route.path = pendingPath;
        route.component = vue.markRaw(comp);
        route.data = true ? vue.markRaw(JSON.parse(__pageData)) : vue.readonly(JSON.parse(__pageData));
        if (inBrowser$1) {
          vue.nextTick(() => {
            if (targetLoc.hash && !scrollPosition) {
              let target = null;
              try {
                target = document.querySelector(decodeURIComponent(targetLoc.hash));
              } catch (e) {
                console.warn(e);
              }
              if (target) {
                scrollTo(target, targetLoc.hash);
                return;
              }
            }
            window.scrollTo(0, scrollPosition);
          });
        }
      }
    } catch (err) {
      if (!err.message.match(/fetch/)) {
        console.error(err);
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        route.path = pendingPath;
        route.component = fallbackComponent ? vue.markRaw(fallbackComponent) : null;
      }
    }
  }
  if (inBrowser$1) {
    window.addEventListener("click", (e) => {
      const link2 = e.target.closest("a");
      if (link2) {
        const { href, protocol, hostname, pathname, hash, target } = link2;
        const currentUrl = window.location;
        const extMatch = pathname.match(/\.\w+$/);
        if (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && target !== `_blank` && protocol === currentUrl.protocol && hostname === currentUrl.hostname && !(extMatch && extMatch[0] !== ".html")) {
          e.preventDefault();
          if (pathname === currentUrl.pathname) {
            if (hash && hash !== currentUrl.hash) {
              history.pushState(null, "", hash);
              window.dispatchEvent(new Event("hashchange"));
              scrollTo(link2, hash, link2.classList.contains("header-anchor"));
            }
          } else {
            go(href);
          }
        }
      }
    }, { capture: true });
    window.addEventListener("popstate", (e) => {
      loadPage(location.href, e.state && e.state.scrollPosition || 0);
    });
    window.addEventListener("hashchange", (e) => {
      e.preventDefault();
    });
  }
  return {
    route,
    go
  };
}
function useRouter() {
  const router = vue.inject(RouterSymbol);
  if (!router) {
    throw new Error("useRouter() is called without provider.");
  }
  return router;
}
function useRoute() {
  return useRouter().route;
}
function scrollTo(el, hash, smooth = false) {
  let target = null;
  try {
    target = el.classList.contains(".header-anchor") ? el : document.querySelector(decodeURIComponent(hash));
  } catch (e) {
    console.warn(e);
  }
  if (target) {
    const targetTop = target.offsetTop;
    if (!smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight) {
      window.scrollTo(0, targetTop);
    } else {
      window.scrollTo({
        left: 0,
        top: targetTop,
        behavior: "smooth"
      });
    }
  }
}
function useUpdateHead(route, siteDataByRouteRef) {
  let managedHeadTags = [];
  let isFirstUpdate = true;
  const updateHeadTags = (newTags) => {
    if (isFirstUpdate) {
      isFirstUpdate = false;
      return;
    }
    const newEls = [];
    const commonLength = Math.min(managedHeadTags.length, newTags.length);
    for (let i = 0; i < commonLength; i++) {
      let el = managedHeadTags[i];
      const [tag, attrs, innerHTML = ""] = newTags[i];
      if (el.tagName.toLocaleLowerCase() === tag) {
        for (const key in attrs) {
          if (el.getAttribute(key) !== attrs[key]) {
            el.setAttribute(key, attrs[key]);
          }
        }
        for (let i2 = 0; i2 < el.attributes.length; i2++) {
          const name = el.attributes[i2].name;
          if (!(name in attrs)) {
            el.removeAttribute(name);
          }
        }
        if (el.innerHTML !== innerHTML) {
          el.innerHTML = innerHTML;
        }
      } else {
        document.head.removeChild(el);
        el = createHeadElement(newTags[i]);
        document.head.append(el);
      }
      newEls.push(el);
    }
    managedHeadTags.slice(commonLength).forEach((el) => document.head.removeChild(el));
    newTags.slice(commonLength).forEach((headConfig) => {
      const el = createHeadElement(headConfig);
      document.head.appendChild(el);
      newEls.push(el);
    });
    managedHeadTags = newEls;
  };
  vue.watchEffect(() => {
    const pageData = route.data;
    const siteData = siteDataByRouteRef.value;
    const pageTitle = pageData && pageData.title;
    const pageDescription = pageData && pageData.description;
    const frontmatterHead = pageData && pageData.frontmatter.head;
    document.title = (pageTitle ? pageTitle + ` | ` : ``) + siteData.title;
    document.querySelector(`meta[name=description]`).setAttribute("content", pageDescription || siteData.description);
    updateHeadTags([
      ...[],
      ...frontmatterHead ? filterOutHeadDescription(frontmatterHead) : []
    ]);
  });
}
function createHeadElement([tag, attrs, innerHTML]) {
  const el = document.createElement(tag);
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  if (innerHTML) {
    el.innerHTML = innerHTML;
  }
  return el;
}
function isMetaDescription(headConfig) {
  return headConfig[0] === "meta" && headConfig[1] && headConfig[1].name === "description";
}
function filterOutHeadDescription(head) {
  return head.filter((h) => !isMetaDescription(h));
}
const _sfc_main$1c = {};
const _sfc_setup$1c = _sfc_main$1c.setup;
_sfc_main$1c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconAlignJustify.vue");
  return _sfc_setup$1c ? _sfc_setup$1c(props, ctx) : void 0;
};
const _sfc_main$1b = {};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"></path><path d="M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"></path><path d="M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"></path><path d="M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"></path></svg>`);
}
const _sfc_setup$1b = _sfc_main$1b.setup;
_sfc_main$1b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconAlignLeft.vue");
  return _sfc_setup$1b ? _sfc_setup$1b(props, ctx) : void 0;
};
var VTIconAlignLeft = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$1b, [["ssrRender", _sfc_ssrRender$i]]);
const _sfc_main$1a = {};
const _sfc_setup$1a = _sfc_main$1a.setup;
_sfc_main$1a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconAlignRight.vue");
  return _sfc_setup$1a ? _sfc_setup$1a(props, ctx) : void 0;
};
const _sfc_main$19 = {};
const _sfc_setup$19 = _sfc_main$19.setup;
_sfc_main$19.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconCode.vue");
  return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
const _sfc_main$18 = {};
const _sfc_setup$18 = _sfc_main$18.setup;
_sfc_main$18.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconCodePen.vue");
  return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
const _sfc_main$17 = {};
const _sfc_setup$17 = _sfc_main$17.setup;
_sfc_main$17.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconCommand.vue");
  return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
const _sfc_main$16 = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"></path></svg>`);
}
const _sfc_setup$16 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconChevronDown.vue");
  return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
var VTIconChevronDown = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$16, [["ssrRender", _sfc_ssrRender$h]]);
const _sfc_main$15 = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M15,19c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4l6-6c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L10.4,12l5.3,5.3c0.4,0.4,0.4,1,0,1.4C15.5,18.9,15.3,19,15,19z"></path></svg>`);
}
const _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconChevronLeft.vue");
  return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
var VTIconChevronLeft = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$15, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$14 = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"></path></svg>`);
}
const _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconChevronRight.vue");
  return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
var VTIconChevronRight = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$14, [["ssrRender", _sfc_ssrRender$f]]);
const _sfc_main$13 = {};
const _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconChevronUp.vue");
  return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
const _sfc_main$12 = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z"></path></svg>`);
}
const _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconDiscord.vue");
  return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
var VTIconDiscord = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$12, [["ssrRender", _sfc_ssrRender$e]]);
const _sfc_main$11 = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    height: "24px",
    viewBox: "0 0 24 24",
    width: "24px"
  }, _attrs))}><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path></svg>`);
}
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconExternalLink.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
var VTIconExternalLink = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$11, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$10 = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>`);
}
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconFacebook.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
var VTIconFacebook = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$10, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$$ = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>`);
}
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconGitHub.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
var VTIconGitHub = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$$, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$_ = {};
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconGlobe.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const _sfc_main$Z = {};
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconHeart.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const _sfc_main$Y = {};
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconInstagram.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const _sfc_main$X = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M0 0h24v24H0z" fill="none"></path><path d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z " class="css-c4d79v"></path></svg>`);
}
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconLanguages.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
var VTIconLanguages = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$X, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$W = {};
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconLink.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const _sfc_main$V = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>`);
}
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconLinkedIn.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
var VTIconLinkedIn = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$V, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$U = {};
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconMail.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const _sfc_main$T = {};
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconMapPin.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const _sfc_main$S = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle><circle cx="5" cy="12" r="2"></circle></svg>`);
}
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconMoreHorizontal.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
var VTIconMoreHorizontal = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$S, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$R = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"></path></svg>`);
}
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconMoon.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
var VTIconMoon = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$R, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$Q = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"></path></svg>`);
}
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconPlus.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
var VTIconPlus = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$Q, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$P = {};
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconSearch.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const _sfc_main$O = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"></path></svg>`);
}
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconSlack.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
var VTIconSlack = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$O, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$N = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path></svg>`);
}
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconSun.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
var VTIconSun = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$N, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$M = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>`);
}
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconTwitter.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
var VTIconTwitter = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$M, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$L = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    t: "1646706834870",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "2047",
    width: "200",
    height: "200"
  }, _attrs))}><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="2048"></path></svg>`);
}
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconGitee.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
var VTIconGitee = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$L, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$K = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>`);
}
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/icons/VTIconEdit.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
var VTIconEdit = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$K, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$J = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    show: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.show) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "vt-backdrop" }, _attrs))}></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/VTBackdrop.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const focusedElement = vue.ref();
let active = false;
let listeners = 0;
function useFocusContainer(options) {
  const containsFocus = vue.ref(false);
  if (typeof window !== "undefined") {
    !active && activateFocusTracking();
    listeners++;
    const unwatch = vue.watch(focusedElement, (el) => {
      var _a2, _b2, _c;
      if (el === options.elRef.value || ((_a2 = options.elRef.value) == null ? void 0 : _a2.contains(el))) {
        containsFocus.value = true;
        (_b2 = options.onFocus) == null ? void 0 : _b2.call(options);
      } else {
        containsFocus.value = false;
        (_c = options.onBlur) == null ? void 0 : _c.call(options);
      }
    });
    vue.onUnmounted(() => {
      unwatch();
      listeners--;
      if (!listeners) {
        deactivateFocusTracking();
      }
    });
  }
  return vue.readonly(containsFocus);
}
function activateFocusTracking() {
  document.addEventListener("focusin", handleFocusIn);
  active = true;
  focusedElement.value = document.activeElement;
}
function deactivateFocusTracking() {
  document.removeEventListener("focusin", handleFocusIn);
}
function handleFocusIn() {
  focusedElement.value = document.activeElement;
}
const _sfc_main$I = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    href: null,
    noIcon: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const isExternal2 = vue.computed(() => props.href && /^[a-z]+:/i.test(props.href));
    return (_ctx, _push, _parent, _attrs) => {
      serverRenderer.ssrRenderVNode(_push, vue.createVNode(vue.resolveDynamicComponent(__props.href ? "a" : "span"), vue.mergeProps({
        class: ["vt-link", { link: __props.href }],
        href: __props.href,
        target: vue.unref(isExternal2) ? "_blank" : void 0,
        rel: vue.unref(isExternal2) ? "noopener noreferrer" : void 0
      }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            if (vue.unref(isExternal2) && !__props.noIcon) {
              _push2(serverRenderer.ssrRenderComponent(VTIconExternalLink, { class: "vt-link-icon" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "default"),
              vue.unref(isExternal2) && !__props.noIcon ? (vue.openBlock(), vue.createBlock(VTIconExternalLink, {
                key: 0,
                class: "vt-link-icon"
              })) : vue.createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/VTLink.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const _sfc_main$H = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(_sfc_main$I, vue.mergeProps({
        class: "vt-menu-link",
        href: __props.item.link
      }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(__props.item.text)}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(__props.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/VTMenuLink.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const _sfc_main$G = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    text: null,
    items: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "vt-menu-group" }, _attrs))}>`);
      if (__props.text) {
        _push(`<p class="vt-menu-group-title">${serverRenderer.ssrInterpolate(__props.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      serverRenderer.ssrRenderList(__props.items, (item) => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$H, { item }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/VTMenuGroup.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const _sfc_main$F = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    items: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "vt-menu" }, _attrs))}>`);
      if (__props.items) {
        _push(`<div class="vt-menu-items"><!--[-->`);
        serverRenderer.ssrRenderList(__props.items, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$H, { item }, null, _parent));
          } else {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$G, {
              text: item.text,
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/VTMenu.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const _sfc_main$E = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    button: null,
    items: null,
    label: null
  },
  setup(__props) {
    const props = __props;
    const open = vue.ref(false);
    const elRef = vue.ref();
    const onBlur = () => {
      open.value = false;
    };
    useFocusContainer({
      elRef,
      onBlur
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "vt-flyout",
        ref_key: "elRef",
        ref: elRef
      }, _attrs))}><button type="button" class="vt-flyout-button" aria-haspopup="true"${serverRenderer.ssrRenderAttr("aria-expanded", open.value)}${serverRenderer.ssrRenderAttr("aria-label", __props.label)}>`);
      if (props.button) {
        _push(`<span class="vt-flyout-button-text">${serverRenderer.ssrInterpolate(props.button)} `);
        _push(serverRenderer.ssrRenderComponent(VTIconChevronDown, { class: "vt-flyout-button-text-icon" }, null, _parent));
        _push(`</span>`);
      } else {
        _push(serverRenderer.ssrRenderComponent(VTIconMoreHorizontal, { class: "vt-flyout-button-icon" }, null, _parent));
      }
      _push(`</button><div class="vt-flyout-menu">`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$F, { items: __props.items }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/VTFlyout.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const _sfc_main$D = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        type: "button",
        class: ["vt-hamburger", { "is-active": __props.active }],
        "aria-label": "mobile navigation",
        "aria-expanded": __props.active,
        "aria-controls": "VPNavScreen"
      }, _attrs))}><span class="vt-hamburger-container"><span class="vt-hamburger-top"></span><span class="vt-hamburger-middle"></span><span class="vt-hamburger-bottom"></span></span></button>`);
    };
  }
});
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/VTHamburger.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const _sfc_main$C = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    size: null,
    icon: null,
    link: null
  },
  setup(__props) {
    const props = __props;
    const target = /^[a-z]+:/i.test(props.link) ? `_blank` : void 0;
    const icons = {
      discord: VTIconDiscord,
      facebook: VTIconFacebook,
      github: VTIconGitHub,
      linkedin: VTIconLinkedIn,
      slack: VTIconSlack,
      twitter: VTIconTwitter,
      languages: VTIconLanguages,
      gitee: VTIconGitee
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["vt-social-link", {
          "is-small": __props.size === "small",
          "is-medium": __props.size === "medium"
        }],
        href: __props.link,
        title: __props.icon,
        target: vue.unref(target),
        rel: "noopener noreferrer"
      }, _attrs))}>`);
      serverRenderer.ssrRenderVNode(_push, vue.createVNode(vue.resolveDynamicComponent(icons[__props.icon]), { class: "vt-social-link-icon" }, null), _parent);
      _push(`<span class="visually-hidden">${serverRenderer.ssrInterpolate(__props.icon)}</span></a>`);
    };
  }
});
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/VTSocialLink.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const _sfc_main$B = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    size: null,
    links: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "vt-social-links" }, _attrs))}><!--[-->`);
      serverRenderer.ssrRenderList(__props.links, ({ link: link2, icon }) => {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$C, {
          key: link2,
          size: __props.size,
          icon,
          link: link2
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/VTSocialLinks.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const _sfc_main$A = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<button${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    class: "vt-switch",
    type: "button",
    role: "switch"
  }, _attrs))}><span class="vt-switch-check">`);
  if (_ctx.$slots.default) {
    _push(`<span class="vt-switch-icon">`);
    serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span></button>`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/VTSwitch.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
var VTSwitch = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$z = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const storageKey = "vue-theme-appearance";
    typeof localStorage !== "undefined" ? useAppearance() : () => {
    };
    function useAppearance() {
      let userPreference = localStorage.getItem(storageKey) || "auto";
      const query = window.matchMedia(`(prefers-color-scheme: dark)`);
      const classList = document.documentElement.classList;
      let isDark = userPreference === "auto" ? query.matches : userPreference === "dark";
      const setClass = (dark) => classList[dark ? "add" : "remove"]("dark");
      query.onchange = (e) => {
        if (userPreference === "auto") {
          setClass(isDark = e.matches);
        }
      };
      const toggle2 = () => {
        setClass(isDark = !isDark);
        localStorage.setItem(storageKey, userPreference = isDark ? query.matches ? "auto" : "dark" : query.matches ? "light" : "auto");
      };
      return toggle2;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(VTSwitch, vue.mergeProps({
        class: "vt-switch-appearance",
        "aria-label": "toggle dark mode"
      }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(VTIconSun, { class: "vt-switch-appearance-sun" }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(VTIconMoon, { class: "vt-switch-appearance-moon" }, null, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(VTIconSun, { class: "vt-switch-appearance-sun" }),
              vue.createVNode(VTIconMoon, { class: "vt-switch-appearance-moon" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/core/components/VTSwitchAppearance.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
var index = "";
const Content = vue.defineComponent({
  name: "VitePressContent",
  setup() {
    const route = useRoute();
    return () => vue.h("div", { style: { position: "relative" } }, [
      route.component ? vue.h(route.component) : null
    ]);
  }
});
var Debug_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$y = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const data = useData();
    const el = vue.ref(null);
    const open = vue.ref(false);
    const tempData = vue.reactive(data);
    vue.watch(open, (value) => {
      if (!value) {
        el.value.scrollTop = 0;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["debug", { open: open.value }],
        ref_key: "el",
        ref: el
      }, _attrs))} data-v-bf835584><p class="title" data-v-bf835584>Debug</p><pre class="block" data-v-bf835584>${serverRenderer.ssrInterpolate(vue.unref(tempData))}</pre></div>`);
    };
  }
});
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/app/components/Debug.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const hashRE = /#.*$/;
const extRE = /(index)?\.(md|html)$/;
const outboundRE = /^[a-z]+:/i;
function isExternal(path) {
  return outboundRE.test(path);
}
function ensureStartingSlash(path) {
  return /^\//.test(path) ? path : `/${path}`;
}
function normalizeLink(url) {
  if (isExternal(url)) {
    return url;
  }
  const { pathname, search, hash } = new URL(url, "http://vuejs.org");
  return withBase(pathname.endsWith("/") || pathname.endsWith(".html") ? url : `${pathname.replace(/(\.md)?$/, ".html")}${search}${hash}`);
}
const inBrowser = typeof window !== "undefined";
const hashRef = vue.ref(inBrowser ? location.hash : "");
if (inBrowser) {
  window.addEventListener("hashchange", () => {
    hashRef.value = location.hash;
  });
}
function isActive(currentPath, matchPath, asRegex = false) {
  matchPath = matchPath == null ? void 0 : matchPath.replace("vite-vue-blog/", "");
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  } else {
    if (normalize(matchPath) !== currentPath) {
      return false;
    }
    const hashMatch = matchPath.match(hashRE);
    if (hashMatch) {
      return hashRef.value === hashMatch[0];
    }
    return true;
  }
}
function normalize(path) {
  return decodeURI(path).replace(hashRE, "").replace(extRE, "");
}
function getSidebar(sidebar, path) {
  if (Array.isArray(sidebar)) {
    return sidebar;
  }
  path = ensureStartingSlash(path);
  for (const dir in sidebar) {
    if (path.startsWith(ensureStartingSlash(dir))) {
      return sidebar[dir];
    }
  }
  return [];
}
const configSymbol = Symbol("config");
function withConfigProvider(App) {
  return vue.defineComponent({
    name: "VPConfigProvider",
    setup(_, { slots }) {
      const { theme } = useData();
      const config = vue.computed(() => resolveConfig(theme.value));
      vue.provide(configSymbol, config);
      return () => vue.h(App, null, slots);
    }
  });
}
function useConfig() {
  return {
    config: vue.inject(configSymbol)
  };
}
function resolveConfig(config) {
  var _a2;
  return Object.assign({
    appearance: true
  }, config, {
    nav: (_a2 = config.nav) == null ? void 0 : _a2.map(normalizeMenuItem),
    sidebar: config.sidebar && normalizeSideBar(config.sidebar)
  });
}
function normalizeMenuItem(item) {
  if ("link" in item) {
    return Object.assign({}, item, {
      link: normalizeLink(item.link)
    });
  } else {
    return Object.assign({}, item, { items: item.items.map(normalizeMenuItem) });
  }
}
function normalizeSideBar(sidebar) {
  if (Array.isArray(sidebar)) {
    return sidebar.map(normalizeMenuItem);
  } else {
    const ret = {};
    for (const key in sidebar) {
      ret[key] = normalizeSideBar(sidebar[key]);
    }
    return ret;
  }
}
function useSidebar() {
  const route = useRoute();
  const { config } = useConfig();
  const { frontmatter } = useData();
  const isOpen = vue.ref(false);
  const sidebar = vue.computed(() => {
    const sidebarConfig = config.value.sidebar;
    const relativePath = route.data.relativePath;
    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : [];
  });
  const hasSidebar = vue.computed(() => frontmatter.value.sidebar !== false && sidebar.value.length > 0);
  function open() {
    isOpen.value = true;
  }
  function close() {
    isOpen.value = false;
  }
  function toggle() {
    isOpen.value ? close() : open();
  }
  return {
    isOpen,
    sidebar,
    hasSidebar,
    open,
    close,
    toggle
  };
}
function useNav() {
  const isScreenOpen = vue.ref(false);
  function openScreen() {
    isScreenOpen.value = true;
    window.addEventListener("resize", closeScreenOnTabletWindow);
  }
  function closeScreen() {
    isScreenOpen.value = false;
    window.removeEventListener("resize", closeScreenOnTabletWindow);
  }
  function toggleScreen() {
    isScreenOpen.value ? closeScreen() : openScreen();
  }
  function closeScreenOnTabletWindow() {
    window.outerWidth >= 768 && closeScreen();
  }
  return {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen
  };
}
var VPNavBarTitle_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$x = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "VPNavBarTitle",
        href: "/vite-vue-blog/"
      }, _attrs))} data-v-e77c185a><h1 class="text" data-v-e77c185a> \u4E2A\u4EBA\u7B14\u8BB0 </h1></a>`);
    };
  }
});
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPNavBarTitle.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
var VPNavBarTitle = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$x, [["__scopeId", "data-v-e77c185a"]]);
var style = "";
var VPNavBarSearch_vue_vue_type_style_index_0_lang = "";
const _sfc_main$w = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { theme } = useData();
    const VPAlgoliaSearchBox = vue.defineAsyncComponent(() => Promise.resolve().then(function() {
      return require("./assets/VPAlgoliaSearchBox.251bc819.js");
    }));
    const loaded = vue.ref(false);
    const metaKey = vue.ref({
      textContent: ""
    });
    vue.onMounted(() => {
      console.log("Ctrl");
      metaKey.value.textContent = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "\u2318" : "Ctrl";
      const handleSearchHotKey = (e) => {
        if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          load();
          remove();
        }
      };
      const remove = () => {
        window.removeEventListener("keydown", handleSearchHotKey);
      };
      window.addEventListener("keydown", handleSearchHotKey);
      vue.onUnmounted(remove);
    });
    function load() {
      if (!loaded.value) {
        loaded.value = true;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(theme).algolia) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPNavBarSearch" }, _attrs))}>`);
        if (loaded.value) {
          _push(serverRenderer.ssrRenderComponent(vue.unref(VPAlgoliaSearchBox), null, null, _parent));
        } else {
          _push(`<div id="docsearch"><button type="button" class="DocSearch DocSearch-Button" aria-label="Search"><span class="DocSearch-Button-Container"><svg width="20" height="20" class="DocSearch-Search-Icon" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="DocSearch-Button-Placeholder">Search</span></span><span class="DocSearch-Button-Keys"><span class="DocSearch-Button-Key">Meta</span><span class="DocSearch-Button-Key">K</span></span></button></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPNavBarSearch.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
var VPNavBarMenuLink_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$v = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: null
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(vue.unref(_sfc_main$I), vue.mergeProps({
        class: {
          VPNavBarMenuLink: true,
          active: vue.unref(isActive)(vue.unref(page).relativePath, __props.item.activeMatch || __props.item.link, !!__props.item.activeMatch)
        },
        href: __props.item.link,
        noIcon: true
      }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(__props.item.text)}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(__props.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPNavBarMenuLink.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
var VPNavBarMenuLink = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$v, [["__scopeId", "data-v-6d3f545a"]]);
var VPNavBarMenuGroup_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$u = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: null
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(vue.unref(_sfc_main$E), vue.mergeProps({
        class: {
          VPNavBarMenuGroup: true,
          active: vue.unref(isActive)(vue.unref(page).relativePath, __props.item.activeMatch, true)
        },
        button: __props.item.text,
        items: __props.item.items
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPNavBarMenuGroup.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
var VPNavBarMenuGroup = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$u, [["__scopeId", "data-v-6671b864"]]);
var VPNavBarMenu_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$t = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(config).nav) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          "aria-labelledby": "main-nav-aria-label",
          class: "VPNavBarMenu"
        }, _attrs))} data-v-03d04f32><span id="main-nav-aria-label" class="visually-hidden" data-v-03d04f32>Main Navigation</span><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(config).nav, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(serverRenderer.ssrRenderComponent(VPNavBarMenuLink, { item }, null, _parent));
          } else {
            _push(serverRenderer.ssrRenderComponent(VPNavBarMenuGroup, { item }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPNavBarMenu.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
var VPNavBarMenu = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$t, [["__scopeId", "data-v-03d04f32"]]);
var VPNavBarAppearance_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$s = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(config).appearance) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPNavBarAppearance" }, _attrs))} data-v-4a42e18e>`);
        _push(serverRenderer.ssrRenderComponent(vue.unref(_sfc_main$z), null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPNavBarAppearance.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
var VPNavBarAppearance = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$s, [["__scopeId", "data-v-4a42e18e"]]);
var VPNavBarSocialLinks_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$r = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(config).socialLinks) {
        _push(serverRenderer.ssrRenderComponent(vue.unref(_sfc_main$B), vue.mergeProps({
          class: "VPNavBarSocialLinks",
          size: "small",
          links: vue.unref(config).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPNavBarSocialLinks.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
var VPNavBarSocialLinks = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$r, [["__scopeId", "data-v-16262ec2"]]);
var VPNavBarExtra_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$q = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { config } = useConfig();
    const hasContent = vue.computed(() => {
      return config.value.appearance || config.value.socialLinks;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(hasContent)) {
        _push(serverRenderer.ssrRenderComponent(vue.unref(_sfc_main$E), vue.mergeProps({
          class: "VPNavBarExtra",
          label: "extra navigation"
        }, _attrs), {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (vue.unref(config).appearance) {
                _push2(`<div class="vt-menu-group" data-v-0e7e8326${_scopeId}><div class="vt-menu-item item" data-v-0e7e8326${_scopeId}><p class="vt-menu-label" data-v-0e7e8326${_scopeId}>\u660E\u6697</p><div class="vt-menu-action action" data-v-0e7e8326${_scopeId}>`);
                _push2(serverRenderer.ssrRenderComponent(vue.unref(_sfc_main$z), null, null, _parent2, _scopeId));
                _push2(`</div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (vue.unref(config).socialLinks) {
                _push2(`<div class="vt-menu-group" data-v-0e7e8326${_scopeId}><div class="vt-menu-item item" data-v-0e7e8326${_scopeId}>`);
                _push2(serverRenderer.ssrRenderComponent(vue.unref(_sfc_main$B), {
                  class: "social-links",
                  size: "small",
                  links: vue.unref(config).socialLinks
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                vue.unref(config).appearance ? (vue.openBlock(), vue.createBlock("div", {
                  key: 0,
                  class: "vt-menu-group"
                }, [
                  vue.createVNode("div", { class: "vt-menu-item item" }, [
                    vue.createVNode("p", { class: "vt-menu-label" }, "\u660E\u6697"),
                    vue.createVNode("div", { class: "vt-menu-action action" }, [
                      vue.createVNode(vue.unref(_sfc_main$z))
                    ])
                  ])
                ])) : vue.createCommentVNode("", true),
                vue.unref(config).socialLinks ? (vue.openBlock(), vue.createBlock("div", {
                  key: 1,
                  class: "vt-menu-group"
                }, [
                  vue.createVNode("div", { class: "vt-menu-item item" }, [
                    vue.createVNode(vue.unref(_sfc_main$B), {
                      class: "social-links",
                      size: "small",
                      links: vue.unref(config).socialLinks
                    }, null, 8, ["links"])
                  ])
                ])) : vue.createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPNavBarExtra.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
var VPNavBarExtra = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$q, [["__scopeId", "data-v-0e7e8326"]]);
var VPNavBarHamburger_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$p = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean }
  },
  setup(__props) {
    const { config } = useConfig();
    const hasContent = vue.computed(() => {
      return config.value.appearance || config.value.socialLinks;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(hasContent)) {
        _push(serverRenderer.ssrRenderComponent(vue.unref(_sfc_main$D), vue.mergeProps({
          class: "VPNavBarHamburger",
          active: __props.active
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPNavBarHamburger.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
var VPNavBarHamburger = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$p, [["__scopeId", "data-v-60965b98"]]);
var VPNavBar_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$o = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    isScreenOpen: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPNavBar" }, _attrs))} data-v-22c1e5cc><div class="container" data-v-22c1e5cc>`);
      _push(serverRenderer.ssrRenderComponent(VPNavBarTitle, null, null, _parent));
      _push(`<div class="content" data-v-22c1e5cc>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$w, { class: "search" }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(VPNavBarMenu, { class: "menu" }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(VPNavBarAppearance, { class: "appearance" }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(VPNavBarSocialLinks, { class: "social-links" }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(VPNavBarExtra, { class: "extra" }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(VPNavBarHamburger, {
        class: "hamburger",
        active: __props.isScreenOpen
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPNavBar.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
var VPNavBar = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$o, [["__scopeId", "data-v-22c1e5cc"]]);
if (typeof window !== "undefined") {
  var passiveTestOptions = {
    get passive() {
      return void 0;
    }
  };
  window.addEventListener("testPassive", null, passiveTestOptions);
  window.removeEventListener("testPassive", null, passiveTestOptions);
}
typeof window !== "undefined" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
var VPNavScreenMenuLink_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$n = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    text: null,
    link: null
  },
  setup(__props) {
    vue.inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(vue.unref(_sfc_main$I), vue.mergeProps({
        class: "VPNavScreenMenuLink",
        href: __props.link
      }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(__props.text)}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(__props.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPNavScreenMenuLink.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
var VPNavScreenMenuLink = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$n, [["__scopeId", "data-v-2cd0ec06"]]);
var VPNavScreenMenuGroupLink_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$m = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    text: null,
    link: null
  },
  setup(__props) {
    vue.inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(vue.unref(_sfc_main$I), vue.mergeProps({
        class: "VPNavScreenMenuGroupLink",
        href: __props.link
      }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(__props.text)}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(__props.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPNavScreenMenuGroupLink.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
var VPNavScreenMenuGroupLink = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$m, [["__scopeId", "data-v-3746d4da"]]);
var VPNavScreenMenuGroupSection_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$l = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    text: null,
    items: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPNavScreenMenuGroupSection" }, _attrs))} data-v-130ee4b7>`);
      if (__props.text) {
        _push(`<p class="title" data-v-130ee4b7>${serverRenderer.ssrInterpolate(__props.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      serverRenderer.ssrRenderList(__props.items, (item) => {
        _push(serverRenderer.ssrRenderComponent(VPNavScreenMenuGroupLink, {
          key: item.text,
          text: item.text,
          link: item.link
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPNavScreenMenuGroupSection.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
var VPNavScreenMenuGroupSection = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$l, [["__scopeId", "data-v-130ee4b7"]]);
var VPNavScreenMenuGroup_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$k = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    text: null,
    items: null
  },
  setup(__props) {
    const props = __props;
    const isOpen = vue.ref(false);
    const groupId = vue.computed(() => `NavScreenGroup-${props.text.replace(" ", "-").toLowerCase()}`);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["VPNavScreenMenuGroup", { open: isOpen.value }]
      }, _attrs))} data-v-2891dcb0><button class="button"${serverRenderer.ssrRenderAttr("aria-controls", vue.unref(groupId))}${serverRenderer.ssrRenderAttr("aria-expanded", isOpen.value)} data-v-2891dcb0><span class="button-text" data-v-2891dcb0>${serverRenderer.ssrInterpolate(__props.text)}</span>`);
      _push(serverRenderer.ssrRenderComponent(vue.unref(VTIconPlus), { class: "button-icon" }, null, _parent));
      _push(`</button><div${serverRenderer.ssrRenderAttr("id", vue.unref(groupId))} class="items" data-v-2891dcb0><!--[-->`);
      serverRenderer.ssrRenderList(__props.items, (item) => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(`<div class="item" data-v-2891dcb0>`);
          _push(serverRenderer.ssrRenderComponent(VPNavScreenMenuGroupLink, {
            text: item.text,
            link: item.link
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<div class="group" data-v-2891dcb0>`);
          _push(serverRenderer.ssrRenderComponent(VPNavScreenMenuGroupSection, {
            text: item.text,
            items: item.items
          }, null, _parent));
          _push(`</div>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPNavScreenMenuGroup.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
var VPNavScreenMenuGroup = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$k, [["__scopeId", "data-v-2891dcb0"]]);
const _sfc_main$j = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(config).nav) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPNavScreenMenu" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(config).nav, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(serverRenderer.ssrRenderComponent(VPNavScreenMenuLink, {
              text: item.text,
              link: item.link
            }, null, _parent));
          } else {
            _push(serverRenderer.ssrRenderComponent(VPNavScreenMenuGroup, {
              text: item.text || "",
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPNavScreenMenu.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
var VPNavScreenAppearance_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$i = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(config).appearance) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPNavScreenAppearance" }, _attrs))} data-v-14eed022><p class="text" data-v-14eed022>\u660E\u6697</p>`);
        _push(serverRenderer.ssrRenderComponent(vue.unref(_sfc_main$z), null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPNavScreenAppearance.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
var VPNavScreenAppearance = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$i, [["__scopeId", "data-v-14eed022"]]);
const _sfc_main$h = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(config).socialLinks) {
        _push(serverRenderer.ssrRenderComponent(vue.unref(_sfc_main$B), vue.mergeProps({
          class: "VPNavScreenSocialLinks",
          size: "medium",
          links: vue.unref(config).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPNavScreenSocialLinks.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
var VPNavScreen_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$g = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const screen = vue.ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.open) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          class: "VPNavScreen",
          ref_key: "screen",
          ref: screen
        }, _attrs))} data-v-5eb35655><div class="container" data-v-5eb35655>`);
        _push(serverRenderer.ssrRenderComponent(_sfc_main$j, { class: "menu" }, null, _parent));
        _push(serverRenderer.ssrRenderComponent(VPNavScreenAppearance, { class: "appearance" }, null, _parent));
        _push(serverRenderer.ssrRenderComponent(_sfc_main$h, { class: "social-links" }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPNavScreen.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
var VPNavScreen = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$g, [["__scopeId", "data-v-5eb35655"]]);
var VPNav_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$f = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { isScreenOpen, closeScreen, toggleScreen } = useNav();
    const { hasSidebar } = useSidebar();
    vue.provide("close-screen", closeScreen);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["VPNav nav-bar", { stick: !vue.unref(hasSidebar) }]
      }, _attrs))} data-v-665b4326>`);
      _push(serverRenderer.ssrRenderComponent(VPNavBar, { "is-screen-open": vue.unref(isScreenOpen) }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(VPNavScreen, { open: vue.unref(isScreenOpen) }, null, _parent));
      _push(`</header>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPNav.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
var VPNav = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$f, [["__scopeId", "data-v-665b4326"]]);
var VPLocalNav_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$e = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const { hasSidebar } = useSidebar();
    const { frontmatter } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(hasSidebar)) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPLocalNav" }, _attrs))} data-v-acbefcb0><button class="menu"${serverRenderer.ssrRenderAttr("aria-expanded", __props.open)} aria-controls="VPSidebarNav" data-v-acbefcb0>`);
        _push(serverRenderer.ssrRenderComponent(vue.unref(VTIconAlignLeft), { class: "menu-icon" }, null, _parent));
        _push(`<span class="menu-text" data-v-acbefcb0>\u76EE\u5F55</span></button>`);
        if (vue.unref(frontmatter).returnToTop !== false) {
          _push(`<a class="top-link" href="#" data-v-acbefcb0>\u56DE\u5230\u9876\u90E8</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPLocalNav.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
var VPLocalNav = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$e, [["__scopeId", "data-v-acbefcb0"]]);
var VPSkipLink_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$d = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const backToTop = vue.ref();
    vue.watch(() => route.path, () => backToTop.value.focus());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><span tabindex="-1" data-v-9a0c1eda></span><a href="#VPContent" class="VPSkipLink visually-hidden" data-v-9a0c1eda> Skip to content </a><!--]-->`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPSkipLink.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
var VPSkipLink = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$d, [["__scopeId", "data-v-9a0c1eda"]]);
const _sfc_main$c = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "visually-hidden",
        "aria-live": "polite"
      }, _attrs))}>${serverRenderer.ssrInterpolate(vue.unref(page).title)} has loaded</div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPAnnouncer.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
var VPSidebarLink_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$b = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: null
  },
  setup(__props) {
    const data = useData();
    vue.inject("close-sidebar");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: {
          link: true,
          active: vue.unref(isActive)(vue.unref(data).page.value.relativePath, __props.item.link)
        },
        href: __props.item.link
      }, _attrs))} data-v-539850a2><p class="link-text" data-v-539850a2>${serverRenderer.ssrInterpolate(__props.item.text)}</p></a>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPSidebarLink.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
var VPSidebarLink = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$b, [["__scopeId", "data-v-539850a2"]]);
var VPSidebarGroup_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    text: null,
    items: null
  },
  setup(__props) {
    const props = __props;
    const { page } = useData();
    function hasActiveLink() {
      const { relativePath } = page.value;
      return props.items.some((item) => isActive(relativePath, item.link));
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPSidebarGroup" }, _attrs))} data-v-0ce3abb6><div class="title" data-v-0ce3abb6><h2 class="${serverRenderer.ssrRenderClass([{ active: hasActiveLink() }, "title-text"])}" data-v-0ce3abb6>${serverRenderer.ssrInterpolate(__props.text)}</h2></div><!--[-->`);
      serverRenderer.ssrRenderList(__props.items, (item) => {
        _push(serverRenderer.ssrRenderComponent(VPSidebarLink, { item }, null, _parent));
      });
      _push(`<!--]--></section>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPSidebarGroup.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
var VPSidebarGroup = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$a, [["__scopeId", "data-v-0ce3abb6"]]);
var VPSidebar_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { sidebar, hasSidebar } = useSidebar();
    let navEl = vue.ref(null);
    vue.watchPostEffect(async () => {
      var _a2;
      if (props.open) {
        await vue.nextTick();
        (_a2 = navEl.value) == null ? void 0 : _a2.focus();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(hasSidebar)) {
        _push(`<aside${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          ref_key: "navEl",
          ref: navEl,
          class: ["VPSidebar", { open: __props.open }]
        }, _attrs))} data-v-137f95ea><nav id="VPSidebarNav" aria-labelledby="sidebar-aria-label" tabindex="-1" data-v-137f95ea>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
        _push(`<span id="sidebar-aria-label" class="visually-hidden" data-v-137f95ea>Sidebar Navigation </span><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(sidebar), (group) => {
          _push(`<div class="group" data-v-137f95ea>`);
          _push(serverRenderer.ssrRenderComponent(VPSidebarGroup, {
            text: group.text,
            items: group.items
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
        _push(`</nav></aside>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPSidebar.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var VPSidebar = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$9, [["__scopeId", "data-v-137f95ea"]]);
var VPFooter_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { theme } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2;
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPFooter" }, _attrs))} data-v-7b61fc1f>`);
      if ((_a2 = vue.unref(theme).footer) == null ? void 0 : _a2.license) {
        _push(`<p class="license" data-v-7b61fc1f> Released under the `);
        _push(serverRenderer.ssrRenderComponent(vue.unref(_sfc_main$I), {
          class: "link",
          href: vue.unref(theme).footer.license.link,
          "no-icon": ""
        }, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.ssrInterpolate(vue.unref(theme).footer.license.text)}`);
            } else {
              return [
                vue.createTextVNode(vue.toDisplayString(vue.unref(theme).footer.license.text), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`. </p>`);
      } else {
        _push(`<!---->`);
      }
      if ((_b2 = vue.unref(theme).footer) == null ? void 0 : _b2.copyright) {
        _push(`<p class="copyright" data-v-7b61fc1f>${serverRenderer.ssrInterpolate(vue.unref(theme).footer.copyright)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPFooter.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var VPFooter = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$8, [["__scopeId", "data-v-7b61fc1f"]]);
const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = vue.resolveComponent("Content");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPContentPage" }, _attrs))}><main>`);
      _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
      _push(`</main>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "footer-before", {}, null, _push, _parent);
      if (vue.unref(frontmatter).footer !== false) {
        _push(serverRenderer.ssrRenderComponent(VPFooter, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      serverRenderer.ssrRenderSlot(_ctx.$slots, "footer-after", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPContentPage.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
function tryOnScopeDispose(fn) {
  if (vue.getCurrentScope()) {
    vue.onScopeDispose(fn);
    return true;
  }
  return false;
}
const isClient = typeof window !== "undefined";
function tryOnMounted(fn, sync = true) {
  if (vue.getCurrentInstance())
    vue.onMounted(fn);
  else if (sync)
    fn();
  else
    vue.nextTick(fn);
}
const defaultWindow = isClient ? window : void 0;
isClient ? window.document : void 0;
isClient ? window.navigator : void 0;
isClient ? window.location : void 0;
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  let mediaQuery;
  const matches = vue.ref(false);
  const update = () => {
    if (!window2)
      return;
    if (!mediaQuery)
      mediaQuery = window2.matchMedia(query);
    matches.value = mediaQuery.matches;
  };
  tryOnMounted(() => {
    update();
    if (!mediaQuery)
      return;
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", update);
    else
      mediaQuery.addListener(update);
    tryOnScopeDispose(() => {
      if ("removeEventListener" in update)
        mediaQuery.removeEventListener("change", update);
      else
        mediaQuery.removeListener(update);
    });
  });
  return matches;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
_global[globalKey];
var _a, _b;
isClient && (window == null ? void 0 : window.navigator) && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.platform) && /iP(ad|hone|od)/.test((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.platform);
var __defProp$3 = Object.defineProperty;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
const initialRect = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  height: 0,
  width: 0
};
__spreadValues$3({
  text: ""
}, initialRect);
function resolveHeaders(headers) {
  return mapHeaders(groupHeaders(headers));
}
function groupHeaders(headers) {
  headers = headers.map((h) => Object.assign({}, h));
  let lastH2;
  for (const h of headers) {
    if (h.level === 2) {
      lastH2 = h;
    } else if (lastH2 && h.level <= 3) {
      (lastH2.children || (lastH2.children = [])).push(h);
    }
  }
  return headers.filter((h) => h.level === 2);
}
function mapHeaders(headers) {
  return headers.map((header) => ({
    text: header.title,
    link: `#${header.slug}`,
    children: header.children ? mapHeaders(header.children) : void 0,
    hidden: header.hidden
  }));
}
function useActiveAnchor(container, bg) {
  const isOutlineEnabled = useMediaQuery("(min-width: 1280px)");
  const onScroll = throttleAndDebounce(setActiveLink, 100);
  function setActiveLink() {
    if (!isOutlineEnabled.value) {
      return;
    }
    const links = [].slice.call(container.value.querySelectorAll(".outline-link"));
    const anchors = [].slice.call(document.querySelectorAll(".content .header-anchor")).filter((anchor) => links.some((link2) => link2.hash === anchor.hash));
    if (anchors.length && window.scrollY + window.innerHeight === document.body.offsetHeight) {
      activateLink(anchors[anchors.length - 1].hash);
      return;
    }
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
      const nextAnchor = anchors[i + 1];
      const [isActive2, hash] = isAnchorActive(i, anchor, nextAnchor);
      if (isActive2) {
        history.replaceState(null, document.title, hash ? hash : " ");
        activateLink(hash);
        return;
      }
    }
  }
  let prevActiveLink = null;
  function activateLink(hash) {
    if (prevActiveLink) {
      prevActiveLink.classList.remove("active");
    }
    const activeLink = prevActiveLink = hash == null ? null : container.value.querySelector(`a[href="${decodeURIComponent(hash)}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
      bg.value.style.opacity = "1";
      bg.value.style.top = activeLink.offsetTop + 33 + "px";
    } else {
      bg.value.style.opacity = "0";
      bg.value.style.top = "33px";
    }
  }
  vue.onMounted(() => {
    requestAnimationFrame(setActiveLink);
    window.addEventListener("scroll", onScroll);
  });
  vue.onUpdated(() => {
    activateLink(location.hash);
  });
  vue.onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
}
const pageOffset = 56;
function getAnchorTop(anchor) {
  return anchor.parentElement.offsetTop - pageOffset - 15;
}
function isAnchorActive(index2, anchor, nextAnchor) {
  const scrollTop = window.scrollY;
  if (index2 === 0 && scrollTop === 0) {
    return [true, null];
  }
  if (scrollTop < getAnchorTop(anchor)) {
    return [false, null];
  }
  if (!nextAnchor || scrollTop < getAnchorTop(nextAnchor)) {
    return [true, anchor.hash];
  }
  return [false, null];
}
function throttleAndDebounce(fn, delay) {
  let timeout;
  let called = false;
  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    if (!called) {
      fn();
      called = true;
      setTimeout(() => {
        called = false;
      }, delay);
    } else {
      timeout = setTimeout(fn, delay);
    }
  };
}
var VPContentDocOutline_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { page, frontmatter } = useData();
    const container = vue.ref();
    const marker = vue.ref();
    useActiveAnchor(container, marker);
    const filterHeaders = vue.inject("filter-headers", null);
    const filteredHeaders = vue.computed(() => {
      return filterHeaders ? page.value.headers.map((h) => {
        return filterHeaders(h) ? h : Object.assign({}, h, { hidden: true });
      }) : page.value.headers;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "VPContentDocOutline",
        ref_key: "container",
        ref: container
      }, _attrs))} data-v-6706ac52><div class="outline-marker" data-v-6706ac52></div><div class="outline-title" data-v-6706ac52>\u7D22\u5F15</div><nav aria-labelledby="doc-outline-aria-label" data-v-6706ac52><span id="doc-outline-aria-label" class="visually-hidden" data-v-6706ac52>Table of Contents for current page</span><ul class="root" data-v-6706ac52><!--[-->`);
      serverRenderer.ssrRenderList(vue.unref(resolveHeaders)(vue.unref(filteredHeaders)), ({ text, link: link2, children, hidden }) => {
        _push(`<li style="${serverRenderer.ssrRenderStyle(!hidden ? null : { display: "none" })}" data-v-6706ac52><a class="outline-link"${serverRenderer.ssrRenderAttr("href", link2)} data-v-6706ac52>${serverRenderer.ssrInterpolate(text)}</a>`);
        if (children && vue.unref(frontmatter).outline === "deep") {
          _push(`<ul data-v-6706ac52><!--[-->`);
          serverRenderer.ssrRenderList(children, ({ text: text2, link: link22, hidden: hidden2 }) => {
            _push(`<li style="${serverRenderer.ssrRenderStyle(!hidden2 ? null : { display: "none" })}" data-v-6706ac52><a class="outline-link nested"${serverRenderer.ssrRenderAttr("href", link22)} data-v-6706ac52>${serverRenderer.ssrInterpolate(text2)}</a></li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPContentDocOutline.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var VPContentDocOutline = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$6, [["__scopeId", "data-v-6706ac52"]]);
var VPContentDocFooter_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { page, theme } = useData();
    const links = vue.computed(() => {
      const sidebar = getSidebar(theme.value.sidebar, page.value.relativePath);
      const candidates = getFlatSideBarLinks(sidebar);
      const index2 = candidates.findIndex((link2) => isActive(page.value.relativePath, link2.link));
      return {
        prev: candidates[index2 - 1],
        next: candidates[index2 + 1]
      };
    });
    function getFlatSideBarLinks(sidebar) {
      const links2 = [];
      for (const group of sidebar) {
        for (const link2 of group.items) {
          links2.push(link2);
        }
      }
      return links2;
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(links).prev || vue.unref(links).next) {
        _push(`<footer${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPContentDocFooter" }, _attrs))} data-v-716919ab>`);
        if (vue.unref(links).prev) {
          _push(`<a class="prev-link"${serverRenderer.ssrRenderAttr("href", vue.unref(normalizeLink)(vue.unref(links).prev.link))} data-v-716919ab><span class="desc" data-v-716919ab>`);
          _push(serverRenderer.ssrRenderComponent(vue.unref(VTIconChevronLeft), { class: "vt-link-icon" }, null, _parent));
          _push(` \u4E0A\u4E00\u8282</span><span class="title" data-v-716919ab>${serverRenderer.ssrInterpolate(vue.unref(links).prev.text)}</span></a>`);
        } else {
          _push(`<!---->`);
        }
        if (vue.unref(links).next) {
          _push(`<a class="next-link"${serverRenderer.ssrRenderAttr("href", vue.unref(normalizeLink)(vue.unref(links).next.link))} data-v-716919ab><span class="desc" data-v-716919ab>\u4E0B\u4E00\u8282 `);
          _push(serverRenderer.ssrRenderComponent(vue.unref(VTIconChevronRight), { class: "vt-link-icon" }, null, _parent));
          _push(`</span><span class="title" data-v-716919ab>${serverRenderer.ssrInterpolate(vue.unref(links).next.text)}</span></a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</footer>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPContentDocFooter.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var VPContentDocFooter = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$5, [["__scopeId", "data-v-716919ab"]]);
var VPCarbonAds_vue_vue_type_style_index_0_lang = "";
const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { theme } = useData();
    const carbonOptions = theme.value.carbonAds;
    const container = vue.ref();
    const isWide = useMediaQuery("(min-width: 1280px)");
    let hasInitalized = false;
    function init() {
      if (!hasInitalized) {
        hasInitalized = true;
        const s = document.createElement("script");
        s.id = "_carbonads_js";
        s.src = `//cdn.carbonads.com/carbon.js?serve=${carbonOptions.code}&placement=${carbonOptions.placement}`;
        s.async = true;
        container.value.appendChild(s);
      }
    }
    if (carbonOptions) {
      vue.onMounted(() => {
        if (isWide.value) {
          init();
        } else {
          vue.watch(isWide, (wide) => wide && init());
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "VPCarbonAds",
        ref_key: "container",
        ref: container
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPCarbonAds.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var VPContentDoc_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { page, frontmatter, theme } = useData();
    const hashMatch = /#(\w+)$/;
    const repoUrl = vue.computed(() => {
      var _a2, _b2;
      const repo = ((_a2 = theme.value.editLink) == null ? void 0 : _a2.repo) || "vuejs/docs";
      const branch = ((_b2 = repo.match(hashMatch)) == null ? void 0 : _b2[1]) || "main";
      return `https://github.com/vuejs/docs/edit/${branch}/src/${page.value.relativePath}`;
    });
    const pageClass = vue.computed(() => {
      const { relativePath } = page.value;
      return relativePath.slice(0, relativePath.indexOf("/"));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = vue.resolveComponent("Content");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["VPContentDoc", { "has-aside": vue.unref(frontmatter).aside !== false }]
      }, _attrs))} data-v-6971fa12><div class="container" data-v-6971fa12>`);
      if (vue.unref(frontmatter).aside !== false) {
        _push(`<div class="aside" data-v-6971fa12><div class="aside-container" data-v-6971fa12>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push, _parent);
        if (vue.unref(page).headers && vue.unref(frontmatter).outline !== false) {
          _push(serverRenderer.ssrRenderComponent(VPContentDocOutline, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-mid", {}, null, _push, _parent);
        if (vue.unref(theme).carbonAds && vue.unref(frontmatter).ads !== false) {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$4, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="content" data-v-6971fa12>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "content-top", {}, null, _push, _parent);
      _push(`<main data-v-6971fa12>`);
      _push(serverRenderer.ssrRenderComponent(_component_Content, {
        class: ["vt-doc", vue.unref(pageClass)]
      }, null, _parent));
      if (vue.unref(theme).editLink && vue.unref(frontmatter).editLink !== false) {
        _push(`<p class="edit-link" data-v-6971fa12>`);
        _push(serverRenderer.ssrRenderComponent(vue.unref(VTIconEdit), { class: "vt-icon" }, null, _parent));
        _push(serverRenderer.ssrRenderComponent(vue.unref(_sfc_main$I), {
          href: vue.unref(repoUrl),
          "no-icon": true
        }, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.ssrInterpolate(vue.unref(theme).editLink.text)}`);
            } else {
              return [
                vue.createTextVNode(vue.toDisplayString(vue.unref(theme).editLink.text), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "content-bottom", {}, null, _push, _parent);
      if (vue.unref(frontmatter).footer !== false) {
        _push(serverRenderer.ssrRenderComponent(VPContentDocFooter, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPContentDoc.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var VPContentDoc = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$3, [["__scopeId", "data-v-6971fa12"]]);
var VPNotFound_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { theme } = useData();
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "vt-doc" }, _attrs))} data-v-6fdba42a><h1 data-v-6fdba42a>Page Not Found</h1><p data-v-6fdba42a> You found a dead link: <span class="not-found-path" data-v-6fdba42a>${serverRenderer.ssrInterpolate(vue.unref(route).path)}</span><br data-v-6fdba42a>`);
      if (vue.unref(theme).repo) {
        _push(`<span data-v-6fdba42a>Please <a${serverRenderer.ssrRenderAttr("href", `https://github.com/${vue.unref(theme).repo}`)} target="_blank" data-v-6fdba42a>let us know</a> so we can fix it.</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPNotFound.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var VPNotFound = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$2, [["__scopeId", "data-v-6fdba42a"]]);
var VPContent_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        id: "VPContent",
        class: ["VPContent", { "has-sidebar": vue.unref(hasSidebar) }]
      }, _attrs))} data-v-f1570ab6>`);
      if (vue.unref(route).component === VPNotFound) {
        _push(serverRenderer.ssrRenderComponent(VPNotFound, null, null, _parent));
      } else if (!!vue.unref(frontmatter).page) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$7, null, {
          "footer-before": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "footer-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "footer-before", {}, void 0, true)
              ];
            }
          }),
          "footer-after": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "footer-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "footer-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(serverRenderer.ssrRenderComponent(VPContentDoc, {
          class: { "has-sidebar": vue.unref(hasSidebar) }
        }, {
          "content-top": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "content-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "content-top", {}, void 0, true)
              ];
            }
          }),
          "content-bottom": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "content-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "content-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-top": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-mid": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-mid", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "aside-mid", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\\ `);
            } else {
              return [
                vue.createTextVNode("\\ ")
              ];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var VPContent = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$1, [["__scopeId", "data-v-f1570ab6"]]);
var VPApp_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const {
      isOpen: isSidebarOpen,
      open: openSidebar,
      close: closeSidebar
    } = useSidebar();
    let triggerElement;
    vue.watchEffect(() => {
      triggerElement = isSidebarOpen.value ? document.activeElement : void 0;
    });
    const onEsacpe = (e) => {
      if (e.key === "Escape" && isSidebarOpen.value) {
        closeSidebar();
        triggerElement == null ? void 0 : triggerElement.focus();
      }
    };
    vue.onMounted(() => {
      window.addEventListener("keyup", onEsacpe);
    });
    vue.onUnmounted(() => {
      window.removeEventListener("keyup", onEsacpe);
    });
    vue.provide("close-sidebar", closeSidebar);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPApp" }, _attrs))} data-v-73d720b3>`);
      _push(serverRenderer.ssrRenderComponent(VPSkipLink, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(vue.unref(_sfc_main$J), {
        class: "backdrop",
        show: vue.unref(isSidebarOpen)
      }, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "banner", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(VPNav, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(VPLocalNav, { open: vue.unref(isSidebarOpen) }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(VPSidebar, { open: vue.unref(isSidebarOpen) }, {
        top: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-top", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "sidebar-top", {}, void 0, true)
            ];
          }
        }),
        bottom: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-bottom", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "sidebar-bottom", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(VPContent, null, {
        "content-top": vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "content-top", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "content-top", {}, void 0, true)
            ];
          }
        }),
        "content-bottom": vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "content-bottom", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "content-bottom", {}, void 0, true)
            ];
          }
        }),
        "aside-top": vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
            ];
          }
        }),
        "aside-mid": vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-mid", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "aside-mid", {}, void 0, true)
            ];
          }
        }),
        "aside-bottom": vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
            ];
          }
        }),
        "footer-before": vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "footer-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "footer-before", {}, void 0, true)
            ];
          }
        }),
        "footer-after": vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "footer-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "footer-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$c, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPApp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var VPApp = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["__scopeId", "data-v-73d720b3"]]);
const VPTheme = {
  Layout: withConfigProvider(VPApp),
  NotFound: VPNotFound
};
var override = "";
var Theme = __spreadProps(__spreadValues({}, VPTheme), {
  Layout() {
    return vue.h(VPTheme.Layout, null, {});
  }
});
const hasFetched = /* @__PURE__ */ new Set();
const createLink = () => document.createElement("link");
const viaDOM = (url) => {
  const link2 = createLink();
  link2.rel = `prefetch`;
  link2.href = url;
  document.head.appendChild(link2);
};
const viaXHR = (url) => {
  const req = new XMLHttpRequest();
  req.open("GET", url, req.withCredentials = true);
  req.send();
};
let link;
const doFetch = inBrowser$1 && (link = createLink()) && link.relList && link.relList.supports && link.relList.supports("prefetch") ? viaDOM : viaXHR;
function usePrefetch() {
  if (!inBrowser$1) {
    return;
  }
  if (!window.IntersectionObserver) {
    return;
  }
  let conn;
  if ((conn = navigator.connection) && (conn.saveData || /2g/.test(conn.effectiveType))) {
    return;
  }
  const rIC = window.requestIdleCallback || setTimeout;
  let observer = null;
  const observeLinks = () => {
    if (observer) {
      observer.disconnect();
    }
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link2 = entry.target;
          observer.unobserve(link2);
          const { pathname } = link2;
          if (!hasFetched.has(pathname)) {
            hasFetched.add(pathname);
            const pageChunkPath = pathToFile(pathname);
            doFetch(pageChunkPath);
          }
        }
      });
    });
    rIC(() => {
      document.querySelectorAll("#app a").forEach((link2) => {
        const { target, hostname, pathname } = link2;
        const extMatch = pathname.match(/\.\w+$/);
        if (extMatch && extMatch[0] !== ".html") {
          return;
        }
        if (target !== `_blank` && hostname === location.hostname) {
          if (pathname !== location.pathname) {
            observer.observe(link2);
          } else {
            hasFetched.add(pathname);
          }
        }
      });
    });
  };
  vue.onMounted(observeLinks);
  const route = useRoute();
  vue.watch(() => route.path, observeLinks);
  vue.onUnmounted(() => {
    observer && observer.disconnect();
  });
}
const ClientOnly = vue.defineComponent({
  setup(_, { slots }) {
    const show = vue.ref(false);
    vue.onMounted(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});
const NotFound = Theme.NotFound || (() => "404 Not Found");
const VitePressApp = {
  name: "VitePressApp",
  setup() {
    const { site } = useData();
    vue.onMounted(() => {
      vue.watch(() => site.value.lang, (lang) => {
        document.documentElement.lang = lang;
      }, { immediate: true });
    });
    {
      usePrefetch();
    }
    return () => vue.h(Theme.Layout);
  }
};
function createApp() {
  const router = newRouter();
  const app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  app.provide(dataSymbol, data);
  if (inBrowser$1) {
    useUpdateHead(router.route, data.site);
  }
  app.component("Content", Content);
  app.component("ClientOnly", ClientOnly);
  app.component("Debug", () => null);
  Object.defineProperty(app.config.globalProperties, "$frontmatter", {
    get() {
      return data.frontmatter.value;
    }
  });
  if (Theme.enhanceApp) {
    Theme.enhanceApp({
      app,
      router,
      siteData: siteDataRef
    });
  }
  return { app, router };
}
function newApp() {
  return vue.createSSRApp(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser$1;
  let initialPath;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    if (isInitialPageLoad) {
      initialPath = pageFilePath;
    }
    if (isInitialPageLoad || initialPath === pageFilePath) {
      pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
    }
    if (inBrowser$1) {
      isInitialPageLoad = false;
      return function(t) {
        return Promise.resolve().then(function() {
          return /* @__PURE__ */ _interopNamespace(require(t));
        });
      }(pageFilePath);
    }
    return require(pageFilePath);
  }, NotFound);
}
if (inBrowser$1) {
  const { app, router } = createApp();
  router.go().then(() => {
    app.mount("#app");
  });
}
exports.createApp = createApp;
exports.useData = useData;
exports.useRoute = useRoute;
exports.useRouter = useRouter;
