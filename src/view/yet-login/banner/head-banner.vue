<template>
    <div class="banner">
        <div>
            <h3>
             {{title}}
            </h3>
            <p>
             {{yTitle}}
            </p>
        </div>
        
    </div>
</template>
<script>
export default {
  name: "head-banner",
  data() {
    return {};
  },
  props: {
    title: "",
    yTitle: ""
  },
  watch: {
    $route(to, from) {
      // console.log("2111111", to.path);
      if (to.path === "/problem/problem") {
        this.title = "常见问题";
        this.yTitle = "Frequently asked questions (FAQ)";
      } else if (to.path === "/problem/aboutus") {
        this.title = "关于我们";
        this.yTitle = "About our company";
      } else if (to.path === "/problem/agreement") {
        this.title = "合作协议";
        this.yTitle = "Cooperation";
      } else if (to.path === "/problem/scheme") {
        this.title = "佣金方案";
        this.yTitle = "Commission program";
      }
    }
  },
  mounted() {
    if (this.$route.path === "/problem/problem") {
      this.title = "常见问题";
      this.yTitle = "Frequently asked questions (FAQ)";
    } else if (this.$route.path === "/problem/aboutus") {
      this.title = "关于我们";
      this.yTitle = "About our company";
    } else if (this.$route.path === "/problem/agreement") {
      this.title = "合作协议";
      this.yTitle = "Cooperation";
    } else if (this.$route.path === "/problem/scheme") {
      this.title = "佣金方案";
      this.yTitle = "Commission program";
    }
  }
};
</script>
<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 405px;
  background: url(./img/head-banner.png) no-repeat center;
  background-size: 100% 100%;
  color: #ffffff;
  overflow: hidden;

  > div {
    text-align: center;
    margin-top: 10%;

    > h3 {
      font-size: 43px;
      font-family: MicrosoftYaHei-Bold;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      margin-bottom: 10px;
    }

    > p {
      font-size: 18px;
      font-family: AppleSystemUIFont;
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>


