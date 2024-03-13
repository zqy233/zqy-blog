# git多仓库合并解决方案

保留git commit

## 参考文章

> https://juejin.cn/post/7229251516242346043
>
> https://juejin.cn/post/7298927417317392393?searchId=202402291042205A03987DB7837ED522E7
>
> https://zhuanlan.zhihu.com/p/348898271

## 方案一-使用 subtree 将子仓库的提交合并到主仓库（推荐）

> https://zhuanlan.zhihu.com/p/680690149
>
> https://juejin.cn/post/7286035963519254584

添加子仓库为主仓库的 subtree：

```sh
git remote add -f <subtree-remote-name> <url-to-subtree-repo>
git subtree add --prefix=<subtree-prefix> <subtree-remote-name> <subtree-branch> 
```

其中：

- `<subtree-remote-name>` 是子仓库的远程名称。
- `<url-to-subtree-repo>` 是子仓库的 URL。
- `<subtree-prefix>` 是子仓库将要存在于主仓库中的目录。
- `<subtree-branch>` 是子仓库的分支。

或者更简单

```sh
git subtree add --prefix=<subtree-prefix> <url-to-subtree-repo> <subtree-branch> 
```

--squash选项用于将子树的历史压缩成一个提交

```sh
git subtree add --prefix=<subtree-prefix> <url-to-subtree-repo> <subtree-branch> --squash
```

### 示例

有两个子仓库home和platform的new分支需要拉到主仓库packages文件夹下，在主仓库中运行这两个命令，将两个子仓库拉取到packages文件夹下，并各自取名home、platform

```sh
git remote add -f a http://192.168.1.250:3000/team_one/home.git
git subtree add --prefix=packages/home a new
git remote add -f b http://192.168.1.250:3000/team_one/platform.git
git subtree add --prefix=packages/platform b new
```

更简单的用法

```sh
git subtree add --prefix=packages/home http://192.168.1.250:3000/team_one/home.git new
git subtree add --prefix=packages/platform http://192.168.1.250:3000/team_one/platform.git new
```

## 方案二-合并本地两个不同的 Repo 仓库 

> https://www.morfans.cn/archives/3373

1.新建一个空仓库，设置新的remote，-f表示fetch，拉取代码

```sh
git remote add -f merge_remote 
```

2.创建一个分支 `merge_branch`

- `git checkout -b merge_branch`: 这个部分表示创建一个新的分支，并立即切换到这个新创建的分支上。`-b` 选项告诉 Git 在创建分支时切换到它，而 `merge_branch` 是新分支的名称。
- `merge_remote/master`: 这个部分是告诉 Git 从名为 `merge_remote` 的远程仓库的 `master` 分支创建新的分支。这意味着新创建的分支将追踪名为 `merge_remote` 的远程仓库的 `master` 分支。

```sh
git checkout -b merge_branch merge_branch/master
```

4.然后就可以合并了，先切换到 主分支（master)，然后把 merge 分支合并到 master 分支，使用 git merge 命令，配上允许不相关历史参数来合并

```sh
git checkout master
git merge --allow-unrelated-histories merge
```

5.把合并完的内容移到到单独的文件夹下，然后继续上述操作

## git remote -v中origin的意思

在 Git 中，`origin` 是默认的远程仓库的名称。当你克隆一个远程仓库时，Git 会自动为这个远程仓库分配一个名称，默认情况下通常是 `origin`。

在你提供的命令输出中，`git remote -v` 显示了当前 Git 仓库配置的远程仓库信息。在这里，`origin` 是远程仓库的名称，而 `git@github.com:MorFans/China-scholarship-interview-answer.git` 是远程仓库的 URL。这个 URL 是你当前仓库的 `fetch` 和 `push` 操作的目标。

所以，`origin` 在这里表示的是你的远程仓库的名称，它是一个方便的别名，使得你可以用更短的名称来引用远程仓库的 URL。通常情况下，`origin` 是默认的远程仓库名称，但你也可以根据需要为其他远程仓库分配不同的名称。

## 使用git submodule

git submodule的概念是：将一个仓库作为一个子模块添加到另一个仓库中，作为一个特殊的文件类型，只记录子仓库的提交哈希值。其优点是：可以在父仓库中修改子仓库的代码，可以在子仓库中单独查看子仓库的修改记录，相当于在一个单独的仓库内，对外层父仓库不可见。

缺点是：需要额外的步骤来初始化和更新子模块，产生.gitmodules文件记录子模块的信息，删除子模块步骤繁琐。

git submodule的原理是：使用git clone命令将子仓库的地址添加到父仓库的.git/modules目录中，使用git update-index命令将子仓库的提交哈希值添加到父仓库的索引中，作为一个特殊的文件类型。