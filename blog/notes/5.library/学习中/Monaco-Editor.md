# 起步

> [Monaco Editor](https://link.juejin.cn/?target=https%3A%2F%2Fmicrosoft.github.io%2Fmonaco-editor%2F) 是 [VS Code](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FMicrosoft%2Fvscode) 底层的代码编辑器，开源协议是MIT，支持Edge、 Chrome、Firefox、Safari和Opera浏览器，但是不支持移动端浏览器或移动端框架

## 安装

```sh
npm install monaco-editor 
```

```js
import * as monaco from "monaco-editor/esm/vs/editor/editor.main.js"
```

##  初始化编辑器 

```js
// 初始化的dom节点
const monacoEditor = monaco.editor.create(targetDom, { 
    value: '', // 初始化值     
    readOnly: false, // 是否只读
    language: 'json', // 语言类型     
    theme: 'vs-dark', // 主题 
})
```

```js
// 初始化编辑器的值 
monacoEditor.setValue(`{"key":"value"}`) 

// 获取件编辑器的值 
monacoEditor.getValue();

// 注销编辑器实例 
monacoEditor.dispose()
```

## 注册主题

## 注册主题

主题的配置创建完成之后，我们可以在 monaco-editor 中定义属于我们的主题了：

```js
import * as monaco from "monaco-editor";
import theme from '../lib/markdownEx-theme.js';

monaco.editor.defineTheme("acrmd", theme);
let mdEditor = monaco.editor.create(containerDom, {
    value: "",
    theme: "acrmd",
    //...
};
```