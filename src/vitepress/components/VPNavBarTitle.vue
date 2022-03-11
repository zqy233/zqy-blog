<template>
  <a class="VPNavBarTitle" href="/vite-vue-blog/">
    <h1 class="text" ref="h1">
      个人笔记
      <!-- <span class="text-typing" v-for="item in text" :key="item">
        {{ item }}
      </span> -->
    </h1>
  </a>
</template>
<script lang="ts" setup>
// import { nextTick, ref } from 'vue'
// const textArr = ['长风破浪会有时', '直挂云帆济沧海']
// let text = ref([''])

// // 初始化h1中所有字符为span
// const h1 = ref<HTMLElement | null>(null)
// function show(textArr: string[], i = 0) {
//   if (i > textArr.length - 1) i = 0 // 开始重新循环
//   text.value = textArr[i].split('')
//   nextTick(() => {
//     // 设置不同的延迟数来动态显示字
//     let delay = 0.5
//     const spans = document.querySelectorAll(
//       '.text-typing'
//     ) as NodeListOf<HTMLSpanElement>
//     spans.forEach((span) => {
//       span.classList.add('showtext')
//       delay += 0.3
//       span.style.setProperty('--delay', `${delay}s`)
//     })

//     let delayback = delay / 1.5
//     setTimeout(() => {
//       const spans = document.querySelectorAll(
//         '.text-typing'
//       ) as NodeListOf<HTMLSpanElement>
//       spans.forEach((span, index) => {
//         span.classList.remove('showtext')
//         span.style.width = '2ch'
//         delayback -= delayback / spans.length
//         span.classList.add('hidetext')
//         span.style.setProperty('--delayback', `${delayback}s`)
//         if (index == 0) {
//           i++
//           span.addEventListener('animationend', () => {
//             show(textArr, i)
//           })
//         }
//       })
//     }, delay * 1000)
//   })
// }
// show(textArr)
</script>
<style scoped>
.VPNavBarTitle {
  display: flex;
  align-items: center;
  padding-top: 1px;
  height: var(--vt-nav-height);
  transition: opacity 0.25s;
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
  background-size: 30% 100%;
  background-position: 100% 100%;
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
/* .VPNavBarTitle .text {
  font-family: monospace;
  position: relative;
} */
/* .VPNavBarTitle .text::after {
  content: '';
  display: inline-block;
  position: absolute;
  width: 1px;
  height: 20px;
  background-color: #fff;
  border-radius: 2px;
  top: 0;
  right: -5px;
  animation: 1s cursor steps(2, jump-none) infinite;
} */
/* .VPNavBarTitle .text span {
  --delay: 0s;
  display: inline-block;
  width: 0ch;
  overflow: hidden;
} */

/* @keyframes cursor {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
} */

/* .text .showtext {
  animation: 0s showtext forwards;
  animation-delay: var(--delay);
}
.text .hidetext {
  animation: 0s hidetext forwards;
  animation-delay: var(--delayback);
} */

/* @keyframes showtext {
  from {
    width: 0ch;
  }
  to {
    width: 2ch;
  }
}

@keyframes hidetext {
  from {
    width: 2ch;
  }
  to {
    width: 0ch;
  }
} */
</style>
