<template>
  <div v-show="isShow">
    <svg class="polygon-transfer" ref="svg" viewBox="0 0 100 100" preserveAspectRatio="none">
    </svg>
  </div>
</template>

<script>
  // import Snap from 'snapsvg';
  import Snap from 'snapsvg-cjs';


  const toPointsList = [
    [0, 0, 25, 0, 0, 100, 0, 100],
    [0, 0, 25, 0, 50, 100, 0, 100],
    [0, 0, 75, 0, 50, 100, 0, 100],
    [0, 0, 75, 0, 100, 100, 0, 100],
    [0, 0, 100, 0, 100, 100, 0, 100],
  ];

  const endPointsList = [
    [25, 0, 100, 0, 100, 100, 0, 100],
    {
      points: [120, 0, 120, 0, 100, 100, 100, 100],
      duration: 350
    }
  ];

  export default {
    name: "polygon-transfer",

    props: ['value'],

    data() {
      return {
        s: undefined,
        p1: undefined,
        toDuration: 100,
        spacing: 150,
        endDuration: 200,
        isShow: false,
      };
    },

    watch: {
      value(isAnimation) {
        if (isAnimation) {
          this.start();
        }
      }
    },

    methods: {
      start() {
        this.isShow = true;
        this.toAnim();
      },
      toAnim() {

        this.anim(toPointsList, 0, () => {
          _.delay(() => {
            this.anim(endPointsList, 0, () => {
              this.reset();
            });
          }, this.spacing);
        });
      },

      anim(toPointsList, index = 0, callback = _.noop) {
        this.$_toAnim(toPointsList[index], () => {
          index++;
          if (index < toPointsList.length) {
            _.delay(() => {
              this.anim(toPointsList, index, callback);
            }, 100);
          } else {
            callback();
          }
        });
      },

      $_toAnim(points, callback) {
        let toDuration = this.toDuration;
        if (_.isPlainObject(points)) {
          toDuration = points.duration;
          points = points.points;
        }
        this.p1.animate({
          points,
        },toDuration, mina.linear, callback);
      },

      reset() {
        this.p1.attr({
          points: [0, 0, 0, 0, 0, 100, 0, 100]
        });
        this.$emit('input', false);
        this.isShow = false;
      },
    },

    mounted() {
      this.s = Snap(this.$refs.svg);
      this.p1 = this.s.polygon([0, 0, 0, 0, 0, 100, 0, 100])
        .attr({
          fill: '#ffffff',
        });
    }
  };
</script>

<style lang="scss" scoped>
  .polygon-transfer {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
  }

</style>