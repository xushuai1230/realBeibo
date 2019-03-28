<template>
    <div class="withdraw">
        <ul>
            <router-link tag="li" :to= item.path exact-active-class="active" v-for="(item,index) in list" :key="index">
                {{item.title}}
            </router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "withdraw",
  data() {
    return {
      list: [
        {
          title: "提现",
          path: "/withdraw/index"
        },
        {
          title: "资金明细",
          path: "/withdraw/capital"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.withdraw {
  width: 100%;
  height: auto;
  > ul {
    width: 100%;
    height: 83px;
    background: rgba(243, 243, 243, 1);
    > li {
      cursor: pointer;
      width: 50%;
      float: left;
      line-height: 83px;
      font-size: 17px;
      font-family: MicrosoftYaHei-Bold;
      font-weight: bold;
      color: rgba(0, 0, 0, 1);
      &:first-child {
        text-align: right;
        padding-right: 91px;
      }
      &:last-child {
        padding-left: 91px;
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

