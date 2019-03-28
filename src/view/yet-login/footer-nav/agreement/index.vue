<template>
   <div class="agreement">
       <div v-for="(item,index) in content" :key="index">
           <h3>{{item.title}}</h3>
           <div v-for="(data,key) in item.subtitle.content" :key="key">
              <h4 v-if="data.subtitle">{{data.subtitle}}</h4>
              <div v-html="data.content"></div>
           </div>
       </div>
   </div> 
</template>

<script>
import './index.scss'
import data from './agreement.json'
export default {
    name:'agreement',
    data() {
        return {
            content:''
        }
    },
    mounted() {
        this.content = data
    }
}
</script>
