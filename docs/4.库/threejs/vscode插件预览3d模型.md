# [glTF Tools Extension for Visual Studio Code](https://github.com/AnalyticalGraphicsInc/gltf-vscode#gltf-tools-extension-for-visual-studio-code)

vscode插件市场中下载`glTF Tools`插件

插件支持直接在vscode编辑器中预览和调试glTF 3D模型

## glTF 3D 模型格式有两种类型

glTF 3D 模型格式有两种类型： 

1. `*.gltf` 是基于 JSON 的文本文件，可以使用`glTF Tools`插件轻松编辑，通常引用外部文件，例如纹理映射和二进制网格数据。
2.  `*.glb` 是一个二进制版本，通常较小且独立，但不容易编辑。

其中， `*.glb` 文件似乎不支持预览， `*.gltf` 支持预览，所以如果只有 `*.glb` 文件需要先用插件转换一下

## 插件使用：glb转gltf

左侧文件目录中右键选中`glb`文件，`import from glb`可以基于`glb`文件生成`gltf`文件，打开`gltf`文件后右键菜单，选择`Preview 3D Model`即可查看模型





