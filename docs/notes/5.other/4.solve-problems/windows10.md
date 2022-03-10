# windows10

## 快捷打开软件

固定软件至开始栏，windows键+数字即可按顺序快捷打开软件

## windows cmd指令

```sh
# 盘名：代表切换到相应盘,如以下,切换至e盘
e:   
# 创建文件夹,等价于mkdir
md 文件夹名 
# 切换至该文件夹，输入部分文件名按tab可以自动补全
cd 文件夹名 		 
# 切换到上一级
cd .. 	
# 创建空文件
cd.>文件名.文件后缀 
# vscode打开当前目录
code ./     		 
# 显示当前目录中文件列表
dir 				 
```

## 重复修改文件名后缀

新建bat文件，可将当前文件夹下面所有该后缀名文件改名

示例：

```sh
ren *.txt* *.html*
```

## 关闭”你要允许来自未知发布者的此应用对你的设备进行更改吗？“

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
