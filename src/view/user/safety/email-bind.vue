<template>
  <div>
    <dialog-subtitle>
      完成电子邮箱绑定，可通过以验证的邮箱找回密码，为了您的帐号资讯与资金安全，请尽快完成电子邮箱绑定。
    </dialog-subtitle>
    <el-form class="main-container-main__form" :model="form" :rules="rules" ref="form" :disabled="loading" @submit.native.prevent="bindEmail('form')" label-position="top" v-if="!user.email">
      <el-form-item class="main-container-main__item" prop="mobile" ref="email" label="电子邮箱：" :error="codeError">
        <el-input class="main-container-main__input" v-model="form.email" placeholder="请输入电子邮箱" auto-complete="off">
          <template slot="prepend">
            <icon-svg icon-class="email"></icon-svg>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item class="main-container-main__item" prop="code" label="验证码：" :error="formError">
        <el-input class="main-container-main__input" v-model="form.code" placeholder="请输入验证码" auto-complete="off">
          <template slot="prepend">
            <icon-svg icon-class="login-security"></icon-svg>
          </template>
          <template slot="append">
            <el-button @click="getEmailCode()" type="dark" shadow :disabled="sendCode" size="medium">
              {{returnCodeBtnTxt}}
            </el-button>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item no-spacing>
        <el-button :block="true" type="primary" native-type="submit" :loading="loading">确认提交</el-button>
      </el-form-item>
    </el-form>
    <el-form v-else>
      <el-form-item label="电子邮箱：">
        <el-input placeholder="请输入电子邮箱" v-model="user.email" :disabled="true"></el-input>
        <el-tip>
          若要修改电子邮箱，请联系客服
        </el-tip>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import {form, getCode} from '@/build';
// import {bindUserEmail as saveApi, getEmailValidateCode as codeApi} from "@/services/api/user";
import { mapState } from "vuex";
import getcode from "@/mixins/getcode";
import { EmailvalidateApi,EmailCodeApi } from "@/api/user";
export default {
  name: "safety-email-bind",

  mixins: [getcode],

  data() {
    return {
      editVisible: false,
      labelWidth: "120px",
      form: {
        // userId: this.user.id
        email: undefined,
        code: undefined
      },
      formError: "",
      rules: {
        email: [
          { required: true, message: "电子邮箱为必填项！" },
          { type: "email", message: "电子邮箱格式不正确！" }
        ],
        code: {
          required: true,
          message: "验证码为必填项！"
        }
      },
      type: "email_bind",
      codeError: "",
      loading: false
    };
  },

  computed: {
    ...mapState("user", {
      user: state => state.user
    })
  },
  methods: {
    //绑定邮箱
    bindEmail(formName) {
      
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.formError = "";

          EmailvalidateApi({
            email:this.form['email'],
            type:this.type,
            code:this.form['code'],
          })
            .then(res => {
              if (res.code !== 1) {
                this.formError = res.message;
              } else {
                this.$store.dispatch("user/Get_user");
                this.$parent.$parent.$parent.dialogVisible = false;
              }
            })
            .catch(err => {
              console.warn(err);
            });
        } else {
          return false;
        }
      });
    },
    //获取邮箱验证码
    getEmailCode(){
      if(this.form['email']==undefined||this.form['email']==''){
        this.codeError='请输入电子邮箱';
        return;
      }
      EmailCodeApi({
        email:this.form['email'],
        type:this.type,
      }).then(res=>{
         this.computedTimeCode();
        if(res.code!==1){
          this.codeError=res.message;
        }else{

        }
      })
    }
  },

  mounted() {
    // this.bindSave(saveApi, 'saveForm', 'form', {
    //   beforeSend: (data) => {
    //     this.formError = '';
    //     return data;
    //   },
    //   afterSuccess: () => {
    //     this.$store.dispatch(types.OAUTH);
    //     this.$emit('on-success');
    //   },
    //   afterFail: ([result, data]) => {
    //     this.formError = data.message;
    //   }
    // });
  }
};
</script>

<style scoped>
</style>
