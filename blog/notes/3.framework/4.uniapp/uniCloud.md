# uniCloud

uniCloud是由DCloud联合阿里云，腾讯云推出的，基于serverless的、跨全端、用js开发服务器的云产品

- 免运维，更省心
- 服务器成本更低
- 轻松上手，上手快
- 开发效率加倍提升

## 登录web控制台

https://unicloud.dcloud.net.cn/pages/login/login注册登录，创建一个服务空间

## 关联云服务

### 创建使用uniCloud的项目

文件>新建>项目>勾选启动uniCloud>选择腾讯云或阿里云，推荐先使用阿里云，有免费的服务空间可供学习

> 阿里云商用版计费周知，详见：https://ask.dcloud.net.cn/article/40144
>
> 阿里云商用版介绍：https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-business

### 已有项目添加uniCloud

右击项目>创建云开发环境>选择腾讯云或阿里云

现在项目拥有一个`uniCloud`文件夹，右击该文件夹`关联云服务空间或项目`，选择相应的服务空间

`uniCloud`文件夹下有两个文件夹

- `cloudfunctions`   用于存放云函数/云对象
- `database`

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

## 客户端操作数据库（clientDB）

> `DB Schema` https://uniapp.dcloud.net.cn/uniCloud/schema.html

- 在`web控制台`创建一个表会创建默认的`schema`，`database`目录右键可以`下载所有DB Schema及扩展校验函数`，会在项目中生成相应`*.schema.json`文件
- 项目右键，选择`创建database目录`（如已有目录则忽略），`database`目录右键选择`新建DB Schema`，会在项目中生成相应`*.schema.json`文件，右击`database目录`可以`上传所有DB Schema及扩展校验函数`，会在云端生成相应表

- 在单个schema文件右键可以只上传当前选中的schema。快捷键是【Ctrl+u】。（Ctrl+u是HBuilderX的通用快捷键，不管是发布App还是上传云函数、schema，都是Ctrl+u）

### 设置数据库操作权限

设置`database/*.schema.json`

- `bsonType`字段类型
- `required`必填项
- `permission`字段控制权限，对应`查增改删`
- `properties`字段表示`表字段`

可视化插件

> https://ext.dcloud.net.cn/plugin?name=bctos-schema2view

### 示例

```json
{
  "bsonType": "object",
  "required": [
    "name"
  ],
  "permission": {
    "read": true,
    "create": true,
    "update": true,
    "delete": true
  },
  "properties": {
    "_id": {
      "description": "ID，系统自动生成",
      "order": 0
    },
    "name": {
      "bsonType": "string",
      "label": "文章标题",
      "errorMessage": {
        "required": "{label}不能为空",
        "format": "{label}格式无效"
      },
      "order": 1,
      "description": "文章的标题说明",
      "trim": "both"
    },
    "content": {
      "bsonType": "string",
      "label": "内容",
      "order": 2,
      "description": "文字内容",
      "trim": "both"
    },
    "postType": {
      "bsonType": "timestamp",
      "label": "发布时间",
      "errorMessage": {
        "format": "{label}格式无效"
      },
      "forceDefaultValue": {
        "$env": "now"
      },
      "order": 3,
      "description": "发布时间"
    },
    "hits": {
      "bsonType": "int",
      "label": "阅读量",
      "errorMessage": {
        "format": "{label}格式无效"
      },
      "order": 4,
      "description": "阅读量",
      "exclusiveMinimum": true,
      "exclusiveMaximum": true,
      "defaultValue": "33"
    }
  }
}
```

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

## JQL数据库操作

`JQL`，全称 javascript query language，是一种js方式操作数据库的规范。

- `JQL`大幅降低了js工程师操作数据库的难度，比SQL和传统MongoDB API更清晰、易掌握。
- `JQL`支持强大的[DB Schema](https://uniapp.dcloud.net.cn/uniCloud/schema)，内置数据规则和权限。DB Schema 支持[uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary)，可直接使用其角色和权限。无需再开发各种数据合法性校验和鉴权代码。
- `JQL`利用json数据库的嵌套特点，极大的简化了联表查询和树查询的复杂度，并支持更加灵活的虚拟表。

```js
// 查询表
db.collection('tableImages').get();
```

### 新增数据

获取到db的表对象后，通过add方法新增数据记录



## 云函数传统方式和jql语法操作数据库的区别

- 主要查询方式上的区别，传统方式使用db.command，而jql使用js语法更易读更简洁

```js
const dbCmd = db.command
const myOpenID = "xxx"
let res = await db.collection('articles').where({
  quarter: dbCmd.eq('2020 Q2')
}).get()
```

## HBuilderX的JQL数据库管理器

为方便开发者调试查询语句，`HBuilderX 3.1.5`起内置了JQL查询调试器。用法如下

1. 在`uniCloud/database`目录右键选择`新建JQL数据库管理`（HBuilderX创建项目时勾选uniCloud会自带一个jql文件，直接使用自带的jql文件也可以）
2. 在jql文件内写上自己的语句
3. 使用工具栏上的运行按钮运行（快捷键：Ctrl+R 或 F5）即可

**注意**

- 编写clientDB的js API（也支持常规js语法，比如var），可以对云数据库进行增删改查操作。不支持uniCloud-db组件写法
- 可以全部运行，也可以选中部分代码运行。点击工具栏上的运行按钮或者按下【F5】键运行代码
- 如果文档中存在多条JQL语句，只有最后一条语句生效
- 如果混写了普通js，最后一条语句需是数据库操作语句
- 此处代码运行不受DB Schema的权限控制，移植代码到实际业务中注意在schema中配好permission
- 不支持clientDB的action
- 数据库查询有最大返回条数限制，详见：[limit(opens new window)](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=limit)

## 联表查询



