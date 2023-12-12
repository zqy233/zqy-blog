# docx-merge

是一个 Node.js 库，用于合并多个 Word 文档（.docx 文件

## 引入模块

```js
var JSZip = require("jszip");
var DOMParser = require("xmldom").DOMParser;
var XMLSerializer = require("xmldom").XMLSerializer;

var Style = require("./merge-styles");
var Media = require("./merge-media");
var RelContentType = require("./merge-relations-and-content-type");
var bulletsNumbering = require("./merge-bullets-numberings");
```

- `JSZip` 是一个用于操作 ZIP 文件的库，用于读取和生成 .docx 文件。
- `DOMParser` 和 `XMLSerializer` 是用于解析和序列化 XML 的库，用于处理 Word 文档中的 XML 文件。
- `Style`, `Media`, `RelContentType`, `bulletsNumbering` 是自定义的模块，用于处理样式、媒体文件、关系和内容类型、编号等功能。

## jszip库

> https://www.npmjs.com/package/jszip

A library for creating, reading and editing .zip files with JavaScript, with a lovely and simple API.
一个用于使用 JavaScript 创建、读取和编辑 .zip 文件的库，具有可爱而简单的 API。

See https://stuk.github.io/jszip for all the documentation.
有关所有文档，请参阅 https://stuk.github.io/jszip。

```js
const zip = new JSZip();

zip.file("Hello.txt", "Hello World\n");

const img = zip.folder("images");
img.file("smile.gif", imgData, {base64: true});

zip.generateAsync({type:"blob"}).then(function(content) {
    // see FileSaver.js
    saveAs(content, "example.zip");
});

/*
Results in a zip containing
Hello.txt
images/
    smile.gif
*/
```

## 构造函数 `DocxMerger`

```js
function DocxMerger(options, files) {
  // ... 构造函数的实现 ...
}
```

- `docxMerger` 是一个构造函数，用于创建一个 `DocxMerger` 对象，接收两个参数：`options` 和 `files`。
- `options` 包含一些配置信息，如样式选择、是否插入分页符等。
- `files` 是一个数组，包含多个 .docx 文件。

### 实例属性和方法

- `_body`, `_header`, `_footer`: 存储文档的主体、页眉和页脚部分的数组。
- `_Basestyle`: 样式基础选择，默认为 "source"。
- `_style`, `_numbering`: 存储样式和编号信息的数组。
- `_pageBreak`: 是否插入分页符的标志。
- `_files`: 存储多个 .docx 文件的数组。
- `_contentTypes`, `_media`, `_rel`: 存储内容类型、媒体文件、关系和内容类型的信息。
- `_builder`: 当前正在构建的部分（主体、页眉、页脚）的数组。
- `insertPageBreak`, `insertRaw`: 用于插入分页符和原始 XML 内容的方法。
- `mergeBody`: 合并多个文档的主体部分。
- `save`: 保存合并后的文档。

### 构造函数内部逻辑

- 将传入的文件数组 `_files` 转换为 `JSZip` 实例，存储在 `_files` 数组中。
- 初始化各种数组和对象，用于存储文档的不同部分的信息。
- 提供了 `insertPageBreak` 和 `insertRaw` 方法，用于插入分页符和原始 XML 内容。
- 调用 `mergeBody` 方法合并多个文档的主体部分。

### `mergeBody` 方法

- 合并多个文档的内容类型、媒体、关系、编号、样式等信息。
- 遍历每个文档，提取主体部分的 XML 内容，插入到当前对象的 `_body` 数组中。

### `save` 方法

- 选取第一个文件作为合并后的文件。
- 替换该文件的主体部分为当前对象的 `_body` 数组中的内容。
- 生成和回调合并后的文档，可以选择输出为不同类型的文件（例如，zip 文件）。

总体而言，这个库提供了一种在 Node.js 环境中合并多个 Word 文档的方法，通过操作 .docx 文件的结构，处理样式、编号、媒体文件等信息，最终生成一个合并后的文档。

## 获取 Word 文档中的样式

```js
var xmlString = zip.file("word/styles.xml").asText();
```

这句代码使用 JSZip 读取 ZIP 文件中的 "word/styles.xml" 文件的内容，即获取 Word 文档中的样式文件，并将其作为文本返回，以便后续进行处理。

### 所以docx也是zip？

是的，`.docx` 文件实际上是一个基于 ZIP 格式的压缩包。Microsoft Word 将文档的内容、样式、图像等多个文件存储在一个 ZIP 归档中，这种结构使得文档的组织更加灵活，并且更容易进行处理。

`.docx` 文件的内部结构包括多个文件和文件夹，其中包含了文档的各个部分，比如文本、样式、图像、元数据等。这些文件被压缩成一个 ZIP 文件，以减小文件大小并方便传输。

使用 JSZip 或类似的库，你可以方便地读取和处理这个 ZIP 归档中的文件，而不必手动解压整个文件。这对于在代码中进行修改、合并、生成新的文档等操作非常有帮助。

因此，当你处理 `.docx` 文件时，实际上是在处理一个 ZIP 文件，而使用 JSZip 等库则是为了更方便地操作这个 ZIP 文件的内容。

