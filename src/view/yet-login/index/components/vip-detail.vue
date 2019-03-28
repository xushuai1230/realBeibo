<template>
    <div class="vipDetail">
        <div>
            <div>
                <h3>资金概况</h3>
                <a @click="$router.push('zj-detail')">更多 ></a>
            </div>
            <div>
                <div>
                    <h3>本月</h3>
                    <h3>上月</h3>
                </div>
                <ul>
                    <li @click="zjTab(index)" :class="{zjList: item.show}" v-for="(item,index) in zjlist" :key="index">
                        <p>{{item.name}}</p>
                        <h3>{{item.thismonth}}</h3>
                        <h4>{{item.topmonth}}</h4>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <div>
                <h3>会员概况</h3>
                <a @click="$router.push('vip-detail')">更多 ></a>
            </div>
            <div>
                <ul>
                    <li @click="vipTab(index)" :class="{vipList: item.show}" v-for="(item,index) in hylist" :key="index">
                        <p>{{item.name}}</p>
                        <h3>{{item.thismonth}}</h3>
                        <h4>{{item.topmonth}}</h4>
                    </li>
                </ul>
            </div>
        </div>
        <foldLine :zjDta='zjdata' :vipData='hyData'></foldLine>
    </div>

</template>

<script>
import {
  newUserByHour_API,
  actUserByHour_API,
  bettingAmountByHour_API,
  basic_API
} from "@/api/homepage";
import foldLine from "./fold-line.vue";
export default {
  name: "vip-detail",
  data() {
    return {
      zjlist: [
        {
          name: "总存款额",
          thismonth: "0.00",
          topmonth: "0.00",
          show: true
        },
        {
          name: "存款人数",
          thismonth: "0",
          topmonth: "0",
          show: ""
        },
        {
          name: "总提款额",
          thismonth: "0.00",
          topmonth: "0.00",
          show: ""
        },
        {
          name: "提款人数",
          thismonth: "0",
          topmonth: "0",
          show: ""
        },
        {
          name: "总投注额",
          thismonth: "0.00",
          topmonth: "0.00",
          show: ""
        }
      ],
      hylist: [
        {
          name: "新会员数",
          thismonth: "0",
          topmonth: "0",
          show: true
        },
        {
          name: "活跃会员数",
          thismonth: "0",
          topmonth: "0",
          show: ""
        },
        {
          name: "待活跃会员数",
          thismonth: "0",
          topmonth: "0",
          show: ""
        },
        {
          name: "有效会员数",
          thismonth: "0",
          topmonth: "0",
          show: ""
        },
        {
          name: "登录会员数",
          thismonth: "0",
          topmonth: "0",
          show: ""
        }
      ],
      hyData: [],
      zjdata: []
    };
  },
  components: {
    foldLine
  },
  mounted() {
    this.basic();
  },
  methods: {
    // 基本信息
    basic() {
      basic_API({}).then(res => {
        console.log("基本信息", res);
        let basicInfo = res.data;
        this.zjlist[0].thismonth = basicInfo.rechargeSumMoney[0];
        this.zjlist[0].topmonth = basicInfo.rechargeSumMoney[1];
        this.zjlist[1].thismonth = basicInfo.rechargeUniqueUser[0];
        this.zjlist[1].topmonth = basicInfo.rechargeUniqueUser[1];
        this.zjlist[2].thismonth = basicInfo.withdrawSumMoney[0];
        this.zjlist[2].topmonth = basicInfo.withdrawSumMoney[1];
        this.zjlist[3].thismonth = basicInfo.withdrawUniqueUser[0];
        this.zjlist[3].topmonth = basicInfo.withdrawUniqueUser[1];
        this.zjlist[4].thismonth = basicInfo.bettingSumMoney[0];
        this.zjlist[4].topmonth = basicInfo.bettingSumMoney[1];

        this.hylist[0].thismonth = basicInfo.newUserCnt[0];
        this.hylist[0].topmonth = basicInfo.newUserCnt[1];

        this.hylist[1].thismonth = basicInfo.activeUserCnt[0];
        this.hylist[1].topmonth = basicInfo.activeUserCnt[1];
        this.hylist[2].thismonth = basicInfo.promoSumMoney[0];
        this.hylist[2].topmonth = basicInfo.promoSumMoney[1];
        this.hylist[3].thismonth = basicInfo.promoUniqueUser[0];
        this.hylist[3].topmonth = basicInfo.promoUniqueUser[1];
        this.hylist[4].thismonth = basicInfo.loginUserCnt[0];
        this.hylist[4].topmonth = basicInfo.loginUserCnt[1];
      });
    },
    zjTab(index) {
      for (let i = 0; i < this.zjlist.length; i++) {
        this.zjlist[i].show = false;
      }
      this.zjlist[index].show = true;
      if (index === 0) {
      } else if (index === 1) {
      } else if (index === 2) {
      } else if (index === 3) {
      } else if (index === 4) {
        bettingAmountByHour_API({}).then(res => {
          console.log("总投注额", res);
          this.zjdata = res.data.today;
          for(let item in res.data.today) {
              console.log(item)
          }
        });
      }
    },
    vipTab(index) {
      for (let i = 0; i < this.hylist.length; i++) {
        this.hylist[i].show = false;
      }
      this.hylist[index].show = true;
      if (index === 0) {
        newUserByHour_API({}).then(res => {
          console.log("新注册会员", res);
          this.hyData = res.data.today;
        });
      } else if (index === 1) {
        actUserByHour_API({}).then(res => {
          console.log("活跃会员", res);
          this.hyData = res.data.today;
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.vipDetail {
  width: 100%;
  height: 640px;
  margin-top: 37px;

  > div {
    &:nth-child(1) {
      width: 53.3%;
      height: 240px;
      float: left;
      margin-right: 1.7%;

      > div {
        &:nth-child(1) {
          width: 100%;
          height: 37px;
          margin-bottom: 14px;

          > h3 {
            font-size: 28px;
            font-family: MicrosoftYaHei-Bold;
            font-weight: bold;
            color: rgba(32, 33, 36, 1);
            float: left;
          }

          > a {
            float: right;
            width: 98px;
            height: 36px;
            border-radius: 9px;
            border: 1px solid rgba(234, 234, 234, 1);
            text-align: center;
            line-height: 36px;
            font-size: 17px;
            font-family: MicrosoftYaHei;
            color: rgba(0, 0, 0, 1);

            &:hover {
              background: rgba(30, 90, 220, 1);
              color: rgba(255, 255, 255, 1);
            }
          }
        }

        &:nth-child(2) {
          > div {
            width: 12%;
            height: 189px;
            float: left;
            text-align: center;

            > h3 {
              font-size: 14px;
              font-family: MicrosoftYaHei-Bold;
              font-weight: bold;
              color: rgba(0, 0, 0, 1);

              &:first-child {
                margin-top: 88px;
              }

              &:last-child {
                margin-top: 30px;
              }
            }
          }

          > ul {
            width: 88%;
            height: 189px;
            float: left;

            > li {
              width: 20%;
              height: 100%;
              float: left;
              border: 1px solid rgba(234, 234, 234, 1);
              padding: 36px 0 34px 0;
              text-align: center;

              > p {
                font-size: 14px;
                font-family: MicrosoftYaHei;
                color: rgba(0, 0, 0, 1);
                margin-bottom: 31px;
              }

              > h3 {
                font-size: 17px;
                font-family: MicrosoftYaHei-Bold;
                font-weight: bold;
                color: rgba(0, 0, 0, 1);
                margin-bottom: 24px;
              }

              h4 {
                font-size: 17px;
                font-family: MicrosoftYaHei-Bold;
                font-weight: bold;
                color: rgba(0, 0, 0, 0.4);
              }
            }

            .zjList {
              background: rgba(30, 90, 220, 1);
              box-shadow: 0px 12px 36px 0px rgba(0, 0, 0, 0.18);
              border-radius: 7px;

              > p {
                font-size: 14px;
                font-family: MicrosoftYaHei;
                color: rgba(255, 255, 255, 1);
              }

              > h3 {
                font-size: 17px;
                font-family: MicrosoftYaHei-Bold;
                font-weight: bold;
                color: rgba(255, 255, 255, 1);
              }

              h4 {
                font-size: 17px;
                font-family: MicrosoftYaHei-Bold;
                font-weight: bold;
                color: rgba(255, 255, 255, 0.4);
              }
            }
          }
        }
      }
    }

    &:nth-child(2) {
      width: 45%;
      height: 240px;
      float: left;

      > div {
        &:nth-child(1) {
          width: 100%;
          height: 37px;
          margin-bottom: 14px;

          > h3 {
            font-size: 28px;
            font-family: MicrosoftYaHei-Bold;
            font-weight: bold;
            color: rgba(32, 33, 36, 1);
            float: left;
          }

          > a {
            float: right;
            width: 98px;
            height: 36px;
            border-radius: 9px;
            border: 1px solid rgba(234, 234, 234, 1);
            text-align: center;
            line-height: 36px;
            font-size: 17px;
            font-family: MicrosoftYaHei;
            color: rgba(0, 0, 0, 1);

            &:hover {
              background: rgba(30, 90, 220, 1);
              color: rgba(255, 255, 255, 1);
            }
          }
        }

        &:nth-child(2) {
          > ul {
            width: 100%;
            height: 189px;
            float: left;

            > li {
              width: 20%;
              height: 100%;
              float: left;
              border: 1px solid rgba(234, 234, 234, 1);
              padding: 36px 0 34px 0;
              text-align: center;

              > p {
                font-size: 14px;
                font-family: MicrosoftYaHei;
                color: rgba(0, 0, 0, 1);
                margin-bottom: 31px;
              }

              > h3 {
                font-size: 17px;
                font-family: MicrosoftYaHei-Bold;
                font-weight: bold;
                color: rgba(0, 0, 0, 1);
                margin-bottom: 24px;
              }

              h4 {
                font-size: 17px;
                font-family: MicrosoftYaHei-Bold;
                font-weight: bold;
                color: rgba(0, 0, 0, 0.4);
              }
            }
            .vipList {
              background: rgba(30, 90, 220, 1);
              box-shadow: 0px 12px 36px 0px rgba(0, 0, 0, 0.18);
              border-radius: 7px;

              > p {
                font-size: 14px;
                font-family: MicrosoftYaHei;
                color: rgba(255, 255, 255, 1);
              }

              > h3 {
                font-size: 17px;
                font-family: MicrosoftYaHei-Bold;
                font-weight: bold;
                color: rgba(255, 255, 255, 1);
              }

              h4 {
                font-size: 17px;
                font-family: MicrosoftYaHei-Bold;
                font-weight: bold;
                color: rgba(255, 255, 255, 0.4);
              }
            }
          }
        }
      }
    }
  }
}
</style>
