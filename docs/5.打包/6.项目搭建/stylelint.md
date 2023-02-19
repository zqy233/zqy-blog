# stylelint

> 官方文档 https://github.com/stylelint/stylelint/blob/main/docs/user-guide/get-started.md
>
> stylelint工具列表 https://github.com/stylelint/awesome-stylelint#readme

`stylelint`是css格式化工具

`stylelint-config-standard`是其通用标准

## 格式化css

```sh
pnpm i -D stylelint stylelint-config-standard
```

根目录创建配置文件`.stylelintrc.json`

```json
{
  "extends": "stylelint-config-standard"
}
```

进行格式化

```sh
npx stylelint "**/*.css"
```

### scss

```sh
pnpm i -D stylelint stylelint-config-standard-scss
```

```json
{
  "extends": "stylelint-config-standard-scss"
}
```

```sh
npx stylelint "**/*.scss"
```

## 自动修复

命令行加入--fix

```sh
npx stylelint "**/*.css" --fix
```

### vscode-stylelint

实际开发中，肯定不会输命令行，可以使用vscode插件做自动修复，需要安装vscode-stylelint，并设置vscode的settings.json

#### 保存时自动格式化

```json
"editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  }
```

#### 避免与vscode的样式校验冲突

```json
"css.validate": false,
"less.validate": false,
"scss.validate": false
```

#### 配置校验范围

```json
 "stylelint.validate": [
    "css",
    "less",
    "postcss",
    "scss",
    "sass",
    "vue"
  ],
```

#### 如何不使用配置文件

设置一个空对象，就不会使用配置文件了（可以用于开发时不更改，git钩子时再进行修复）

```js
 "stylelint.config": {
  },
```

### 搭配`lint-staged`

package.json新增命令

```json
"scripts": {
   "style-lint": "stylelint src/**/*.{css,sass,scss,less,vue}",
   "style-lint:fix": "stylelint src/**/*.{css,sass,scss,less,vue} --fix",
},
```

```json
"lint-staged": {
   "*.{css,sass,scss,less,vue}": [
      "pnpm run style-lint"
   ]
},
```

## 配置文件格式

支持以下格式

- `package.json`中的`stylelint` 属性
- `.stylelintrc` 
- `.stylelintrc.{cjs,js,json,yaml,yml}` 
- `stylelint.config.{cjs,js}`

## 支持vue识别

```SH
pnpm i -D postcss-html stylelint-config-recommended-vue
```

错误的写法，这样vue可以正常格式化，但css会失效

```js
module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended-vue',
    ],
    customSyntax: 'postcss-html',
}
```

正确的写法

```js
module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended-vue',
    ],
    overrides: [
        {
            files: ['*.vue', '**/*.vue'],
            customSyntax: 'postcss-html',
        },
    ],
}
```

## stylelint-order

> https://github.com/hudochenkov/stylelint-order

`stylelint-order`插件用于css属性排序，但是它只提供排序的功能，具体的属性排序规则需要自行配置，所以还是直接用社区提供的一些参考配置吧，免得自己费功夫

### 参考配置

- [`stylelint-config-idiomatic-order`](https://github.com/ream88/stylelint-config-idiomatic-order)
- [`stylelint-config-hudochenkov/order`](https://github.com/hudochenkov/stylelint-config-hudochenkov/blob/master/order.js)
- [`stylelint-config-recess-order`](https://github.com/stormwarning/stylelint-config-recess-order)
- [`stylelint-config-property-sort-order-smacss`](https://github.com/cahamilton/stylelint-config-property-sort-order-smacss)
- [`stylelint-config-clean-order`](https://github.com/kutsan/stylelint-config-clean-order)

最多star的是[`stylelint-config-recess-order`](https://github.com/stormwarning/stylelint-config-recess-order)，所以随大流就用`stylelint-config-recess-order`

### 如何使用stylelint-config-recess-order

```SH
pnpm i -D stylelint-config-recess-order
```

无需重复安装`stylelint-order`这个插件，`stylelint-config-recess-order`内部已经集成了`stylelint-order`

```js
module.exports = {
	extends: ['stylelint-config-recess-order'],
	rules: {
		// Add overrides and additional rules here
	},
}
```

## rules

> 列表 https://github.com/stylelint/stylelint/blob/main/docs/user-guide/rules.md

## 个人配置参考

```sh
pnpm i -D stylelint stylelint-config-standard-scss stylelint-config-recess-order stylelint-config-recommended-vue postcss-html
```

### [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss/blob/main/index.js)

查看源码，这个拓展是基于这两者的，所以安装了这个拓展就不用安装这两者了

```js
extends: ['stylelint-config-standard', 'stylelint-config-recommended-scss'],
```

### [stylelint-config-recommended-vue](https://github.com/ota-meshi/stylelint-config-recommended-vue/blob/main/lib/index.js)

查看源码，这个拓展是基于这两者的，所以安装了这个拓展就不用安装这两者了

```js
extends: ["stylelint-config-recommended", "stylelint-config-html"],
```

### [stylelint-config-recess-order](https://github.com/stormwarning/stylelint-config-recess-order/blob/main/index.js)

查看源码，这个插件是基于`stylelint-order`的，所以安装了这个插件就不用安装`stylelint-order`了

```js
plugins: ['stylelint-order'],
```

### `.stylelintrc.js`

我一般都用js后缀的配置文件，比较好写注释

```js
module.exports = {
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-recommended-vue',
        'stylelint-config-recess-order',
    ],
    overrides: [
        {
            files: ['*.vue', '**/*.vue'],
            customSyntax: 'postcss-html',
        },
    ],
    rules: {
        // 不允许重复的选择器（设置为null表示允许重复）
        'no-duplicate-selectors': null,
        // 注释前必须有空行（设置为null表示允许没有空行）
        'comment-empty-line-before': null,
    },
}
```

