<!--
 * @Author: Qingyu Zhou
 * @Descripttion: 
 * @LastEditTime: 2022-03-03 17:36:44
-->
<template>
  <a class="VPNavBarTitle" href="/vite-vue-blog/">
    ✨<span class="text">学习笔记</span>✨
  </a>
</template>

<style scoped>
.VPNavBarTitle {
  display: flex;
  align-items: center;
  padding-top: 1px;
  height: var(--vt-nav-height);
  transition: opacity 0.25s;
}
@keyframes gradient {
  50% {
    background-position: 100% 0;
  }
}
html:not(.dark) .VPNavBarTitle {
}
html:not(.dark) .VPNavBarTitle .text {
  background: -webkit-linear-gradient(
    315deg,
    #42d392 25%,
    #647eff 66%,
    #13bdce 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 100% 100%;
  background-position: 0% 1000%;
  animation: gradient 1s ease-in-out infinite;
  font-weight: bold;
}

.VPNavBarTitle:hover {
  opacity: 0.6;
}

.logo {
  position: relative;
}

.logo + .text {
  padding-left: 8px;
}

.text {
  font-size: 16px;
  font-weight: 500;
  min-width: 75px;
}
</style>
