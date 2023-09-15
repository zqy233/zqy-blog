## WebGL是什么意思

WebGL的全称是Web Graphics Library，它是一种用于在网页浏览器中渲染交互式3D图形的技术。它基于OpenGL（一种广泛用于计算机图形学的编程接口）并通过JavaScript API提供了在网页上创建和展示复杂的3D图形的能力。

WebGL使开发者能够使用JavaScript编写代码，直接在网页中呈现高性能的3D图形，无需使用插件或其他外部软件。它允许开发者利用计算机的图形硬件来执行复杂的图形计算，从而实现各种视觉效果和交互体验，比如3D模型渲染、游戏开发、数据可视化等。

WebGL技术的实现依赖于浏览器的支持，目前大多数主流浏览器（如Chrome、Firefox、Safari等）都已经支持了WebGL。开发者可以使用WebGL创建各种令人印象深刻的网页图形，但由于其复杂性，它通常需要一定程度的图形编程和数学知识。

## [透视相机(`PerspectiveCamera`)](https://threejs.org/docs/#api/zh/cameras/PerspectiveCamera)

> 参考资料：
>
> https://juejin.cn/post/7055179266773745672

在`three.js`中，`摄像机`的作用就是不断的拍摄我们创建好的场景，然后通过`渲染器`渲染到屏幕中。想通过不同的角度观看场景，就需要修改`摄像机`的位置来拍摄场景。本文详细介绍的是`透视相机（PerspectiveCamera）` 它是用来模拟人眼所看到的景象，它也是3D场景的渲染中使用得最普遍的投影模式。

- 根据视锥的范围给`渲染器`提供需要渲染的场景范围。
- 实例化`new THREE.PerspectiveCamera()` 接受4个参数来确认视锥的范围。只要在视锥范围内的场景才会渲染。

1. `fov`  摄像机视锥体垂直视野角度。
2. `aspect`  摄像机视锥体长宽比。
3. `near`  摄像机视锥体近端面。
4. `far`  摄像机视锥体远端面。

## 材质

## 光源

> https://threejs.org/docs/#api/zh/lights/AmbientLight



