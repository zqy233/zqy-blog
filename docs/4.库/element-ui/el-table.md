## 设置表头样式

```vue
<el-table
            :data="bottomTableData"
            border
            stripe
            fit
            height="100%"
            :row-style="{}"
            :header-cell-style="getHeaderStyle">
            <el-table-column
              type="index"
              label="序号"
              align="center"
              width="68"></el-table-column>
            <el-table-column
              prop="sqdBh"
              label="流程单编号"
              align="center"></el-table-column>
          </el-table>
```



```js
 getHeaderStyle({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === row.length - 1) {
        return 'color:#0761d1;backgroundColor:#96bdf8;';
      } else {
        return 'color:#333;backgroundColor:#b6cff5;';
      }
    },
```

## 插槽

```vue
<el-table-column
              align="center"
              label="流程操作">
              <template slot-scope="scope">
                <el-button
                  type="text"
                  size="small"
                  :style="{ color: '#2b7ed9' }"
                  icon="icon icon-click-handle"
                  class="throttle"
                  @click="(e) => getFormDetail(scope.row)">
                  点击处理
                </el-button>
                <el-button
                  @click="handleViewLog(scope.row)"
                  type="text"
                  size="small"
                  :style="{ color: '#2b7ed9' }"
                  icon="icon icon-view-log">
                  查看日志
                </el-button>
                <el-button
                  @click="handleDiscard(scope.row)"
                  type="text"
                  size="small"
                  :style="{ color: '#2b7ed9' }"
                  icon="icon icon-click-discard">
                  作废表单
                </el-button>
              </template>
            </el-table-column>
```

