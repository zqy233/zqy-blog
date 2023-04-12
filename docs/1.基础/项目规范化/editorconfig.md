# EditorConfig

## 什么是[EditorConfig](https://editorconfig.org/)

EditorConfig有助于为在不同编辑器和IDE中处理同一项目的多个开发人员维护一致的编码风格

EditorConfig项目由一个用于定义编码样式的文件格式和一组文本编辑器插件组成，这些插件使编辑器能够读取文件格式并遵守定义的样式

EditorConfig文件很容易阅读，并且可以很好地与版本控制系统配合使用

## EditorConfig文件是什么样子的

`.editorconfig`文件即EditorConfig文件
以下是一个`.editorconfig`文件示例

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

## 属性列表

> https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties

### indent_style

缩进样式

这些值不区分大小写。它们将被核心库降为小写

可能的值

- `tab`
- `space`

### indent_size

缩进大小（以单间距字符为单位）

这些值不区分大小写。它们将被核心库降为小写

可能的值

- 整数
- `tab`

如果indent_size等于tab，则indent_size将设置为tab大小。如果指定了tab_width，则应为tab_width；如果未指定tab_width，则应设置为编辑器设置的tab大小

### tab_width

单个制表符的宽度

可能的值

- 正整数（当indent_size是一个数字时，默认为indent_size）

### end_of_line

行尾文件格式（Unix、DOS、Mac）

这些值不区分大小写。它们将被核心库降为小写

注意：如果您想在不同的操作系统之间使用行结尾，最好不要设置此选项，而是将该任务留给VCS！在未来，我们可能会为这种情况添加像native这样的值（cf [#226](https://github.com/editorconfig/editorconfig/issues/226)）

可能的值

- `lf`
- `crlf`
- `cr`

### charset

文件字符编码（请参阅字符集支持）

这些值不区分大小写。它们将被核心库降为小写

可能的值

- `latin1`
- `utf-8`
- `utf-16be`
- `utf-16le`
- `utf-8-bom`

### trim_trailing_whitespace

表示是否从行尾删除空白

这些值不区分大小写。它们将被核心库降为小写

可能的值

- `true`：删除换行符之前的任何空白字符
- `false`：确保编辑器保留空白字符

### insert_final_newline

表示文件是否应以换行结束

这些值不区分大小写。它们将被核心库降为小写

可能的值

- `true`
- `false`

### max_line_length

在指定的字符数之后强制换行。off可关闭此功能（使用编辑器设置）

可能的值

- 正整数
- `off`

## prettier转换.editorconfig

prettier是前端著名的代码格式化工具，它可以与.editorconfig结合使用

prettier-vscode插件设置`useEditorConfig`为true，或者调用以编程方式调用`prettier.resolveConfig(filePath, { editorconfig: true })`情况下

prettier会转换.editorconfig文件的一些配置属性为prettier相应的配置属性，转换出的配置属性会被prettier配置文件中相应属性覆盖（即优先级低于配置文件），目前，有以下属性支持：

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
{ endOfLine: 'lf', useTabs: false, tabWidth: 8, printWidth: 80 }
```
