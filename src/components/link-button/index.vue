<template>
    <div class="link-button" :style='{"width":w,"margin-left":ml?"30px":"0px"}' :class="{'link-button--border':border}">
        <slot></slot>
    </div>
</template>

<script>
export default {
  props:{
    w:{
      default:'160px',
      type:String
    },
    border:{
      default:false,
      type:Boolean
    },
    ml:{
      default:false,
      type:Boolean
    }
  }
};
</script>


<style lang="scss" scoped>
@include b(link-button) {
  font-size: 16px;
  font-family: "MicrosoftYaHei-Bold";
  font-weight: bold;
  color: #1e5adc;
  cursor: pointer;
  width: 160px;
 
  @include when(border){
    border-bottom: 1px dashed #1e5adc;
  }
  i {
    color: #1e5adc;
    font-weight: bold;
    font-size: 14px;
    margin-left: 12px;
  }
}
</style>
