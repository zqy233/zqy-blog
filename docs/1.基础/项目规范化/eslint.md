# 	eslint

> 官方文档 https://eslint.org/

## eslint是什么

ESLint是一个可配置的JavaScript linter。它可以帮助您发现并修复JavaScript代码中的问题。问题可以是任何问题，从潜在的运行时错误，到不遵循最佳实践，再到样式问题

## 配置文件

### eslint.config.js

ESLint配置文件名为eslint.config.js。它应该放在项目的根目录中，并导出一组配置对象。下面是一个例子：

```js
export default [
    {
        rules: {
            semi: "error",
            "prefer-const": "error"
        }
    }
]
```

### 初始化配置文件

```sh
npm init @eslint/config
```

`npm init <initializer>` 通常被用于**创建一个新的或者已经存在的 npm 包**。 initializer 在这里是一个名为 `create-<initializer>` 的 npm 软件包，该软件包将由 npx 来安装，然后执行其 package.json 中 bin 属性对应的脚本，会创建或更新 package.json 并运行一些与初始化相关的操作

所以实际上是调用了这个包[@eslint/create-config](https://www.npmjs.com/package/@eslint/create-config)

## 什么是rules

> https://eslint.org/docs/latest/rules

```js
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
```

名称“semi”和“quotes”是ESLint中规则的名称。第一个值是规则的错误级别，可以是以下值之一：

- `"off"` 或则 `0` - 关闭规则
- `"warn"` or `1` -  显示警告 (不会影响 exit code)
- `"error"` or `2` - 显示错误 (exit code 会是 1)

## 什么是env

环境提供预定义的全局变量。可用的环境有：

> https://eslint.org/docs/latest/use/configure/language-options#specifying-environments

这些环境并不互斥，因此您可以一次定义多个环境。
可以在文件内部、配置文件中或使用--env命令行标志指定环境

### 在配置文件中使用

要在配置文件中指定环境，请使用env键。通过将每个环境设置为true来指定要启用的环境。例如，以下内容将启用浏览器和Node.js环境：

```js
{
    "env": {
        "browser": true,
        "node": true
    }
}
```

###  在`package.json` 文件中使用

```js
{
    "name": "mypackage",
    "version": "0.0.1",
    "eslintConfig": {
        "env": {
            "browser": true,
            "node": true
        }
    }
}
```

## eslint与prettier结合

```sh
npm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier
```

## eslint-plugin-vue

> 源码仓库 https://github.com/vuejs/eslint-plugin-vue
>
> 官方文档 https://eslint.vuejs.org/user-guide/

### eslintrc.js

```js
module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  }
}

```

### 如何使用一个自定义的parser

```diff
- "parser": "@typescript-eslint/parser",
+ "parser": "vue-eslint-parser",
  "parserOptions": {
+     "parser": "@typescript-eslint/parser",
      "sourceType": "module"
  }
```

## [typescript-eslint](https://typescript-eslint.io/)

```SH
pnpm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript
```

### .eslintrc.js

```js
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
};
```

```SH
npx eslint .
```

## vue最佳实践

直接跟着vue官方走

### .eslintrc.cjs

```sh
pnpm i -D eslint prettier @rushstack/eslint-patch 
pnpm i -D eslint-plugin-vue  @vue/eslint-config-prettier @vue/eslint-config-typescript  
```

```json
 "scripts": {
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore"
  },
```

--ext 指定拓展名

--fix 自动修复

--ignore-path 这个选项允许你指定一个文件作为 `.eslintignore`。默认情况下，ESLint 在当前工作目录下查找 `.eslintignore`。你可以通过提供另一个文件的路径改变这种行为。

### vue3

```js
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
```

### vue2

```js
/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier"
  ]
}
```

## 什么是@rushstack/eslint-patch 

> 以下内容大都翻译自https://www.npmjs.com/package/@rushstack/eslint-patch

这是一个可以改善 ESLint 在使用可重用工具链的 monorepo 中加载插件的补丁

具体来说，它可以解决在 monorepo 中使用 ESLint 时，由于不同的子项目使用了不同的插件而导致插件无法正确加载的问题。这个补丁可以确保在 monorepo 中正确加载和使用各个子项目所需的 ESLint 插件

### 简单来说

如果一个包使用了很多eslint配置插件，用户安装了这个包，还需要手动安装这些eslint配置插件，那就体验很差，最理想的情况就是，安装这个包后，就自动安装这些eslint配置插件，这就是@rushstack/eslint-patch的作用

### 它做了什么

这个补丁是为了解决一个长期存在的 ESLint 功能请求，即允许共享的 ESLint 配置文件带有自己的插件，而不是强制每个配置文件的使用者都要在 peer dependencies 中声明插件。在 monorepo 场景中，这使得您的 lint 设置可以在一个单独的 NPM 包中进行统一管理。这样做可以大大减少所有使用您标准 lint 规则集的其他项目的复制粘贴和版本管理工作量，而不必担心细节问题。

ESLint 提供了部分解决方案，如 --resolve-plugins-relative-to CLI 选项，但它们使用起来很麻烦。例如，VS Code 的 ESLint 扩展必须手动配置此 CLI 选项。如果一些开发者使用其他编辑器，例如 WebStorm，则需要不同的手动配置。此外，--resolve-plugins-relative-to 参数不支持多个路径，例如如果一个配置包建立在另一个也提供插件的包上。有关更多技术背景，请参阅此讨论。

### 为什么它是一个补丁

截至 ESLint 8，ESLint 长期期待的模块解析器重构仍未实现。因此，我们创建了一个小的 .eslintrc.js 补丁，可以在大多数实际场景中解决问题。这个补丁曾被提议为 ESLint 的一个功能，并被列入 PR 12460，但是维护者们无法接受它，除非它被重新设计为完全正确的设计。这样的要求会对原始的 GitHub 问题带来相同的障碍，因此最好仍然采用补丁方法。

由于这个补丁现在被广泛使用，我们已经将它转换成一个适当的 NPM 包，以简化维护工作。

### 如何使用它

对于每个依赖于你共享的 ESLint 配置的项目，在 .eslintrc.js 文件的顶部添加一个 require() 调用，例如：

**.eslintrc.js**

```js
require("@rushstack/eslint-patch/modern-module-resolution");

// Add your "extends" boilerplate here, for example:
module.exports = {
  extends: ['@your-company/eslint-config'],
  parserOptions: { tsconfigRootDir: __dirname }
};
```

这个改变旨在简化本地项目中 ESLint 的配置过程。以前，项目需要在其 package.json 文件中声明 ESLint 插件。但是，现在假设 @your-company/eslint-config NPM 包将声明插件作为其自己的依赖关系，因此本地项目就不再需要声明插件了。

这个补丁的作用是修改 ESLint 引擎，使其模块解析器相对于引用配置文件的文件夹加载，而不是相对于项目文件夹加载。这个补丁兼容 ESLint 6、7 和 8，并且适用于任何将 ESLint 作为库加载的编辑器扩展。

为了进一步简化设置，@your-company/eslint-config 可以将补丁作为其自己的依赖项提供。请参考 @rushstack/eslint-config 的实际示例和推荐方法。

### https://github.com/eslint/eslint/issues/3458翻译

我的可共享配置文件使用了外部插件的规则，我想将其作为依赖项，这样用户就不必手动安装该插件。我找不到相关的文档，但它似乎不起作用，所以我认为目前不支持这样做

我认为这是因为你们只在配置完成合并后尝试加载插件

其他可共享配置文件依赖于插件，指示用户也手动安装插件，并将其放在 peerDependencies 中。然而，我认为这不太理想，我不希望用户关心我的配置文件内部使用了哪些插件

可共享配置文件的整个目的是最大程度地减少样板代码和开销，因此这将是一个受欢迎的改进

您想支持这个问题吗？通过 Bountysource 在它上面发起一个赏金吧！我们接受通过 Bountysource 的赏金。

## 什么是@vue/eslint-config-prettier

 `@vue/cli` & `create-vue`使用的eslint配置

> https://www.npmjs.com/package/@vue/eslint-config-prettier









