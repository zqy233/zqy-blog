# husky

使现代原生 Git 钩子更简单

## husky/ lint-staged/prettier（代码自动格式化）

### 安装

```sh
npm i -D husky lint-staged prettier
```

- `husky`   Git hooks 工具，对git执行的一些命令，通过对应的hooks钩子触发，执行自定义的脚本程序
- `lint-staged` 检测文件插件，只检测git add . 中暂存区的文件，对过滤出的文件执行脚本
- `prettier`

### 使用

```sh
npm set-script prepare "husky install"
npm run prepare
# 添加hook
npx husky add .husky/pre-commit "pnpm exec lint-staged"
git add .husky/pre-commit
# 使用commit命令后会先进行校验，校验完成才允许commit
git commit -m "Keep calm and commit"
```

### package.json添加

```json
 "lint-staged": {
    "*.{js,ts,vue,json}": [
      "prettier --write"
    ]
  },
```

### prettier(格式化)

新建`.prettierrc`和`.prettierignore`

控制格式化配置和忽略格式化的文件

`.prettierrc`

```json
{
  "semi": false,
  "tabWidth": 2,
  "arrowParens": "avoid",
  "bracketSpacing": true,
  "singleQuote": true,
  "printWidth": 100,
  "trailingComma": "none"
}
```

`.prettierignore`

```json
# prettier doesn't respect newlines between chained methods
# https://github.com/prettier/prettier/issues/7884
pnpm-lock.yaml
dist
.prettierignore
```























