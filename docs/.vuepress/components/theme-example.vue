<template>
  <div class="theme-example">
    <div class="blog-list-wrapper">
      <div
        class="new-card"
        v-for="(item,index) in blogList"
        :key="index"
        :style="index%2==0?bgInfo[0]:bgInfo[1]"
      >
        <dl>
          <dt class="card-img">
            <img :src="item.thumbnail" class="img" alt="缩略图" />
          </dt>
          <a :href="item.link" target="_blank" rel="noopener noreferrer">
            <dd class="card-content">
              <span class="card-name font-regular">
                <a>{{item.name}}</a>
              </span>
              <div class="card-desc font-regular">{{item.desc}}</div>
            </dd>
          </a>
        </dl>
      </div>
    </div>
  </div>
</template>


<script>
import list from "./../../utils/friend";
export default {
  data() {
    return {
      blogList: list,
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
        margin: 10px 0 10px 0;
      }

      .card-img {
        position: absolute;
        display: block;
        width: 75px;
        height: 75px;
        top: -50px;
        left: 30px;
        border-radius: 10px;
        border: 3px solid #fff;
        overflow: hidden;

        .img {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 10px;
          overflow: hidden;
        }
      }

      .card-content {
        display: block;
        color: #fff;
        position: relative;
        height: auto;

        .font-regular {
          width: 90%;
          text-align: left;
          display: inline-block;
          font-weight: 400;
          color: var(--text-color);
        }

        .card-name {
          width: 70%;
          font-weight: 500;
          font-size: 24px;
          line-height: 30px;
          height: 30px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin-left: 85px;

          a {
            text-align: center;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
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
          font-size: 16px;
          margin-top: 10px;
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
        width: 100%;
        margin: 45px auto 10px auto;
      }
    }
  }
}
</style>
