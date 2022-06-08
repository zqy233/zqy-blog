# ✨ 个人博客

fork form `@vue/theme`，vue 下一代官方文档使用主题，very nice

以此搭建的个人博客地址[https://zqy233.github.io/vite-vue-blog/](https://zqy233.github.io/vite-vue-blog/):point_left:

个人博客中很多知识收集整理自网上，若有侵权请留言联系我

感谢汪图南博客，从中学习到很多
[https://wangtunan.github.io/blog/typescript/base.html#%E5%AE%89%E8%A3%85](https://wangtunan.github.io/blog/typescript/base.html#%E5%AE%89%E8%A3%85)

## 🎉markdown 渲染

基于 markdown 文件渲染的文档系统

## 🚀 性能出色

基于 vite 与 vitepress，按需加载，性能出色，极速更新文档

## 🌈 主题配置

使用 `@vue/theme`,fork from` @vue/theme`，搭配一些自己写的 css

## 😊 自动生成菜单路由

使用 nodejs 自动读取所有文件夹与其下方文件的名字及路径，动态生成菜单信息与路由信息，只需要关注 markdown 笔记本身的编写即可

## 😊 如何使用本项目极速搭建你自己的博客

git clone 本项目，npm i，npm run dev启动项目，项目运行可能需要较新的node版本

删除blog/notes文件夹下，我的所有markdown笔记文件夹，仿照我的文件夹结构，将你的markdown笔记文件夹放进去，重新npm run dev启动项目

很明显，你会注意到，所有文件夹都是三级结构，一二级都是文件夹，三级才是markdown笔记文件，文件名前面的数字是用于排序的，如果你没有排序的需要，也可以不写

一级会渲染为菜单名，二级会渲染为标题名，三级则渲染为页面，npm run dev后你会发现博客启动了，如果内容为你的markdown笔记内容，说明正常使用了

此时，还需要修改一处，修改blog/index.md文件中的快速开始按钮的跳转href，为你想要跳转的默认markdown笔记页面路径

npm run build打包，会在blog文件夹下生成docs文件夹，剪切至根目录，上传github，设置github pages为docs目录

注意，只能监听markdown笔记文件内容更改，新增或删除markdown笔记文件需要重新npm run dev启动项目
