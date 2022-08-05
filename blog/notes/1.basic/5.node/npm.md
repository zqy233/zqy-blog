#  npm

> npm是随同nodejs一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：
>
> - 允许用户从[npm市场](https://www.npmjs.com/)下载别人编写的第三方包到本地项目中使用
> - 允许用户从[npm市场](https://www.npmjs.com/)下载并安装别人编写的命令行程序到本地使用
> - 允许用户将自己编写的包或命令行程序上传到[npm市场](https://www.npmjs.com/)供别人使用
>
> 可以通过命令行输入"npm -v"来测试是否成功安装nodejs

## 查看版本

```sh
npm -v
```

## 镜像操作

切换到淘宝镜像可以在下载很多包时更加快速

```sh
## 修改npm至新的淘宝镜像源：
npm config set registry http://registry.npmmirror.com
## 解除镜像并恢复到官方源
npm config set registry https://registry.npmjs.org
# 查询当前地址配置
npm get registry
```

## 下载所有依赖包

```sh
npm install
# 上方简写
npm i 
```

## 下载包

用于开发环境与打包环境的包

```sh
npm install --save package
# 上方简写
npm i -s package
```

只用于开发环境，不用于打包环境的包

```sh
npm install --save-dev package
# 上方简写
npm i -D package
```

## 删除包

```sh
npm uninstall package
```

## 全局包操作

```sh
# 全局安装包
npm i -g package
# 查看全局安装包
npm list -g --depth 0
# 卸载全局安装包
npm uninstall -g package
```

##  创建package.json

```sh
# 使用输入的方式初始化配置package.json
npm init
# 使用默认参数创建package.json文件
npm init --yes
# 上方简写
npm init -y
```

## 清理缓存

```sh
npm cache clean --force
```

## 代理设置成空

用于解决一些软件会自动给npm添加代理，导致npm无法正常使用，之后不需要使用这些软件时就需要代理设置成空

```sh
npm config set proxy null
npm config set https-proxy null
# 或者
npm config delete proxy
npm config delete https-proxy
```

## 本地安装npm包

```sh
npm link
# 如果已经npm link过,很可能会报错，这时可以添加-forcec参数，覆盖上一次的link
npm link -f
```

## 查看npm配置

```sh
npm config list
```

### 依赖

```sh
npm set-script prepare "husky install"
```

## 发布与下架 npm 包

1. npm login
2. 输入 username（npm 账户，没有可以去 npm 官网注册，bing 搜索 npm 即可）
3. 输入 password
4. npm publish

注意！不能使用淘宝镜像，需要切换回默认 npm 路径

```sh
npm config set registry https://registry.npmjs.org/
```

更新版本号,常用命令

```sh
npm version patch
```

下架

```sh
# 测试包可以随意下架，如果你的包有使用者后不能这样干
npm unpublish -f
```

## 本地调试组件库

> 组件库本质上也是一个npm包

yalc用于本地调试组件库

```sh
npm -g i yalc
```

在组件库项目中运行以下命令,将会把该项目作为 npm 包发布至本地 yalc 中，包名为 package.json 中 name

```sh
yalc publish
```

接着添加组件库的项目至开发项目，下载依赖，这样就可以快速测试组件库了

```sh
yalc add 组件库名
yarn
```

## 依赖包版本号~，^和*

- `~`会匹配最近的小版本依赖包，比如~1.2.3会匹配所有1.2.x版本，但是不包括1.3.0
- `^`会匹配最新的大版本依赖包，比如^1.2.3会匹配所有1.x.x的包，包括1.3.0，但是不包括2.0.0
- 可以指定特定的版本号，直接写1.2.3，前面什么前缀都没有，这样固然没问题，但是如果依赖包发布新版本修复了一些小bug，那么需要手动修改`package.json`文件；`~`和`^`则可以解决这个问题。
- 注意`^`版本更新可能比较大，会造成项目代码错误，所以**建议使用`~`来标记版本号**，这样可以保证项目不会出现大的问题，也能保证包中的小bug可以得到修复
- 版本号写`*`，这意味着**安装最新版本的依赖包**，但缺点同上，可能会造成版本不兼容，**慎用**！

## 本地运行打包后前端项目

本质上就是使用 node 启动服务器，来运行前端项目

```sh
npm i -g serve
serve -s 打包文件夹名
```

