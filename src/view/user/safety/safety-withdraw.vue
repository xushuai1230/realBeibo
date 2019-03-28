<template>
  <div class="safety-edit">
    <dialog-subtitle>
      请输入验证码以确认“现金安全”的{{actionName}}
    </dialog-subtitle>
    <el-form class="main-container-main__form" :model="form" :rules="rules" ref="form" :disabled="loading"
             @submit.native.prevent="doSave({action: 'saveForm', form: 'form'})"
             label-position="top"
    >
      <el-form-item class="main-container-main__item" prop="code" :label="`手机号码：${user.telephone}`" :error="formError">
        <el-input class="main-container-main__input" v-model="form.code" placeholder="请输入验证码" auto-complete="off">
          <template slot="prepend">
            <svg-icon icon-class="login-security"></svg-icon>
          </template>
          <template slot="append">
            <el-button @click="sendCode"
                       type="dark"
                       shadow
                       :disabled="sendingCode"
                       size="medium">
              {{codeBtnText}}
            </el-button>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item no-spacing>
        <el-button
          :block="true"
          type="primary"
          native-type="submit"
          :loading="loading"
        >确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  // import {form, getCode} from '@/build';

  // import {getValidateCode as codeApi, userSecurityUpdateApi as saveApi} from "@/services/api/user";
import {mapState} from 'vuex';
  export default {
    name: "safety-withdraw",
    // mixins:[getCode, form],

    // inject: ['setDialogHeader'],

    data(){
      return {
        form:{
          type: consts.CODE_CASH_SECURITY,
          status: consts.SECURITY_OPEN,
          code: undefined,
          // userId: this.user.id
        },
        codeApi,
        labelWidth: '120px',
        formError: '',
        rules:{
          code:{required:true,message:'验证码不能为空！'}
        },
      };
    },
    computed: {
      ...mapState({
        user: state => state.user,
      }),
      // ...mapGetters([
      //   'isWithdrawProtect'
      // ]),
      actionName() {
        return this.isWithdrawProtect ? '关闭' : '开启';
      }
    },
    methods: {
    },

    created() {
      this.setDialogHeader(`${this.actionName}提现安全`);
    },

    mounted() {

      this.bindSave(saveApi, 'saveForm', 'form', {
        beforeSend: (data) => {
          this.formError = '';
          return {
            type: 0,
            status: this.isWithdrawProtect ? consts.WITHDRAW_PROTECT_CLOSE : consts.WITHDRAW_PROTECT_OPEN,
            code: data.code
          };
        },
        afterSuccess: () => {
          this.$store.dispatch(types.OAUTH);
          this.$store.dispatch(types.GET_SECURITY);
          this.$emit('on-success');
        },
        afterFail: ([result, data]) => {
          this.formError = data.message;
        }
      });
    }

  };
</script>
