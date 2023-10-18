# [创建一个场景（Creating a scene）](https://threejs.org/docs/#manual/zh/introduction/Creating-a-scene)

这一部分将对three.js来做一个简要的介绍；我们将开始搭建一个场景，其中包含一个正在旋转的立方体。页面下方有一个已经完成的例子，当你遇到麻烦，或者需要帮助的时候，可以看一看。

## 开始之前

在开始使用three.js之前，你需要一个地方来显示它。将下列HTML代码保存为你电脑上的一个HTML文件然后在你的浏览器中打开这个HTML文件。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>My first three.js app</title>
		<style>
			body { margin: 0; }
		</style>
	</head>
	<body>
		<script type="module">
			import * as THREE from 'https://unpkg.com/three/build/three.module.js';

			// Our Javascript will go here.
		</script>
	</body>
</html>
```

好了，接下来的所有代码将会写入到空的`<script>`标签中

## 创建一个场景

为了真正能够让你的场景借助three.js来进行显示，我们需要以下几个对象：场景、相机和渲染器，这样我们就能透过摄像机渲染出场景。

```js
const scene = new THREE.Scene();
```

## 创建相机

three.js里有几种不同的相机，在这里，我们使用的是**PerspectiveCamera**（透视摄像机）。

`PerspectiveCamera`构造函数有四个参数：

1. `fov`，**视野**：相机的视野有多宽，以度为单位。第一个参数是**视野角度（FOV）**。视野角度就是无论在什么时候，你所能在显示器上看到的场景的范围，它的单位是角度(与弧度区分开)。
2. `aspect`，**纵横比**：场景的宽度与高度的比率。第二个参数是**长宽比（aspect ratio）**。 也就是你用一个物体的宽除以它的高的值。比如说，当你在一个宽屏电视上播放老电影时，可以看到图像仿佛是被压扁的。
3. `near`, **近剪裁平面**：任何比这更靠近相机的东西都是不可见的。
4. `far`，**远剪裁平面**：任何比这更远离相机的东西都是不可见的。

当物体某些部分比摄像机的**远截面**远或者比**近截面**近的时候，该这些部分将不会被渲染到场景中。或许现在你不用担心这个值的影响，但未来为了获得更好的渲染性能，你将可以在你的应用程序里去设置它。

```js
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
```

## 创建渲染器

接下来是渲染器。这里是施展魔法的地方。除了我们在这里用到的`WebGLRenderer`渲染器之外，Three.js同时提供了其他几种渲染器，当用户所使用的浏览器过于老旧，或者由于其他原因不支持WebGL时，可以使用这几种渲染器进行降级。

除了创建一个渲染器的实例之外，我们还需要在我们的应用程序里设置一个渲染器的尺寸。比如说，我们可以使用所需要的渲染区域的宽高，来让渲染器渲染出的场景填充满我们的应用程序。因此，我们可以将渲染器宽高设置为浏览器窗口宽高。对于性能比较敏感的应用程序来说，你可以使用`setSize`传入一个较小的值，例如`window.innerWidth/2`和`window.innerHeight/2`，这将使得应用程序在渲染时，以一半的长宽尺寸渲染场景。

如果你希望保持你的应用程序的尺寸，但是以较低的分辨率来渲染，你可以在调用`setSize`时，将`updateStyle`（第三个参数）设为false。例如，假设你的`<canvas> `标签现在已经具有了100%的宽和高，调用`setSize(window.innerWidth/2, window.innerHeight/2, false)`将使得你的应用程序以一半的分辨率来进行渲染。

最后一步很重要，我们将`renderer`（渲染器）的dom元素（renderer.domElement）添加到我们的HTML文档中。这就是渲染器用来显示场景给我们看的`<canvas>`元素。

“嗯，看起来很不错，那你说的那个立方体在哪儿？”接下来，我们就来添加立方体。

```js
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
```

## 创建立方体

要创建一个立方体，我们需要一个**BoxGeometry**（立方体）对象. 这个对象包含了一个立方体中所有的顶点（**vertices**）和面（**faces**）。未来我们将在这方面进行更多的探索。

```js
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
```

## 创建材质

接下来，对于这个立方体，我们需要给它一个材质，来让它有颜色。Three.js自带了几种材质，在这里我们使用的是**MeshBasicMaterial**。所有的材质都存有应用于他们的属性的对象。在这里为了简单起见，我们只设置一个color属性，值为**0x00ff00**，也就是绿色。这里所做的事情，和在CSS或者Photoshop中使用十六进制(**hex colors**)颜色格式来设置颜色的方式一致。

```js
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
```

## 创建网格

我们需要一个Mesh（网格）。 网格包含一个几何体以及作用在此几何体上的材质，我们可以直接将网格对象放入到我们的场景中，并让它在场景中自由移动。

默认情况下，当我们调用**scene.add()**的时候，物体将会被添加到**(0,0,0)**坐标。但将使得摄像机和立方体彼此在一起。为了防止这种情况的发生，我们只需要将摄像机稍微向外移动一些即可。

```js
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;
```

## 渲染场景

现在，如果将之前写好的代码复制到HTML文件中，你不会在页面中看到任何东西。这是因为我们还没有对它进行真正的渲染。为此，我们需要使用一个被叫做“**渲染循环**”（render loop）或者“**动画循环**”（animate loop）的东西。

在这里我们创建了一个使渲染器能够在每次屏幕刷新时对场景进行绘制的循环（在大多数屏幕上，刷新率一般是60次/秒）。如果你是一个浏览器游戏开发的新手，你或许会说*“为什么我们不直接用setInterval来实现刷新的功能呢？”*当然啦，我们的确可以用setInterval，但是，**requestAnimationFrame**有很多的优点。最重要的一点或许就是当用户切换到其它的标签页时，它会暂停，因此不会浪费用户宝贵的处理器资源，也不会损耗电池的使用寿命。

```js
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();
```

## 使立方体动起来

在开始之前，如果你已经将上面的代码写入到了你所创建的文件中，你可以看到一个绿色的方块。让我们来做一些更加有趣的事 —— 让它旋转起来。

将下列代码添加到animate()函数中**renderer.render**调用的上方：

```js
cube.rotation.x += 0.01;
cube.rotation.y += 0.01;
```

这段代码每帧都会执行（正常情况下是60次/秒），这就让立方体有了一个看起来很不错的旋转动画。基本上来说，当应用程序运行时，如果你想要移动或者改变任何场景中的东西，都必须要经过这个动画循环。当然，你可以在这个动画循环里调用别的函数，这样你就不会写出有上百行代码的**animate**函数。

## 完整的第一个Three.js应用程序

祝贺你！你现在已经成功完成了你的第一个Three.js应用程序。虽然它很简单，但现在你已经有了一个入门的起点。

下面是完整的代码，可在[live example](https://jsfiddle.net/fxurzeb4/)运行、编辑；运行或者修改代码有助于你更好的理解它是如何工作的。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My first three.js app</title>
    <style>
      body {
        margin: 0;
      }
    </style>
  </head>
  <body>
    <script type="module">
      import * as THREE from "https://unpkg.com/three/build/three.module.js";
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 5;

      function animate() {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
      }

      animate();
    </script>
  </body>
</html>
```

## 由浅入深

非常好的由浅入深的threejs学习文档

> https://discoverthreejs.com/zh/book/introduction/get-threejs/

## 场景：小宇宙

**场景是我们能看到的一切的载体**。您可以将其视为所有 3D 对象都存在于其中的“小宇宙”。我们用来创建场景的 three.js 类简称为 [`Scene`](https://threejs.org/docs/#api/en/scenes/Scene). 其构造函数不带参数。

```js
import { Scene } from 'three';
const scene = new Scene();
```

场景`scene`定义了一个名为**World Space（世界空间）**的坐标系，它是我们在 three.js 中处理可见对象时的主要参考框架。世界空间是一个 [3D 笛卡尔坐标系](https://mathinsight.org/cartesian_coordinates)。

场景的中心是点(0,0,0)，也称为坐标系的**原点**。每当我们创建一个新对象并将其添加到我们的场景中时，它将被放置在原点，并且每当我们移动它时，我们说的都是在这个坐标系中移动它。

## 相机：指向小宇宙的望远镜

场景的小宇宙是指纯数学的领域。要查看场景，我们需要打开一个进入这个领域的窗口，并将其转换为对我们人眼感觉合理的东西，这就是相机的用武之地。有几种方法可以将场景图形转换为人类视觉友好的格式，使用称为**投影**的技术。对我们来说，最重要的投影类型是**透视投影**，它旨在匹配我们的眼睛看待世界的方式。要使用透视投影查看场景，我们使用 [`PerspectiveCamera`](https://threejs.org/docs/#api/en/cameras/PerspectiveCamera)。 这种类型的相机是现实世界中相机的 3D 等效物，并使用许多相同的概念和术语，例如视野和纵横比。与场景`Scene`不同的是，`PerspectiveCamera`构造函数有几个参数。

```js
import { PerspectiveCamera } from 'three';

const fov = 35; // AKA Field of View
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane

const camera = new PerspectiveCamera(fov, aspect, near, far);
```

另一种重要的投影类型是**正交投影**，我们可以使用 [`OrthographicCamera`](https://threejs.org/docs/#api/en/cameras/OrthographicCamera)。 如果您曾经研究过工程图或蓝图，您可能会熟悉这种类型的投影，它对于创建 2D 场景或覆盖 3D 场景的用户界面很有用。在本书中，我们将使用 HTML 来创建用户界面，并使用 three.js 来创建 3D 场景，所以我们将在大部分情况下坚持使用`PerspectiveCamera`。

## 渲染器：具有非凡才能和速度的艺术家

如果场景是一个小宇宙，而相机是一个指向那个宇宙的望远镜，那么渲染器就是一个艺术家，他通过望远镜观察并将他们看到的东西 *非常快* 的绘制到一个`<canvas>`中去。 我们把这个过程叫做**渲染**，得到的图片就是一个渲染效果图。在本书中，我们将专门使用 [`WebGLRenderer`](https://threejs.org/docs/#api/en/renderers/WebGLRenderer) —— 它使用 [**WebGL2**](https://en.wikipedia.org/wiki/WebGL)来渲染我们的场景 （如果可用），如果不可用则回退到**WebGL V1**。渲染器的构造函数确实接受了几个参数，但是，如果我们不显示传入这些参数，它将使用默认值，目前这对于我们来说没问题。

```js
import { WebGLRenderer } from 'three';
const renderer = new WebGLRenderer();
```

**场景、相机和渲染器一起为我们提供了 three.js 应用程序的基本脚手架**。但是，*一个都看不到*。在本章中，我们将介绍一种称为**网格**的可见对象。

## 我们的第一个可见对象：网格 Mesh

**[网格](https://threejs.org/docs/#api/en/objects/Mesh)是 3D 计算机图形学中最常见的可见对象**，用于显示各种 3D 对象——猫、狗、人类、树木、建筑物、花卉和山脉都可以使用网格来表示。还有其他种类的可见对象，例如线条、形状、精灵和粒子等，我们将在后面的部分中看到所有这些，但在这些介绍性章节中我们将坚持使用网格。

```js
import { Mesh } from 'three';
const mesh = new Mesh(geometry, material);
```

如您所见，`Mesh`构造函数有两个参数：**几何**和**材质**。在创建网格之前，我们需要创建这两个。

## 几何体

**几何体定义了网格的形状**。我们将使用一种称为 [`BufferGeometry`](https://threejs.org/docs/#api/en/core/BufferGeometry)的几何体。在这里，我们需要一个盒子形状，所以我们将使用 [`BoxBufferGeometry`](https://threejs.org/docs/#api/en/geometries/BoxBufferGeometry)，它是 three.js 核心中提供的几个基本形状之一。

```js
import { BoxBufferGeometry } from 'three';

const length = 2;
const width = 2;
const depth = 2;

const geometry = new BoxBufferGeometry(length, width, depth);
```

构造函数最多需要六个参数，但在这里，我们只提供前三个参数，它们指定盒子的长度、宽度和深度。默认值将被提供给我们省略的任何其他参数。您可以在下面的场景中使用所有六个参数。

## 材料

虽然几何体定义了形状，**但材质定义了网格表面的外观**。我们将在本章中使用 [`MeshBasicMaterial`](https://threejs.org/docs/#api/en/materials/MeshBasicMaterial) ，这是可用的最简单的材质，更重要的是，不需要我们在场景中添加任何灯光。现在，我们将省略所有参数，这意味着将创建默认的白色材质。

```js
import { MeshBasicMaterial } from 'three';

const material = new MeshBasicMaterial();
```

