<template>
  <div>
    <Common :sidebar="false" :isComment="false">
      <ul class="timeline-wrapper">
        <ModuleTransition>
          <li v-show="recoShowModule" class="desc">{{$themeConfig.timeLineDesc}}</li>
        </ModuleTransition>
        <ModuleTransition
          :delay="String(0.08 * (index + 1))"
          v-for="(item, index) in timeLineData"
          :key="index"
          v-show="recoShowModule"
        >
          <div>
            <div v-for="(year,yearIndex) in item.data" :key="yearIndex">
              <ul class="moudle">
                <div class="header">
                  <div class="show">
                    <svg
                      data-v-28c57c4c
                      viewBox="64 64 896 896"
                      data-icon="pushpin"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                      focusable="false"
                      class
                    >
                      <path
                        d="M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2-73.2 0-146.4 24.1-206.5 72.3a33.23 33.23 0 0 0-2.7 49.4l181.7 181.7-215.4 215.2a15.8 15.8 0 0 0-4.6 9.8l-3.4 37.2c-.9 9.4 6.6 17.4 15.9 17.4.5 0 1 0 1.5-.1l37.2-3.4c3.7-.3 7.2-2 9.8-4.6l215.4-215.4 181.7 181.7c6.5 6.5 15 9.7 23.5 9.7 9.7 0 19.3-4.2 25.9-12.4 56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8zM666.2 549.3l-24.5 24.5 3.8 34.4a259.92 259.92 0 0 1-30.4 153.9L262 408.8c12.9-7.1 26.3-13.1 40.3-17.9 27.2-9.4 55.7-14.1 84.7-14.1 9.6 0 19.3.5 28.9 1.6l34.4 3.8 24.5-24.5L608.5 224 800 415.5 666.2 549.3z"
                      />
                    </svg>
                  </div>
                  <div class="year">{{`${yearIndex}/${item.year}`}}</div>
                </div>
                <ul class="year-wrapper">
                  <li v-for="(subItem, subIndex) in year" :key="subIndex">
                    <div class="show"></div>
                    <div>
                      <span class="date">{{subItem.day}}</span>
                      <span class="title" @click="go(subItem.path)">{{subItem.title}}</span>
                    </div>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </ModuleTransition>
      </ul>
    </Common>
  </div>
</template>

<script>
import Common from "@theme/components/Common";
import ModuleTransition from "@theme/components/ModuleTransition";
import moduleTransitonMixin from "@theme/mixins/moduleTransiton";

export default {
  mixins: [moduleTransitonMixin],
  name: "TimeLine",
  components: { Common, ModuleTransition },
  filters: {
    dateFormat(date, type) {
      function renderTime(date) {
        const dateee = new Date(date).toJSON();
        return new Date(+new Date(dateee) + 8 * 3600 * 1000)
          .toISOString()
          .replace(/T/g, " ")
          .replace(/\.[\d]{3}Z/, "")
          .replace(/-/g, "/");
      }
      date = renderTime(date);
      const dateObj = new Date(date);
      const mon = dateObj.getMonth() + 1;
      const day = dateObj.getDate();
      return `${mon}-${day}`;
    }
  },
  data() {
    return {
      timeLineData: []
    };
  },
  mounted() {
    console.log(this);
    
    this.checkList();
  },
  methods: {
    go(url) {
      this.$router.push({ path: url });
    },
    dateFormat(date, type) {
      function renderTime(date) {
        const dateee = new Date(date).toJSON();
        return new Date(+new Date(dateee) + 8 * 3600 * 1000)
          .toISOString()
          .replace(/T/g, " ")
          .replace(/\.[\d]{3}Z/, "")
          .replace(/-/g, "/");
      }
      date = renderTime(date);
      const dateObj = new Date(date);
      let mon = dateObj.getMonth() + 1;
      let day = dateObj.getDate();
      if (day >= 1 && day <= 9) {
        day = `0${day}`;
      }
      if (mon >= 1 && mon <= 9) {
        mon = `0${mon}`;
      }
      return { mon, day };
    },
    checkList() {
      let data = [];
      for (let i in this.$recoPostsForTimeline) {
        let thisYearData = {
          year: this.$recoPostsForTimeline[i].year,
          data: {}
        };
        this.$recoPostsForTimeline[i].data.forEach(j => {
          var date = this.dateFormat(j.frontmatter.date);
          if (thisYearData.data[date.mon] == undefined) {
            thisYearData.data[date.mon] = [];
          }
          j.day = date.day;
          thisYearData.data[date.mon].push(j);
        });
        data.push(thisYearData);
      }
      this.timeLineData = data;
    }
  }
};
</script>

<style src="../styles/theme.styl" lang="stylus"></style>

<style lang="stylus" scoped>
@require '../styles/wrapper.styl';

.timeline-wrapper {
  box-sizing: border-box;
  max-width: 740px;
  margin: 8rem auto 4rem;
  position: relative;
  list-style: none;

  .desc {
    color: $accentColor;
    font-size: 18px;
    margin-left: 10px;
  }

  &::after {
    content: ' ';
    position: absolute;
    top: 14px;
    left: 0;
    z-index: -1;
    margin-left: -2px;
    width: 4px;
    height: 100%;
  }

  .moudle {
    margin: 60px 0;
  }

  .header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    position: relative;

    .show {
      width: 0;
      height: 0;
    }
  }

  .show {
    width: 6px;
    height: 6px;
    border: 1px solid $accentColor;
    border-radius: 50%;
    margin-right: 20px;
    background: $accentColor;

    svg {
      position: absolute;
      top: 11px;
      left: -4px;
      fill: $accentColor;
    }
  }

  .year {
    color: var(--text-color);
    font-weight: 700;
    font-size: 20px;
  }

  .year-wrapper {
    padding-left: 0 !important;

    li {
      display: flex;
      padding: 10px 0 10px;
      list-style: none;
      border-bottom: 1px dashed var(--border-color);
      position: relative;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;

      &:hover {
        .date {
          color: $accentColor;
        }

        .title {
          color: $accentColor;
        }
      }

      &:nth-last-child(1) {
        .show {
          &::before {
            display: none;
          }
        }
      }

      .title {
        line-height: 30px;
        color: var(--text-color-sub);
        font-size: 16px;
        cursor: pointer;
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .timeline-wrapper {
    margin: 0 1.2rem;
  }
}
</style>
