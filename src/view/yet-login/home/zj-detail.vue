<template>
    <div class="zjDetail">
        <div class="title">
            <div>
                <div>
                    <h3>佣金概况 / </h3>
                    <h3>资金概况</h3>
                </div>
                <p>2018.08.08</p>
            </div>
            <div>
                
                <a @click="$router.history.go(-1)">
                    <span></span>
                    返回
                </a>
            </div>
        </div>
        <div class="zjTable">
             <el-table
                :data="tableData6"
                border
                show-summary
                style="width: 100%">
                <el-table-column
                prop="name"
                label="姓名"
                width="356">
                </el-table-column>
                <el-table-column
                prop="amount1"
                sortable
                label="数值 1">
                </el-table-column>
                <el-table-column
                prop="amount2"
                sortable
                label="数值 2">
                </el-table-column>
                <el-table-column
                prop="amount3"
                sortable
                label="数值 3">
                </el-table-column>
            </el-table>
        </div>
        <p><span></span> 红色负数代表会员盈利，绿色正数代表公司盈利</p>
        <page></page>
    </div>
</template>

<script>
import './zj-detail.scss'
export default {
    name:"zj-detail",
    data() {
        return {
             tableData6: [{
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
        }
    }
};
</script>

<style>
</style>
