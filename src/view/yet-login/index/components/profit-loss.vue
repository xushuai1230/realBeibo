<template>
    <div class="profitLoss">
       <ve-line :theme-name= title :data="chartData" :settings="chartSettings"></ve-line>
    </div>
</template>

<script>
export default {
  name: "profit-loss",
  data() {
    this.chartSettings = {
      metrics: ["访问用户", "下单用户","12321","43543"],
      area: true
    };
    return {
     
      chartData: {
        columns: ["日期", "访问用户", "下单用户","12321","43543", "下单率"],
        rows: [
          {
            日期: "1/1",
            访问用户: 1393,
            下单用户: 1093,
            12321: 1393,
            43543: 930,
            下单率: 0.32
          },
          {
            日期: "1/2",
            访问用户: 130,
            下单用户: 1320,
            12321: 2193,
            43543: 393,
            下单率: 0.26
          },
          {
            日期: "1/3",
            访问用户: 2323,
            下单用户: 2223,
            12321: 1393,
            43543: 193,
            下单率: 0.76
          },
          {
            日期: "1/4",
            访问用户: 723,
            下单用户: 423,
            12321: 393,
            43543: 593,
            下单率: 0.49
          },
          {
            日期: "1/5",
            访问用户: 702,
            下单用户: 992,
            12321: 193,
            43543: 893,
            下单率: 0.323
          },
          {
            日期: "1/6",
            访问用户: 4593,
            下单用户: 4293,
            12321: 1393,
            43543: 1063,
            下单率: 0.78
          }
        ]
      }
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.profitLoss {
  width: 100%;
}
</style>
