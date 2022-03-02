import getBase from '../../src/vitepress/config/baseConfig'
import path from 'path'
import fs from 'fs'

const nav = [
  {
    text: 'Docs',
    activeMatch: `^/vite-vue-blog/guide/`,
    items: [
      {
        items: [
          { text: 'Guide', link: '/guide/introduction' },
          { text: 'Installtion', link: '/guide/installation' }
        ]
      }
    ]
  }
]
const sidebar = {
  '/studynote/': []
}

// 1.获取笔记文件夹名
let nodesDirName = ''
fs.readdirSync(path.join(__dirname, '../')).forEach((fileName) => {
  if (!['index.md', 'public', '.vitepress'].includes(fileName)) {
    nodesDirName = fileName
  }
})

// 2.获取笔记文件夹下所有文件名
const items = []
fs.readdirSync(path.join(__dirname, '../' + nodesDirName)).forEach(
  (fileName) => {
    if (fileName.slice(-3) == '.md') {
      console.log(nodesDirName + '/' + fileName)
      items.push({
        text: fileName.toLocaleUpperCase(),
        link: `/${nodesDirName}/${fileName}`
      })
    }
    // if (!['index.md', 'public', '.vitepress'].includes(fileName)) {
    //   fs.stat(path.join(__dirname, '../'), (err, stat) => {
    //     if (err) return console.error(err)
    //     console.log(stat.isDirectory())
    //   })
    //   // fs.readdirSync(path.join(__dirname, '../' + fileName)).forEach(
    //   //   (fileName) => {
    //   //     console.log('二级', fileName)
    //   //   }
    //   // )
    // }
  }
)
nav[0].items = items
sidebar['/studynote/'] = [
  {
    text: 'vue',
    items
  }
]

module.exports = (async () => {
  const base = await getBase()
  console.log(sidebar['/studynote/'][0].items)

  return {
    ...base,
    base: '/vite-vue-blog/',
    title: '个人笔记',
    vite: {
      ...base.vite,
      build: {
        minify: false
      },
      resolve: {
        alias: {
          '@vue/theme': path.join(__dirname, '../../src')
        }
      }
    },
    description: 'Vue.js - The Progressive JavaScript Framework',
    themeConfig: {
      logo: '/img/logo-vue.svg',
      socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vue' }],
      nav,
      sidebar
    }
  }
})()
