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

## Three.js 应用的结构

在我们构建一个 three.js 应用程序之前，我们需要创建一个网页。我们在简介中简要讨论了我们将如何做到这一点（ [Ch 0.5](https://discoverthreejs.com/zh/book/introduction/get-threejs/)和 [Ch 0.6](https://discoverthreejs.com/zh/book/introduction/threejs-with-frameworks/)），但现在让我们更深入地了解一下。正如我们在上一章中提到的，我们的目标是尽可能创建最基本、最简单、最平淡无奇的网页，而无需对使用 three.js 的真实 Web 应用程序的外观做出任何假设。通过这样做，我们确保我们编写的代码可以适应任何地方，而无需太多努力。

我们将只用两个文件创建这个基本网页：***index.html\**\*和\**\*styles/main.css\***。就是这样。现在按下按钮打开编辑器并查看这两个文件。

## 动画循环

在过去的几章中，我们的应用程序取得了惊人的进步。我们有灯光、颜色、物理上正确的渲染、抗锯齿、自动调整大小，我们知道如何在3D空间中移动对象，而且我们的代码干净、模块化且结构良好。但是我们的场景缺少一个重要的元素：**运动！**

我们正在使用该`renderer.render`方法来绘制场景。此方法将场景和相机作为输入，并将单个静止图像输出到HTML`<canvas>`元素。输出是您可以在上面看到的不动的紫色盒子。

```js
render() {
  // draw a single frame
  renderer.render(scene, camera);
}
```

在本章中，我们将为立方体添加一个简单的旋转动画。我们将这样做：

- **调用`renderer.render(...)`**
- **等待。。。直到是时候画下一帧**
- **稍微旋转立方体一点**
- **调用`renderer.render(...)`**
- **等待。。。直到是时候画下一帧**
- **稍微旋转立方体一点**
- **调用`renderer.render(...)`**
- **等待。。。直到是时候画下一帧**
- **稍微旋转立方体一点**
- …

……等等在一个称为**动画循环**的无限循环中。设置这个循环很简单，因为three.js通过`renderer.setAnimationLoop`方法为我们完成了所有困难的工作。

我们还将在本章中介绍three.js的`Clock`，一个简单的秒表类，我们可以使用它来保持动画同步。我们将在本章中处理小于一秒的时间值，因此我们将使用毫秒 (ms)，即千分之一秒。

一旦我们设置了循环，我们的目标就是以每秒60帧(60FPS)的速率生成稳定的帧流，这意味着我们需要大约每16毫秒调用一次`.render`。换句话说，我们需要确保我们在一帧中所做的所有处理的花费都少于16毫秒（这有时被称为**frame budget - 帧预算**）。这意味着我们需要更新动画，执行任何其他需要跨帧计算的任务（例如物理），并在我们打算支持的最低规格硬件上在不到16毫秒的时间内渲染帧。在本章的其余部分，当我们设置循环并为立方体创建一个简单的旋转动画时，我们将讨论如何最好地实现这一点。

## 与游戏循环的相似之处

大多数游戏引擎使用每帧运行一次的**游戏循环**的概念，用于更新和渲染游戏。一个基本的游戏循环可能包含以下四个任务：

1. **获取用户输入**
2. **计算物理**
3. **更新动画**
4. **渲染一帧**

尽管three.js不是游戏引擎并且我们将循环称为**动画循环**，但我们的目标非常相似。这意味着，我们可以从游戏引擎设计中借鉴一些久经考验且值得信赖的想法，而不是从头开始。我们在本章中创建的循环非常简单，但是如果您以后发现自己需要一个更复杂的循环，可能以与渲染场景不同的速率更新动画和物理，您可以参考 [一本关于游戏开发的书](https://gameprogrammingpatterns.com/game-loop.html)了解更多信息信息。

稍后，我们将使我们的场景具有交互性。幸运的是，由于有了 [`addEventListener`](https://discoverthreejs.com/zh/book/appendix/dom-api-reference/#listening-for-events)，在浏览器中处理用户输入很容易，所以我们不需要在循环中处理这个任务。此外，我们暂时不会进行任何物理计算（尽管有几个很棒的物理库能和three.js一起使用），所以我们可以跳过物理步骤。渲染已经被`renderer.render`处理。这给我们留下了本章中的两个任务：设置循环本身，然后创建一个更新动画的系统。

我们将首先设置循环以生成帧流，然后设置动画系统。

## 用three.js创建一个动画循环

### ***Loop.js*** 模块

打开（或创建）***systems/Loop.js*** 模块并在其中创建一个新`Loop`类。这个类将处理所有的循环逻辑和动画系统。您会注意到我们已经导入`Clock`了 ，我们将在下面使用它来保持动画同步。接下来，由于我们将使用`renderer.render(scene, camera)`生成帧，因此可以肯定的是，我们需要在`Loop`类中使用`camera`、`scene`和`renderer`，因此需要将它们传递给构造函数并将它们保存为实例变量。最后，创建我们以后可以用来启动/停止循环的方法：`.start`和`.stop`。

```js
import { Clock } from "three";

class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
  }

  start() {}

  stop() {}
}

export { Loop };
```
