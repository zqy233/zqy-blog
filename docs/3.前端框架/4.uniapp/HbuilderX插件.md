# 开发 HbuilderX 插件

## 创建插件项目

1.依次选择文件->新建项目->创建->IDE 插件

## package.json

设置插件相关信息与功能

| key              | 说明               |
| ---------------- | ------------------ |
| activationEvents | 插件激活事件       |
| contributes      | 插件相关功能配置   |
| commands         | 设置插件命令       |
| menus            | 设置右键菜单       |
| keybindings      | 设置插件命令快捷键 |

```json
{
  "id": "zqy-formatAndSave",
  "name": "formatAndSave",
  "description": "format and save",
  "displayName": "formatAndSave",
  "version": "0.0.1",
  "publisher": "zqy",
  "engines": {
    "HBuilderX": "^2.7.0"
  },
  "categories": ["Other"],
  "main": "./extension",
  "activationEvents": ["onCommand:extension.formatAndSave"],
  "contributes": {
    "commands": [
      {
        "command": "extension.formatAndSave",
        "title": "formatAndSave"
      }
    ],
    "menus": {
      "editor/context": [
        {
          "command": "extension.formatAndSave",
          "group": "z_commands",
          "when": "editorTextFocus"
        },
        {
          "group": "z_commands"
        }
      ]
    },
    "keybindings": [
      {
        "command": "extension.formatAndSave",
        "key": "Ctrl+S",
        "when": "editorTextFocus"
      }
    ]
  },
  "extensionDependencies": ["plugin-manager"],
  "dependencies": {}
}
```

## 插件主函数

extension.js

```js
var hx = require('hbuilderx')
//该方法将在插件激活的时候调用
function activate(context) {
  let disposable = hx.commands.registerCommand(
    'extension.formatAndSave',
    async () => {
      await hx.commands.executeCommand('editor.action.format')
      hx.commands.executeCommand('workbench.action.files.save')
    }
  )
  //订阅销毁钩子，插件禁用的时候，自动注销该command。
  context.subscriptions.push(disposable)
}
//该方法将在插件禁用的时候调用（目前是在插件卸载的时候触发）
function deactivate() {}
module.exports = {
  activate,
  deactivate
}
```

## 插件发布

直接压缩插件项目为 zip，然后至官网提交即可

## 本地插件使用

放在 HBuilderx 安装目录下的 plugins 中，卸载的话删除即可

## 获取当前编辑器

```js
let activeEditor = await hx.window.getActiveTextEditor()
```

## 当前编辑器的所有文本

```js
const word = activeEditor.document.getText()
```

## 指定行的文本

```js
// 0为第一行，2为第三行
let lineInfo = activeEditor.document.lineAt(2)
console.log(lineInfo)
// {
//    line:2,
//    text:"123",
//    isLastLine:false
// }
```

## 光标位置

类型：number

```js
console.log(activeEditor.selection.active)
```

## 获取光标所在行的文本

```js
let lineInfo = activeEditor.document.lineFromPosition(
  activeEditor.selection.active
)
console.log(lineInfo)
// {
//    line:2,
//    text:"123",
//    isLastLine:false
// }
```
