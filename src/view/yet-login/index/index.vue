<template>
    <div class="home">
        <ul class="nav">
            <router-link tag="li" :to='item.path' active-class="active" v-for="(item,index) in homenav" :key="index">
                {{item.title}}
            </router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      homenav: [
        {
          title: "佣金概况",
          path:'/index/commission',
        },
        {
          title: "实时统计",
           path:'/index/statistics',
        },
        {
          title: "注册率分析",
           path:'/index/registerrate',
        },
        {
          title: "留存率分析",
           path:'/index/retain',
        }
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: auto;
  .nav {
    width: 100%;
    height: 79px;
    background: rgba(243, 243, 243, 1);
    line-height: 79px;
    padding: 0 48px;

    li {
      float: left;
      width: 16%;
      text-align: center;
      font-size: 16px;
      font-family: MicrosoftYaHei-Bold;
      font-weight: bold;
      color: rgba(0, 0, 0, 1);
      cursor: pointer;
    }

    .active {
      font-size: 16px;
      font-family: MicrosoftYaHei-Bold;
      font-weight: bold;
      color: rgba(30, 90, 220, 1);
    }
  }

  .content {
    width: 100%;
    height: auto;
    padding: 0 45px;
  }
}
</style>

