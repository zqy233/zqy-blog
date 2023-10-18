# three.js的实战手册

> https://discoverthreejs.com/zh/

《探索three.js》是对web作为3D图形平台的完整介绍，它使用three.js WebGL库，编写自一位核心 three.js 开发人员。

本书是一个完整的教程系列，旨在帮助您在尽可能短的时间内开始创建现代、专业品质的3D Web应用程序。

## 什么是three.js？

three.js是世界上最流行的用于在Web上显示3D内容的JavaScript框架。

使用 three.js，您不再需要花哨的游戏PC或控制台来显示逼真的3D图形。 您甚至不需要下载特殊的应用程序。现在每个人都可以使用智能手机和网络浏览器体验令人惊叹的3D应用程序。

这个惊人的库和充满活力的社区是您在浏览器、笔记本电脑、平板电脑或智能手机上创建游戏、 音乐视频、科学和数据可视化或几乎任何您能想象的任何东西所需要的一切！

## cdn方式使用threejs

浏览器地址栏输入`unpkg（一个常见的cdn服务商）网址+包名`，最后添加斜线，可以查看一个包内的所有文件列表:

`https://www.unpkg.com/three/`：

并且地址会自动调整为对应的three最新版本的文件目录

`https://www.unpkg.com/browse/three@0.157.0/`

访问文件目录中的threejs文件的完整地址

`https://www.unpkg.com/three@0.157.0/build/three.module.js`

```js
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My first three.js app</title>
    <style>
      body {
        margin: 0;
      }
    </style>
  </head>
  <body>
    <script type="module">
      import * as THREE from "https://www.unpkg.com/three@0.157.0/build/three.module.js";

      console.log(THREE);
    </script>
  </body>
</html>
```

