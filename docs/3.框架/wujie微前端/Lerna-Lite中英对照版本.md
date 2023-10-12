# Lerna-Lite Lerna-精简版

Lerna-Lite is a super light version of the original [Lerna](https://github.com/lerna/lerna) 

Lerna-Lite是原版Lerna的超轻版

## Why create this lib/fork? 为什么要创建这个库/分叉？

Below are the main reasons as to why this fork was created:
以下是创建此分叉的主要原因：

1. Lerna repo was unmaintained for nearly 2 years (in early 2022, Lerna's dependencies were really out of date)
   Lerna repo 近 2 年无人维护（2022 年初，Lerna 的依赖项真的过时了）

   - this is no longer the case since Nrwl, the company behind Nx, took over stewardship of Lerna
     自从Nx背后的公司Nrwl接管了Lerna的管理权以来，情况不再如此。
     - please note that Lerna-Lite fork was created couple months **before** Nrwl took over Lerna
       请注意，Lerna-Lite 分叉是在 Nrwl 接管 Lerna 之前几个月创建的。
     - we now replicate Lerna's PRs when possible (except Nx specific code will not be replicated)
       我们现在尽可能复制 Lerna 的 PR（除了 Nx 特定的代码不会被复制）

2. A desire to create a smaller and a lighter alternative compared to the original all-in-one Lerna tool
   与原始的多合一 Lerna 工具相比，希望创建一个更小、更轻的替代品

   - Lerna-Lite is entirely modular, all commands are totally optional (install only what you really need).
     Lerna-Lite是完全模块化的，所有命令都是完全可选的（只安装你真正需要的命令）。

3. Rewrote the lib in TypeScript and build the project as ESM since v2.0 (you can still use it in a CJS environment)
   在 TypeScript 中重写了库，并从 v2.0 开始将项目构建为 ESM（您仍然可以在 CJS 环境中使用它）

4. Replicated a few opened PRs from Lerna and add a few unique features into Lerna-Lite (see number 6 below)
   从 Lerna 复制了一些打开的 PR，并在 Lerna-Lite 中添加了一些独特的功能（见下面的数字 6）

5. Lerna is becoming another Nx branded product (Lerna >=5.5 now requires [Nx](https://nx.dev/) while not required in Lerna-Lite)
   Lerna正在成为另一个Nx品牌的产品（Lerna >=5.5现在需要Nx，而在Lerna-Lite中不需要）

   - if you already use Nx then it's probably better to use Lerna, but if you are not then Lerna-Lite is preferred
     如果您已经在使用 Nx，那么最好使用 Lerna，但如果您不是，那么 Lerna-Lite 是首选
   - if you use other tools like TurboRepo and install Lerna (original) you end up downloading 2 similar tools
     如果您使用其他工具（如 TurboRepo）并安装 Lerna（原始），您最终会下载 2 个类似的工具
   - even TypeScript is now required in Lerna >=6 (even for a JS monorepo) however not required in Lerna-Lite
     甚至 TypeScript 现在在 Lerna 中也是必需的 >=6（即使是 JS monorepo），但在 Lerna-Lite 中不需要

6. Added a few unique features that are available currently only in Lerna-Lite:
   添加了一些目前仅在 Lerna-Lite 中可用的独特功能：

   - [`workspace:` protocol support](https://github.com/lerna-lite/lerna-lite/tree/main/packages/version#workspace-protocol) (*) Lerna added support for that too six months later in v6
     `workspace:` 协议支持 （*） 六个月后，Lerna 在 v6 中也添加了对此的支持

   - [--dry-run](https://github.com/lerna-lite/lerna-lite/tree/main/packages/version#--dry-run) to preview version/publish and changelogs locally
     --dry-run在本地预览版本/发布和更改日志

   - [lerna version --changelog-header-message "msg"](https://github.com/lerna-lite/lerna-lite/tree/main/packages/version#--changelog-header-message-msg) it could be used to add sponsor badges in changelogs
     Lerna 版本 --changelog-header-message “msg” 它可用于在变更日志中添加发起人徽章

   - [lerna version --changelog-include-commits-client-login](https://github.com/lerna-lite/lerna-lite/tree/main/packages/version#--changelog-include-commits-client-login-msg) to add PR contributors
     lerna 版本 --changelog-include-commits-client-login 以添加 PR 贡献者

   - [lerna version --allow-peer-dependencies-update](https://github.com/lerna-lite/lerna-lite/tree/main/packages/version#--allow-peer-dependencies-update) if you want your peer deps to also be updated
     lerna 版本 --allow-peer-dependencies-update 如果你希望你的对等部门也被更新

   - [lerna version --skip-bump-only-releases](https://github.com/lerna-lite/lerna-lite/tree/main/packages/version#--skip-bump-only-releases) to avoid cluttering your GitHub releases in `independent` mode
     lerna 版本 --skip-bump-only-release，以避免在模式中 `independent` 混乱您的 GitHub 发布

   - lerna publish --remove-package-fields

     (remove certain fields from `package.json` before publishing)
     lerna publish --remove-package-fields （在发布之前删除 `package.json` 某些字段）

     - ie: Lerna-Lite itself uses it to remove `scripts` and `devDependencies`
       即：Lerna-Lite 本身使用它来删除 `scripts` 和 `devDependencies`

On a final note, the best feature of Lerna-Lite (versus Lerna) has to be its modularity. A large portion of the users are only interested in version/publish commands but on the other hand, a small minority are only interested in other commands like run/exec. Lerna-Lite offers this flexibility by allowing the user to install only the command(s) that he/she is interested in using (see [installation](https://github.com/lerna-lite/lerna-lite#cli-installation) below). Lastly from the list above, the number 5 could be a concern for some users who are not interested to use Nx (like me) and still want to have the power of Lerna but keep their download to the bare minimum.
最后，Lerna-Lite（与Lerna相比）的最佳功能必须是其模块化。很大一部分用户只对版本/发布命令感兴趣，但另一方面，少数用户只对其他命令感兴趣，如 run/exec。Lerna-Lite 通过允许用户仅安装他/她感兴趣的命令来提供这种灵活性（请参阅下面的安装）。最后，从上面的列表中，数字 5 可能是一些对使用 Nx 不感兴趣的用户（像我一样）并且仍然希望拥有 Lerna 的强大功能但将下载保持在最低限度的用户的关注点。

### This lib will help you with 这个库将帮助您

> **Note** all commands are optional in Lerna-Lite, refer to the [Installation table](https://github.com/lerna-lite/lerna-lite#separate--optional-installs) for more info
> 请注意，所有命令在 Lerna-Lite 中都是可选的，有关详细信息，请参阅安装表

#### [Version](https://github.com/lerna-lite/lerna-lite/tree/main/packages/version) and [Publish](https://github.com/lerna-lite/lerna-lite/tree/main/packages/publish) commands 版本控制和发布命令

- Automate the creation of new Versions ( `independent` or fixed version) of all your workspace packages.
  自动创建所有工作区包的新版本（ `independent` 或固定版本）。
  - it will automatically Commit/Tag your new Version & create new GitHub/GitLab Release (when enabled).
    它将自动提交/标记您的新版本并创建新的GitHub / GitLab版本（启用时）。
- Automate, when enabled, the creation of Changelogs for all your packages by reading all [Conventional Commits](https://www.conventionalcommits.org/).
  启用后，通过读取所有常规提交，自动为所有包创建更改日志。
- Automate, the repository Publishing of your new version(s) for all your packages (on NPM or other platforms).
  自动化存储库发布所有软件包的新版本（在 NPM 或其他平台上）。

#### Other optional commands 其他可选命令

- [Changed](https://github.com/lerna-lite/lerna-lite/tree/main/packages/changed#readme) command, when installed, will list all local packages that have changed since the last tagged release
  Changed 命令在安装后将列出自上次标记版本以来已更改的所有本地软件包
- [Diff](https://github.com/lerna-lite/lerna-lite/tree/main/packages/diff#readme) command, when installed, will show git diff of all packages or a single package since the last release
  Diff 命令在安装后，将显示自上一版本以来所有软件包或单个软件包的 git diff
- [Exec](https://github.com/lerna-lite/lerna-lite/tree/main/packages/exec#readme) command, when installed, will help you execute shell commands in parallel and in topological order.
  Exec 命令在安装后，将帮助您并行和按拓扑顺序执行 shell 命令。
- [List](https://github.com/lerna-lite/lerna-lite/tree/main/packages/list#readme) command, when installed, will list all workspace local packages
  列表命令，安装后，将列出所有工作区本地包
- [Run](https://github.com/lerna-lite/lerna-lite/tree/main/packages/run#readme) command, when installed, will help you run npm script in parallel and in topological order.
  运行命令，安装后，将帮助您并行和拓扑顺序运行 npm 脚本。
- [Watch](https://github.com/lerna-lite/lerna-lite/tree/main/packages/watch#readme) command, when installed, will watch for changes within all packages and execute certain commands
  watch 命令在安装后将监视所有包中的更改并执行某些命令

##  Lerna-Lite 支持 pnpm/yarn `workspace:` 协议

### This lib will help you with 这个库将帮助您

> **Note** all commands are optional in Lerna-Lite, refer to the [Installation table](https://github.com/lerna-lite/lerna-lite#separate--optional-installs) for more info
> 请注意，所有命令在 Lerna-Lite 中都是可选的，有关详细信息，请参阅安装表

#### [Version](https://github.com/lerna-lite/lerna-lite/tree/main/packages/version) and [Publish](https://github.com/lerna-lite/lerna-lite/tree/main/packages/publish) commands 版本控制和发布命令

- Automate the creation of new Versions ( `independent` or fixed version) of all your workspace packages.
  自动创建所有工作区包的新版本（ `independent` 或固定版本）。
  - it will automatically Commit/Tag your new Version & create new GitHub/GitLab Release (when enabled).
    它将自动提交/标记您的新版本并创建新的GitHub / GitLab版本（启用时）。
- Automate, when enabled, the creation of Changelogs for all your packages by reading all [Conventional Commits](https://www.conventionalcommits.org/).
  启用后，通过读取所有常规提交，自动为所有包创建更改日志。
- Automate, the repository Publishing of your new version(s) for all your packages (on NPM or other platforms).
  自动化存储库发布所有软件包的新版本（在 NPM 或其他平台上）。

#### Other optional commands 其他可选命令

- [Changed](https://github.com/lerna-lite/lerna-lite/tree/main/packages/changed#readme) command, when installed, will list all local packages that have changed since the last tagged release
  Changed 命令在安装后将列出自上次标记版本以来已更改的所有本地软件包
- [Diff](https://github.com/lerna-lite/lerna-lite/tree/main/packages/diff#readme) command, when installed, will show git diff of all packages or a single package since the last release
  Diff 命令在安装后，将显示自上一版本以来所有软件包或单个软件包的 git diff
- [Exec](https://github.com/lerna-lite/lerna-lite/tree/main/packages/exec#readme) command, when installed, will help you execute shell commands in parallel and in topological order.
  Exec 命令在安装后，将帮助您并行和按拓扑顺序执行 shell 命令。
- [List](https://github.com/lerna-lite/lerna-lite/tree/main/packages/list#readme) command, when installed, will list all workspace local packages
  列表命令，安装后，将列出所有工作区本地包
- [Run](https://github.com/lerna-lite/lerna-lite/tree/main/packages/run#readme) command, when installed, will help you run npm script in parallel and in topological order.
  运行命令，安装后，将帮助您并行和拓扑顺序运行 npm 脚本。
- [Watch](https://github.com/lerna-lite/lerna-lite/tree/main/packages/watch#readme) command, when installed, will watch for changes within all packages and execute certain commands
  watch 命令在安装后将监视所有包中的更改并执行某些命令

## getting Started 开始

Let's start by installing Lerna-Lite CLI as a dev dependency to your project and then run the `init` command to get started (see [init#readme](https://github.com/lerna-lite/lerna-lite/tree/main/packages/init#readme) for all options). Note that the CLI must be installed at all time, then proceed by installing any other optional commands (the CLI is only including the `init` command), refer to the **[Installation table](https://github.com/lerna-lite/lerna-lite#separate--optional-installs)** for more info.
让我们首先将 Lerna-Lite CLI 作为项目的开发依赖项安装，然后运行 `init` 命令以开始使用（有关所有选项，请参阅 [init#readme](https://github.com/lerna-lite/lerna-lite/tree/main/packages/init#readme)）。请注意，必须始终安装 CLI，然后继续安装任何其他可选命令（CLI 仅包含 `init` 该命令），有关详细信息，请参阅安装表。

```sh
# install Lerna-Lite CLI locally or globally (`init` is the only command installed)
$ npm install -g @lerna-lite/cli # pnpm add -g @lerna-lite/cli

# create your monorepo and initialize lerna-lite
$ mkdir lerna-repo
$ cd lerna-repo
$ lerna init

# for npm/yarn (only) workspaces add --use-workspaces
$ lerna init --use-workspaces
```

This will create a `lerna.json` configuration file as well as a `packages` folder, so your folder should now look like this:
这将创建一个 `lerna.json` 配置文件和一个文件夹，因此您的 `packages` 文件夹现在应如下所示：

```
lerna-repo/
  packages/
    package-a
  package.json
  lerna.json
```

Note that `package-a` will not be created, it is only shown here to help clarify the structure. For more info and full details about the `lerna.json` file, you can read the [lerna.json](https://github.com/lerna-lite/lerna-lite/wiki/lerna.json) Wiki. Also note that you can optionally add comments to your `lerna.json` config file since it is also able to parse JSON5 file format.
请注意，不会创建， `package-a` 此处显示它只是为了帮助阐明结构。有关 `lerna.json` 该文件的更多信息和完整详细信息，您可以阅读lerna.json Wiki。另请注意，您可以选择向 `lerna.json` 配置文件添加注释，因为它也可以解析 JSON5 文件格式。

Finally install the commands that are of interest to you (`publish`, `version`, `run`, `exec`, ...)
最后安装您感兴趣的命令（ ， ， `publish` ， `version` ， `run` `exec` ...

```
$ npm i @lerna-lite/publish -D
```

## Installation 安装

> Lerna-Lite is entirely modular, as opposed to Lerna, and installing the CLI locally or globally will only provide you the `init` command. Please make sure to install other commands that you are interested in (see table below).
> Lerna-Lite 是完全模块化的，与Lerna相反，在本地或全局安装 CLI 只会为您提供 `init` 命令。请确保安装您感兴趣的其他命令（见下表）。

If you are new to Lerna-Lite, you could also run the [lerna init](https://github.com/lerna-lite/lerna-lite/tree/main/packages/init#readme) command which will create the `lerna.json` for you with a minimal setup. If you are using a different client other than npm, then make sure to update the `npmClient` property in `lerna.json` (for example: `"npmClient": "yarn"` or `"pnpm"`).
如果您不熟悉 Lerna-Lite，您还可以运行 lerna init 命令，该命令将以最少的设置为您创建。 `lerna.json` 如果使用 npm 以外的其他客户端，请确保更新 中的 `npmClient` `lerna.json` 属性（例如： `"npmClient": "yarn"` 或 `"pnpm"` ）。

> **Note** please make sure that you have a `lerna.json` config file created and a `version` property defined with either a fixed or `independent` mode. An error will be thrown if you're missing any of them.
> 注意 请确保您已创建配置文件 `lerna.json` 并使用固定或 `independent` 模式定义 `version` 属性。如果您缺少其中任何一个，则会引发错误。

### JSON Schema JSON 架构

You can add the `$schema` property into your `lerna.json` to take advantage of Lerna-Lite [JSON Schema](https://json-schema.org/) (`lerna init` can help setting it up for you). This will help with the developer experience, users will be able to see what properties are valid with their types and a brief description of what each option does (descriptions are pulled from their associated lerna command options documentation).
您可以将属性添加到您的 `$schema` `lerna.json` 属性中以利用 Lerna-Lite JSON 模式（ `lerna init` 可以帮助您设置它）。这将有助于开发人员体验，用户将能够看到哪些属性对其类型有效，以及每个选项的简要说明（描述从其关联的 lerna 命令选项文档中提取）。

##### `lerna.json`

```
{
  "$schema": "node_modules/@lerna-lite/cli/schemas/lerna-schema.json",
  // ...

  // or from a CDN
  "$schema": "https://raw.githubusercontent.com/lerna-lite/lerna-lite/main/packages/cli/schemas/lerna-schema.json",
}
```

### Separate / Optional Installs 单独/可选安装

| Command 命令                                                 | Install 安装                   | Description 描述                                             |
| ------------------------------------------------------------ | ------------------------------ | ------------------------------------------------------------ |
| ☁️ [publish](https://github.com/lerna-lite/lerna-lite/tree/main/packages/publish#readme) ☁️ 发布 | `npm i @lerna-lite/publish -D` | publish each workspace package 发布每个工作区包              |
| 📑 [version](https://github.com/lerna-lite/lerna-lite/tree/main/packages/version#readme) 📑 版本 | `npm i @lerna-lite/version -D` | create new version for each workspace package 为每个工作区包创建新版本 |
| 🕜 [changed](https://github.com/lerna-lite/lerna-lite/tree/main/packages/changed#readme) 🕜 改变 | `npm i @lerna-lite/changed -D` | list local packages changed since last release 列出自上一版本以来更改的本地包 |
| 🌓 [diff](https://github.com/lerna-lite/lerna-lite/tree/main/packages/diff#readme) 🌓 差异 | `npm i @lerna-lite/diff -D`    | git diff all packages since the last release git 差异自上一版本以来的所有软件包 |
| 👷 [exec](https://github.com/lerna-lite/lerna-lite/tree/main/packages/exec#readme) 👷 执行 | `npm i @lerna-lite/exec -D`    | execute an command in each workspace package 在每个工作区包中执行命令 |
| 📖 [list](https://github.com/lerna-lite/lerna-lite/tree/main/packages/list#readme) 📖 列表 | `npm i @lerna-lite/list -D`    | list local packages 列出本地包                               |
| 🏃 [run](https://github.com/lerna-lite/lerna-lite/tree/main/packages/run#readme) 🏃 跑 | `npm i @lerna-lite/run -D`     | run npm script in each workspace package 在每个工作区包中运行 npm 脚本 |
| 👓 [watch](https://github.com/lerna-lite/lerna-lite/tree/main/packages/watch#readme) 👓 看 | `npm i @lerna-lite/watch -D`   | watch for changes & execute commands when fired 触发时观察更改并执行命令 |

> **Note** since the `publish` package depends on the `version` package, you could simply install `@lerna-lite/publish` to automatically gain access to both commands.
> 请注意， `publish` 由于包依赖于 `version` 包，因此您只需安装 `@lerna-lite/publish` 即可自动访问这两个命令。

### Usage 用法

Add custom NPM scripts or simply run the commands in your shell with the Lerna-Lite CLI, you can see below some very basic script samples.
添加自定义 NPM 脚本或简单地使用 Lerna-Lite CLI 在 shell 中运行命令，您可以在下面看到一些非常基本的脚本示例。

```
// package.json / npm scripts
"scripts": {
  "new-version": "lerna version",
  "new-publish": "lerna publish from-package",
  "preview:new-version": "lerna version --dry-run",
  "run-tests": "lerna run test",
}
```



### Migration for existing [Lerna](https://github.com/lerna/lerna) users 现有 Lerna 用户的迁移

Migrating from Lerna, should be fairly easy to just replace Lerna with Lerna-Lite in your dependencies, then install the commands that you are interested in and that's about it. The CLI commands and options are the same, except that all commands are optional installs (that is the biggest difference with Lerna). Take a look at the steps shown below:
从 Lerna 迁移应该相当容易，只需在您的依赖项中将 Lerna 替换为 Lerna-Lite，然后安装您感兴趣的命令，仅此而已。CLI 命令和选项是相同的，除了所有命令都是可选安装（这是与 Lerna 的最大区别）。看看下面显示的步骤：

> **Note** as opposed to Lerna v7 and higher, the `useWorkspace` is **not** enabled by default in Lerna-Lite and we still recommend to use either `useWorkspaces` for Yarn/NPM or use the default `packages` in `lerna.json` for pnpm users. The `useWorkspaces` has some drawback since some of the packages could be unrelated to the project releases (ie: website, examples) and for this use case the `packages/*` defined in `lerna.json` could be better (i.e. [Jest](https://github.com/facebook/jest) uses this approach).
> 请注意，与 Lerna v7 及更高版本相反，在 Lerna-Lite 中默认不启用，我们仍然建议对 Yarn/NPM 使用， `useWorkspace` 或者对 pnpm 用户 `useWorkspaces` `lerna.json` 使用默认值 `packages` 。它 `useWorkspaces` 有一些缺点，因为某些包可能与项目发布无关（即：网站，示例），并且对于此用例， `packages/*` 定义的内容 `lerna.json` 可能会更好（即Jest使用此方法）。

1. remove Lerna from your local & global dependencies
   从本地和全局依赖项中删除 Lerna

```
npm uninstall lerna      # OR yarn remove lerna -W
npm uninstall -g lerna   # OR yarn global remove lerna
```



1. install Lerna-Lite CLI which will provide you, and only, the `init` command
   安装 Lerna-Lite CLI，它将为您提供并且仅提供 `init` 命令

```
# Lerna CLI (includes `init`)
npm install @lerna-lite/cli -D
```



1. finally install any of the optional Lerna-Lite command(s) that you wish to use (`changed`, `diff`, `exec`, `list`, `run`, `publish`, `version` and/or `watch`) *refer to [installation](https://github.com/lerna-lite/lerna-lite#installation) table above*
   最后安装任何您希望使用的可选 Lerna-Lite 命令（ `changed` `diff` 、、 `exec` 、 `list` `run` `publish` `version` 和/或 `watch` ）请参阅上面的安装表

```
# install any of the optional commands (refer to installation table)
npm install @lerna-lite/publish -D
```



1. review your `lerna.json` config file and remove any unrelated command options, for example `bootstrap` does not exist in Lerna-Lite so there's no need to keep that config
   查看您的 `lerna.json` 配置文件并删除任何不相关的命令选项，例如 `bootstrap` Lerna-Lite 中不存在，因此无需保留该配置

```
{
    "npmClient": "yarn",
    "command": {
        "version": {
            "conventionalCommits": true
        },
-       "bootstrap": {
-           "npmClientArgs": ["--no-package-lock"]
-       }
    }
}
```



> **Note** after publishing your next release with conventional-changelog, you might see a lot of diff changes across your `changelog.md` files after switching to Lerna-Lite and that is totally expected since Lerna-Lite has code in place to remove empty lines that were added by Lerna for no reason.
> 请注意，在使用常规更改日志发布下一个版本后，切换到 Lerna-Lite 后，您可能会在 `changelog.md` 文件中看到很多差异更改，这完全是意料之中的，因为 Lerna-Lite 具有适当的代码来删除 Lerna 无缘无故添加的空行。

## Lerna-Lite Full List of Packages Lerna-Lite 软件包的完整列表

| Package Name 包名称                                          | Version 版本                                                 | Description 描述                                             | Changes 变化                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [@lerna-lite/cli](https://github.com/lerna-lite/lerna-lite/tree/main/packages/cli) | [![npm](https://camo.githubusercontent.com/451ef97bf0a1243b7ae9da55082d67a9aad848ecc9c86cb89292a17043f2030d/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406c65726e612d6c6974652f636c692e737667)](https://www.npmjs.com/package/@lerna-lite/cli) | Lerna-Lite CLI required to execute any command 执行任何命令所需的 Lerna-Lite CLI | [changelog 更新日志](https://github.com/lerna-lite/lerna-lite/blob/main/packages/cli/CHANGELOG.md) |
| [@lerna-lite/core](https://github.com/lerna-lite/lerna-lite/tree/main/packages/core) | [![npm](https://camo.githubusercontent.com/7f8482ef4d2b287dc089ef39bdea78e2c5896d6c0769b45f546673b25cbcd998/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406c65726e612d6c6974652f636f72652e737667)](https://www.npmjs.com/package/@lerna-lite/core) | Lerna-Lite core & shared methods (internal use) Lerna-Lite 核心和共享方法（内部使用） | [changelog 更新日志](https://github.com/lerna-lite/lerna-lite/blob/main/packages/core/CHANGELOG.md) |
| [@lerna-lite/init](https://github.com/lerna-lite/lerna-lite/tree/main/packages/init) | [![npm](https://camo.githubusercontent.com/5d0099667d224c897edf3c6f0439c516ecc94a82debc0ab24d35ed302618f89d/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406c65726e612d6c6974652f696e69742e737667)](https://www.npmjs.com/package/@lerna-lite/init) | Setup your monorepo to use Lerna-Lite 设置您的单存储库以使用 Lerna-Lite | [changelog 更新日志](https://github.com/lerna-lite/lerna-lite/blob/main/packages/init/CHANGELOG.md) |
| [@lerna-lite/publish](https://github.com/lerna-lite/lerna-lite/tree/main/packages/publish) | [![npm](https://camo.githubusercontent.com/bfe574ed02d4b3d586f4695a03cb0934ee69e6fc75fd09741e4a825a06e31d06/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406c65726e612d6c6974652f7075626c6973682e737667)](https://www.npmjs.com/package/@lerna-lite/publish) | Publish packages in the current workspace 在当前工作区中发布包 | [changelog 更新日志](https://github.com/lerna-lite/lerna-lite/blob/main/packages/publish/CHANGELOG.md) |
| [@lerna-lite/version](https://github.com/lerna-lite/lerna-lite/tree/main/packages/version) | [![npm](https://camo.githubusercontent.com/71eb9f1005563b9e0a7f883433db555a7693d40f11709a186b66ff8b329c41fc/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406c65726e612d6c6974652f76657273696f6e2e737667)](https://www.npmjs.com/package/@lerna-lite/version) | Bump Version & write Changelogs 凹凸版本和写入更改日志       | [changelog 更新日志](https://github.com/lerna-lite/lerna-lite/blob/main/packages/version/CHANGELOG.md) |
| [@lerna-lite/exec](https://github.com/lerna-lite/lerna-lite/tree/main/packages/exec) | [![npm](https://camo.githubusercontent.com/ff2fc55e1427ed1b7d6dfda52ce05ce968a63a9b4a2fa2c195b1a36c49c77ca0/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406c65726e612d6c6974652f657865632e737667)](https://www.npmjs.com/package/@lerna-lite/exec) | Execute shell command in current workspace 在当前工作区中执行 shell 命令 | [changelog 更新日志](https://github.com/lerna-lite/lerna-lite/blob/main/packages/exec/CHANGELOG.md) |
| [@lerna-lite/changed](https://github.com/lerna-lite/lerna-lite/tree/main/packages/changed) | [![npm](https://camo.githubusercontent.com/937d3071122f11c6709b6cb01f50fd039312ddcd8db2b128bfe0317c6aa00820/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406c65726e612d6c6974652f6368616e6765642e737667)](https://www.npmjs.com/package/@lerna-lite/changed) | List local packages that changed since last release 列出自上次发布以来更改的本地包 | [changelog 更新日志](https://github.com/lerna-lite/lerna-lite/blob/main/packages/changed/CHANGELOG.md) |
| [@lerna-lite/diff](https://github.com/lerna-lite/lerna-lite/tree/main/packages/diff) | [![npm](https://camo.githubusercontent.com/97df5c9fca992e3d0e7d035e972fee8b53d07fadb1d960663015966fd7a5674d/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406c65726e612d6c6974652f646966662e737667)](https://www.npmjs.com/package/@lerna-lite/diff) | Diff all packages or a single package since last release 比较自上一版本以来的所有包或单个包 | [changelog 更新日志](https://github.com/lerna-lite/lerna-lite/blob/main/packages/diff/CHANGELOG.md) |
| [@lerna-lite/list](https://github.com/lerna-lite/lerna-lite/tree/main/packages/list) | [![npm](https://camo.githubusercontent.com/8ebf7a43112f276338c06a78247393d12f3219aa17e7f7abfe23a334df9f4741/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406c65726e612d6c6974652f6c6973742e737667)](https://www.npmjs.com/package/@lerna-lite/list) | List local packages 列出本地包                               | [changelog 更新日志](https://github.com/lerna-lite/lerna-lite/blob/main/packages/list/CHANGELOG.md) |
| [@lerna-lite/listable](https://github.com/lerna-lite/lerna-lite/tree/main/packages/listable) | [![npm](https://camo.githubusercontent.com/645ed651d8764ac10f960fba2c23f35f469da9a4daad6b2f3fd5a3e8e106666b/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406c65726e612d6c6974652f6c69737461626c652e737667)](https://www.npmjs.com/package/@lerna-lite/listable) | Listable utils used by `list` and `changed` commands (internal use) 可 `list` 列出的实用程序和 `changed` 命令（内部使用） | [changelog 更新日志](https://github.com/lerna-lite/lerna-lite/blob/main/packages/listable/CHANGELOG.md) |
| [@lerna-lite/filter-packages](https://github.com/lerna-lite/lerna-lite/tree/main/packages/filter-packages) | [![npm](https://camo.githubusercontent.com/3877d97dad87d06c8ee46bd503175efdabc603775ed1f7a192e5ce5cdf32ce6a/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406c65726e612d6c6974652f66696c7465722d7061636b616765732e737667)](https://www.npmjs.com/package/@lerna-lite/filter-packages) | Lerna-Lite filtering package utils used by optional commands (internal use) 可选命令使用的 Lerna-Lite 过滤包实用程序（内部使用） | [changelog 更新日志](https://github.com/lerna-lite/lerna-lite/blob/main/packages/filter-packages/CHANGELOG.md) |
| [@lerna-lite/profiler](https://github.com/lerna-lite/lerna-lite/tree/main/packages/profiler) | [![npm](https://camo.githubusercontent.com/f93051630126793cb763abc30941e4a35a029b64a3e9f9de0253b837b4bd14d7/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406c65726e612d6c6974652f70726f66696c65722e737667)](https://www.npmjs.com/package/@lerna-lite/profiler) | Lerna-Lite Profiler used by some optional commands (internal use) Lerna-Lite Profiler 由一些可选命令使用（内部使用） | [changelog 更新日志](https://github.com/lerna-lite/lerna-lite/blob/main/packages/profiler/CHANGELOG.md) |
| [@lerna-lite/run](https://github.com/lerna-lite/lerna-lite/tree/main/packages/run) | [![npm](https://camo.githubusercontent.com/50c6e8d9bdbfe8a17b1e805a4e41c21ab785cc35d0e8a10f4bda98e9cbc0ffab/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406c65726e612d6c6974652f72756e2e737667)](https://www.npmjs.com/package/@lerna-lite/run) | Run npm scripts in current workspace 在当前工作区中运行 npm 脚本 | [changelog 更新日志](https://github.com/lerna-lite/lerna-lite/blob/main/packages/run/CHANGELOG.md) |
| [@lerna-lite/watch](https://github.com/lerna-lite/lerna-lite/tree/main/packages/watch) | [![npm](https://camo.githubusercontent.com/9c8d8026a3e45f2428c5d9868ca4c6b5dc7bb03ad637a524f2d40c303ea2d680/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406c65726e612d6c6974652f77617463682e737667)](https://www.npmjs.com/package/@lerna-lite/watch) | Watch for changes within packages and execute commands 监视包中的更改并执行命令 | [changelog 更新日志](https://github.com/lerna-lite/lerna-lite/blob/main/packages/watch/CHANGELOG.md) |