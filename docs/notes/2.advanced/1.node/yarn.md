```bash
# 
npm i -g yarn

# 查询当前地址配置
yarn config get registry

# 切换淘宝镜像
yarn config set registry http://registry.npm.taobao.org/

# 切换回原先地址，比如上传npm包时不能使用淘宝路径
yarn config set registry https://registry.npmjs.org/

#下载项目所有依赖
yarn 

# 全局安装模块
yarn global add package

# 只用于开发环境，不用于打包的模块
yarn add --dev moduleName

# 上方简写
yarn add -D moduleName

# 卸载包
yarn remove moduleName

# 升级npm版本
yarn version --major

yarn version --minor

yarn version --patch
```
