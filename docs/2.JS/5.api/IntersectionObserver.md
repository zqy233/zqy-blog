# Intersection Observer API

Intersection Observer API 提供了一种异步检测目标元素与祖先元素或 [viewport](https://developer.mozilla.org/zh-CN/docs/Glossary/Viewport) 相交情况变化的方法。

过去，要检测一个元素是否可见或者两个元素是否相交并不容易，很多解决办法不可靠或性能很差。然而，随着互联网的发展，这种需求却与日俱增，比如，下面这些情况都需要用到相交检测：

- 图片懒加载——当图片滚动到可见时才进行加载
- 内容无限滚动——也就是用户滚动到接近内容底部时直接加载更多，而无需用户操作翻页，给用户一种网页可以无限滚动的错觉
- 检测广告的曝光情况——为了计算广告收益，需要知道广告元素的曝光情况
- 在用户看见某个区域时执行任务或播放动画

过去，相交检测通常要用到事件监听，并且需要频繁调用 [`Element.getBoundingClientRect()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect) 方法以获取相关元素的边界信息。事件监听和调用 [`Element.getBoundingClientRect()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect) 都是在主线程上运行，因此频繁触发、调用可能会造成性能问题。这种检测方法极其怪异且不优雅。

假如有一个无限滚动的网页，开发者使用了一个第三方库来管理整个页面的广告，又用了另外一个库来实现消息盒子和点赞，并且页面有很多动画（译注：动画往往意味着较高的性能消耗）。两个库都有自己的相交检测程序，都运行在主线程里，而网站的开发者对这些库的内部实现知之甚少，所以并未意识到有什么问题。但当用户滚动页面时，这些相交检测程序就会在页面滚动回调函数里不停触发调用，造成性能问题，体验效果让人失望。

Intersection Observer API 会注册一个回调函数，每当被监视的元素进入或者退出另外一个元素时 (或者 [viewport](https://developer.mozilla.org/zh-CN/docs/Glossary/Viewport) )，或者两个元素的相交部分大小发生变化时，该回调方法会被触发执行。这样，我们网站的主线程不需要再为了监听元素相交而辛苦劳作，浏览器会自行优化元素相交管理。

注意 Intersection Observer API 无法提供重叠的像素个数或者具体哪个像素重叠，他的更常见的使用方式是——当两个元素相交比例在 N% 左右时，触发回调，以执行某些逻辑。

## [Intersection observer 的概念和用法](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API#intersection_observer_的概念和用法)

Intersection Observer API 允许你配置一个回调函数，当以下情况发生时会被调用

- 每当目标 (**target**) 元素与设备视窗或者其他指定元素发生交集的时候执行。设备视窗或者其他元素我们称它为根元素或根 (**root**)。
- Observer 第一次监听目标元素的时候

通常，您需要关注文档最接近的可滚动祖先元素的交集更改，如果元素不是可滚动元素的后代，则默认为设备视窗。如果要观察相对于根 (**root**) 元素的交集，请指定根 (**root**) 元素为`null`。

无论您是使用视口还是其他元素作为根，API 都以相同的方式工作，只要目标元素的可见性发生变化，就会执行您提供的回调函数，以便它与所需的交叉点交叉。

目标 (**target**) 元素与根 (**root**) 元素之间的交叉度是交叉比 (**intersection ratio**)。这是目标 (**target**) 元素相对于根 (**root**) 的交集百分比的表示，它的取值在 0.0 和 1.0 之间。

### [创建一个 intersection observer](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API#创建一个_intersection_observer)

创建一个 IntersectionObserver 对象，并传入相应参数和回调用函数，该回调函数将会在目标 (**target**) 元素和根 (**root**) 元素的交集大小超过阈值 (**threshold**) 规定的大小时候被执行。

```js
let options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
}

let observer = new IntersectionObserver(callback, options);
```

阈值为 1.0 意味着目标元素完全出现在 root 选项指定的元素中可见时，回调函数将会被执行。

### Intersection observer options

传递到 [`IntersectionObserver()`](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver/IntersectionObserver) 构造函数的 `options` 对象，允许您控制观察者的回调函数的被调用时的环境。它有以下字段：

- `root`

  指定根 (**root**) 元素，用于检查目标的可见性。必须是目标元素的父级元素。如果未指定或者为`null`，则默认为浏览器视窗。

- `rootMargin`

  根 (**root**) 元素的外边距。类似于 CSS 中的 [`margin`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin) 属性，比如 "`10px 20px 30px 40px"` (top、right、bottom、left)。如果有指定 root 参数，则 rootMargin 也可以使用百分比来取值。该属性值是用作 root 元素和 target 发生交集时候的计算交集的区域范围，使用该属性可以控制 root 元素每一边的收缩或者扩张。默认值为四个边距全是 0。

- `threshold`

  可以是单一的 number 也可以是 number 数组，target 元素和 root 元素相交程度达到该值的时候 IntersectionObserver 注册的回调函数将会被执行。如果你只是想要探测当 target 元素的在 root 元素中的可见性超过 50% 的时候，你可以指定该属性值为 0.5。如果你想要 target 元素在 root 元素的可见程度每多 25% 就执行一次回调，那么你可以指定一个数组 `[0, 0.25, 0.5, 0.75, 1]`。默认值是 0 (意味着只要有一个 target 像素出现在 root 元素中，回调函数将会被执行)。该值为 1.0 含义是当 target 完全出现在 root 元素中时候 回调才会被执行。

### Targeting an element to be observed

创建一个 observer 后需要给定一个目标元素进行观察。

```js
let target = document.querySelector('#listItem');
observer.observe(target);
```

每当目标满足该 IntersectionObserver 指定的 threshold 值，回调被调用。

只要目标满足为 IntersectionObserver 指定的阈值，就会调用回调。回调接收 [`IntersectionObserverEntry`](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserverEntry) 对象和观察者的列表：

```js
let callback =(entries, observer) => {
  entries.forEach(entry => {
    // Each entry describes an intersection change for one observed target element:
    // entry.boundingClientRect
    // entry.intersectionRatio
    // entry.intersectionRect
    // entry.isIntersecting
    // entry.rootBounds
    // entry.target
    // entry.time
  });
};
```

