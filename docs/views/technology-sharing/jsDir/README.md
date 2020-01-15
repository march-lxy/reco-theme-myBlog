---
title: 前端常用的公共方法
date:  2020-01-06
categories:
- js
tags:
- 方法
---

>前两期把我所学习到的高德地图工具类做了简单的封装，这一期我将把一些常用的工具类作为一个单独的模块提出来。以便于后期的整理以及大家的互相学习。
## 1.格式化时间
``` js
/**
 * @param {(Object|string|number)} time
 * @param {string} TimeFormat   想要返回时间的格式 例如 '{y}-{m}-{d} {h}:{i}:{s} {a}' {a}为周
 * @returns {string}
 */
function parseTime(time, TimeFormat) {
    if (arguments.length === 0) {
        return null
    }
    const format = TimeFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
        date = time
    } else {
        if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
            time = parseInt(time)
        }
        if ((typeof time === 'number') && (time.toString().length === 10)) {
            time = time * 1000
        }
        date = new Date(time)
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key]
        if (key === 'a') {
            return ['日', '一', '二', '三', '四', '五', '六'][value]
        }
        if (result.length > 0 && value < 10) {
            value = '0' + value
        }
        return value || 0
    })
    return time_str
}
```
### 调用示例
``` js
parseTime('1566458744391')  //不填写返回格式 默认为'{y}-{m}-{d} {h}:{i}:{s}'  2019-08-22 15:25:44
parseTime('1566458744391','{y}-{m}-{d} {h}:{i}:{s}')  //填写对应格式  2019-08-22 15:25:44
parseTime('1566458744391','{m}-{d}-{y} {h}:{i}:{s}')  //修改格式  08-22-2019 15:25:44
parseTime('1566458744391','{m}-{d}-{y} {h}:{i}:{s} 周{a}')  //加上周  08-22-2019 15:25:44 周四
```
## 2.获取字节长度
``` js
/**
 * @param {String} str 
 * @returns {Number}
 */
function byteLength(str) {
    let s = str.length
    for (var i = str.length - 1; i >= 0; i--) {
        const code = str.charCodeAt(i)
        if (code > 0x7f && code <= 0x7ff) s++
        else if (code > 0x7ff && code <= 0xffff) s += 2
        if (code >= 0xDC00 && code <= 0xDFFF) i--
    }
    return s
}
```
### 调用示例
``` js
byteLength('123')  //3
byteLength('蜡笔小新')  //12
```
## 3.数组去重
``` js
/**
 * @param {Array} arr 
 * @returns {Array}
 */
function uniqueArr(arr) {
    return Array.from(new Set(arr))
}
```
### 调用示例
``` js
uniqueArr([1, 2, 1, 5, 3, 6, 5, 3, 2, 1])  //[ 1, 2, 5, 3, 6 ]
```
## 4.字符串首字母大写
``` js
/**   
 * @param {String} string 
 * @returns {String}
 */
function uppercaseFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}
``` 
### 调用示例
``` js
uppercaseFirst('beautiful') //Beautiful
```
## 5.提取url地址中的参数
``` js
/**
 * @param {String} url 
 * @returns {Object}
 */
function getQueryObject(url) {
    url = url == null ? window.location.href : url
    const search = url.substring(url.lastIndexOf('?') + 1)
    const obj = {}
    const reg = /([^?&=]+)=([^?&=]*)/g
    search.replace(reg, (rs, $1, $2) => {
        const name = decodeURIComponent($1)
        let val = decodeURIComponent($2)
        val = String(val)
        obj[name] = val
        return rs
    })
    return obj
}
```
### 调用示例
``` js
getQueryObject('https://www.你过来啊.com?tn=monline_3_dg&ie=utf-8&wd=%E5%93%88%E5%93%88%E5%93%88')
// { tn: 'monline_3_dg', ie: 'utf-8', wd: '哈哈哈' }
``` 
## 6.数字的格式化
``` js
/**
 * 如 10000 => 10k
 * @param {number} num
 * @param {number} digits  位数
 */
export function numberFormatter(num, digits) {
  const si = [
    { value: 1E18, symbol: 'E' },
    { value: 1E15, symbol: 'P' },
    { value: 1E12, symbol: 'T' },
    { value: 1E9, symbol: 'G' },
    { value: 1E6, symbol: 'M' },
    { value: 1E3, symbol: 'k' }
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
    }
  }
  return num.toString()
}
``` 
### 调用示例
``` js
numberFormatter(1001200) //1M
numberFormatter(1001200,3) //1.101M
numberFormatter(1001200,4) //1.1012M
```
>后续将慢慢补充其他未涉及到的方法，希望大家支持！