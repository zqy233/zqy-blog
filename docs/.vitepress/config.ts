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
      link: `/notes/${item}/${subitem}.md`
    })
    fs.readdirSync(path.join(fullPath, `${item}/${subitem}`)).forEach(
      (lastitem) => {
        sidebar[`/notes/${item}/`][subindex].items.push({
          text: lastitem,
          link: `/notes/${item}/${subitem}/${lastitem}`
        })
      }
    )
  })
})

// 动态生成nav
// let firstName = ''
// items.forEach((item) => {
//   const text = item.slice(0, item.indexOf('/')) // 文件夹名
//   const link = item.slice(item.indexOf('/'), item.length) // 后续路径
//   if (text == firstName) {
//     nav.forEach((subItem) => {
//       if (subItem.text == firstName) {
//         subItem.items.push({
//           text: link.replace('/', ''),
//           link: '/notes/' + item
//         })
//       }
//     })
//   } else {
//     firstName = text
//     nav.push({
//       text,
//       items: [{ text: link.replace('/', ''), link: '/notes/' + item }]
//     })
//   }
// })

// nav需要下方这样的数据结构
// [
//   {
//     text: '文档',
//     items: [
//       { text: '指引', link: '/guide/introduction' },
//       { text: '教程', link: '/tutorial/' },
//     ]
//   },
// {
//     text: '文档',
//     items: [
//       { text: '指引', link: '/guide/introduction' },
//       { text: '教程', link: '/tutorial/' },
//     ]
//   }
// ]

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
      socialLinks: [{ icon: 'mail', link: 'https://github.com/vuejs/vue' }],
      nav,
      sidebar
    }
  }
})()
