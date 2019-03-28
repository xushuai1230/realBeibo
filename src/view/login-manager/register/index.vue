<template>
    <div class="main-container">
        <div class="main-container__main">
            <div class="main-container-main__title main-container-main__title--spacing-small">
                贝博代理端
            </div>
            <template v-if="currentStep === 0">
                <el-form class="main-container-main__form" :model="form" :rules="rules" ref="form" :disabled="loading" @submit.native.prevent="reg('form')">
                    <el-form-item class="main-container-main__item" prop="username" ref="username">
                        <el-input class="main-container-main__input" v-model="form.username" placeholder="请输入账户名" auto-complete="off">
                            <template slot="prepend">
                                <icon-svg icon-class="user"></icon-svg>
                            </template>
                        </el-input>
                    </el-form-item>

                    <el-form-item class="main-container-main__item" prop="password">
                        <password-input v-model="form.password" placeholder="请设置登录密码" auto-complete="off"></password-input>
                    </el-form-item>
                    <el-form-item class="main-container-main__item" prop="mobile" ref="mobile" :error="telError">
                        <el-input class="main-container-main__input" v-model="form.mobile" placeholder="请输入手机号码" auto-complete="off">
                            <template slot="prepend">
                                <icon-svg icon-class="login-phone"></icon-svg>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item class="main-container-main__item" prop="code" :error="formError">
                        <el-input class="main-container-main__input" v-model="form.code" placeholder="请输入验证码" auto-complete="off">
                            <template slot="prepend">
                                <icon-svg icon-class="login-security"></icon-svg>
                            </template>
                        </el-input>
                        <el-col class="main-container-main__send-code" :offset="1">
                            <el-button type="dark" :disabled="sendCode" @click="getMobieCode()">
                                {{returnCodeBtnTxt}}
                            </el-button>
                        </el-col>
                    </el-form-item>
                    <el-form-item class="main-container-main__item" prop="agreement">
                        <el-checkbox label="我同意网站各项政策、条款及开户协议" v-model="form.agreement"></el-checkbox>
                    </el-form-item>
                    <div class="main-container-main__item">
                        <el-button type="primary" native-type="submit" :loading="loading" block>下一步</el-button>
                    </div>
                </el-form>

                <el-row class="main-container__links" type="flex" justify="space-between">
                    <router-link :to="{name: 'forget-pass'}" class="main-container__link">
                        <icon-svg icon-class="arrow-right" type="primary" :stroke="true" :reverse="true"></icon-svg>
                        忘记密码？
                    </router-link>
                    <router-link :to="{name: 'login'}" class="main-container__link">
                        去登录
                        <icon-svg icon-class="arrow-right" type="primary" :stroke="true"></icon-svg>
                    </router-link>
                </el-row>
            </template>
            <!-- <register-sucess v-else-if="currentStep === 1"></register-sucess> -->
        </div>
        <div class="main-container__footer">
            <customer-service class="main-container__footer-custom">
                <icon-svg icon-class="login-customer-service" type="primary"></icon-svg>7*24小时在线客服
            </customer-service>
        </div>
    </div>
</template>

<script>
import { userNameRules, passRules, telRules } from "@/mixins/form";
// import registerSucess from "./register-success";
import PasswordInput from "@/components/password-input/index";
import getcode from "@/mixins/getcode";
import { acountRegAPI, getMobileCodeAPI } from "@/api/reg";
export default {
  name: "register-modal",

  mixins: [getcode],

  components: {
    PasswordInput
    // registerSucess
  },

  data() {
    return {
      currentStep: 0, //0手机号注册  2设置登陆密码 3注册完成
      form: {
        username: "",
        code: "",
        password: "",
        agreement: false,
        mobile: ""
      },
      rules: {
        username: userNameRules,
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        password: passRules,
        agreement: [
          {
            validator: (rule, value, callback) => {
              if (value === false) {
                callback(new Error("请先同意网站各项政策、条款及开户协议"));
              } else {
                callback();
              }
            }
          }
        ],
        mobile: telRules
      },
      formError: "",
      telError: ""
    };
  },
  methods: {
    //注册
    reg(name) {
      
      this.$refs[name].validate(valid => {
        if (valid) {
          acountRegAPI({
            username: this.form["username"],
            mobile: this.form["mobile"],
            code: this.form["code"],
            password: this.form["password"]
          })
            .then(res => {
              console.log(res);
              if (res.code !== 1) {
                this.formError = res.message;
              } else {
                this.formError = "";
                // this.currentStep = 1;
                this.$router.push({ name: "register-success" });
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
    getMobieCode() {
      if (this.form["mobile"] === "") {
        this.telError = "请输入手机号";
      } else {
        getMobileCodeAPI({
          mobile: this.form["mobile"]
        })
          .then(res => {
            if (res.code !== 1) {
              this.telError = res.message;
            } else {
              this.computedTimeCode();
            }
          })
          .catch(err => {
            console.warn(err);
          });
      }
    }
  },
  mounted() {
    //   this.bindSave(types.REGISTER, 'saveForm', 'form', {
    //     beforeSend: (data) => {
    //       this.formError = '';
    //       return data;
    //     },
    //     callback: ([result, data]) => {
    //       if (!result) {
    //         this.formError = data.message;
    //       } else {
    //         this.formError = '';
    //         this.currentStep = 1;
    //       }
    //     }
    //   });
  }
};
</script>
