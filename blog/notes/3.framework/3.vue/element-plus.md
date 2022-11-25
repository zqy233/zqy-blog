```html
 <el-upload
  :action="uploadImgUrl"
  :auto-upload="false"
  list-type="picture-card"
  v-model:file-list="resFileList"
  :on-success="uploadImgSuccess"
  :on-error="handleError"
  ref="resUpload"
  :headers="headers"
  :data="uploadData"
  >
  <p>点击上传</p>
</el-upload>
<el-button @click="submit">确认上传</el-button>
```

### 手动上传

设置`:auto-upload="false"`不自动上传文件

点击`确认上传`时再进行图片上传

```js
submit() {
  this.$refs["resUpload"].submit()
  }
},
```

### 第二次上传无效

按照上方的代码写，会发现只能上传第一次会触发请求接口，再点就没反应了

网上搜，基本都是让调组件的`clearFiles`方法清除文件列表，但是我的需求是，上传完保留上次上传的图片，供下次继续上传，所以不符合我的需求

```js
this.$refs["resUpload"].clearFiles()
```

仔细研究下，发现实际上是因为`el-upload`绑定的文件列表变量（比如上方代码是`resFileList`）中的每个文件对象的`status`属性值不是`ready`

选择文件后还没上传，这时打印文件列表变量，每个文件对象的`status`值是`ready`

上传文件后打印文件列表变量，根据上传情况，每个文件对象的`status`值会被更改为`success`,`fail`,`uploading`这三种，而只有`ready`值的文件对象会被`this.$refs["resUpload"].submit()`提交

所以，想上传完保留上次上传的图片供下次继续上传，可以这样写

```js
 this.resFileList.forEach(item => {
  item.status = "ready"
})
```

### 多图上传

el-upload组件默认多图上传是多次调用上传图片接口

通过判断文件列表的`status`都是`success`判断正常调用上传接口了

调用上传接口不代表上传就成功了，再判断`code===200`（根据个人的后端接口规范）判断图片都上传成功了

```js
    // on-success文件上传成功时的钩子,上传三张图片就会触发三次这个钩子
    async uploadImgSuccess(response) {
      // 每次上传返回code不对，就相应报错（根据个人的后端接口规范调整）
      if (response.code !== 200) {
        this.$message.error(response.msg)
      }
      // 通过判断上传文件列表数组的status全为success来判断所有图片都上传了
      if (this.fileList.every(item => item.status === "success")) {
        // 所有图片都上传成功，才执行接口请求方法
        if (this.fileList.every(item => item.response.code === 200)) {
          ...
        }
        // 如果有图片未上传成功，就过滤掉不成功的，保留成功的，让用户再次选择
        else {
          this.fileList = this.fileList.filter(item => item.response.code === 200)
          // fix：el-upload组件第二次点击上传无效
          // 因为el-upload组件的上传会判断文件列表的status状态，如果不是ready，则不会上传
          this.fileList.forEach(item => {
            item.status = "ready"
          })
        }
      }
    },
```

### 请求头添加token

给`el-upload`组件的`headers`属性，绑定一个对象就可以了

```js
data() {
    return {
      headers: { token: localStorage.getItem("token") }
    }
  },
```

### 请求添加其他参数

给`el-upload`组件的`data`属性，绑定一个对象就可以了

```js
data() {
    return {
      uploadData: {}
    }
  },
```

例如，后端希望我每次再传一个uuid

```js
const id = this.uuid()
this.uploadData = {
  id
}
this.$refs["resUpload"].submit()
```



