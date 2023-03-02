import fs from 'fs'
import path from 'path'
const mdFilePath = path.join(__dirname, '../docs/')
// 排除文件
const excludeFile = ['.vitepress', 'public', 'index.md', 'vite.config.ts', 'imgs']

export function getSidebar(sidebar = {}) {
  fs.readdirSync(mdFilePath).forEach(dirName => {
    if (!excludeFile.includes(dirName)) {
      sidebar[`/${dirName}/`] = []
      // 第二级为左侧菜单栏标题
      fs.readdirSync(path.join(mdFilePath, dirName)).forEach((secondDirname, secondDirIndex) => {
        sidebar[`/${dirName}/`].push({
          text: secondDirname.replace(/\d*\./, ''),
          collapsed: false,
          items: [],
        })
        // 第三级为左侧菜单栏列表
        fs.readdirSync(path.join(mdFilePath, `${dirName}/${secondDirname}`)).forEach(mdName => {
          sidebar[`/${dirName}/`][secondDirIndex].items.push({
            text: mdName.replace('.md', '').replace(/\d*\./, ''),
            link: `/${dirName}/${secondDirname}/${mdName}`.replace('.md', ''),
          })
        })
      })
    }
  })
  return sidebar
}

export function getNav(nav = {}) {
  // 第一级为顶部菜单栏标题
  fs.readdirSync(mdFilePath).forEach(dirName => {
    if (!excludeFile.includes(dirName)) {
      const text = dirName.replace(/\d*\./, '')
      nav[text] = {
        text,
        items: [],
      }
      // 第二级为标题下列表
      fs.readdirSync(path.join(mdFilePath, dirName)).forEach(secondDirname => {
        nav[text].items.push({
          text: secondDirname.replace(/\d*\./, ''),
          link: `/${dirName}/${secondDirname}/${
            fs.readdirSync(path.join(mdFilePath, dirName + '/' + secondDirname))[0]
          }`,
          activeMatch: `/${dirName}/${secondDirname}/`,
        })
      })
    }
  })
  return Object.values(nav)
}
