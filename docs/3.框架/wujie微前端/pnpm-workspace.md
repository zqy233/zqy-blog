> https://zhuanlan.zhihu.com/p/373935751

## monorepo 是什么

monorepo 是把多个项目的所有代码放到一个 git 仓库中进行管理，多个项目中会有共享的代码则可以分包引用。整个项目就是有 root 管理的 dependencies 加上多个 packages，每个 package 也可以在自己的作用域引入自己的 dependencies

项目结构如下：

```
├── node_modules
├── package.json
├── packages
│   ├── ui
│   ├── utils
│   └── web
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── readme.md
└── tsconfig.json
```

packages 文件夹中的就是原本每个独立的项目(下文称之为 package )了，现在放在一起用 workspace 去管理。最外层路径称之为 root。在 root package.json 中的 deps 是所有子 package 共用的

## pnpm 是什么

pnpm 是新一代 node 包管理器。它由 npm/yarn 衍生而来，但却解决了 npm/yarn 内部潜在的 bug，并且极大了地优化了性能，扩展了使用场景

pnpm 相比 yarn，npm，yarn 安装包更快速，对包的依赖管理更偏平，对磁盘占用也有优势

## 为什么要使用 monorepo

使用 monorepo 可以把原本一个项目的多个模块拆分成多个 packages，在 packages 之间相互引用，也可以单独发布成包，极大地解决了项目之间代码无法重用的痛点。在项目打包或者编译操作时也可重用一套配置，通吃所有 packages。

