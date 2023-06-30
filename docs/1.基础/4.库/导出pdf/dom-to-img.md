##    domtoimage

> html2tocanvas的取代方案，html转图片，搭配jspdf导出pdf

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      http-equiv="X-UA-Compatible"
      content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js"
      integrity="sha512-01CJ9/g7e8cUmY0DFTMcUw/ikS799FHiOA0eyHsUWfOetgbx/t6oV4otQ5zXKQyIrQGTHSmRVPIgrgLcZi/WMA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"></script>
    <title>Document</title>
  </head>
  <style>
    * {
      margin: 0;
      padding: 0;
    }
    body {
      background-image: url('./g1.jpg');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      height: 100vh;
    }
    h1 {
      background-color: skyblue;
    }
  </style>
  <body>
    <h1 style="h1">你好世界</h1>
    <p>11111111111</p>
    <p>22222222222</p>
    <p>33333333333</p>
    <button onclick="downloadPDf()">下载pdf</button>
  </body>
  <script>
    const jsPDF = jspdf.jsPDF
    const downloadPDf = () => {
      domtoimage
        .toPng(document.body)
        .then(function (dataUrl) {
          var img = new Image()
          img.src = dataUrl
          pdf = new jsPDF('', 'pt', 'a4')
          pdf.addImage(img, 0, 0, document.body.offsetWidth, document.body.offsetHeight)
          pdf.save('test.pdf')
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error)
        })
    }
  </script>
</html>

```

## html2canvas

注意，html存在图片资源，容易遇到跨域问题，canvas使用外部图片资源，浏览器会进行跨域校验，图片放至服务器端保存同源可解决该问题

```js
const jsPDF = jspdf.jsPDF
    const downloadPDf = () => {
      html2canvas(document.body).then(function (canvas) {
        let img = canvas.toDataURL('image/jpeg', 1.0)
        pdf = new jsPDF('', 'pt', 'a4')
        pdf.addImage(img, 0, 0, document.body.offsetWidth, document.body.offsetHeight)
        pdf.save('test.pdf')
      })
    }
```

