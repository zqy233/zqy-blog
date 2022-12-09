# github

## pull-request

> 主要用于为开源项目做出自己的贡献，以下为相应步骤

1. 点击开源项目仓库右上方fork，会在自己仓库生成fork版本的项目

2. git clone fork后的项目

3. 开发项目

4. push项目代码至自己仓库

5. 新建pull request请求

6. 被请求项目的管理员测试审核通过，进行合并

## 网页端打开项目

github项目页面按下`.`键，即可使用网页版vscode打开当前项目

## gitpod

> 云开发与运行项目的平台

在github项目地址前加上`gitpod.io/#/`，例如：

```sh
https://gitpod.io/#/github.com/antfu/unplugin-auto-import
```

从而会跳转至gitpod平台，会自动下载项目依赖，从而在线运行项目

```sh
https://antfu-unpluginautoimpo-v4a7st4kzi7.ws-us45.gitpod.io/
```

## hosts

[github](https://so.csdn.net/so/search?q=github&spm=1001.2101.3001.7020)的ip地址经常变，可以在[这里](https://www.ipaddress.com/)查询

打开C:\Windows\System32\drivers\etc\hosts，设置github的host

## raw.githubusercontent.com不能访问

打开C:\Windows\System32\drivers\etc\hosts

```sh
199.232.28.133  raw.githubusercontent.com
```

## 启用clash后使用git命令出现Failed to connect to github.com port 443: Connection refused

重新设置代理，将代理端口号，设置上去。 clash默认代理端口号 7890 设置如下：

```sh
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy http://127.0.0.1:7890
```
