# 脚本npm库

## thank-tiny-png(图片压缩)

```sh
# 单文件处理
npx thank-tiny-png ./input/test.png
# 文件夹多文件处理
npx thank-tiny-png ./input
# 文件夹多文件处理，深度查找处理
npx thank-tiny-png ./input -deep
# 单文件处理, 指定输出文件夹
npx thank-tiny-png ./input/test.png ./output
# 文件夹多文件处理, 指定输出文件夹
npx thank-tiny-png ./input ./output
# 文件夹多文件处理，深度查找处理, 指定输出文件夹
npx thank-tiny-png ./input -deep ./output
```

## simple-git-hooks

git 钩子工具,在 git commit 和 git push 前触发一些自己想做的事情

## mockjs

```bash
npm i -s mockjs
```

```js
// 引入mockjs
import Mock from 'mockjs'
// 使用mockjs模拟数据
Mock.mock('test.com', {
  ret: 0,
  data: {
    mtime: '@datetime', //随机生成日期时间
    'score|1-800': 800, //随机生成1-800的数字
    'rank|1-100': 100, //随机生成1-100的数字
    'stars|1-5': 5, //随机生成1-5的数字
    nickname: '@cname' //随机生成中文名字
  }
})
```

main.js 中引用，vue 文件中访问

```js
async function aaa() {
  const res = await http.get('test.com')
  console.log(res)
}
```

## ora（进度条 loading）

```js
import ora from 'ora'
const spinner = ora('正在下载页面模板').start()
setTimeout(() => {
  spinner.stop()
}, 2000)
```

## mddir（打印项目结构）

```bash
npx mddir './'
```

```bash
  '    |-- f',
  '    |   |-- .gitignore',
  '    |   |-- package-lock.json',
  '    |   |-- package.json',
  '    |   |-- README.md',
  '    |   |-- yarn-error.log',
  '    |   |-- yarn.lock',
  '    |   |-- public',
  '    |   |   |-- favicon.ico',
  '    |   |   |-- index.html',
  '    |   |   |-- logo192.png',
  '    |   |   |-- logo512.png',
  '    |   |   |-- manifest.json',
  '    |   |   |-- robots.txt',
  '    |   |-- src',
  '    |       |-- App.js',
  '    |       |-- index.css',
  '    |       |-- index.js',
  '    |       |-- assets',
  '    |       |   |-- logo.png',
  '    |       |-- components',
  '    |       |-- pages',
  '    |       |   |-- Chat.jsx',
  '    |       |   |-- Login.jsx',
  '    |       |   |-- Register.jsx',
  '    |       |-- utils',
  '    |           |-- APIRoutes.js',
  '    |-- s',
  '        |-- .env',
  '        |-- index.js',
  '        |-- package-lock.json',
  '        |-- package.json',
  '        |-- README.md',
  '        |-- yarn.lock',
  '        |-- controllers',
  '        |   |-- userControllers.js',
  '        |-- model',
  '        |   |-- userModel.js',
  '        |-- routes',
  '            |-- userRoutes.js',
```

## figlet （logo文字）

可设置 node 环境下，console.log 文本为大而好看的 logo 文本，搭配@darkobits/lolcatjs 效果更佳（更花里胡哨）

```js
import figlet from 'figlet'
const text = figlet.textSync('这时一行logo文本')
```

### 搭配@darkobits/lolcatjs，生成 npm 包的 logo

```js
import figlet from 'figlet' 
import lolcat from '@darkobits/lolcatjs' // 随机颜色,也就是炫彩
const text = figlet.textSync('git-quick-push') // 设置文本
const textColor = lolcat.fromString(text) // 炫彩logo
```

## kolorist（控制台颜色）

> 将颜色放入标准输入/标准输出的微型库

## chalk（控制台颜色）

可设置 node 环境下，console.log 字体颜色和背景颜色，可链式调用

```js
import chalk from 'chalk'
console.log(chalk.red('红色'))
```

## @darkobits/lolcatjs（控制台炫彩）

可设置 node 环境下，console.log 字体颜色，颜色随机，即炫彩

```js
import from "@darkobits/lolcatjs"
const textColor = lolcat.fromString(text)
console.log(chalk.red(textColor))
```

## Yorkie/ lint-staged（代码自动格式化）

> Yorkie是尤大fork的husky，且与husky不兼容

### 安装

```sh
npm i -D yorkie lint-staged 
```

### package.json

```json
  "gitHooks": {
    "pre-commit": "lint-staged",
  },
  "lint-staged": {
    "*.{js,ts}": [
      "eslint --fix"
    ],
    "*.*":["prettier --write ."]
  }
```

## prettier(格式化)

新建`.prettierrc`和`.prettierignore`

控制格式化配置和忽略格式化的文件

`.prettierrc`

```

```

























