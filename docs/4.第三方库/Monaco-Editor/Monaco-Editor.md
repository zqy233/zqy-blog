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

## 在页面上加载Monaco

## 载入自己的Type Definition

需要使用monaco.languages.typescript.javascriptDefaults.addExtraLib
以及
monaco.editor.createModel

提前准备index.d.ts，如果内容小直接塞代码里。
我这里直接把文件放到了public文件下面。

```js
let libUri = 'ts:filename/index.d.ts';
let libSource = (await axios.get("index.d.ts")).data;
monaco.languages.typescript.javascriptDefaults.addExtraLib(
      libSource,
      libUri
  );
monaco.editor.createModel(libSource, 'typescript', monaco.Uri.parse(libUri));


import {} from "echarts/charts.d.ts"

```

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

```
<template>
  <el-button type="primary" @click="run">运行</el-button>
  <div ref="editContainer" class="code-editor"></div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue"
import TsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker"
import EditorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker"
import * as monaco from "monaco-editor"

// @ts-ignore
self.MonacoEnvironment = {
  getWorker(_: string, label: string) {
    if (["typescript", "javascript"].includes(label)) {
      return new TsWorker()
    }
    return new EditorWorker()
  }
}

const props = defineProps<{
  modelValue: string
}>()
const emits = defineEmits<{
  (e: "update:modelValue", b: string): void
  (e: "run"): void
}>()
const run = () => {
  emits("run")
}

// watch(
//   () => props.value,
//   value => {
//     // 防止改变编辑器内容时光标重定向
//     if (value !== monacoEditor?.getValue()) {
//       monacoEditor.setValue(value)
//     }
//   }
// )

const editContainer = ref<null | HTMLElement>(null)
onMounted(() => {
  // 自定义代码补全
  const keywords = ["options"]
  monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: true,
    noSyntaxValidation: false
  })
  monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
    target: monaco.languages.typescript.ScriptTarget.ES2016,
    allowNonTsExtensions: true
  })
  monaco.languages.registerCompletionItemProvider("typescript", {
    provideCompletionItems: () => {
      let suggestions: any[] = []
      keywords.forEach(item => {
        suggestions.push({
          detail: "任何文字提示", // 代码补全右侧文本提示
          label: item, // 代码补全左侧文本
          insertText: item, // 插入编辑器中的补全代码
          kind: monaco.languages.CompletionItemKind.Function // 代码补全最左侧显示的图标
        })
      })
      return {
        suggestions: suggestions
      }
    }
  })
  const monacoEditor = monaco.editor.create(editContainer.value as HTMLElement, {
    value: props.modelValue,
    readOnly: false, // 只读
    language: "typescript", // 语言
    theme: "vs-dark", // 主题，黑暗主题为vs-dark
    selectOnLineNumbers: true, // 选中行数
    automaticLayout: true, // 自动调整布局
    fontSize: 18, //字体大小
    autoIndent: "keep", //自动空行
    folding: true, // 是否启用代码折叠
    scrollBeyondLastLine: false, // 不到最后一行就开始滚动
    wordWrap: "on", // 自动换行
    showUnused: false // 不显示未使用的变量
  })

  // 编辑器内容发生变化时触发
  monacoEditor.onDidChangeModelContent(() => {
    const currenValue = monacoEditor?.getValue() // 获取编辑器内容
    emits("update:modelValue", currenValue) // 传递父组件v-model值
  })
})
</script>
<style>
.code-editor {
  height: 100%;
  /* border: 1px solid skyblue; */
}
</style>

```

## 更新编辑器配置

```js
monacoEditor.updateOptions({readOnly: true});
```

