# dicsify

> 使用cdn来在线编译md文件的框架

## 安装

```sh
npm i -D docsify-cli
```

## 使用命令

package.json加入两个命令，分别用于生成docs文件夹，运行docs文件夹中html

```sh
"initdoc": "docsify init ./docs",
"docs": "docsify serve docs"
```

### 配置

`docsify init ./docs`命令会生成一个html，用于编译md为网页，在该html中进行`docsify `配置

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>教程</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="description" content="Description" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
    <!-- <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4/lib/themes/vue.css" /> -->
    <!-- 黑色主题 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsify-themeable@0/dist/css/theme-simple-dark.css" />
  </head>
  <body>
    <div id="app"></div>
    <script>
      window.$docsify = {
        // 标题名
        name: "jsPlumb中文基础教程",
        // 主题颜色
        themeColor: "#F07178",
        // Github仓库地址
        repo: "https://github.com/wangduanduan/jsplumb-chinese-tutorial.git",
        // 搜索栏
        search: {
          placeholder: "搜索",
          noData: "查无结果"
        },
        // 子目录最大层级
        subMaxLevel: 2,
        // 格式化更新时间
        formatUpdated: "{YYYY}-{MM}-{DD} {HH}:{mm}",
        // 自动跳转到页面顶部
        auto2top: true,
        // 代码复制文本
        copyCode: {
          buttonText: "复制",
          errorText: "Error",
          successText: "复制成功"
        },
        // 字数统计
        count: {
          countable: true,
          position: "top",
          margin: "10px",
          float: "right",
          fontsize: ".9em",
          color: "rgb(90,90,90)",
          language: "chinese",
          localization: {
            words: "",
            minute: ""
          },
          isExpected: true
        }
      }
    </script>
    <!-- docsify的js依赖 -->
    <script src="//cdn.jsdelivr.net/npm/docsify@4"></script>
    <!-- emoji表情支持 -->
    <script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/emoji.min.js"></script>
    <!-- 图片放大缩小支持 -->
    <script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/zoom-image.min.js"></script>
    <!-- 搜索功能支持 -->
    <script src="//unpkg.com/docsify/lib/plugins/search.js"></script>
    <!--在所有的代码块上添加一个简单的Click to copy按钮来允许用户从你的文档中轻易地复制代码-->
    <script src="//cdn.jsdelivr.net/npm/docsify-copy-code/dist/docsify-copy-code.min.js"></script>
    <!-- 字数统计 -->
    <script src="//unpkg.com/docsify-count/dist/countable.js"></script>
  </body>
</html>
```

## 设置目录

新建_navbar.md

```markdown
- 主站
  - [Sakura 主题](https://pyrroleach.com)
- 博客
  - [handsome 主题](https://blog.pyrroleach.com)
- 网站
  - [brave 主题](https://xiaoya.pyrroleach.com)
```

