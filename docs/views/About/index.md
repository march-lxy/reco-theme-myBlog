---
isShowComments: false
---

<p align="center"><img :src="$withBase('/avatar.png')" alt="SigureMo" height=200 width=200></p>
<p align="center">
  <a href="https://github.com/ACchenjiangbo" class="zi zi_tmGithub"></a>
  <a href="mailto:chenjibzh@163.com" class="zi zi_envelope"></a>
  <a href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=916305619&website=bcjiangbo.cn" class="zi zi_tmQq"></a>
</p>

:::tip 

### 不会做饭的程序猿不是一个好厨师。:joy::joy::joy:
#### 热爱烹饪的前端开发，美食与Code并重。 :heart_eyes:
#### 97年双子座一枚，喜欢电音、民谣、古风类歌曲。


:::

<div class="time">成功入坑时间 </div> 



<ul class="cnt_dwn-ul">
<li class="cnt_dwn-li">
<div class="cnt_dwn-vlu days" id="ctday">{{ day }}</div>
<div class="cnt_dwn-lbl">Days</div>
</li>
<li class="cnt_dwn-li">
<div class="cnt_dwn-vlu hours" id="cthr">{{ hours }}</div>
<div class="cnt_dwn-lbl">Hours</div>
</li>
<li class="cnt_dwn-li">
<div class="cnt_dwn-vlu minutes" id="ctmin">{{ mins }}</div>
<div class="cnt_dwn-lbl">Minutes</div>
</li>
<li class="cnt_dwn-li">
<div class="cnt_dwn-vlu seconds" id="ctsec">{{ secs }}</div>
<div class="cnt_dwn-lbl">Seconds</div>
</li>
</ul>

## 会点啥？
-  HTML + CSS
-  Node
-  PHP
-  写点爬虫自己玩

## 未来目标？

-  TypeScript再深入研究学习
-  学习 Python OR Go 
-  抽出空闲整理知识点,丰富文章

## 联系我？
-  邮箱：[chenjibzh@163.com](mailto:chenjibzh@163.com) OR [916305619@qq.com](mailto:916305619@qq.com)

<div class="showWei">
    <div class="title">微信</div>
    <img :src="$withBase('/Wqrcode.png')" alt="SigureMo" height=200 width=200>
</div>

## 赞助一下？

<div class="showWei">
    <div class="title wei">微信支付</div>
    <img :src="$withBase('/wei.jpg')" alt="SigureMo" height=200 width=200>
</div>

<div class="showWei">
    <div class="title zhi">支付宝</div>
    <img :src="$withBase('/zhi.jpg')" alt="SigureMo" height=200 width=200>
</div>



<script>
export default {
   props: ['slot-key'],
   data() {
      return {
        start_date:'2018-02-01 00:00:00.0',
        day:'',
        hours:'',
        mins:'',
        secs:''
      };
   },
   methods: {
      refresh() {
         let start_date = this.start_date
         start_date = start_date.substring(0,19);
         start_date = start_date.replace(/-/g,'/');
         let start_timestamp = new Date(start_date).getTime();
         let now_timestamp = new Date();

         let dist_timestamp = now_timestamp - start_timestamp;
         this.day = Math.floor(dist_timestamp / (24*3600*1000));
         this.hours = Math.floor((dist_timestamp % (24*3600*1000)) / (3600*1000));
         this.mins = Math.floor((dist_timestamp % (3600*1000)) / (60*1000));
         this.secs = Math.floor((dist_timestamp % (60*1000)) / 1000);
      }
   },
   mounted () {
      this.refresh();
      setInterval(this.refresh, 1000);
   }
}
</script>

<link rel="stylesheet" href="https://ico.z01.com/zico.min.css">