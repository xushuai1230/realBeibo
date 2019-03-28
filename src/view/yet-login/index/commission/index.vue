<template>
  <div class="yjSurvey">
    <div class="progress">
      <li>
        <h4>剩余 {{bydate[3]}} 天</h4>
        <span>本期数据统计截止 {{bydate[0]}}</span>
      </li>
      <li ref="progressWidth">
        <div :style="{width: bydate[1]/bydate[2]*progressWidth + 'px'}"></div>
      </li>
    </div>
    <addVip></addVip>
    <yjSum></yjSum>
    <vipDetail></vipDetail>
    <gameSum></gameSum>
  </div>
</template>

<script>
import addVip from "./add-vip.vue";
import yjSum from "./yj-sum.vue";
import vipDetail from "../components/vip-detail.vue";
import gameSum from "../components/game-sum.vue";
export default {
  name: "yjSurvey",
  data() {
    return {
      progressWidth: "",
      bydate:''
    };
  },
  components: {
    addVip,
    yjSum,
    vipDetail,
    gameSum
  },
  watch: {
    //  progressWidth:function(value,old) {
    //     console.log(value)
    //     console.log(old)
    //  }
  },
  mounted() {
    var that = this;
    this.progressWidth = this.$refs.progressWidth.clientWidth;
    window.onresize = () => {
      return (() => {
        that.progressWidth = that.$refs.progressWidth.clientWidth;
      })();
    };
    this.bydate = this.$common.getNewDate()
  },
  methods: {}
};
</script>
<style lang="scss">
@include b(yjSurvey) {
  width: 100%;
  height: auto;
  padding: 0 45px;

  .progress {
    width: 100%;
    height: 56px;
    margin-top: 34px;
    margin-bottom: 45px;

    li {
      width: 100%;

      &:nth-child(1) {
        height: 18px;
        margin-bottom: 9px;

        > h4 {
          width: 50%;
          height: 18px;
          font-size: 14px;
          float: left;
          font-family: MicrosoftYaHei-Bold;
          font-weight: bold;
          color: rgba(32, 33, 36, 1);
          line-height: 18px;
        }

        > span {
          float: left;
          width: 50%;
          height: 18px;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(32, 33, 36, 1);
          line-height: 18px;
          text-align: right;
        }
      }

      &:nth-child(2) {
        width: 100%;
        height: 26px;
        background: rgba(243, 243, 243, 1);
        border-radius: 4px;
        padding: 4px;
        > div {
          height: 18px;
          background: url(./img/jdTiao.png);
          border-radius: 3px;
        }
      }
    }
  }
}
</style>
