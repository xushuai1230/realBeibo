<template>
  <div class="notice-detail">
    <div class="notice-detail__header">
      <div class="notice-detail__title">
        {{detailInfo.name}}
      </div>

    </div>
    <div class="notice-detail__main">
      <div class="notice-detail__brief">
        {{detailInfo.summary}}
      </div>
      <div v-html="detailInfo.content"></div>
      <div class="notice-detail__time">
         {{detailInfo.createTime | dataFormat('yyyy-MM-dd')}},{{detailInfo.createTime | dataFormat('hh:mm:ss')}}
      </div>
    </div>
    <div class="notice-detail__hander">
      <el-button type="outline-info" size="small" class="bold" @click="close">
       <i class="el-icon-arrow-left" style="margin-right:20px;"></i> 返回
        </el-button>
    </div>
  </div>
</template>

<script>
import { notice_detail_Api,read_notice_Api } from "@/api/message";
export default {
  name: "notice-detail",
  props: ["id"],

  data() {
    return {
      id: this.id,
      detailInfo: {}
    };
  },

  methods: {
    close() {
      this.$emit("close");
    },
    getNoticeDetail(id) {
      notice_detail_Api({
        noticeId: id
      })
        .then(res => {
          if (res.code !== 1) {
          } else {
            this.detailInfo = res.data;
          }
        })
        .catch(err => {
          console.warn(err);
        });
        read_notice_Api({
          id:id,
        }).then(res=>{
          if(res.code!==1){

          }else{
            
          }
        })
    }
  },

  watch: {
    id() {
      this.getNoticeDetail(id);
    }
    // '$route.params.id': {
    //   handler(id) {
    //     if (id) {
    //       this.$nextTick(() => {
    //         this.id = id;
    //         this.getAll();
    //       });
    //     } else {
    //       this.close();
    //     }
    //   },
    //   immediate: true,
    // }
  },

  mounted() {
    if (this.id) {
      this.getNoticeDetail(this.id);
    }
    // this.bindGet(detailApi, 'detailInfo', {
    //   sendingData: 'id',
    //   afterSuccess:() => {
    //     if (this.detailInfo.status === consts.ANNOUNCEMENT_UNREAD) {
    //       this.doSave({action: 'read'});
    //     }
    //   }
    // });
    // this.bindSave(readApi, 'read', 'id', {
    //   successMessage: '',
    //   afterSuccess: () => {
    //     this.$emit('read');
    //     this.$store.dispatch(types.GET_GLOBAL_ANNOUNCEMENT_UNREAD);
    //   }
    // });
  }
};
</script>

<style lang="scss" scoped>
@include b(notice-detail) {
  position: relative;

  @include e(header) {
    text-align: center;
  }
  @include e(title) {
    font-size: $--font-size-x-large;
    font-weight: bold;
    padding: 20px 0 15px 0;
    font-size: 27px;
  }
  @include e(brief) {
    color: $--color-black;
    font-size: $--font-size-xl-large;
    padding-bottom: 30px;
    text-align: center;
    font-family: $--font-family-mb;
    font-weight: bold;
  }
  @include e(main) {
    padding: 47px 107px 19px 107px;
    box-sizing: border-box;
    min-height: 429px;
    width: 100%;
    overflow: auto;
    border: 1px solid $--border-color-base;
    border-radius: $--border-radius-base;
  }
  @include e(hander) {
    text-align: right;
    padding-top: 23px;
  }
  @include e(time){
    text-align: center;
    font-family: $--font-family-my;
    font-weight: bold;
    margin-top: 200px;
  }
}
</style>