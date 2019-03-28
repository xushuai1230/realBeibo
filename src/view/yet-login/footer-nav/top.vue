<template>
    <div @click="top" class="top">
        1
    </div>
</template>

<script>
export default {
  name: "top",
  data() {
    return {};
  },
  props: {
    toBottom: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    document.querySelector(".top").style.bottom = this.toBottom;
  },
  methods: {
    top() {
      document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
  }
};
</script>

<style scoped lang="scss">
.top {
  width: 56px;
  height: 56px;
  background: rgba(30, 90, 220, 1);
  @include box-shadow(0px, 11px, 34px, 0px, rgba(0, 0, 0, 0.16));
  @include border-radius (28px);
  text-align: center;
  line-height: 56px;
  color: #ffffff;
  margin-left: 90%;
}
</style>
