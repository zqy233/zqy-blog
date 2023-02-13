<template>
  <div class="gitalk-container">
    <div id="gitalk-container"></div>
  </div>
</template>
<script>
import md5 from 'md5'
import Gitalk from 'gitalk'
import 'gitalk/dist/gitalk.css'
export default {
  name: 'git-talk',
  data() {
    return {}
  },
  mounted() {
    const commentConfig = {
      clientID: '20f8cea4f1ef5c3564d9',
      clientSecret: '783ca81914654d8cf6eebd313d2b39ad4e734cb9',
      repo: 'webpack5-learn',
      owner: 'zqy233',
      admin: ['zqy233'],
      id: md5(location.pathname),
      distractionFreeMode: false,
    }
    const gitalk = new Gitalk(commentConfig)
    gitalk.render('gitalk-container')
  },
}
</script>
<style>
.gt-container .gt-header-textarea {
  color: #000;
}
.dark .gt-container .gt-header-textarea {
  background-color: #1a1a1a;
}
.dark .gt-container .gt-header-preview {
  background-color: #1a1a1a;
  color: #fff;
}
.dark .gt-container .gt-header-textarea {
  color: #fff;
}
.dark .gt-container .gt-comment-admin .gt-comment-content {
  background-color: #1a1a1a;
}
.dark .gt-container .gt-comment-body {
  color: #fff !important;
}
</style>
