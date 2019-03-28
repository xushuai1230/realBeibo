<template>
    <div class="report">
        <ul class="reportTab">
            <router-link tag="li" :to= item.path exact-active-class="active" v-for="(item,index) in reportTab" :key="index">
                {{item.title}}
            </router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      reportTab: [
        {
          title: "财务总报表",
          path: "/reportform/finance"
        },
        {
          title: "游戏输赢报表",
          path: "/reportform/gameWinlose"
        },
        {
          title: "存提明细报表",
          path: "/reportform/depositForward"
        },
        {
          title: "红利返水报表",
          path: "/reportform/dividend"
        },
        {
          title: "佣金报表",
          path: "/reportform/brokerage"
        },
        {
          title: "上分记录",
          path: "/reportform/topscore"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.report {
  width: 100%;
  height: auto;
  .reportTab {
    width: 100%;
    height: 83px;
    background: rgba(243, 243, 243, 1);
    padding: 0 50px;
    line-height: 83px;
    > li {
      float: left;
      width: 16.6%;
      font-size: 17px;
      font-family: MicrosoftYaHei-Bold;
      font-weight: bold;
      color: rgba(0, 0, 0, 1);
      text-align: center;
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

