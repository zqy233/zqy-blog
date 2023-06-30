## maven

> 专门用于管理和构建java项目的工具
>
> - 提供一套标准化的项目结构，所有ide使用maven构建的项目结构完全一样，所有ide构建的maven项目可以通用
> - 提供一套标准化的构建流程（编译，测试，打包，发布... ）
> - 提供一套依赖管理机制
>
> 基于项目对象模型（pom）的概念，通过一小段描述信息来管理项目的构建，报告和文档

### idea使用maven

1. idea选择File>Settings

2. 搜索maven，idea内置有maven，但也可以配置本地安装的maven的路径，并修改配置文件路径

![image-20220612132800347](../../imgs/image-20220612132800347.png)

### maven坐标

maven坐标是资源的唯一标识

使用坐标来定义项目或引入项目中需要的依赖

主要组成

- groupId：定义当前maven项目隶属组织名称（通常是域名反写，例如：com.itheima）
- artifactId：定义当前maven项目名称（通常是模块名称，例如order-service、goods-service）
- version：定义当前项目版本号

## Maven 的 POM 文件类似前端 package.json 文件

Maven 的 POM 文件类似于前端的 npm 中的 package.json 文件。它们都是用于描述项目的配置和依赖关系的文件。下面是它们之间的一些相似之处：

1. 项目配置：POM 文件和 package.json 文件都用于配置项目的基本信息，例如项目名称、版本号、作者等。
2. 依赖管理：两者都用于管理项目的依赖项。POM 文件中使用 `<dependencies>` 元素来指定项目所需的依赖项，而 package.json 文件使用 `"dependencies"` 键来定义项目的依赖项。
3. 版本控制：POM 文件和 package.json 文件都允许指定依赖项的版本范围。这使得可以在更新依赖项时灵活地控制版本。
4. 构建脚本：package.json 文件中的 `"scripts"` 键允许定义各种自定义脚本，用于执行项目的构建任务、测试等。类似地，POM 文件中的 `<build>` 元素允许定义构建过程中的自定义操作和插件配置。

尽管 Maven 和 npm 有一些相似之处，但它们也有一些不同之处，因为它们针对不同的技术栈和语言。Maven 主要用于 Java 项目的构建和管理，而 npm 则是面向 JavaScript 生态系统的包管理工具。