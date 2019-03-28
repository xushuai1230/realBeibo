<template>
  <div class="user-info animated fadeIn">
    <div class="content">
      user-check
    </div>
  </div>
</template>

<script>
  export default {
    name: "user-check",
    data (){
      return {
        tableData: [{
          key: 1,
          time: '2018.03.29 15:05:46 ',
          orderNo: 'ck2018032900074',
          trade: '存款',
          sub_type: '在线支付',
          money: '200000.00',
          status: '成功',
        },{
          key: 2,
          time: '2018.03.29 15:05:46 ',
          orderNo: 'ck2018032900074',
          trade: '存款',
          sub_type: '在线支付',
          money: '200000.00',
          status: '成功',
        }]
      }
    }
  };
</script>

<style lang="scss" >

</style>
