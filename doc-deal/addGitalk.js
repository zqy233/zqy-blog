const fs = require('fs')
const findMarkdown = require('./findMarkdown')
const rootDir = './docs'

findMarkdown(rootDir, writeComponents)

function writeComponents(dir) {
  console.log(dir)
  fs.appendFile(dir, `\n \n <git-talk/> \n `, err => {
    if (err) throw err
    console.log(`add components to ${dir}`)
  })
}
