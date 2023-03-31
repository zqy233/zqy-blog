# [.editorconfig](https://editorconfig.org/)

> EditorConfig项目由一个用于定义编码样式的文件格式和一组文本编辑器插件组成，这些插件使编辑器能够读取文件格式并遵守定义的样式
>
> EditorConfig有助于为跨不同编辑器和IDE在同一项目中工作的多个开发人员维护一致的编码样式
>
> EditorConfig文件易于阅读，并且与版本控制系统配合良好
>

## .editorconfig配置示例

出自vue3官方文档源码

```sh
[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
```

## prettier转换.editorconfig

> prettier-vscode插件设置`useEditorConfig`为true
>
> 或者调用prettier api`prettier.resolveConfig(configFile, { editorconfig: true })`情况下
>
> prettier会转换EditorConfig的一些配置属性为prettier相应的配置属性

.editorconfig配置

```json
[*]
end_of_line = lf
indent_style = space
indent_size = 8
max_line_length = 80
```

会被prettier转换成

```js
{ useTabs: false, tabWidth: 8, printWidth: 80, endOfLine: 'lf' }
```







