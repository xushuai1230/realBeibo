<template>
<div class="vipTable">

     <div class="table">
             <el-table
                :data="tableData6"
                border
                show-summary
                style="width: 100%">
                <el-table-column
                prop="date"
                label="注册时间">
                </el-table-column>
                <el-table-column
                prop="user"
                label="会员账户">
                 <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span @click="aaa(scope.$index, scope.row)" style="margin-left: 10px">{{ scope.row.user }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="money"
                label="存款金额"
                 sortable>
                </el-table-column>
                <el-table-column
                prop="withdrawal"
                 sortable
                label="提款金额">
                </el-table-column>
                <el-table-column
                prop="effectiveBet"
                sortable
                label="有效投注额">
                </el-table-column>
                <el-table-column
                prop="totalAmount"
                sortable
                label="投注总额">
                </el-table-column>
                <el-table-column
                prop="companyWins"
                sortable
                label="公司输赢">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <a
                        @click="handleEdit(scope.$index, scope.row)">查看详情</a>
                        <a
                        @click="handleDelete(scope.$index, scope.row)">上分</a>
                    </template>
                </el-table-column>
            </el-table>
            <vipDialog ref="dialog" v-if="$store.state.vipDetail"></vipDialog>
            <table class="total"> 
                <tr>
                    <td>1</td>
                    <td></td>
                    <td>3</td>
                    <td>4</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td></td>
                </tr>
            </table>
        </div>
        <div class="vip-footer">
          <el-warning class="vip-footer__tips">
            <span class="vip-footer__tips--black">红色负数代表会员盈利，绿色正数代表公司盈利</span>
          </el-warning>
          <page></page>
        </div>
</div>
</template>

<script>
import "./vip-table.scss";
import tips from './tips.vue';
import vipDialog from '../index/components/vip-dialog';
export default {
  name: "vip-table",
  data() {
    return {
      tableData6: [
        {
          date: "2018.09.29",
          user: "CZ23489023",
          money: "1010.00",
          withdrawal: "1000.00",
          effectiveBet: "1650.00",
          totalAmount: "4434.00",
          companyWins: "1200.00"
        },
        {
          date: "2018.09.29",
          user: "CZ23489023",
          money: "1010.00",
          withdrawal: "1000.00",
          effectiveBet: "1650.00",
          totalAmount: "4434.00",
          companyWins: "1200.00"
        },
        {
          date: "2018.09.29",
          user: "CZ23489023",
          money: "1010.00",
          withdrawal: "1000.00",
          effectiveBet: "1650.00",
          totalAmount: "4434.00",
          companyWins: "1200.00"
        },
        {
          date: "2018.09.29",
          user: "CZ23489023",
          money: "1010.00",
          withdrawal: "1000.00",
          effectiveBet: "1650.00",
          totalAmount: "4434.00",
          companyWins: "1200.00"
        },
        {
          date: "2018.09.29",
          user: "CZ23489023",
          money: "1010.00",
          withdrawal: "1000.00",
          effectiveBet: "1650.00",
          totalAmount: "4434.00",
          companyWins: "1200.00"
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      this.$store.commit("VIP_DETAIL", { vipDetail: true });
    },
    handleDelete(index, row) {
      this.$store.commit("VIP_DETAIL", { vipDetail: true });
    }
  },
  components: {
    vipDialog,
    tips
  }
};
</script>

<style lang="scss" scoped>
  @include b(vipTable) {
    
  }
  @include b(vip-footer) {
    display:flex;
    justify-content:space-between;
    align-content:center;
    padding-bottom:25px;

    @include e(tips) {
      @include m(black) {
        color:#000;
      }
    }
  }
</style>
