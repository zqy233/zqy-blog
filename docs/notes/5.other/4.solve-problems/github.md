# github

问题：访问github太慢

原因：dns污染

解决方案：

以下网址查询github的ip地址

[https://github.com.ipaddress.com/](https://gitee.com/link?target=https%3A%2F%2Fgithub.com.ipaddress.com%2F)

修改本地host中地址，打开C:\WINDOWS\system32\drivers\etc，添加或修改文件内容如下

```
查询到的ip地址 github.com
```

