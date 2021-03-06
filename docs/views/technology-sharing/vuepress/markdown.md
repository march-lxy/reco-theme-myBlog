---
title: Markdown基本语法
date:  2020-02-07
categories:
- vuepress
tags:
- MD语法
---

## 一、标题

在想要设置为标题的文字前面加#来表示

一个#是一级标题，二个#是二级标题，以此类推。支持六级标题。

示例：

```
# 这是一级标题
## 这是二级标题
### 这是三级标题
#### 这是四级标题
##### 这是五级标题
###### 这是六级标题
```
效果：
:::tip
# 这是一级标题
## 这是二级标题
### 这是三级标题
#### 这是四级标题
##### 这是五级标题
###### 这是六级标题
:::

## 二、字体

### 1.**加粗**

要加粗的文字左右分别用两个*号包起来，例：`**加粗**`

### 2.*斜体*

要倾斜的文字左右分别用一个*号包起来，例：`*斜体*`

### 3.***斜体加粗***

要倾斜和加粗的文字左右分别用三个*号包起来，例：`***斜体加粗***`

### 4.~~删除线~~

要加删除线的文字左右分别用两个~~号包起来，例：`~~删除线~~`

示例：
```
**这是加粗的文字**
*这是倾斜的文字*
***这是斜体加粗的文字***
~~这是加删除线的文字~~
```
效果：

**这是加粗的文字**

*这是倾斜的文字*

***这是斜体加粗的文字***

~~这是加删除线的文字~~

### 5.字体、字号、颜色
``` html
<font face="黑体">我是黑体字</font>
<font face="微软雅黑">我是微软雅黑</font>
<font face="STCAIYUN">我是华文彩云</font>
<font color=#0099ff size=12 face="黑体">黑体</font>
<font color=gray size=5>gray</font>
<font color=#00ffff size=3>null</font>
```

<font face="黑体">我是黑体字</font>

<font face="微软雅黑">我是微软雅黑</font>

<font face="STCAIYUN">我是华文彩云</font>

<font color=#0099ff size=12 face="黑体">黑体</font>

<font color=gray size=5>gray</font>

<font color=#00ffff size=3>null</font>

## 三、引用

在引用的文字前加>即可。引用也可以嵌套，如加两个>>三个>>>n个...

示例：
```
>这是引用的内容
>>这是引用的内容
>>>>这是引用的内容
```
效果：

>这是引用的内容
>>这是引用的内容
>>>>这是引用的内容

## 四、分割线

三个或者三个以上的 - 或者 * 都可以。

示例：
```
---
----
***
*****
```
效果：

---

----

***

*****

## 五、图片

语法：
```
![图片alt](图片地址 ''图片title'')

图片alt就是显示在图片下面的文字，相当于对图片内容的解释。
图片title是图片的标题，当鼠标移到图片上时显示的内容。title可加可不加
```

示例：
```
![个人头像](https://www.bcjiangbo.cn/avatar.png 'LOGO')
```

效果：

![个人头像](https://www.bcjiangbo.cn/avatar.png 'LOGO')

## 六、超链接
### **行内式**

语法： 
```
[超链接名](超链接地址 "超链接title")
title可加可不加
```

示例：
```
[简书](https://www.jianshu.com/u/2046b1072e3b)
自动生成连接  <http://www.github.com/>
```

效果：

[简书](https://www.jianshu.com/u/2046b1072e3b)

自动生成连接  <http://www.github.com/>

### **参考式**

语法：
```
参考式链接分为两部分，文中的写法 [链接文字][链接标记]
在文本的任意位置添加[链接标记]:链接地址。
```

示例：
```
我经常去的几个网站[Google][1]、[百度][2]。

[1]:https://www.google.com 
[2]:https://www.baidu.com
```
效果：

我经常去的几个网站[Google][1]、[百度][2]。

[1]:https://www.google.com 
[2]:https://www.baidu.com


## 七、表格

语法：
```
| 表头 | 表头 | 表头 |
|------|:----:|-----:|
| 内容 | 内容 | 内容 |
| 内容 | 内容 | 内容 |

第二行分割表头和内容。
- 有一个就行，为了对齐，多加了几个
文字默认居左
-两边加：表示文字居中
-右边加：表示文字居右
注：原生的语法两边都要用 | 包起来。此处省略
```
示例：

| 模板变量       |              说明               |
|----------------|:-------------------------------:|
| SITE_NAME      |            博客名称             |
| SITE_URL       |          博客首页地址           |
| POST_URL       |      文章地址（完整路径）       |
| PARENT_NICK    | 收件人昵称（被@者，父级评论人） |
| PARENT_COMMENT |          父级评论内容           |
| NICK           |          新评论者昵称           |
| COMMENT        |           新评论内容            |

## 八、代码

语法：
单行代码：代码之间分别用一个反引号包起来

```
`代码`
```

代码块：代码之间分别用三个反引号包起来，且两边的反引号单独占一行


## 九、特殊字

| 特殊字符 |     描述      | 字符的代码 |
|:--------:|:-------------:|:----------:|
|  &nbsp;  |    空格符     |  `&nbsp;`  |
|   &lt;   |    小于号     |   `&lt;`   |
|   &gt;   |    大于号     |   `&gt;`   |
|  &amp;   |      和       |  `&amp;`   |
|  &yen;   |    人民币     |  `&yen;`   |
|  &copy;  |     版权      |  `&copy;`  |
|  &reg;   |   注册商标    |  `&reg;`   |
|  &deg;C  |    摄氏度     | `&deg;C;`  |
| &plusmn; |    正负号     | `&plusmn;` |
| &times;  |     乘号      | `&times;`  |
| &divide; |     除号      | `&divide;` |
| 2&sup2;  | 平方（上标²） |  `&sup2;`  |
| 2&sup3;  | 立方（上标³） |  `&sup3;`  |