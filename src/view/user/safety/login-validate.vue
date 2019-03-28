<template>
  <div class="safety-card">
    <el-row class="card-main">
      <el-col :span="4">
        <div class="svg-wrap">
          <svg-icon icon-class="safety"/>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="item">
          <div class="title">登录安全</div>
          <div class="desc">开启后，在每次登录时需要手机短信验证码</div>
        </div>
      </el-col>
      <el-col :span="4" style="text-align: right">
        <el-button @click="toggleEdit('safety')">开启</el-button>
      </el-col>
    </el-row>
    <transition name="slide-fade">
      <div class="safety-edit" v-if="editVisible">
        <div class="">请输入验证码，确定生成「登录安全」定制</div>
        <el-form :label-width="labelWidth">
          <el-form-item prop="password" label="手机号码：">
            <el-col :span="12">
              <el-input value="1111111" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="输入验证码">
            <el-col :span="12">
              <el-input placeholder="请输入验证码"></el-input>
            </el-col>
            <el-col :span="6">
              <el-button>获取验证码</el-button>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button>开启定制</el-button>
          </el-form-item>
        </el-form>
      </div>
    </transition>
  </div>
</template>

<script>
  // import {getCode,form} from '@/build'
  // import {
  //   bindUserMobile,
  //   getValidateCode,
  // } from "@/services/api/user"
  import {mapState} from 'vuex';
  export default {
    name: "safety-login-validate",
    // mixins:[getCode,form],
    data(){
      return {
        editVisible: false,
        form:{
          // userId: this.user.id
        },
        labelWidth: '150px',
        mobileData:undefined
      }
    },
    computed: {
      ...mapState({
        user: state => state.user,
      }),
    },
    methods:{
      toggleEdit(){
        this.editVisible = !this.editVisible
      },
      sendCodeHandler(type) {
        // type 用户短信验证类型，mobile_bind绑定手机，mobile_cashier绑卡
        this.form.type = type;
        this.getCode({form:this.form});
      },

      bindMobileHandler() {
        bindUserMobile({
          ...this.form
        }).then(([result, data]) => {
          if(result){
            this.user.telephone = this.form.mobile;
            this.$store.commit(types.UPDATE_USER,this.user);
            this.toggleEdit()
          }
        })
      }
    },
  }
</script>

<style scoped>

</style>
