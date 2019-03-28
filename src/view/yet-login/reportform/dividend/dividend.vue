<template>
    <div class="dividend">
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
          <li @click="depositTab(index)" :class="{active:item.show}" v-for="(item,index) in depositlist" :key="index">
            {{item.title}}
          </li>
        </ul>
      </div>
      <div class="dividendTable">
           <el-table
          :data="tableData6"
          border
          show-summary
          style="width: 100%"
          @cell-mouse-enter= "aaaa">
          <el-table-column
            prop="id"
            label="日期">
          </el-table-column>
          <el-table-column
            prop="name"
            label="红利人数">
          </el-table-column>
          <el-table-column
            prop="amount1"
            label="红利总额">
          </el-table-column>
          <el-table-column
            prop="amount2"
            label="返水人数">
          </el-table-column>
          <el-table-column
            prop="amount3"
            label="提返水总额数">
          </el-table-column>
        </el-table>
      </div>
      <div class="dividend-pagetion">
        <tips>
          <span class="dividend-pagetion--black">红色负数代表会员盈利，绿色正数代表公司盈利</span>
        </tips>
        <page></page>
      </div>
    </div>
</template>

<script>
import './dividend.scss'
import tips from "../../components/tips.vue";
export default {
  name: "dividend",
  data() {
    return {
      depositlist: [
        {
          title: "本周",
          show: "true"
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
      tableData6: [{
          id: '12987122',
          name: '3435',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '3435',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '3435',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '3435',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '3435',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
    };
  },
   components: {
    tips
  },
  methods: {
    depositTab(index) {
      for (let i = 0; i < this.depositlist.length; i++) {
        this.depositlist[i].show = false;
      }
      this.depositlist[index].show = true;
    },
    aaaa(val,y,f,s) {
        console.log('111',val,y,f,s)
    }
  }
};
</script>

<style lang="scss" scoped>
  .dividend-pagetion{
    display:flex;
    justify-content:space-between;
    padding-bottom:25px;
  }

  .dividend-pagetion--black{
    color:black;
  }
</style>