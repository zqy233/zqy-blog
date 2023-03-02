# 使用

一般通过以下方式使用prettier

- 使用vscode等代码编辑器的`prettier插件`：搭配快捷键如ctrl+s，保存时自动格式化，配置简单，使用方便，但是缺点是由于团队成员可能使用不同的编辑器，prettier版本、配置不同，从而格式化的风格迥异且难统一。所以这种使用方式个人使用没问题，团队推广不太适合
- 下载`prettier`npm 包，在项目中配置好，统一格式化风格

## cli方式使用

下载

```sh
npm i -D prettier
```

新建test.js

```js
function uglyCode(){console.log("this is an ugly function!")}
```

使用命令格式化指定文件

```sh
npx prettier --write .\test.js
```

使用命令格式化所有文件

```sh
npx prettier --write .
```

格式化后

```js
function uglyCode() {
  console.log("this is an ugly function!");
}
```

prettier默认不会处理`node_modules`里的文件，如果想忽略其他的文件或目录，可以在项目目录下新建`.prettierignore`文件，表示忽略某些文件或文件夹，具体格式跟`.gitignore`类似

目前的代码格式化都是Prettier根据自己的默认配置帮我们做的，当然也可以通过Prettier的配置项实现自定义的格式化

## .prettierignore

设置prettier格式化忽视哪些文件

### 示例，出自vitepress源码

```sh
*.md
*.vue
dist
pnpm-lock.yaml
cache
```

## prettier配置文件

prettier的配置文件支持很多种格式，vscode-prettier插件会优先使用配置文件，如果没有，再使用插件定义的默认配置

新建一个`.prettierrc`的文件，格式为json，结构如下

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "none",
  "printWidth": 75
}
```

## 结合lint-staged与simple-git-hooks

lint-staged是检测git add . 中暂存区的文件，对检测出的文件执行脚本

simple-git-hooks是git钩子库，对git执行的一些命令，通过对应的hooks钩子触发，执行自定义的脚本程序

pageage.json添加如下，表示在git提交前执行lint-staged，lint-staged又触发prettier，从而进行所有提交文件的格式化

```json
 "simple-git-hooks": {
    "pre-commit": "pnpm lint-staged"
  },  
"lint-staged": {
    "*": [
      "prettier --write --ignore-unknown"
    ]
  }
```

## 个人配置

.prettierrc.yml

```json
semi: true
singleQuote: true
printWidth: 100
trailingComma: all
arrowParens: avoid
bracketSpacing: true
tabWidth: 2
vueIndentScriptAndStyle: false
singleAttributePerLine: true
```

tabWidth tab缩进宽度

vueIndentScriptAndStyle vue文件script和style内的首行是否缩进

singleAttributePerLine 是否开启单属性换行

## stylelint-prettier

将prettier作为stylelint规则运行，并将差异报告为独立的stylelint问题

```sh
pnpm i -D stylelint stylelint-prettier prettier
```

## 搭配eslint

> https://prettier.io/docs/en/integrating-with-linters.html

### eslint-config-prettier

> https://github.com/prettier/eslint-config-prettier

关闭和prettier冲突的eslint规则

```sh
pnpm i -D eslint-config-prettier
```

```json
{
  "extends": [
    "some-other-config-you-use",
    "prettier"
  ]
}
```

### eslint-plugin-prettier

将prettier作为eslint规则运行，并将差异作为单个eslint问题报告
如果所需的格式与prettier的输出不匹配，则应使用其他工具，比如 [prettier-eslint](https://github.com/prettier/prettier-eslint)
安装前请阅读“与过梁集成”。

> https://github.com/prettier/eslint-plugin-prettier

如果您禁用与代码格式相关的所有其他ESLint规则，并且仅启用检测潜在错误的规则，则此插件工作得最好。（如果另一个激活的ESLint规则与prettier的规则不一致，则无法避免lint错误。）您可以使用`  eslint-config-prettier`来禁用所有与格式化相关的ESLin规则。

```sh
pnpm i -D eslint-plugin-prettier
```

eslintrc.json

```json
{
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

### prettier-eslint

> https://github.com/prettier/prettier-eslint

使用prettier格式代码，并且遵循eslint --fix

## api

> https://prettier.io/docs/en/api.html

以编程方式运行Pretier

### `prettier.format(source, options)`

format用于使用prettier格式化文本。`options.parser`必须根据您正在格式化的语言进行设置（请参阅可用解析器列表）。或者，可以为prettier指定`options.filepath`，以从文件扩展名推断解析器。可以提供其他选项来覆盖默认值。

```js
prettier.format("foo ( );", { semi: false, parser: "babel" });
// -> "foo()"
```

### `prettier.check(source [, options])`

检查文件是否已使用Pretier格式化，并返回布尔值。这类似于CLI中的--check或--list不同参数，对于在CI场景中运行Pretier非常有用。

### `prettier.resolveConfig(filePath [, options])`

resolveConfig可用于解析给定源文件的配置，将其路径作为第一个参数传递。配置搜索将从文件路径开始，并继续搜索目录（您可以使用process.cwd（）从当前目录开始搜索）。或者，如果不想搜索，可以直接将配置文件的路径作为options.config传递。将返回一个promise，该promise将解析为：
找到提供配置文件的选项对象。
如果找不到文件，则返回null。
如果解析配置文件时出错，则承诺将被拒绝。

如果options.useCache为false，则将绕过所有缓存。

```js
const text = fs.readFileSync(filePath, "utf8");
prettier.resolveConfig(filePath).then((options) => {
  const formatted = prettier.format(text, options);
});
```

如果options.editorconfig为true，并且项目中有`.editorconfig`文件，Prettier将对其进行解析，并将其转换为相应的prettier配置。此配置将被.prettierrc等覆盖。目前，支持以下editorconfig属性：

- `end_of_line`
- `indent_style`
- `indent_size`/`tab_width`
- `max_line_length`

如果要使用同步版本，请使用更漂亮的.resolveConfig.sync（filePath[，options]）。

### `prettier.formatWithCursor(source [, options])`

formatWithCursor既格式化代码，又将光标位置从未格式化代码转换为格式化代码。这对于编辑器集成非常有用，可以防止代码格式化时光标移动。
应提供cursorOffset选项，以指定光标的位置。此选项不能与rangeStart和rangeEnd一起使用。

```js
prettier.formatWithCursor(" 1", { cursorOffset: 2, parser: "babel" });
// -> { formatted: '1;\n', cursorOffset: 1 }
```

### `prettier.resolveConfigFile([filePath])`

resolveConfigFile可用于查找解析配置时（即调用resolveConfig时）将使用的Pretier配置文件的路径。返回promise，该promise将决定：
配置文件的路径。
如果找不到文件，则返回null。
如果解析配置文件时出错，则promise将被拒绝。
搜索从process.cwd（）或filePath（如果提供）开始。有关解决方案的详细信息，请参阅 [cosmiconfig docs](https://github.com/davidtheclark/cosmiconfig#explorersearch) 

### `prettier.getFileInfo`

编辑器扩展可以使用getFileInfo来决定是否需要格式化特定文件。此方法返回一个promise，它解析为具有以下属性的对象：

```js
{
  ignored: boolean,
  inferredParser: string | null,
}
```



### `prettier.getSupportInfo()`

返回表示prettier支持的选项、解析器、语言和文件类型的对象

<img src="../../imgs/image-20230221115940825.png" alt="image-20230221115940825" />

## 转换editorconfig

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

options添加`editorconfig: true`选项

```js
const prettier = require("prettier");
const path = require("path");

prettier.resolveConfigFile(path.resolve(__dirname)).then((configFile) => {
  prettier.resolveConfig(configFile, { editorconfig: true }).then(async (options) => {
    console.log(options);
  });
});

```

## 使用插件支持其他语言

安装java语言插件，设置.prettierrc.json

```json
{
  "plugins": [
    "prettier-plugin-java"
  ]
}
```

api方式使用prettier，可以正常格式化java

```js
const prettier = require("prettier");
const fs = require("fs");
const path = require("path");

prettier.resolveConfigFile(path.resolve(__dirname)).then((configFile) => {
  prettier.resolveConfig(configFile, { editorconfig: true }).then(async (options) => {
    console.log(options);
    fs.readFile("./test.java", "utf-8", async (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const text = prettier.format(data, {
          filepath: "./test.java",
          ...options
        });
      }
    });
  });
});

```

## 判断文件是否被ignore

指定ignorePath参数为.prettierignore文件路径

```js
prettier.getFileInfo(path.resolve(__dirname, "test.vue"), {
  ignorePath: path.resolve(__dirname, ".prettierignore")
}).then((info) => {
  console.log(info);
})
```
