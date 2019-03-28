<template>
  <div class="safety-detail-content">
    <div class="safety-detail-content__title" v-if="!!title">
      <span class="safety-detail-content__title-block">{{title}}</span>
      <svg-icon icon-class="close" type="black" :pointer="true" @click.native="closeSubContent"></svg-icon>
    </div>
    <div class="safety-detail-content__sub-title" v-if="!!subTitle">
      <svg-icon class="safety-detail-content__icon" icon-class="notice" type="warning" v-if="subTitleType"></svg-icon>
      {{subTitle}}
    </div>
    <div class="safety-detail-content__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'safety-detail-content',
    provide() {
      return {
        detailContent: this
      };
    },

    inject: ['closeSubContent'],

    data() {
      return {
        title: '',
        subTitle: '',
        subTitleType: '',
      };
    },
  };
</script>

<style lang="scss">
  @include b(safety-detail-content) {
    color: $--color-text-primary;
    font-size: $--font-size-base;

    @include e(title) {
      color: $--color-text-primary;
      font-size: $--font-size-base;
      padding-bottom: 10px;
      border-bottom: 1px solid #dddddd;

      display: flex;
      align-items: center;
    }

    @include e(icon) {
      margin-right: 6px;
    }

    @include e(title-block) {
      flex: 1 0 0;
    }

    @include e(sub-title) {
      color: $--color-text-secondary;
      font-size: $--font-size-small;
      padding: 35px 0;
      display: flex;
      align-items: center;
    }

    @include e(body) {

    }

  }
</style>