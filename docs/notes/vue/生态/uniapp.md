# uniapp

## 开发工具安装

官网下载安装HBuilderX和微信小程序开发者工具

新建项目

打开HBuilderX，上方目录栏依次选择文件>新建>项目>uniapp

## 运行项目到浏览器

HBuilderX中上方目录栏依次选择，运行>运行到浏览器，打开相应浏览器

## 运行项目到小程序

HBuilderX中上方目录栏，运行>运行到小程序模拟器，设置路径为微信小程序开发者工具安装路径，需要去微信小程序开发者工具设置中打开端口，才能正常运行

## 运行项目到手机

以我手机，oppoA11为例，设置->关于手机->版本信息->点击七次打开开发者模式->回到设置首页->其他设置->开发者选项->打开usb调试->

## 导入iconfont文件

iconfont网站上将需要的icon图标加入购物车，下载解压，将文件夹中后缀名为ttf，woff，woff2，css的文件复制到项目中

## 修改iconfont.css文件的路径

路径使用~@和@都可以代表项目根目录

将其指向ttf，woff，woff2所在目录

```css
@font-face {
  font-family: "iconfont"; /* Project id 2786326 */
  src: url('~@/static/icon/iconfont.woff2?t=1630582491207') format('woff2'),
       url('@/static/icon/iconfont.woff?t=1630582491207') format('woff'),
       url('@/static/icon/iconfont.ttf?t=1630582491207') format('truetype');
}
```

## 在项目中导入iconfont.css

```js
import '@/common/iconfont.css'
```

