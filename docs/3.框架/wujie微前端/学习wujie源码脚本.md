## package.json

```json
{
  "name": "wujie-project",
  "version": "0.0.0",
  "description": "极致的微前端框架",
  "private": true,
  "scripts": {
    "start": "lerna run start --parallel",
    "doc": "lerna run docs:dev",
    "clean": "rimraf node_modules **/*/node_modules",
    "test": "lerna run test --scope wujie",
    "commitlint": "commitlint -E COMMIT_EDITMSG_PATH",
    "husky-commitlint": "commitlint -e",
    "prepare": "husky install"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/Tencent/wujie.git"
  },
  "author": "yiludege",
  "license": "MIT",
  "devDependencies": {
    "@commitlint/cli": "^16.2.3",
    "@commitlint/config-conventional": "^16.2.1",
    "@lerna-lite/cli": "^1.11.1",
    "@lerna-lite/run": "^1.11.1",
    "husky": "^7.0.4",
    "lint-staged": "^12.4.1",
    "rimraf": "^3.0.2"
  },
  "dependencies": {}
}
```

## rimraf

删除所有根目录和所有子目录的node_modules

```json
 "clean": "rimraf node_modules **/*/node_modules",
```

## lerna

Lerna 是一个快速、现代的构建系统，用于管理和发布来自同一存储库的多个 JavaScript/TypeScript 包
1、可以管理公共依赖和单独依赖
2、多package相互依赖直接内部link，不必发版
3、可以单独发布和全体发布
4、多包放一个git仓库，也有利于代码管理，如配置统一的代码规范

parallel表示运行所有拥有start脚本的包

```js
"start": "lerna run start --parallel",
```

## Lerna-Lite

 Lerna-Lite是原版Lerna的超轻版

### 为什么要创建这个库/分叉？

Lerna repo 近 2 年无人维护（2022 年初，Lerna 的依赖项真的过时了）

自从Nx背后的公司 Nrwl 接管了 Lerna 的管理权以来，情况不再如此。

- 请注意，Lerna-Lite 分叉是在 Nrwl 接管 Lerna 之前几个月创建的。
- Lerna-Lite 现在尽可能复制 Lerna 的 PR（除了 Nx 特定的代码不会被复制）

### @lerna-lite/cli

lite是精简版的意思

@lerna-lite/cli命令行脚手架工具，默认只有`init`命令，其他命令需要安装库

如使用以下命令需要自行安装对应库

- [lerna publish](https://github.com/lerna-lite/lerna-lite/blob/main/packages/publish/README.md)
- [lerna version](https://github.com/lerna-lite/lerna-lite/blob/main/packages/version/README.md)
- [lerna changed](https://github.com/lerna-lite/lerna-lite/blob/main/packages/changed/README.md)
- [lerna diff](https://github.com/lerna-lite/lerna-lite/blob/main/packages/diff/README.md)
- [lerna exec](https://github.com/lerna-lite/lerna-lite/blob/main/packages/exec/README.md)
- [lerna list](https://github.com/lerna-lite/lerna-lite/blob/main/packages/list/README.md)
- [lerna run](https://github.com/lerna-lite/lerna-lite/blob/main/packages/run/README.md)
- [lerna watch](https://github.com/lerna-lite/lerna-lite/blob/main/packages/watch/README.md)

