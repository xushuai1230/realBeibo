<template>
  <div class="address-set">
    <el-form class="address-set__form" label-position="top" :model="form" :rules="rules" @submit.native.prevent="addAdress('form')" ref="form" :disabled="loading">
      <el-form-item label="收货人：" prop="name">
        <el-input class="address-set__item-input" v-model="form.name" placeholder="请输入收货人姓名" />
      </el-form-item>
      <el-form-item label="手机号码：" prop="mobile">
        <el-input class="address-set__item-input" v-model="form.mobile" placeholder="请输入收货人手机号码" />
      </el-form-item>
      <el-form-item label="所在地区：">
        <div class="address-set__select-group">
          <el-form-item prop="provinceId">
            <div class="address-select__cell">
              <el-select v-model="form.provinceId" placeholder="请选择" @change="getCityList()">
                <el-option v-for="province in provinceList" :key="province.id" :label="province.name" :value="province.id">
                </el-option>
              </el-select>
            </div>
          </el-form-item>
          <el-form-item prop="cityId">
            <div class="address-select__cell">
              <el-select v-model="form.cityId" placeholder="请选择" @change="getAreaList()">
                <el-option v-for="city in cityList" :key="city.id" :label="city.name" :value="city.id">
                </el-option>
              </el-select>
            </div>
          </el-form-item>
          <el-form-item prop="areaId">
            <div class="address-select__cell">
              <el-select v-model="form.areaId" placeholder="请选择">
                <el-option v-for="area in areaList" :key="area.id" :label="area.name" :value="area.id">
                </el-option>
              </el-select>
            </div>
          </el-form-item>
        </div>
      </el-form-item>
      <el-form-item label="详细地址：" prop="street">
        <el-input v-model="form.street" placeholder="请输入详细地址" />
      </el-form-item>
      <el-form-item align="center" no-spacing="">
        <el-button type="primary" native-type="submit">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {
  get_adress_province_API,
  get_adress_city_API,
  get_adress_area_API,
  add_adress_API,
  adress_update_API
} from "@/api/address";
import { telRules } from "@/mixins/form";
export default {
  name: "address-set",
  props: ["info"],

  data() {
    return {
      actionName: this.info.id ? "update" : "add",
      form: {
        id: this.info.id,
        name: this.info.name,
        mobile: this.info.mobile,
        provinceId: undefined,
        cityId: undefined,
        areaId: undefined,
        street: this.info.street
      },
      rules: {
        name: [{ required: true, message: "请输入收货人姓名" }],
        mobile: telRules,
        street: [{ required: true, message: "请输入详细地址" }]
      },
      provinceList: [],
      cityList: [],
      areaList: [],
      loading: false
    };
  },
  methods: {
    //获取省级
    getProvinceList() {
      get_adress_province_API({})
        .then(res => {
          if (res.code !== 1) {
            this.noticeMessage(res.message)
          } else {
            this.provinceList = res.data;
            if (this.info.id) {
              for (let item of res.data) {
                if (item.name === this.info.province) {
                  this.form["provinceId"] = item.id;
                  console.log(this.form["provinceId"]);
                  this.getCityList(item.id);
                }
              }
            }
          }
        })
        .catch(err => {
          console.warn(err);
        });
    },
    //获取城市
    getCityList(id = this.form["provinceId"]) {
      if (!id) return;
      get_adress_city_API({ provinceId: id })
        .then(res => {
          if (res.code !== 1) {
            this.noticeMessage(res.message)
          } else {
            this.cityList = res.data;
            this.form["cityId"] = res.data[0].id;
            if (this.info.id) {
              for (let item of res.data) {
                if (item.name === this.info.city) {
                  this.form["cityId"] = item.id;
                  this.getAreaList(item.id);
                }
              }
            } else {
              this.getAreaList(this.form["cityId"]);
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //获取区县
    getAreaList(id = this.form["cityId"]) {
      if (!id) return;
      get_adress_area_API({
        cityId: id
      })
        .then(res => {
          if (res.code !== 1) {
            this.noticeMessage(res.message)
          } else {
            this.areaList = res.data;
            for (let item of res.data) {
              if (item.name === this.info.area) {
                this.form["areaId"] = item.id;
              }
            }
          }
        })
        .catch(err => {
          console.warn(err);
        });
    },
    //添加收货地址
    addAdress(formname) {
      this.$refs[formname].validate(valid => {
        if (valid) {
          this.loading = true;
          add_adress_API({
            name: this.form["name"],
            mobile: this.form["mobile"],
            cityId: this.form["cityId"],
            areaId: this.form["areaId"],
            street: this.form["street"]
          })
            .then(res => {
              if (res.code !== 1) {
                this.noticeMessage(res.message)
              } else {
                this.loading = false;
                this.$parent.$parent.$parent.GetAdressList();
                this.$parent.$parent.$parent.dialogVisible = false;
              }
            })
            .catch(err => {
              console.warn(err);
            });
        } else {
          return false;
        }
      });
    },
    //更新收货地址
    updateAddress() {
      this.$refs[formname].validate(valid => {
        if (valid && id) {
          adress_update_API({
            id: this.$parent.$parent.$parent.defaultAddressId,
            name: this.form["name"],
            mobile: this.form["mobile"],
            cityId: this.form["cityId"],
            areaId: this.form["areaId"],
            street: this.form["street"]
          })
            .then(res => {
              if (res.code !== 1) {
                this.noticeMessage(res.message)
              } else {
                this.$parent.$parent.$parent.GetAdressList();
                this.$parent.$parent.$parent.dialogVisible = false;
              }
            })
            .catch(err => {
              console.warn(err);
            });
        } else {
          return false;
        }
      });
    },
    noticeMessage(msg,type='error'){
      this.$message({
        message:msg,
        type:type,
      })
    }
  },
  watch: {
    // provinceList(currentList) {
    //   if (this.info.province && currentList.length) {
    //     this.form.provinceId = currentList.find((item)=>item.name===this.info.province).id;
    //   }
    // },
    // cityList(currentList) {
    //   if (this.info.city && currentList.length) {
    //     this.form.cityId = currentList.find((item) => item.name===this.info.city).id;
    //   }
    // },
    // areaList(currentList) {
    //   if (this.info.area && currentList.length) {
    //     this.form.cityId = currentList.find((item) => item.name===this.info.area).id;
    //   }
    // }
  },

  computed: {},
  mounted() {
    this.getProvinceList();
    // this.bindSave(addApi, 'add', 'form', {
    //   successMessage: '新增收货地址成功',
    //   afterSuccess: () => {
    //     this.$store.dispatch(types.OAUTH);
    //     this.$emit('on-success');
    //   }
    // });

    // this.bindSave(updateApi, 'update', 'form', {
    //   successMessage: '修改收货地址成功',
    //   afterSuccess: () => {
    //     this.$store.dispatch(types.OAUTH);
    //     this.$emit('on-success');
    //   }
    // });
  }
};
</script>

<style lang="scss" scoped>
@include b(address-set) {
  width: 705px;
  margin: 0 auto;
  @include e(item-input) {
    width: 380px;
  }
  .el-button {
    width: 410px;
  }

  @include e(select-group) {
    display: flex;
    flex: 1 0 0;
    justify-content: space-between;
  }
}
</style>