# 	eslint

> https://juejin.cn/post/7177324554056892476#heading-7

## eslint与prettier结合

```sh
npm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier
```

## [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)

```

```

**eslintrc.js**

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

```diff
- "parser": "@typescript-eslint/parser",
+ "parser": "vue-eslint-parser",
  "parserOptions": {
+     "parser": "@typescript-eslint/parser",
      "sourceType": "module"
  }
```

