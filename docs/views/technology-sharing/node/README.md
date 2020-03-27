---
title: 简单的Node爬虫
date:  2020-03-26
categories:
- Node
tags:
- 爬虫
---


## 写在开头

> 经过一个漫长的寒假，终于也是赶上复工的潮流。祝贺全国人民抗"疫"取得阶段性的胜利。
在平常的Node使用过程中，我主要就是爬取点东西。今天分享一个简单的Node爬虫程序。抓取某培训站点的评论内容。

::: tip
[完整代码](#_8-完整代码)
:::

## 1.引入依赖文件
``` js
const https = require('https'),  //发送请求
fs = require('fs'),      // fs文件操作
cheerio = require('cheerio'); // 类似于jQuery
```

## 2.定义类
``` js
class crawlData {
    constructor(page) {
        this.currentPage = 1;
        this.page = page;
        this.baseUrl = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'; // 因为涉及侵权,就不挂链接了。
        this.init();
    }
}
```

## 3.定义Init()函数
``` js
/*
 * 我们定义计时器来分开请求。因为了解到他的分页请求费GET请求直接在URL后面拼接分页参数即可。
 */
init() {
    let _self = this;
    let time = setInterval(function () {
        if (_self.currentPage > _self.page) {
            clearInterval(time);
        } else {
            _self.getDataPackage(_self.baseUrl + `?page=${_self.currentPage}`, _self.currentPage);
            _self.currentPage++;
        }
    }, 1000 * 1);

}
```
## 4.发送请求
``` js
getDataPackage(url, curPage) {
    console.log(url);
    let _self = this;
    https.get(url, function (response) {
        var chunks = [];
        var size = 0;
        response.on('data', function (chunk) {
            chunks.push(chunk);
            size += chunk.length;
        });
        response.on('end', function () {
            // 将请求到的内容转为jQuery可操作的DOM结构
            let data = Buffer.concat(chunks, size);
            let html = data.toString();
            let $ = cheerio.load(html);  
            
            // 获取内容，在页面上自行通过F12开发者找到对应的标签内容。
            let result = [];
            $('.cmt-list').find('.inner').each(i => {
                let map = {};
                map.user = $('.inner').eq(i).find('.hd').find('.name').text();
                map.img = "http:" + $('.inner').eq(i).find('.hd').find('a').find('img').attr('src');
                map.starts = $('.inner').eq(i).find('.hd').find('.stars').find('span').text();
                map.content = $('.inner').eq(i).find('.cmt-txt').text();
                result.push(map);
                map = {};
            })

            // 处理JSON格式
            let dataStr = JSON.stringify(result).trim().replace(/^\[/, curPage == 1 ? '[' : '').replace(/\]$/, curPage == _self.page ? ']' : ',');

            // 通过fs写入
            fs.writeFile('./pinglun.json', dataStr, {
                    'flag': 'a'
            }, function (err) {
                if (err) throw err;
                console.log('写入成功');
            });
        });
    });
}
```
## 5.调用
``` js
new crawlData(10);
```

## 6.过程图
![运行时](./img/process.png '运行时')

## 7.结果
![结果](./img/result.png '结果')

## 8.完整代码
``` js
const
    https = require('https'),
    fs = require('fs'),
    cheerio = require('cheerio');

class crawlData {
    constructor(page) {
        this.currentPage = 1;
        this.page = page;
        this.baseUrl = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
        this.init();
    }
    init() {
        let _self = this;
        let time = setInterval(function () {
            if (_self.currentPage > _self.page) {
                clearInterval(time);
            } else {
                _self.getDataPackage(_self.baseUrl + `?page=${_self.currentPage}`, _self.currentPage);
                _self.currentPage++;
            }
        }, 1000 * 1);

    }
    getDataPackage(url, curPage) {
        console.log(url);
        let _self = this;
        https.get(url, function (response) {
            var chunks = [];
            var size = 0;
            response.on('data', function (chunk) {
                chunks.push(chunk);
                size += chunk.length;
            });
            response.on('end', function () {
                let data = Buffer.concat(chunks, size);
                let html = data.toString();
                let $ = cheerio.load(html);
                let result = [];
                $('.cmt-list').find('.inner').each(i => {
                    let map = {};
                    map.user = $('.inner').eq(i).find('.hd').find('.name').text();
                    map.img = "http:" + $('.inner').eq(i).find('.hd').find('a').find('img').attr('src');
                    map.starts = $('.inner').eq(i).find('.hd').find('.stars').find('span').text();
                    map.content = $('.inner').eq(i).find('.cmt-txt').text();
                    result.push(map);
                    map = {};
                })

                let dataStr = JSON.stringify(result).trim().replace(/^\[/, curPage == 1 ? '[' : '').replace(/\]$/, curPage == _self.page ? ']' : ',');
                fs.writeFile('./pinglun.json', dataStr, {
                    'flag': 'a'
                }, function (err) {
                    if (err) throw err;
                    console.log('写入成功');
                });
            });
        });
    }
}

new crawlData(10);
```

### **完结撒花:tada::tada::tada:**