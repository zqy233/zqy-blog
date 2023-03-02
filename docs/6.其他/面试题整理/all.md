## import和require的区别

import是ES6标准中的模块化解决方案，require是node中遵循CommonJS规范的模块化解决方案

import在代码编译时被加载，所以必须放在文件开头，require在代码运行时被加载，所以require理论上可以运用在代码的任何地方，所以import性能更好

import引入的对象被修改时，源对象也会被修改，相当于浅拷贝，require引入的对象被修改时，源对象不会被修改，官网称值拷贝，我们可以理解为深拷贝

import有利于tree-shaking（移除JavaScript上下文中未引用的代码），require对tree-shaking不友好。

import会触发代码分割（把代码分离到不同的bundle中，然后可以按需加载或者并行加载这些文件），require不会触发

import是es6的一个语法标准，如果要兼容浏览器的话必须转化成es5的语法，require 是 AMD规范引入方式

目前所有的引擎都还没有实现import，import最终都会被转码为require，在webpack打包中，import和require都会变为`_webpack_require_`

