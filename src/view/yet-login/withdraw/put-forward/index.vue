<template>
    <div>
        <static-container class="with__draw" v-if='!currentSubView'>
            <static-container-header>
                <el-row type="flex" justify="space-between" class="with__draw__main-header">
                    <el-col :span="6" class="with__draw__main-header__item">
                        <p class="small_title">账户余额:</p>
                        <p class="title_info">{{balance|MoneyFormat}}</p>
                    </el-col>
                    <el-col :span="6" class="with__draw__main-header__item">
                        <p class="small_title">剩余上分额度:</p>
                        <p class="title_info">{{leftCredit|MoneyFormat}}</p>
                    </el-col>
                    <el-col :span="6" class="with__draw__main-header__item load">
                        <a href="javascript:;" @click="GetUserWithdrawInfo">刷新</a>
                    </el-col>
                </el-row>
            </static-container-header>
            <static-container-body mt='30px'>
                <el-form :model="form" :rules="rules" @submit.native.prevent="submitWithdraw('form')" ref="form" :disabled="loading" size="medium" label-width="80px" label-position='top'>
                    <el-form-item label="姓名:" prop="reallyName" v-if='!isBindCard'>
                        <el-row type="flex" justify="space-between" style='height:40px;'>
                            <el-col :span="12">
                                <el-input v-model="form.reallyName" placeholder="请输入您的姓名" />
                            </el-col>
                            <el-col :span="10">
                                <el-tip>为了资金安全考虑，姓名填写后无法再次更改</el-tip>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item label="银行卡:" prop="cardNo" v-if='!isBindCard'>
                        <el-col :span="12">
                            <el-input v-model="form.cardNo" placeholder="请输入您的银行卡" />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="选择提现银行卡:" prop="cardNoId" v-if='isBindCard'>
                        <el-col :span="12">
                            <el-select v-model="form.cardNoId" placeholder="请选择提现银行卡" style='width:100%'>
                                <el-option v-for="item in withDraw.cardList" :label='item.bankName+" 尾数"+String(item.cardNo).substr(item.cardNo.length-4)' :key="item.cardId" :value="item.cardId"></el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="12">
                            <link-button @click.native="currentSubView=true">
                                新增/修改银行卡
                                <i class="el-icon-arrow-right"></i>
                            </link-button>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="金额:" prop="money" :error="formError">
                        <el-col :span="12">
                            <el-input v-model.number="form.money" placeholder="请输入您的提款金额" />
                        </el-col>
                        <div class="withdraw__config">
                            <div class="withdraw__config-inner">
                                <div class="withdraw__config-label">
                                    单次提现：
                                </div>
                                <div class="withdraw__config-main" v-if='withDraw&&withDraw.config'>
                                    最低 {{withDraw.config.minLimit}} - 最高 {{withDraw.config.maxLimit}}
                                </div>
                                <div class="withdraw__config-label">
                                    每日提款:
                                </div>
                                <div class="withdraw__config-main">
                                    无上限
                                </div>
                                <div class="withdraw__config-label">
                                    每日免费提现：
                                </div>
                                <div class="withdraw__config-main" v-if='withDraw&&withDraw.config'>
                                    {{withDraw.config.freeTimes}}次
                                </div>
                            </div>
                        </div>

                    </el-form-item>
                    <el-col :span="24" class="withdraw_Charge">
                        <p>手续费: ¥ {{GetProcessMoney}}</p>
                        <p>实际到账: ¥ {{form['money']!==undefined?((form['money']-GetProcessMoney)|MoneyFormat):0}}</p>
                    </el-col>
                    <el-form-item label-width="0px">
                        <el-col :span="12">
                            <el-button type="primary" native-type="submit" block>确认提现</el-button>
                        </el-col>
                    </el-form-item>
                </el-form>
                <el-dialog :visible.sync="dialogVisible" :before-close="() => {dialogVisible = false}" :title="dialogTitle" :width="dialog_width">
                    <success v-if='dialogVisible' :OrderDate=successDate></success>
                </el-dialog>

            </static-container-body>
        </static-container>
        <safety-card-bind v-else style='width:80%;margin:34px auto;'></safety-card-bind>
    </div>
</template>


<script>
import { mapState } from "vuex";
import { user_bank_card_API } from "@/api/bank";
import dialog from "@/mixins/dialog";
import { userWithdrawAPI, submitWithdrawAPI } from "@/api/Commission";
import success from "./success";
import SafetyCardBind from "@/view/user/safety/card-bind";
export default {
  mixins: [dialog],
  data() {
    return {
      form: {
        reallyName: undefined,
        cardNo: undefined,
        money: undefined,
        cardNoId: undefined
      },
      rules: {
        cardNo: [
          { required: true, message: "银行卡号不能为空!", trigger: "blur" }
        ],
        cardNoId: [
          { required: true, message: "请选择要提现的银行卡!", trigger: "blur" }
        ],
        money: [
          {
            required: true,
            message: "提款金额不能为空并且只能为数字!",
            type: "number"
          }
        ],
        reallyName: [
          { required: true, message: "姓名不能为空!", trigger: "blur" }
        ]
      },
      loading: false,
      bankList: {
        cardList: [],
        name: ""
      },
      withDraw: {
        cardList: []
      },
      successDate: {},
      formError: "",
      currentSubView: false,
      currentSubViewName: ""
    };
  },
  components: { success, SafetyCardBind },
  computed: {
    ...mapState("user", {
      user: state => state.user
    }),
    isBindCard() {
      if (!this.withDraw || !this.withDraw.cardList) return false;
      if (this.withDraw.cardList.length > 0) {
        return true;
      } else {
        return false;
      }
    },
    balance() {
      if (this.withDraw && this.withDraw.balance) {
        return this.withDraw.balance;
      } else {
        return 0;
      }
    },
    leftCredit() {
      if (this.withDraw && this.withDraw.leftCredit) {
        return this.withDraw.leftCredit;
      } else {
        return 0;
      }
    },
    GetProcessMoney() {
      if (
        this.withDraw &&
        this.withDraw.config &&
        this.form.money !== undefined &&
        typeof this.form.money == "number"
      ) {
        return (this.form.money * 0.23).toFixed(1) >
          this.withDraw.config.feeLimit
          ? 200
          : (this.form.money * 0.23).toFixed(1);
      } else {
        return 0;
      }
    }
  },
  created() {
    this.dialogTitle = "提现申请已提交成功";
    this.dialog_width = "703px";
    this.currentSubView=false;
  },
  methods: {
    //获取绑定的银行卡
    // getUserBindCard() {
    //   user_bank_card_API({}).then(res => {
    //     if (res.code !== 1) {
    //         this.$message({
    //             message:res.message,
    //             type:"error",
    //         })
    //     } else {
    //       this.bankList = res.data;
    //     }
    //   }).catch(err=>{
    //       console.warn(err);
    //   });
    // },
    //获取提现信息
    GetUserWithdrawInfo() {
      userWithdrawAPI()
        .then(res => {
          if (res.code !== 1) {
            this.$message({
              message: res.message,
              type: "error"
            });
          } else {
            this.withDraw = res.data;
          }
        })
        .catch(err => {
          console.warn(err);
        });
    },
    //提交提现
    submitWithdraw(fromName) {
      this.$refs[fromName].validate(valid => {
        if (valid) {
          this.formError = "";
          submitWithdrawAPI({
            name: this.form["reallyName"],
            cardNo: this.form["cardNo"],
            cardId: this.form["cardNoId"],
            amount: this.form["money"]
          })
            .then(res => {
              if (res.code !== 1) {
                this.formError = res.message;
              } else {
                this.dialogVisible = true;
                this.successDate = res.data;
                this.GetUserWithdrawInfo();
              }
            })
            .catch(err => {
              console.warn(err);
            });
        } else {
          return false;
        }
      });
    }
  },
  mounted() {
    // this.getUserBindCard();
    this.GetUserWithdrawInfo();
  }
};
</script>

<style lang="scss" scoped>
@include b(static-container-header) {
  border-bottom: 1px solid #eaeaea;
}
@include b(static-container-body) {
  @include b(withdraw__config) {
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid #000;
    margin-left: 27px;
    position: absolute;
    top: -30px;
    left: 50%;
    box-shadow: 0px 12px 32px 0px rgba(0, 0, 0, 0.12);
    line-height: 20px;
    &:before {
      position: absolute;
      left: -10px;
      top: 44px;
      display: block;
      width: 20px;
      height: 20px;
      border: 1px solid #000;
      background-color: #fff;
      content: "";
      transform: rotate(45deg);
      z-index: 1;
    }
    .withdraw__config-inner {
      background-color: #fff;
      border-radius: 8px;
      padding: 16px;
      position: relative;
      z-index: 1;
      width: 180px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      .withdraw__config-label {
        font-weight: bold;
      }
      .withdraw__config-main {
        margin-bottom: 6px;
      }
    }
  }
  @include b(withdraw_Charge) {
    margin-bottom: 50px;
    p {
      font-size: 14px;
      font-family: "MicrosoftYaHei-Bold";
      font-weight: bold;
      color: black;
      line-height: 20px;
    }
  }
}
@include b(with__draw) {
  width: 1014px;
  margin: 60px auto;
  border: 1px solid #eaeaea;
  border-radius: 9px;
  min-height: 669px;
  padding: 45px 151px;
  @include e(main-header) {
    .with__draw__main-header__item {
      .small_title {
        font-size: 16px;
        font-family: "MicrosoftYaHei";
        color: black;
      }
      .title_info {
        font-size: 27px;
        font-family: "MicrosoftYaHei-Bold";
        font-weight: bold;
      }
      &.load {
        font-size: 16px;
        font-family: " MicrosoftYaHei-Bold";
        font-weight: bold;
        color: #1e5adc;
        line-height: 60px;
      }
    }
  }
}
</style>
