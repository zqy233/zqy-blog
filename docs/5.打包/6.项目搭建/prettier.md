# 使用

一般通过以下方式使用prettier

- 使用vscode等代码编辑器的`prettier插件`：搭配快捷键如ctrl+s，保存时自动格式化，配置简单，使用方便，但是缺点是由于团队成员可能使用不同的编辑器，prettier版本、配置不同，从而格式化的风格迥异且难统一。所以这种使用方式个人使用没问题，团队推广不太适合
- 下载`prettier`npm 包，在项目中配置好，统一格式化风格

## npm包方式使用

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

## .prettierrc

prettier的配置文件，例如vscode的prettier插件会优先使用配置文件，如果没有，再使用插件定义的配置

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

