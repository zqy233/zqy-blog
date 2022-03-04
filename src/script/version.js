/**定义模块和变量**/
const exec = require('child_process').exec //异步子进程
const execSync = require('child_process').execSync //同步子进程
const fs = require('fs') //文件读取模块
const versionPath = 'version.txt' //version路径
const buildPath = 'dist' //打包的路径
const autoPush = true //写入版本信息之后是否自动提交git上
const commit = execSync('git show -s --format=%H').toString().trim() //当前提交的版本号

/**程序开始**/
var versionStr = '' //版本信息字符串

// 如果versionPath存在，将先读取里边的版本信息
if (fs.existsSync(versionPath)) {
  versionStr = fs.readFileSync(versionPath).toString() + '\n'
}

console.log(execSync('git show -s --format=%cd').toString())
// 根据版本信息是已存在commit，进行不同处理
if (versionStr.indexOf(commit) != -1) {
  console.warn('\x1B[33m%s\x1b[0m', 'warming: 当前的git版本数据已经存在了!\n')
} else {
  let name = execSync('git show -s --format=%cn').toString().trim() //姓名
  let email = execSync('git show -s --format=%ce').toString().trim() //邮箱
  let date = new Date(execSync('git show -s --format=%cd').toString()) //日期
  let message = execSync('git show -s --format=%s').toString().trim() //说明
  versionStr = `git:${commit}\n作者:${name}<${email}>\n日期:${
    date.getFullYear() +
    '-' +
    (date.getMonth() + 1) +
    '-' +
    date.getDate() +
    ' ' +
    date.getHours() +
    ':' +
    date.getMinutes()
  }\n说明:${message}\n${new Array(80).join('*')}\n${versionStr}`
  fs.writeFileSync(versionPath, versionStr)
  // 写入版本信息之后，自动将版本信息提交到当前分支的git上
  // if (autoPush) {
  //   execSync(`git commit ${versionPath} -m 自动提交版本信息`)
  //   execSync(
  //     `git push origin ${execSync('git rev-parse --abbrev-ref HEAD')
  //       .toString()
  //       .trim()}`
  //   )
  // }
}

// 将version文件移植到打包文件中
if (fs.existsSync(buildPath)) {
  fs.writeFileSync(`${buildPath}/${versionPath}`, fs.readFileSync(versionPath))
}

// 程序执行结束
console.info(
  '\x1B[32m%s\x1b[0m',
  [
    '██████╗ ███████╗██████╗ ███████╗ █████╗  ██████╗██╗   ██╗',
    '██╔══██╗██╔════╝██╔══██╗██╔════╝██╔══██╗██╔════╝╚██╗ ██╔╝',
    '██████╔╝█████╗  ██████╔╝███████╗███████║██║  ███╗╚████╔╝ ',
    '██╔═══╝ ██╔══╝  ██╔══██╗╚════██║██╔══██║██║   ██║ ╚██╔╝  ',
    '██║     ███████╗██║  ██║███████║██║  ██║╚██████╔╝  ██║   ',
    '╚═╝     ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝   ╚═╝   '
  ].join('\n')
)
