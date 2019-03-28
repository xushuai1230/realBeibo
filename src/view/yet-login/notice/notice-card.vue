<template>
  <div class="notice-card"
       :class="[
       {
         'is-readable': readable
         }
       ]"
  >
    <!-- <div class="notice-card__icon">
      <slot name="badge"></slot>
    </div> -->
    <div class="notice-card__main">
      <div class="notice-card__title">
        <em class="notice-card__icon" v-if="readable"></em>
        <span class="notice-card__pointer">
        <slot name="title">
          {{title}}
        </slot>
        </span>
      </div>
      <div class="notice-card__content">
        <span class="notice-card__detail">
        <slot name="content">
          {{content}}
        </slot>
        </span>
      </div>
    </div>
    <div class="notice-card__time">
      <icon-svg icon-class="pen" type="black" size="mini"></icon-svg>
      {{time | dataFormat('yyyy-MM-dd')}}, <span>{{time | dataFormat('hh:mm:ss')}}</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: "notice-card",

    props: {
      content: {},
      time: {},
      title: {},
      readable: {
        type: Boolean,
        default: true
      }
    },

    data() {
      return {

      };
    }
  };
</script>

<style lang="scss">
  $--color-gray-13: #969696 !default;
  $--background-gray-12: #E1E1E1 !default;

  @include b(notice-card) {
    border-bottom: 1px solid $--border-color-base;
    height: 123px;

    display: flex;
    align-items: center;
    padding: 20px 30px;
    box-sizing: border-box;

    @include when(readable) {
      cursor: pointer;
    }

    &:nth-child(even){
      background: #fbfbfb;
    }
    &:last-child{
      border-bottom:0;
    }

    @include e(main) {
      font-size: $--font-size-base;
      flex: 1 0 0;
    }
    @include e(title) {
      margin-bottom: 12px;
      color: $--color-text-regular;
      font-weight: bold;
    }
    @include e(content) {
      font-size: $--font-size-small;
    }

    @include e(time) {
      font-size: $--font-size-small;
    }

    @include e(icon) {
      display:inline-block;
      width:8px;
      height:8px;
      border-radius:100%;
      margin-right:10px;
      background:$--color-primary;
    }
    @include e(pointer) {
      font-size:$--font-size-x-large;
      color:$--color-black;
    }
    @include e(detail) {
      font-size:$--font-size-base;
      color:$--color-black;
    }

    @include when(readed) {
      @include e(icon) {
        display:inline-block;
        width:8px;
        height:8px;
        border-radius:100%;
        margin-right:10px;
        background:$--background-gray-12;
      }
      @include e(pointer) {
        font-size: $--font-size-x-large;
        color: $--color-gray-13;
      }
      @include e(detail) {
        font-size:$--font-size-base;
        color:$--color-gray-13;
      }
      .notice-card__time{
        .svg-icon{
          fill: $--color-gray-13;
        }
        color:$--color-gray-13;
      }
    }
  }
</style>