# vxt-table

## 官方文档

https://vxetable.cn/#/table/base/basic

## 全局安装

```bash
  npm install xe-utils vxe-table@next
```

main.ts中

```typescript
import { createApp } from "vue"
import App from "./App.vue"

import "xe-utils"
import VXETable from "vxe-table"
import "vxe-table/lib/style.css"

const app = createApp(App)
app.use(VXETable).mount("#app")
```

## vxe-table attributes

| 属性名                        | 说明             | 类型   | 可选值                |
| :---------------------------- | ---------------- | ------ | --------------------- |
| allAlign                      | 字段位置         | string | left/center/right     |
| data                          | 表格数据         | array  | [ ]                   |
| :row-config="{isHover: true}" | 表格鼠标悬浮高亮 | object | {isHover: true}       |
| 尺寸                          | 大小尺寸         | string | medium / small / mini |

## 打印

```vue
<template>
  <vxe-toolbar>
    <template #buttons>
      <vxe-button content="打印图片打印图片打印图片" @click="printEvent6"></vxe-button>
    </template>
  </vxe-toolbar>
  <img src="https://gitee.com/zqylzcwcxy/picture-bed/raw/master/img/image-20220221231613976.png" />
</template>

<script lang="ts" setup>
import { VXETable } from "vxe-table"
const printEvent6 = () => {
  const imgEl = document.querySelector("img") as HTMLImageElement
  VXETable.print({
    sheetName: "打印图片",
    style: `img {
              width: 100%;
            }
            `,
    content: `<img src="${imgEl.src}">`
  })
}
</script>
```

