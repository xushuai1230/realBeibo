<template>
    <div class="gameWinlose">
        <div class="title">
            <span>查询时间:</span>
            <div class="block">
            <el-date-picker
                v-model="dateSection"
                type="daterange"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
            </el-date-picker>
            </div>
            <el-row>
            <el-button type="primary">查询</el-button>
            </el-row>
            <ul class="titlelist">
            <li @click="gamelistTab(index)" :class="{active:item.show}" v-for="(item,index) in gamelist" :key="index">
                {{item.title}}
            </li>
            </ul>
        </div>
        <div class="gameTable">
            <el-table
                :data="tableData6"
                border
                show-summary
                style="width: 100%">
                <el-table-column
                    prop="id"
                    label="游戏名称">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="投注人数">
                </el-table-column>
                <el-table-column
                    prop="amount1"
                    label="投注金额">
                </el-table-column>
                <el-table-column
                    prop="amount2"
                    label="派彩金额">
                </el-table-column>
                <el-table-column
                    prop="amount3"
                    label="有效投注金额">
                </el-table-column>
                <el-table-column
                    prop="amount3"
                    label="总盈利">
                </el-table-column>
            </el-table>
        </div>
        <div class="game-winlose-pagetion">
          <tips>
            <span class="game-winlose-pagetion--black">红色负数代表会员盈利，绿色正数代表公司盈利</span>
          </tips>
          <page></page>
        </div>
    </div>
</template>

<script>
import tips from "../../components/tips.vue";
import "./gameWinlose.scss";
export default {
  name: "game-win-lose",
  data() {
    return {
      gamelist: [
        {
          title: "今日",
          show: "true"
        },
        {
          title: "昨日",
          show: ""
        },
        {
          title: "本周",
          show: ""
        },
        {
          title: "上周",
          show: ""
        },
        {
          title: "本月",
          show: ""
        },
        {
          title: "上月",
          show: ""
        }
      ],
      tableData6: [
        {
          id: "12987324324122",
          name: "3435",
          amount1: "234",
          amount2: "3.2",
          amount3: 10
        },
        {
          id: "12987123",
          name: "3435",
          amount1: "165",
          amount2: "4.43",
          amount3: 12
        },
        {
          id: "12987124",
          name: "3435",
          amount1: "324",
          amount2: "1.9",
          amount3: 9
        },
        {
          id: "12987125",
          name: "3435",
          amount1: "621",
          amount2: "2.2",
          amount3: 17
        },
        {
          id: "12987126",
          name: "3435",
          amount1: "539",
          amount2: "4.1",
          amount3: 15
        }
      ]
    };
  },
  components: {
    tips
  },
  methods: {
    gamelistTab(index) {
      for (let i = 0; i < this.gamelist.length; i++) {
        this.gamelist[i].show = false;
      }
      this.gamelist[index].show = true;
    }
  }
};
</script>

<style lang="scss" scoped>
  .game-winlose-pagetion{
    display:flex;
    justify-content:space-between;
    padding-bottom:25px;
  }

  .game-winlose-pagetion--black{
    color:black;
  }
</style>
