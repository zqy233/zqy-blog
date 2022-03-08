# vitepress

## 安装

- 第一步：创建目录

```bash
mkdir vitepress-starter && cd vitepress-starter
```

- 第二步：vitepress 首选推荐使用`yarn` 创建包管理工具进行初始化

```bash
yarn init
```

- 第三步：本地安装vitepress

```bash
yarn add --dev vitepress
```

- 第四步：创建你的第一个文档

```bash
mkdir docs && echo '# Hello VitePress' > docs/index.md
```

- 第五步：给`package.json`添加相关命令

```json
{
  "scripts": {
   "docs:dev": "vitepress dev docs",
   "docs:build": "vitepress build docs",
   "docs:serve": "vitepress serve docs"
  }
}
```

- 第六步：本地运行vitepress

> 这个时候我们就能通过打开 `http://localhost:3000/` 进行查看

```bash
yarn docs:dev
```

## 配置

docs目录下新建.vitepress文件夹，该文件夹下新建config.js

```js
module.exports = {
  title: "Kylin",
  description: "Just playing around.",
  lang: "en-US",
  themeConfig: {
    // 展示搜索框
    algolia: {
      appKey: "",
      indexName: "",
      searchParameters: {
        faeFilters: ["tags:guide,api"]
      }
    },
    nav: [
      {
        text: "首页",
        link: "/"
      },
      {
        text: "GitHub",
        link: "https://github.com/lxKylin/vitepressdemo"
      }
    ],
    // 侧边栏
    sidebar: {
      "/": getDemoSidebar()
    }
  },
  markdown: {
    config: md => {
      const { demoBlockPlugin } = require("vitepress-theme-demoblock")
      md.use(demoBlockPlugin)
    }
  }
}

function getDemoSidebar() {
  return [
    {
      text: "介绍"
    },
    {
      text: "更新日志",
      children: [
        {
          text: "新特性",
          link: "/components/log/"
        }
      ]
    },
    {
      text: "开发指南",
      children: [
        {
          text: "安装"
        }
      ]
    },
    {
      text: "快速开始",
      link: "/"
    },
    {
      text: "基础组件",
      children: [
        {
          text: "Button 按钮",
          link: "/components/button/"
        },
        {
          text: "Icon 图标",
          link: "/components/icon/"
        }
      ]
    },
    {
      text: "布局组件"
    }
  ]
}
```

## 下载代码块插件

```bash
npm install -D vitepress-theme-demoblock
```

在.vitepress文件夹下新建theme文件夹，该文件夹下新建index.js

```js
import Theme from "vitepress/dist/client/theme-default"

// 导入主题样式
import "vitepress-theme-demoblock/theme/styles/index.css"

// 导入插件的主题
import { registerComponents } from "./register-components.js"

export default {
  ...Theme,
  enhanceApp({ app }) {
    registerComponents(app)
  }
}
```

package.json中新建一个scripts，用于自动注册生成register-components.js文件

```json
"scripts": {
    "dev": "vitepress dev docs",
    "build": "vitepress build docs",
    "serve": "vitepress serve docs",
    "reg": "vitepress-rc"
  }
```

```bash
yarn reg
```

## 下载依赖

如下

```json
{
  "name": "vitepress-starter",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "devDependencies": {
    "@types/node": "^17.0.21"
  },
  "scripts": {
    "dev": "vitepress",
    "build": "vitepress build",
    "clean": "rm -rf .vitepress/dist"
  },
  "dependencies": {
    "@vue/theme": "^1.0.1",
    "dynamics.js": "^1.1.5",
    "gsap": "^3.9.1",
    "vitepress": "^0.21.6",
    "vue": "^3.2.27"
  }
}
```

