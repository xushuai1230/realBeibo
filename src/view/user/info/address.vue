<template>
  <static-container class="user-address">
    <static-container-header size="small">
      <div class="user-address__header">
        <div class="user-address__header-left">
          添加收货地址
          <div class="user-address__header-brief">
            你已创建
            <span class="user-address__count">{{addressList.length}}</span>
            个收货地址,最多可创建
            <span class="user-address__count">{{maxLength}}</span>
            个
          </div>
        </div>
        <el-button type="primary" size="medium" @click="create">新建收货地址</el-button>
      </div>
    </static-container-header>
    <static-container-body>
      <transition-group mode="out-in" name="slide-fade" tag="div" class="address-container">
        <div class="address-item" v-for="(item, index) in addressList" :key="index">
          <div class="address-item__title">
            <div class="address-item__title-name">
              收货人：{{item.name}}
              <el-button v-if="item.status !== 0" class="address-item__title-defaultbtn" type="warning">
                默认地址
              </el-button>
            </div>
            <div class="address-item__editor">
              <a href="javascript:" @click="edit(item)">编辑</a>
              <span>|</span>
              <a href="javascript:" @click="deleteAddress(item)">删除</a>
            </div>
          </div>
          <div class="address-item__info">
            <div class="address-item__info-detail">
              <span class="address-item__info-detail-span">手机号码：{{item.mobile}}</span>
              <span class="address-item__info-detail-span">
                {{item.province}} {{item.city}} {{item.area}} {{item.street}}
              </span>
            </div>
            <div class="address-item__info-defaultbtn" v-if="item.status === 0">
              <a class="address-item__info-defaultbtn-a" href="javascript:;" @click="setDefault(item)">设为默认</a>
            </div>
          </div>
        </div>
      </transition-group>
    </static-container-body>
    <div v-transfer-dom>
      <el-dialog :visible.sync="dialogVisible" @close="() => {dialogVisible = false}" :title="dialogTitle" width="1000px" v-if='dialogVisible'>
        <address-set :info='addressItem'></address-set>
      </el-dialog>
    </div>
  </static-container>
</template>

<script>
import AddressSet from "./address-set";
import { get_adress_API, add_adress_API,adress_delete_API,adress_default_API } from "@/api/address";
export default {
  name: "user-address",
  components: {
    AddressSet
  },
  data() {
    return {
      maxLength: 5,
      addressList: [],
      defaultAddressId: undefined,
      deleteAddressId: undefined,
      dialogVisible: false,
      dialogTitle: "新建收货地址",
      addressItem: {}
    };
  },

  methods: {
    //获取收货地址
    GetAdressList() {
      get_adress_API({})
        .then(res => {
          if (res.code !== 1) {
          } else {
            this.addressList = res.data;
          }
        })
        .catch(err => {
          console.warn(err);
        });
    },
    edit(item) {
      this.addressItem = item;
      this.dialogVisible = true;
      this.dialogTitle = "编辑收货地址";
    },
    create() {
      if (this.maxLength > this.addressList.length) {
        this.dialogVisible = true;
        this.addressItem = {};
      } else {
        this.$notify({
          title: `最多只能创建${this.maxLength}个收货地址`,
          type: "error",
          duration: 2000
        });
      }
    },
    setDefault(item) {
      const setDefFn = (id) => {
        adress_default_API({
          id: id
        })
          .then(res => {
            if (res.code !== 1) {
            } else {
              this.GetAdressList();
            }
          })
          .catch(err => {
            console.warn(err);
          });
      };
      this.$confirm("您确定需要将此地址设为默认收货地址吗？", "设为默认", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.defaultAddressId = item.id;
          setDefFn(item.id);
        })
        .catch(() => {});
    },
    //删除收货地址
    deleteAddress(item) {
      const deleteFn = (id) => {
        adress_delete_API({
          id: id
        })
          .then(res => {
            if (res.code !== 1) {
            } else {
              this.GetAdressList();
            }
          })
          .catch(err => {
            console.warn(err);
          });
      };
      this.$confirm("您确定需要删除此收货地址吗？", "删除收货地址", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.deleteAddressId = item.id;
          deleteFn(item.id);
        })
        .catch(() => {});
    },

    successHandler() {
      this.dialogVisible = false;
      // this.getAll();
    }
  },

  created() {
    this.GetAdressList();
  }
};
</script>

<style lang="scss" scoped>
@include b(user-address) {
  @include e(count) {
    color: $--color-primary;
  }
  @include e(header) {
    display: flex;
  }

  @include e(header-left) {
    display: flex;
    align-items: center;
    flex: 1 0 0;
    font-size: 27px;
    font-family: "MicrosoftYaHei-Bold";
    font-weight: bold;
    color: black;
  }
  @include e(header-brief) {
    color: $--color-black-3;
    font-size: $--font-size-small;
    margin-left: 30px;
    font-weight: normal;
  }
}

@include b(address-item) {
  padding: 20px 20px 28px 20px;
  background: $--color-white;
  border-radius: 6px;
  margin-bottom: 20px;
  box-shadow: 0px 6px 30px 0px rgba(0, 0, 0, 0.05);
  @include e(title) {
    display: flex;
    padding-bottom: 12px;
    margin-bottom: 20px;
    border-bottom: 1px solid $--border-color-base-1;
  }

  @include e(title-name) {
    flex: 1;
    font-size: $--font-size-base;
    font-weight: bold;
  }

  @include e(title-defaultbtn) {
    padding: 0;
    min-width: auto;
    width: 55px;
    height: 16px;
    border-radius: 1px;
    margin-left: 19px;
    font-size: $--font-size-small;
  }

  @include e(editor) {
    font-size: $--font-size-base;
    color: $--color-primary;
    font-weight: bold;
  }

  @include e(info) {
    display: flex;
  }

  @include e(info-detail) {
    flex: 1;
    color: #999999;
  }

  @include e(info-detail-span) {
    display: block;
    width: 600px;
    &:first-child {
      margin-bottom: 10px;
    }
  }
  @include e(info-defaultbtn) {
    display: flex;
  }
  @include e(info-defaultbtn-a) {
    align-self: flex-end;
  }
}
</style>