# git

## refusing to merge unrelated histories

```bash
git pull origin master --allow-unrelated-histories
```

## The requested URL returned error: 403

控制面板>用户账户>凭据管理器下更改账户名和密码，确保和提交代码的仓库一致

## Failed to connect to 127.0.0.1 port 1181 after 2045 ms: Connection refused

一般是由于设置了代理所致

```bash
git config --global --unset http.proxy
```

并且需要检查windows是否开启代理，开启了则关闭

