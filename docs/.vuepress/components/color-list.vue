<template>
  <div class="content">
    <div class="gradient js-gradient" v-for="(item,index) in list" :key="index">
      <span class="gradient__title">{{item.title}}</span>
      <div
        class="gradient__background js-gradient js-see-view-full"
        :style="item.css"
        title="View Fullscreen"
      ></div>
      <div class="gradient__colors_box">
        <div v-if="item.colors==''">Many colors</div>
        <div v-else>{{item.colors}}</div>
      </div>
      <div
        class="gradient__copy_button js-copy-css js-reach-goal"
        :data-clipboard-text="item.css"
        @click="copyCss(item.css)"
      >复制CSS</div>
      <div class="gradients__copy_message">
        <textarea class="js-code-textarea gradients__code_text" readonly>{{item.css}}</textarea>
      </div>
    </div>

    <Pagination
      style="margin-top:30px"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-size="14"
      layout="total, prev, pager, next, jumper"
      :total="len"
    ></Pagination>
  </div>
</template>

<script>
import { Message, Pagination } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import colorList from "./../public/js/color";
export default {
  data() {
    return {
      list: [],
      dataList: [],
      len: 0,
      page: 1
    };
  },
  mounted() {
    this.len = colorList.length;
    var len = Math.round(colorList.length / 14);
    for (let i = 0; i < len; i++) {
      this.dataList.push(colorList.slice(i * 14, i * 14 + 14));
    }
    this.list = this.dataList[0];
  },
  methods: {
    copyCss(str) {
      var input = document.createElement("input"); // 直接构建input
      input.value = str; // 设置内容
      document.body.appendChild(input); // 添加临时实例
      input.select(); // 选择实例内容
      document.execCommand("Copy"); // 执行复制
      document.body.removeChild(input); // 删除临时实例
      Message({
        message: "复制成功!",
        type: "success",
        offset: 70
      });
    },
    handleSizeChange() {},
    handleCurrentChange(now) {
      this.list = this.dataList[now - 1];
      this.scrollTo();
    },
    scrollTo(element, speed, where = 0) {
      if (!speed) {
        speed = 300;
      }
      if (!element) {
        $("html,body").animate(
          {
            scrollTop: where
          },
          speed
        );
      } else {
        if (element.length > 0) {
          $("html,body").animate(
            {
              scrollTop: where
            },
            speed
          );
        }
      }
    }
  },
  components: {
    Pagination
  }
};
</script>

<style lang="stylus" scoped>
.content {
  display: -webkit-flex;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

.gradient {
  position: relative;
  float: left;
  width: calc(48% - 20px);
  height: 420px;
  margin-bottom: 15px;
  background-color: #fff;
  box-shadow: 0 1px 6px rgba(36, 37, 38, 0.08);
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.25s ease, transform 0.25s ease;

  .gradient__title {
    position: absolute;
    left: 36px;
    top: 29px;
    font-size: 0.8125em;
    color: #333435;
    letter-spacing: 0.03em;
  }

  .gradient__background {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    border-radius: 50%;
    height: 250px;
    width: 250px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiP…AgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4='), pointer;
  }

  .gradient__colors_box {
    position: absolute;
    left: 35px;
    bottom: 30px;
  }

  .gradient__copy_button {
    position: absolute;
    right: 30px;
    bottom: 30px;
    font-size: 0.8125em;
    color: #333435;
    letter-spacing: 0.03em;
    cursor: pointer;
  }

  button, input {
    border: none;
    background: 0 0;
  }

  .gradient__copy_button:after {
    z-index: 10;
    width: 30%;
    background-color: #fff;
    opacity: 0;
  }

  .gradient__copy_button:after, .gradient__copy_button:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 1px;
    width: 13%;
    background-color: #333435;
    transition: opacity 0.25s ease, transform 0.25s ease, width 0.3s cubic-bezier(0.68, 0.05, 0.46, 1.02), left 0.2s 0.2s ease-out;
  }

  .gradient__copy_button:hover:after, .gradient__copy_button:hover:before {
    width: 100%;
  }

  .gradients__copy_message {
    visibility: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    transition: opacity 0.25s ease;
  }

  .gradients__copy_message:before {
    content: '';
    width: 100%;
    padding-bottom: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: auto;
    z-index: 1;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.9);
    transform: scale(0);
    transform-origin: center;
    transition: transform 0.7s cubic-bezier(0.47, 0.04, 0.22, 0.92);
  }

  .gradients__code_text {
    opacity: 0;
    position: absolute;
    z-index: 10;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    max-width: 300px;
    padding: 0 30px;
    transition: opacity 0.25s ease;
    text-align: center;
    margin: auto;
    width: 100%;
    border: none;
    background-color: transparent;
    height: 70px;
    resize: none;
  }

  .gradients__code_text {
    font-size: 0.8125em;
  }

  .gradients__copy_message {
    visibility: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    transition: opacity 0.25s ease;
  }
}

.gradient:hover {
  box-shadow: 0px 6px 20px rgba(36, 37, 38, 0.13);
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}

@media (max-width: 1024px) {
  .gradient {
    width: calc(50% - 15px);
  }

  .gradient:nth-of-type(2n) {
    margin-right: 0;
  }
}

@media (max-width: 650px) {
  .gradient {
    width: 100%;
    margin-right: 0;
  }
}
</style>