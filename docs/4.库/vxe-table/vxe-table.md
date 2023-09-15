# 编辑表格

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

## 修改表格样式

修改表头表格颜色

```vue
   <vxe-table
            :data="topTableData"
            border
            resizable
            stripe
            height="100%"
            show-overflow
            :loading="loading"
            :row-config="{ isCurrent: true, isHover: true, height: 36 }"
            header-row-class-name="header-row"
            header-cell-class-name="header-cell"
            :row-class-name="rowClassName">
            <vxe-column
              type="seq"
              width="68"
              title="序号"></vxe-column>
            <vxe-column
              field="SETTING_NO"
              title="编号"
              align="center"></vxe-column>
            <vxe-column
              align="center"
              class="opt-column"
              title="出口矩阵校验审批">
              <template #default="{ row }">
                <el-button
                  @click="handleStartProcess(row)"
                  type="text"
                  size="small"
                  class="throttle"
                  :style="{ color: '#2b7ed9', padding: '0!important' }"
                  icon="icon icon-send-process">
                  发起流程
                </el-button>
              </template>
            </vxe-column>
          </vxe-table>
```

```css
<style lang="scss">
.header-row {
  font-size: 12px;
  color: rgb(51, 51, 51);
}
.header-cell {
  background-color: #b6cff5;
  padding: 7px 0px !important;
}
.row-stripe {
  background-color: #eff4f9 !important;
}
.vxe-table .vxe-body--column {
  .vxe-cell--label {
    font-size: 12px;
  }
}
</style>
```

## 纯css方式修改表格样式

```css
.vxe-table {
  height: 100%;

  .vxe-header--row th {
    background-color: #b6cff5;
  }
  .vxe-header--row {
    .vxe-header--column {
      padding: 7px 0px;
      .vxe-cell--title {
        font-size: 12px;
        color: rgb(51, 51, 51);
      }
    }
  }
  .vxe-body--row {
    .vxe-body--column {
      height: 36px;
      .vxe-cell--label {
        font-size: 12px;
      }
    }
    &:nth-child(2n) {
      background-color: #eff4f9;
    }
  }
}
```

