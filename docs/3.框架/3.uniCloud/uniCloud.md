## 新建云函数/云对象与页面中调用

右击`cloudfunctions`文件夹，点击`新建云函数/云对象`

### 新建云函数

例如，新建`func1`云函数，该云函数文件夹下的`index.js`中，添加代码如下

```js
'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
  return db.collection("article").get()
};
```

### 调用云函数

```vue
<template>
  <view><button @click="get">请求云函数</button></view>
</template>

<script>
export default {
  methods: {
    get() {
      uniCloud
        .callFunction({
          name: "func1",
        })
        .then(res => {
          console.log(res);
        });
    },
  },
};
</script>
```

### 调用云函数两种写法

```js
// promise方式
uniCloud.callFunction({
    name: 'hellocf',
    data: { a: 1 }
  })
  .then(res => {})

// callback方式
uniCloud.callFunction({
	name: 'hellocf',
	data: { a: 1 },
	success(){},
	fail(){},
	complete(){}
})
```

### 传递参数

```js
'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
  const { limit } = event
  return db.collection("article").limit(limit).get()
};
```

```js
uniCloud.callFunction({
    name: 'hellocf',
    data: { limit: 1 }
  })
  .then(res => {})
```

### 新建云对象

例如，新建`obj1`云对象，该云对象文件夹下的`index.obj.js`中，添加代码如下

```js
const db = uniCloud.database()
module.exports = {
  async get() {
    return await db.collection("article").get()
  }
}
```

### 调用云对象

```js
<template>
  <view>
    <button @click="getObj">请求云对象</button>
  </view>
</template>

<script>
export default {
  methods: {
    getObj() {
      const obj1 = uniCloud.importObject("obj1");
      obj1.get().then(res => {
        console.log(res);
      });
    },
  },
};
</script>
```

### 传递参数

```js
const db = uniCloud.database()
module.exports = {
  async get(limit) {
    return await db.collection("article").limit(limit).get()
  }
}
```

```js
<template>
  <view><button @click="getObj">请求云对象</button></view>
</template>

<script>
export default {
  methods: {
    getObj() {
      const obj1 = uniCloud.importObject("obj1");
      obj1.get(1).then(res => {
        console.log(res);
      });
    },
  },
};
</script>
```

### 上传云函数至云端

1. 上传单个云对象：右击该云对象文件夹，选择`上传部署`
2. 上传所有云对象：右击`cloudfunctions`文件夹，选择`上传所有云函数、公共模块及actions`
3. 请求报错：`云函数在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间`，检查第一步或第二步是否成功，在HBuilderX里终端勾选`连接云端云函数`，重新编译运行

## unicloud-db组件

### 查询数据

列表页面，使用`unicloud-db`组件，`collection`属性指定表名，`data`就是表的数据

```vue
<unicloud-db v-slot:default="{data, loading, error, options}" collection="contacts">
      <view v-if="error">{{error.message}}</view>
      <view v-else>
        {{data}}
      </view>
    </unicloud-db>
```

### 删除数据

列表页面，调用`unicloud-db`组件实例的`remove`方法

```js
<template>
  <view class="content">
    <unicloud-db ref="udb" v-slot:default="{data, loading, error, options}" collection="contacts">
      <view v-if="error">{{error.message}}</view>
      <view v-else>
        <uni-list>
          <uni-list-item v-for="item in data" :key="item._id" :title="item.name" :note="item.phone" link
            @longpress.native="rmItem(item._id)">
          </uni-list-item>
        </uni-list>
      </view>
    </unicloud-db>
  </view>
</template>

<script>
  export default {
    methods: {
      rmItem(id) {
        this.$refs.udb.remove(id)
      }
    }
  }
</script>
```

### 新增数据

新增页面

```js
<template>
  <view>
    <uni-easyinput v-model="item.name" placeholder="name" />
    <uni-easyinput v-model="item.phone" placeholder="phone" />
    <button type="primary" @click="submit">提交</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      item: {
        phone: '',
        name: ''
      }
    }
  },
  methods: {
    submit() {
      const db = uniCloud.database()
      db.collection('contacts')
        .add(this.item)
        .then(e => {
          console.log(e)
        })
    }
  }
}
</script>
```

修改database/contacts.schema.json中`properties`属性，增加提交的字段，不然会报错：`数据库验证失败：提交的字段在本地数据表的schema文件中不存在`

```js
{
  "bsonType": "object",
  "required": [],
  "permission": {
    "read": true,
    "create": true,
    "update": true,
    "delete": true
  },
  "properties": {
    "_id": {
      "description": "ID，系统自动生成"
    },
    "name": {},
    "phone": {}
  }
}
```

### 修改数据

列表页面

```vue
<template>
  <view class="content">
    <unicloud-db ref="udb" v-slot:default="{ data, loading, error, options }" collection="contacts">
      <view v-if="error">{{ error.message }}</view>
      <view v-else>
        <uni-list><uni-list-item v-for="item in data" :key="item._id" :title="item.name" :note="item.phone" link @click.native="uuu(item)"></uni-list-item></uni-list>
      </view>
    </unicloud-db>
  </view>
</template>

<script>
export default {
  methods: {
    uuu(item) {
      uni.navigateTo({
        url: '../update/update?item' + JSON.stringify(item),
        success: res => {},
        fail: () => {},
        complete: () => {}
      })
    }
  }
}
</script>
```

更新页面

```vue
<template>
  <view>
    <uni-easyinput v-model="item.name" placeholder="name" />
    <uni-easyinput v-model="item.phone" placeholder="phone" />
    <button type="primary" @click="submit">提交</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      item: {
        _id: '',
        phone: '',
        name: ''
      }
    }
  },
  methods: {
    onLoad({ item }) {
      this.item = JSON.parse(item)
    },
    submit() {
      const db = uniCloud.database()
      let item = { ...this.item } // 浅拷贝
      console.log(item, this.item)
      delete item._id
      db.collection('contacts')
        .doc(this.item._id)
        .update(item)
        .then(e => {
          console.log(e)
        })
    }
  }
}
</script>
```

## 公共模块

cloudfunctions/common右击新建公共模块

右击公共模块文件夹可以选择上传公共模块

公共模块可以用于云函数进行调用

```js
const { appId, appSecret } = require("wx-common")
```

- https://uniapp.dcloud.net.cn/uniCloud/jql)

- https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=limit)

## uni-id

### 第一步、导入uni-id-pages

https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html

这时直接使用uni-id-pages页面会提示Invalid uni-id config file

### 第二步、创建uni-id的云端配置文件

目录为`uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json`

也就是自行创建一个config.json，config.json的内容为：

> https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#config



