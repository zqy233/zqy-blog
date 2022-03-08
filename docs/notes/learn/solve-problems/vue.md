# vue

## Critical dependency: the request of a dependency is an expression

require了一个表达式 , 改为字符串即可

```js
require(`${path}`)
```

# ** is defined but never used eslint

settings.json中关闭未使用变量的校验

```json
"eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    "parserOptions": {
      "parser": "babel-eslint"
    },
    "rules": {
      "no-unused-vars": "off",
      "vue/valid-template-root": "warn"
    }
  }
```

## for division is deprecated and will be removed in Dart Sass 2.0.0

版本更新了,切换回旧版本,合情合理,旧项目用旧技术,除非整体迁移

```bash
npm i -s sass@1.32.6
```

