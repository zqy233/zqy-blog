# npm

## Refusing to install package with name "webpack" under a package npm ERR! also called "webpack"

原因：当前包跟下载的包重名

解决方案：修改package.json中name

## npm publish报错

原因：不能使用淘宝代理

解决方案：

```bash
npm config set registry https://registry.npmjs.org/
```

