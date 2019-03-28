<template>
    <div class="content">
        <div class="footer">
            <div class="footer-top">
                <img class="logo" src="../header/img/beiboLogo.png" alt="">
                <p class="introduce">
                    “BALLBET贝博体育”一直在不懈地追求技术创新。 通过个性化的用户体验，技术领先的尖端产品，周到细致的 <br>
                     客户服务质量，完善的技术，支持和支持，我们为用户创建了一个全面的互动平台，在各方面都建立了良好的声 <br>
                     誉。 它得到了业界和用户的一致认可。
                </p>
                <div class="platform">
                    <div class="sponsor">
                        <p>合作平台商</p>
                         <img src="./img/ebet.png" alt="">
                        <img src="./img/ag.png" alt="">
                        <img src="./img/playtech.png" alt="">
                        <img src="./img/xiaojin.png" alt="">
                    </div>
                    <div class="app-down">
                       <div class="erweima"></div>
                       <p>代理后台APP</p>
                       <p>扫描下载代理后台APP随时随刻关注数据详情</p>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>Copyright © 2018 Ballbet Group All</p>
                <ul>
                  <li @click="footernav(index)" v-for="(item,index) in bottomList" :key="index">
                     {{item}}
                  </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "footer",
  data() {
    return {
      bottomList: ["关于我们", "合作协议", "佣金方案", '精彩声明', '博彩责任', "常见问题"]
    };
  },
  mounted() {
    // console.log(this.bottomList);
  },
  components: {},
  methods: {
    footernav(key) {
      document.documentElement.scrollTop = document.body.scrollTop = 0;
      if (key === 0) {
         this.$router.push("/problem/aboutus");
        } else if (key === 1) {
         this.$router.push("/problem/agreement");
        } else if (key === 2) {
          this.$router.push("/problem/scheme");
        } else if (key === 5) {
          this.$router.push("/problem/problem");
          
        }
    }
  }
};
</script>
 <style lang="scss" scoped>
.footer {
  width: 100%;
  height: 506px;
  .footer-top {
    width: 100%;
    height: 425px;
    padding: 64px 120px 0;
    background: url("./img/footer.png") no-repeat center;
    background-size: 100% 100%;
    > .logo {
      display: block;
      width: 257px;
      height: 39px;
      margin: 0 auto 30px;
    }
    .introduce {
      width: 100%;
      text-align: center;
      font-size: 18px;
      font-family: MicrosoftYaHei;
      color: rgba(255, 255, 255, 1);
      padding-bottom: 47px;
      line-height: 36px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2632);
    }
    .platform {
      width: 100%;
      .sponsor {
        width: 50%;
        float: left;
        > p {
          margin: 48px 0 26px 0;
          font-size: 16px;
          font-family: MicrosoftYaHei-Bold;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
        }
        > img {
          &:nth-child(2) {
            float: left;
            width: 89px;
            height: 23px;
            margin-right: 20px;
          }
          &:nth-child(3) {
            float: left;
            width: 66px;
            height: 25px;
            margin-right: 20px;
          }
          &:nth-child(4) {
            float: left;
            width: 94px;
            height: 23px;
            margin-right: 20px;
          }
          &:nth-child(5) {
            float: left;
            width: 75px;
            height: 23px;
            margin-right: 20px;
          }
        }
      }
    }
    .app-down {
      width:33%;
      float: right;
      margin-top: 35px;
      .erweima {
        width: 86px;
        height: 86px;
        background: rgba(255, 255, 255, 1);
        border-radius: 5px;
        float: left;
        margin-right: 12px;
      }
      > p {
        &:nth-child(2) {
          padding-top: 33px;
          font-size: 16px;
          font-family: MicrosoftYaHei-Bold;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
        }
        &:nth-child(3) {
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
  .footer-bottom {
    width: 100%;
    height: 81px;
    padding: 0 120px;
    line-height: 81px;
    margin-top: -1px;
    background: rgba(36, 40, 45, 1);
    > p {
      float: left;
      font-size: 15px;
      font-family: MicrosoftYaHei;
      color: rgba(255, 255, 255, 0.5);
    }
    > ul {
      width: auto;
      height: 100%;
      float: right;
      li {
        float: left;
        font-size: 15px;
        margin-left: 24px;
        font-family: MicrosoftYaHei;
        color: rgba(255, 255, 255, 0.4);
      }
    }
  }
}
</style>
