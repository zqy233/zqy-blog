# ✨ 个人博客

> git clone `@vue/theme`，基于vue 下一代官方文档使用主题修改，very nice
>
> 以此搭建的个人博客地址<https://zqy233.github.io/vite-vue-blog/>👈
>
> 个人博客中很多知识收集整理自网上，若有侵权请留言联系我
>
> 感谢汪图南博客，从中学习到很多
> <https://wangtunan.github.io/blog/typescript/base.html#%E5%AE%89%E8%A3%85>

## 🎉markdown 渲染

基于 markdown 文件渲染的文档系统

## 🚀 性能出色

基于 vite 与 vitepress，按需加载，性能出色，极速更新文档

## 🌈 主题配置

使用 `@vue/theme`，搭配一些自己写的 css

## 😊 自动生成菜单路由

使用 nodejs 自动读取所有文件夹与其下方文件的名字及路径，动态生成菜单信息与路由信息，只需要关注 markdown 笔记本身的编写即可

## 😊 如何使用本项目极速搭建你自己的博客

1.  `git clone 本项目`，`npm i`，`npm run dev`启动项目，本项目基于`vitepress`，运行可能需要较新的 node 版本

2.  删除`blog/notes`文件夹下，我的所有`markdown笔记`文件夹，仿照我的文件夹结构，将你的`markdown笔记`文件夹放进去，重新`npm run dev`启动项目

3.  很明显，你会注意到，所有`markdown笔记`文件夹都是三级结构，一二级都是文件夹，三级才是`markdown笔记`

4.  一级文件夹名会渲染为菜单名，二级文件夹名会渲染为标题名，三级`markdown笔记`会渲染为页面，`npm run dev`后你会发现博客启动了，如果内容为你的 markdown 笔记内容，说明正常使用了

5.  文件名前面的数字是用于排序的，排序的数字不会渲染，如果你没有排序的需要，可以不写

6.  此时，还需要修改一处，修改`blog/index.md`文件中的快速开始按钮的跳转 href，为你想要跳转的默认`markdown笔记`页面路径

7.  `npm run build`打包前，需要修改`.vitepress/config.ts`中`base`属性，比如使用`github pages`，需要将该属性设置为仓库名

8.  `npm run build`打包后，会在根目录生成`docs`文件夹，代码上传 github，设置`github pages`为`docs`目录，即可显示博客

9.  需要注意的是，`vitepress`只能监听`markdown笔记`内容更改，新增或删除`markdown笔记`需要重新`npm run dev`运行项目
