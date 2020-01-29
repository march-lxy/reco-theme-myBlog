<template>
  <div class="theme-example">
    <div class="blog-list-wrapper">
      <div
        class="new-card"
        v-for="(item,index) in blogList"
        :key="index"
        :style="index%2==0?bgInfo[0]:bgInfo[1]"
      >
        <a :href="item.link" target="_blank" rel="noopener noreferrer">
          <dl>
            <dt class="card-img">
              <img :src="item.thumbnail" class="img" />
            </dt>
            <dd class="card-content">
              <span class="card-name font-regular">
                <a href>{{item.name}}</a>
              </span>
              <span class="card-desc font-regular">{{item.desc}}</span>
            </dd>
          </dl>
        </a>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      blogList: [
        {
          name: "午后南杂",
          desc: "Enjoy when you can, and endure when you must.",
          link: "https://www.recoluan.com",
          thumbnail: "https://www.recoluan.com/head.png"
        },
        {
          name: "LOGI",
          desc: "会点代码的强迫症",
          link: "https://logi.im",
          thumbnail:
            "https://ae01.alicdn.com/kf/UTB8q2lYPFfFXKJk43Otxh4IPFXaQ.jpeg"
        }
      ],
      bgInfo: [
        "background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
        "background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%)"
      ]
    };
  },
  methods: {
    linkTo(link) {
      window.open(link, "target", "");
    }
  }
};
</script>

<style lang="stylus" scoped>
.theme-example {
  margin-top: 30px;

  .blog-list-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .new-card {
      width: 46%;
      box-shadow: var(--box-shadow);
      height: 125px;
      margin: 45px 10px 10px 10px;
      border-radius: 10px;
      background: #ccc;
      display: inline-block;
      position: relative;
      transition: all 0.5s;
      cursor: pointer;

      dl {
        position: relative;
      }

      .card-img {
        position: absolute;
        display: block;
        width: 75px;
        height: 75px;
        top: -58px;
        left: 30px;
        border-radius: 0.3783783783783784rem;
        border: 3px solid #fff;
        background: #fff;

        .img {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }

      .card-content {
        display: block;
        width: 100%;
        position: relative;
        color: #fff;

        .font-regular {
          width: 85%;
          position: absolute;
          text-align: left;
          display: inline-block;
          font-weight: 400;
          color: var(--text-color);
        }

        .card-name {
          width: 50%;
          top: -8px;
          left: 90px;
          font-weight: 500;
          font-size: 24px;
          line-height: 30px;
          height: 30px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;

          a {
            line-height: 1.1;
            display: inline-block;
            text-decoration: none;
          }

          a:after {
            display: block;
            content: '';
            height: 2px;
            width: 0%;
            background-color: var(--text-color);
            transition: width 0.5s ease-in-out;
          }

          a:hover:after, a:focus:after {
            width: 100%;
          }
        }

        .card-desc {
          top: 35px;
          font-size: 16px;
        }
      }

      &:hover {
        transform: scale(1.05);
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .theme-example {
    .blog-list-wrapper {
      .new-card {
        width: 85%;
        margin: 45px auto 10px auto;
      }
    }
  }
}
</style>
