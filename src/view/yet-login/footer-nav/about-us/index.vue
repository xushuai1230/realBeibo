<template>
   <div class="aboutus">
       <div v-for="(item,index) in content" :key="index">
           <h3>{{item.title}}</h3>
           <div v-html="item.content"></div>
       </div>
   </div> 
</template>

<script>
import data from "./about-us.json";
import "./index.scss";
export default {
  name: "about-us",
  data() {
    return {
      content: ""
    };
  },
  mounted() {
    this.content = data;
    console.log(this.content);
  }
};
</script>

<style>
</style>

