# 以glTF格式加载3D模型

仅使用这些几何图形很难构建任何复杂或现实的东西。要创建漂亮的3D模型，需要复杂的 [建模程序](https://en.wikipedia.org/wiki/3D_modeling)。

您可以使用three.js构建任何类型的3D应用程序，但是，从头开始构建建模应用程序将是一项巨大的工作。

一个更简单的解决方案是使用现有程序并导出您的作品以在three.js中使用……或者，偷懒然后下载数以百万计的惊人模型和其他场景资产中的任何一个，这些模型和其他场景资产可在网络上的许多地方免费获得。

在本章中，我们将向您展示如何加载在 [Blender](https://www.blender.org/)中创建的一些模型，这是一个开源3D图形应用程序，可用于建模、场景构建、材质创建、动画创作等。在Blender中创建模型后，您可以使用glTF等3D格式导出您的作品，然后使用 [`GLTFLoader`插件](https://threejs.org/docs/#examples/en/loaders/GLTFLoader)将模型导入到three.js中。

## 通过Web发送3D资源的最佳方式：glTF

在过去三十年左右的时间里， 人们在创建标准3D**资源交换格式**方面进行了许多尝试。直到最近， [FBX](https://threejs.org/examples/webgl_loader_fbx.html)、 [OBJ (Wavefront)](https://threejs.org/examples/#webgl_loader_obj_mtl)和 [DAE (Collada)](https://threejs.org/examples/?q=collada#webgl_loader_collada_skinning)格式仍然是其中最受欢迎的格式，尽管它们都存在阻碍其广泛采用的问题。比如OBJ不支持动画，FBX是属于Autodesk的封闭格式，Collada规范过于复杂，导致大文件难以加载。

然而，最近，一个名为**glTF**的新成员已成为在网络上交换3D资源的事实上的标准格式。 [glTF](https://www.khronos.org/gltf/)（**GL传输格式**），有时被称为 *3D中的JPEG*，由 [Kronos Group](https://www.khronos.org/)创建，他们负责WebGL、OpenGL和一大堆其他图形API。glTF最初于2017年发布，现在是在网络和许多其他领域交换3D资源的最佳格式。**在本书中，我们将始终使用glTF，如果可能，您也应该这样做**。它专为在网络上共享模型而设计，因此文件大小尽可能小，并且您的模型将快速加载。

但是，由于glTF相对较新，您最喜欢的应用程序可能还没有导出器。在这种情况下，您可以在使用模型之前将它们转换为glTF，或者使用其他加载器，例如`FBXLoaderor`或者`OBJLoader`。所有three.js加载器的工作方式相同，因此如果您确实需要使用另一个加载器，本章中的所有内容仍然适用，只有细微差别。

每当我们提到glTF时，我们指的是 *glTF Version 2*。最初的 *glTF Version 1* 从未被广泛使用，并且不再被three.js支持

glTF文件可以包含模型、动画、几何图形、材质、灯光、相机，甚至整个场景。这意味着您可以在外部程序中创建整个场景，然后将其加载到three.js中。

## glTF文件的类型

glTF文件以标准和二进制形式出现。这些有不同的扩展名：

- **标准 \*.gltf\* 文件未压缩，可能附带一个额外的 \*.bin\* 数据文件。**
- **二进制 \*.glb\* 文件将所有数据包含在一个文件中。**

标准和二进制glTF文件都可能包含嵌入在文件中的纹理或可能引用外部纹理。由于二进制 ***.glb*** 文件要小得多，因此最好使用这种类型。另一方面，未压缩的 ***.gltf*** 在文本编辑器中很容易阅读，因此它们可能对调试有用。

## `GLTFLoader`插件

要加载glTF文件，首先，您需要将 [`GLTFLoader`插件](https://threejs.org/docs/#examples/en/loaders/GLTFLoader)添加到您的应用程序中。这与添加 [`OrbitControls`插件](https://discoverthreejs.com/zh/book/first-steps/camera-controls/#importing-plugins)的方式相同。您可以在repo的 [***examples/jsm/loaders/GLTFLoader.js***](https://github.com/mrdoob/three.js/blob/dev/examples/jsm/loaders/GLTFLoader.js)中找到加载程序。

```js
 <script type="module">
      import { GLTFLoader } from "https://www.unpkg.com/browse/three@0.157.0/examples/jsm/loaders/GLTFLoader.js";
      const loader = new GLTFLoader();
    </script>
```

您可以使用加载程序的一个实例来加载任意数量的glTF文件。

## `.load`和`.loadAsync`方法

所有three.js加载器都有两种加载文件的方法：旧的基于回调的 [`.load`](https://threejs.org/docs/#examples/en/loaders/GLTFLoader.load)方法和新的基于Promise的`.loadAsync`方法。Promise允许我们使用异步函数，这反过来会产生更简洁的代码。

```js
const loader = new GLTFLoader();
const gltfData = await loader.loadAsync('path/to/yourModel.glb');
```

## `GLTFLoader`返回的数据

```js
const loader = new GLTFLoader();
const gltfData = await loader.loadAsync('path/to/yourModel.glb');
console.log(gltfData)
```

```js
{
animations: [AnimationClip]
asset: {generator: "Khronos Blender glTF 2.0 I/O", version: "2.0"}
cameras: []
parser: GLTFParser {json: {…}, extensions: {…}, options: {…}, cache: {…}, primitiveCache: {…}, …}
scene: Scene {uuid: "1CF93318-696B-4411-B672-4C12C46DF7E1", name: "Scene", type: "Scene", parent: null, children: Array(0), …}
scenes: [Scene]
userData: {}
**proto**: Object
}
```

- **`gltfData.animations`** 是一个动画剪辑数组。在这里，有一个飞行动画。我们将在 [下一章中](https://discoverthreejs.com/zh/book/first-steps/animation-system/)使用它。
- **`gltfData.assets`** 包含显示此glTF文件的元数据 — 使用 [Blender](https://www.blender.org/)导出器创建。
- **`gltfData.cameras`** 是一组相机。该文件不包含任何摄像机，因此数组为空。
- **`gltfData.parser`** 包含关于`GLTFLoader`的技术细节。
- **`gltfData.scene`** 是一个包含文件中的任何网格的 [`Group`](https://discoverthreejs.com/zh/book/first-steps/organizing-with-group/#hello-group)。**这是我们将找到鹦鹉模型的地方。**
- **`gltfData.scenes`**: glTF格式支持将多个场景存储在一个文件中。在实践中，很少使用此功能。
- **`gltfData.userData`** 可能包含额外的非标准数据。

_ `__proto__`是每个JavaScript对象都有的标准属性，你可以忽略它。_

通常，您只需要**`.animations`**、**`.cameras`**和**`.scene`**（而不是`.scenes`！），您可以放心地忽略其他所有内容。

## 第一个使用3d模型的html

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
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r126/three.min.js"></script>
  <script src="https://unpkg.com/three@0.126.0/examples/js/loaders/GLTFLoader.js"></script>
  <body>
    <script>
      const gltfLoader = new THREE.GLTFLoader();
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer();
      document.body.appendChild(renderer.domElement);
      camera.position.z = 5;

      async function loadModel() {
        const flamingo = await gltfLoader.loadAsync("/models/Flamingo.glb");
        const parrot = await gltfLoader.loadAsync("/models/Parrot.glb");
        const stork = await gltfLoader.loadAsync("/models/Stork.glb");

        scene.add(flamingo.scene);
        scene.add(parrot.scene);
        scene.add(stork.scene);

        flamingo.scene.position.set(7.5, 0, -10);
        parrot.scene.position.set(0, 0, 2.5);
        stork.scene.position.set(0, -2.5, -10);
        
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        scene.add(directionalLight);

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0xffffff);
        renderer.render(scene, camera);
      }

      loadModel();
    </script>
  </body>
</html>
```