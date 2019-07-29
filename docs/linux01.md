## 三种网络模式

net模式：xshell倾向于连接独立的ip，而net是网络共享模式，和主机ip捆绑

host-only模式：虚拟机和主机构建了局域网，但是外界电脑无法连接到虚拟机的ip

桥接模式

---

## 一些基本指令

```
tree -L 2
ls -a 
ls -r
ls -ar
touch day{1..2}{a..d}.txt
mkdir -p a/b/c/d	//支持递归构建
cp 1.txt ./C/c
cp -r a c	//复制目录
rm -i 1.txt
//?匹配任意单个字符，*匹配任意多个字符
```

查看文件内容

```shell
cat 1.txt
cat > 1.txt
cat >> 1.txt //追加
more 1.txt
less 1.txt //空格一页，回车一行，可上下移动
head 1.txt //默认前十行
head -20 1.txt
tail 1.txt
```

链接/快捷方式  软链接和硬链接

```shell
ln -s 1.txt ooo
ln 1.txt ppp
stat 1.txt//查看文件的状态
//ln是硬链接 硬链接添加，硬连接数加一，删除减一不影响访问
//软链接删除源文件则无法访问
```

```shell
du 1.txt -h
df -h
which cp
echo $path	//查看环境变量
```

```
who am i
chmod +x 1.txt
chmod -x 1.txt
/*-文件
  d目录	r	w	x		u	g		o
每三个一组，读、写、执行，对用户，对组，对其它用户
*/
chmod ug+x 1.txt
umask 0002（缺省值）
```

0 没有权限

1 执行权限

2 写权限

4 读权限 

```shell
sudo chown weizelin 1.txt//切换主用户
sudo chgrp weizelin 2.txt//切换组用户
sudo adduser ziwei
su ziwei
deluser ziwei
userdel -r ziwei
修改root密码 sudo passwd root
sudo visudo
```

```shell
find ~/nh/ -name 1.txt
find ~/nh/ -size 10k
find ~/nh/ -size -10M
find ~/nh/ -size +10M
find ~/nh/ -size -10M -size +10k

grep -r "insert" ~/nh/
```

```shell
who //查看当前登陆进程
ps -a  //查看所有进程
ps -u
ps -x
ps -e
```


--------------------- 
