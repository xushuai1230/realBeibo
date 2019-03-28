<template>
    <div class="finance">
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
          <li @click="finaceTab(index)" :class="{active:item.show}" v-for="(item,index) in financelist" :key="index">
            {{item.title}}
          </li>
        </ul>
      </div>
      <div class="financeTable">
        <el-table
          :data="tableData6"
          border
          show-summary
          style="width: 100%">
          <el-table-column
            prop="id"
            label="日期">
          </el-table-column>
          <el-table-column
            prop="name"
            label="新注册会员">
          </el-table-column>
          <el-table-column
            prop="amount1"
            label="活跃会员">
          </el-table-column>
          <el-table-column
            prop="amount2"
            sortable
            label="总投资金额">
          </el-table-column>
          <el-table-column
            prop="amount3"
            sortable
            label="总盈利">
          </el-table-column>
           <el-table-column
            prop="amount3"
            sortable
            label="净盈利">
          </el-table-column>
        </el-table>
        <table>
          <tr>
            <td>所有页汇总</td>
            <td>222</td>
            <td>3333</td>
            <td>44444</td>
            <td>5555</td>
            <td>6666</td>
          </tr>
        </table>
      </div>
      <div class="finance-pagetion">
        <tips>
          <span class="finance-pagetion--black">红色负数代表会员盈利，绿色正数代表公司盈利</span>
        </tips>
        <page></page>
      </div>
    </div>
</template>

<script>
import tips from "../../components/tips.vue";
import "./finance.scss";
export default {
  name: "finance",
  data() {
    return {
      dateSection: "",
      financelist: [
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
    finaceTab(index) {
      for (let i = 0; i < this.financelist.length; i++) {
        this.financelist[i].show = false;
      }
      this.financelist[index].show = true;
    }
  }
};
</script>

<style lang="scss" scoped>
  .finance-pagetion{
    display:flex;
    justify-content:space-between;
    padding-bottom:25px;
  }

  .finance-pagetion--black{
    color:black;
  }
</style>
