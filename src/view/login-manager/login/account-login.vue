<template>
  <el-form class="main-container-main__form" :model="form" :rules="rules" ref="form" :disabled="loading" @submit.native.prevent='login("form")'>
    <el-form-item class="main-container-main__item" prop="username" :rules="{required: true,message: '请输入账户名或者手机号码'}">
      <el-input class="main-container-main__input" v-model="form.username" placeholder="请输入账户名或者手机号码" auto-complete="off">
        <template slot="prepend">
          <icon-svg icon-class="user"></icon-svg>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item class="main-container-main__item" prop="password" :error="!isNeedImgCode  ? formError : ''">
      <password-input v-model="form.password" placeholder="请输入密码" auto-complete="off"></password-input>
    </el-form-item>
    <el-form-item class="main-container-main__item" v-if="isNeedImgCode" prop="imgCode" :error="formError">
      <el-input v-model="form.imgCode" placeholder="请输入验证码" auto-complete="off">
        <template slot="prepend">
          <icon-svg icon-class="login-security"></icon-svg>
        </template>
        <template slot="append">
          <!-- <validate-img ref="validateImg" /> -->
          <img :src="tUrl" class="validate-img" @click="change" width="100" height="40">
        </template>
      </el-input>
    </el-form-item>
    <div class="main-container-main__item main-container-main__item--submit">
      <el-button type="primary" :loading="loading" native-type="submit" block>登录</el-button>
    </div>
  </el-form>
</template>

<script>
import { login_Api } from "@/api/login";
import { API_ROOT } from "@/api/config";
export default {
  name: "account-login",

  data() {
    return {
      form: {
        username: "",
        password: "",
        imgCode: ""
      },
      formError: "",
      rules: {
        username: "",
        password: [{ required: true, message: "请输入密码" }],
        imgCode: [{ required: true, message: "请输入验证码" }]
      },
      isNeedImgCode: false,
      loading: false,
      uuid: new Date().getTime(),
      tUrl: API_ROOT + `/api/gl/image/code?uuid=${new Date().getTime()}`
    };
  },
  mounted() {},
  methods: {
    change() {
      this.uuid = new Date().getTime();
      this.tUrl = API_ROOT + `/api/gl/image/code?uuid=${new Date().getTime()}`;
    },
    //登录
    login(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          this.loading = true;
          login_Api({
            username: this.form["username"],
            password: this.form["password"],
            imgCode: this.form["imgCode"],
            uuid: this.uuid
          })
            .then(res => {
              this.loading = false;
              this.formError='';
              if (res.code === 1) {
                this.$router.push('/index');
                localStorage.setItem('profile',JSON.stringify(res.data));
              }
              if (res.code !== 1) {
                this.formError = res.message;
                if (res.code == 200025) {
                  this.isNeedImgCode = true;
                  this.change();
                }
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          return false;
        }
      });
    }
  }
};
</script>
