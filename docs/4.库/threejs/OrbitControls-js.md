# OrbitControls.js

> 文档: 
>
> http://www.yanhuangxueyuan.com/doc/Three.js/OrbitControls.html
>
> https://discoverthreejs.com/zh/book/first-steps/camera-controls/

## 什么是OrbitControls.js

OrbitControls.js是Three.js的相机控制插件。它允许您使用触摸、鼠标或键盘来环绕、平移和缩放相机。

通过这些控件，我们可以从各个角度查看场景，放大以检查微小细节，或缩小以鸟瞰概览。轨道控制允许我们以三种方式控制相机：

1. **使用鼠标左键或单指轻扫，围绕固定点旋转。**
2. **使用鼠标右键、箭头键或两指滑动来平移相机。**
3. **使用滚轮或捏合手势缩放相机。**

对Threejs的三维场景进行缩放、平移、旋转操作，本质上改变的并不是场景，而是相机的参数，相机的位置角度不同，同一个场景的渲染效果是不一样，比如一个相机绕着一个场景旋转，就像场景旋转一样。

如果你想深入了解相机控制器OrbitControls的每一个功能，OrbitControls是如何对Three.js正投影相机和透视投影相机对象进行封装的，可以阅读在three.js仓库中的 ***examples/jsm/controls/*** 文件夹中的名为 ***[OrbitControls.js](https://github.com/mrdoob/three.js/blob/master/examples/jsm/controls/OrbitControls.js)*** 的文件。

调用OrbitControls的时候需要引入OrbitControls.js文件。

```js
<!-- 引入three.js相机控件OrbitControls.js -->
<script src="../../three.js-master/examples/js/controls/OrbitControls.js"></script>
```

## 旋转缩放平移

如果你想实现一个场景旋转缩放平移的效果，直接把相机对象`camera`作为`OrbitControls`构造函数的参数就可以。

鼠标操作：通过拖动鼠标左键可以720旋转展示三维场景，通过拖动鼠标右键可以平移三维场景，通过上下滚动鼠标中键可以缩放三维场景。

```js
// 创建控件对象  相机对象camera作为参数   
// 控件可以监听鼠标的变化，改变相机对象的属性
var controls = new THREE.OrbitControls(camera);
```

## 禁止旋转平移缩放(`.enablePan`属性)

比如一个展示一个三维场景，比如一辆轿车产品，你不希望鼠标右键拖动会产生一个平移效果。可以通过设置相机空间对象OrbitControls的`.enablePan`属性，查看OrbitControls源码可以看到`.enablePan`属性的默认值是true。

```js
controls.enablePan = false; //禁止右键拖拽
```

通过`.enableZoom`属性可以控制是否允许鼠标中键缩放场景，`.enableZoom`属性默认值true。

```js
controls.enableZoom = false; //禁止缩放
```

通过`.enableRotate`属性可以控制是否允许鼠标左键旋转场景，`.enableRotate`属性默认值true。

```js
controls.enableRotate = false; //禁止旋转
```

## 设置缩放范围

在实际应用中，你想控制一个产品或一个房间户型的缩放范围，可以通过相机空间OrbitControls的`.minZoom`和`.maxZoom`属性实现

```js
// 缩放范围
controls.minZoom = 0.5;
controls.maxZoom = 2;
```

## 设置旋转范围

展示一个三维场景，你想控制360度旋转范围，比如一辆轿车，你不希望用户看到轿车的底盘，你可以通过设置相机的旋转范围属性来实现。

通过`.minPolarAngle`和`.maxPolarAngle`属性控制上下360度的旋转范围，通过`.minAzimuthAngle`和`.maxAzimuthAngle`属性控制左右360度的旋转范围，上下左右两个360度旋转也就是常说的720旋转展示。

```js
// 上下旋转范围
controls.minPolarAngle = 0;
controls.maxPolarAngle = Math.PI;
// 左右旋转范围
controls.minAzimuthAngle = -Math.PI * (100 / 180);
controls.maxAzimuthAngle = Math.PI * (100 / 180);
```

## 方向键漫游

在一个大场景中，通过相机空间OrbitControls操作键盘方向键可以控制透视投影相机对象可以在场景中移动漫游。

如果你想实现一个场景漫游的效果，直接把透视投影相机对象`camera`作为`OrbitControls`构造函数的参数就可以。

```js
var controls = new THREE.OrbitControls(camera);
```

## OrbitControls的变化事件`change`

对于一个静态的场景，可能不需要一直周期性调用渲染函数渲染场景，而是鼠标旋转缩放场景的时候才重新渲染，就可以通过相机空间OrbitControls的变化事件`change`监听触发函数调用渲染函数render。

每当用户与你的场景交互时，控件都会将相机移动到一个新的位置，当这种情况发生时你必须绘制一个新的帧，否则你将无法看到相机已移动。如果您使用的是动画循环，那不是问题。但是，如果我们是按需渲染，我们将不得不想出其他办法来解决这个问题。

幸运的是，`OrbitControls`提供了一种在相机移动时生成新帧的简单方法。控件有一个自定义事件`change`，我们可以使用 [`addEventListener`](https://discoverthreejs.com/zh/book/appendix/dom-api-reference/#listening-for-events)来监听。每当用户交互导致控件移动相机时，都会触发此事件。

要使用按需渲染，您必须在此事件触发时渲染一帧：

```js
// 渲染函数
function render() {
  renderer.render(scene, camera);
}

var controls = new THREE.OrbitControls(camera);
//监听鼠标事件，触发渲染函数，更新canvas画布渲染效果
controls.addEventListener('change', render);
```

## 相机空间作用的窗口范围

通过OrbitControls创建一个相机控件对象的时候，默认情况下，在浏览器的窗口整个内容区域body发生鼠标事件都会旋转、平移或缩放三维场景。在实际应用中如果你需要控制OrbitControls的作用范围，你需要通过`OrbitControls`构造函数的参数2设置。

Threejs渲染结果所在的Canvas画布，通过通过渲染器的`renderer.domElement`属性可以访问。

```js
<div id="webgl" style="position: absolute;left: 30px;top: 100px;">
<!-- 插入的canvas画布尺寸设置为800pxX600px -->
</div>
```

```js
// 在id为webgl的元素中插入canvas画布
document.getElementById('webgl').appendChild(renderer.domElement);
//设置canvas画布renderer.domElement渲染区域尺寸
renderer.setSize(800, 600);
...
var controls = new THREE.OrbitControls(camera, renderer.domElement);
```

## api

> https://threejs.org/docs/#examples/en/controls/OrbitControls
