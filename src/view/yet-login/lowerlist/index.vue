<template>
    <div class="sublist">
        <div class="subTab">
            <router-link tag="li" :to= item.path active-class="active" v-for="(item,index) in sublist" :key="index">
                {{item.title}}({{item.num}})
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "sublist",
  data() {
    return {
      sublist: [
        {
          title: "下级会员",
          num:'20',
          path: "/lowerlist/sub-member"
        },
        {
          title: "下级代理",
          num:'30',
          path: "/lowerlist/lower-agent"
        },
        {
          title: "管理下级代理账号",
          num:'49',
          path: "/lowerlist/man-account"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.sublist {
  width: 100%;
  height: auto;
  .subTab {
    width: 1519px;
    height: 83px;
    background: rgba(243, 243, 243, 1);
    padding: 0 51px;
    line-height: 83px;
    li {
      float: left;
      width: 237px;
      height: 47px;
      text-align: center;
      font-size: 17px;
      font-family: MicrosoftYaHei-Bold;
      font-weight: bold;
      color: rgba(0, 0, 0, 1);
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
