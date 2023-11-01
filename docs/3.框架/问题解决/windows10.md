# windows10

## 视图操作

1. windows10下使用Win + Tab键可以打开任务视图，再次Win + Tab键可以关闭
2. 任务视图下方会有较长的时间线，如果不需要的话，可以通过控制面板->系统->多任务处理->关闭时间线
2. Alt+Tab可以切换所有打开的应用，按住Alt后按Tab切换
3. 最上方可以创建虚拟桌面，非常的好用，不管是哪个桌面操作文件，该文件的操作所有桌面都是同步的
4. 所以如果需要打开很多文件，可以通过分不同桌面来分开处理，使桌面更加简洁
5. 可以通过Win + Tab下鼠标点击来创建和切换桌面
6. 也可以使用命令

- 创建新的虚拟桌面：Win + Ctrl + D
- 关闭当前虚拟桌面：Win + Ctrl + F4
- 左右切换虚拟桌面：Win + Ctrl +左   Win + Ctrl +右

:::tip

两个虚拟桌面都打开typora的情况下，这时在typora界面Ctrl+Tab也可以切换虚拟桌面, Ctrl+Tab是typora的应用内窗口切换快捷键，因为typora分别处于两个虚拟桌面，所以Ctrl+Tab的会直接切换虚拟页面，三个及以上的情况下是向左切换，并且可以循环，有点秀

:::

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
# 创建空文件，注意空格
cd . > 文件名.文件后缀 
# 删除文件
del 文件名.文件后缀 
# vscode打开当前目录
code ./     		 
# 显示当前目录中文件列表
dir 				 
```

## 快捷关闭cmd

```sh
ctrl+space+c
```

## 快捷打开软件

固定软件快捷方式至开始栏，windows键+数字即可按顺序快捷打开相应软件

## 批量修改文件名后缀

新建bat文件，可将当前文件夹下面，所有该后缀名文件改名，点击后即可

示例：

```sh
ren *.html *.jsp
```

## 关闭”你要允许来自未知发布者的此应用对你的设备进行更改吗？“

添加注册表来指定信任该应用，以cmder为例：

1. `windows+r`输入`regedit`打开注册表

2. 在注册表编辑器左侧目录依次展开：HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers

3. 在Layers文件夹处右键单击，选择新建字符串值

4. 新建的字符串名称为软件exe文件目录，值为~ HIGHDPIAWARE


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

## vim

```sh
# 删除光标所在文字
dl
# 保存
:wq
```

## 删除文件夹遇到需要来自某个用户的权限才能对此文件进行更改

### 方法一

选中文件夹右击选择属性->安全->添加->高级->立即查找->搜索结果中找到自己账户->双击->点击确定->上方选则自己账户，设置权限为完全控制->点击应用

这时再删除就没问题了

### 方法二

管理员身份运行cmd，cd到文件夹目录，rmdir /s  文件夹名，是否确认(Y/N)?→y

## 解决右键没有vscode打开选项的问题

1. 新建文本文件夹

2. 输入以下文本

```sh
Windows Registry Editor Version 5.00

    [HKEY_CLASSES_ROOT\*\shell\VSCode]
    @="Open with Code"
    "Icon"="D:\\Microsoft VS Code\\Code.exe"

    [HKEY_CLASSES_ROOT\*\shell\VSCode\command]
    @="\"D:\\Microsoft VS Code\\Code.exe\" \"%1\""

    Windows Registry Editor Version 5.00

    [HKEY_CLASSES_ROOT\Directory\shell\VSCode]
    @="Open with Code"
    "Icon"="D:\\Microsoft VS Code\\Code.exe"

    [HKEY_CLASSES_ROOT\Directory\shell\VSCode\command]
    @="\"D:\\Microsoft VS Code\\Code.exe\" \"%V\""

    Windows Registry Editor Version 5.00

    [HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode]
    @="Open with Code"
    "Icon"="D:\\Microsoft VS Code\\Code.exe"

    [HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode\command]
    @="\"D:\\Microsoft VS Code\\Code.exe\" \"%V\""  
```

3. 将所有`D:\Microsoft VS Code\Code.exe`替换成你vscode所在的路径位置，可以右键vscode-属性-复制路径。
4. 特别注意 你所复制的路径： `D:\Microsoft VS Code\Code.exe\` 要注意反斜杠的转义，即前两个`\`变成`\\`，即如下： `D:\\Microsoft VS Code\\Code.exe\`
5. 将文本文件重命名为`.reg`
6. 双击打开`.reg`文件，选择 是

## 杀死指定进程

1.打开cmd命令窗口，输入命令：netstat -ano | findstr 8088 (端口号自己改)，根据端口号查找对应的PID。结果如下：
发现8088 端口被PID（进程号）为2188的进程占用。
2.根据PID找进程名称，输入命令：tasklist | findstr 2181，发现是占用8088端口的进程为：javaw.exe。
3.根据PID 结束对应进程。输入命令 taskkill -PID 2188 -F，强制关闭PID为2188的进程。
