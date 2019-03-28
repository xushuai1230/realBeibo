<template>
  <div class="announcement-list">
    <div class="notice-card-container notice-card-list">
      <notice-card v-for="info in tableData.list"
                   :content="info.title"
                   :time="info.createTime"
                   :title="info.mainTitle"
                   :key="info.noticeId"
                   :readable="false"
      >
        <svg-icon slot="badge" icon-class="loudspeaker"></svg-icon>
      </notice-card>
    </div>
    <div class="el-pagination-container">
      <el-pagination
        bordered
        layout="prev, pager, next"
        @size-change="gridSizeChange" @current-change="gridCurrentChange"
                     :current-page="filters.page" :page-size="filters.size"
                     :total="tableData.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import NoticeCard from './notice-card';
  import {usernoticeApi} from '@/api/message';
  import pagination from "@/mixins/pagination";


  export default {
    name: "system-notice-list",

    mixins: [pagination],

    components: {
      NoticeCard
    },

    data () {
      return {
        filters: {
          size: 8,
          page: 1,
        },
        tableData: {
          total: 0,
        }
      };
    },
    methods:{
      GetUserNotice(){
        usernoticeApi({
          page:this.filters['page'],
          size:this.filters['size']
        }).then(res=>{
          if(res.code!==1){
            this.$message({
              message:res.message,
              type:'error',
            })
          }else{
            this.tableData=res.data;
          }
        })
      }
    },
    watch:{
      filters(){
        this.GetUserNotice();
      }
    },
    created() {
      this.GetUserNotice();
      // this.bindGet(getApi, 'tableData', {
      //   action: 'getGrid',
      //   sendingData: 'filters',
      //   format:(data) => {
      //     _.each(data.list, info => {
      //       if (info.type === consts.NOTICE_CHARGE) {
      //         info.mainTitle = '存款到账通知';
      //       } else {
      //         info.mainTitle = '提现到账通知';
      //       }
      //     });

      //     return data;
      //   }
      // });

      // this.getAll();
    }
  };
</script>

<style lang="scss" scoped>
@include b(announcement-list) {
  width: 890px;
  margin: 20px auto;

  @include b(notice-card-container) {
    border: 1px solid $--border-color-base;
    border-radius: $--border-radius-base;
  }
  @include b(el-pagination-container) {
    position: relative;
  }
}
</style>