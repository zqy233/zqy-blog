# three.js 动画系统

在上一章中，我们介绍了 glTF 模型格式，并向您展示了如何加载鹦鹉、火烈鸟和鹳这三个简单而漂亮的模型。

这些模型是从[二进制 glTF 文件](https://discoverthreejs.com/zh/book/first-steps/load-models/#types-of-gltf-files) [**parrot.glb**](https://github.com/mrdoob/three.js/blob/dev/examples/models/gltf/Parrot.glb), [**flamingo.glb**](https://github.com/mrdoob/three.js/blob/dev/examples/models/gltf/Flamingo.glb), 和 [**stork.glb**](https://github.com/mrdoob/three.js/blob/dev/examples/models/gltf/Stork.glb)加载的。除了鸟类模型，这些文件中的每一个还包含鸟类飞行的动画剪辑。

在介绍部分的最后一章中，我们将介绍 three.js 动画系统，并向您展示如何将这些动画剪辑附加到鸟类模型上，以便它们能够飞行。

**three.js 动画系统是一个完整的动画调音台。** 使用这个系统，您几乎可以为对象的任何方面设置动画，例如位置、缩放、旋转、材质的颜色或不透明度、 [蒙皮网格](https://threejs.org/examples/#webgl_animation_skinning_blending)的骨骼、 [变形目标](https://threejs.org/examples/#webgl_buffergeometry_morphtargets)以及许多其他内容。您还可以合成和混合动画，例如，如果您将“行走”动画和“跑步”动画附加到人类角色上，您可以通过合成这些动画使角色从步行加速到奔跑。

**动画系统使用关键帧来定义动画**。为了创建动画，我们在特定时间点设置关键帧，然后动画系统使用称为**补间**的过程为我们填补空白。例如，要为弹跳的球设置动画，您可以指定弹跳的顶部和底部的点，球将在其间的所有点上平滑地设置动画。您需要的关键帧数量取决于动画的复杂性。一个非常简单的动画每秒可能只需要一个关键帧，或者更少，而复杂的动画则需要更多，每秒最多需要 60 个关键帧（在标准 60Hz 显示器上超过这个值将被忽略）。