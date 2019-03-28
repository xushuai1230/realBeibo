<template>
  <el-container>
    <el-header height='79px' :style="{'padding':'0'}">
      <v-header></v-header>
    </el-header>
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <el-footer :style="{'padding':'0'}" height='506px'>
      <v-footer></v-footer>
    </el-footer>
    
  </el-container>

</template>


<script>
import vHeader from "./header/yet-header";
import vFooter from "./footer/yet-footer";
export default {
  name: "header",
  data() {
    return {};
  },
  components: {
    vHeader,
    vFooter
  },
  mounted() {}
};
</script>

<style>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    margin-left: 10px;
    opacity: 0;
  }
</style>


