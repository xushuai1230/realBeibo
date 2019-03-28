<template>
    <div class="addVip">
        <div>
            <h5>预计佣金</h5>
            <h3>¥ 2,279,887.00</h3>
            <h4>上月佣金：¥ 67890.89</h4>
            <p>佣金比例50%</p>
            <span><icon-svg icon-class="refresh"></icon-svg></span>
        </div>
        <div>
            <el-table :data="newVip" cell-style="padding:0">
                <el-table-column prop="name" label="最新存款会员">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span @click="aaa(scope.$index, scope.row)" style="margin-left: 10px">{{ scope.row.name }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="address">
                </el-table-column>
                <el-table-column prop="date" sortable>
                </el-table-column>
            </el-table>
        </div>
        <div>
            <el-table :data="newAddVip" cell-style="padding:0">
                <el-table-column prop="name" label="最新加入会员">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span @click="aaa(scope.$index, scope.row)" style="margin-left: 10px">{{ scope.row.name }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="address">
                </el-table-column>
                <el-table-column prop="date" sortable>
                </el-table-column>
            </el-table>
        </div>
        <v-vipDialog v-if="$store.state.vipDetail"></v-vipDialog>
    </div>
</template>

<script>
import vipDialog from "../components/vip-dialog";
import {
  latestRecharge_API,
  latestRegister_API,
  commission_API
} from "@/api/homepage";
export default {
  name: "add-vip",
  data() {
    return {
      yjrate: "",
      lastyjrate: "",
      newVip: [],
      newAddVip: [],
      page: 1,
      size: 5
    };
  },
  components: {
    "v-vipDialog": vipDialog
  },
  mounted() {
    console.log(this);
    this.newDepositVip();
    this.newRegisterVip();
    this.commission();
  },
  methods: {
    aaa(cell, ggg) {
      console.log("111", cell, ggg);
      this.$store.commit("VIP_DETAIL", { vipDetail: true });
    },
    newDepositVip() {
      latestRecharge_API({
        page: this.page,
        size: this.size,
        proxyName: JSON.parse(window.localStorage.getItem("profile")).username
      }).then(res => {
        this.newVip = res.data.list;
        console.log("最新存款", res);
      });
    },
    newRegisterVip() {
      latestRegister_API({
        page: this.page,
        size: this.size,
        proxyName: JSON.parse(window.localStorage.getItem("profile")).username
      }).then(res => {
        this.newAddVip = res.data.list;
        console.log("最新加入", res);
      });
    },
    commission() {
      commission_API({}).then(res => {
        this.yjrate = res.data.thisMonth;
        this.lastyjrate = res.data.lastMonth.amount;
        console.log("预计佣金", res);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.addVip /deep/ {
  width: 100%;
  height: 237px;
  margin-bottom: 34px;

  > div {
    &:nth-child(1) {
      width: 24%;
      height: 237px;
      background: rgba(233, 129, 29, 1);
      @include box-shadow(0px, 7px, 34px, 0px, rgba(0, 0, 0, 0.05));
      @include border-radius(7px);
      float: left;
      margin-right: 2%;
      text-align: center;
      padding: 26px 0 20px 0;
      position: relative;

      > h5 {
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 31px;
      }

      > h3 {
        font-size: 26px;
        font-family: MicrosoftYaHei-Bold;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        margin-bottom: 25px;
      }

      > h4 {
        width: 180px;
        font-size: 17px;
        font-family: MicrosoftYaHei;
        color: rgba(255, 255, 255, 0.8);
        padding-bottom: 21px;
        border-bottom: 1px solid rgba(234, 234, 234, 1);
        margin: 0 auto;
        margin-bottom: 18px;
      }

      p {
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: rgba(255, 255, 255, 0.8);
      }

      > span {
        position: absolute;
        top: 17px;
        right: 17px;
        width: 17px;
        height: 17px;
        .svg-icon{
          width:100%;
          height:100%;
        }
      }
    }

    &:nth-child(2) {
      width: 36%;
      height: 237px;
      @include box-shadow(0px, 7px, 34px, 0px, rgba(0, 0, 0, 0.05));
      @include border-radius(7px);
      float: left;
      margin-right: 2%;

      .el-table /deep/ {
        @include box-shadow(0px, 7px, 34px, 0px, rgba(0, 0, 0, 0.05));
        @include border-radius(7px);
        .el-table__header-wrapper {
          .el-table__header {
            background: rgba(251, 251, 251, 1);
            .has-gutter {
              > tr {
                height: 45px;

                > th {
                  padding: 0;
                  background: rgba(251, 251, 251, 1);
                  .cell {
                    font-size: 14px;
                    font-family: PingFangSC-Semibold;
                    font-weight: 600;
                    color: rgba(0, 0, 0, 1);
                  }

                  &:nth-child(3) {
                    .cell {
                      .caret-wrapper {
                        float: right;
                        width: 50px;

                        .ascending {
                          width: 9px;
                          height: 9px;
                          border: 1px solid rgba(97, 106, 117, 1);
                          border-top: none;
                          border-right: none;
                          transform: rotate(-45deg);
                          float: left;
                          margin-top: 4px;
                        }

                        .descending {
                          width: 9px;
                          height: 9px;
                          border: 1px solid rgba(97, 106, 117, 1);
                          border-bottom: none;
                          border-left: none;
                          transform: rotate(-45deg);
                          left: 39px;
                          margin-bottom: 3px;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }

        .el-table__body-wrapper {
          .el-table__body {
            > tbody {
              > .el-table__row {
                height: 49px;
                > td {
                  font-size: 13px;
                  font-family: MicrosoftYaHei;
                  color: rgba(32, 33, 36, 1);
                  text-align: center;
                  &:nth-child(1) {
                    text-align: left;
                  }
                  &:last-child {
                    text-align: right;
                  }
                  .cell {
                    &:hover {
                      .el-icon-time {
                        color: rgba(30, 90, 220, 1);
                      }
                    }
                  }
                }
              }
            }
          }
        }
        .el-table__empty-block {
          line-height: 60px;
        }
      }
    }

    &:nth-child(3) {
      width: 36%;
      height: 237px;
      @include box-shadow(0px, 7px, 34px, 0px, rgba(0, 0, 0, 0.05));
      @include border-radius(7px);
      float: left;
      .el-table /deep/ {
        @include box-shadow(0px, 7px, 34px, 0px, rgba(0, 0, 0, 0.05));
        @include border-radius(7px);
        .el-table__header-wrapper {
          .el-table__header {
            background: rgba(251, 251, 251, 1);
            .has-gutter {
              > tr {
                height: 45px;

                > th {
                  padding: 0;
                  background: rgba(251, 251, 251, 1);
                  .cell {
                    font-size: 14px;
                    font-family: PingFangSC-Semibold;
                    font-weight: 600;
                    color: rgba(0, 0, 0, 1);
                  }

                  &:nth-child(3) {
                    .cell {
                      .caret-wrapper {
                        float: right;
                        width: 50px;

                        .ascending {
                          width: 9px;
                          height: 9px;
                          border: 1px solid rgba(97, 106, 117, 1);
                          border-top: none;
                          border-right: none;
                          transform: rotate(-45deg);
                          float: left;
                          margin-top: 4px;
                        }

                        .descending {
                          width: 9px;
                          height: 9px;
                          border: 1px solid rgba(97, 106, 117, 1);
                          border-bottom: none;
                          border-left: none;
                          transform: rotate(-45deg);
                          left: 39px;
                          margin-bottom: 3px;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }

        .el-table__body-wrapper {
          .el-table__body {
            > tbody {
              > .el-table__row {
                height: 49px;
                > td {
                  font-size: 13px;
                  font-family: MicrosoftYaHei;
                  color: rgba(32, 33, 36, 1);
                  text-align: center;
                  &:nth-child(1) {
                    text-align: left;
                  }
                  &:last-child {
                    text-align: right;
                  }
                  .cell {
                    &:hover {
                      .el-icon-time {
                        color: rgba(30, 90, 220, 1);
                      }
                    }
                  }
                }
              }
            }
          }
        }
        .el-table__empty-block {
          line-height: 60px;
        }
      }
    }
  }
}
</style>

