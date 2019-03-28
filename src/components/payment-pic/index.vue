<template>
  <img class="payment-pic" :src="paymentInfo.pic" />
</template>

<script>
  export default {
    name: "payment-pic",
    props: {
      paymentId: {
        type: Number,
        default: 1
      }
    },

    computed: {
      paymentInfo() {
        return _.find(consts.PAYMENT_LIST, {value: this.paymentId});
      }
    }
  };
</script>

<style lang="scss">
  @include b(payment-pic) {

  }

</style>