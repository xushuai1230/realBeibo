<template>
<div class="foldLine">
     <ve-line :data="chartData" :legend-visible= false :settings="chartSettings" width= '100%' height= '350px' :style="{width:'52%',height:'350px', float:'left', marginRight:'2%'}"></ve-line>
    <ve-line :data="chartData" :legend-visible= false :settings="chartSettings" width= '100%' height= '350px' :style="{width:'46%',height:'350px', float:'left'}"></ve-line>
</div>
</template>

<script>
export default {
  name: "fold-line",
  data() {
    this.chartSettings = {
      metrics: ["访问用户"],
      area: true
    };
    return {
      chartData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          { 日期: "1/1", 访问用户: 1393, 下单率: 0.32 },
          { 日期: "1/2", 访问用户: 3530, 下单率: 0.26 },
          { 日期: "1/3", 访问用户: 2923, 下单率: 0.76 },
          { 日期: "1/4", 访问用户: 1723, 下单率: 0.49 },
          { 日期: "1/5", 访问用户: 3792, 下单率: 0.323 },
          { 日期: "1/6", 访问用户: 4593, 下单率: 0.78 }
        ]
      }
    };
  },
  props:[{
    vipData: Array,
    required: true
  },{
    zjData:Array,
    required:true
  }],
  
  mounted() {
    console.log('test',this.vipData)
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.foldLine {
  width: 100%;
  height: 350px;
  float: left;
  margin-top: 44px;
  #zjChart {
    float: left;
    margin-right: 6%;
  }
  #vipChart {
    float: left;
  }
}
</style>
