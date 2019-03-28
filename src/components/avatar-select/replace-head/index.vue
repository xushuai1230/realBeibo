<template>
  <div class="replace-head-image">
    <div class="replace-head-image__list">
      <div
        @click="selectImg(i)"
        class="replace-head-image__item"
        :class="{'is-active': form.avatar == i}"
        v-for="(item, i) in avatarList"
      >
        <img class="replace-head-image__item-head" :src="item.pic" alt="">
      </div>
    </div>
    <div class="replace-head-image__btn">
      <el-button class="replace-head-image__confirm" type="primary" @click="conform">确定</el-button>
    </div>
  </div>
</template>

<script>
  import avatarList from '../avatar-list';

  import {
    avatarSaveApi as saveApi
  } from '@/services/api/user';

  import form from '@/mixins/form';

  export default {
    name: 'replace-head',

    mixins: [form],

    props: ['avatar'],

    data() {
      return {
        form: {
          avatar: this.avatar,
        },
        avatarList
      };
    },
    methods: {
      selectImg(n) {
        this.form.avatar = n;
      },
      conform() {
        this.doSave({action: 'save'});
      }
    },

    mounted() {
      this.bindSave(saveApi, 'save', 'form', {
        successMessage: '设置头像成功',
        afterSuccess: () => {
          this.$store.dispatch(types.OAUTH);
          this.$emit('on-success');
        }
      });
    }
  };
</script>

<style lang="scss" scoped>
  @include b(replace-head-image) {
    @include e(list) {
      width: 539px;
      height: 282px;
      margin-bottom: 33px;
      overflow: auto;
    }
    @include e(item) {
      float: left;
      width: 102px;
      height: 102px;
      margin: 0 29px 33px 0;
      border: 3px solid #ffffff;
      border-radius: 100%;
      overflow: hidden;
      cursor: pointer;
      @include utils-transition-normal();

      &:nth-child(4n) {
        margin-right: 0;
      }
      @include when(active) {
        border: 3px solid #1E5ADC;
      }
    }
    @include e(item-head) {
      width: 100%;
      height: 100%;
    }
    @include e(btn) {
      text-align: center;
    }
    @include e(confirm) {
      width: 410px;
      height: 50px;
    }
  }
</style>