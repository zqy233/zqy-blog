# 编辑表格

> 版本 2.8.2

## 校验表格

```vue
<vxe-table :edit-rules="validRules">
```

```js
 validRules: {
        endTime: [
          {
            required: true,
            message: "结束时间必须填写",
            validator: ({ row }) => {
              if (row.startTime && row.endTime && row.startTime.split(":").join("") > row.endTime.split(":").join("")) {
                return new Error("结束时间不能小于开始时间")
              }
            }
          }
        ]
      },
```

