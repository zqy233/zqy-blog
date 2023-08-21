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



