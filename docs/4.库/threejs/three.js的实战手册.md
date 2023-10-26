# three.js的实战手册

> https://discoverthreejs.com/zh/

《探索three.js》是对web作为3D图形平台的完整介绍，它使用three.js WebGL库，编写自一位核心 three.js 开发人员。

该书是一个完整的教程系列，旨在帮助您在尽可能短的时间内开始创建现代、专业品质的3D Web应用程序。

笔记只用于记录个人需要记忆理解的内容，完整内容请查看上方链接网站。

## 什么是three.js？

three.js是世界上最流行的用于在Web上显示3D内容的JavaScript框架。

使用 three.js，您不再需要花哨的游戏PC或控制台来显示逼真的3D图形。 您甚至不需要下载特殊的应用程序。现在每个人都可以使用智能手机和网络浏览器体验令人惊叹的3D应用程序。

这个惊人的库和充满活力的社区是您在浏览器、笔记本电脑、平板电脑或智能手机上创建游戏、 音乐视频、科学和数据可视化或几乎任何您能想象的任何东西所需要的一切！

## cdn方式使用threejs

浏览器地址栏输入`unpkg（一个常见的cdn服务商）网址+包名`，最后添加斜线，可以查看一个包内的所有文件列表:

`https://www.unpkg.com/three/`：

并且地址会自动调整为对应的three最新版本的文件目录

`https://www.unpkg.com/browse/three@0.157.0/`

访问文件目录中的threejs文件的完整地址

`https://www.unpkg.com/three@0.157.0/build/three.module.js`

```js
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
      import * as THREE from "https://www.unpkg.com/three@0.157.0/build/three.module.js";

      console.log(THREE);
    </script>
  </body>
</html>
```

这里我们引入的cdn是es6模块，而非commonjs模块

### 这是因为浏览器不直接支持 CommonJS 

浏览器不直接支持 CommonJS 的原因主要是因为 CommonJS 是一种模块化规范，最初是为服务器端 JavaScript 开发而设计的，例如 Node.js。它使用 `require` 和 `module.exports` 来导入和导出模块，这种同步的模块加载方式在服务器端运行时通常是可行的，但在浏览器中不太适用。以下是一些原因：

1. **同步加载：** CommonJS 模块通常是同步加载的，这意味着当一个模块需要导入另一个模块时，它会阻塞浏览器的执行，从而导致性能问题。浏览器更倾向于异步加载模块，以提高页面加载速度和响应性。
2. **文件系统依赖：** CommonJS 模块系统的设计假定存在文件系统，这对服务器端开发来说很有用，但在浏览器中并不总是适用。浏览器不提供访问文件系统的功能，因此 CommonJS 的文件加载机制需要进行适应。
3. **缺乏模块版本管理：** CommonJS 模块没有内置的版本管理，这意味着无法轻松地管理模块的不同版本，这在浏览器环境中是一个重要问题。

为了解决这些问题，浏览器引入了 ECMAScript 模块（ESM）标准，也被称为 ES6 模块，它是 JavaScript 的官方模块系统。ESM 支持异步加载、无需文件系统依赖，以及版本管理，因此更适合浏览器环境。

虽然浏览器现在更多地支持 ESM，但 CommonJS 仍然在服务器端 JavaScript 开发中广泛使用，而且通过工具和转换器（如Webpack、Browserify）也可以在浏览器中使用 CommonJS 模块。但对于新的浏览器端开发项目，使用原生的 ES6 模块是更好的选择。

## Three.js 应用的结构

在我们构建一个 three.js 应用程序之前，我们需要创建一个网页。

我们的目标是尽可能创建最基本、最简单、最平淡无奇的网页，而无需对使用 three.js 的真实 Web 应用程序的外观做出任何假设。通过这样做，我们确保我们编写的代码可以适应任何地方，而无需太多努力。

我们将只用两个文件创建这个基本网页：index.html和styles/main.css。

## index.html

```html
<!DOCTYPE html>
<html>

<head>
  <title>Discoverthreejs.com - The Structure of a three.js App</title>

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta charset="UTF-8" />

  <link rel="icon" href="https://discoverthreejs.com/favicon.ico" type="image/x-icon">

  <link href="./styles/main.css" rel="stylesheet" type="text/css">

  <script type="module" src="./src/main.js"></script>
</head>

<body>
  <h1>Discoverthreejs.com - Nothing to see here yet :)</h1>

  <div id="scene-container">
    <!-- Our <canvas> will be inserted here -->
  </div>
</body>

</html>
```

## styles/main.css

在 ***index.html*** 的`<head>`部分中，其中一个`<link>`元素引用了 ***styles/main.css*** 文件：

```html
<link href="./styles/main.css" rel="stylesheet" type="text/css">
```

其中包含一些用于控制页面外观的简单样式：

```css
body {
  /* remove margins and scroll bars */
  margin: 0;
  overflow: hidden;

  /* style text */
  text-align: center;
  font-size: 12px;
  font-family: Sans-Serif;

  /* color text */
  color: #444;
}

h1 {
  /* position the heading */
  position: absolute;
  width: 100%;

  /* make sure that the heading is drawn on top */
  z-index: 1;
}

#scene-container {
  /* tell our scene container to take up the full page */
  position: absolute;
  width: 100%;
  height: 100%;

  /*
    Set the container's background color to the same as the scene's
    background to prevent flashing on load
  */
  background-color: skyblue;
}
```

稍后我们将仔细查看样式`#scene-container`，而该文件的其余部分将在 [附录](https://discoverthreejs.com/zh/book/appendix/html-and-css-reference/#main-css) 中更详细地解释。

## src/main.js: JavaScript 入口点

回到 ***index.html***，样式`<link>`的正下方是一个`<script>`标签引用了`src/main.js`文件：

```html
<script type="module" src="./src/main.js"></script>
```

目前是空的：

```js
// just waiting for your beautiful creations!
```

***main.js*** 是我们的 JavaScript 应用程序的入口点，我们将在下一章中填充它。该`type="module"`属性告诉浏览器我们正在编写 JavaScript 模块。

`module`属性还有另一个优点：浏览器将自动 *推迟* 运行此文件，直到 HTML 被解析。这将防止由于在浏览器读取之前尝试访问 HTML 元素而导致的错误（浏览器从上到下读取 HTML）。

## 向页面添加 three.js 场景

下一个在 ***index.html*** 中的关注点是场景 scene 容器元素：

```html
<body>
  <h1>Discoverthreejs.com - Nothing to see here yet :)</h1>

  <div id="scene-container">
    <!-- Our <canvas> will be inserted here -->
  </div>
</body>
```

所有 three.js 场景都在一个 [`canvas`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) 元素内呈现。一旦我们设置了我们的应用程序，three.js 将为我们创建一个画布，然后我们将它插入到场景 scene 容器中：

```html
<div id="scene-container">
  <canvas></canvas>
</div>
```

然后，我们可以通过设置场景容器元素的样式来控制场景的位置和大小。如果你把注意力转回***main.css***，你会看到我们已经为这个元素创建了一些样式。通过设置位置、宽度和高度，我们告诉浏览器这个元素应该占据整个 window 窗口：

```css
#scene-container {
  /* tell our scene container to take up the full page */
  position: absolute;
  width: 100%;
  height: 100%;

  /*
    Set the container's background color to the same as the scene's
    background to prevent flashing on load
  */
  background-color: skyblue;
}
```

最后，我们将背景颜色设置为天蓝色，因为这是我们将为大部分的 three.js 场景提供的背景颜色。我们的场景需要几毫秒才能准备好，而浏览器会解析 JavaScript、加载 3D 模型并构建场景，而所有这些场景容器上的内容都是可见的。通过使容器与场景颜色相同，我们确保过渡尽可能平滑。

## vendor/ 文件夹

***vendor/*** 文件夹是我们放置 *其他人* 编写的 JavaScript 文件的地方。对于本书中的大多数示例，这意味着来自 three.js 库的文件，从 [three.js GitHub 仓库](https://discoverthreejs.com/zh/book/introduction/github-repo/)下载。在本书中，我们将只使用库中的三个文件：

- ***vendor/three/build/three.module.js***: 主 three.js 文件.
- ***vendor/three/examples/jsm/controls/OrbitControls.js***: 我们将介绍的相机控制插件。
- ***vendor/three/examples/jsm/loaders/GLTFLoader.js***: 我们将介绍的 3D 模型加载器。

***vendor/three*** 文件夹反映了 GitHub 仓库的结构，但为了清楚起见，我们将仅包含每章所需的文件。我们将使用 CDN 的方式导入这些文件到 ***main.js*** 中：

```js
import { Camera, Group, Scene } from "https://cdn.skypack.dev/three@0.132.2";

import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js?module";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js?module";
```

## assets/ 文件夹

最后是 ***assets/*** 文件夹。**我们的应用程序中使用的任何非 HTML、CSS 或 JavaScript 的东西都在这里**：纹理、3D 模型、字体、声音等等。

有了这些，是时候开始做真正的工作了！在下一章中，我们将创建我们的第一个简单的 three.js 应用程序。   

## 第一个 three.js 场景：你好，立方体！

在本章中，我们将创建 three.js 的 Hello World 应用程序：一个简单的白色立方体。由于我们已经建立了一个简单的网页，如上一章所述，我们需要做的就是在 ***src/main.js*** 中编写几行 JavaScript 代码，我们的应用程序就会运行起来。我们将在此过程中介绍相当多的理论，但实际代码很短。下面是该文件在本章结束时的样子。不算导入语句和注释，总共有不到二十行代码。这就是创建一个简单的“你好，立方体！”的 three.js 应用程序所需要的全部内容。

```js
import {
  BoxBufferGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';

// Get a reference to the container element that will hold our scene
const container = document.querySelector('#scene-container');

// create a Scene
const scene = new Scene();

// Set the background color
scene.background = new Color('skyblue');

// Create a camera
const fov = 35; // AKA Field of View
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane

const camera = new PerspectiveCamera(fov, aspect, near, far);

// every object is initially created at ( 0, 0, 0 )
// move the camera back so we can view the scene
camera.position.set(0, 0, 10);

// create a geometry
const geometry = new BoxBufferGeometry(2, 2, 2);

// create a default (white) Basic material
const material = new MeshBasicMaterial();

// create a Mesh containing the geometry and material
const cube = new Mesh(geometry, material);

// add the mesh to the scene
scene.add(cube);

// create the renderer
const renderer = new WebGLRenderer();

// next, set the renderer to the same size as our container element
renderer.setSize(container.clientWidth, container.clientHeight);

// finally, set the pixel ratio so that our scene will look good on HiDPI displays
renderer.setPixelRatio(window.devicePixelRatio);

// add the automatically created <canvas> element to the page
container.append(renderer.domElement);

// render, or 'create a still image', of the scene
renderer.render(scene, camera);
```

在开始编写代码之前，让我们先看看构成每个 three.js 应用程序的基本组件。首先是场景、相机和渲染器，它们构成了应用程序的基本脚手架。接下来是 HTML `<canvas>`元素，我们可以在其中看到结果。最后但并非最不重要的一点是，有一个可见的对象，例如网格。除了画布 canvas（特定于浏览器）之外，在任何 3D 图形系统中都可以找到与这些组件中的每一个等效的组件，从而使您在这些页面中获得的知识具有高度可转移性。

## 场景：小宇宙

**场景是我们能看到的一切的载体**。您可以将其视为所有 3D 对象都存在于其中的“小宇宙”。我们用来创建场景的 three.js 类简称为 [`Scene`](https://threejs.org/docs/#api/en/scenes/Scene). 其构造函数不带参数。

```js
import { Scene } from 'three';
const scene = new Scene();
```

场景`scene`定义了一个名为**World Space（世界空间）**的坐标系，它是我们在 three.js 中处理可见对象时的主要参考框架。世界空间是一个 [3D 笛卡尔坐标系](https://mathinsight.org/cartesian_coordinates)。

场景的中心是点(0,0,0)，也称为坐标系的**原点**。每当我们创建一个新对象并将其添加到我们的场景中时，它将被放置在原点，并且每当我们移动它时，我们说的都是在这个坐标系中移动它。

当我们将对象添加到场景中时，它们会被放入 [**场景图中**](http://what-when-how.com/advanced-methods-in-computer-graphics/scene-graphs-advanced-methods-in-computer-graphics-part-1/)，这是一个树形结构，场景位于顶部。

## 相机：指向小宇宙的望远镜

场景的小宇宙是指纯数学的领域。要查看场景，我们需要打开一个进入这个领域的窗口，并将其转换为对我们人眼感觉合理的东西，这就是相机的用武之地。

有几种方法可以将场景图形转换为人类视觉友好的格式，使用称为**投影**的技术。对我们来说，最重要的投影类型是**透视投影**，它旨在匹配我们的眼睛看待世界的方式。

要使用透视投影查看场景，我们使用 [`PerspectiveCamera`](https://threejs.org/docs/#api/en/cameras/PerspectiveCamera)。 这种类型的相机是现实世界中相机的 3D 等效物，并使用许多相同的概念和术语，例如视野和纵横比。与场景`Scene`不同的是，`PerspectiveCamera`构造函数有几个参数。

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

构造函数最多需要六个参数，但在这里，我们只提供前三个参数，它们指定盒子的长度、宽度和深度。默认值将被提供给我们省略的任何其他参数。

## 材料

虽然几何体定义了形状，**但材质定义了网格表面的外观**。我们将在本章中使用 [`MeshBasicMaterial`](https://threejs.org/docs/#api/en/materials/MeshBasicMaterial) ，这是可用的最简单的材质，更重要的是，不需要我们在场景中添加任何灯光。现在，我们将省略所有参数，这意味着将创建默认的白色材质。

```js
import { MeshBasicMaterial } from 'three';

const material = new MeshBasicMaterial();
```

## 我们的第一个 three.js 应用程序

现在我们准备好编写一些代码了！我们已经介绍了构成我们简单应用程序的所有组件，因此下一步是弄清楚它们如何组合在一起。我们将把这个过程分成六个步骤。您创建的每个 three.js 应用程序都需要所有这六个步骤，尽管更复杂的应用程序通常需要更多。

1. 初始设置
2. 创建场景
3. 创建相机
4. 创建可见对象
5. 创建渲染器
6. 渲染场景

## 1. 初始设置

初始设置的一个重要部分是创建某种网页来托管我们的场景，这个我们在上一章中已经介绍过。在这里，我们将专注于我们需要编写的 JavaScript。首先，我们将从 three.js 中导入必要的类，然后我们将从 ***index.html*** 文件中获取对该`scene-container`元素的引用。

### 从 three.js 中导入类

总结到目前为止我们介绍的所有组件，我们可以看到我们需要这些类：

- `BoxBufferGeometry`
- `Mesh`
- `MeshBasicMaterial`
- `PerspectiveCamera`
- `Scene`
- `WebGLRenderer`

我们还将使用`Color`类来设置场景的背景颜色：

- `Color`

我们可以仅使用单个`import`语句从 three.js 核心导入我们需要的所有内容。

```js
import {
  BoxBufferGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';
```

### JavaScript 中访问 HTML 的`scene-container`元素

在 ***index.html*** 中，我们创建了一个`scene-container`元素。

```html
<body>
  <h1>Discoverthreejs.com - Your First Scene</h1>

  <div id="scene-container">
    <!-- Our <canvas> will be inserted here -->
  </div>
</body>
```

渲染器会自动为我们创建一个`<canvas>`元素，我们将把它插入到这个容器中。通过这样做，我们可以通过使用 CSS 设置容器的大小来控制场景的大小和位置。首先，我们需要在 JavaScript 中访问容器元素，我们将使用 [`document.querySelector`](https://discoverthreejs.com/zh/book/appendix/dom-api-reference/#accessing-html-elements)。

```js
// Get a reference to the container element that will hold our scene
const container = document.querySelector('#scene-container');
```

## 2.创建场景

设置好之后，我们将从创建场景开始，我们自己的小宇宙。我们将使用 [`Scene`](https://threejs.org/docs/#api/scenes/Scene)构造函数（带有大写的“S”）来创建一个`scene`实例（带有小写的“s”）：

```js
// create a Scene
const scene = new Scene();
```

### 设置场景的背景颜色

接下来，我们将 [场景背景的颜色 ](https://threejs.org/docs/#api/en/scenes/Scene.background)更改为天蓝色。如果我们不这样做，将使用默认颜色，即黑色。我们将使用我们在上面导入的`Color`类，将字符串`'skyblue'`作为参数传递给构造函数：

```js
// Set the background color
scene.background = new Color('skyblue');
```

`'skyblue'`是一个 [CSS 颜色名称](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)，我们可以在这里使用全部 140 种命名颜色中的任何一种。当然，不仅限于使用这几种颜色。您可以使用您的显示器可以显示的任何颜色，并且有几种指定它们的方法，就像在 CSS 中一样。

## 3.创建相机

在 three.js 核心中有几个不同的相机可用，但正如我们上面讨论的，我们将主要使用 [`PerspectiveCamera`](https://threejs.org/docs/#api/cameras/PerspectiveCamera)，因为它绘制的场景视图看起来类似于我们的眼睛看到的真实世界。`PerspectiveCamera`构造函数有四个参数：

1. `fov`，**视野**：相机的视野有多宽，以度为单位。
2. `aspect`，**纵横比**：场景的宽度与高度的比率。
3. `near`, **近剪裁平面**：任何比这更靠近相机的东西都是不可见的。
4. `far`，**远剪裁平面**：任何比这更远离相机的东西都是不可见的。

```js
// Create a camera
const fov = 35; // AKA Field of View
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane

const camera = new PerspectiveCamera(fov, aspect, near, far);
```

这四个参数一起用于创建一个有边界的空间区域，我们称之为 [**视锥体**](https://en.wikipedia.org/wiki/Viewing_frustum)。

### 相机的视锥体

如果`scene`是一个微小的宇宙，永远向四面八方延伸，那么相机的视锥体就是我们可以看到的部分。*视锥体* 是一个数学术语，意思是一个顶部被切掉的四边矩形金字塔。当我们通过`PerspectiveCamera`查看场景时，视锥体内的一切都是可见的，而它外面的一切都是不可见的。

我们传递给构造函数的四个参数`PerspectiveCamera`分别创建视锥体的一个方面：

1. **视野**定义了视锥体扩展的角度。窄视场将产生窄视锥体，宽视场将产生宽视锥体。
2. **纵横比**将视锥体与场景容器元素匹配。当我们将其设置为容器的宽度除以其高度时，我们确保视锥体的矩形底座可以扩展以完全适合容器。如果我们弄错了这个值，场景看起来会变得拉伸和模糊。
3. **近剪切平面**定义视锥体的小端（最靠近相机的点）。
4. **远剪裁平面**定义视锥体的大端（离相机最远的点）。

渲染器不会绘制场景中不在视锥体内的任何对象。如果物体部分在视锥体内，部分在视锥体外，则外部部分将被砍掉（剪裁）。

### 定位相机

我们创建的每个对象最初都位于场景的中心，(0,0,0)。 这意味着我们的相机当前位于(0,0,0)，我们添加到场景中的任何对象也将定位在(0,0,0), 都在彼此之上混杂在一起。艺术性地放置相机是一项重要的技能，但是，现在，我们将简单地将其移回（ *朝向我们* ）以给我们一个场景的概览。

```js
const camera = new PerspectiveCamera(fov, aspect, near, far);

// every object is initially created at ( 0, 0, 0 )
// move the camera back so we can view the scene
camera.position.set(0, 0, 10);
```

设置任何对象的位置的方法都是一样的，无论是相机，网格，灯还是其他任何东西。我们可以一次设置位置的所有三个组成部分，就像我们在这里所做的那样：

```js
camera.position.set(0, 0, 10);
```

或者，我们可以单独设置 X，Y 和 Z 轴：

```js
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 10;
```

两种设置位置的方式都会给出相同的结果。位置存储在一个 [`Vector3`](https://threejs.org/docs/#api/en/math/Vector3)，一个表示 3D 向量的 three.js 类中。

## 4.创建一个可见对象

我们创建了一个`camera`用来查看事物，以及一个`scene`用来把它们放进去。下一步是创建我们可以看到的东西。在这里，我们将创建一个简单的盒子形状 [`Mesh`](https://threejs.org/docs/#api/objects/Mesh)。正如我们上面提到的，网格有两个我们需要首先创建的子组件：几何体和材质。

### 创建几何体

网格的几何定义了它的形状。如果我们创建一个盒子形状的几何体（就像我们在这里所做的那样），我们的网格将被塑造成一个盒子。如果我们创建一个球形几何体，我们的网格将呈球体形状。如果我们创建一个猫形几何体，我们的网格将被塑造成一只猫……你明白了。在这里，我们使用 [`BoxBufferGeometry`](https://threejs.org/docs/#api/geometries/BoxBufferGeometry)。 这三个参数定义了盒子的宽度、高度和深度：

```js
// create a geometry
const geometry = new BoxBufferGeometry(2, 2, 2);
```

大多数参数都有默认值，因此即使文档说`BoxBufferGeometry`应该采用六个参数，我们也可以省略大部分参数，而 three.js 将使用默认值填充空白。**我们不必传入任何参数**。

```js
const geometry = new BoxBufferGeometry();
```

如果我们省略所有参数，我们将得到一个默认框，它是1×1×1立方体。我们想要一个更大的立方体，所以我们传入上面的参数来创建一个2×2×2盒子。

### 创建材质

材料定义了对象的表面属性，或者换句话说，定义了对象看起来是由什么制成的。**几何体告诉我们网格是一个盒子、一辆汽车或一只猫，而材质告诉我们它是一个金属盒子、一辆石质汽车或一只涂成红色的猫**。

在 three.js 中有不少资料。在这里，我们将创建一个 [`MeshBasicMaterial`](https://threejs.org/docs/#api/en/materials/MeshBasicMaterial)，这是可用的最简单（也是最快）的材料类型。此材质还会忽略场景中的任何灯光，并根据材质的颜色和其他设置为网格着色（阴影），这非常棒，因为我们还没有添加任何灯光。我们将在不向构造函数传递任何参数的情况下创建材质，因此我们将获得默认的白色材质。

```js
// create a default (white) Basic material
const material = new MeshBasicMaterial();
```

如果我们现在使用除`MeshBasicMaterial`之外的几乎任何其他材质类型，我们将无法看到任何东西，因为场景完全处于黑暗中。**就像在现实世界中一样，我们通常需要光线才能看到场景中的事物**。`MeshBasicMaterial`是该规则的一个例外。

对于 three.js 的新手来说，这是一个常见的混淆点，所以如果您看不到任何东西，请确保您已经在场景中添加了一些灯光，或者暂时将所有材质切换为`MeshBasicMaterial`。

现在我们有了几何体和材质，我们可以创建我们的网格，将两者都作为参数传入。

```js
// create a geometry
const geometry = new BoxBufferGeometry(2, 2, 2);

// create a default (white) Basic material
const material = new MeshBasicMaterial();

// create a Mesh containing the geometry and material
const cube = new Mesh(geometry, material);
```

之后，我们可以随时使用`mesh.geometry`和`mesh.material`访问几何体和材质。

### 将网格添加到场景中

创建完成`mesh`后，我们需要将其添加到场景中。

```js
// add the mesh to the scene
scene.add(cube);
```

稍后，如果我们想删除它，我们可以使用`scene.remove(mesh)`。 一旦网格被添加到场景中，我们称网格为场景的子节点，我们称场景为网格的父节点。

## 5. 创建渲染器

我们这个简单应用程序的最后一个组件是渲染器，它负责将场景绘制（**渲染**）到`<canvas>`元素中。我们将在这里使用 [`WebGLRenderer`](https://threejs.org/docs/#api/renderers/WebGLRenderer)。还有一些其他渲染器可用作插件，但`WebGLRenderer`是迄今为止最强大的渲染器，通常是您唯一需要的渲染器。让我们现在继续创建一个`WebGLRenderer`，再次使用默认设置。

```js
// create the renderer
const renderer = new WebGLRenderer();
```

### 设置渲染器的大小

我们快到完成了！接下来，我们需要使用容器的宽度和高度告诉渲染器我们的场景大小。

```js
// next, set the renderer to the same size as our container element
renderer.setSize(container.clientWidth, container.clientHeight);
```

如果你还记得，我们使用 CSS 使容器占据了整个浏览器窗口的大小，因此场景也将占据整个窗口。

### 设置设备像素比（DPR）

我们还需要告诉渲染器设备屏幕的像素比是多少。**这是防止 HiDPI 显示器模糊所必需的** （也称为视网膜显示器）

```js
// finally, set the pixel ratio so that our scene will look good on HiDPI displays
renderer.setPixelRatio(window.devicePixelRatio);
```

我们不会在这里讨论技术细节，但你不能忘记设置它，否则你的场景在你测试它的笔记本电脑上可能看起来很棒，但在带有视网膜显示器的移动设备上会模糊。与往常一样， [附录有更多细节](https://discoverthreejs.com/zh/book/appendix/dom-api-reference/#the-virtual-viewport)。

### 将`<canvas>`元素添加到我们的页面

渲染器将  从相机的角度将我们的场景绘制到一个`<canvas>`元素中去。这个元素已经为我们自动创建并存储在`renderer.domElement`中，但是在我们看到它之前，我们需要将它添加到页面中。我们将使用一个 [名为`.append`的内置 JavaScript 方法](https://discoverthreejs.com/zh/book/appendix/dom-api-reference/#adding-the-new-elements-to-our-page)来做到这一点：

```js
// add the automatically created <canvas> element to the page
container.append(renderer.domElement);
```

现在，如果您打开浏览器的开发控制台（按 F12）并检查 HTML，您将看到如下内容：

```html
<div id="scene-container">
  <canvas
    width="800"
    height="600"
    style="width: 800px; height: 600px;"
  ></canvas>
</div>
```

这假设浏览器窗口大小为 800×600, 所以你看到的可能看起来略有不同。请注意，`renderer.setSize`它还设置了画布上的宽度、高度和样式属性。

## 6. 渲染场景

一切就绪后，剩下要做的就是**渲染场景！**，将以下也是最后一行添加到您的代码中：

```js
// render, or 'create a still image', of the scene
renderer.render(scene, camera);
```

通过这一行，我们告诉渲染器使用相机创建场景的静态图片并将该图片输出到`<canvas>`元素中。如果一切设置正确，您将看到蓝色背景下的白色立方体。很难看出它是一个立方体，因为我们直接看的是一个正方形的脸，但我们将在接下来的几章中解决这个问题。

做得好！**读完这一章，您已经迈出了作为 three.js 开发人员职业生涯的第一次巨大飞跃**。我们的场景可能还没有那么有趣，但我们已经奠定了一些重要的基础，并涵盖了计算机图形学的一些基本概念，您将在以后构建的每个场景中使用这些概念，无论您使用的是 three.js 还是任何其他 3D 图形系统。
