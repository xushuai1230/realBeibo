<template>
  <div class="el-tip"
       :class="[
      sizeClass ? 'el-tip--' + sizeClass : '',
      type ? 'el-tip--' + type : '',
      {
        'is-no-spacing': this.noSpacingClass,
      }
      ]"
  >
    <em class="el-tip__pre-decor"></em>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "el-tip",

    inject: {
      elFormItem: {
        default: ''
      },
    },

    props: {
      size: String,
      noSpacing: Boolean,
      type: String,
    },

    methods: {

    },

    computed: {

      noSpacingClass() {
        return isNaN(this.elFormItem) ? this.noSpacing : !!this.elFormItem;
      },
      formItemSize() {
        return this.elFormItem ? this.elFormItem.sizeClass : '';
      },
      elTipSize() {
        return this.size || this.formItemSize;
      },
      sizeClass() {
        return this.elTipSize || (this.$ELEMENT || {}).size;
      }
    }
  };
</script>

<style lang="scss">

  @include b(el-tip) {
    height:46px;
    border:1px solid $--border-color-base-1;
    border-radius: $--border-radius-base;
    line-height:46px;
    font-size: $--font-size-small;
    overflow:hidden;
    margin-bottom: 30px;
    box-sizing: border-box;
    padding-right: 20px;

    @include m(medium) {
      line-height:40px;
      height:40px;
    }

    @include m(success) {
      color: $--color-success;
      .svg-icon {
        fill: $--color-success;
      }
      @include e(pre-decor) {
        background: $--color-success;
      }
    }

    @include m(warning) {
      .svg-icon {
        fill: $--color-warning;
      }
      @include e(pre-decor) {
        background: $--color-warning;
      }
    }

    @include m(danger) {
      .svg-icon {
        fill: $--color-danger;
      }
      @include e(pre-decor) {
        background: $--color-danger;
      }
    }

    @include e(pre-decor) {
      float:left;
      display:block;
      width: 6px;
      height:100%;
      margin-right:20px;
      background: $--color-primary;
    }
    @include when(no-spacing) {
      margin-bottom: 0;
    }
  }

</style>
