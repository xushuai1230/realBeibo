<template>
  <div>
    <dialog-subtitle>
      为了您资金安全，请输入验证码以确认解绑银行卡
    </dialog-subtitle>
    <el-form class="main-container-main__form" :model="form" :rules="rules" ref="form" :disabled="loading" @submit.native.prevent="unbindCard('form')" label-position="top">
      <el-form-item class="main-container-main__item" prop="code" :label="`手机号码：${user.telephone}`" :error="formError">
        <el-input class="main-container-main__input" v-model="form.code" placeholder="请输入验证码" auto-complete="off">
          <template slot="prepend">
            <icon-svg icon-class="login-security"></icon-svg>
          </template>
          <template slot="append">
            <el-button type="dark" shadow :disabled="sendCode" size="medium" @click="getTelCode">
              {{returnCodeBtnTxt}}
            </el-button>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item no-spacing>
        <el-button :block="true" type="primary" native-type="submit" :loading="loading">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import getcode from "@/mixins/getcode";
import {unbindUserbankcardApi} from '@/api/bank';
import {mobileCodeApi} from '@/api/user';
const consts = {
  CODE_CARD_DEL: "card_del"
};
import { mapState } from "vuex";
export default {
  name: "safety-email-bind",

  mixins: [getcode],

  props: ["cardInfo"],

  data() {
    return {
      form: {
        cardId: this.cardInfo.cardId,
        email: undefined,
        code: undefined,
        type: consts.CODE_CARD_DEL
      },
      formError: "",
      rules: {
        code: { required: true, message: "验证码不能为空！" }
      }
    };
  },

  computed: {
    ...mapState("user", {
      user: state => state.user
    })
  },
  methods: {
    //解绑银行卡
    unbindCard(formName) {
      
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.formError = '';
          unbindUserbankcardApi({
            code:this.form['code'],
            cardId:this.form['cardId'],
          }).then(res => {
            if (res.code !== 1) {
                 this.formError = res.message;
            } else {
               this.$parent.$parent.dialogVisible=false;
                this.$parent.$parent.$parent.getUserBindCard();
            }
          }).catch(err=>{

          });
        } else {
          return false;
        }
      });
    },
    //获取手机验证码
    getTelCode(){
      this.formError = '';
      mobileCodeApi({
        mobile:this.user.telephone,
        type:this.form['type'],
      }).then(res=>{
        if(res.code!==1){
          this.formError = res.message;
        }else{
          this.computedTimeCode();
        }
      }).catch(err=>{
        console.warn(err);
      })
    }
  },
};
</script>

<style scoped>
</style>
