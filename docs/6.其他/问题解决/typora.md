# typora

## 关闭更新

按`Windows+R`打开运行窗口，输入`regedit`，点确定，打开注册表，依次展开`计算机\HKEY_CURRENT_USER\Software\Typora`，然后在`Typora`上右键，点`权限`，选中`Administrtors`，把权限全部设置为`拒绝`

## 添加到右键菜单中打开文件夹

在桌面新建temp.reg文件

```sh
Windows Registry Editor Version 5.00
 
[HKEY_CLASSES_ROOT\Folder\shell\Typora]
"icon"="D:\\Program Files\\Typora\\typora.exe"
@="Open With Typora"
 
[HKEY_CLASSES_ROOT\Folder\shell\Typora\command]
@="\"D:\\Program Files\\Typora\\typora.exe\" \"%1"
```

