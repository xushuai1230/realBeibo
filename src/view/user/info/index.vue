<template>
  <div class="component-info">
    <static-container class="info">
      <div class="static-container-header">
        <h5 class="static-container-header__title">
          <div class="static-container-header__left">
            个人资料
          </div>
          <div class="static-container-header__right"></div>
        </h5>
      </div>

      <static-container-body>
        <user-info></user-info>
      </static-container-body>
    </static-container>

    <user-address></user-address>
  </div>
</template>

<script>
import UserInfo from "./user-info";
import UserAddress from "./address";

export default {
  name: "user-view",
  components: {
    UserInfo,
    UserAddress
  }
};
</script>

<style lang="scss" scoped>
@include b(component-info){
   padding: 20px 275px 0 275px;
}
@include b(static-container-header) {
  @include e(title) {
    margin-bottom: 29px;
  }
  @include e(left) {
    font-size: 27px;
    font-family: MicrosoftYaHei-Bold;
    font-weight: bold;
    color: #202124;
  }
}
@include b(info) {
  padding-bottom: 40px;
  margin-bottom: 20px;
}
</style>
