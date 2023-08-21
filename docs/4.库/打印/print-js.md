# 打印

花了一下午，主要是调研几种打印页面指定元素最终的实现效果，最终还是`print-js`效果度符合要求

## 直接window.print

可以保留页面样式

但是打印整个页面，会存在多余部分

```js
window.print()
```

## innerHTML指定内容

打印样式会丢失

```js
const innerHTML = document.body.innerHTML
document.body.innerHTML = this.$refs.content.innerHTML
window.print()
location.reload()
```

## html2canvas

存在显示不全的问题，暂时无法解决

## print-js

### 开始踩坑：

#### 1.打印的元素显示不全

原因是默认maxWidth属性是800，元素超过了，需要自行调整下maxWidth属性

#### 2.打印时font-size字体大小失效

翻了下`print-js`的github issues找到一种解决方案，设置`font_size: ""`,

#### 3.font-family自定义字体失效

没找到相关资料，最终花时间看了下源码

`print-js`是基于`iframe`实现，`style`属性作为样式插入到`iframe`中，那就简单了，传递一下`@font-face`字符串

重点在于开发环境和生产环境的文件地址不一样，所以我把地址挂在了window对象上

```js
import printjs from "print-js"
export default {
methods: {
  print() {
      printjs({
        // 打印页面的dom
        printable: this.$refs.content,
        type: "html",
        maxWidth: 1150, // 最大宽度
        font_size: "", // 不设置则使用默认字体大小
        style: `@font-face {
          font-family: "STZHONGS";
          src: url(${window.ttf}) format("truetype");
        }`,
        // 继承原来的所有样式
        targetStyles: ["*"],
      })
    }
  }
}
```

我的项目是基于vite的，html中加入`<script src="./config.js"></script>`，vite只会打包`type="module"`的script标签，这样config.js就不会被打包压缩，就可以用于写入一些不管开发还是打包后，都可以任意更改的配置项

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    // 新增
    <script src="./config.js"></script>
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

config.js

```js
// 字体文件路径，用于打印设置，print.js源码基于iframe实现，需要指定字体路径到iframe中
// 开发
window.ttf = "http://192.168.4.237:9010/src/assets/font/chinese.stzhongs.ttf"
// 线上
// window.ttf = "http://192.168.4.238:9010/test/assets/font/chinese.stzhongs.ttf"
```