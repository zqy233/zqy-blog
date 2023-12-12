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

