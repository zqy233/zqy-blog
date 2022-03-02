import getBase from '../../src/vitepress/config/baseConfig'
import path from 'path'
import fs from 'fs'

const nav = []
const sidebar = {}

// 获取文件夹下所有文件名
const fullPath = path.join(__dirname, '../notes')
const items = []
findAllMarkDown(fullPath)
function findAllMarkDown(defaultPath) {
  fs.readdirSync(defaultPath).forEach((fileName) => {
    const dirPath = path.join(defaultPath, fileName)
    const stat = fs.statSync(dirPath)
    // 是文件夹，则递归
    if (stat.isDirectory() === true) {
      findAllMarkDown(dirPath)
    }
    // 是文件, 判断是否是markdown文件，生成注册信息
    if (stat.isFile() === true && fileName.slice(-3) == '.md') {
      items.push(
        dirPath.replace(fullPath, '').replace(/.md/g, '').replace(/\\/g, '/')
      )
    }
  })
}
let ac = ''
items.forEach((item) => {
  const name = item.replace('/', '')
  const text = name.slice(0, name.indexOf('/'))
  const link = name.slice(name.indexOf('/'), name.length)
  if (text == ac) {
    nav.forEach((subItem) => {
      if (subItem.text == ac) {
        subItem.items.push({
          text: link.replace('/', ''),
          link: '/notes' + item
        })
      }
    })
  } else {
    ac = text
    nav.push({
      text,
      items: [{ text: link.replace('/', ''), link: '/notes/' + name }]
    })
  }
})

// 设置菜单栏与左侧列表
sidebar['/studynote/'] = [
  {
    text: 'vue',
    items: []
  }
]

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
      }
    },
    themeConfig: {
      logo: '/img/logo-vue.svg',
      socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vue' }],
      nav,
      sidebar
    }
  }
})()
