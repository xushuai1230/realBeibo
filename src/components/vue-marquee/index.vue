<template>
  <div class="marquee" @mouseenter="stopScoll" @mouseleave="startScoll">
    <!--<div class="content" v-html="content" ref="container" v-if="isHtml"></div>-->
    <div class="content" ref="container">
      <slot :content="content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vue-marquee",
    props:{
      // 速度 1:1px
      speed:{
        type: Number,
        default: 50
      },
      scrollWidth:{
        type: Number,
        required: true
      },
      content:{
        required: true
      },
      // isHtml:{  // 内容显示方式
      //   type:Boolean,
      //   default: true
      // }
    },
    data(){
      return{
        //总长度
        initialLeft: 0,
        //当前长度
        currentLeft: 0,
        //分屏
        tween: null,
      };
    },
    watch:{
      content: {
        handler() {
          if(this.content !== ''){
            this.$nextTick(() => {
              this.currentLeft = this.initialLeft = this.$refs.container.offsetWidth;
              this.stopScoll();
              this.startScoll();
            });
          }
        },
        immediate: true
      }
    },

    computed: {
      duration() {
        return (this.initialLeft * 2 - (this.initialLeft - this.currentLeft)) / this.speed;
      },
    },
    methods:{
      startScoll(){
        TweenMax.set(this.$refs.container, {
          left: this.currentLeft
        });

        this.tween = TweenMax.to(this.$refs.container, this.duration, {
          left: -this.initialLeft,
          ease: Power0.easeNone,
          onComplete:() => {
            this.currentLeft = this.scrollWidth;
            this.startScoll();
          }
        });
      },
      stopScoll(){
        this.currentLeft = this.$refs.container.offsetLeft;
        if (this.tween) {
          this.tween.pause();
        }
        // Velocity(this.$refs.container, 'stop', true);
      }
    },
    // mounted(){
    //   this.$nextTick(() => {
    //     this.currentLeft = this.initialLeft = this.$refs.container.offsetWidth
    //     this.stopScoll()
    //     this.startScoll()
    //   })
    // }
  };
</script>

<style lang="scss">
  .marquee{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    .content{
      position: absolute;
      left: 100%;
      /*min-width: 100%;*/
      height: 100%;
      white-space: nowrap;
    }
  }
</style>
