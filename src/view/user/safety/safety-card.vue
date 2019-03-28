<template>
  <div class="safety-card">
    <div class="safety-card__title">
      <div class="safety-card__icon">
        <slot name="icon"></slot>
      </div>
    </div>
    <div class="safety-card-item">
      <div class="safety-card-item__title">{{title}}</div>
      <div class="safety-card-item__desc">{{subTitle}}</div>
    </div>
    <div class="safety-card__button">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "safety-card",
    props: {
      title: String,
      subTitle: String,
      type: {
        default: 'circle'
      }
    }
  };
</script>

<style lang="scss">

  @include b(safety-card) {
    display: flex;
    border-radius: $--border-radius-base;
    border: 1px solid $--border-color-base;
    margin-bottom: 20px;
    background-color: $--color-white;
    overflow: hidden;
    transition: all .5s;
    padding: 25px 30px;
    box-sizing: border-box;

    @include e(title) {
      width: 50px;
      display: flex;
      align-items: center;
    }

    @include e(icon) {
      .svg-icon {
        width: 24px;
        height: 30px;
      }
    }
  }

  @include b(safety-card-item) {
    display: inline-block;
    vertical-align: top;
    flex: 1 0 0;
    @include e(title) {
      font-size: $--font-size-x-large;
      color: $--color-black;
      font-weight: bold;
      margin-bottom: 12px;
    }
    @include e(desc) {
      color: $--color-black-4;
    }
  }

</style>