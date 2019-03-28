<template>
<div>
    <banner></banner>
    <router-view></router-view>
    <v-top v-show="topShow"></v-top>
</div>
</template>

<script>
import banner from "../banner/head-banner.vue";
import top from './top.vue'
export default {
    data() {
      return {
        topShow: true
      }
    },
    components: {
      'v-top': top,
      banner
    },
    mounted() {
    }
}
</script>

<style>

</style>
