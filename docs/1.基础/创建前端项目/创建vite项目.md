## 创建vite项目

cmd运行以下命令

```sh
npm init vite
# 等价于
npm create vite
# 使用yarn
yarn create vite
# 使用pnpm
pnpm create vite
```

会进入创建vite项目的选择列表，自行选择安装项目模板即可

这跟`@vue-cli`有了明显区别，不需要安装全局的脚手架命令

原理在于：npm init \<initializer>命令或npm create \<initializer>命令将使用 npx（新版本node自带的命令）运行名为 create-\<initializer> 的 npm 包，所以该命令实际上是使用 npx 运行 [create-vite](https://www.npmjs.com/package/create-vite) 这个 npm 包，也就是创建vite项目的脚手架包

> 另外，取自 [create-vite](https://www.npmjs.com/package/create-vite) 官方文档：
> 兼容性说明: Vite 要求 Node.js 版本 >=12.2.0，一些模板的正常使用还需要更高的 Node.js 版本, 所以如果您在Node.js使用过程中产生了相应警告，请升级

### 直接创建模板

```sh
# npm 6.x
npm create vite vue-project-name --template vue
# npm 7+  多一个--
npm create vite vue-project-name -- --template vue
# yarn
yarn create vite vue-project-name --template vue
# pnpm
pnpm create vite vue-project-name -- --template vue
```

### 创建包含typescript的模板

```sh
# npm 6.x
npm create vite vue-project-name --template vue-ts
# npm 7+  多一个--
npm create vite vue-project-name -- --template vue-ts
# yarn


# pnpm
pnpm create vite vue-project-name -- --template vue-ts
```

### 跟@vue-cli另一个不同

需要自行下载依赖

```sh
# 进入项目目录
cd vue-project-name
# 使用vscode打开项目
code ./
# yarn
yarn
# 运行项目
npm run dev
```

