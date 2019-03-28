<template>
  <div class="dialog-subtitle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "dialog-subtitle"
  };
</script>

<style lang="scss" scoped>
  @include b(dialog-subtitle) {
    color: $--color-black-4;
    font-size: 14px;
    text-align: center;
    margin-bottom: 55px;
  }

</style>