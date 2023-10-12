# pnpm

快速、节省磁盘空间的包管理器

## Motivation 项目初衷

### [Saving disk space](https://pnpm.io/motivation#saving-disk-space) 节省磁盘空间

使用 npm 时，如果有 100 个项目使用依赖项，则会在磁盘上保存该依赖项的 100 个副本。使用 pnpm，依赖项将存储在内容可寻址存储中，因此：

1. 如果依赖于不同版本的依赖项，则只会将不同的文件添加到存储中。例如，如果它有 100 个文件，而新版本仅在其中一个文件中发生了更改，则只会将 1 个新文件添加到存储中， `pnpm update` 而不是仅为了单个更改而克隆整个依赖项。
2. 所有文件都保存在磁盘上的一个位置。安装软件包时，其文件将从该位置硬链接，不占用额外的磁盘空间。这允许您跨项目共享相同版本的依赖项。

因此，您可以在磁盘上节省大量与项目和依赖项数量成正比的空间，并且安装速度更快！

### [Boosting installation speed](https://pnpm.io/motivation#boosting-installation-speed) 提高安装速度

PNPM 性能安装分三个阶段进行：

1. 依赖项解析。标识所有必需的依赖项并将其提取到存储。
2. 目录结构计算。 `node_modules` 目录结构是根据依赖项计算的。
3. 链接依赖项。所有剩余的依赖项都将从存储区获取并硬链接到 `node_modules` 。

此方法比解析、获取和写入所有依赖项的传统三阶段安装过程要快得多 `node_modules` 。  

 



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

