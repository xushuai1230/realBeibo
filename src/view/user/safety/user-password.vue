<template>
  <div class="safety-edit">
    <dialog-subtitle>
      在此可更改登陆密码，若忘记登陆密码，则可在“登录页-忘记密码”处通过手机或邮箱进行找回。
    </dialog-subtitle>
    <el-form class="main-container-main__form" :model="form" :rules="rules" ref="form" :disabled="loading" @submit.native.prevent="updatePass('form')" label-position="top">
      <el-form-item prop="oldPwd" label="旧密码：">
        <password-input v-model="form.oldPwd" placeholder="请输入旧密码" auto-complete="off"></password-input>
      </el-form-item>
      <el-form-item prop="newPwd" label="新密码：">
        <password-input v-model="form.newPwd" placeholder="请输入新密码" auto-complete="off"></password-input>
      </el-form-item>
      <el-form-item prop="confirmPwd" label="确认新密码：">
        <password-input v-model="form.confirmPwd" placeholder="请再次输入新密码" auto-complete="off"></password-input>
      </el-form-item>
      <el-form-item no-spacing>
        <el-button :block="true" type="primary" native-type="submit" :loading="loading">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/jsx">
import { mapState,mapMutations } from "vuex";
const initForm = () => {
  return {
    oldPwd: undefined,
    newPwd: undefined,
    confirmPwd: undefined
  };
};
import { updatePassApi } from "@/api/user";
import { passRules, newpassRules } from "@/mixins/form";
export default {
  name: "safety-password",

  data() {
    return {
      labelWidth: "120px",
      editVisible: false,
      form: initForm(),
      rules: {
        oldPwd: passRules,
        newPwd: newpassRules,
        confirmPwd: [
          {
            required: true,
            message: "请再次输入密码"
          },
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error("请再次输入密码"));
              } else if (value !== this.form.newPwd) {
                callback(new Error("两次输入密码不一致!"));
              } else {
                callback();
              }
            }
          }
        ]
      }
    };
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },

  methods: {
    ...mapMutations({
      add: 'LOGIN_OUT_STATE'
    }),
    //确认修改密码
    updatePass(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          updatePassApi({
            oldPwd: this.form["oldPwd"],
            newPwd: this.form["confirmPwd"]
          })
            .then(res => {
              if (res.code !== 1) {
                this.$message({
                  message: res.message,
                  type: "error"
                });
              } else {
                this.$message({
                  message: "修改成功，请重新登陆!",
                  type: "success"
                });                
                this.add();
                
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
    // this.bindSave(saveApi, 'saveForm', 'form', {
    //   beforeSend: (data) => {
    //     this.formError = '';
    //     return data;
    //   },
    //   afterSuccess: () => {
    //     this.$store.dispatch(types.OAUTH);
    //     this.$emit('on-success');
    //     const vm = this.$messageTip({
    //       message: '密码修改成功，请重新登录号！',
    //       type: 'success',
    //       width: consts.DIALOG_SIZE_NORMAL,
    //       goTo: <router-link to={
    //         {
    //           name: 'login'
    //         }
    //       }><el-button type="primary" block class="icon-link" nativeOnClick={() => {vm.close();this.logout();}}>确定</el-button></router-link>
    //     });
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
