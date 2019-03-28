<template>
    <el-container>
        <el-header height='79px' :style="{'padding':'0'}">
            <v-header></v-header>
        </el-header>
        <el-main class="main_center">
            <router-view></router-view>
        </el-main>
        <el-footer :style="{'padding':'0'}" height='506px'>
            <v-footer></v-footer>
        </el-footer>

    </el-container>

</template>


<script>
import vHeader from "@/view/yet-login/header/yet-header";
import vFooter from "@/view/yet-login//footer/yet-footer";
export default {
  name: "header",
  data() {
    return {};
  },
  components: {
    vHeader,
    vFooter
  }
};
</script>
<style lang="scss" scoped>
.main_center{
    padding: 30px 0;
//   padding: 20px 275px 0 275px;
}
</style>


