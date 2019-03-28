<template>
  <div class="play-button">
    <div class="play-button__play">
      <div class="play-button__triangle"></div>
    </div>
    <el-button class="play-button__button" :shadow="true" type="primary">
      <slot></slot>
    </el-button>
  </div>
</template>

<script>
  export default {
    name: "play-button"
  }
</script>

<style lang="scss" scoped>
  $--item-content-left: 32px !default;

  @include b(play-button) {
    position: relative;
    margin-left: $--item-content-left;
    margin-bottom: 32px;
    @include e(play) {
      position: absolute;
      width: 44px;
      height: 44px;
      left: 20px;
      top: -10px;
      border-radius: $--border-radius-base;
      background-color: $--color-white;
      box-shadow: 0px 10px 20px 0px rgba(40, 12, 62, 0.35);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @include e(triangle) {
      width: 0;
      height: 0;
      border-top: 7px solid transparent;
      border-left: 12px solid $--color-primary;
      border-bottom: 7px solid transparent;
      position: relative;
      left: 2px;
    }
    @include e(button) {
      padding-left: 70px;
      padding-right: 42px;
    }
  }
</style>