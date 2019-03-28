<template>
  <span class="customer-serivce" @click="open"><slot></slot></span>
</template>

<script>
  export default {
    name: "customer-service",
    props:{
    },
    data(){
      return{
        url: `https://szzero.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=576264&configID=53412&jid=9259996324&s=1&enterurl=${encodeURIComponent(window.location.href)}`,
      };
    },

    computed: {
      // ...mapGetters([
      //   'username',
      //   'userId',
      //   'isLogin'
      // ]),
    },
    methods:{
      open(){
        // let newwin;
        // if (this.isLogin) {
        //   newwin = window.open(
        //     `${this.url}&info=${encodeURIComponent(`userId=${this.userId}&name=${this.username}`)}`,
        //     'service',
        //     'width=800,height=680',
        //   );
        // } else {
        //   newwin = window.open(`${this.url}`, 'service', 'width=800,height=680');
        // }
        // newwin.moveTo(100, 50);
      },
    },
  };
</script>

<style lang="scss">
  .customer-serivce {
    cursor: pointer;
  }
</style>
