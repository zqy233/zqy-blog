```js
 const myvideo = this.$refs.myvideo;
        // 需求：视频默认在结束位置
        myvideo.onloadedmetadata = function () {
            console.log("视频长度为：" + myvideo.duration);
            myvideo.currentTime = myvideo.duration;
        };
        //播放中
        // myvideo.ontimeupdate = function () {
        //     console.log("播放中", myvideo.currentTime, myvideo.duration);
        //     if (
        //         Math.floor(myvideo.currentTime + 0.2) ===
        //         Math.floor(myvideo.duration)
        //     ) {
        //         myvideo.pause();
        //     }
        // };
        myvideo.onended = function () {
            //结束
            console.log("播放结束");
            // myvideo.play();
        };
```

