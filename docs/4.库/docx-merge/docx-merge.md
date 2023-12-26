# docx-merge

是一个 Node.js 库，用于合并多个 Word 文档（只限`.docx`文件，不支持`.doc`文件）

## `.docx` 和 `.doc` 是两种不同的 Microsoft Word 文档格式

`.docx` 和 `.doc` 是两种不同的 Microsoft Word 文档格式，它们在文件结构和存储方式上有显著的区别。

1. **.docx（Office Open XML）**:
   - 结构：`.docx` 文件是一种基于 Office Open XML 标准的文档格式。它实际上是一个 ZIP 归档，其中包含多个 XML 文件和其他资源文件。
   - XML 结构：文本内容、样式、编号、设置等信息以 XML 格式存储在文件中，使其更容易解析和处理。
   - 扩展名：通常用于存储 Microsoft Word 2007及更高版本的文档。
2. **.doc（Binary Word Document）**:
   - 结构：`.doc` 文件是二进制格式的 Word 文档。它采用复杂的二进制格式来存储文本、样式和其他元素。
   - 二进制结构：由于采用二进制格式，`.doc` 文件不如 `.docx` 文件那样容易解析和修改。这也导致了在不同平台上的兼容性问题。
   - 扩展名：通常用于存储 Microsoft Word 97-2003 版本的文档。

由于 Office Open XML 标准的引入，`.docx` 成为了 Microsoft Word 推荐的默认文档格式。这个新的格式更加开放、可扩展，并支持更多的现代特性。

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

- `JSZip` 是一个用于操作 ZIP 文件的库，用于读取和生成 .docx 文件。`.docx` 文件实际上是一个基于 ZIP 格式的压缩包。
- `DOMParser` 和 `XMLSerializer` 是用于解析和序列化 XML 的库，用于处理 Word 文档中的 XML 文件。
- `Style`, `Media`, `RelContentType`, `bulletsNumbering` 是自定义的模块，用于处理样式、媒体文件、关系和内容类型、编号等功能。

## `.docx` 文件实际上是一个基于 ZIP 格式的压缩包

Microsoft Word 将文档的内容、样式、图像等多个文件存储在一个 ZIP 归档中，这种结构使得文档的组织更加灵活，并且更容易进行处理。

`.docx` 文件的内部结构包括多个文件和文件夹，其中包含了文档的各个部分，比如文本、样式、图像、元数据等。这些文件被压缩成一个 ZIP 文件，以减小文件大小并方便传输。

使用 JSZip 或类似的库，你可以方便地读取和处理这个 ZIP 归档中的文件，而不必手动解压整个文件。这对于在代码中进行修改、合并、生成新的文档等操作非常有帮助。

因此，当你处理 `.docx` 文件时，实际上是在处理一个 ZIP 文件，而使用 JSZip 等库则是为了更方便地操作这个 ZIP 文件的内容。
一个典型的 Word 文档是一个 ZIP 归档，其中包含多个文件，每个文件负责存储文档的不同方面。以下是一些常见的 Word 文档文件：

1. **word/document.xml**: 包含文档的主要内容，如段落、文本、表格等。
2. **word/styles.xml**: 包含文档中使用的样式信息，定义了字体、段落格式等。
3. **word/numbering.xml**: 存储文档中的编号和项目符号的定义。
4. **word/settings.xml**: 包含文档的设置，如页边距、纸张大小等。
5. **word/footnotes.xml**: 存储脚注内容。
6. **word/endnotes.xml**: 存储尾注内容。
7. **word/header1.xml, word/header2.xml, ...**: 存储文档的不同页眉的内容。
8. **word/footer1.xml, word/footer2.xml, ...**: 存储文档的不同页脚的内容。
9. **word/media/***: 存储文档中嵌入的媒体文件，如图片。
10. **word/theme/theme1.xml**: 存储文档的主题信息。
11. **[Content_Types].xml**: 包含文档中各种部分的内容类型，影响 MIME 类型。
12. **_rels/.rels**: 存储文档中各部分之间的关系。

这只是一个常见的文件列表，具体的文件结构可能会因文档的具体内容和格式而有所不同。在处理 Word 文档时，通常需要关注这些文件以实现对文档的各个方面的操作。

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
  this._body = [];
  this._header = [];
  this._footer = [];
  this._Basestyle = options.style || "source";
  this._style = [];
  this._numbering = [];
  this._pageBreak =
    typeof options.pageBreak !== "undefined" ? !!options.pageBreak : true;
  this._files = [];
  var self = this;
  (files || []).forEach(function (file) {
    self._files.push(new JSZip(file));
  });
  this._contentTypes = {};

  this._media = {};
  this._rel = {};

  this._builder = this._body;

  this.insertPageBreak = function () {
    var pb =
      '<w:p> \
					<w:r> \
						<w:br w:type="page"/> \
					</w:r> \
				  </w:p>';

    this._builder.push(pb);
  };

  this.insertRaw = function (xml) {
    this._builder.push(xml);
  };

  this.mergeBody = function (files) {
    var self = this;
    this._builder = this._body;

    RelContentType.mergeContentTypes(files, this._contentTypes);
    Media.prepareMediaFiles(files, this._media);
    RelContentType.mergeRelations(files, this._rel);

    bulletsNumbering.prepareNumbering(files);
    bulletsNumbering.mergeNumbering(files, this._numbering);

    Style.prepareStyles(files, this._style);
    Style.mergeStyles(files, this._style);

    files.forEach(function (zip, index) {
      //var zip = new JSZip(file);
      var xml = zip.file("word/document.xml").asText();
      xml = xml.substring(xml.indexOf("<w:body>") + 8);
      xml = xml.substring(0, xml.indexOf("</w:body>"));
      xml = xml.substring(0, xml.lastIndexOf("<w:sectPr"));

      self.insertRaw(xml);
      if (self._pageBreak && index < files.length - 1) self.insertPageBreak();
    });
  };

  this.save = function (type, callback) {
    // 选取第一个文件作为合并后的文件
    var zip = this._files[0];

    var xml = zip.file("word/document.xml").asText();
    var startIndex = xml.indexOf("<w:body>") + 8;
    var endIndex = xml.lastIndexOf("<w:sectPr");
    // 替换下word文档内容
    xml = xml.replace(xml.slice(startIndex, endIndex), this._body.join(""));

    RelContentType.generateContentTypes(zip, this._contentTypes);
    Media.copyMediaFiles(zip, this._media, this._files);
    RelContentType.generateRelations(zip, this._rel);
    bulletsNumbering.generateNumbering(zip, this._numbering);
    Style.generateStyles(zip, this._style);

    zip.file("word/document.xml", xml);

    callback(
      zip.generate({
        type: type,
        compression: "DEFLATE",
        compressionOptions: {
          level: 4,
        },
      })
    );
  };

  if (this._files.length > 0) {
    this.mergeBody(this._files);
  }
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

## `<w:body>`

 在 Word 文档的 XML 结构中，`<w:body>` 是表示文档主体（body）的 XML 标签。这是 Microsoft Word 中使用的 Office Open XML（OOXML）格式的一部分，用于定义文档的结构和内容。

具体而言，`<w:body>` 标签是 Word 文档中表示主体内容的开始标签，包含文档中的大部分实际内容，比如段落、表格、图形等。在 Word 文档的 XML 中，不同的部分（主体、页眉、页脚等）都有相应的标签用于区分和定义。

下面是一个简单的示例，展示了包含一个段落的 Word 文档主体的 XML 结构：

```xml
<w:body>
  <w:p>
    <w:r>
      <w:t>Hello, World!</w:t>
    </w:r>
  </w:p>
</w:body>
```

在这个示例中，`<w:body>` 包含了一个段落 `<w:p>`，而段落中包含一个运行 `<w:r>`，而运行中包含了一个文本节点 `<w:t>`，其中包含实际的文本内容 "Hello, World!"。

这种 XML 结构的使用是为了在文档中描述其层次结构和内容，并为不同的元素提供相应的属性和样式。 Word 使用这种结构来存储文档的信息，而对应的 XML 标签则用于表示不同的 Word 文档元素。

## `<w:styles>`

在 Word 文档中，样式通常是通过定义样式表（style sheet）来实现的。样式表包含了不同元素（如段落、字体、表格等）的样式定义。在 OOXML 中，这些样式信息通常位于 "word/styles.xml" 文件中。

以下是一个简单示例，演示如何在 "word/styles.xml" 文件中为上述示例中的段落 `<w:p>` 编写样式：

```xml
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:style w:type="paragraph" w:styleId="MyParagraphStyle">
    <w:name w:val="My Paragraph Style"/>
    <w:rPr>
      <!-- 定义段落文本的字体和其他格式 -->
      <w:color w:val="000000"/> <!-- 文本颜色，这里为黑色 -->
      <w:sz w:val="24"/> <!-- 字号，这里为24磅 -->
    </w:rPr>
    <!-- 其他样式属性，如缩进、行距等 -->
  </w:style>
</w:styles>
```

在这个示例中：

- `<w:styles>` 是样式表的根元素。
- `<w:style>` 表示一个样式，这里定义了一个段落样式，其 `w:styleId` 为 "MyParagraphStyle"。
- `<w:name>` 用于定义样式的名称。
- `<w:rPr>` 包含运行级别的样式属性，这里定义了文本的颜色和字号。

要应用这个样式，可以将 `<w:p>` 元素的 `w:pStyle` 属性设置为 "MyParagraphStyle"。以下是更新后的示例：

```xml
<w:body xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:p>
    <w:pPr>
      <w:pStyle w:val="MyParagraphStyle"/>
    </w:pPr>
    <w:r>
      <w:t>Hello, World!</w:t>
    </w:r>
  </w:p>
</w:body>
```

这样，段落 `<w:p>` 将应用 "MyParagraphStyle" 样式定义的样式。

## `<w:sectPr>`

在 Word 文档的 OOXML 结构中，`<w:sectPr>` 是 "section properties"（节属性）的缩写，用于定义文档的节（section）属性。节在文档中通常用于控制页面布局、页眉和页脚的内容，以及其他与页面相关的属性。

具体来说，`<w:sectPr>` 元素包含了一系列属性，这些属性描述了文档中某个部分的页面布局和格式。一份 Word 文档可以包含多个节，每个节可以具有不同的页面设置，例如页边距、纸张大小、纸张方向等。

```js
var startIndex = xml.indexOf("<w:body>") + 8;
var endIndex = xml.lastIndexOf("<w:sectPr");
// 替换下word文档内容
xml = xml.replace(xml.slice(startIndex, endIndex), this._body.join(""));
```

截取的范围是从 `<w:body>` 元素开始（包括 `<w:body>`）到最后一个 `<w:sectPr>` 元素之前（不包括 `<w:sectPr>`）。

在这个过程中，通过 `xml.slice(startIndex, endIndex)` 将原始文档中的一部分内容截取出来，然后用 `this._body.join("")` 替换这部分内容，从而将合并后的主体内容替换到文档中。

## 合并样式-导入模块与函数定义

```js
var XMLSerializer = require("xmldom").XMLSerializer;
var DOMParser = require("xmldom").DOMParser;
```

- `XMLSerializer` 用于将 DOM 对象序列化为 XML 字符串。
- `DOMParser` 用于将 XML 字符串解析为 DOM 对象。

```js
var prepareStyles = function (files, style) {
  // 函数的实现...
};
```

接收两个参数：`files` 是包含多个 Word 文档的数组，`style` 是样式信息。

## 合并样式-遍历文档并修改样式

```js
files.forEach(function (zip, index) {
  var xmlString = zip.file("word/styles.xml").asText();
  var xml = new DOMParser().parseFromString(xmlString, "text/xml");
  var nodes = xml.getElementsByTagName("w:style");

  // 遍历样式节点
  for (var node in nodes) {
    if (/^\d+$/.test(node) && nodes[node].getAttribute) {
      var styleId = nodes[node].getAttribute("w:styleId");

      // 在样式标识上添加索引
      nodes[node].setAttribute("w:styleId", styleId + "_" + index);

      // 处理与样式相关的属性，确保唯一性
      var basedonStyle = nodes[node].getElementsByTagName("w:basedOn")[0];
      if (basedonStyle) {
        var basedonStyleId = basedonStyle.getAttribute("w:val");
        basedonStyle.setAttribute("w:val", basedonStyleId + "_" + index);
      }

      var w_next = nodes[node].getElementsByTagName("w:next")[0];
      if (w_next) {
        var w_next_ID = w_next.getAttribute("w:val");
        w_next.setAttribute("w:val", w_next_ID + "_" + index);
      }

      var w_link = nodes[node].getElementsByTagName("w:link")[0];
      if (w_link) {
        var w_link_ID = w_link.getAttribute("w:val");
        w_link.setAttribute("w:val", w_link_ID + "_" + index);
      }

      var numId = nodes[node].getElementsByTagName("w:numId")[0];
      if (numId) {
        var numId_ID = numId.getAttribute("w:val");
        numId.setAttribute("w:val", numId_ID + index);
      }

      // 更新与样式相关的内容
      updateStyleRel_Content(zip, index, styleId);
    }
  }

  // 将更新后的样式信息写回到文档
  var startIndex = xmlString.indexOf("<w:styles ");
  xmlString = xmlString.replace(
    xmlString.slice(startIndex),
    serializer.serializeToString(xml.documentElement)
  );

  zip.file("word/styles.xml", xmlString);
});
```

- 对于每个文档，获取样式信息，并遍历每个样式节点。
- 在样式标识上添加索引以确保唯一性。
- 处理与样式相关的属性，如基于的样式、下一个样式、链接样式等。
- 调用 `updateStyleRel_Content` 函数更新与样式相关的内容。
- 将更新后的样式信息写回到文档。
- **`<w:style>`:**
  - 用于定义一个具体的样式，可以是段落样式、字符样式等。
  - 属性包括 `w:styleId`（样式的唯一标识）、`w:name`（样式的名称）等。
- **`<w:basedOn>`:**
  - 用于指定当前样式基于的其他样式，实现样式继承。
- **`<w:next>`:**
  - 用于指定当前样式的下一个样式。
- **`<w:link>`:**
  - 用于指定当前样式链接到的样式。
- **`<w:numId>`:**
  - 用于处理与编号样式相关的属性，如编号样式标识。

## 合并样式-更新与样式相关的内容

```js
var updateStyleRel_Content = function (zip, fileIndex, styleId) {
  var xmlString = zip.file("word/document.xml").asText();
  var xml = new DOMParser().parseFromString(xmlString, "text/xml");

  // 替换文档内容中与样式相关的标识
  xmlString = xmlString.replace(
    new RegExp('w:val="' + styleId + '"', "g"),
    'w:val="' + styleId + "_" + fileIndex + '"'
  );

  // 将更新后的内容写回到文档
  zip.file("word/document.xml", xmlString);
};
```

该函数用于更新文档内容中与样式相关的标识，确保唯一性。

总体而言，`prepareStyles` 函数的目标是在多个 Word 文档中调整样式，确保在合并文档时不会出现样式冲突。这涉及到修改样式标识、处理与样式相关的属性，以及更新文档内容中的样式标识。

## `<w:latentStyles>`

```xml
  <w:latentStyles w:defLockedState="0" w:defUIPriority="99" w:defSemiHidden="0"
    w:defUnhideWhenUsed="0"
    w:defQFormat="0" w:count="376">
    <w:lsdException w:name="Normal" w:uiPriority="0" w:qFormat="1" />
    <w:lsdException w:name="heading 1" w:uiPriority="9" w:qFormat="1" />
    <w:lsdException w:name="heading 2" w:semiHidden="1" w:uiPriority="9" w:unhideWhenUsed="1"
      w:qFormat="1" />
     
  </w:latentStyles>
```

这是 Word 文档中的 `<w:latentStyles>` 元素，用于定义潜在的样式（latent styles）。潜在样式是指用户创建文档时可能会用到的样式，这些样式通常不直接显示在 Word 界面上，而是在用户应用某个样式时自动应用。

让我们解释 `<w:latentStyles>` 元素的一些属性：

- `w:defLockedState="0"`: 表示默认情况下潜在样式不被锁定。
- `w:defUIPriority="99"`: 表示默认情况下潜在样式的 UI 优先级为 99。
- `w:defSemiHidden="0"`: 表示默认情况下潜在样式不是半隐藏的。
- `w:defUnhideWhenUsed="0"`: 表示默认情况下潜在样式在使用时不自动取消隐藏。
- `w:defQFormat="0"`: 表示默认情况下潜在样式不使用 QFormat。
- `w:count="376"`: 表示潜在样式的数量为 376。

接着， `<w:lsdException>` 元素用于定义特定样式的例外情况。在这里，有三个 `<w:lsdException>` 元素，每个元素都表示一个具体的样式例外情况。

- 第一个 `<w:lsdException>` 元素表示名为 "Normal" 的样式，其 UI 优先级为 0，QFormat 为 1。
- 第二个 `<w:lsdException>` 元素表示名为 "heading 1" 的样式，其 UI 优先级为 9，QFormat 为 1。
- 第三个 `<w:lsdException>` 元素表示名为 "heading 2" 的样式，其半隐藏属性为 1，UI 优先级为 9，使用时自动取消隐藏，QFormat 为 1。

这些元素的目的是为用户提供在创建文档时可以方便地应用的默认样式。在 Word 中，用户可以通过样式面板或样式菜单选择这些样式。

## `w:style`

```xml
 <w:style w:type="paragraph" w:styleId="a7">
    <w:name w:val="List Paragraph" />
    <w:basedOn w:val="a" />
    <w:uiPriority w:val="34" />
    <w:qFormat />
    <w:rsid w:val="001C790F" />
    <w:pPr>
      <w:ind w:firstLineChars="200" w:firstLine="420" />
    </w:pPr>
    <w:rPr>
      <w:rFonts w:asciiTheme="minorHAnsi" w:eastAsiaTheme="minorEastAsia" w:hAnsiTheme="minorHAnsi" />
      <w:sz w:val="21" />
    </w:rPr>
  </w:style>
```

- `<w:style>`: 表示样式的开始标签。
  - `w:type="paragraph"`: 表示这是一个段落样式。
  - `w:styleId="a7"`: 表示样式的唯一标识符为 "a7"。
- `<w:name w:val="List Paragraph" />`: 表示样式的名称为 "List Paragraph"。
- `<w:basedOn w:val="a" />`: 表示这个样式是基于另一个样式 "a" 的，即继承了样式 "a" 的一些属性。
- `<w:uiPriority w:val="34" />`: 表示样式在用户界面中的优先级为 34。
- `<w:qFormat />`: 表示样式使用 QFormat。`<w:qFormat />` 表示样式使用 Quick Format（快速格式化）。快速格式化是 Word 中的一项功能，允许用户通过一键操作应用某个样式，而不必手动调整多个格式设置。当样式使用了 `<w:qFormat />` 属性时，它表示该样式支持快速格式化。用户在 Word 中可以通过样式面板或样式菜单选择应用样式，而使用了 `<w:qFormat />` 的样式可能会更容易在这些快速格式化的选项中找到并应用。这有助于提高用户在创建文档时对样式的使用效率。
- `<w:rsid w:val="001C790F" />`: 表示用于标识此样式的 Revision Save Identifier (RSID)。在 Word 文档中，每个样式和文本都会有一个唯一的 RSID，用于追踪文档的修订。当文档中的内容发生更改时，Word 会为修改的部分分配一个新的 RSID。这有助于 Word 在处理多个用户对同一文档进行编辑时跟踪每个用户的修改。总的来说，RSID 是 Word 中用于标识和跟踪文档修订的一种机制。
- `<w:pPr>`: 包含段落的属性设置。
  - `<w:ind w:firstLineChars="200" w:firstLine="420" />`: 表示段落的缩进设置，其中 `w:firstLineChars` 表示首行缩进字符数为 200，`w:firstLine` 表示首行缩进距离为 420。
- `<w:rPr>`: 包含文本运行（Run）的属性设置。
  - `<w:rFonts w:asciiTheme="minorHAnsi" w:eastAsiaTheme="minorEastAsia" w:hAnsiTheme="minorHAnsi" />`: 表示字体主题设置，指定了不同语言版本的字体主题。
  - `<w:sz w:val="21" />`: 表示字体大小为 21 磅。

这个段落样式的定义包含了很多关于样式外观和排版的信息，包括名称、基于的样式、缩进、字体等。这些样式定义会在创建或编辑文档时被应用到相应的段落上。
