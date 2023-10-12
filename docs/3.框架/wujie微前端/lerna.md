# 介绍

Lerna是JavaScript / TypeScript的原始monorepo工具。它已经存在了很多年，被成千上万的项目使用，包括React和Jest。

它解决了JavaScript/TypeScript单存储库的两个最大问题：

- Lerna 针对任意数量的项目运行命令，它以最有效的方式、正确的顺序执行命令，并且可以在多台机器上分发该命令。
- Lerna 管理您的发布流程，从版本管理到发布到 NPM，它提供了多种选项来确保可以适应任何工作流程。

Nx（同名开源构建系统背后的公司）已经接管了Lerna的管理权。Nx是由前Google员工开发的构建系统，并利用了Google内部工具使用的许多技术。Lerna v5 是这个新管理下的第一个版本，更新了过时的软件包并开始对存储库本身进行一些清理。从 v6+ 开始，Lerna 将任务调度工作委托给 Nx 久经考验的行业领先的任务运行器，这意味着 `lerna run` 免费获得缓存和命令分发的好处！

## 文章学习

> https://juejin.cn/post/7128379017920512037
>

##  为什么选择Lerna?

- 超快！Lerna 速度很快，甚至比大多数同类解决方案还要快。怎么做到的？在底层，Lerna v6+ 使用 Nx 来运行任务
- 计算缓存 - Lerna 知道您即将运行的任务在过去何时执行。Lerna不会运行它，而是恢复文件并立即重播终端输出。此外，此缓存可以与您的同事和 CI 共享。使用 Lerna 时，您的整个组织将永远不必构建或测试同一事物两次
- 免配置分布式任务执行 Lerna 可以在多台机器上分发任何命令，而无需任何配置，同时保留在单台机器上运行它的功能。换句话说，使用 Lerna 处理您的单存储库就像设置boolean值一样简单
- 漂亮的终端输出 Monorepos 可以有数百或数千个项目。打印每个命令上的所有内容使得很难看到失败的内容和原因。值得庆幸的是，Lerna做得更好
- 强大的图形可视化工具 Lerna 带有强大的交互式可视化工具，可简化对工作区的理解
- 发布到 NPM Lerna 是将多个包发布到 npm 的终极工具。无论软件包是否有独立版本，Lerna 都能满足您的需求
- 易于采用 即使具有所有这些功能，Lerna 也非常容易采用。它需要接近零的配置

## 开始

Lerna 附带一个专用 `init` 命令，可帮助您将 lerna 添加到现有存储库或从头开始创建一个存储库。

### 从零开始

在最简单的情况下， `lerna init` 可用于在空目录中创建新存储库。为此，我们可以运行以下命令：

```sh
# Create an empty directory
mkdir ./new-lerna-workspace
# Change into the new directory
cd ./new-lerna-workspace
# Initialize lerna (using --dryRun to preview the changes)
npx lerna init --dryRun
```

请注意，我们已经在此处传递了 `--dryRun` 标志，这使我们能够看到 `lerna init` 将对文件系统所做的更改的预览。这允许我们调整传递给`lerna init` 的任何其他参数的值 （例如 `--exact` 或 `--independent` ），而不必担心纠正任何错误。

一旦我们对它将进行的更改感到满意，我们就可以简单地重复该 `npx lerna init` 命令，但省略标志 `--dryRun` 。

您现在将启动并运行一个工作 git 存储库，包括 npm 工作区，lerna 可用于创建、版本控制和发布您想要开发的任何包。

### 将 lerna 添加到现有存储库

如果已有存储库，仍可以使用 `lerna init` 添加 `lerna ` 到该存储库

Lerna 不负责在存储库中安装和链接依赖项，您的包管理器更适合该任务

相反，我们强烈建议配置您选择的包管理器以使用其 `workspaces` 功能：

- `npm` (https://docs.npmjs.com/cli/using-npm/workspaces)
- `yarn` (https://yarnpkg.com/features/workspaces)
- `pnpm` (https://pnpm.io/workspaces)

在现有存储库上初始化 lerna 时，它需要一种方法来知道它应该对哪些包进行操作。如果您使用的是包管理器 `workspaces` 的功能，则 lerna 将默认使用您已经配置的 `workspaces` 模式。不需要额外的参数。

或者，您可以手动指定一组要匹配的模式，而不是在 `lerna init` 时使用 `--packages`

```sh
# Passing a single pattern
npx lerna init --packages="packages/*"
# Passing multiple patterns
npx lerna init --packages="foo/*" --packages="bar/*"
```

## 配置

Lerna 的配置分为两个文件： `lerna.json` 和 `nx.json` 。

### npmClient

如果您不用 `npm` 作包管理器（例如，如果您正在使用 `yarn` or `pnpm` ），则设置此值很重要，以便 lerna 可以在解析配置和包时调整其一些内部逻辑。在以下 `pnpm` 情况下尤其如此，因为它使用单独的 `pnpm-workspaces.yaml` 文件来定义其工作区配置。

### packages

默认情况下，lerna 将尝试重用您选择的包管理器中可能拥有的任何 `workspaces` 配置。如果您希望指定可用软件包的子集供lerna操作，则可以使用该属性，该 `packages` 属性将告诉Lerna在何处查找 `package.json` 文件。

```json
{
  "packages": ["packages/*"]
}
```

### version

Lerna 有两种发布包的模式： `fixed` 和 `independent` 。使用固定模式时，所有受影响的包将使用相同的版本发布。最后发布的版本记录 `lerna.json` 如下：

## 版本控制和发布

Lerna 可以增加包的版本以及将包发布到 NPM，它提供了多种选项来确保可以适应任何工作流。

Lerna 附带了一个 `version` 命令，允许您递增软件包的版本号，提交更改并相应地标记它们。

```sh
lerna version --no-private
```

你将获得以下输出：

```sh
lerna notice cli v5.1.2
lerna info current version 1.0.0
lerna info Assuming all packages changed
? Select a new version (currently 1.0.0) (Use arrow keys)
❯ Patch (1.0.1)
  Minor (1.1.0)
  Major (2.0.0)
  Prepatch (1.0.1-alpha.0)
  Preminor (1.1.0-alpha.0)
  Premajor (2.0.0-alpha.0)
  Custom Prerelease
  Custom Version
```

> 请注意，通过传递 `--no-private` ，我们排除了在其 `package.json` 文件中标记 `private` 的所有包。

Lerna 检测当前软件包，识别当前版本并建议下一个版本进行选择。请注意，你也可以直接传递一个SemVer（语义化版本）的升级版本号，例如：`lerna version 1.0.0`。详细了解版本文档详细信息。选择给定版本后，Lerna 会使用版本号更新 ，提交更改， `package.json` 添加相应的版本标记（例如 `v1.0.0` ），并将提交和标记推送到远程存储库。

packages/footer/package.json

```json
{
  "name": "footer",
  "version": "1.0.1",
  "main": "dist/index.js",
  ...
}
```

请注意，上述操作不会将包推送到任何 NPM 存储库。相反，如果我们也希望 Lerna 负责发布过程，我们可以改用 `lerna publish` 。

## semver （语义化版本）

"Semver" 是 "Semantic Versioning" 的缩写，它是一种软件版本号管理的规范，旨在使版本号更具语义化和一致性，以便更好地理解和处理软件的版本信息。Semantic Versioning 遵循以下格式：

```
MAJOR.MINOR.PATCH
```

- MAJOR（主要版本号）：当进行不兼容的更改和重大升级时增加。这意味着可能会破坏与之前版本的兼容性，因此使用新的 MAJOR 版本可能需要进行代码调整。
- MINOR（次要版本号）：当添加新功能或进行向后兼容的更改时增加。这意味着添加了新功能，但不会破坏与之前版本的兼容性。
- PATCH（修订版本号）：当进行向后兼容的错误修复时增加。这表示进行了修复，但没有添加新功能，不会破坏与之前版本的兼容性。

Semantic Versioning 还允许在版本号后添加可选的预发布版本号和构建元数据，例如：

```
MAJOR.MINOR.PATCH-预发布版本号+构建元数据
```

这个版本号规范有助于开发者和用户更好地理解版本之间的差异和兼容性，从而更好地管理软件的升级和依赖关系。

## 发布到 NPM

如果我们运行

```sh
lerna publish --no-private
```

Lerna 执行版本递增工作流（与 相同 `lerna version` ），此外还将包推送到 NPM。应得到以下输出：

Terminal Output 终端输出

```sh
lerna notice cli v5.1.2
lerna info current version 1.0.0
lerna info Assuming all packages changed
? Select a new version (currently 1.0.0) Patch (1.0.1)

Changes:
 - footer: 1.0.0 => 1.0.1
 - header: 1.0.0 => 1.0.1

? Are you sure you want to publish these packages? Yes
lerna info execute Skipping releases
lerna info git Pushing tags...
lerna info publish Publishing packages to npm...
...
lerna success published header 1.0.1
...
lerna success published footer 1.0.1
...
Successfully published:
 - footer@1.0.1
 - header@1.0.1
lerna success published 2 packages
```

### from-package

Lerna可以确定要发布的软件包的另一种方法是使用 `from-package` 。Lerna 会将存储库中每个包的版本与发布到 npm 的版本进行比较。对于版本大于已发布版本的每个包，Lerna 会将该包发布到 npm

此模式不明确要求包已使用 `lerna version` 进行版本控制，这使其非常适合具有自己的版本控制脚本的工作区。

```sh
lerna publish from-package
```

> Lerna 总是用来 `npm` 发布包。如果使用 `npm` 以外的包管理器，则仍需要将相应的发布配置添加到`.npmrc` 中，即使将`lerna.json` 的 `npmClient` 设置为非 `npm` 也是如此。

## pnpm workspace

pnpm 内置了对单一存储库（又名多包存储库、多项目存储库或整体存储库）的支持。您可以创建一个工作区，以将多个项目合并到单个存储库中。

工作区的根目录中必须有一个 `pnpm-workspace.yaml` 文件。工作区的根目录也必须有一个 `.npmrc` 文件。

### 前言

前端多个包管理的的方式一般都是采用`monorepo`的方式去管理，之前都是使用的`lerna`的workspace去管理。这段时间包管理切换到了`pnpm`上，它也有worksapce，可以支持`monorepo`。

### 作用

`pnpm install` 用于安装项目的所有依赖项。

在工作区内， `pnpm install` 安装所有项目中的所有依赖项。如果要禁用此行为，请将 `recursive-install` 设置设置为 `false` 。

## @lerna/run

> Run an npm script in each package that contains that script
> 在包含该脚本的每个包中运行该npm脚本

需要先安装 lerna 才能使用 `lerna` CLI。

### Usage 用法

```sh
$ lerna run <script> -- [..args] # runs npm run my-script in all packages that have it
$ lerna run test
$ lerna run build

# watch all packages and transpile on change, streaming prefixed output
$ lerna run --parallel watch
```

在包含该脚本的每个包中运行该脚本。双破折号 （ `--` ） 是将虚线参数传递给脚本执行所必需的。

> yarn使用注意事项
>
> 双破折号 （ `--` ） 将被剥离 `yarn` 。这导致 Lerna 无法仅通过命令行将其他参数传递给子脚本。要解决此问题，请全局安装 Lerna 并直接运行它，或者 `package.json` 使用您的 `lerna run` 命令创建一个脚本并用于 `yarn` 直接运行它。

### Options 选项

`lerna run` 接受所有筛选器标志

```sh
$ lerna run --scope my-component test
```

#### `--npm-client <client>`

必须是知道如何运行 npm 生命周期脚本的可执行文件。 `--npm-client` 默认值为 `npm` 。

```sh
$ lerna run build --npm-client=yarn
```

也可以配置为 `lerna.json` ：

```sh
{
  "command": {
    "run": {
      "npmClient": "yarn"
    }
  }
}
```

#### `--stream`

立即从子进程流式传输输出，并以原始包名称为前缀。这允许不同包的输出交错。

这官方文档的解释确实很让人费解，通俗一点理解就是：这个选项告诉Lerna在运行命令时要实时流式传输输出，而不是等待命令完成后一次性显示输出。这使得来自不同包的输出可以立即显示，并以包名称作为前缀，以帮助更容易区分不同包的输出。

#### `--parallel`

与类似 `--stream` ，但完全忽略并发和拓扑排序，立即在所有具有前缀流输出的匹配包中运行给定的命令或脚本。这是长时间运行的进程（如 `npm run watch` 在许多包上运行）的首选标志。

它告诉Lerna在运行命令时不考虑并发性和拓扑排序，而是立即在所有匹配的包上运行给定的命令或脚本。这意味着所有匹配的包将同时运行命令，而不是按照某种顺序或拓扑排序来运行。很常见的应用场景：用于同时运行多个包的`npm run dev`启动项目

#### `--no-bail`

默认情况下，如果任何脚本运行返回非零退出代码， `lerna run` 将退出并显示错误。通过 `--no-bail` 以禁用此行为，在包含脚本的所有包中运行脚本，而不考虑退出代码。

#### `--no-prefix`

在输出流式传输时禁用包名称前缀（ `--stream` 或 `--parallel` ）。将结果管道输送到其他进程（如编辑器插件）时，此选项非常有用。

#### `--profile`

分析脚本执行并生成性能配置文件，可以在基于 Chromium 的浏览器中使用 DevTools 对其进行分析（直接 URL： `devtools://devtools/bundled/devtools_app.html` ）。配置文件显示脚本执行的时间线，其中每个执行都分配给一个开放槽。插槽数量由 `--concurrency` 选项确定，开放插槽数量由减去正在进行的操作数量决定 `--concurrency` 。最终结果是脚本并行执行的可视化。

性能配置文件输出的默认位置位于项目的根目录下。

#### `--profile-location <location>`

您可以为性能配置文件输出提供自定义位置。提供的路径将相对于当前工作目录进行解析。

## Run Tasks 运行任务

Monorepos 可以有数百甚至数千个项目，因此能够针对所有（或部分）项目运行 npm 脚本是像 Lerna 这样的工具的一个关键功能。

上面了解了@lerna/run后，再继续了解一些常用操作

### 为单个包运行任务

在开发时，如果不想运行所有构建或所有测试，只针对要更改的项目运行（`header`是项目名）

```sh
npx lerna run test --scope=header
```

## 将 pnpm 与 Lerna 一起使用

Lerna可以在 `pnpm` 工作空间中使用，以获得两者 `pnpm` 和Lerna的全部好处。

在 `pnpm` 工作区中使用时，Lerna 将：

- 使用 [`pnpm-workspace.yaml`](https://pnpm.io/workspaces)  解析包位置

- 在 `lerna.json` 中强制 `useWorkspaces: true` （并且在 `package.json `中忽略` packages:` ）。

- 阻止使用 `bootstrap` 、 `link` 和 `add` 命令。相反，您应该直接使用 `pnpm` 命令来管理依赖项 （https://pnpm.io/cli/install）。

- 遵循包依赖项的工作区协议。

  - 在 `lerna version` 期间 ，依赖项将正常更新，但如果 `workspace:` 前缀存在，则会保留前缀。
  - 如果使用工作区别名，则 `lerna version` 不会碰撞依赖项的版本，因为别名不会指定要碰撞的版本号。

要使用 Lerna 设置 pnpm，请执行以下操作：

1. 如果尚未安装，请安装 `pnpm` ： https://pnpm.io/installation。

2. 删除根目录中的 `node_modules/` 文件夹（如果存在）。如果尚未使用工作区，请运行 `lerna clean` 以删除所有包中的 `node_modules/` 文件夹。

3. 在 `lerna.json` 中 设置 `"npmClient": "pnpm"` 

4. 在项目的根目录中创建一个 `pnpm-workspace.yaml` 文件。如果您已经在使用 npm 或 yarn 工作区，请将 “workspaces” 属性从 `package.json` 移动到 `pnpm-workspace.yaml` 。如果尚未使用工作区，请将“packages”属性从 `lerna.json` 移动到 `pnpm-workspace.yaml` 。例如：
   package.json

   ```json
   {
     "workspaces": ["packages/*"]
   }
   ```

   和lerna.json

   ```json
   {
     "packages": ["packages/*"]
   }
   ```

   成为：pnpm-workspace.yaml

   ```json
   packages:
     - "packages/*"
   ```

5. （可选）运行 `pnpm import` 以从现有锁定文件生成 `pnpm-lock.yaml` 文件。有关支持的锁文件源，请参阅 https://pnpm.io/cli/import。

6.  运行 `pnpm install` .

## 旧版包管理

### lerna v7 及更高版本中迁移`lerna bootstrap`, `lerna add` and `lerna link`

在 lerna v7.0.0 中，我们默认删除了 `lerna bootstrap` , `lerna link` 和 `lerna add` 。

本节介绍如何最好地摆脱使用它们并使用包管理器 `workspaces` 实现设置现代化。有关为什么有必要这样做的完整背景信息，请参阅下面的背景。

重要的心理转变是认识到lerna不负责在存储库中安装和链接依赖项，您的包管理器更适合该任务。

实现此目的的方法是使用包管理器 `workspaces` 的功能。在此处查看其各自的文档：

- `npm` (https://docs.npmjs.com/cli/using-npm/workspaces)
- `yarn` (https://yarnpkg.com/features/workspaces)
- `pnpm` (https://pnpm.io/workspaces)

通过使用 `workspaces` ，您的包管理器将执行与 `lerna bootstrap` `lerna link` 完全相同的链接操作，只是它直接接入到 `install` 命令中。运行 `install` 后不需要其他命令（只要您已按照上面的包管理器文档进行配置`workspaces`）。

更换 `lerna add` 添加和删除依赖项是包管理器已经为您做的事情，并且由于是第一类用例，您可以 `workspaces` 运行适当的 `install` 命令将依赖项添加到特定的包/工作区，同样，所有相关的本地链接将自动发生。

 



 
