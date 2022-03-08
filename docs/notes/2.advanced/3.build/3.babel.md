# babel

> babel是一个工具集，主要用于将ES6版本的javascript代码转为ES5等向后兼容的js代码，从而可以运行在低版本浏览器或其它环境中

## 入门使用

1.新建babel.config.js，该文件是babel配置文件

```js
module.exports = {
  presets: ["@babel/env"],
  plugins: []
 }
```

2.新建一个main.js，该js里的代码使用了es6的箭头函数

```js
const fn = num => num + 2
```

3.安装三个babel官方npm包

```bash
npm i -D @babel/cli @babel/core @babel/preset-env
```

4.安装完成后，执行下面的命令进行转码，该命令含义是把main.js转码生成compiled.js文件

```bash
npx babel main.js -o compiled.js
```

5.生成了compiled.js，查看内容，发现es6语法转换成了es5语法，这就是一个最简单的babel使用过程

```js
"use strict";

var fn = function fn(num) {
  return num + 2;
};
```

## babel.config.js

> babel.config.js是babel执行时会默认在当前目录寻找的babel配置文件

除了babel.config.js，也可以选择用.babelrc或.babelrc.js这两种配置文件，还可以直接将配置参数写在package.json，它们的作用都是相同的，只需要选择其中一种

@babel/cli，@babel/core与@babel/preset-env是Babel官方的三个包，它们的作用如下：

- @babel/cli是babel命令行转码工具，使用命令行进行babel转码就需要安装它

- @babel/cli依赖@babel/core，因此也需要安装@babel/core这个babel核心npm包

- @babel/preset-env这个npm包提供了ES6转换ES5的语法转换规则，我们在babel配置文件里指定使用它，如果不使用的话，也可以完成转码，但转码后的代码仍然是ES6的，相当于没有转码

  小结：

  1.一个完整的babel转码工程通常包括如下：

  - babel配置文件
  - babel相关的npm包
  - 需要转码的JS文件

  2.通过以下命令对单个JS文件进行转码：

  ```js
  npx babel main.js -o compiled.js
  ```

  :::info
  
  compiled.js命令里npx是新版node里附带的命令，它运行的时候默认会找到node_modules/.bin/下的路径执行，这样就可以快捷运行-D下载的npm包
  
  :::
  

## polyfill

babel默认只转换新的JavaScript语法（syntax），而不转换新的 API，新的API分类两类，一类是Promise、Map、Symbol、Proxy、Iterator等全局对象及其对象自身的方法，例如Object.assign，Promise.resolve；另一类是新的实例方法，例如数组实例方法[1, 4, -5, 10].find((item) => item < 0)

所以需要使用polyfill，为当前环境提供一个垫片，所谓垫片，是指垫平不同浏览器之间差异的东西。polyfill提供了全局的ES6对象以及通过修改原型链Array.prototype等实现对实例的实现，polyfill广义上讲是为环境提供不支持的特性的一类文件或库，狭义上讲是polyfill.js文件以及@babel/polyfill这个npm包。



