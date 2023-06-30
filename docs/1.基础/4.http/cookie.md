## cookie存在，但document.cookie获取为空

因为cookie设置为了http-only，不能通过js读取和删除，只能前端请求接口，发现过期后再做处理

> HttpOnly是2016年微软为IE6而新增了这一属性
> HttpOnly是包含在http返回头Set-Cookie里面的一个附加的flag，所以它是后端服务器对cookie设置的一个附加的属性，在生成cookie时使用HttpOnly标志有助于减轻客户端脚本访问受保护cookie的风险（如果浏览器支持则会显示，若不支持则选择传统方式）

也就是说HttpOnly的存在主要是为了防止用户通过前端来盗用cookie而产生的风险，例如XSS攻击就是对cookie进行盗窃，使用这一属性就可以防止客户端（前端）不可访问

## cookie 的作用域

- Domain 指定哪些主机可以接受 Cookie，如果不指定，默认为 origin，**不包含子域名**。如果指定了 Domain，则包含子域名。
- Path 指定主机下的哪些路径可以接受 cookie。（该 url 路径必须存在于请求 url 中）