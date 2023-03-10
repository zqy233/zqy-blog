# jspdf.md

> 官方文档 http://raw.githack.com/MrRio/jsPDF/master/docs/jsPDF.html#setPage

## `new jsPDF`-实例化

```js
new jsPDF(options)
```

### options

```js
{
 orientation: 'p',
 unit: 'mm',
 format: 'a4',
 putOnlyUsedFonts:true,
 floatPrecision: 16 // or "smart", default is 16
}
```

### orientation

第一页的方向。可能的值是“纵向”或“横向”（或快捷键“p”或“l”）

### unit

指定坐标时使用的测量单位（基本单位）
可能的值为“pt”（点）、“mm”、“cm”、“in”、“px”、“pc”、“em”或“ex”。请注意，为了获得“px”单位的正确缩放，您需要通过设置选项启用options.hotfixes = ["px_scaling"]

### compress

是否压缩

## `deletePage`-删除某页

```js
let targetPage = pdf.internal.getNumberOfPages(); //获取总页
pdf.deletePage(targetPage); // 删除目标页
```

## `save`-导出pdf文档

```js
 pdf.save(`测试.pdf`);
```

