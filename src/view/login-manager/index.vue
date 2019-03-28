<template>
  <div class="login-manager">
    <div class="login-manager__header">
      <div class="login-manager__logo">
        <img src="./img/logo.png">
      </div>
      <router-link class="login-manager__close" :to="{name: 'home'}">
        <svg-icon icon-class="close"></svg-icon>
        关闭
      </router-link>
    </div>
    <transition
      mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "login-manager",
  };
</script>

<style lang="scss">
  @include b(login-manager) {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: url('./img/bg.png') no-repeat no-repeat top center;
    background-size: cover;

    @include e(header) {
      @include main-center(80%);
      margin-top: 27px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @include e(logo) {
    //   background: url(~assets/logo-white.png) no-repeat no-repeat top center;
      width: 190px;
      height: 27px;
      flex: 1 0 0;
      img{
        height: 100%;
      }
    }

    @include e(close) {
      font-size: 15px;
      color: $--color-white;
      display: flex;
      justify-content: center;
      align-items: center;
      .svg-icon {
        width: 12px;
        height: 12px;
        margin-right: 10px;
      }
    }
    @include b(main-container) {
      width: 510px;
      //height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      overflow: hidden;
      background: $--color-white;
      border-radius: 6px;

      .link {
        color: $--color-text-placeholder;
      }
    }
  }

  @include b(main-container) {
    box-sizing: border-box;
    padding: 58px 50px 14px;
    @include e(header) {
      width: 100%;
      margin-bottom: 50px;

      .svg-icon {
        width: 14px;
        height: 24px;
        margin-right: 24px;
      }
    }

    @include e(header-btn-inner) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @include e(header-btn) {
      width:49.9%;
      .svg-icon {
        width: 14px;
        height: 24px;
        margin-right: 24px;
      }
    }

    @include e(footer) {
      padding:0 50px;
      text-align:center;
    }
    @include e(footer-custom) {
      color: $--color-black-4;
      display: flex;
      align-items: center;
      justify-content: center;
      .svg-icon {
        margin-right: 13px;
      }
    }

    @include e(main) {
      padding-bottom: 22px;
      margin-bottom: 14px;
      border-bottom: 1px solid rgba(222,222,222,1);;
    }

    @include e(links) {
      margin-top: 36px;
    }

    @include e(link) {
      .svg-icon {
        width:4px;
        height:12px;
      }
    }
  }

  @include b(main-container-main) {
    padding-bottom:0;

    @include e(title) {
      font-size: 28px;
      font-weight: bold;
      color: #202124;
      margin-bottom: 60px;
      text-align: center;

      @include m(spacing-small) {
        margin-bottom: 24px;
      }
    }

    @include e(sub-title) {
      font-size: $--font-size-small;
      color: $--color-black-4;
      margin-bottom: 8px;
    }
    @include e(item) {
      position:relative;

      @include m(submit) {
        margin-top: 36px;
      }
    }

    @include e(send-code) {
      position:absolute;
      top:4px;
      right:4px;
      width:129px;
      .el-button {
        height: 42px!important;
        text-align: center;
        padding:0;
        font-size: $--font-size-base;
      }
    }

    @include e(steps) {
      margin-bottom: 60px;
    }


    @include e(radio) {
      margin-bottom: 30px;

      + .el-radio {
        margin-left: 0;
      }
    }

    @include e(radio-label) {
      display: inline-block;
      font-size: $--font-size-base;
      color: $--color-black;
      vertical-align: middle;
    }

    @include e(radio-tip) {
      color: $--color-black-4;
      margin-top: 8px;
    }

    @include e(btn-group) {
      display: flex;
      .el-button {
        flex: 1 0 0;
        + .el-button {
          margin-left: 20px;
        }
      }

    }
    @include e(avatar) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 40px;
    }
  }
</style>
