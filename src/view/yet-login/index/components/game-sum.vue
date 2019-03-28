<template>
    <div class="gameSum">
        <div class="gameTitle">
            <h3>本月游戏数据汇总</h3>
            <p v-if="$route.path === '/index/statistics'">
                <a :class="{date: dateShow}" @click="dateShow = true, tableData = tableData1">昨日</a>
                <a :class="{date: !dateShow}" @click="dateShow = false">今日</a>
            </p>
        </div>
        <table class="gameTable">
          <tr>
             <th>游戏名称</th>
              <th v-for="(item,index) in tableData" :key="index">{{item.game}}</th>
          </tr>
                <tr>
                  <td>亏盈</td>
                  <td :class="{active: item.win > 0 }" v-for="(item,index) in tableData" :key="index">{{item.win}}</td>
                 <tr>
                  <td>有效投注</td>
                  <td :class="{active: item.amount > 0 }" v-for="(item,index) in tableData" :key="index">{{item.amount}}</td>
                </tr>
        </table>
        <profitLose></profitLose>
    </div>
</template>

<script>
import profitLose from "./profit-loss";
import { realtime_game_API } from "@/api/homepage";
export default {
  name: "game-sum",
  data() {
    return {
      tableData: [],
      dateShow: false
    };
  },
  mounted() {
    console.log(this.$route.path);
    this.realtime_game();
  },
  components: {
    profitLose
  },
  methods: {
    realtime_game() {
      realtime_game_API({})
        .then(res => {
          console.log("游戏盈亏", res);
          this.tableData = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.gameSum {
  height: 798px;
  width: 100%;

  > .gameTitle {
    width: 100%;
    height: 47px;
    margin-bottom: 18px;

    > h3 {
      width: 50%;
      font-size: 28px;
      font-family: MicrosoftYaHei-Bold;
      font-weight: bold;
      color: rgba(32, 33, 36, 1);
      float: left;
    }

    > p {
      width: 50%;
      float: left;
      margin-top: -5px;

      > a {
        float: right;
        text-align: center;
        line-height: 47px;
        font-size: 14px;
        font-family: MicrosoftYaHei-Bold;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.4);

        &:nth-child(1) {
          width: 85px;
          height: 47px;
          border-radius: 0px 9px 9px 0px;
          border: 1px solid RGBA(0, 0, 0, 0.4);
        }

        &:nth-child(2) {
          width: 85px;
          height: 47px;
          border-radius: 9px 0px 0px 9px;
          border: 1px solid RGBA(0, 0, 0, 0.4);
        }
      }

      .date {
        background: rgba(32, 33, 36, 1);
        font-size: 14px;
        font-family: MicrosoftYaHei-Bold;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
  .gameTable {
    width: 100%;
    height: 174px;
    @include box-shadow(0px, 7px, 36px, 0px, rgba(0, 0, 0, 0.05));
    @include border-radius(7px);
    margin-bottom: 94px;
    > tr {
      &:nth-child(1) {
        width: 1422px;
        height: 57px;
        border-radius: 6px 6px 0px 0px;
        line-height: 57px;
        > th {
          background: rgba(251, 251, 251, 1);
          border: 1px solid RGBA(234, 234, 234, 1);
        }
      }
      &:nth-child(2) {
        width: 1422px;
        height: 57px;
        border-radius: 6px 6px 0px 0px;
        line-height: 57px;
        > td {
          background: rgba(251, 251, 251, 1);
          border: 1px solid RGBA(234, 234, 234, 1);
          text-align: center;
          font-size: 17px;
          font-family: MicrosoftYaHei-Bold;
          font-weight: bold;
          color: rgba(217, 17, 47, 1);
          &:first-child {
            font-size: 17px;
            font-family: MicrosoftYaHei;
            font-weight: normal;
            color: rgba(32, 33, 36, 1);
          }
        }
        .active {
          font-size: 17px;
          font-family: MicrosoftYaHei-Bold;
          font-weight: bold;
          color: rgba(30, 90, 220, 1);
        }
      }
      &:nth-child(3) {
        width: 1422px;
        height: 57px;
        border-radius: 6px 6px 0px 0px;
        line-height: 57px;
        > td {
          background: rgba(251, 251, 251, 1);
          border: 1px solid RGBA(234, 234, 234, 1);
          text-align: center;
          font-size: 17px;
          font-family: MicrosoftYaHei-Bold;
          font-weight: bold;
          color: rgba(217, 17, 47, 1);
          &:first-child {
            font-size: 17px;
            font-weight: normal;
            font-family: MicrosoftYaHei;
            color: rgba(32, 33, 36, 1);
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
  }
}
</style>
