## 下载pdf到手机端

因为手机端没有a标签，所以使用[renderjs](https://uniapp.dcloud.net.cn/tutorial/renderjs.html#renderjs)

```vue
<template>  
  <div><button @click="test.exportPDF">导出pdf</button></div>  
</template>  

<script module="test" lang="renderjs">  
export default {  
  methods: {  
    exportPDF() {  
      const Url = "https://files-cdn.cnblogs.com/files/ma6174/git-tutor.pdf"  
      const a = document.createElement("a")  
      a.href = Url  
      a.download = "download"  
      a.click()  
    }  
  }  
}  
</script>
```

或者使用uniapp的api

```vue
<template>  
  <div><button @click="exportPDF">导出pdf</button></div>  
</template>  

<script>  
export default {  
  methods: {  
    exportPDF() {  
      // 下载pdf文件，返回临时路径  
      uni.downloadFile({  
        url: "https://files-cdn.cnblogs.com/files/ma6174/git-tutor.pdf", //这里为图片路径  
        success: res => {  
          console.log(res)  
          if (res.statusCode === 200) {  
            // 预览pdf文件  
            uni.openDocument({  
              filePath: res.tempFilePath,  
              success: function(file) {  
                console.log("file-success", file)  
              }  
            })  
            // 保存pdf文件至手机，一般存储路径为：手机存储/dcim/camera文件夹下  
            uni.saveImageToPhotosAlbum({  
              filePath: res.tempFilePath,  
              success: function() {  
                uni.showToast({  
                  title: "保存成功！",  
                  icon: "none"  
                })  
              },  
              fail: function() {  
                uni.showToast({  
                  title: "保存失败，请稍后重试！",  
                  icon: "none"  
                })  
              }  
            })  
          }  
        }  
      })  
    }  
  }  
}  
</script>  
```

这两者的区别

- renderjs会提示用户是否下载文件，下载完成后用户需要手动点击下载的文件，才会打开文件
- 使用uniapp的api则可以直接下载并直接预览，不需要用户操作
- 根据场景需求进行选择即可

## 下载图片至手机相册

```js
 uni.downloadFile({
        url: "https://img-blog.csdnimg.cn/a5afbc54539a4bc79125c6ebf36ba480.png", //这里为图片路径
        success: res => {
          console.log(res)
          if (res.statusCode === 200) {
            uni.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: function() {
                uni.showToast({
                  title: "保存成功！",
                  icon: "none"
                })
              },
              fail: function() {
                uni.showToast({
                  title: "保存失败，请稍后重试！",
                  icon: "none"
                })
              }
            })
          }
        }
      })
```

## 手机端创建或打开文件

```js
    // 请求本地文件系统对象
    plus.io.requestFileSystem(
      plus.io.PUBLIC_DOCUMENTS, // 文件系统中的根目录
      fs => {
        // 创建或打开文件, fs.root是根目录操作对象,直接fs表示当前操作对象
        fs.root.getFile('test.json', {
            create: true // 文件不存在则创建
          }, fileEntry => {
            // 文件在手机中的路径
            console.log(fileEntry.fullPath)
            fileEntry.createWriter(writer => {
              // 写入文件成功完成的回调函数
              writer.onwrite = e => {
                console.log(e, "写入数据成功");
              };
              // 写入数据
              writer.write(JSON.stringify({
                data: ['1', '2']
              }));
            })
          },
          // 获取文件失败
          error => {
            console.log("getFile failed: " + error.message);
          });
      },
      // fs失败
      error => {
        console.log(error.message);
      }
    )
```

## 获取手机系统所有目录文件 

```js
 plus.io.resolveLocalFileSystemURL(
          "file:///storage",
           function(entry) {
                /* 获取文件目录 */
               var directoryReader = entry.createReader(); //获取读取目录对象
                directoryReader.readEntries(
                    function(entries) { //历遍子目录即可
                        for (var i = 0; i < entries.length; i++) {
                            console.log("文件信息：" + entries[i].name);
                         }13                     },
                    function(err) {
                         console.log("访问目录失败");
                    });
             },
             function(err) {
                 console.log("访问指定目录失败:" + err.message);
            });
```

## 删除文件

```js
 delFile() {
      plus.io.requestFileSystem(plus.io.PUBLIC_DOCUMENTS, fs => {
        let rootObj = fs.root
        let fullPath = rootObj.fullPath
        plus.io.resolveLocalFileSystemURL(fullPath + '/allExcels/自动化系统分布情况' + '/' + this.today + '.xlsx', entry => {
          entry.remove(
            () => {
              console.log('删除成功回调')
              //删除成功回调
            },
            err => {
              console.log('删除错误回调', err)
              //删除成功回调
            }
          )
        })
      })
    }
```

## 输入框弹出键盘上推页面

> https://uniapp.dcloud.net.cn/component/input.html#input

input组件在app端聚焦会触发页面上推，可通过`adjust-position`属性设置

editor组件在app端聚焦会触发页面上推，因为是通过webview实现，不能关闭触发

### 编辑器聚焦时，底部操作栏无法附在软键盘上方

pages.json中加入如下配置：

指定页面

```json
 "pages": [{
      "path": "pages/edit/edit",
      "style": {
        "navigationBarTitleText": "",
        "enablePullDownRefresh": false,
        "app-plus": {
          "softinputMode": "adjustResize"
        }
      }
    }],
```

全局页面

```json
"globalStyle": {
        "app-plus": {
            "softinputMode": "adjustResize"
        }
    },
```

## 
