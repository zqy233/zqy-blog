# nvm

> nvm 是 node 版本管理工具，可用于切换node版本

## 命令列表

```sh
# 显示已安装的node版本列表（同下）
nvm list
nvm list installed
nvm ls
# 显示所有可以下载的版本
nvm list available  

# 下载指定node版本
nvm install 版本号
# 使用指定node版本
nvm use 版本号
# 删除node指定版本
nvm uninstall 版本号
# 设置镜像
nvm node_mirror https://npmmirror.com/mirrors/node/
nvm npm_mirror https://npmmirror.com/mirrors/npm/
```

## nvm use出现 exit status 1:乱码

以管理员身份运行cmd执行即可解决