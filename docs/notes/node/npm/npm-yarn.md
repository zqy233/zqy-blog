# npm与yarn

## 基础用法

```bash
# yarn可以看作更优秀的npm命令
npm i -g yarn

# 查询当前地址配置
npm get registry 
yarn config get registry

# 切换淘宝镜像
npm config set registry http://registry.npm.taobao.org/
yarn config set registry http://registry.npm.taobao.org/

# 切换回原先地址，比如上传npm包时不能使用淘宝路径
npm config set registry https://registry.npmjs.org/
yarn config set registry https://registry.npmjs.org/

# 查看npm配置
npm config list

# 代理设置成空，用于解决一些软件会自动给npm添加代理，之后不需要使用这些软件时就需要清空
npm config set proxy null
npm config set https-proxy null
# 或者
npm config delete proxy
npm config delete https-proxy

#下载项目所有依赖
npm install	
yarn add

# 全局安装模块
npm i -g moduleName 
yarn global add [package] 
# 查看全局安装
npm list -g --depth 0 
# 卸载全局安装
npm uninstall -g <package>

# 不仅用于开发且用于打包的模块
npm install --save moduleName
# 上方简写
npm i -s moduleName

# 只用于开发环境，不用于打包的模块
npm install --save-dev moduleName
yarn add --dev moduleName 
# 上方简写
npm i -D moduleName
yarn add -D moduleName

# 卸载包
npm uninstall moduleName
yarn remove moduleName

# 清理缓存
npm cache clean --force

# 本地运行npm包
# 在npm包目录中
npm link
# 如果已经npm link过,很可能会报错，这时可以添加-forcec参数，覆盖上一次的link
npm link -f

# 升级npm版本
npm version major                    	
yarn version --major               
npm version minor                    	
yarn version --minor          
npm version patch                    	
yarn version --patch   
```

## package.json

 package.json是一个记录文件，npm借由这个记录文件对依赖包进行管理

```bash
# 创建package.json文件,使用输入的方式初始化配置
npm init
# 使用默认参数创建package.json文件
npm init --yes 
# 是上方的简写
npm init -y 
```

```json
{
  "name": "vue-esign", // 包名
  "description": "A canvas signature component of vue", // 描述
  "version": "1.0.5", // 版本号
  "author": "JaimeCheng <403693553@qq.com>", // 作者
  "license": "MIT", // MIT是较宽松的开源许可证
  "main": "dist/index.js", // 主文件
  "private": false, // 开源
  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server --open --hot",
    "build": "cross-env NODE_ENV=production webpack --progress --hide-modules"
  },
  "repository": { // 仓库地址
    "type": "git",
    "url": "https://github.com/JaimeCheng/vue-esign"
  },
  "bugs": { 
    "url": "https://github.com/JaimeCheng/vue-esign/issues"
  },
  "homepage": "https://git.io/JemnO", // 主页
  "keywords": [ // 关键词，用于npm市场搜索
    "vue",
    "component",
    "e-sign",
    "signature",
    "canvas"
  ],
  "dependencies": { // 依赖
    "vue": "^2.5.11"
  },
  "browserslist": [ // 目标浏览器配置表，根据提供的目标浏览器的环境来，智能添加css前缀，js的polyfill垫片,来兼容旧版本浏览器
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ],
  "devDependencies": { // 开发依赖
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-preset-env": "^1.6.0",
    "babel-preset-stage-3": "^6.24.1",
    "cross-env": "^5.0.5",
    "css-loader": "^0.28.7",
    "file-loader": "^1.1.4",
    "vue-loader": "^13.0.5",
    "vue-template-compiler": "^2.4.4",
    "webpack": "^3.6.0",
    "webpack-cli": "^4.9.1",
    "webpack-dev-server": ">=3.1.11"
  }
}
```

## cnpm下载

方法一

```bash
npm install -g cnpm
cnpm config set registry https://registry.npm.taobao.org
```

方法二

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## .gitignore

为npm包添加.gitignore，文件内容加入，代码提交至仓库时就会跳过.gitignore中的内容，如以下代码就会跳过node_modules

```bash
node_modules
```

如果不想提交.gitignore（不知道当时为啥有这样奇怪的想法），可以在.git/info/exclude中加入以下代码，仅供了解

```bash
.gitignore 
```

## 发布与下架npm包

1. npm login
2. 输入username（npm账户，没有可以去npm官网注册，bing搜索npm即可）
3. 输入password
4. npm publish

注意！不能使用淘宝镜像，需要切换回默认npm路径

```bash
npm config set registry https://registry.npmjs.org/
```

更新版本号,常用命令

```bash
npm version patch
```

下架

```bash
# 测试包可以随意下架，如果你的包有使用者后不能这样干
npm unpublish -f 
```

## 本地调试组件库

```bash
npm -g i yalc
```

组件库项目中运行以下命令,将会以该项目作为npm包发布至本地yalc中，包名为packjson中name

```bash
yalc publish
```

接着像使用正常npm包一样，使用组件库的项目即可

```bash
yalc add 组件库名
yarn
```

## vue add和npm i区别

相同：都是下载在npm市场里的npm包

区别：vue add 是使用@vue/cli这个npm包里面的命令，去添加vue团队开发的vue相关的npm包，当然，这些npm包也可以自行npm i的方式下载

## 本地运行打包后前端项目

本质上就是使用node启动服务器，来运行前端项目

```bash
npm i -g serve
serve -s 打包文件夹名
```

## nvm

nvm是node版本管理工具

```bash
# 查看node版本列表
nvm ls
# 下载指定node版本
nvm install 版本号
# 使用指定node版本
nvm use 版本号
# 删除node指定版本
nvm uninstall 版本号
```

