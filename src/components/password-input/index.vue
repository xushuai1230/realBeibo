<template>
  <el-input class="password-input" v-model="cInput" :type="type" :placeholder="placeholder" auto-complete="off">
    <template slot="prepend">
      <icon-svg icon-class="password"></icon-svg>
    </template>
    <template slot="append">
      <icon-svg class="password-input__eye" :icon-class="eyeIcon" @click.native="show = !show"></icon-svg>
    </template>
  </el-input>
</template>

<script>
  export default {
    name: "password-input",

    model: {
      prop: 'input',
      event: 'change'
    },

    props: {
      input: {},
      placeholder: {
        default: ''
      }
    },

    data() {
      return {
        show: false,
      };
    },

    computed: {
      cInput: {
        get() {
          return this.input;
        },
        set(value) {
          this.$emit('change', value);
        }
      },
      type() {
        return this.show ? 'text' : 'password';
      },
      eyeIcon() {
        return this.show ? 'eye' : 'eye-close';
      }
    }
  };
</script>

<style lang="scss" scoped>
  @include b(password-input) {
    @include e(eye) {
      cursor: pointer;
    }
  }
</style>