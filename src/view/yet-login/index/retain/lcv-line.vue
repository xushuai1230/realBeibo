<template>
    <div class="lcvLine">
       <div>
           <h3>留存率图表</h3>
           <ul>
               <li @click="lcvChoose(index)" :class="{lcvTab:item.show}" v-for="(item,index) in dateArr" :key="index">
                   {{item.title}}
               </li>
           </ul>
       </div>
       <div id="lcvline" :style="{width:'100%',height: '400px'}" ></div>
    </div>
</template>

<script>
import './lcv-line.scss'
export default {
  name: "lcv-line",
  data() {
    return {
      dateArr: [
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
      ]
    };
  },
  mounted() {
    this.lcvCharts();
  },
  methods: {
      lcvChoose(index) {
        for(let i = 0;i<this.dateArr.length;i++) {
         this.dateArr[i].show = false
       }
        this.dateArr[index].show = true
      },
    lcvCharts() {
      let myChart = this.$echarts.init(document.getElementById("lcvline"));
      myChart.setOption({
        tooltip: {
          trigger: "axis"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          }
        ]
      });
    }
  }
};
</script>

<style>
</style>
