<template>
  <div class="static-container-body" :style="{'margin-top':mt}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "static-container-body",
    props:{
      mt:{
        default:'0px',
        type:String
      }
    }
   
  };
</script>

<style scoped>

</style>