# svg

## viewbox属性

SVG（可缩放矢量图形）是一种使用XML语法描述二维矢量图形的文件格式。

viewbox是SVG元素的属性，它定义了图像内容的位置、大小和纵横比。它是一个包含四个值的字符串，分别表示视图框的起始横坐标、起始纵坐标、宽度和高度。语法如下：

```html
viewBox="min-x min-y width height"
```

这里是viewbox属性的各个参数的含义：

1. min-x：视图框左上角的横坐标，用于指定图像内容在SVG画布中的起始横坐标。
2. min-y：视图框左上角的纵坐标，用于指定图像内容在SVG画布中的起始纵坐标。
3. width：视图框的宽度，表示图像内容在SVG画布上的水平范围。
4. height：视图框的高度，表示图像内容在SVG画布上的垂直范围。

### 示例说明

svg中唯一节点（即svg显示的图像内容）宽高为`2600 1400`

```html
<rect x="0" y="0" width="2600" height="1400" fill="rgb(0,0,0)"></rect>
```

则svg的viewBox属性需要是`0 0 2600 1400 `才能完整显示节点

` 0 0 2600 700`显示上方的一半内容

` 0 0 1300 1400`显示左侧一半的内容

## 获取svg的viewbox属性

```ts
const getGraphSize = () => {
  const viewBox = (document.querySelector(".line-svg").firstChild as SVGAElement).getAttribute(
    "viewBox"
  )
  return viewBox.split(/\s+/)
}
```

## 滚动控制svg放大缩小

通过设置viewbox属性达成放大缩小效果

```ts
const wheel = e => {
  // event.wheelDelta正数表示向上滚动，负数表示向下滚动
  c arrPoint = getGraphSize()
  if (e.wheelDelta > 0) {
    arrPoint[2] = parseInt(arrPoint[2]) * 0.9 + ""
    arrPoint[3] = parseInt(arrPoint[3]) * 0.9 + ""
  } else {
    arrPoint[2] = parseInt(arrPoint[2]) / 0.9 + ""
    arrPoint[3] = parseInt(arrPoint[3]) / 0.9 + ""
  }
  const svg = document.querySelector(".line-svg").firstChild as SVGAElement
  svg.setAttribute("viewBox", arrPoint.join(" "))
}
```

## 设置svg的闪烁动画

```js
const setAnimation = (id: string) => {
  setTimeout(() => {
    const device = document.querySelector("#id" + id)
    var svgNS = "http://www.w3.org/2000/svg"
    var animateGraph = document.createElementNS(svgNS, "animate")
    animateGraph.setAttribute("id", "keyId")
    animateGraph.setAttribute("attributeType", "auto")
    animateGraph.setAttribute("attributeName", "visibility")
    animateGraph.setAttribute("from", "visible")
    animateGraph.setAttribute("to", "hidden")
    animateGraph.setAttribute("dur", "1s")
    animateGraph.setAttribute("begin", "0s")
    animateGraph.setAttribute("fill", "freeze")
    animateGraph.setAttribute("repeatCount", "indefinite")
    device.appendChild(animateGraph)
  }, 50)
}
```

## preserveAspectRatio

`preserveAspectRatio` 属性用于定义如何保持 SVG 元素的纵横比和对齐方式。

接受一个字符串值，由两部分组成：对齐方式和缩放行为，`align meetOrSlice `。

### 值列表

可以根据需要使用不同的 `preserveAspectRatio` 值来调整 SVG 元素的缩放和对齐行为，以适应不同的布局要求。

`align` 表示对齐方式，可以使用以下值之一：

- `none`：不对齐，直接拉伸 SVG 元素以填充视口。
- `xMinYMin`：在左上角对齐。
- `xMidYMin`：在水平方向居中、垂直方向顶部对齐。
- `xMaxYMin`：在右上角对齐。
- `xMinYMid`：在左侧对齐、垂直方向居中。
- `xMidYMid`：在水平和垂直方向都居中对齐。
- `xMaxYMid`：在右侧对齐、垂直方向居中。
- `xMinYMax`：在左下角对齐。
- `xMidYMax`：在水平方向居中、垂直方向底部对齐。
- `xMaxYMax`：在右下角对齐。

`meetOrSlice` 表示缩放行为，可以使用以下值之一：

- `meet`：在保持纵横比的前提下，尽量缩放 SVG 元素以适应视口，可能会有留白。
- `slice`：在保持纵横比的前提下，尽量填充视口，可能会裁剪掉部分 SVG 元素。

### 示例： `preserveAspectRatio="xMidYMid meet"`

`preserveAspectRatio="xMidYMid meet"` 在这个特定的值中，`xMidYMid` 表示在水平和垂直方向上将 SVG 元素居中对齐，`meet` 表示在保持纵横比的前提下，尽量将 SVG 元素缩放以适应视口。

具体解释如下：

- `xMidYMid`：表示在水平和垂直方向上将 SVG 元素居中对齐。`xMid` 表示在水平方向上居中对齐，`yMid` 表示在垂直方向上居中对齐。
- `meet`：表示 SVG 元素将尽量在视口内等比例缩放以适应，同时保持其整体显示。

综合起来，`preserveAspectRatio="xMidYMid meet"` 表示 SVG 元素将在视口内居中对齐，并尽量保持其纵横比以适应视口，确保 SVG 元素完整显示在视口内部。具体的格式为 `align meetOrSlice`，其中：

### `meetOrSlice` 

  `meetOrSlice` 是 `preserveAspectRatio` 属性的一部分，用于定义在缩放 SVG 元素以适应视口时的行为。这两个属性的取值有以下区别：

  1. `meet`：在保持纵横比的前提下，尽量缩放 SVG 元素以适应视口，可能会有留白。当 SVG 元素的纵横比与视口的纵横比不匹配时，会根据较小的缩放比例来等比缩放 SVG 元素，以使整个元素能够完全显示在视口内，可能会在视口的周围留有空白区域。
  2. `slice`：在保持纵横比的前提下，尽量填充视口，可能会裁剪掉部分 SVG 元素。当 SVG 元素的纵横比与视口的纵横比不匹配时，会根据较大的缩放比例来等比缩放 SVG 元素，以使整个视口被填满，可能会裁剪掉 SVG 元素的一部分。

  总结：`meet` 和 `slice` 用于定义在缩放 SVG 元素以适应视口时的不同行为，`meet` 尽量缩放并留白，`slice` 尽量填充并裁剪。

## SVG 用户坐标系统

在 SVG 中，元素的坐标体系是基于用户坐标系统的。用户坐标系统是一个以左上角为原点的二维坐标系统，用于定位和定量测量 SVG 元素。

以下是 SVG 元素的坐标体系的详细说明：

1. 原点（0, 0）：SVG 坐标系统的原点位于用户坐标系统的左上角，即 (0, 0)。在 SVG 中，这通常对应于左上角的位置。
2. X 轴和 Y 轴：X 轴是水平方向的轴，从左向右增加。Y 轴是垂直方向的轴，从上向下增加。X 轴的正方向是向右，Y 轴的正方向是向下。
3. 单位：SVG 坐标系统的单位通常是像素（px），但也可以使用其他单位，如百分比（%）或用户单位（如英寸、厘米等）。
4. 元素的位置：在 SVG 中，使用 `x` 和 `y` 属性来指定元素的位置。`x` 属性定义元素的水平位置，即相对于 X 轴的偏移量。`y` 属性定义元素的垂直位置，即相对于 Y 轴的偏移量。
5. 坐标系转换：可以使用变换属性（如 `transform`）来对元素进行平移、缩放、旋转等变换操作。这些变换将影响元素在用户坐标系统中的位置和形状。

需要注意的是，元素的位置和大小可能会受到父元素、视图框（`viewBox`）和 `preserveAspectRatio` 属性的影响。视图框定义了用户坐标系统中可见的部分，而 `preserveAspectRatio` 定义了元素如何在缩放和适应视口时保持纵横比和对齐。

通过使用坐标系统和相应的属性，你可以在 SVG 中精确定位和定量测量元素，实现你想要的效果。

## svg节点的x、y和viewbox间的关系

SVG 节点的 `x` 和 `y` 属性与 `viewBox` 之间存在一定的关系。它们用于确定 SVG 元素在用户坐标系统中的位置和偏移。

1. `x` 属性：`x` 属性定义了 SVG 元素相对于用户坐标系统的 X 轴的偏移量。它指定了 SVG 元素的左上角相对于用户坐标系统原点（0, 0）的水平位置。
2. `y` 属性：`y` 属性定义了 SVG 元素相对于用户坐标系统的 Y 轴的偏移量。它指定了 SVG 元素的左上角相对于用户坐标系统原点（0, 0）的垂直位置。
3. `viewBox` 属性：`viewBox` 属性是一个描述 SVG 元素在用户坐标系统中范围的矩形区域。它由四个值组成，分别表示 `min-x`、`min-y`、`width` 和 `height`。它定义了 SVG 元素的可视区域。

这三者之间的关系是，`x` 和 `y` 属性可以用于指定 SVG 元素在用户坐标系统中的位置，而 `viewBox` 属性定义了一个矩形区域，描述了 SVG 元素在用户坐标系统中的范围。

具体而言，当你设置了 `x` 和 `y` 属性时，SVG 元素将根据这些属性确定其在用户坐标系统中的位置。而 `viewBox` 属性则用于定义 SVG 元素的可视区域，它可以影响 SVG 元素的缩放和适应视口的行为。

需要注意的是，`x` 和 `y` 属性与 `viewBox` 之间的关系可以因具体情况而异。它们的具体关系取决于 SVG 元素的布局和具体使用方式。在设计 SVG 图形时，你可以根据需要使用这些属性来定位和定量测量 SVG 元素。
