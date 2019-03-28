<template>
    <div class="topscore">
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
            <div class="vipUser">
                <span>会员账户:</span>
                <el-input v-model="input" placeholder="输入"></el-input>
            </div>
            <el-row>
            <el-button type="primary">查询</el-button>
            </el-row>
        </div>
        <div class="topscoreTable">
             <el-table
                :data="tableData6"
                border
                show-summary
                style="width: 100%">
                <el-table-column
                    prop="id"
                    label="交易编号">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="会员账户">
                </el-table-column>
                <el-table-column
                    prop="amount1"
                     sortable
                    label="上分金额">
                </el-table-column>
                <el-table-column
                    prop="amount2"
                    sortable
                    label="剩余上分金额">
                </el-table-column>
                <el-table-column
                    prop="amount3"
                    sortable
                    label="时间">
                </el-table-column>
                </el-table>
                <table>
                <tr>
                    <td>汇总</td>
                    <td>222</td>
                    <td>3333</td>
                    <td>44444</td>
                    <td>5555</td>
                </tr>
            </table>
        </div>
        <div class="topscore-pagetion">
          <tips>
            <span class="topscore-pagetion--black">红色负数代表会员盈利，绿色正数代表公司盈利</span>
          </tips>
          <page></page>
        </div>
    </div>
</template>

<script>
import tips from "../../components/tips.vue";
import './topscore.scss'
export default {
    name:'topscore',
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
};
</script>

<style lang="scss" scoped>
  .topscore-pagetion{
    display:flex;
    justify-content:space-between;
    padding-bottom:25px;
  }

  .topscore-pagetion--black{
    color:black;
  }
</style>