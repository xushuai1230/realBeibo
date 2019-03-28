<template>
    <div class="with_draw--success">
        <dialog-subtitle>
            您的提现申请已提交成功，请耐心等待财务人员为您出款。
        </dialog-subtitle>
        <div class="with_draw__info clearfix">
            <el-col :span="12" class="with_draw__info--msg" v-if='OrderDate'>
                提款方式:{{OrderDate.clientType}}
            </el-col>
            <el-col :span="12" class="with_draw__info--msg" v-if='OrderDate&&OrderDate.amount'>
                提款金额:{{OrderDate.amount}}
            </el-col>
            <el-col :span="12" class="with_draw__info--msg" v-if='OrderDate&&OrderDate.orderId'>
                订单编号:{{OrderDate.orderId}}
            </el-col>
        </div>
        <div class="with_draw__info--problem main-problem">
            提现遇到问题?
        </div>
        <div class="with_draw__info--problem main-service">
            <icon-svg icon-class='login-customer-service'></icon-svg>联系客服

        </div>
    </div>
</template>

<script>
export default {
    props:{
        OrderDate:{
            type:Object,
            default(){
                return {};
            }
        }
    },
    created(){
        console.log(this.OrderDate);
    }
};
</script>


<style lang="scss" scoped>
@include b(with_draw--success) {
  @include b(with_draw__info) {
    padding: 27px 0;
    border-top: 1px solid #dedede;
    border-bottom: 1px solid #dedede;
    @include b(with_draw__info--msg) {
      font-size: 16px;
      font-family: "MicrosoftYaHei-Bold";
      font-weight: bold;
      color: black;
      margin-top: 20px;
    }
  }
  @include b(with_draw__info--problem) {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    &.main-problem {
      font-size: 18px;
      font-family: "MicrosoftYaHei-Bold";
      font-weight: bold;
      color: black;
      padding-top: 38px;
    }
    &.main-service{
         font-size: 16px;
      margin-top: 12px;
      vertical-align: top;
      font-family: "MicrosoftYaHei";
      color: rgba(30, 90, 220, 1);
      svg {
        margin-right: 12px;
      }
    }
   
  }
}
</style>
