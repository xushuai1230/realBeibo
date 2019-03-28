<template>
  <div class="main-container login-container">
    <div class="main-container-main__title main-container-main__title--spacing-small">
        贝博代理端
      </div>
    <el-radio-group class="main-container__header" shadow block v-model="currentLoginType">
      <el-radio-button label="mobile">
        <icon-svg icon-class="mobile" :type="currentLoginType === 'mobile' ? 'white' : 'black'"></icon-svg>
        手机快捷登录
      </el-radio-button>
      <el-radio-button label="account">
        <icon-svg icon-class="user_login" :type="currentLoginType === 'account' ? 'white' : 'black'"></icon-svg>账户名登录
      </el-radio-button>
    </el-radio-group>

    <div class="main-container__main">
      <mobile-login v-if="currentLoginType === 'mobile'"></mobile-login>

      <account-login v-else-if="currentLoginType === 'account'"></account-login>

      <el-row class="main-container__links" type="flex" justify="space-between">
        <router-link :to="{name: 'forget-pass'}" class="main-container__link">
          <icon-svg icon-class="arrow-right" type="primary" :stroke="true" :reverse="true"></icon-svg>
          忘记密码？
        </router-link>
        <router-link :to="{name: 'register'}" class="main-container__link">
          去注册
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

<script>
import MobileLogin from "./mobile-login";
import AccountLogin from "./account-login";
import CustomerService from "@/components/customer-service/index";

export default {
  name: "login-view",

  components: {
    CustomerService,
    MobileLogin,
    AccountLogin
  },

  data() {
    return {
      currentLoginType: "mobile"
    };
  }
};
</script>
<style lang="scss">
@include b(main-container) {
  @include e(main-container__header) {
    @include e(svg-icon) {
      width: 14px;
      height: 24px;
      margin-right: 24px;
    }
  }
}
</style>
