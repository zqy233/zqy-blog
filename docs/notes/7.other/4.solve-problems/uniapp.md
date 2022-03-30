# uniapp

##  The data property “x“ is already declared as a prop. Use prop default value instead

原因：组件传值时，props传过来了一个值，但在页面data中也定义了一个同名值

:::tip

props的优先级 > data中的优先级 > methods中的优先级

:::

解决方案：更换data中定义的属性名即可

## JS 文件编译错误] 以下文件体积超过 500KB，已跳过压缩以及 ES6 转 ES5 的处理。common/vendor.js

原因：使用uniapp运行至微信小程序时代码文件体积过大

解决方案：HBuilderx中勾选运行->运行时是否压缩代码

## DevTools failed to load SourceMap: Could not load content for ***.js.map: HTTP error: code 404 

原因：项目引用的第三方的JavaScript工具是压缩后的版本，存在SourceMap的指向信息，浏览器启用了JavaScript源映射，但是项目中没有相应的SourceMap文件，所以抛出此异常

SourceMap是从已转换的代码映射到原始源的文件，使浏览器能够重构原始源并在调试器中显示重建的原始源，调试原始源代码会比浏览器下载的转换后的代码更加容易

其实没有SourceMap文件是不会影响项目的正常运行和使用的

解决方案：控制台右上角点击`设置`->Preferences->Sources->取消勾选`Enable JavaScript source maps`选项

