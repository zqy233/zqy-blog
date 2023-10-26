## 基于物理的渲染和照明

最近， [**基于物理的渲染**](https://en.wikipedia.org/wiki/Physically_based_rendering) （PBR）已成为渲染实时和电影 3D 场景的行业标准方法。顾名思义，这种渲染技术使用真实世界的物理学来计算表面对光的反应方式，从而避免在场景中设置材质和照明时进行猜测。

PBR 是迪士尼为其长篇动画创建的，也用于现代游戏引擎，如 Unreal 和 Frostbite。令人惊讶的是，微小的（压缩后为 600kb）three.js 内核允许我们使用与这些行业领先巨头相同的物理正确渲染技术，不仅如此，我们甚至可以在智能手机等低功耗设备上运行这些技术。就在几年前，这是一项需要大量功能强大的计算机的尖端技术，而现在我们可以在任何地方的网络浏览器中运行它。

在 three.js 中使用 PBR 就像切换我们使用的材质并添加光源一样简单。我们将在下面介绍最重要的 three.js PBR 材料，即`MeshStandardMaterial`。我们不会在本书中深入探讨基于物理渲染的技术细节，但如果您有兴趣了解更多信息，请阅读这本出色的奥斯卡获奖书（是的，他们显然将奥斯卡奖授予书籍） [基于物理的渲染：从理论到实现](http://www.pbr-book.org/)是完全免费的

## 介绍`DirectionalLight`

[`DirectionalLight`](https://threejs.org/docs/#api/lights/DirectionalLight)设计的目的是模仿遥远的光源，例如太阳。来自`DirectionalLight`的光线不会随着距离而消失。**场景中的所有对象都将被同样明亮地照亮，无论它们放在哪里——即使是在灯光后面**。

`DirectionalLight`的光线是平行的，从一个位置照向一个目标。默认情况下，目标放置在我们场景的中心（点(0,0,0))，所以当我们移动周围的光线时，它总是会向中心照射。

### 添加一个`DirectionalLight`到我们的场景

说得够多了，让我们在场景中添加一个`DirectionalLight`。打开或创建 ***components/lights.js*** 模块，该模块将遵循与此文件夹中其他组件相同的模式。首先，我们将导入`DirectionalLight`类，然后我们将设置一个`createLights`函数，最后，我们将导出该函数：

```js
import { DirectionalLight } from 'three';

function createLights() {
const light = null; // TODO

return light;
}

export { createLights };
```

### 创建一个`DirectionalLight`

[`DirectionalLight`](https://threejs.org/docs/#api/en/lights/DirectionalLight)构造函数有两个参数，颜色**color**和强度**intensity**。在这里，我们创建一个强度为 8 的纯白光

```js
function createLights() {
// Create a directional light
const light = new DirectionalLight('white', 8);

return light;
}
```

所有 three.js 灯都有颜色和强度设置，继承自 [`Light`基类](https://threejs.org/docs/#api/en/lights/Light.intensity)。

### 定位灯光

`DirectionalLight`从`light.position`照向`light.target.position`。正如我们上面提到的，灯光和目标的默认位置都是我们场景的中心，(0,0,0)。这意味着光线当前正在从(0,0,0)照向(0,0,0)。 这确实有效，但看起来不太好。我们可以通过调整`light.position`来改善灯光的外观。我们将通过将位置设置为(10,10,10)来达到向左、向上和朝向我们移动它的效果。

```js
import { DirectionalLight } from 'three';

function createLights() {
  // Create a directional light
  const light = new DirectionalLight('white', 8);

  // move the light right, up, and towards us
  light.position.set(10, 10, 10);

  return light;
}

export { createLights };
```

现在灯光从(10,10,10)照向(0,0,0)。



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

## 
