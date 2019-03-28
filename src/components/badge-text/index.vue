<template>
  <div class="badge-text">
    <div :class="`badge-text__${textInfo.type}`">
      <icon-svg :icon-class="textInfo.label" :type="textInfo.type"></icon-svg>{{textInfo.title}}
    </div>
  </div>
</template>

<script>
import {TRADE_STATUS} from '@/const';
console.log(TRADE_STATUS)
  export default {
    name: "badge-text",

    props: {
      value: {},
      dic: {}
    },

    computed: {
      textInfo() {
        return TRADE_STATUS.find((item)=>{
          return (item.value===this.value);
        })
        // return _.find(consts[this.dic], {value: this.value});
      }
    }
  };
</script>

<style lang="scss">
  @include b(badge-text) {
    @include e((processing, danger, primary, warning)) {
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      .svg-icon {
        width: 10px;
        margin-right: 6px;
      }
    }
    @include e(warning) {
      color: $--color-warning;
    }
    @include e(danger) {
      color: $--color-danger;
    }
    @include e(primary) {
      color: $--color-primary;
    }
  }
</style>