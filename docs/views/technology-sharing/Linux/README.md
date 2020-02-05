---
title: Liunx系统安装node和pm2
date:  2020-02-05
categories:
- Liunx
---

:::tip
内容简介，购买了Linux系统的服务器，需要安装node一系列的工具。几行命令快速安装。
:::

## 初始化

### 1.安装nvm
**nvm是node版本管理工具**
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```
***在安装后，记得退出服务器，然后重新登录进来***

### 2.安装node
```
nvm install 10.15.3
```

### 3.安装pm2
**pm2是一个进程管理工具,可以用它来管理你的node进程,并查看node进程的状态,当然也支持性能监控,进程守护,负载均衡等功能**
```
npm install pm2 -g
```

### 4.安装pm2-logrotate
**pm2-logrotate可以理解为是一个pm2的插件,它扩充了pm2本身没有功能:日志管理**
```
pm2 install pm2-logrotate
```

## 最后

**此时就完成node和pm2的安装，然后就可以使用两个工具加载自己的网站程序。**
