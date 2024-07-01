# .gitattributes

> https://blog.csdn.net/weixin_45502929/article/details/117553758

如果不设定语言，github通常会对这个项目进行语言自动统计。但有时候不尽如人意，比如这个项目中使用了大量的pyecharts之后，就会生成相当大量的html代码从而使得统计出现异常。
我们可以利用.gitattributes的编写来解决这个问题。

## linguist-language

使用`linguist-language`进行语言转换，比如将ruby计入java中

```sh
	.rb linguist-language=Java
```

## linguist-detectable

要对整个语言进行启用和弃用，使用`linguist-detectable`选项：

```sh
*.sql linguist-detectable=false //弃用SQl语言统计
*.html linguist-detectable=true //启用html语言统计
```

## linguist-vendored

要对部分文件夹进行不统计，使用`linguist-vendored`选项：

```sh
Visualization/out/*.html linguist-vendored
```

## linguist-documentation

`linguist-documentation`没有使用过，猜想和linguist-vendored用法类同，只是做一类别区分

## 示例-pinia-plugin-persistedstate

```sh
.husky/** linguist-vendored
packages/nuxt/playground/** linguist-vendored
examples/** linguist-documentation
```

