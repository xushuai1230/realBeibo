<template>
  <el-form class="main-container-main__form" :model="form" :rules="rules" ref="form" :disabled="loading" @submit.native.prevent='login("form")'>
    <el-form-item class="main-container-main__item" prop="mobile" ref="mobile">
      <el-input class="main-container-main__input" v-model="form.mobile" placeholder="请输入手机号" auto-complete="off">
        <template slot="prepend">
          <icon-svg icon-class="login-phone"></icon-svg>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item class="main-container-main__item" prop="code" :error="formError">
      <el-input class="main-container-main__input" v-model="form.code" placeholder="请输入手机验证码" auto-complete="off">
        <template slot="prepend">
          <icon-svg icon-class="login-security"></icon-svg>
        </template>
      </el-input>
      <el-col class="main-container-main__send-code" :offset="1">
        <el-button type="dark" :disabled="sendingCode" @click="getMobileCode">
          {{returnCodeBtnTxt}}
        </el-button>
      </el-col>
    </el-form-item>
    <div class="main-container-main__item main-container-main__item--submit">
      <el-button type="primary" :loading="loading" native-type="submit" block>登录</el-button>
    </div>
  </el-form>
</template>

<script>
import getCode from "@/mixins/getcode.js";
import { tel_login_Api, tel_code_Api } from "@/api/login";
import {telRules} from '@/mixins/form';
export default {
  name: "mobile-login",

  mixins: [getCode],

  data() {
    return {
      form: {
        mobile: "",
        code: ""
      },
      rules: {
        mobile: telRules,
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      },

      formError: "",
      logining: false
    };
  },
  methods: {
    login(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          this.logining=true;
          tel_login_Api({
            mobile: this.form["mobile"],
            code: this.form["code"]
          })
            .then(res => {
              if (res.code !== 1) {
                this.formError = res.message;
              } else {
                this.logining=false;
                this.$router.push("/index");
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          return false;
        }
      });
    },
    //登录获取手机验证码
    getMobileCode() {
      tel_code_Api({
        mobile:this.form["mobile"],
      })
        .then(res => {
          if (res.code !== 1) {
            this.formError = res.message;
          } else {
            this.computedTimeCode();
          }
        })
        .catch(err => {
          console.warn(err);
        });
    }
  },
  mounted() {
    // this.bindSave(types.MOBILE_LOGIN, 'saveForm', 'form', {
    //   beforeSend: (data) => {
    //     this.formError = '';
    //     return data;
    //   },
    //   callback: ({result, data}) => {
    //     if (!result) {
    //       this.formError = data.message;
    //     } else {
    //       this.$message({
    //         message: '登录成功',
    //       });
    //       this.$router.push(this.$route.query.redirect || {
    //         name: 'home'
    //       });
    //     }
    //   }
    // });
  }
};
</script>
