<template>
  <div class="avatar-select"
       :class="[
       {
       'is-shadow': shadow
       }
       ]"
  >
    <img class="avatar-select__pic" :src="headerImg.pic">
    <div
      @click="openDialog({props: {avatar}, dialogName: 'replace-head'})"
      class="avatar-select__upload-img">
      <svg-icon icon-class="camera" type="info"></svg-icon>
    </div>
    <div v-transfer-dom>
      <el-dialog :visible.sync="dialogVisible" :before-close="() => {dialogVisible = false}" :title="dialogTitle"
                 :width="consts.DIALOG_SIZE_MEDIUM">
          <replace-head v-if="dialogVisible"
                        :avatar="dialogProps.avatar"
                        @on-success="closeDialog"
          ></replace-head>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import avatarList from './avatar-list';
  import dialog from "@/mixins/dialog";
  import ReplaceHead from './replace-head';

  export default {
    name: "avatar-select",

    components: {
      ReplaceHead
    },

    mixins: [dialog],
    props: {
      shadow: Boolean
    },

    data () {
      return {
        dialogTitle: '更换头像'
      };
    },

    computed: {
      ...mapGetters([
        'avatar'
        
      ]),
      headerImg() {
        return avatarList[this.avatar];
      }
    },
    methods: {
      handleRemove () {

      }
    }
  }
</script>

<style lang="scss" scoped>
  $--width: 108px;
  $--height: 108px;

  @include b(avatar-select) {
    position: relative;
    display: inline-block;
    border-radius: $--border-radius-circle;
    overflow: hidden;
    width: $--width;
    height: $--height;
    cursor: pointer;
    @include e(pic) {
      width: 100%;
      height: 100%;
    }

    @include when(shadow) {
      box-shadow:0px 5px 15px 0px rgba(0,0,0,0.18);
    }

    @include e(upload-img) {
      opacity: 0;
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      transition: all .5s;
      border: 0;
      box-sizing: content-box;
      border-radius: 100%;
      background: rgba(000, 000, 000, .5);
      display: flex;
      align-items: center;
      justify-content: center;
      .svg-icon {
        width: 52px;
        height: 42px;
      }
      &:hover {
        opacity: 1;
      }
    }
  }
</style>
