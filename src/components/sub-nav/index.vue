<template>
    <el-row class="main-sub__nav" type="flex" :justify="flex" tag="ul">
        <router-link tag="li" :to='item.path' exact-active-class="active" v-for='(item,index) in navList' :key="index">
            {{item.title}}
        </router-link>
    </el-row>
</template>


<script>
export default {
  name: "sub-nav",
  props: {
    navList: {
      default() {
        return [];
      },
      type: Array
    },
    flex:{
        default:'start',
        type:String
    }
  }
};
</script>

<style lang="scss" scoped>
@include b(main-sub__nav) {
  height: 79px;
  padding: 0 48px;
  background: #f3f3f3;
  line-height: 79px;
  width: 100%;
  li {
    width: 225px;
    text-align: center;
    font-size: 16px;
    font-family: " MicrosoftYaHei-Bold";
    font-weight: bold;
    color: black;
    cursor: pointer;
    &.active {
      color: #1e5adc;
    }
  }
}
</style>
