<template>
    <div class="svipDetail">
        <div class="title">
            <div>
                <div>
                    <h3>佣金概况 / </h3>
                    <h3>会员概况</h3>
                </div>
                <p>2018.08.08</p>
            </div>
            <div>
                <a @click="$router.history.go(-1)">
                    <span></span>
                    返回
                </a>
            </div>
        </div>
         <ul class="tablist">
            <li @click="tabSwitch(index)" :class="{active: item.show}" v-for="(item,index) in viplist" :key="index">
                {{item.title}}({{item.num}})
            </li>
        </ul>
        <viptable></viptable>
    </div>
</template>

<script>
import "./vip-detail.scss"
import viptable from "../components/vip-table.vue"
export default {
  name: "vip-detail",
  data() {
    return {
        viplist: [
        {
          title: "新会员",
          num: "50",
          show: true
        },
        {
          title: "活跃会员",
          num: "50",
          show: ""
        },
        {
          title: "待活跃会员",
          num: "50",
          show: ""
        },
        {
          title: "有效会员",
          num: "50",
          show: ""
        },
        {
          title: "登录会员",
          num: "50",
          show: ""
        }
      ],
    };
  },
  components: {
    viptable
  },
  methods: {
    tabSwitch(index) {
      for (let i = 0; i < this.viplist.length; i++) {
        this.viplist[i].show = false;
      }
      this.viplist[index].show = true;
    }
  }
};
</script>

<style>
</style>
