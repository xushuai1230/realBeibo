<template>
  <div class="main-container">
    <div class="main-container__main">
      <div class="main-container-main__title main-container-main__title--spacing-small">
        忘记密码？
      </div>
      <el-steps class="main-container-main__steps" :active="currentStep" align-center finish-status="success">
        <el-step title="填写账户"></el-step>
        <el-step title="接受验证码"></el-step>
        <el-step title="设置新密码"></el-step>
      </el-steps>
      <template v-if="currentStep === 0">
        <!-- step 1 -->
        <el-form class="main-container-main__form" :model="form" :rules="rules" ref="form" :disabled="loading" @submit.native.prevent='getBindInfo("form")'>
          <el-form-item class="main-container-main__item" prop="username">
            <el-input class="main-container-main__input" v-model="form.username" placeholder="请输入账户名和手机号码" auto-complete="off">
              <template slot="prepend">
                <icon-svg icon-class="user"></icon-svg>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item class="main-container-main__item" prop="code" :error="formError">
            <el-input v-model="form.code" placeholder="请输入验证码" auto-complete="off">
              <template slot="prepend">
                <icon-svg icon-class="login-security"></icon-svg>
              </template>
              <template slot="append">
                <validate-img class="main-container-main__img-code" ref="validateImg" />
              </template>
            </el-input>
          </el-form-item>
          <el-row type="flex" justify="center" align="middle">
            <el-button type="primary" native-type="submit" block>确 定</el-button>
          </el-row>
        </el-form>

      </template>

      <!-- step 2 -->
      <template v-else-if="currentStep === 1">
        <el-form ref="selectForm" :model="selectForm" @submit.native.prevent='confirmFindWay("selectForm")'>
          <el-form-item prop="type">
            <el-radio-group v-model="selectForm.type">
              <el-radio label="mobile" class="main-container-main__radio" v-if="!!userData.telephone">
                <div class="main-container-main__radio-label">
                  将验证码发送到手机号码
                  <div class="main-container-main__radio-tip">手机：{{userData.telephone}}</div>
                </div>
              </el-radio>
              <el-radio label="email" class="main-container-main__radio" v-if="!!userData.email">
                <div class="main-container-main__radio-label">
                  将验证码发送至注册《电子邮箱》
                  <div class="main-container-main__radio-tip">邮箱：{{userData.email}}</div>
                </div>
              </el-radio>
            </el-radio-group>
          </el-form-item>

          <section class="main-container-main__btn-group">
            <el-button @click="currentStep--">返回</el-button>
            <el-button type="primary" native-type="submit">下一步</el-button>
          </section>
        </el-form>
      </template>
      <!-- step 3 -->
      <template v-else-if="currentStep === 2">
        <el-form :model="submitForm" :rules="submitFormRules" ref="submitForm" @submit.native.prevent="resetPass('submitForm')">
          <p>
            <template v-if="selectForm.type === 'mobile'">
              验证码已经发送到手机: {{userData.telephone}}
            </template>
            <template v-else-if="selectForm.type === 'email'">
              验证码已经发送到手机: {{userData.email}}
            </template>
          </p>
          <el-form-item class="main-container-main__item" prop="code" :error="formError">
            <el-input class="main-container-main__input" v-model="submitForm.code" placeholder="请输入验证码" auto-complete="off">
              <template slot="prepend">
                <icon-svg icon-class="login-security"></icon-svg>
              </template>
            </el-input>
            <el-col class="main-container-main__send-code" :offset="1">
              <el-button type="dark" :disabled="sendCode" @click="sendMesCode()">
                {{returnCodeBtnTxt}}
              </el-button>
            </el-col>
          </el-form-item>

          <el-form-item class="main-container-main__item" prop="password">
            <password-input v-model="submitForm.password" placeholder="输入新密码" auto-complete="off"></password-input>
          </el-form-item>
          <el-form-item class="main-container-main__item" prop="newPwd">
            <password-input v-model="submitForm.newPwd" placeholder="确认输入新密码" auto-complete="off"></password-input>
          </el-form-item>

          <section class="main-container-main__btn-group">
            <el-button @click="currentStep--">返回</el-button>
            <el-button type="primary" native-type="submit">完成</el-button>
          </section>
        </el-form>
      </template>

      <el-row class="main-container__links" type="flex" justify="space-between">
        <router-link :to="{name: 'register'}" class="main-container__link">
          <icon-svg icon-class="arrow-right" type="primary" :stroke="true" :reverse="true"></icon-svg>
          去注册
        </router-link>
        <router-link :to="{name: 'login'}" class="main-container__link">
          去登录
          <icon-svg icon-class="arrow-right" type="primary" :stroke="true"></icon-svg>
        </router-link>
      </el-row>
    </div>

    <div class="main-container__footer">
      <customer-service class="main-container__footer-custom">
        <icon-svg icon-class="login-customer-service" type="primary"></icon-svg>7*24小时在线客服
      </customer-service>
    </div>
  </div>
</template>

<script type="text/jsx">
import getcode from "@/mixins/getcode";
import { userNameRules,passRules } from "@/mixins/form";
import {
  User_Forget_Info_Api,
  forget_code_Api,
  ResetPassApi
} from "@/api/forget";
export default {
  name: "forget-password",

  mixins: [getcode],

  data() {
    return {
      currentStep: 0,

      //step-1
      form: {
        username: "",
        code: ""
      },
      rules: {
        username: userNameRules,
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      },

      formError: "",

      userData: {},

      //step-2
      selectForm: {
        type: "mobile",
        imgCode: "",
        username: ""
      },

      //step-3
      submitForm: {
        username: "username",
        code: "",
        password: "",
        newPwd: "",
        imgCode: "",
        type: ""
      },
      submitFormRules: {
        password: passRules,
        newPwd: [
          { required: true, message: "请再次输入密码" },
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback();
              } else if (value !== this.submitForm.password) {
                callback(new Error("两次输入密码不一致!"));
              } else {
                callback();
              }
            }
          }
        ]
      },
      uuid: ""
    };
  },
  methods: {
    GetUrlParam(url, paraName) {
      var arrObj = url.split("?");
      if (arrObj.length > 1) {
        var arrPara = arrObj[1].split("&");
        var arr;

        for (var i = 0; i < arrPara.length; i++) {
          arr = arrPara[i].split("=");

          if (arr != null && arr[0] == paraName) {
            return arr[1];
          }
        }
        return "";
      } else {
        return "";
      }
    },
    //获取验证码
    sendMesCode() {
      forget_code_Api({
        username: this.selectForm["username"],
        type: this.selectForm["type"],
        imgCode: this.selectForm["imgCode"],
        uuid: this.uuid
      })
        .then(res => {
          if (res.code === 1) {
            this.computedTimeCode();
          }
        })
        .catch(err => {
          console.warn(err);
        });
    },
    confirmFindWay(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.selectForm.imgCode = this.form.code;
          this.selectForm.username = this.form.username;
          this.sendMesCode();
          this.currentStep++;
        } else {
          return false;
        }
      });
    },

    finish() {
      this.$message({
        message: "新密码设定成功"
      });
    },

    //获取绑定信息
    getBindInfo(formname) {
      this.$refs[formname].validate(bool => {
        if (bool) {
          User_Forget_Info_Api({
            username: this.form["username"],
            code: this.form["code"],
            uuid: this.GetUrlParam(this.$refs.validateImg.tUrl, "uuid")
          })
            .then(res => {
              if (res.code !== 1) {
                this.formError = res.message;
                this.$refs.validateImg.change();
              } else {
                this.uuid = this.GetUrlParam(
                  this.$refs.validateImg.tUrl,
                  "uuid"
                );
                this.userData = res.data;
                let data = res.data;
                if (data.telephone) {
                  this.selectForm.type = "mobile";
                } else if (data.email) {
                  this.selectForm.type = "email";
                }
                //有无找回方式
                if (this.selectForm.type) {
                  this.currentStep++;
                } else {
                }
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
    //修改密码
    resetPass(name) {
      this.formError = "";
      this.submitForm.username = this.form.username;
      this.submitForm.imgCode = this.form.code;
      this.submitForm.type = this.selectForm.type;
      this.$refs[name].validate(valid => {
        if (valid) {
          ResetPassApi({
            username: this.submitForm["username"],
            type: this.submitForm["type"],
            code: this.submitForm["code"],
            newPwd: this.submitForm["newPwd"],
            uuid: this.uuid,
            imgCode: this.submitForm["imgCode"]
          })
            .then(res => {
              if (res.code !== 1) {
                this.formError = res.message;
              } else {
                this.$router.push("/login");
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
  },
};
</script>
