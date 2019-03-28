<template>
  <div>
    <dialog-subtitle>
      完成手机号码绑定，可通过以验证的手机号码找回密码，为了您的帐号资讯与资金安全，请尽快完成手机号码的绑定。
    </dialog-subtitle>
    <el-form class="main-container-main__form" :model="form" :rules="rules" ref="form" :disabled="loading" @submit.native.prevent="bindMobile('form')" label-position="top" v-if="!user.telephone">
      <el-form-item class="main-container-main__item" prop="mobile" ref="mobile" label="手机号码：" :error="codeError">
        <el-input class="main-container-main__input" v-model="form.mobile" placeholder="请输入手机号" auto-complete="off">
          <template slot="prepend">
            <icon-svg icon-class="login-phone"></icon-svg>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item class="main-container-main__item" prop="code" label="验证码：" :error="formError">
        <el-input class="main-container-main__input" v-model="form.code" placeholder="请输入验证码" auto-complete="off">
          <template slot="prepend">
            <icon-svg icon-class="login-security"></icon-svg>
          </template>
          <template slot="append">
            <el-button @click="getMobieCode" type="dark" shadow :disabled="sendCode" size="medium">
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
import { telRules } from "@/mixins/form";
import getcode from "@/mixins/getcode";
import { mapState } from "vuex";
import { mobilevalidateApi, mobileCodeApi } from "@/api/user";
export default {
  name: "safety-mobile-validate",

  mixins: [getcode],
  data() {
    return {
      form: {
        mobile: undefined,
        code: undefined
        // userId: this.user.id
      },
      labelWidth: "120px",
      formError: "",
      rules: {
        mobile: telRules,
        code: { required: true, message: "验证码不能为空！" }
      },
      codeError: "",
      type: "mobile_bind",
      loading: false
    };
  },

  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    //绑定手机
    bindMobile(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true;
          mobilevalidateApi({
            mobile: this.form["mobile"],
            code: this.form["code"],
            type: this.type
          })
            .then(res => {
              this.formError = "";
              if (res.code !== 1) {
                this.formError = res.message;
              } else {
                this.loading = false;
                this.$store.dispatch("user/Get_user");
                this.$parent.$parent.$parent.dialogVisible=false;
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
    //获取短信验证码
    getMobieCode() {
      this.codeError = "";
      if (this.form["mobile"]==undefined||this.form["mobile"] === "") {
        this.codeError = "请输入手机号码";
        return;
      } else {
        mobileCodeApi({
          mobile: this.form["mobile"],
          type: this.type
        })
          .then(res => {
            this.computedTimeCode();
            if (res.code !== 1) {
              this.codeError = res.message;
            } else {
               
            }
          })
          .catch(err => {
            console.warn(err);
          });
      }
    }
  },

};
</script>

<style scoped>
</style>
