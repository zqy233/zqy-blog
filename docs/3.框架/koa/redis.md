# 在Koa中使用Redis

## 安装

Redis 的安装文件下载地址：[github.com/tporadowski…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Ftporadowski%2Fredis%2Freleases)

安装完成后，可以运行 redis-server.exe 启动 Redis 服务器。 (安装, 一直下一步即可)

## 数据操作

运行 redis-cli.exe，打开 Redis 的命令行客户端。

操作一：向 Redis 中存储一个字符串键值对

```sh
set key1 hello   
```

操作二：从 Redis 中获取某个键值对值

```sh
get key1          
```

操作三：查看 Redis 中所有的键值对 key

```sh
keys *          
```

操作四：向 Redis 中设置一个数字并自增

```sh
incr mynum        # mynum 为 1
incr mynum        # mynum 为 2

get mynum         # 查看 mynum 结果为 2
```

## 安装 Redis 驱动包

目前主流的 Node.js 的 Redis 驱动包有两个：[node-redis](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fnoderedis%2Fnode-redis%2F) 和 [ioredis](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fluin%2Fioredis%23readme)，这两个包都有性能非常高、使用方便的特点。而后者的性能更好、功能更强大

```sh
npm i ioredis
```

在 koa 中使用 ioredis 连接 Redis 服务器，并发送数据操作命令

```js
const Koa = require('koa')

const app = new Koa()

// 1. 引入 ioredis
const Redis = require('ioredis')

// 2. 创建 Redis 客户端实例, 连接指定的 Redis 服务器
const redis = new Redis({
  port: 6379, // redis服务器默认端口号
  host: '127.0.0.1' // redis服务器的IP地址
})

app.use(async ctx => {
  // 以后思路: 费时的查询, 不用每次都去查, 先看看 redis 中存了没?
  // 如果存了, 直接用缓存的数据, 如果没有存, 就去查询, 并将查询的结果存到 redis 中即可

  // redis.get(key) 查询 (异步)
  // redis.set(key, value) 设置 (异步)
  let result = await redis.get('arrList')

  if (!result) {
    // 没有缓存过, 需要读数据库, 并且将结果缓存起来
    console.log('经过了很久很久的查询')
    const arr = [
      { id: 1, name: 'zs', age: 18 },
      { id: 2, name: 'ls', age: 19 },
      { id: 3, name: 'ww', age: 20 },
      { id: 4, name: 'zl', age: 21 },
    ]
    result = arr
    console.log('缓存到redis中')
    await redis.set('arrList', JSON.stringify(arr))
  } else {
    console.log('直接读缓存')
    result = JSON.parse(result)
  }

  ctx.body = result
})

app.listen(3000, () => console.log('服务器启动成功... 当前端口 3000'))
```

