<template>
    <div class="lowerAgent">
        <div class="lowerTile">
           <span>查询时间:</span>
            <div class="block">
                <el-date-picker
                v-model="value6"
                type="datetimerange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="['00:00:00']">
                </el-date-picker>
            </div>
           <span>代理账户:</span>
           <el-input v-model="input" placeholder="请输入内容"></el-input>
           <span>所属上级:</span>
           <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="lowerType">
            <span>代理层级:</span>
             <el-select v-model="value" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <el-row>
                <el-button type="primary">查询</el-button>
            </el-row>
        </div>
        <div class="lowerTable">
            <el-table
                :data="tableData"
                style="width: 100%"
                show-summary
                border>
                <el-table-column
                    prop="date"
                    label="注册时间">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="代理账户">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="代理层级">
                </el-table-column>
                <el-table-column
                    prop="date"
                    label="所属上级">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="下级会员"
                    sortable>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="公司输赢"
                    sortable>
                </el-table-column>
                <el-table-column
                    prop="date"
                    label="红利">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="返水">
                </el-table-column>
            </el-table>
            <table>
                <tr>
                    <td>所有页汇总</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                     <td>8</td>
                </tr>
            </table>
        </div>
        <div class="lower-agent-footer">
          <el-warning class="lower-agent-footer__tips">
            <span class="lower-agent-footer__tips--black">红色负数代表会员盈利，绿色正数代表公司盈利</span>
          </el-warning>
          <page></page>
        </div>
    </div>
</template>

<script>
  import './lower-agent.scss'
  import tips from '../../components/tips.vue' 
  export default {
      name:'lower-agent',
      data() {
        return {
          options: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
          tableData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '2'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '3'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '5'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '6'
            }],
          value: ''
        }
      },
      components:{
          tips
      }
  }
</script>

<style lang="scss" scoped>
  .lowerAgent {
      width: 100%;
      height: auto;
      padding: 0 47px;
  }
  @include b(lower-agent-footer) {
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
