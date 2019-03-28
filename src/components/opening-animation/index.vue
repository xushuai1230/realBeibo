<template>
  <div class="opening-animation" :class="effectClass"></div>
</template>

<script>
  import {createAce} from './moment-ace';

  import {
    initBeast,
    hideMoments,
    drawBeast,
    passParticlesToRAF,
  } from './pe';

  export default {
    name: "opening-animation",

    props: ['value'],

    data() {
      return {
        effectClass: '',
        renderer: undefined,
        stage: undefined,
        vizGroup: undefined,
      };
    },

    methods: {
      animate() {
        this.renderer.render(this.stage);
        requestAnimationFrame(this.animate);


        drawBeast();
      },
      onResize(){
        this.renderer.resize(window.innerWidth,window.innerHeight);
        this.vizGroup.x = this.renderer.width/2;
        this.vizGroup.y = this.renderer.height/2;

        this.stage.x = this.renderer.width/2;
        this.stage.y = this.renderer.height/2;

      },
    },

    mounted() {
      this.renderer = new PIXI.autoDetectRenderer(800, 600, {
        transparent: false,
        antialias: true,
        backgroundColor: 0xf6f6f6
        // backgroundColor: 0x409EFF
        // backgroundColor: 0xc3c2c2
      });
      /*

       */
      this.$el.appendChild(this.renderer.view);


      this.stage = new PIXI.Container();
      this.vizGroup = new PIXI.Container();
      this.stage.addChild(this.vizGroup);

      initBeast();

      $( window ).resize(this.onResize);
      this.onResize();

      requestAnimationFrame(this.animate);

      createAce(this.stage, () => {
        this.effectClass = 'out';
        _.delay(() => {
          this.$emit('input', false);
          sessionStorage.setItem(anim.IS_FIRST_TIME, 0);
        }, 300);
      });
    }
  };
</script>

<style lang="scss" scoped>
  .opening-animation {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1000;
    opacity: 1;
    transition: opacity .3s ease-in;

    &.out {
      opacity: 0;
    }
  }

</style>