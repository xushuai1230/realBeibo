<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
  
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("user/Get_user");
  }
};
</script>
<style lang="scss">
  #app{
    overflow:hidden;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>

