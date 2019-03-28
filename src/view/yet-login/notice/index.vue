<template>
  <div class="notice">
    <sub-nav :navList=noticelist :flex='"center"'></sub-nav>
    <transition mode="out-in" name="slide-fade">
      <keep-alive>
      <router-view></router-view>
      </keep-alive>
    </transition>

  </div>
</template>

<script>
export default {
  name: "notice",
  data() {
    return {
      noticelist: [
        {
          title: "平台公告",
          path: "/notice/Platform"
        },
        {
          title: "系统消息",
          path: "/notice/system"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.notice {
  width: 100%;
  height: auto;
  .niticeTitle {
    width: 100%;
    height: 83px;
    background: rgba(243, 243, 243, 1);
    line-height: 83px;
    > li {
      float: left;
      width: 50%;
      font-size: 17px;
      font-family: MicrosoftYaHei-Bold;
      font-weight: bold;
      color: rgba(0, 0, 0, 1);
      &:nth-child(1) {
        text-align: right;
        padding-right: 81px;
      }
      &:nth-child(2) {
        padding-left: 81px;
      }
    }
    .active {
      font-size: 17px;
      font-family: MicrosoftYaHei-Bold;
      font-weight: bold;
      color: rgba(30, 90, 220, 1);
    }
  }
}
</style>
