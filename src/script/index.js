#! /usr/bin/env node
const shell = require('shelljs') // 脚本执行
shell.exec('git add .')
shell.exec("git commit -m ':memo:撰写文档'")
shell.exec('git push')
