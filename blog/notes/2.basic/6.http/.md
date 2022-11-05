## WebRTC和WebSocket有什么关系和区别？

这两种技术本质上就是半毛钱关系都没有，除了它们都可以在 web 中用之外

websocket 本质上就是借助于 http 建立一个 tcp 的连接，然后在这个 tcp 连接中传 websocket 这种特定协议格式的二进制分帧数据。简单点说，websocket 就是封装了 tcp 来给 web 的 JavaScript 用

webrtc 则主要是给 rtc 封装了个 web 的 JavaScript 接口。底层 webrtc 的库需要完成全部 rtc 相关的逻辑，包括 p2p 连接，音视频的，采集，处理，编码，解码，传输，拥塞控制等等等一大堆东西。另外，传输层协议，webrtc 主要在用 udp，而不是websocket 的 tcp