<template>
    <div class="brokerage">
        <div class="brokerageTable">
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
        <div class="brokerage-pagetion">
          <tips class="brokerage-pagetion__tip">
            <span class="brokerage-pagetion--black">红色负数代表会员盈利，绿色正数代表公司盈利 | 【总输赢】投注金额 - 派彩金额 <br> 【净输赢】总输赢 - 红利 - 返水 - 平台费+累计上月 | 【实际发放】净输赢*佣金比例+下级代理佣金</span>
          </tips>
          <page></page>
        </div>
    </div>
</template>

<script>
  import tips from "../../components/tips.vue";
  import './brokerage.scss'
  export default {
      name:'brokerage',
      data() {
        return {
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
        }
    },
    components:{
        tips
    }
  }
</script>

<style lang="scss" scoped>
  .brokerage-pagetion{
    display:flex;
    justify-content:space-between;
    padding-bottom:25px;
  }
  .brokerage-pagetion__tip .el-warning{
    align-items:flex-start;
  }
  .brokerage-pagetion--black{
    color:black;
  }
</style>