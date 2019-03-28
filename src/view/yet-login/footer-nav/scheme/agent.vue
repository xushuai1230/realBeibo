<template>
    <div class="agent">
        <h3>多层佣金计算表格示意图</h3>
        <div class="erji">
            <h4>二层代理:</h4>
            <div class="agentTable">
                <h5>佣金比例</h5>
                 <el-table
            :data="tableData"
            border=true 
            style="width: 100%">
            <el-table-column
                prop="date"
                label="等级"
                width="216"
                header-align="center" >
            </el-table-column>
            <el-table-column
                prop="name"
                label="有效下级会员"
                width="216"
                 header-align="center">
            </el-table-column>
             <el-table-column
                prop="extract"
                label="提成"
                 header-align="center">
            </el-table-column>
        </el-table>
            </div>
        </div>
        <div class="sanji">
            <h4>三层代理:</h4>
            <div class="agentTable">
                <h5>佣金比例</h5>
                 <el-table
            :data="tableData"
            border=true 
            style="width: 100%">
            <el-table-column
                prop="date"
                label="等级"
                width="216"
                header-align="center" >
            </el-table-column>
            <el-table-column
                prop="name"
                label="有效下级代理"
                width="216"
                 header-align="center">
            </el-table-column>
             <el-table-column
                prop="extract"
                label="提成"
                 header-align="center">
            </el-table-column>
        </el-table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "agent",
  data() {
    return {
      tableData: [
        {
          date: "A",
          name: ">3",
          extract: "3%"
        },
        {
          date: "B",
          name: ">6",
          extract: "3%"
        },
        {
          date: "C",
          name: ">10",
          extract: "5%"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.agent {
  width: 100%;
  height: 395px;
  padding: 0 45px;
  > h3 {
    font-size: 27px;
    font-family: MicrosoftYaHei-Bold;
    font-weight: bold;
    color: rgba(32, 33, 36, 1);
    margin-bottom: 20px;
  }
  .erji {
    width: 48%;
    height: 200px;
    margin-right: 4%;
    float: left;
    > h4 {
      width: 100%;
      height: 27px;
      font-size: 18px;
      font-family: MicrosoftYaHei-Bold;
      font-weight: bold;
      color: rgba(32, 33, 36, 1);
      line-height: 27px;
      margin-bottom: 17px;
    }
  }
  .sanji {
    width: 48%;
    height: auto;
    float: left;
    > h4 {
      width: 100%;
      height: 27px;
      font-size: 18px;
      font-family: MicrosoftYaHei-Bold;
      font-weight: bold;
      color: rgba(32, 33, 36, 1);
      line-height: 27px;
      margin-bottom: 17px;
    }
  }
}
</style>


