<template>
    <div class="scheme">
        <div class="process">
            <ul>
                <li v-for="(item, index) in process" :key="index">
                     <div>
                        <span>{{item.num}}</span> 
                     </div>
                     <div>
                         <h3>{{item.title}}</h3>
                         <p>{{item.content}}</p>
                     </div>   
                </li>
            </ul>
        </div>
        <div class="income">
            <h3>合作伙伴收入</h3>
            <p>我们有不同的佣金形式供代理选择<br> 1.根据代理线下用户的“总输赢”进行计算的代理返佣模式，这个返佣模式佣金高，配合网站的活动很容以推广。<br> 2.与此同时我们还提供多层佣金计算，同时可以推广会员或者下级代理</p>
        </div>
        <v-pattern></v-pattern>
        <v-agent></v-agent>
        <v-introduce></v-introduce>
    </div>
</template>
<script>
import pattern from './pattern.vue'
import agent from './agent.vue'
import introduce from './introduce.vue'
import "./index.scss";
export default {
  name: "scheme",
  data() {
    return {
        process:[
            {num:'1',"title":"第一步","content":"注册"},
            {num:'2',"title":"第二步","content":"通过"},
            {num:'3',"title":"第三步","content":"盈利"}
        ]
    };
  },
  components: {
      "v-pattern":pattern,
      'v-agent': agent,
      'v-introduce': introduce
  }
};
</script>

