## 测试内容

```vue
<template>
  <view class="container">
    <view class="intro">
      本项目已包含uni
      ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。
    </view>
    <text class="intro">详见：</text>
    <uni-link :href="href" :text="href"></uni-link>
  </view>
</template>

<script>
export default {
  data() {
    return {
      href: "https://uniapp.dcloud.io/component/README?id=uniui",
    };
  },
  methods: {},
};
</script>

<style>
.container {
  padding: 20px;
  font-size: 14px;
  line-height: 24px;
}
</style>
```

## vscode和hbuilderx一致性

统一修改`<text class="intro">详见：</text>`

### event.contentChanges触发不一样

vsocde中如果是修改则直接是修改内容，hbuilderx中修改则是触发两次，第一次是删除，第二次是新增内容

放在队列中去取最后一次操作，20ms应该够用了，待测试

```ts
if (results.length === 0) {
    wordsAtOffsets = {};
  } else {
    if (setTimer) {
      clearTimeout(setTimer);
    }
    setTimer = setTimeout(() => {
      applyResults();
    }, 20);
  }
```

### event.contentChanges中rangeOffset不一致

vsocde的rangeOffset是181，hbuilderx的rangeOffset是312

找到问题了：hbuilderx里面一个中文字符占三个rangeOffset，而vsocde里只占一个，所以中文字符越多差的越大

```js
        const lineStart = event.document.offsetAt(line.range.start);
        console.log("lineStart", lineStart);
        const lineChangeOffset = change.rangeOffset - lineStart;
        console.log("lineChangeOffset", lineChangeOffset);
        const lineLeft = line.text.slice(0, lineChangeOffset + totalInserted);
        console.log("lineLeft", lineLeft);
        const lineRight = line.text.slice(lineChangeOffset + totalInserted);
        console.log("lineRight", lineRight);
        const lineTagNameLeft = lineLeft.match(tagNameReLeft);
        console.log("lineTagNameLeft", lineTagNameLeft);
        const lineTagNameRight = lineRight.match(tagNameRERight);
        console.log("lineTagNameRight", lineTagNameRight);
        const previousTextRight = previousText.slice(change.rangeOffset);
        console.log("previousTextRight", previousTextRight);
        const previousTagNameRight = previousTextRight.match(tagNameRERight);
        console.log("previousTagNameRight", previousTagNameRight)
```

调用`edit`修改编辑器也会触发`vscode.workspace.onDidChangeTextDocument`方法

## 目前问题

1. 偶现插件自动更改标签失败
2. 撤销需要太多次
3. 无法撤销，撤销时也触发插件自动更改了

