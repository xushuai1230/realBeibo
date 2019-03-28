<template>
    <div class="realAtatistics">
        <vipDetaiil></vipDetaiil>
        <gameSum></gameSum>
    </div>
</template>

<script>
import vipDetaiil from '../components/vip-detail'
import gameSum from '../components/game-sum.vue'
export default {
   name:"real-statistics",
   data() {
       return {

       }
   },
   components: {
       vipDetaiil,
       gameSum
   }
}
</script>

<style lang="scss" scoped>
.realAtatistics {
    width: 100%;
    height: auto;
    padding: 0 45px;
}
</style>

