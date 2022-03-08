import getBase from '../../src/vitepress/config/baseConfig'
import path from 'path'
import fs from 'fs'

let nav = [] // 顶部菜单栏
let sidebar = {} // 左侧菜单栏

// 动态生成sidebar
const fullPath = path.join(__dirname, '../notes')
fs.readdirSync(fullPath).forEach((item, index) => {
  sidebar[`/notes/${item}/`] = []
  nav.push({
    text: item,
    items: []
  })
  fs.readdirSync(path.join(fullPath, item)).forEach((subitem, subindex) => {
    sidebar[`/notes/${item}/`].push({
      text: subitem,
      items: []
    })
    nav[index].items.push({
      text: subitem,
      link: `/notes/${item}/${subitem}/${
        fs.readdirSync(path.join(fullPath, item + '/' + subitem))[0]
      }`
    })

    fs.readdirSync(path.join(fullPath, `${item}/${subitem}`)).forEach(
      (lastitem) => {
        sidebar[`/notes/${item}/`][subindex].items.push({
          text: lastitem.replace('.md', ''),
          link: `/notes/${item}/${subitem}/${lastitem}`
        })
      }
    )
  })
})

module.exports = (async () => {
  const base = await getBase()
  return {
    ...base,
    base: '/vite-vue-blog/',
    title: '个人笔记',
    description: '个人笔记',
    vite: {
      ...base.vite,
      build: {
        minify: false
      },
      resolve: {
        alias: {
          '@vue/theme': path.join(__dirname, '../../src')
        }
      },
      server: {
        port: 4000
      }
    },
    themeConfig: {
      logo: '/img/logo-vue.svg',
      socialLinks: [
        { icon: 'gitee', link: 'https://gitee.com/zqylzcwcxy/vite-vue-blog' }
      ],
      nav,
      sidebar
    }
  }
})()
