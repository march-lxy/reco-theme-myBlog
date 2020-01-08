---
title: vue组件传值--详细版
date:  2020-01-06
categories:
- vue
tags:
- vue方法
---
> vue组件传值在日常开发中比较常见，在官方文档里面也有介绍，但是对于新手理解起来会有一点生涩。所以今天就把这个拉出来写一次。
一般有三种传值方式：1.父传子、2.子传父、3.兄弟组件之间通信
## 1.父组件向子组件传值
一般会在子组件里面定义props来做接收，这是比较常见的情况
##### 这是父组件
``` html
<template>
  <div>
    <div>我是父组件</div>
    <div>我发送给第一个组件的信息是:{{msg}}</div>
    <div>
      <div id="child1">
        <ChildOne :msg="msg" />
      </div>
    </div>
  </div>
</template>

<script>
import ChildOne from "../components/children1";
import ChildTwo from "../components/children2";
export default {
  components: {
    ChildOne,
    ChildTwo
  },
  data() {
    return {
      msg: "我是父组件，我给你发消息",
    };
  }
};
</script>
```
可以看到我在第一个子组件上面传入了一个msg,那么在子组件上就需要定义一个msg用来接收传进来的参数
##### 这是第一个子组件
``` html
<template>
  <div>
    <div id="title">我是第一个子组件</div>
    <div>我接受到的父组件的消息是：{{msg}}</div>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String
    }
  }
};
</script>
```
##### 效果
![父传子.png](https://upload-images.jianshu.io/upload_images/17304901-4ec8c86f4862aca0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 2.子组件向父组件传值
这时候就需要利用vue中的$emit将想要传递的值通过函数的形式传出，在父组件接收

`this.$emit(arg1,arg2) arg1:方法名字，arg2:要传出的值`
##### 这是第二个子组件
``` html
<template>
  <div>
    <div id="title">我是第二个子组件</div>
    <div>我要发送给父组件的值：{{msg}}</div>
    <button @click="toParent">向父组件发送信息</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "我是第二组件，我要给父组件传值",
    };
  },
  methods: {
    toParent() {
      this.$emit("toParent", this.msg);
    }
  }
};
</script>
```
我在button上绑定了一个点击事件，函数里面传出了一个方法名为toParent的方法，这时候我们就要去父组件接收这个函数，它会带一个返回值，这个返回值就是我们需要从子组件传的值。
##### 这是父组件
``` html
<template>
  <div>
    <div>我是父组件</div>

    <div>我即将接收第二组件传值是：{{child2Msg}}</div>
    <div>
      <div id="child2">
        <ChildTwo @toParent="getMag" />
      </div>
    </div>
  </div>
</template>

<script>
import ChildOne from "../components/children1";
import ChildTwo from "../components/children2";
export default {
  components: {
    ChildOne,
    ChildTwo
  },
  data() {
    return {
      child2Msg: ""
    };
  },
  methods: {
    getMag(msg) {
      this.child2Msg = msg;
    }
  }
};
</script>
```
此时我在父组件里面定义了一个@toParent方法这个名称要和子组件里面this.$emit(arg1)的命名一样，用来接收。在getMag里面接收一个参数就是当前传回的值。
##### 效果
![没传值的时候.png](https://upload-images.jianshu.io/upload_images/17304901-bba30769b6092908.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![已经传值.png](https://upload-images.jianshu.io/upload_images/17304901-163c7cd14d32f9d1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
## 3.兄弟组件传值
兄弟组件之间就需要一个中间值，我在这里称为bus。在vue文件main.js中，我们利用 `Vue.prototype.bus=new Vue()` 来定义，此时我们就有了一个中间量。
##### 这是第一个子组件 -- 从这里向另外一个子组件传值
``` html
<template>
  <div>
    <div id="title">我是第一个子组件</div>
      我要给第二个兄弟发信息，内容是：
      <input type="text" v-model="to" />
    </div>
    <button @click="toBrother">点我给兄弟传值</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      to: "哈喽老二"
    };
  },
  methods: {
    toBrother() {
      this.bus.$emit("toBrother", this.to);
    }
  }
};
</script>
``` 
在这里我在button上绑定了一个方法，在方法内部使用中间变量bus中的$emit来传递值，参数同子传父的参数一致。
##### 这是第二个子组件--用来做接收方
``` html
<template>
  <div>
    <div id="title">我是第二个子组件</div> 
    <div>我得到的兄弟组件信息是：{{get}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      get: ""
    };
  }
  beforeCreate() {
    this.bus.$on("toBrother", msg => {
      this.get = msg;
    });
  }
};
</script>
```
在第二个子组件里面通过beforeCreate生命周期来获得传过来的值，这时候需要用`this.bus.$on`来接收，第一个参数是`this.bus.$emit`定义的第一个方法名，第二个参数是一个方法，此方法带一个返回参数。在这里我使用箭头函数。
##### 效果
![未传值.png](https://upload-images.jianshu.io/upload_images/17304901-39c8836a6b4fcb65.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![以传值.png](https://upload-images.jianshu.io/upload_images/17304901-0674fab32405b3ef.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
而且可以利用input来输入不同的信息，传入到兄弟组件中，例如
![input改变信息内容.png](https://upload-images.jianshu.io/upload_images/17304901-c934b0a43a32f17d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> vue组件传值大概就是这么多，日常开发相对来说还是足够的。大家看到后觉得有什么问题，希望联系我，我好快速改正！持续更新！！！
