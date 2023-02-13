# package.json

创建package.json

```sh
# 使用输入的方式初始化配置package.json
npm init
# 使用默认参数创建package.json文件
npm init --yes
# 上方简写
npm init -y
```

## files

这个不是必选项, 也并不常见, 但是很重要, 因为有配置这个信息会显得非常专业

**files**是一个数组, 它描述了你 `npm publish`的时候推送到**npm**服务器的文件列表,支持目录和通配 比如

```json
"files": [
    "LICENSE",
    "History.md",
    "Readme.md",
    "index.js",
    "lib/"
  ],
```

反过来, 你可以通过一个 `.npmignore` 文件来排除一些文件, 防止大量的垃圾文件推送到**npm**, 规则上和你用的`gitignore`是一样的.

> Tips
> 如果你的项目下有 **.gitignore** 文件, 那么它也能充当**.npmignore**的功能.
> 这意味着, 如果没有特别的需求, 一个**.gitignore**就行了.

## packageManager

定义处理当前项目时预期使用的包管理器。该领域目前处于试验阶段，应选择使用；查看https://nodejs.org/api/corepack.html

```json
"packageManager": "pnpm@7.26.1",
```

## pnpm

pnpm忽略下载依赖包丢失的警告

```json
 "pnpm": {
    "peerDependencyRules": {
      "ignoreMissing": [
        "@algolia/client-search"
      ]
    }
  },
```

## simple-git-hooks

git钩子，例如如下示例、表示commit前会先调用`lint-staged`

```json
  "simple-git-hooks": {
    "pre-commit": "pnpm lint-staged"
  },
```

## lint-staged

搭配`simple-git-hooks`，所有文件使用prettier进行格式化

```json
 "lint-staged": {
    "*": [
      "prettier --write --ignore-unknown"
    ]
  }
```

## types

将types属性设置为指向绑定的声明文件

```json
 "types": "types/index.d.ts",
```

