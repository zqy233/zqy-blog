# pnpm

pnpm 是一个包管理器，这一点跟 npm/yarn 没有区别，但它作为杀手锏的两个优势在于:

- 包安装速度极快;
- 磁盘空间利用非常高效

```sh
npm i -g pnpm
```

作者Zoltan Kochan认为，yarn只是对npm做了些微改进，提升了速度、增加了一些属性，但并没有改变npm的扁平化依赖结构。而扁平化结构自带以下问题：

1. 模块可以访问自身并不依赖的包
2. 依赖树的扁平化算法相当复杂
3. 有一些包不得不拷贝进项目的node_modules目录

Zoltan Kochan对pnpm的研发投入了更多的时间，pnpm取得了成功，囊括了yarn所有增加的属性：

1. 安全：代码执行前对其进行检查，以确保依赖安装的完整性
2. 离线模式：pnpm将所有已下载包的压缩文件保存在本地镜像仓库，以实现离线使用，只需要配置--offline参数
3. 快速：pnpm速度大概是npm和yarn的1/3左右。因为yarn需要拷贝包，而 pnpm只需要把包存在全局仓库，任何需要的地方指向它即可

```sh
# 全局安装
pnpm add <packageName> -g
# 查询当前地址配置
pnpm config get registry
# 切换淘宝镜像
pnpm config set registry https://registry.npmmirror.com
# 切换回原先地址
pnpm config set registry https://registry.npmjs.org
```

## package.json

The manifest file of a package. It contains all the package's metadata, including dependencies, title, author, et cetera. This is a standard preserved across all major Node.JS package managers, including pnpm.

包的清单文件。它包含包的所有元数据，包括依赖项、标题、作者等。这是所有主要Node.JS包管理器（包括pnpm）中保留的标准。



