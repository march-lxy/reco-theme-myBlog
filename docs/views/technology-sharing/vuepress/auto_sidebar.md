---
title: 自动生成sidebar
date:  2020-02-01
categories:
- vuepress
tags:
- sidebar
---

## 介绍
### 开篇废话
当配置sidebar时，繁多的文章会让人原地爆炸。不仅效率低下，而且一个个的添加就让人烦躁。

正常情况下咱们会这样配置，但是显而易见，当我们日后文章数量增加，又或者我们需要更改名称，这时候就又得找到位置更改名称。相当的麻烦。
``` js
 sidebar: {
        '/cst/': [
            ['', '车商通'],
            ['draft', '草稿箱'],
            ['esc', '二手车']
        ],
        '/new/': [
            ['', '发布新框架'],
            ['local/entry.md', '本地开发'],
            ['feedback/feedback.md', '问题反馈']
        ]
    }
```

在这分享一个可以自动生成sidebar的小方法，可以节省出更多的时间。

鸣谢 **[浅墨散人](https://fangzheng.xyz/)** :+1:

## 开始

首先，如果要自动生成侧边栏，就必须先生成侧边栏的文件列表，也就是目录。

根据推荐的文件放置目录创建相对应的文件夹和js

我们在`utils`文件夹中放置下面的主要核心js

在`.vuepress`文件夹中的`sidebarConf.js`中生成对应的侧边栏列表

```
├─ docs
│  ├─.vuepress
│  │  ├─config.js
│  │  ├─nav.js
│  │  └─sidebarConf.js
│  └─utils
│    ├─ getFilenames.js
│    └─ index.js
```

### 1.获取文件名
***getFilenames.js*** 获取一个目录下的所有文件名
``` js
/**
 * 获取一个目录下的所有文件名
 * 使用方法：var filehelper = require('./utils/getFilenames.js')
 * filehelper.getFileName("/views/technology-sharing/vuepress/")
 */
const fs = require('fs');
// 排除检查的文件
var excludes = ['.DS_Store']

var filehelper = {
    getFileName: function (rpath) {
        let filenames = [];
        fs.readdirSync(rpath).forEach(file => {
            if (excludes.indexOf(file) < 0) {
                fullpath = rpath + "/" + file
                var fileinfo = fs.statSync(fullpath)
                if (fileinfo.isFile()) {
                    if (file === 'README.md') {
                        file = '';
                    } else {
                        file = file.replace('.md', '');
                    }
                    filenames.push(file);
                }
            }
        })
        filenames.sort();
        return filenames;
    }
}
module.exports = filehelper;
```

### 2.处理数据
***index.js*** 将数据处理为vuepress可接受的对象格式
``` js
/**
 * 将数据处理为vuepress可接受的对象格式
 * 使用方法：var utils = require('./utils/index.js')
 * utils.genSidebar('sidebar_title, filehelper.getFileName(docs + "/views/technology-sharing/vuepress/"), false),
 */
const utils = {
    genSidebar: function (title, children = [''], collapsable = true, sidebarDepth = 2) {
        var arr = new Array();
        arr.push({
            title,
            collapsable,
            sidebarDepth,
            children
        })
        return arr;
    }
};

module.exports = utils;
```

### 3.配置侧边栏
***sidebarConf.js*** 调用上述两个方法，组成侧边栏的数据列表，对应文章开头的原始配置格式。
``` js {8-16}
const path = require("path")
const rootpath = path.dirname(__dirname) //执行一次dirname将目录定位到docs的上级目录，也就是博客根目录
const docs = rootpath;
const utils = require(rootpath + '/utils/index.js');
const filehelper = require(rootpath + '/utils/getFilenames.js');
module.exports = {
    // 技术总结
    '/views/technology-sharing/vue/': utils.genSidebar('VUE了解一下？', filehelper.getFileName(docs + "/views/technology-sharing/vue/"), false),
    '/views/technology-sharing/node/': utils.genSidebar('NodeJs&&爬虫', filehelper.getFileName(docs + "/views/technology-sharing/node/"), false),
    '/views/technology-sharing/jsDir/': utils.genSidebar('JS', filehelper.getFileName(docs + "/views/technology-sharing/jsDir/"), false),
    '/views/technology-sharing/Linux/': utils.genSidebar('Linux', filehelper.getFileName(docs + "/views/technology-sharing/Linux/"), false),
    '/views/technology-sharing/nuxt/': utils.genSidebar('nuxt', filehelper.getFileName(docs + "/views/technology-sharing/nuxt/"), false),
    '/views/technology-sharing/css/': utils.genSidebar('css', filehelper.getFileName(docs + "/views/technology-sharing/cssDir/"), false),
    '/views/technology-sharing/vuepress/': utils.genSidebar('vuepress', filehelper.getFileName(docs + "/views/technology-sharing/vuepress/"), false),
    // 实用工具
    '/views/tools/': utils.genSidebar('实用工具', filehelper.getFileName(docs + "/views/tools/"), false),
};
```
:::tip
```js
utils.genSidebar(arg1,arg2,arg3)
```
**arg1: sidebar需要填写的title。**

**arg2: 动态生成的文章名称列表**

**arg3: 侧边栏的每个子组默认是可折叠的，你可以设置 false 来让一个组永远都是展开状态。**
:::

高亮片段中，`key`值指的就是在`nav.js`中配置的路由地址。

**nav.js**
```js {6,9,12,16,20,24,28}
module.exports = [{
        text: '技术总结',
        icon: 'reco-api',
        items: [{
                text: 'Vue',
                link: '/views/technology-sharing/vue/'
            }, {
                text: 'JS',
                link: '/views/technology-sharing/jsDir/'
            }, {
                text: 'vuepress',
                link: '/views/technology-sharing/vuepress/'
            },
            {
                text: 'Linux',
                link: '/views/technology-sharing/Linux/'
            },
            {
                text: 'nuxt',
                link: '/views/technology-sharing/nuxt/'
            },
            {
                text: 'node',
                link: '/views/technology-sharing/node/'
            },
            {
                text: 'css',
                link: '/views/technology-sharing/cssDir/'
            }
        ]
    }
]
```
通过这个三个js的配合使用就可以达到快速的生成侧边栏了。

### 4.挂载进config
```js
 "themeConfig": {
    "nav": require('./nav'),
    "sidebar": require('./sidebarConf'),
 }
```

**到这里完整的功能就已经完成了**

## 最后
如果你想要增加一个文件夹或者是一个导航栏，只需要在`nav.js`中配置路由，然后在`sidebarConf.js`中使用这个路由就可以完美使用了。

**完结撒花 :tada::tada::tada:**
