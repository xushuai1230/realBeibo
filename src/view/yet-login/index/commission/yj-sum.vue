<template>
    <div class="yjSum">
        <h3>佣金概况</h3>
        <div>
            <h4>本月</h4>
            <h4>上月</h4>
        </div>
        <div>
            <ul>
                <li>
                    <p>红利支出</p>
                    <h4>{{thisMonthlist['cost']&&thisMonthlist['cost']['bonus']}}</h4>
                    <span>{{thisMonthlist['cost']&&lastMonthList['cost']['bonus']}}</span>
                </li>
                 <li>
                    <p>返水</p>
                    <h4>{{thisMonthlist.cost&&thisMonthlist.cost.rebeat}}</h4>
                    <span>{{thisMonthlist.cost&&lastMonthList.cost.rebeat}}</span>
                </li>
                 <li>
                    <p>平台费</p>
                    <h4>{{thisMonthlist.cost&&thisMonthlist.cost.platfee}}</h4>
                    <span>{{thisMonthlist.cost&&lastMonthList.cost.platfee}}</span>
                </li>
            </ul>
            <p>支出费用</p>
        </div>
        <div>
            <ul>
                <li>
                    <p>总盈利</p>
                    <h4>{{thisMonthlist.totalWin}}</h4>
                    <span>{{lastMonthList.totalWin}}</span>
                </li>
                  <li>
                    <p>净盈利</p>
                    <h4>{{thisMonthlist.netWin}}</h4>
                    <span>{{lastMonthList.netWin}}</span>
                </li>
                  <li>
                    <p>上月累计</p>
                    <h4>{{thisMonthlist.lastAmount}}</h4>
                    <span>{{lastMonthList.lastAmount}}</span>
                </li>
            </ul>
            <p>净盈利 = 总盈利 - 支出费用-平台费 +上月累计</p>
        </div>
    </div>
</template>

<script>
import { commission_API } from "@/api/homepage";
export default {
  name: "yj-sum",
  data() {
    return {
      thisMonthlist: '',
      lastMonthList: ''
    };
  },
  mounted() {
    this.commission();
  },
  methods: {
    commission() {
      commission_API({}).then(res => {
        this.thisMonthlist = res.data.thisMonth;
        this.lastMonthList = res.data.lastMonth;
        console.log("佣金概况", res);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.yjSum {
  width: 100%;
  height: 231px;
  margin-bottom: 58px;

  > h3 {
    width: 100%;
    height: 37px;
    font-size: 28px;
    font-family: MicrosoftYaHei-Bold;
    font-weight: bold;
    color: rgba(32, 33, 36, 1);
    line-height: 37px;
    margin-bottom: 20px;
  }

  > div {
    height: 174px;

    &:nth-child(2) {
      width: 8%;
      height: 174px;
      float: left;
      text-align: center;

      > h4 {
        font-size: 14px;
        font-family: MicrosoftYaHei-Bold;
        font-weight: bold;
        color: rgba(32, 33, 36, 1);

        &:first-child {
          margin-top: 57px;
        }

        &:last-child {
          margin-top: 26px;
        }
      }
    }

    &:nth-child(3) {
      width: 41.2%;
      height: 174px;
      float: left;
      margin-right: 1.8%;
      background: rgba(255, 255, 255, 1);
      @include box-shadow(0px, 7px, 36p, x 0px, rgba(0, 0, 0, 0.05));
      @include border-radius(7px);
      > ul {
        width: 100%;
        height: 139px;
        padding: 17px 0 11px 0;

        > li {
          float: left;
          min-width: 29.3%;
          padding: 0 9.4% 0 9%;
          text-align: center;

          &:nth-child(2) {
            border-left: 1px solid rgba(234, 234, 234, 1);
            border-right: 1px solid rgba(234, 234, 234, 1);
          }

          > p {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(32, 33, 36, 1);
            margin-bottom: 19px;
          }

          > h4 {
            font-size: 17px;
            font-family: MicrosoftYaHei-Bold;
            font-weight: bold;
            color: rgba(32, 33, 36, 1);
            margin-bottom: 26px;
          }

          > span {
            font-size: 17px;
            font-family: MicrosoftYaHei-Bold;
            font-weight: bold;
            color: rgba(32, 33, 36, 0.4);
          }
        }
      }

      > p {
        width: 79%;
        padding: 6px 0;
        margin-left: 10.7%;
        border-top: 1px solid rgba(234, 234, 234, 1);
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: rgba(32, 33, 36, 0.4);
        text-align: center;
      }
    }

    &:nth-child(4) {
      width: 49%;
      height: 174px;
      float: left;
      background: rgba(255, 255, 255, 1);
      @include box-shadow(0px, 7px, 36p, x 0px, rgba(0, 0, 0, 0.05));
      @include border-radius(7px);
      > ul {
        width: 100%;
        height: 139px;
        padding: 17px 0 11px 0;

        > li {
          float: left;
          min-width: 31.7%;
          padding: 0 9.6% 0 9.2%;
          text-align: center;

          &:nth-child(1) {
            margin-left: 3%;
          }

          &:nth-child(2) {
            border-left: 1px solid rgba(234, 234, 234, 1);
            border-right: 1px solid rgba(234, 234, 234, 1);
          }

          > p {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(32, 33, 36, 1);
            margin-bottom: 19px;
          }

          > h4 {
            font-size: 17px;
            font-family: MicrosoftYaHei-Bold;
            font-weight: bold;
            color: rgba(32, 33, 36, 1);
            margin-bottom: 26px;
          }

          > span {
            font-size: 17px;
            font-family: MicrosoftYaHei-Bold;
            font-weight: bold;
            color: rgba(32, 33, 36, 0.4);
          }
        }
      }

      > p {
        width: 79%;
        padding: 6px 0;
        margin-left: 10.7%;
        border-top: 1px solid rgba(234, 234, 234, 1);
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: rgba(32, 33, 36, 0.4);
        text-align: center;
      }
    }
  }
}
</style>
