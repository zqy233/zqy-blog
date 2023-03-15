## 加载配置文件

```js
import { loadConfigFile } from 'rollup/loadConfigFile'
import path from 'path'
import * as rollup from 'rollup'

// 加载位于当前脚本旁边的配置文件；
// 提供的配置对象具有与在命令行上传递 "--format es" 相同的效果，
// 并将覆盖所有输出的格式
loadConfigFile(path.resolve('./rollup.config.js')).then(async ({ options, warnings }) => {
  // "warnings" 包装了 CLI 传递的默认 `onwarn` 处理程序。
  // 这将打印到此为止所有的警告：
  console.log(`We currently have ${warnings.count} warnings`)

  // 这将打印所有延迟的警告
  warnings.flush()

  // options 是一个包含额外 "output" 属性的 "inputOptions" 对象数组，
  // 该属性包含一个 "outputOptions" 数组。
  // 以下将为所有输入生成所有输出，
  // 并以与 CLI 相同的方式将它们写入磁盘：
  for (const optionsObj of options) {
    console.log('optionsObj', optionsObj)
    const bundle = await rollup.rollup(optionsObj)
    console.log('optionsObj.output', optionsObj.output)
    await Promise.all(optionsObj.output.map(bundle.write))
  }

  // 你也可以直接将选项传给 "rollup.watch"
  // rollup.watch(options);
})
```

