---
title: '友人帐'
---


::: prompt  注意啦
想交换友链的请先添加本站链接。<br>
然后在<span style="color:red;font-weight:bold">本页面留言</span>。<br>
记得留下邮箱呦，添加完成后会向您送发邮件。
:::

::: theorem  留言格式
站点名称：平凡的你我 <br>
站点描述：理想成为大牛的小陈同学 <br>
站点网址：https://reinness.com <br>
LOGO：https://reinness.com/avatar.png<br>
<div id="copy" class="el-button is-round el-button--primary ">复制</div>

<input id="copy_content" type="text" value=""  style="position: absolute;top: 0;left: 0;opacity: 0;z-index: -10;"/>
:::

# 摆阵，恭迎大佬！

:::tip
**点击名称跳转**
:::

<script>
import { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
export default {
  mounted() {
    var copy=document.getElementById('copy');
    var cont=`站点名称："平凡的你我"  站点描述："理想成为大牛的小陈同学"   站点网址："https://reinness.com"   LOGO："https://reinness.com/avatar.png" `
    var this_=this
    copy.onclick=function(){
        var inputElement =  document.getElementById("copy_content");  //获取要赋值的input的元素
        inputElement.value = cont;  //给input框赋值   
        inputElement.select();//选中input框的内容
        document.execCommand("Copy");// 执行浏览器复制命令
        Message({
          message: '复制成功!',
          type: 'success',
          offset: 70
        })
    }
  }
};
</script>
<theme-example></theme-example>