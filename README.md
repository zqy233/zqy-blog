# ✨ zqy233的前端学习笔记

> https://zqy233.github.io/zqy-blog/

## 运行项目

使用 pnpm 包管理器

```bash
# 安装依赖
pnpm i
# 运行
pnpm watch
```

基于 node 的 fs 模块动态获取所有 md 文件，生成导航和左侧菜单

基于 nodemon 实现文件夹监听，新增修改删除 md 文件后重新启动 vitepress

最终实现只需关注 md 本身编写，无需修改 vitepress 配置