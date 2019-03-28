<template>
  <div class="announcement-list">
    <transition mode="out-in" name="slide-fade">
    <div v-if='!detailInfo'>
      <div class="notice-card-container notice-card-list" >
        <notice-card :class="{'is-readed':info.status === consts.ANNOUNCEMENT_READ}" v-for="info in tableData.list" :time="info.effectiveDate" :key="info.id" @click.native="openDetail(info)" >
          <template slot="title">
            {{info.name}}
          </template>

          <template slot="content">
            {{info.summary}}
          </template>
        </notice-card>
      </div>
      <div class="el-pagination-container">
        <el-pagination bordered layout="prev, pager, next" @size-change="gridSizeChange" @current-change="gridCurrentChange" :current-page="filters.page" :page-size="filters.size" :total="tableData.total">
        </el-pagination>
      </div>
    </div>
    
    <notice-detail
        :id="detailInfo.id"
        @read="read(detailInfo)"
        @close="detailInfo = undefined" v-else
      ></notice-detail>
      </transition>
  </div>
</template>

<script>
// import {grid} from '@/build';
import NoticeCard from "./notice-card";
import NoticeDetail from "./notice-detail";
import { ANNOUNCEMENT_READ } from "@/const";
import { system_notice_Api } from "@/api/message";
import pagination from "@/mixins/pagination";
//平台公告

export default {
  name: "announcement-list",

  mixins: [pagination],
  components: {
    NoticeCard,
    NoticeDetail
  },


  data() {
    return {
      filters: {
        size: 8,
        page: 1
      },
      tableData: {
        total: 0
      },
      detailInfo: undefined,
      consts: {
        ANNOUNCEMENT_READ
      }
    };
  },
  watch: {
    filters() {
      this.getNotice();
    },
    detailInfo(){
       this.getNotice();
    }
  },
  methods: {
    openDetail(info) {
      // this.$router.push({ params: { ...this.$route.params, id: info.id } });
      this.detailInfo = info;
    },
    read(detailInfo) {
      detailInfo.status = consts.ANNOUNCEMENT_READ;
    },
    // closeDetail() {
    //   this.$router.push({ params: { ...this.$route.params, id: undefined } });
    //   this.detailInfo = undefined;
    // },
    // refresh() {
    //   this.getAll();
    // },
    getNotice() {
      system_notice_Api({
        page: this.filters["page"],
        size: this.filters["size"]
      })
        .then(res => {
          if (res.code !== 1) {
          } else {
            this.tableData = res.data;
          }
        })
        .catch(err => {
          console.warn(err);
        });
    }
  },
  created(){
     this.getNotice();
  }
};
</script>

<style lang="scss" scoped>
// unread read
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