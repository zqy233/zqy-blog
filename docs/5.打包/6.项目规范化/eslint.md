# 	eslint

> https://juejin.cn/post/7177324554056892476#heading-7

## eslint与prettier结合

```sh
npm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier
```

## [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)

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

## 最佳实践

跟着vue官方走

### .eslintrc.cjs

```sh
pnpm i -D eslint prettier eslint-plugin-vue @vue/eslint-config-prettier @vue/eslint-config-typescript @rushstack/eslint-patch  
```

--ext 指定拓展名

--fix 自动修复

--ignore-path 这个选项允许你指定一个文件作为 `.eslintignore`。默认情况下，ESLint 在当前工作目录下查找 `.eslintignore`。你可以通过提供另一个文件的路径改变这种行为。

```json
 "scripts": {
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore"
  },
```

vue3

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

vue2

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

## @rushstack/eslint-patch 

> https://github.com/eslint/eslint/issues/3458

可以避免下很多依赖

### @vue/eslint-config-prettier

> https://www.npmjs.com/package/@vue/eslint-config-prettier

