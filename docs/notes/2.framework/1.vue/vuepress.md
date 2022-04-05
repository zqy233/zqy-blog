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