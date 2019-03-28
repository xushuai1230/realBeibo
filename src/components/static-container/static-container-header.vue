<template>
  <div class="static-container-header"
       :class="[
       size ? `static-container-header--${size}` : ''
       ]"
  >
    <h5 class="static-container-header__title">
      <div class="static-container-header__left">
      <slot></slot>
      </div>
      <div class="static-container-header__right">
        <slot name="right"></slot>
      </div>
    </h5>
  </div>
</template>

<script>
  export default {
    name: "static-container-header",

    props: {
      size: String
    }
  };
</script>

<style lang="scss">
  $--title-size:28px;

  @include b (static-container-header) {
    // margin-bottom:30px;
    @include e(title) {
      color:$--color-black;
      font-size:$--title-size;
      padding-bottom: 20px;
      font-weight:bold;
      // border-bottom: 1px solid $--border-color-base-1;
      // margin-bottom: 30px;
      display: flex;
      justify-content: center;
    }

    @include e(left) {
      flex: 1 0 0;
    }

    @include m(small) {
      @include e(title) {
        font-size: 18px;
        margin-bottom: 20px;
      }
    }
  }
</style>