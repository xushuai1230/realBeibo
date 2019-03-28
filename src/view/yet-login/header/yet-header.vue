<template>
  <div class="content">
    <div class="header">
     <div class="logo">
       <img src="./img/beiboLogo.png" alt="">
     </div>
      <ul class="headerNav">
        <router-link :to='item.path' tag="li" active-class="active" v-for="(item,index) in navArr" :key="index">
          {{item.title}}
        </router-link>
      </ul>
      <div class="profile">
        <icon-svg icon-class="phone"></icon-svg>
        <span @click="$router.push('/notice')">
          <icon-svg icon-class="notice"></icon-svg>
          <span>2</span>
        </span> 
        <div @mouseenter="userListShow = true" @mouseleave = "userListShow = false" class="userInfo">
          <icon-svg icon-class="user"></icon-svg>
          <span>{{username}}<i></i></span>
          <ul v-if="userListShow">
            <li @click="userprofile(k)" v-for="(item,k) in UserArr" :key="k">
              {{item}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      navArr: [
        {
          title: "首页",
          path: "/index"
        },
        {
          title: "推广数据",
          path: "/extension"
        },
        {
          title: "下级列表",
          path: "/lowerlist"
        },
        {
          title: "报表中心",
          path: "/reportform"
        },
        {
          title: "佣金提现",
          path: "/withdraw/index"
        }
      ],
      UserArr: ["个人资料", "安全中心", "退出"],
      userListShow: false,
      username: ""
    };
  },
  components: {},
  // watch: {
  // },
  mounted() {
    // console.log('11',JSON.parse( window.localStorage.getItem('profile')).username)
    this.username = JSON.parse( window.localStorage.getItem('profile')).username
  },
  methods: {
    userprofile(i) {
      if (i === 0) {
        this.$router.push("/user/info");
      } else if (i === 1) {
        this.$router.push("/user/safety");
      }
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 79px;
  background: rgba(10, 19, 18, 1);
  padding: 0 3%;
  .logo {
    width: 17%;
    height: 100%;
    background: #110606;
    float: left;
    padding: 21px 0;
    > img {
      width: 242px;
      height: 37px;
    }
  }
  .headerNav {
    width: 51%;
    height: 100%;
    float: left;
    margin-left: 8%;
    margin-right: 5%;
    line-height: 79px;
    > li {
      float: left;
      padding: 0 4%;
      font-size: 18px;
      font-family: MicrosoftYaHei-Bold;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      position: relative;
      cursor: pointer;
      .level-menu {
        width: 155px;
        height: auto;
        position: absolute;
        padding: 9px 0;
        top: 100%;
        right: -18px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.08);
        font-size: 16px;
        font-family: MicrosoftYaHei-Bold;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
        > li {
          width: 155px;
          height: 36px;
          line-height: 36px;
          font-size: 16px;
          font-family: MicrosoftYaHei-Bold;
          font-weight: bold;
          color: rgba(0, 0, 0, 1);
          padding-left: 22px;
          &:hover {
            width: 155px;
            height: 36px;
            background: rgba(0, 0, 0, 0.0426);
            font-size: 16px;
            font-family: MicrosoftYaHei-Bold;
            font-weight: bold;
            color: rgba(30, 90, 220, 1);
          }
        }
      }
    }
    .active {
      background: rgba(30, 90, 220, 1);
    }
  }
  .profile {
    width: 19%;
    height: 100%;
    float: left;
    padding: 23px 0;
    > svg {
      width: 1em;
      height: 1em;
      font-size: 33px;
      float: left;
      margin-right: 13%;
    }
    > span {
      &:nth-child(2) {
        display: block;
        float: left;
        width: 19px;
        height: 33px;
        position: relative;
        > svg {
          width: 24px;
          height: 29px;
          margin-top: 3px;
        }
        > span {
          width: 16px;
          height: 16px;
          border-radius: 8px;
          position: absolute;
          background: rgba(217, 17, 47, 1);
          font-size: 11px;
          font-family: MicrosoftYaHei-Bold;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
          top: -7px;
          right: -7px;
          text-align: center;
          line-height: 16px;
        }
      }
    }
    .userInfo /deep/ {
      float: right;
      padding-top: 4px;
      position: relative;
      height: 56px;
      z-index: 10;
      > svg {
        width: 21px;
        height: 26px;
        float: left;
        margin-right: 12px;
      }
      > span {
        float: left;
        width: auto;
        height: 100%;
        font-size: 18px;
        font-family: MicrosoftYaHei-Bold;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        > i {
          width: 9px;
          height: 9px;
          display: inline-block;
          border: 1px solid #ffffff;
          border-right: 1px solid transparent;
          border-top: 1px solid transparent;
          transform: rotate(-45deg);
          margin: 0 10px 5px 12px;
        }
      }
      ul {
        width: 140px;
        height: auto;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.08);
        position: absolute;
        top: 100%;
        right: 0;
        li {
          width: 140px;
          height: 36px;
          text-align: center;
          line-height: 36px;
          font-size: 16px;
          font-family: MicrosoftYaHei-Bold;
          font-weight: bold;
          color: rgba(0, 0, 0, 1);
          &:hover {
            background: rgba(0, 0, 0, 0.0426);
            font-size: 16px;
            font-family: MicrosoftYaHei-Bold;
            font-weight: bold;
            color: rgba(30, 90, 220, 1);
          }
        }
      }
    }
  }
}
</style>