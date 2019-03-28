<template>
  <div class="el-warning"
       :class="[
      sizeClass ? 'el-warning--' + sizeClass : '',
      {
        'is-no-spacing': this.noSpacingClass,
      }
      ]"
  >
    <icon-svg class="el-warning__icon" icon-class="warning"></icon-svg>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "el-warning",

    inject: {
      elFormItem: {
        default: ''
      },
    },

    props: {
      size: String,
      noSpacing: Boolean,
    },

    methods: {

    },

    computed: {

      noSpacingClass() {
        return isNaN(this.elFormItem) ? this.noSpacing : !!this.elFormItem;
      },
      _formItemSize() {
        return this.elFormItem ? this.elFormItem.sizeClass : '';
      },
      elTipSize() {
        return this.size || this._formItemSize;
      },
      sizeClass() {
        return this.elTipSize || (this.$ELEMENT || {}).size;
      }
    }
  };
</script>

<style lang="scss">

  @include b(el-warning) {
    line-height:22px;
    font-size: $--font-size-small;
    box-sizing: border-box;
    padding-right: 20px;
    padding-left: 14px;
    display: flex;
    align-items: center;
    color: #ff5546;

    @include m(medium) {
      line-height:40px;
      height:40px;
    }

    @include e(icon) {
      width: 20px;
      height: 20px;
      margin-right: 16px;
      fill: #e9811d;
    }
    @include when(no-spacing) {
      margin-bottom: 0;
    }
  }

</style>
