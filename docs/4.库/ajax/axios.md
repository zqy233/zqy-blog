# axios

```sh
npm i -s axios
```

## 封装axios

```ts
import axios from "axios"
import store from "../store"
import { ElMessage } from "element-plus"

// 用于计算所有请求次数，等待所有请求结束后再关闭loading动画
let loadingCount = 0

const instance = axios.create({
  timeout: 20000, // 多长时间请求无果后结束
  baseURL: (window as any).BASE_URL // 请求基础路径
})

instance.defaults.headers.post = {
  "Content-Type": "application/x-www-form-urlencoded"
}

instance.interceptors.request.use(
  req => {
    const controller = new AbortController()
    req.signal =  controller.signal
    store.commit("addRequest", controller)
    loadingCount++
    store.commit("loadStatus", true)
    return req
  },
  error => error
)
instance.interceptors.response.use(
  res => {
    loadingCount--
    if (loadingCount == 0) store.commit("loadStatus", false)
    if (res.status == 200) return res
  },
  err => {
    loadingCount--
    if (loadingCount == 0) store.commit("loadStatus", false)
    if (
      err.code === "ECONNABORTED" &&
      err.message.indexOf("timeout") !== -1 &&
      !err.config._retry
    ) {
      return ElMessage.error("请求数据失败，请稍后再试")
    }
    const { response } = err
    errorHandle(response.status, response.data)
    return response
  }
)
const errorHandle = (status: number, other: any) => {
  switch (status) {
    case 400:
      ElMessage.error("信息校验失败")
      break
    case 401:
      ElMessage.error("认证失败")
      break
    case 403:
      ElMessage.error("token校验失败")
      break
    case 404:
      ElMessage.error("请求的资源不存在")
      break
    default:
      ElMessage.error(other)
      break
  }
}
export default instance
```

store

```ts
import { createStore } from "vuex"
type state = {
  loading: boolean
  requests: any[]
}
export default createStore({
  state() {
    return {
     loading: false,
     requests: []
    }
  },
  mutations: {
    loadStatus(state: state, boolean) {
      state.loading = boolean
    },
    addRequest(state: state, string) {
      state.requests.push(string)
    }
  }
})
```

## 取消请求/Cancellation

需求：页面切换时清除上个页面所有未完成的请求

### AbortController-`推荐`

> `v0.22.0`开始支持，用于取消请求

1.为每个请求设置`signal`字段值，且把`controller`存储到vuex中

```js
import axios from "axios"
import store from "../store"
const instance = axios.create({
  ...
})
instance.interceptors.request.use(
  req => {
    const controller = new AbortController() // 每个请求时都新生成一个AbortController实例
    req.signal = controller.signal // 设置请求的signal字段为new AbortController()的signal
    store.commit("addRequest", controller)
    ...
    return req
  },
  error => error
)
```

2.store中代码，存储每个controller，用于调用每个controller的`abort`方法来取消请求

```js
import { createStore } from "vuex"
export default createStore({
  state() {
    return {
     requests: []
    }
  },
  mutations: {
    addRequest(state,controller) {
      state.requests.push(controller)
    }
  }
})
```

3.路由拦截器beforeEach里做处理，每次页面切换时就清除上个页面的所有请求

```js
router.beforeEach((to, from, next) => {
  ...
  store.state.requests.forEach(controller => controller.abort()) // 通过遍历终止所有未完成的请求
  store.state.requests = [] // 执行完清空，从而不影响新页面的请求列表
  next()
})
```

### CancelToken -`废弃(deprecated)`

> `v0.22.0`开始废弃，虽然你还可以正常使用，但是不应该在新项目中使用

1.为每个请求设置`cancelToken`字段值，且把`source`存储到vuex中

```js
import axios from "axios"
import store from "../store"
const instance = axios.create({
  ...
})
const CancelToken = axios.CancelToken // 生成终止请求的CancelToken对象
instance.interceptors.request.use(
  req => {
    const source = CancelToken.source() // 每个请求时都新生成一个source对象
    req.cancelToken = source.token // 设置cancelToken字段为source的token，用于source.cancel()清除
    store.commit("addRequest", source)
    ...
    return req
  },
  error => error
)
```

2.store中代码，存储每个source，用于调用每个source的`cancel`方法来取消请求

```js
import { createStore } from "vuex"
export default createStore({
  state() {
    return {
     requests: []
    }
  },
  mutations: {
    addRequest(state,source) {
      state.requests.push(source)
    }
  }
})
```

3.路由拦截器beforeEach里做处理，每次页面切换时就清除上个页面的所有请求

```js
router.beforeEach((to, from, next) => {
  ...
  store.state.requests.forEach(source => source.cancel()) // 通过遍历终止所有未完成的请求
  store.state.requests = [] // 执行完清空，从而不影响新页面的请求列表
  next()
})
```

## 上传下载进度

```js
  onUploadProgress: function (progressEvent) {
    // 处理原生进度事件
  },

  // `onDownloadProgress` 允许为下载处理进度事件
  // 浏览器专属
  onDownloadProgress: function (progressEvent) {
    // 处理原生进度事件
  },
```

## 多个请求

```js
Promise.all([getUserAccount(), getUserPermissions()])
  .then(function (results) {
    const acct = results[0];
    const perm = results[1];
  });
```

## Content-Type：

axios请求头中的常见Content-Type有3种

1.`Content-Type:application/json`

2.`Content-Type:application/x-www-form-urlencoded`

3.`Content-Type:multipart/form-data`

### 默认值

axios参数为字符串时，`Content-Type`默认为`application/x-www-form-urlencoded`类型
axios参数为对象时，`Content-Type`默认为`application/json`类型

### 1.Content-Type: application/json

如果没有特别声明，.`Content-Type:application/json`是axios默认的Content-Type，也是最常用的一种，它声明了请求体中的数据将会以json字符串的形式发送到后端。所以，在请求的时候，传递一个js对象即可

### 2.Content-Type: application/x-www-form-urlencoded

声明了请求体中的数据会以键值对（普通表单形式）发送到后端，这种类型是Ajax默认的。偶尔后端需要传键值对，那这个时候，就需要设置请求头`Content-Type:application/x-www-form-urlencoded`

然后，将请求体中的数据以&符号拼接，参数格式为key=value&key=value&key=value...，因为数据一般是js对象，这个时候，就可以使用qs库将对象转为该url参数形式

qs是axios默认就有的，就不需要再npm下载了。其作用有二：1.将url中的参数转为对象；2.将对象转为url参数形式

### 3.Content-Type: multipart/form-data

一般用来上传表单，文件等等，可以指定传输数据为二进制数据，例如图片、mp3、文件，也可以用来上传键值对。需要设置请求头`Content-Type:multipart/form-data`，写法如下：

```js
let data = new FormData()
data.append('username', 'admin')
data.append('password', '123456')
```

## 设置请求头

```js
axios.interceptors.request.use(config =>{
	//比如token
	config.headers.token='wwwwwsdsdf'
	return config
})
```

## 失败后重新请求

https://www.npmjs.com/package/axios-retry

```js
instance.interceptors.response.use(
  res => {
    loadingCount--;
    if (loadingCount == 0) store.commit('loadStatus', false);
    if (res.status == 200) return res;
  },
  err => {
    loadingCount--;
    if (loadingCount == 0) store.commit('loadStatus', false);
    console.log('err', err);
    // 错误代码为 ECONNABORTED，连接被中止的错误
    // 如果错误消息中包含字符串 'timeout'，即超时错误
    // 使用axios-retry插件后设置retry，会增加err.config._retry字段
    if (
      err.code === 'ECONNABORTED' &&
      err.message.indexOf('timeout') !== -1 &&
      !err.config._retry
    ) {
      console.log(Message);
      return Message.error('请求数据失败，请稍后再试');
    }
    const { response } = err;
    errorHandle(response.status, response.data);
    return response;
  },
);
```

