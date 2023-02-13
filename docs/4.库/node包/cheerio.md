# 起步

> cheerio 是为服务器特别定制的，快速、灵活的jQuery核心实现

## 介绍

### 特性

- 相似的语法: Cheerio 包括了 jQuery 核心的子集。Cheerio 从jQuery库中去除了所有 DOM不一致性和浏览器尴尬的部分，揭示了它真正优雅的API
- 闪电般的块: Cheerio 工作在一个非常简单，一致的DOM模型之上。解析，操作，呈送都变得难以置信的高效。基础的端到端的基准测试显示Cheerio 大约比JSDOM快八倍(8x)
- 灵活性: Cheerio 封装了兼容的htmlparser。Cheerio 几乎能够解析任何的 HTML 和 XML document

### 安装

```sh
npm install cheerio
```

### 例子

```js
const cheerio = require('cheerio')
const $ = cheerio.load('<h2 class="title">Hello world</h2>')

$('h2.title').text('Hello there!')
$('h2').addClass('welcome')

$.html()
//=> <h2 class="title welcome">Hello there!</h2>
```

### API

Cheerio的选择器用起来几乎和jQuery一样，所以API也很相似

## $(selector,[context],[root])

选择器在 Context 范围内搜索，Context又在Root范围内搜索。selector 和context可以是一个字符串表达式，DOM元素，和DOM元素的数组，或者cheerio对象。root 是通常是HTML 文档字符串

```js
$('.apple', '#fruits').text()
//=> Apple

// 获取class属性
$('ul .pear').attr('class')
//=> pear

$('li[class=orange]').html()
//=> <li class="orange">Orange</li>
```

## attr(name,value)

获得和修改属性。在匹配的元素中只能获得第一元素的属性。如果设置一个属性的值为null，则移除这个属性。你也可以传递一对键值，或者一个函数。

```js
$('ul').attr('id')
//=> fruits

$('.apple').attr('id', 'favorite').html()
//=> <li class="apple" id="favorite">Apple</li>
```

## value([value])

获得和修改input,select,textarea的value。

```js
$('input[type="text"]').val()
=> input_text

$('input[type="text"]').val('test').html()
=> <input type="text" value="test"/>
```

## removeAttr(name)

通过name删除属性

```js
$("h2").removeAttr("class")  // 删除h2标签的class属性
```

## hasClass( className )

检查匹配的元素是否有给出的类名

```js
$('.pear').hasClass('pear')
//=> true

$('apple').hasClass('fruit')
//=> false
```

## addClass(className)

增加class(es)给所有匹配的elements.也可以传函数

```js
$('.pear').addClass('fruit').html()
//=> <li class="pear fruit">Pear</li>

$('.apple').addClass('fruit red').html()
//=> <li class="apple fruit red">Apple</li>
```

## removeClass([className])

从选择的elements里去除一个或多个有空格分开的class。如果className 没有定义，所有的classes将会被去除，也可以传函数。

```js
$('.pear').removeClass('pear').html()
//=> <li class="">Pear</li>

$('.apple').addClass('red').removeClass().html()
//=> <li class="">Apple</li>
```

## is.(selector) , is(function(index))

有任何元素匹配selector就返回true。如果使用判定函数，判定函数在选中的元素中执行，所以this指向当前的元素。

## find(selector)

获得一个在匹配的元素中由选择器滤过的后代。

```js
$('#fruits').find('li').length
//=> 3
复制代码
```

## parent([selector])

获得每个匹配元素的parent,可选择性的通过selector筛选。

```js
$('.orange').parents().length
// => 2
$('.orange').parents('#fruits').length
// => 1
复制代码
```

## closest([selector])

对于每个集合内的元素，通过测试这个元素和DOM层级关系上的祖先元素，获得第一个匹配的元素。

```js
$('.orange').closest()
// => []
$('.orange').closest('.apple')
// => []
$('.orange').closest('li')
// => [<li class="orange">Orange</li>]
$('.orange').closest('#fruits')
// => [<ul id="fruits"> ... </ul>]
复制代码
```

## next()

获得第一个本元素之后的同级元素

```js
复制代码
$('.apple').next().hasClass('orange')
//=> true
复制代码
```

## nextAll()

获得本元素之后的所有同级元素

```js
$('.apple').nextAll()
//=> [<li class="orange">Orange</li>, <li class="pear">Pear</li>]
复制代码
```

## prev()

获得本元素之前的第一个同级元素

```js
$('.orange').prev().hasClass('apple')
//=> true
复制代码
```

## preAll()

获得本元素前的所有同级元素

```js
$('.pear').prevAll()
//=> [<li class="orange">Orange</li>, <li class="apple">Apple</li>]
复制代码
```

## slice(start,[end])

获得选定范围内的元素

```js
$('li').slice(1).eq(0).text()
//=> 'Orange'

$('li').slice(1, 2).length
//=> 1
复制代码
```

## siblings(selector)

获得被选择的同级元素，除去自己??

```js
$('.pear').siblings().length
//=> 2

$('.pear').siblings('.orange').length
//=> 1
复制代码
```

## children(selector)

获被选择元素的子元素

```js
$('#fruits').children().length
//=> 3

$('#fruits').children('.pear').text()
//=> Pear
```

## each(function(index, element))

迭代一个cheerio对象，为每个匹配元素执行一个函数。When the callback is fired, the function is fired in the context of the DOM element, so this refers to the current element, which is equivalent to the function parameter element.要提早跳出循环，返回false。

```js
var fruits = [];

$('li').each(function(i, elem) {
  fruits[i] = $(this).text();
});

fruits.join(', ');
//=> Apple, Orange, Pear
复制代码
```

## map(function(index, element))

迭代一个cheerio对象，为每个匹配元素执行一个函数。Map会返回一个迭代结果的数组。the function is fired in the context of the DOM element, so this refers to the current element, which is equivalent to the function parameter element。

```js
$('li').map(function(i, el) {
  // this === el
  return $(this).attr('class');
}).join(', ');
//=> apple, orange, pear
复制代码
```

## filter(selector),  filter(function(index))

迭代一个cheerio对象，滤出匹配选择器或者是传进去的函数的元素。如果使用函数方法，这个函数在被选择的元素中执行，所以this指向的手势当前元素。

```js
// Selector
$('li').filter('.orange').attr('class');
//=> orange

// Function
$('li').filter(function(i, el) {
  // this === el
  return $(this).attr('class') === 'orange';
}).attr('class')
//=> orange
复制代码
```

## first()

会选择chreeio对象的第一个元素

```js
$('#fruits').children().first().text()
//=> Apple
复制代码
```

## last()

会选择chreeio对象的最后一个元素

```js
$('#fruits').children().last().text()
//=> Pear
复制代码
```

## eq(i)

通过索引筛选匹配的元素。使用.eq(-i)就从最后一个元素向前数。

```js
$('li').eq(0).text()
//=> Apple

$('li').eq(-1).text()
//=> Pear
```

## append(content,[content…])

在每个元素最后插入一个子元素

```js
$('ul').append('<li class="plum">Plum</li>')
$.html()
//=>  <ul id="fruits">
//      <li class="apple">Apple</li>
//      <li class="orange">Orange</li>
//      <li class="pear">Pear</li>
//      <li class="plum">Plum</li>
//    </ul>
复制代码
```

## prepend(content,[content,…])

在每个元素最前插入一个子元素

```js
$('ul').prepend('<li class="plum">Plum</li>')
$.html()
//=>  <ul id="fruits">
//      <li class="plum">Plum</li>
//      <li class="apple">Apple</li>
//      <li class="orange">Orange</li>
//      <li class="pear">Pear</li>
//    </ul>
复制代码
```

## after(content,[content,…])

在每个匹配元素之后插入一个元素

```js
$('.apple').after('<li class="plum">Plum</li>')
$.html()
//=>  <ul id="fruits">
//      <li class="apple">Apple</li>
//      <li class="plum">Plum</li>
//      <li class="orange">Orange</li>
//      <li class="pear">Pear</li>
//    </ul>
复制代码
```

## before(content,[content,…])

在每个匹配的元素之前插入一个元素

```js
$('.apple').before('<li class="plum">Plum</li>')
$.html()
//=>  <ul id="fruits">
//      <li class="plum">Plum</li>
//      <li class="apple">Apple</li>
//      <li class="orange">Orange</li>
//      <li class="pear">Pear</li>
//    </ul>
复制代码
```

## remove( [selector] )

从DOM中去除匹配的元素和它们的子元素。选择器用来筛选要删除的元素。

```js
$('.pear').remove()
$.html()
//=>  <ul id="fruits">
//      <li class="apple">Apple</li>
//      <li class="orange">Orange</li>
//    </ul>
复制代码
```

## replaceWith( content )

替换匹配的的元素

```js
var plum = $('<li class="plum">Plum</li>')
$('.pear').replaceWith(plum)
$.html()
//=> <ul id="fruits">
//     <li class="apple">Apple</li>
//     <li class="orange">Orange</li>
//     <li class="plum">Plum</li>
//   </ul>
复制代码
```

## empty()

清空一个元素，移除所有的子元素

```js
$('ul').empty()
$.html()
//=>  <ul id="fruits"></ul>
复制代码
```

## html( [htmlString] )

获得元素的HTML字符串。如果htmlString有内容的话，将会替代原来的HTML。

```js
$('.orange').html()
//=> Orange

$('#fruits').html('<li class="mango">Mango</li>').html()
//=> <li class="mango">Mango</li>
复制代码
```

## text( [textString] )

获得元素的text内容，包括子元素。如果textString被指定的话，每个元素的text内容都会被替换。

```js
$('.orange').text()
//=> Orange

$('ul').text()
//=>  Apple
//    Orange
//    Pear
```

## toArray()

取得所有的在DOM元素，转化为数组。

```js
$('li').toArray()
//=> [ {...}, {...}, {...} ]
```

## clone()

克隆cheerio对象

```js
const moreFruit = $('#fruits').clone()
```

## $.root

有时候你想找到最上层的root元素,那么$.root()就能获得:

```js
$.root().append('<ul id="vegetables"></ul>').html();
//=> <ul id="fruits">...</ul><ul id="vegetables"></ul>
```

## $.contains( container, contained )

查看contained元素是否是container元素的子元素

## $.parseHTML( data [, context ] [, keepScripts ] )

将字符串解析为DOM节点数组。context参数对chreeio没有意义，但是用来维护APi的兼容性