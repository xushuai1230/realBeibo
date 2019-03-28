<template>
    <div class="lcvAnalysis">
        <div class="title">
            <h3>用户留存率</h3>
            <span @mouseenter="tipsShow = true" @mouseleave="tipsShow = false">?</span>
            <div v-if="tipsShow">
                <h3>什么是登录用户留存？ </h3>
                <p>登录用户留存是指某个时间新增的用户，经过一段时期后，仍在登录我们产品的用户。该指标可以用来掌握用户的粘性及忠诚度。 登录用户留存定义：有登录的用户</p>
                <h3>登录用户留存率 </h3>
                <p>例子: <br> 10月1号新注册100个会员，10月2号有80个人登录，10月3号有70个人登录则10月2号登录留存率80%，10月3号登录留存率70%</p>
                <div></div>
            </div>
        </div>
        <div class="tablist">
            <div>
                <span>域 名</span>
                <p>www.baidu.com</p>
            </div>
            <div>
                <li @click="lcvtab(index)" :class="{lclist:item.show}" v-for="(item,index) in dateList" :key="index">
                    {{item.title}}
                </li>
            </div>
            <div>
                <el-select v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>
        <lcvAnalysis></lcvAnalysis>
        <lcvLine></lcvLine>
    </div>
</template>

<script>
  import lcvAnalysis from "./lcv-table.vue";
  import lcvLine from "./lcv-line.vue";
  export default {
    name: "lcv-Analysis",
    data() {
      return {
        tipsShow: false,
        dateList: [
          {
            title: "过去1天",
            show: true
          },
          {
            title: "过去3天",
            show: ""
          },
          {
            title: "过去7天",
            show: ""
          },
          {
            title: "过去30天",
            show: ""
          }
        ],
        options: [
          {
            value: "选项1",
            label: "黄金糕"
          },
          {
            value: "选项2",
            label: "双皮奶"
          },
          {
            value: "选项3",
            label: "蚵仔煎"
          },
          {
            value: "选项4",
            label: "龙须面"
          },
          {
            value: "选项5",
            label: "北京烤鸭"
          }
        ],
        value: ""
      };
    },
    components: {
      lcvAnalysis,
      lcvLine
    },
    methods: {
      lcvtab(index) {
        for (let i = 0; i < this.dateList.length; i++) {
          this.dateList[i].show = false;
        }
        this.dateList[index].show = true;
      }
    }
  };
</script>

<style lang="scss" scoped>
.lcvAnalysis {
  width: 100%;
  height: auto;
  padding: 0 45px;

  .title {
    width: 100%;
    height: 37px;
    margin-top: 30px;
    margin-bottom: 30px;
    position: relative;

    > h3 {
      float: left;
      font-size: 28px;
      font-family: MicrosoftYaHei-Bold;
      font-weight: bold;
      color: rgba(32, 33, 36, 1);
      margin-right: 12px;
    }

    > span {
      float: left;
      width: 28px;
      height: 28px;
      background: rgba(243, 243, 243, 1);
      color: rgba(0, 0, 0, 0.4);
      border-radius: 14px;
      text-align: center;
      line-height: 28px;
      margin-top: 5px;
    }

    > div {
      width: 474px;
      height: 251px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 12px 36px 0px rgba(0, 0, 0, 0.08);
      border: 1px solid RGBA(222, 222, 222, 1);
      position: absolute;
      top: 47px;
      left: 69px;
      padding: 24px;
      z-index: 2000 !important;
      > div {
        width: 15px;
        height: 15px;
        border: 1px solid RGBA(222, 222, 222, 1);
        border-bottom: none;
        border-left: none;
        transform: rotate(-45deg);
        background: rgba(255, 255, 255, 1);
        position: absolute;
        top: -9px;
        left: 88px;
        z-index: 2014 !important;
      }

      > h3 {
        font-size: 14px;
        font-family: PingFangSC-Semibold;
        font-weight: 600;
        color: rgba(0, 0, 0, 1);
        margin-bottom: 14px;
      }

      > p {
        font-size: 14px;
        font-family: PingFangSC-Semibold;
        color: rgba(0, 0, 0, 1);
        margin-bottom: 14px;
      }
    }
  }

  .tablist {
    width: 100%;
    height: 47px;
    margin-bottom: 37px;

    > div {
      &:nth-child(1) {
        float: left;
        width: 35%;
        line-height: 47px;

        > span {
          float: left;
          font-size: 17px;
          font-family: MicrosoftYaHei-Bold;
          font-weight: bold;
          color: rgba(0, 0, 0, 1);
        }

        > p {
          float: left;
        }
      }

      &:nth-child(2) {
        width: 50%;
        float: left;

        > li {
          float: left;
          padding: 0 5.6%;
          line-height: 47px;
          font-size: 14px;
          font-family: MicrosoftYaHei-Bold;
          font-weight: bold;
          color: rgba(0, 0, 0, 1);
        }

        .lclist {
          background: rgba(30, 90, 220, 1);
          border-radius: 9px;
          font-size: 14px;
          font-family: MicrosoftYaHei-Bold;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
}
</style>
