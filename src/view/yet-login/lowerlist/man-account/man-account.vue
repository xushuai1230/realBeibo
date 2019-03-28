<template>
    <div class="manAccount">
       <h3>新增代理</h3>
       <div>
           <span>用户名:</span>
           <el-input placeholder="请输入内容" v-model="input3">
                <template slot="prepend">Http://</template>
            </el-input>
       </div>
        <div>
           <span>密码:</span>
           <el-input placeholder="请输入内容" v-model="input3">
                <template slot="prepend">Http://</template>
            </el-input>
       </div>
       <el-row>
            <el-button type="primary">保存</el-button>
            <el-button type="info">重置</el-button>
       </el-row>
       <el-table
            :data="tableData"
            style="width: 100%"
            border>
            <el-table-column
                prop="date"
                label="日期">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
        </el-table>
        <div class="man-account-footer">
          <el-warning class="man-account-footer__tips">
            <span class="man-account-footer__tips--black">为保护用户隐私，超出24小时，或者下级修改密码之后，不可复制下级代理的密码。</span>
          </el-warning>
          <page></page>
        </div>
    </div>
</template>

<script>
import './man-account.scss'
export default {
    name:'man-account',
    data() {
        return {
             tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
    }
};
</script>

<style lang="scss" scoped>
  @include b(man-account-footer) {
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding-bottom:25px;

    @include e(tips) {
      @include m(black) {
        color:#000;
      }
    }
  }
</style>
