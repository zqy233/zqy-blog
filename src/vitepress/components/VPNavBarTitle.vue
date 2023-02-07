<template>
  <a class="VPNavBarTitle" href="/vite-vue-blog/">
    <h1 class="text" ref="h1">个人笔记</h1>
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

html:not(.dark) .VPNavBarTitle .text {
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
</style>
