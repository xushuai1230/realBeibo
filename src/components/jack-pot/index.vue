<template>
  <div class="jack-pot"
       :class="[
      size ? 'jack-pot--' + size : '',
      ]"
  >
    <div class="jack-pot__decor"></div>
    <div class="jack-pot__container">
      <div class="jack-pot__secondary-title">老虎机游戏</div>
      <div class="jack-pot__title">
        <slot name="title">
          {{title}}
        </slot>
      </div>
      <div class="jack-pot__jackpot">
        <div class="jack-pot__jackpot-title">奖池</div>
        <div class="jack-pot__jackpot-prize">¥{{value | currency}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "jack-pot",

    props: {
      title:  {
        default: 'PT老虎机超级大奖池累计金额'
      },
      value: {
        default: 1000000
      },
      size: String,
    }
  };
</script>

<style lang="scss" scoped>
  @include b(jack-pot) {
    width:638px;
    height:623px;
    background:linear-gradient(180deg,rgba(1,24,83,1) 0%,rgba(56,139,182,1) 100%);
    box-shadow:0px 10px 20px 0px rgba(0,0,0,0.11);
    border-radius: $--border-radius-base;
    position: relative;
    display: inline-block;

    @include m(medium) {
      width:468px;
      height:569px;
      @include e(decor) {
        background: url("./decor-medium.png") no-repeat;
        width: 469px;
        height: 515px;
        left: 16px;
        top: -28px;
      }
      @include e(jackpot-prize) {
        font-size:38px;
      }
    }

    @include e(decor) {
      position: absolute;
      background: url("./decor.png") no-repeat;
      width: 636px;
      height: 585px;
      left: 26px;
      top: -38px;
    }

    @include e(container) {
      padding: 33px 40px 29px 36px;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      position: relative;
    }

    @include e(secondary-title) {
      font-size: $--font-size-large;
      color: rgba(255, 255, 255, 0.5);
    }
    @include e(title) {
      font-size: 42px;
      color: $--color-white;
      font-weight: bold;
    }
    @include e(jackpot) {
      position: absolute;
      bottom: 29px;
    }
    @include e(jackpot-title) {
      font-size: $--font-size-large;
      color: rgba(255, 255, 255, 0.5);
    }
    @include e(jackpot-prize) {
      color: $--color-white;
      font-size: 54px;
    }
  }
</style>