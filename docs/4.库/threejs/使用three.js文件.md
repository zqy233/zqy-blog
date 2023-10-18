## cdn方式

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

