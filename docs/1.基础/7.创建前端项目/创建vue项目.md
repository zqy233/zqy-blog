# create-vue

开始一个 Vite 驱动的 Vue 项目的推荐方法

## 用法

```sh
npm create vue@latest
```

或者，如果你需要支持 IE11，你可以创建一个 Vue 2 项目：

```sh
npm create vue@legacy
```

请注意，标记名称（ `@latest` 或 `@legacy` ）不得省略，否则 `npm` 可能会解析为包的缓存和过时版本。

## Vue CLI 与 Vue CLI 的区别

- Vue CLI 基于 webpack，而 `create-vue` 基于 Vite。Vite 开箱即用地支持 Vue CLI 项目中的大多数已配置约定，并且由于其极快的启动和热模块更换速度，提供了明显更好的开发体验。在此处详细了解我们推荐 Vite 而不是 webpack。
- 与 Vue CLI 不同，它本身只是一个脚手架工具：它根据您选择的功能创建一个预配置的项目， `create-vue` 并将其余部分委托给 Vite。以这种方式搭建脚手架的项目可以直接利用与 Rollup 兼容的 Vite 插件生态系统。

## Migrating from Vue CLI 从 Vue CLI 迁移

- [Vue CLI -> 来自 VueSchool.io 的 Vite 迁移指南](https://vueschool.io/articles/vuejs-tutorials/how-to-migrate-from-vue-cli-to-vite/)
- [有助于自动迁移的工具/插件](https://github.com/vitejs/awesome-vite#vue-cli)

# create-vue

The recommended way to start a Vite-powered Vue project
开始一个 Vite 驱动的 Vue 项目的推荐方法

## Usage 用法

```sh
npm create vue@latest
```

Or, if you need to support IE11, you can create a Vue 2 project with:
或者，如果你需要支持 IE11，你可以创建一个 Vue 2 项目：

```sh
npm create vue@legacy
```

Note that the tag name (`@latest` or `@legacy`) MUST NOT be omitted, otherwise `npm` may resolve to a cached and outdated version of the package.
请注意，标记名称（ `@latest` 或 `@legacy` ）不得省略，否则 `npm` 可能会解析为包的缓存和过时版本。

## Difference from Vue CLI 与 Vue CLI 的区别

- Vue CLI is based on webpack, while `create-vue` is based on [Vite](https://vitejs.dev/). Vite supports most of the configured conventions found in Vue CLI projects out of the box, and provides a significantly better development experience due to its extremely fast startup and hot-module replacement speed. Learn more about why we recommend Vite over webpack [here](https://vitejs.dev/guide/why.html).
  Vue CLI 基于 webpack，而 `create-vue` 基于 Vite。Vite 开箱即用地支持 Vue CLI 项目中的大多数已配置约定，并且由于其极快的启动和热模块更换速度，提供了明显更好的开发体验。在此处详细了解我们推荐 Vite 而不是 webpack。
- Unlike Vue CLI, `create-vue` itself is just a scaffolding tool: it creates a pre-configured project base on the features you choose, and delegates the rest to Vite. Projects scaffolded this way can directly leverage the [Vite plugin ecosystem](https://vitejs.dev/plugins/) which is Rollup-compatible.
  与 Vue CLI 不同，它本身只是一个脚手架工具：它根据您选择的功能创建一个预配置的项目， `create-vue` 并将其余部分委托给 Vite。以这种方式搭建脚手架的项目可以直接利用与 Rollup 兼容的 Vite 插件生态系统。

## Migrating from Vue CLI 从 Vue CLI 迁移

- [Vue CLI -> Vite Migration Guide from VueSchool.io
  Vue CLI -> 来自 VueSchool.io 的 Vite 迁移指南](https://vueschool.io/articles/vuejs-tutorials/how-to-migrate-from-vue-cli-to-vite/)
- [Tools / Plugins that help with auto migration
  有助于自动迁移的工具/插件](https://github.com/vitejs/awesome-vite#vue-cli)