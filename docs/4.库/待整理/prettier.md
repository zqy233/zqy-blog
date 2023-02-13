# 使用

一般通过以下方式使用prettier

- 使用vscode等代码编辑器的`prettier插件`：搭配快捷键如ctrl+s，保存时自动格式化，配置简单，使用方便，但是缺点是由于团队成员可能使用不同的编辑器，prettier版本、配置不同，从而格式化的风格迥异且难统一。所以这种使用方式个人使用没问题，团队推广不太适合
- 下载`prettier`npm 包，在项目中配置好，强制所有开发人员使用统一风格，优点是确实易于统一，缺点是所有开发人员必须按照指定风格来格式化代码了，剥夺了个人代码风格喜好

所以我们可以结合第一种和第二种方式，搭配git集成，代码提交时候再进行格式化，从而实现开发时个人使用prettier插件自行格式化代码，git提交代码时再按指定的统一配置格式化项目代码

## npm包方式使用

下载

```sh
npm i -D prettier
```

新建test.js

```js
function uglyCode(){console.log("this is an ugly function!")}
```

使用命令格式化指定文件

```sh
npx prettier --write .\test.js
```

使用命令格式化所有文件

```sh
npx prettier --write .
```

格式化后

```js
function uglyCode() {
  console.log("this is an ugly function!");
}
```

prettier默认不会处理`node_modules`里的文件，如果想忽略其他的文件或目录，可以在项目目录下新建`.prettierignore`文件，表示忽略某些文件或文件夹，具体格式跟`.gitignore`类似.

目前的代码格式化都是Prettier根据自己的默认配置帮我们做的，当然也可以通过Prettier的配置项实现自定义的格式化

新建一个`.prettierrc`的文件，格式为json，结构如下

