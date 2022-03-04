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
    // console.log(stat) stat的mtime为修改文件时间,后续可以去实现最后编辑时间
    // 是文件夹，则递归
    if (stat.isDirectory() === true) {
      findAllMarkDown(dirPath)
    }
    // 是文件, 判断是否是markdown文件，存储路径信息
    if (stat.isFile() === true && fileName.slice(-3) == '.md') {
      items.push(
        dirPath.replace(fullPath, '').replace(/.md/g, '').replace(/\\/g, '/')
      )
    }
  })
}

// 自动生成页面信息
let firstName = ''
items.forEach((item) => {
  const name = item.replace('/', '')
  const text = name.slice(0, name.indexOf('/'))
  const link = name.slice(name.indexOf('/'), name.length)
  if (text == firstName) {
    nav.forEach((subItem) => {
      if (subItem.text == firstName) {
        subItem.items.push({
          text: link.replace('/', ''),
          link: '/notes' + item
        })
      }
    })
  } else {
    firstName = text
    nav.push({
      text,
      items: [{ text: link.replace('/', ''), link: '/notes/' + name }]
    })
  }
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
      socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vue' }],
      nav,
      sidebar
    }
  }
})()
