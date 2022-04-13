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

# vuepress

### 介绍

VuePress 由两部分组成：第一部分是一个极简静态网站生成器，它包含由 Vue 驱动的主题系统和插件 API，另一个部分是为书写技术文档而优化的默认主题，它的诞生初衷是为了支持 Vue 及其子项目的文档需求



### 使用

安装脚手架

```bash
yarn global add vuepress 
# 或者：npm install -g vuepress
```

1. 新建项目文件夹
2. 进入项目文件夹
3. 创建package.json
4. 创建docs文件夹（存放所有markdown文件）
5. 进入docs文件夹下
6. 创建README.md（vuepress会自动读取）
7. 创建.vuepress文件夹（存放所有 VuePress 相关的文件）
8. 进入.vuepress文件夹下 
9. 创建config.js（vuepress配置文件，导出一个js对象）
10. 创建public文件夹(放置静态资源，打包后会放在.vuepress/dist/的根目录)

```bash
mkdir project    
cd project      
yarn init -y    
mkdir docs       
cd docs 
cd.>README.md
mkdir .vuepress 
cd .vuepress
cd >config.js
mkdir public
```

项目目录结构如下

   ```
vuepressProject
├─── docs
│   ├── README.md
│   └── .vuepress
│       ├── public
│       └── config.js
└── package.json
   ```

package.json配置启动命令

```json
"scripts": {
  "dev": "vuepress dev docs",
  "build": "vuepress build docs"
}
```

### README.md

vuepress会读取docs目录下的README.md文件，其中内容可以作为首页

```markdown
---
home: true

# heroImage: /hero.png

actionText: 快速上手 →
actionLink: /accumulate/
features:
- title: 简洁至上
  details: 简洁就完事了
- title: 组件库
  details: 用于工作中组件的分享
- title: 高性能
  details: 流畅地编写与查看
footer: MIT Licensed | 开源
---
```

在docs目录建立文件夹，并建立README.md文件，作为链接

```
::: tip 提示
this is a tip
:::

::: warning 注意
this is a tip
:::

::: danger 警告
this is a tip
:::

:tada: :100: :bamboo: :gift_heart: :fire:

:innocent: learn to death!!!!

## AAA

```

### config.js

```js
module.exports = {
  title: 'Hello VuePress', // 标题
  description: 'Just playing around',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav: [ // 导航栏配置
      { text: '前端基础', link: '/accumulate/' },
      { text: '算法题库', link: '/algorithm/' },
      { text: '微博', link: 'https://baidu.com' }
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
}
```

### PWA

PWA全称Progressive Web App，即渐进式WEB应用

### emoji大全

https://www.webfx.com/tools/emoji-cheat-sheet/
