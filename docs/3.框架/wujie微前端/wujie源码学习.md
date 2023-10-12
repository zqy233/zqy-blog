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

### Lerna-Lite

 Lerna-Lite是原版Lerna的超轻版，由个人开发者实现

## 多包运行库lerna

`lerna` 库可用于命令行方式进行多包管理

### 安装

```sh
pnpm i -D @lerna-lite/cli @lerna-lite/run
```

### 配置

#### lerna.json

```json
{
  "packages": ["packages/*"],
  "npmClient": "pnpm",
  "command": {
    "version": {
      "allowBranch": "master"
    },
    "bootstrap": {
      "npmClientArgs": ["--no-package-lock", "--legacy-peer-deps"]
    }
  },
  "version": "0.0.1"
}
```

1. `--no-package-lock`：
   - 这个选项告诉包管理工具不生成或不使用包锁文件。包锁文件通常是 `package-lock.json`（对于 npm）或 `yarn.lock`（对于 Yarn）。
   - 包锁文件用于确保项目的依赖项版本的一致性，并防止出现不可预测的版本差异。它们还包含了关于依赖项的详细信息，如版本号、下载地址等。
   - 如果使用 `--no-package-lock`，包管理工具将不会生成或使用这些锁文件，可能会导致依赖项版本的不一致或不稳定性，但有时也可以加快依赖项的安装过程。
2. `--legacy-peer-deps`：
   - 这个选项用于处理依赖项中的 peer dependency（同级依赖）规则。Peer dependencies 是一种指定依赖包需要与主项目中的某些依赖包共享的情况。
   - 在某些情况下，根据新的规范，包管理工具可能会报告 peer dependency 错误，要求开发者手动满足这些条件。使用 `--legacy-peer-deps` 可以将包管理工具恢复到旧的处理方式，不再严格执行 peer dependency 规则，允许某些不符合规范的情况。
   - 这个选项通常用于解决依赖包之间的不兼容性问题，但它可能会引入一些潜在的风险，因此开发者应该谨慎使用。

#### pnpm-workspace.yaml

```js
packages:
  - "packages/*"
```

### package.json

根目录运行`lerna run start`，将运行所有子包里的`start`命令，从而可以一键启动所有子应用

```sh
 "scripts": {
    "start": "lerna run start --parallel",
    ...
  },
```

