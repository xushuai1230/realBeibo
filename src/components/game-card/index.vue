<template>
  <div class="c-game-card">
    <div class="c-game-card__cell">
      <div class="c-game-card__title">
        <slot></slot>
      </div>
      <div class="c-game-card__button">
        <slot name="button"></slot>
      </div>
    </div>
    <div class="c-game-card__brief">
      <slot name="brief"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "game-card"
  };
</script>

<style lang="scss">
  $--game-card-border-color: #999999;

  @include b(c-game-card) {
    display: flex;
    flex-flow: column nowrap;

    @include e(cell) {
      @include flex-center();
      // border: 1px solid $--game-card-border-color;
      // background:$--game-card-border-color;
      width: 100%;
      margin-bottom: 10px;
    }

    @include e(title) {
      font-size: 30px;
      margin: 11px 0;
    }

    @include e(button) {
    }
    @include e(brief) {
      color: #cccccc;
    }
  }
</style>