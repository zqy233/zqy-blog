# Lerna-Lite

https://blog.cjw.design/blog/frontend/lerna#lerna-%E5%91%BD%E4%BB%A4%E4%BB%8B%E7%BB%8D

## Lerna-Lite是原版Lerna的超轻版

## 开始

让我们首先将 Lerna-Lite CLI 作为项目的开发依赖项安装，然后运行 `init` 命令以开始使用（有关所有选项，请参阅  [init#readme](https://github.com/lerna-lite/lerna-lite/tree/main/packages/init#readme)）。请注意，必须始终安装 CLI，然后继续安装任何其他可选命令（CLI 仅包含 `init` 该命令），有关详细信息，请参阅安装表。

```sh
# 本地或者全局下载Lerna-Lite CLI(`init`是被下载的唯一命令)
$ npm install -g @lerna-lite/cli # pnpm add -g @lerna-lite/cli

# 创建你的单存储库（单存储库是包含多个逻辑项目的存储库） 并且初始化Lerna-Lite
$ mkdir lerna-repo
$ cd lerna-repo
$ lerna init

# 对于npm/yarn (only) workspaces 添加 --use-workspaces
$ lerna init --use-workspaces
```

这将创建一个 `lerna.json` 配置文件和一个`packages`文件夹，因此您的 `packages` 文件夹现在应如下所示：

```sh
lerna-repo/
  packages/
    package-a
  package.json
  lerna.json
```

最后安装您感兴趣的命令（ ， ， `publish` ， `version` ， `run` `exec` ...

```sh
$ npm i @lerna-lite/publish -D
```

## 安装

> Lerna-Lite 是完全模块化的，与Lerna相反，在本地或全局安装 CLI 只会为您提供 `init` 命令。请确保安装您感兴趣的其他命令（见下表）。

如果您不熟悉 Lerna-Lite，您还可以运行 lerna init 命令，该命令将以最少的设置为您创建。 `lerna.json` 如果使用 npm 以外的其他客户端，请确保更新 中的 `npmClient` `lerna.json` 属性（例如： `"npmClient": "yarn"` 或 `"pnpm"` ）。

> 注意 请确保您已创建配置文件 `lerna.json` 并使用固定或 `independent` 模式定义 `version` 属性。如果您缺少其中任何一个，则会引发错误。

## 待完成

感觉 lerna-lite 文档还是不够完全的，一些参数应该还是需要看 lerna 的 文档