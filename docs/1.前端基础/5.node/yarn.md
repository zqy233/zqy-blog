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
yarn config set registry https://registry.npmmirror.com/
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

### 删除代理

```sh
yarn config delete proxy
yarn config delete https-proxy
```



```
{
  "name": "vue-project-name",
  "private": true,
  "version": "0.0.0",
  "scripts": {
    "dev": "vite --host",
    "build": "vite build",
    "preview": "vite preview",
    "mock": "npx nodemon ./mock/src/index.js"
  },
  "dependencies": {
    "@element-plus/icons-vue": "^2.0.10",
    "axios": "^1.1.3",
    "dayjs": "^1.11.5",
    "echarts": "^5.3.3",
    "element-plus": "^2.2.20",
    "nprogress": "^0.2.0",
    "qs": "^6.11.0",
    "swiper": "^8.4.4",
    "vue": "^3.2.45",
    "vue-echarts": "^6.1.0",
    "vue-router": "^4.1.5",
    "vuex": "^4.0.2",
    "vxe-table": "^4.3.5",
    "xe-utils": "^3.5.6"
  },
  "devDependencies": {
    "@iconify-json/ep": "^1.1.7",
    "@vitejs/plugin-vue": "^3.1.0",
    "autoprefixer": "^10.4.11",
    "express": "^4.18.2",
    "postcss-pxtorem": "^6.0.0",
    "rollup-plugin-compression": "^1.0.2",
    "sass": "^1.56.0",
    "unplugin-auto-import": "^0.11.2",
    "unplugin-icons": "^0.14.9",
    "unplugin-vue-components": "^0.22.7",
    "vite": "^3.2.3",
    "vite-plugin-html": "^3.2.0"
  }
}

```

```
C:\Program Files
```

