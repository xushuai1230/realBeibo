<template>
  <label
    class="custom-button"
    :class="[
      size ? 'custom-button--' + size : '',
      { 'is-active': value === label },
      { 'is-disabled': isDisabled },
      { 'is-focus': focus }
    ]"
    role="radio"
    :aria-checked="value === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="value = isDisabled ? value : label"
  >
    <input
      class="custom-button__orig-radio"
      :value="label"
      type="radio"
      v-model="value"
      :name="name"
      @change="handleChange"
      :disabled="isDisabled"
      tabindex="-1"
      @focus="focus = true"
      @blur="focus = false"
    >
    <span class="custom-button__inner" :style="value === label ? activeStyle : null">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'CustomButton',

    mixins: [Emitter],

    inject: {
      elForm: {
        default: ''
      },
      elFormItem: {
        default: ''
      }
    },

    props: {
      label: {},
      disabled: Boolean,
      name: String
    },
    data() {
      return {
        focus: false
      };
    },
    computed: {
      value: {
        get() {
          return this._radioGroup.value;
        },
        set(value) {
          this._radioGroup.$emit('input', value);
        }
      },
      _radioGroup() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.componentName !== 'CustomButtonGroup') {
            parent = parent.$parent;
          } else {
            return parent;
          }
        }
        return false;
      },
      activeStyle() {
        return {
          backgroundColor: this._radioGroup.fill || '',
          borderColor: this._radioGroup.fill || '',
          boxShadow: this._radioGroup.fill ? `-1px 0 0 0 ${this._radioGroup.fill}` : '',
          color: this._radioGroup.textColor || ''
        };
      },
      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },
      size() {
        return this._radioGroup.radioGroupSize || this._elFormItemSize || (this.$ELEMENT || {}).size;
      },
      isDisabled() {
        return this.disabled || this._radioGroup.disabled || (this.elForm || {}).disabled;
      },
      tabIndex() {
        return !this.isDisabled ? (this._radioGroup ? (this.value === this.label ? 0 : -1) : 0) : -1;
      }
    },

    methods: {
      handleChange() {
        this.$nextTick(() => {
          this.dispatch('CustomButtonGroup', 'handleChange', this.value);
        });
      }
    }
  };
</script>

<style lang="scss">

  @import "~themes/chalk/src/mixins/_button";

  @include b(custom-button) {
    position: relative;
    display: inline-block;
    outline: none;

    + .custom-button {
      margin-left: 15px;
    }

    @include e(inner) {
      //display: inline-block;
      line-height: 1;
      white-space: nowrap;
      vertical-align: middle;
      background: $--button-default-fill;
      font-weight: normal;
      border-left: 0;
      color: $--button-default-color;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      position: relative;
      cursor: pointer;
      transition: $--all-transition;

      display: flex;
      align-items: center;
      justify-content: center;


      @include button-size($--button-padding-vertical - 3, $--button-padding-horizontal + 4, 12px, 0);

      &:hover {
        color: $--color-primary;
      }

      & [class*="el-icon-"] {
        line-height: 0.9;

        & + span {
          margin-left: 5px;
        }
      }

    }

    @include when(active) {
      @include e(inner) {
        font-weight: bold;
      }
    }

    &:first-child {
      .custom-button__inner {
        border-radius: $--border-radius-base;
        box-shadow: none !important;
      }
    }

    @include e(orig-radio) {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;

      &:checked {
        & + .custom-button__inner {
          color: $--radio-button-checked-color;
          background-color: $--radio-button-checked-fill;
          border-color: $--radio-button-checked-border-color;
          box-shadow: -1px 0 0 0 $--radio-button-checked-border-color;
        }
      }

      &:disabled {
        & + .custom-button__inner {
          color: $--button-disabled-color;
          cursor: not-allowed;
          background-image: none;
          background-color: $--button-disabled-fill;
          border-color: $--button-disabled-border;
          box-shadow: none;
        }
        &:checked + .custom-button__inner {
          background-color: $--radio-button-disabled-checked-fill;
        }
      }
    }

    .custom-button__inner {
      border-radius: $--border-radius-base;
    }

    @include m(medium) {
      & .custom-button__inner {
        @include button-size($--button-medium-padding-vertical, $--button-medium-padding-horizontal, $--button-medium-font-size, 0);
      }
    }
    @include m(small) {
      & .custom-button__inner {
        @include button-size($--button-small-padding-vertical, $--button-small-padding-horizontal, $--button-small-font-size, 0);
      }
    }
    @include m(mini) {
      & .custom-button__inner {
        @include button-size($--button-mini-padding-vertical, $--button-mini-padding-horizontal, $--button-mini-font-size, 0);
      }
    }

    &:focus:not(.is-focus):not(:active){ /*获得焦点时 样式提醒*/
      box-shadow: 0 0 2px 2px $--radio-button-checked-border-color;
    }
  }
</style>