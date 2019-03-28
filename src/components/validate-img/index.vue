<template>
  <img :src="tUrl" class="validate-img" @click="change" :width="width" :height="height">
</template>

<script>
import {API_ROOT} from '@/api/config';
import {uuid} from '@/utils/uuid';
  export default {
    name: 'validate-img',
    props: {
      url: {
        default: API_ROOT+`/api/gl/image/code?uuid=${uuid(8,2)}`,
      },
      width: {
        default: 100,
      },
      height: {
        default: 40
      }
    },

    data() {
      return {
        tUrl: this.url
      };
    },

    methods: {
      change() {
        this.tUrl = `${this.url}&_t=${Math.random()}`;
      }
    },
  };
</script>

<style lang="scss">
  @include b(validate-img) {
    border-radius: $--border-radius-base;
    cursor: pointer;
    box-shadow: 0px 6px 30px 0px
    rgba(0, 0, 0, 0.24);
  }

</style>