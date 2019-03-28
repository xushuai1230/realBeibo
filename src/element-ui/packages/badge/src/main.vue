<template>
  <div class="el-badge"
       :class="[
          type ? 'el-badge--' + type : ''
        ]"
  >
    <slot></slot>
    <transition name="el-zoom-in-center">
      <sup
        v-show="!hidden && (content || content === 0 || isDot)"
        v-text="content"
        class="el-badge__content"
        :class="{
          'is-fixed': $slots.default,
          'is-dot': isDot,
          'is-dot': isDot
        }"
    >
      </sup>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ElBadge',

  props: {
    value: {},
    max: Number,
    isDot: Boolean,
    type: {
      type: String,
      default: 'primary'
    },
    hidden: Boolean
  },

  computed: {
    content() {
      if (this.isDot) return;

      const value = this.value;
      const max = this.max;

      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? `${max}+` : value;
      }

      return value;
    }
  }
};
</script>
