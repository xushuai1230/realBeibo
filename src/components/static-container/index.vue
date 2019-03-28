<template>
  <div class="static-container animated fadeIn">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "static-container",
  };
</script>

<style lang="scss">

  @include b(static-container) {
    @include e(content) {
      margin-top:40px;
    }
    @include e(radio-group) {
      .el-radio-button__inner {
        width: 166px;
        height: 40px;
        /*padding: 13px 58px;*/
      }
    }
  }
</style>