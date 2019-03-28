<template>
  <button
    type="button"
    class="close-button"
    aria-label="Close">
    <i class="el-icon-close"></i>
  </button>
</template>

<script>
  export default {
    name: "close-button",
  }
</script>

<style lang="scss">
  @include b(close-button) {
    background: $--color-white;
    border: none;
    outline: none;
    cursor: pointer;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    box-shadow: 0px 8px 30px 0px rgba(0,0,0,0.24);
    display: flex;
    align-items: center;
    justify-content: center;
    .el-icon-close{
      font-size: 16px;
      font-weight: bold;
      color: $--color-black-3;
    }
  }

</style>