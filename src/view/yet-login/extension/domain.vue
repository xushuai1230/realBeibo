<template>
  <div class="domain">
    <div class="domain__header">
      <!-- <a @click="$store.commit('EDIT_EXTENSION', {extensionVisible:true, addNet:true,makeErweima:false,editshow:false})">添加</a> -->
      <el-col :span="2">
        <el-button type="primary" size="small" @click="openDialog('添加推广链接','add')">添加</el-button>
      </el-col>
      <el-col :span="12">
        <el-tip>
          最大支持添加20条推广链接地址
        </el-tip>
      </el-col>
    </div>
    <el-table :data="tableData" :loading="loading" element-loading-text="加载中..." border border-radius>
      <el-table-column label="编号" align="center" type="index" :index="indexMethod" width="100">
      </el-table-column>
      <el-table-column prop="name" label="自定义编号" align="center"></el-table-column>
      <el-table-column label="域名类别" align="center">
        <template slot-scope="{row}">
          {{row.type===0?'普通域名':'专属域名'}}
        </template>
      </el-table-column>
      <el-table-column label="链接地址" align="center">
        <template slot-scope="{row}">
          {{row.domain+'.'+api.replace('http://','')}}
        </template>
      </el-table-column>
      <el-table-column label="二维码" align="center">
        <template slot-scope="{row}">
          <link-button :w='"auto"' border @click.native="openDialog('生成二维码','qr-code',row)">生成二维码</link-button>
        </template>
      </el-table-column>
      <el-table-column label="注册总人数" align="center" prop="registerUser"></el-table-column>
      <el-table-column label="存款总人数" align="center" prop="rechargeUser"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="{row}">
          <link-button :w='"auto"' border @click.native="openDialog('修改链接编号','edit-domain',row)">修改</link-button>
        </template>
      </el-table-column>
      <template slot="empty">
        <div class="el-table__empty">
          <div class="el-table-text">暂无数据</div>
        </div>
      </template>
    </el-table>
    <el-dialog :visible.sync="dialogVisible" :before-close="() => {dialogVisible = false}" :title="dialogTitle" :width="dialog_width">
      <component :is="dialogName" @on-success="dialogVisible = false" v-if="dialogName" :thisData=dialogProps></component>
    </el-dialog>
  </div>
</template>

<script>
import { proxyInfoApi } from "@/api/promotion";
import { API_ROOT } from "@/api/config";
import dialog from "@/mixins/dialog";
import qrCode from "./dialog/qr-code";
import editDomain from './dialog/edit-domain';
import add from './dialog/add';
export default {
  name: "domain",
  mixins: [dialog],
  data() {
    return {
      tableData: [],
      loading: false,
      api: API_ROOT,
      dialog_width:'574px',
      dialogProps:{},
    };
  },
  components: {
    qrCode,
    editDomain,
    add
  },
  methods: {
    //打开弹窗
    openDialog(title, name,data) {
      this.dialogVisible = true;
      this.dialogTitle = title;
      this.dialogName = name;
      this.dialogProps=data;
    },
    getDomainList() {
      proxyInfoApi({})
        .then(res => {
          if (res.code !== 1) {
          } else {
            this.tableData = res.data;
          }
        })
        .catch(err => {
          console.warn(err);
        });
    },
    indexMethod(index) {
      return index < 10 && index > 0 ? "0" + index : index;
    }
    // aaa(val, item, yy, hh) {
    //   if (item.property === "erweima") {
    //     this.$store.commit("EDIT_EXTENSION", {
    //       extensionVisible: true,
    //       addNet: false,
    //       makeErweima: true,
    //       editshow: false
    //     });
    //   } else if (item.property === "edit") {
    //     this.$store.commit("EDIT_EXTENSION", {
    //       extensionVisible: true,
    //       addNet: false,
    //       makeErweima: false,
    //       editshow: true
    //     });
    //   }
    // }
  },
  created() {
    this.getDomainList();
  }
};
</script>
<style lang="scss" scoped>
@include b(domain) {
  width: 100%;
  min-height: 600px;
  padding: 0 45px;
  @include e(header) {
    width: 100%;
    height: 47px;
    line-height: 47px;
    margin-bottom: 37px;
    margin-top: 36px;
  }
}
</style>
