<template>
    <div class="introduce">
        <div class="example">
           <h4>例子:</h4>
           <p>
               下级代理佣金计算方式：<br> 本级 当月佣金为 10000 元，且他二级代理有2个，三级代理有3个；<br> 当月这2个二级代理和3个三级代理都是有达到活跃要求<br> 二级代理-1/-2 当月佣金分别为 10000/10000；<br> 三级代理-1/-2/-3的当月佣金分别为 5000/3000/2000
           </p>
           <p>那么合作伙伴的总佣金：<br> =10000+【（10000+10000）* 3%】+【（5000+3000+2000）* 1%】<br> =1000+600+100=1700</p>
           <p>PS：下级代理活跃要求：有佣金的下级代理</p>
        </div>
        <div class="careful">
         <h3>注意事项</h3>
         <p>1.有效会员定义：有效投注金额>2000元，有效注单>10单 <br>
          2.如代理当月佣金是负盈利，则将累计到下个月。如果连续三个月负盈利。我们将会在第四个月将代理的负盈利清零；如代理三个月未能达到有效会员量，则将在第四个月将代理的数据清零。公司最多累计代理商三个月的输赢数据。<br>
          3.代理商需要支付会员所得的优惠红利及其他促销活动所产生的费用<br>
          4.若经审核发现代理商有任何不良营利企图，或与其他代理商、会员进行合谋套利等不诚信行为，将关闭该合作代理商之账户、扣除账户中的本金，并收回该代理商的所有佣金与优惠。<br>
          5.xxxxx娱乐对本次优惠活动享有最终解释权</p>
        </div>
        <div class="version">
           <h3>佣金支付特别说明</h3>
           <p>每个月1-5号审核，6-9号结算，10号发放在代理账号“账户余额” <br> 代理商随时可以进行提现操作</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "introduce",
  data() {
    return{}
  }
};
</script>

<style scoped lang="scss">
.introduce {
  width: 100%;
  height: auto;
  padding: 0 45px;
  .example {
    h4 {
      font-size: 16px;
      font-family: MicrosoftYaHei-Bold;
      font-weight: bold;
      color: rgba(32, 33, 36, 1);
      margin-bottom: 10px;
    }
    > p {
      line-height: 27px;
      margin-bottom: 30px;
    }
  }
  .careful {
    margin-bottom: 63px;
    > h3 {
      width: 100%;
      height: 35px;
      font-size: 27px;
      font-family: MicrosoftYaHei-Bold;
      font-weight: bold;
      color: rgba(32, 33, 36, 1);
      line-height: 35px;
      margin-bottom: 10px;
    }
    > p {
      width: 100%;
      height: 167px;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: rgba(32, 33, 36, 1);
      line-height: 27px;
    }
  }
  .version {
    > h3 {
      width: 100%;
      height: 35px;
      font-size: 27px;
      font-family: MicrosoftYaHei-Bold;
      font-weight: bold;
      color: rgba(32, 33, 36, 1);
      line-height: 35px;
      margin-bottom: 10px;
    }
    > p {
      width: 100%;
      height: auto;
      font-size: 16px;
      font-family: MicrosoftYaHei-Bold;
      font-weight: bold;
      color: rgba(32, 33, 36, 1);
      line-height: 27px;
      margin-bottom:83px;
    }
  }
}
</style>
