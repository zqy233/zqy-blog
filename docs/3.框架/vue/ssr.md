## ssr 服务端渲染，主要解决2个问题

- 更好的SEO
  - SPA页面的内容是Ajax获取，而搜索引擎爬取工具并不会等待Ajax异步完成后再进行爬取页面内容，所以在SPA页面是抓取不到页面通过Ajax获取到的内容，爬虫获取的html，是一个没有数据的空壳子。
  - 而SSR，是服务端直接将数据处理好，再拼接组装好，返回一个已经渲染好的页面（数据已经包含在页面中），所以爬虫可以爬取渲染好的页面。
- 首屏渲染更快
  - SPA页面，需要等所有的Vue编译后的js文件全部下载完成之后，才开始进行页面的渲染，文件下载需要一定的时间，所以首屏渲染需要一定的时间。
  - SSR直接有服务端渲染好页面直接返回显示，不需要等待下载js文件后再去渲染，所以SSR能解决SPA页面首屏渲染时间太长的问题。