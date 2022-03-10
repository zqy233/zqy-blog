# vscode常用插件

## Chinese

适用于 VS Code 的中文（简体）语言包插件

## ESLint

格式校验插件

## quokka

提供js运行环境，可以直接运行js和ts文件，可以用于一些逻辑的测试

## ES7 React/Redux/GraphQL/React-Native snippets

快捷输出react语句的插件  vue也有不少用得上

## Bracket Pair Colorizer 

彩虹色括号匹配插件，体验效果非常好

## Indent Rainbow

彩虹色缩进，搭配Bracket Pair Colorizer，项目变成彩虹色

## Auto Close Tag和Auto Rename Tag    

前者自动闭合标签，后者修改标签会同步对应闭合标签

## vetur

vetur对prettier进行设置，格式化vue代码

```json
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "auto" // html标签属性换行
    },
    "prettier": {
      "singleQuote": true, // 如果为 true，将使用单引号而不是双引号
      "semi": false, // 是否在每行末尾添加分号
      "printWidth": 1000,  //  每行超过多少字符自动换行
      "wrapAttributes": false,  // html标签属性换行
      "trailingComma": "none"  // 尽可能控制尾随逗号的输出
    }
  }
```

## Path Autocomplet

使用打包工具如webpack等设置路径别名后，vscode无法识别路径别名，此时就需要使用插件了

1. vscode商店搜索Path Autocomplete，点击安装

2. 在settings.json中设置该插件配置，匹配相应路径别名，此时vscode就有提示了

   ```json
    "path-autocomplete.excludedItems": {
         "**/*.js": { "when": "**/*.ts" }, 
         "**/*.map": { "when": "**" },
         "**/{.git,node_modules}": { "when": "**" } 
       },
       "path-autocomplete.pathMappings": {
         "@": "${folder}/src",
         "c": "${folder}/src/components"
       }
   ```

3. 或者在项目根目录新建.vscode文件夹，在该文件夹下新建settings.json,这种用法只为该项目生效

```json
 "path-autocomplete.excludedItems": {
      "**/*.js": { "when": "**/*.ts" }, 
      "**/*.map": { "when": "**" },
      "**/{.git,node_modules}": { "when": "**" } 
    },
    "path-autocomplete.pathMappings": {
      "@": "${folder}/src",
      "c": "${folder}/src/components"
    }
```

## live server

设置打开的浏览器

settings.json中添加自己的浏览器路径

```json
"liveServer.settings.AdvanceCustomBrowserCmdLine": "C:\\Program Files\\Internet Explorer\\iexplore.exe"
```

