# svg

## svg的viewbox属性

SVG（可缩放矢量图形）是一种使用XML语法描述二维矢量图形的文件格式。它使用视窗（viewport）和视图框（viewbox）来定义图像的显示和缩放方式。在这里，我将详细解释SVG的viewbox属性。

viewbox是SVG元素的属性，它定义了图像内容的位置、大小和纵横比。它是一个包含四个值的字符串，分别表示视图框的起始横坐标、起始纵坐标、宽度和高度。语法如下：

```html
viewBox="min-x min-y width height"
```

这里是viewbox属性的各个参数的含义：

1. min-x：视图框左上角的横坐标，用于指定图像内容在SVG画布中的起始横坐标。
2. min-y：视图框左上角的纵坐标，用于指定图像内容在SVG画布中的起始纵坐标。
3. width：视图框的宽度，表示图像内容在SVG画布上的水平范围。
4. height：视图框的高度，表示图像内容在SVG画布上的垂直范围。

viewbox属性与SVG画布大小（width和height属性）之间存在一种映射关系。通过调整viewbox的值，可以控制图像内容在画布上的显示方式，无论画布的实际大小如何。

当SVG图像显示时，视图框的内容会按照其比例进行缩放以适应画布的大小。例如，如果视图框的宽度和高度都是100，而画布的宽度和高度是200，则视图框中的图像内容将会以50%的比例缩放。

viewbox属性还可以用来定义可见部分的剪裁。通过调整视图框的位置和大小，可以选择性地显示图像的某个区域，并将其他区域裁剪掉。这对于创建可缩放的图标和图形非常有用。

需要注意的是，如果未明确指定viewbox属性，SVG图像将默认使用整个画布作为视图框，并且不会进行缩放或剪裁。

综上所述，viewbox属性是SVG中用于定义视图框的重要属性，它决定了图像内容在画布上的显示位置、大小和纵横比，并且可以用于缩放和剪裁图像。

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

通过设置viewbox属性

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

## `viewBox` 属性会按照纵横比定义 SVG 元素的可视区域

`viewBox` 的值是一个字符串，由四个数字组成，分别表示 `min-x`、`min-y`、`width` 和 `height`。它定义了一个矩形区域，用于描述 SVG 元素在用户坐标系统中的范围。

当你设置了 `viewBox` 属性时，SVG 元素将会被缩放和适应视口，以使视图框的范围完全显示在 SVG 元素中。

其中，`width` 和 `height` 决定了视图框的宽度和高度。如果你设置了一个固定的宽高比例（例如 `width="200" height="100"`），则 `viewBox` 将会按照这个宽高比例进行缩放。

举个例子，如果你设置了 `viewBox="0 0 100 50"`，并将 SVG 元素的 `width` 设置为 `200`，`height` 设置为 `100`，则 SVG 元素的可视区域将会等比例缩放，以适应宽度为 `200`，高度为 `100` 的视口。这意味着 `viewBox` 定义的视图框将按照 `100:50` 的宽高比例进行缩放，使得整个视图框能够完全显示在视口中。

综上所述，`viewBox` 属性确实会按照指定的宽高比例来定义 SVG 元素的可视区域，从而影响 SVG 元素的缩放和适应视口的行为。

## preserveAspectRatio

`preserveAspectRatio` 属性用于定义如何保持 SVG 元素的纵横比和对齐方式。

接受一个字符串值，由两部分组成：对齐方式和缩放行为。

### 示例

`preserveAspectRatio="xMidYMid meet"` 在这个特定的值中，`xMidYMid` 表示在水平和垂直方向上将 SVG 元素居中对齐，`meet` 表示在保持纵横比的前提下，尽量将 SVG 元素缩放以适应视口。

具体解释如下：

- `xMidYMid`：表示在水平和垂直方向上将 SVG 元素居中对齐。`xMid` 表示在水平方向上居中对齐，`yMid` 表示在垂直方向上居中对齐。
- `meet`：表示 SVG 元素将尽量在视口内等比例缩放以适应，同时保持其整体显示。

综合起来，`preserveAspectRatio="xMidYMid meet"` 表示 SVG 元素将在视口内居中对齐，并尽量保持其纵横比以适应视口，确保 SVG 元素完整显示在视口内部。具体的格式为 `align meetOrSlice`，其中：

### 值列表

你可以根据需要使用不同的 `preserveAspectRatio` 值来调整 SVG 元素的缩放和对齐行为，以适应不同的布局要求。

- `align` 表示对齐方式，可以使用以下值之一：

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

- `meetOrSlice` 表示缩放行为，可以使用以下值之一：
- `meet`：在保持纵横比的前提下，尽量缩放 SVG 元素以适应视口，可能会有留白。
  
- `slice`：在保持纵横比的前提下，尽量填充视口，可能会裁剪掉部分 SVG 元素。

### `meetOrSlice` 

  `meetOrSlice` 是 `preserveAspectRatio` 属性的一部分，用于定义在缩放 SVG 元素以适应视口时的行为。这两个属性的取值有以下区别：

  1. `meet`：在保持纵横比的前提下，尽量缩放 SVG 元素以适应视口，可能会有留白。当 SVG 元素的纵横比与视口的纵横比不匹配时，会根据较小的缩放比例来等比缩放 SVG 元素，以使整个元素能够完全显示在视口内，可能会在视口的周围留有空白区域。
  2. `slice`：在保持纵横比的前提下，尽量填充视口，可能会裁剪掉部分 SVG 元素。当 SVG 元素的纵横比与视口的纵横比不匹配时，会根据较大的缩放比例来等比缩放 SVG 元素，以使整个视口被填满，可能会裁剪掉 SVG 元素的一部分。

  总结：`meet` 和 `slice` 用于定义在缩放 SVG 元素以适应视口时的不同行为，`meet` 尽量缩放并留白，`slice` 尽量填充并裁剪。

  ## `width` 和 `height` 属性和 `viewBox` 属性之间的关系

  - `width` 和 `height` 属性定义了 SVG 元素在用户代理（浏览器）中显示的大小。在这种情况下，SVG 元素的宽度和高度都被设置为 200。
  - `viewBox` 属性定义了 SVG 元素的视图框。视图框是一个坐标系，指定了 SVG 元素在用户坐标系统中的范围。在这种情况下，视图框的左上角坐标是 (0, 0)，宽度和高度都是 100。

  由于 `viewBox` 的宽度和高度是 100，而 `width` 和 `height` 的值是 200，所以 SVG 元素会被放大两倍，以适应用户代理中的显示区域。

  具体来说，视图框中的范围会根据 `viewBox` 属性的定义进行缩放和调整，以适应宽度和高度为 200 的显示区域。在这个过程中，SVG 元素中的图形元素（如矩形、圆形等）会相应地进行缩放和调整，以适应新的坐标系统。

  因此，虽然 `viewBox` 属性的定义是 0 0 100 100，但由于 `width` 和 `height` 属性的设置，SVG 元素将在用户代理中显示为一个 200x200 大小的图像，图像中的图形元素将被放大两倍。

### viewBox属性跟width和height存在比例关系

当 `viewBox` 属性定义了一个不同于 `width` 和 `height` 的视图框时，浏览器会根据这些值之间的比例关系来进行缩放和调整，以使 SVG 图形适应指定的显示区域。

具体来说，比例关系可以通过以下方式计算：

1. 计算 `viewBox` 的宽度和高度与 `width` 和 `height` 的宽度和高度之间的比例。例如，对于示例中的 `viewBox="0 0 100 100"` 和 `width="200" height="200"`，宽度比例为 200 / 100 = 2，高度比例也为 2。
2. 使用计算出的比例，将视图框中的坐标和尺寸与 `width` 和 `height` 的尺寸进行相应的缩放。例如，在示例中，视图框中的矩形的位置和大小将被放大两倍，以适应宽度和高度为 200 的显示区域。

因此，`viewBox` 属性提供了一种在 SVG 图形中定义自定义坐标系统的方式，并与 `width` 和 `height` 属性的比例关系相结合，实现了缩放、平移和剪切等效果。

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
