# DB Schema

> > https://uniapp.dcloud.net.cn/uniCloud/schema.html#db-schema%E6%A6%82%E8%BF%B0

## 什么是DB Schema

unicloud定义数据表的一种方式，基于这种方式，可以快速定义一张表的字段，并配置权限、格式、校验等等

## 如何编写DB Schema

### 方式1、在web控制台编写schema

1. 登录 [uniCloud控制台](https://unicloud.dcloud.net.cn/)，选中一个数据表
2. 点击表右侧页签 “表结构”，点击 “编辑” 按钮，在编辑区域编写 Schema，编写完毕后点保存按钮即可生效

### 方式2、在HBuilderX中编写schema（推荐）

创建schema

1. 在`uniCloud`项目右键，选择`创建database目录`（如已有目录则忽略）
2. 在 database 目录右键选择`新建数据集合schema`

上传schema

- 在单个schema文件右键可以只上传当前选中的schema。快捷键是【Ctrl+u】。（Ctrl+u是HBuilderX的通用快捷键，不管是发布App还是上传云函数、schema，都是Ctrl+u）
- 在database目录右键可以上传全部schema

下载schema

- database目录右键可以下载所有schema及扩展校验函数

HBuilderX中运行前端项目，在控制台选择连接本地云函数，或者本地云函数/云对象直接运行，此时本地编写的schema可直接生效，无需上传。方便编写调试

### 可视化管理schema文件插件

推荐使用HBuilderX插件进行可视化的开发schema文件

https://ext.dcloud.net.cn/plugin?name=bctos-schema2view

安装完在`*.schema.json`文件中右击，选择菜单第一项`可视化编辑`