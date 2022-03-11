# windows10

## 视图操作

1. windows10下使用Win + Tab键可以打开任务视图![image-20220311101744665](https://gitee.com/zqylzcwcxy/picture-bed/raw/master/img/image-20220311101744665.png)
2. 任务视图下方会有较长的时间线，如果不需要的话，可以通过控制面板->系统->多任务处理->关闭时间线![image-20220311095904512](https://gitee.com/zqylzcwcxy/picture-bed/raw/master/img/image-20220311095904512.png)
3. 最上方可以创建虚拟桌面，非常的好用，不管是哪个桌面操作文件，该文件的操作所有桌面都是同步的
4. 所以如果需要打开很多文件，可以通过分不同桌面来分开处理，使桌面更加简洁
5. 可以通过Win + Tab下鼠标点击来创建和切换桌面
6. 也可以使用命令

- 创建新的虚拟桌面：Win + Ctrl + D
- 关闭当前虚拟桌面：Win + Ctrl + F4
- 左右切换虚拟桌面：Win + Ctrl +左   Win + Ctrl +右

:::info

两个虚拟桌面都使用typora的情况下，这时Ctrl+Tab也可以切换虚拟桌面, Ctrl+Tab是typora的应用内窗口切换快捷键，因为typora分别处于两个虚拟桌面，所以Ctrl+Tab的会直接切换虚拟页面，三个及以上的情况下是向左切换，并且可以循环，比windows默认的快捷键好用多了，有点秀

:::

除此之外，还有Alt+Tab可以切换所有打开的应用，按住Alt后按Tab切换

## 快捷打开软件

固定软件至开始栏，windows键+数字即可按顺序快捷打开软件

## cmd命令

```sh
# 盘名+冒号，代表切换到相应盘,如以下,切换至e盘
e:   
# 创建文件夹,等价于mkdir
md 文件夹名 
# 删除文件夹，/s表示删除所有嵌套的文件和子目录
rmdir 文件夹名 /s
# 切换至该文件夹目录，输入文件名开头按tab可以自动补全
cd 文件夹名 		 
# 切换到上一级
cd .. 	
# 创建空文件
cd.>文件名.文件后缀 
# 删除文件
del 文件名.文件后缀 
# vscode打开当前目录
code ./     		 
# 显示当前目录中文件列表
dir 				 
```

## 快捷关闭cmd

ctrl+space+c

## 批量修改文件名后缀

新建bat文件，可将当前文件夹下面所有该后缀名文件改名

示例：

```sh
ren *.txt* *.html*
```

## 关闭”你要允许来自未知发布者的此应用对你的设备进行更改吗？“

添加注册表来指定信任该应用，以cmder为例：

1. windows+r输入regedit打开注册表

2. 在注册表编辑器左侧目录依次展开：HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers

3. 在Layers文件夹处右键单击，选择新建字符串值

   ![image-20220310231624597](https://gitee.com/zqylzcwcxy/picture-bed/raw/master/img/image-20220310231624597.png)

4. 新建的字符串名称为软件exe文件目录，值为~ HIGHDPIAWARE

   ![image-20220310231803458](https://gitee.com/zqylzcwcxy/picture-bed/raw/master/img/image-20220310231803458.png)

## yarn命令出现在此系统上禁止运行脚本

执行策略问题，打开powershell，输入set-executionpolicy remotesigned，设置成Y即可

## windows10右击没有管理员运行

txt文件复制下面内容后修改为reg后缀并运行

```bash
Windows Registry Editor Version 5.00
[HKEY_CLASSES_ROOT\*\shell\runas]
[HKEY_CLASSES_ROOT\*\shell\runas]
@="\u7ba1\u7406\u5458\u53d6\u5f97\u6240\u6709\u6743"
"Icon"="C:\\Windows\\System32\\imageres.dll,-78"
"NoWorkingDirectory"=""
[HKEY_CLASSES_ROOT\*\shell\runas\command]
@="cmd.exe /c takeown /f \"%1\" && icacls \"%1\" /grant administrators:F"
"IsolatedCommand"="cmd.exe /c takeown /f \"%1\" && icacls \"%1\" /grant administrators:F"
[HKEY_CLASSES_ROOT\Directory\shell\runas]
[HKEY_CLASSES_ROOT\Directory\shell\runas]
@="\u7ba1\u7406\u5458\u53d6\u5f97\u6240\u6709\u6743"
"Icon"="C:\\Windows\\System32\\imageres.dll,-78"
"NoWorkingDirectory"=""
[HKEY_CLASSES_ROOT\Directory\shell\runas\command]
@="cmd.exe /c takeown /f \"%1\" /r /d y && icacls \"%1\" /grant administrators:F /t"
"IsolatedCommand"="cmd.exe /c takeown /f \"%1\" /r /d y && icacls \"%1\" /grant administrators:F /t"
[HKEY_CLASSES_ROOT\dllfile\shell]
[HKEY_CLASSES_ROOT\dllfile\shell\runas]
@="\u7ba1\u7406\u5458\u53d6\u5f97\u6240\u6709\u6743"
"HasLUAShield"=""
"NoWorkingDirectory"=""
[HKEY_CLASSES_ROOT\dllfile\shell\runas\command]
@="cmd.exe /c takeown /f \"%1\" && icacls \"%1\" /grant administrators:F"
"IsolatedCommand"="cmd.exe /c takeown /f \"%1\" && icacls \"%1\" /grant administrators:F"
[HKEY_CLASSES_ROOT\Drive\shell\runas]
[HKEY_CLASSES_ROOT\Drive\shell\runas]
@="\u7ba1\u7406\u5458\u53d6\u5f97\u6240\u6709\u6743"
"Icon"="C:\\Windows\\System32\\imageres.dll,-78"
"NoWorkingDirectory"=""
[HKEY_CLASSES_ROOT\Drive\shell\runas\command]
@="cmd.exe /c takeown /f \"%1\" /r /d y && icacls \"%1\" /grant administrators:F /t"
"IsolatedCommand"="cmd.exe /c takeown /f \"%1\" /r /d y && icacls \"%1\" /grant administrators:F /t"
```

