# yarn

yarn可以看作更优秀的npm命令

### 全局安装

```sh
npm i -g yarn
```

### 镜像操作

```sh
# 查询当前地址配置
yarn config get registry
# 切换淘宝镜像
yarn config set registry http://registry.npmmirror.com
# 切换回原先地址
yarn config set registry https://registry.npmjs.org/
```

### 下载所有依赖包

```
yarn
```

### 下载包

```sh
# 下载用于用于开发环境与打包环境的包
yarn add package
# 下载用于仅用于开发环境的包
yarn add --dev package
# 上方简写
yarn add -D package
```

### 全局安装依赖包

```sh
yarn global add package
```

### 删除包

```sh
yarn remove package
```

