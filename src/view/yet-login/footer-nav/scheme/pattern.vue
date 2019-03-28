<template>
<div>
 <div class="pattern">
        <h3>总输赢返佣模式</h3>
        <div>
            <h3>佣金比例</h3>
            <el-table
            :data="tableData"
            border=true 
            style="width: 100%">
            <el-table-column
                prop="date"
                label="等级"
                width="225"
                header-align="center" >
            </el-table-column>
            <el-table-column
                prop="name"
                label="有效会员"
                width="336"
                 header-align="center">
            </el-table-column>
            <el-table-column
                prop="address"
                label="当月净盈亏总额"
                 header-align="center">
            </el-table-column>
             <el-table-column
                prop="extract"
                label="提成"
                width='280'
                 header-align="center">
            </el-table-column>
        </el-table>
        </div>
         
    </div>
    <div class="explain">
             <h3>例子:</h3>
             <h4>佣金计算方式</h4>
             <p>【总输赢】投注金额-派彩金额 <br> 【净输赢】总输赢-红利-返水-平台费+累计上月净输赢 <br> 【实际发放】净输赢*佣金比例</p>
             <p>如果当月活跃会员为15个，当月净输赢为300000；<br> 由于活跃会员未达到20个或者以上，所以佣金比例根据35%的比例来计算；<br> =300000*35% <br> =105000 <br> 当月佣金105000元
             </p>

             <span>PS:当月活跃会员和当月净输赢需要同时满足同一阶段的标准才可以按照对应的比例来计算，如果有一项未达到，则取未达到那项对应的比例计算佣金即可</span>

             <h5>佣金包括两个范围</h5>
             <p>除了正常的佣金比例以外，我们还为您提供多层结构的下级代理佣金，我们提供下级代理佣金最高的5%作为您的发展代理奖励。</p>
    </div> 
</div>
   
</template>

<script>
export default {
  name: "pattern",
  data() {
    return {
      tableData: [
        {
          date: "a",
          name: ">5",
          address: "0-50000",
          extract: "30%"
        },
        {
          date: "b",
          name: ">10",
          address: "50001-200000",
          extract: "35%"
        },
        {
          date: "c",
          name: ">20",
          address: "200001-500000",
          extract: "40%"
        },
        {
          date: "d",
          name: ">30",
          address: "500001-800000",
          extract: "45%"
        },
        {
          date: "e",
          name: ">40",
          address: "800001-1500000",
          extract: "50%"
        },
        {
          date: "f",
          name: ">50",
          address: "More than 1500000",
          extract: "55%"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.explain {
  width: 100%;
  height: auto;
  padding: 0 45px;
  > h3 {
    font-size: 18px;
    font-family: MicrosoftYaHei-Bold;
    font-weight: bold;
    color: rgba(32, 33, 36, 1);
  }
  > p {
    &:nth-child(3) {
      margin-bottom: 28px;
    }
    &:nth-child(4) {
      margin-bottom: 25px;
    }
     &:nth-child(7) {
      margin-bottom: 70px;
    }
  }
  > span {
    width: 100%;
    height: auto;
    display: block;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: rgba(250, 116, 28, 1);
    line-height: 27px;
    margin-bottom: 47px;
  }
  > h5 {
    font-size: 16px;
    font-family: MicrosoftYaHei-Bold;
    font-weight: bold;
    color: rgba(32, 33, 36, 1);
    margin-bottom: 13px;
  }
}
</style>


