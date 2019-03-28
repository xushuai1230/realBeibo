<template>
  <el-dialog :visible.sync="warningVisible" @close="destroyElement" :width="width">
    <div class="message-tip">
      <div class="message-tip__icon">
        <svg-icon :icon-class="`modal-${type}`"></svg-icon>
      </div>
      <div class="message-tip__message">
        <slot name="message">
          {{message}}
        </slot>
      </div>
      <div class="message-tip__go-to">
        <slot name="goTo">
          {{goTo}}
        </slot>
      </div>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    name: 'message-tip',

    data() {
      return {
        warningVisible: true,
        type: 'warning',
        closed: false,
        width: '',
        message: '',
        goToIcon: '',
        goTo: '',
      };
    },

    watch: {
      closed(newVal) {
        if (newVal) {
          this.warningVisible = false;
        }
      }
    },

    methods: {
      close() {
        this.closed = true;
        if (typeof this.onClose === 'function') {
          this.onClose(this);
        }
      },
      destroyElement() {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      },
    }
  };
</script>

<style lang="scss" scoped>
  @include b(message-tip) {
    display: flex;
    flex-flow: column;
    align-items: center;
    @include e(icon) {
      flex: 1 0 0;
      margin-bottom: 20px;
      .svg-icon {
        width: 90px;
        height: 90px;
      }
    }

    @include e(message) {
      flex: 1 0 0;
      margin-bottom: 60px;
      color: $--color-black;
      text-align: center;
      line-height: 22px;
    }

    @include e(go-to) {
      width: 100%;
      flex: 1 0 0;
      text-align: center;
    }
  }

</style>