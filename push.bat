#! /bin/bash
time=$(date "+%Y-%m-%d %H:%M:%S")
git add .
git commit -m ":memo:撰写文档 $time"
git push