<template>
    <div class="vipDialog">
        <el-dialog
            :visible.sync="centerDialogVisible"
            :width= "vipWidth"
            @close="$store.commit('VIP_DETAIL',{vipDetail: false})"
            :close-on-click-modal = false
            center>
            <!-- 会员账户 -->
            <div class="vipdata" v-show ="detailShow">
                <div class="title">
                    <h3>会员账户:</h3>
                    <icon-svg icon-class="user_login" type="primary"></icon-svg>
                    <span>{{data.name}}</span>
                </div>
                <table>
                    <td>
                        <tr v-for="(item,index) in vipDetail" :key="index">{{item.name}}</tr>
                    </td>
                    <td>
                        <tr v-for="(item,index) in vipDetail" :key="index">{{item.content}}</tr>
                    </td>
                     <td>
                        <tr v-for="(item,index) in vipDetail" :key="index">{{item.name}}</tr>
                    </td>
                    <td>
                        <tr v-for="(item,index) in vipDetail" :key="index">{{item.content}}</tr>
                    </td>
                </table>
            </div>
            <!-- 上分 操作 -->
            <div class="topOperation" v-show="operationShow">
                <h3>上分操作</h3>
                <div>
                    <icon-svg class="el-warning__icon" icon-class="warning"></icon-svg>
                    <p>可使用上分额度为5000.00元</p>
                </div>
                <div>
                    <h4>上分金额:</h4>
                    <el-input class="vip-dialog__input" v-model="moneyCount" placeholder="请输入金额" auto-complete="off">
                      <template slot="prepend">
                        <icon-svg class="vip-dialog__icon" icon-class="account"></icon-svg>
                      </template>
                    </el-input>
                </div>
            </div>
            <!-- 确认上分 -->
            <div class="confirmTop" v-show="confirmShow">
               <h3>确认上分</h3> 
               <div>
                    <icon-svg icon-class="warning"></icon-svg>
                    <p>请再次确认是否为该会员账户上分 {{moneyCount}} 元</p>
                </div>
            </div>
            <!-- 上分成功 -->
            <div class="topSuccess" v-show="succesShow">
                <div><icon-svg icon-class="modal-success"></icon-svg></div>
                <h3>上分成功</h3>
                <p>
                    <span>账户名：ya1213 </span>
                    <span>上分: {{moneyCount}} </span>
                </p>
            </div>
            <el-button v-show ="detailShow" type="primary" @click="commit">上 分</el-button>
            <div v-if="operationShow || confirmShow" class="footer">
                 <el-button @click="cancel">取消</el-button>
                 <el-button type="primary" @click="sure">{{commitButton}}</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import "./vip-dialog.scss";

export default {
  name: "vip-dialog",
  computed: {
    ...mapState({
      centerDialogVisible: state => state.vipDetail
    })
  },
  data() {
    return {
      vipWidth: "85.3%",
      data: {
        name: 121223
      },
      detailShow: true,
      operationShow: false,
      confirmShow: false,
      succesShow: false,
      commitButton: "确定",
      moneyCount: '',
      vipDetail: [
        {
          name: "充值金额",
          content: "1000.00"
        },
        {
          name: "提现金额",
          content: "1000.00"
        },
        {
          name: "充值金额",
          content: "1000.00"
        },
        {
          name: "提现金额",
          content: "1000.00"
        },
        {
          name: "充值金额",
          content: "1000.00"
        },
        {
          name: "提现金额",
          content: "1000.00"
        },
        {
          name: "充值金额",
          content: "1000.00"
        }
      ]
    };
  },
  methods: {
    commit() {
      // console.log(this.commitButton)
      this.detailShow = false;
      this.operationShow = true;
      this.confirmShow = false;
      this.succesShow = false;
      this.vipWidth = "40%";
      this.commitButton = "确定";
    },
    cancel() {
      this.$store.commit("VIP_DETAIL", { vipDetail: false });
    },
    sure() {
      if (this.commitButton === "确定") {
        this.detailShow = false;
        this.operationShow = false;
        this.confirmShow = true;
        this.succesShow = false;
        this.vipWidth = "40%";
        this.commitButton = "提交";
      } else if (this.commitButton === "提交") {
          this.detailShow = false;
        this.operationShow = false;
        this.confirmShow = false;
        this.succesShow = true;
        this.vipWidth = "40%";
      }
    }
  }
};
</script>

<style>
</style>
