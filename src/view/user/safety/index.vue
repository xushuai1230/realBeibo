<template>
  <static-container class="safe">
    <static-container-header>
      <template>
        <el-breadcrumb size="large" separator-class="el-icon-arrow-right">
          <transition-group name="breadcrumb">
            <el-breadcrumb-item :to="true" :key="1" @click.native="isSubContentOpen=false">安全中心</el-breadcrumb-item>
            <el-breadcrumb-item :key="2" v-if="isSubContentOpen">{{currentSubViewName}}</el-breadcrumb-item>
          </transition-group>
        </el-breadcrumb>
      </template>
      <template slot="right">
        <el-button v-if="isSubContentOpen" size="medium" @click="isSubContentOpen=false"> 返回</el-button>
      </template>
    </static-container-header>
    <static-container-body>

      <transition name="slide-fade" mode="out-in">
        <div v-if="!isSubContentOpen">
          <el-tip>
            为了确保您的账号安全，请您填写相关安全信息，以备不时之需
          </el-tip>
          <safety-card-group>
            <safety-card title="登录密码" sub-title="修改登录时的密码，定期修改有利于账户安全">
              <template slot="icon">
                <icon-svg icon-class="password" type="info" />
              </template>
              <slot>
                <el-button type="primary" bold size="medium" @click="openDialog('safety-password'),dialogTitle='登陆密码设置'">修改</el-button>
              </slot>
            </safety-card>

            <safety-card title="手机验证" sub-title="绑定手机，用于接收短信验证码">
              <template slot="icon">
                <icon-svg icon-class="login-phone" type="info" />
              </template>
              <slot>
                <el-button type="primary" bold size="medium" @click="mobileContact" v-if="user.telephone">已验证</el-button>
                <el-button bold size="medium" type="outline-info" @click="mobileContact" v-else>验证</el-button>
              </slot>
            </safety-card>

            <safety-card title="邮箱验证" sub-title="绑定邮箱，用于接收账户相关信息服务">
              <template slot="icon">
                <icon-svg icon-class="email" type="info" />
              </template>
              <slot>
                <el-button type="primary" bold size="medium" @click="emailContact" v-if="user.email">已验证</el-button>
                <el-button bold type="outline-info" size="medium" @click="openDialog('safety-email')" v-else>验证</el-button>
              </slot>
            </safety-card>

            <safety-card title="绑定银行卡" sub-title="设置修改提现银行卡，最多可绑定3张">
              <template slot="icon">
                <icon-svg icon-class="bank-card" type="info" />
              </template>
              <slot>
                <!-- @click="openSubContent('safety-card-bind')" -->
                <el-button type="primary" bold size="medium"  v-if="isBindCard" @click="openSubContent('safety-card-bind')">修改</el-button>
                <el-button
                  bold
                  type="outline-info"
                  size="medium"
                  @click="cardBind" v-else>绑定</el-button>
              </slot>
            </safety-card>

            <!-- <safety-card title="提现安全" sub-title="开启后，在每次提现时需要手机短信验证码">
              <template slot="icon">
                <icon-svg icon-class="withdraw" type="info" />
              </template>
              <slot>
                <el-button
                  v-if="isWithdrawProtect"
                  bold
                  type="primary"
                  size="medium"
                  @click="openWithDrawDialog"
                >关闭</el-button>
                <el-button
                  v-else
                  bold
                  size="medium"
                  type="outline-info"
                  @click="openWithDrawDialog"
                >开启</el-button>
              </slot>
            </safety-card> -->
          </safety-card-group>
        </div>
        <component :is="currentSubView" v-else></component>

      </transition>
    </static-container-body>

    <div v-transfer-dom>
      <el-dialog :visible.sync="dialogVisible" :before-close="() => {dialogVisible = false}" :title="dialogTitle" :width="dialog_width">
        <component :is="dialogName" @on-success="dialogVisible = false" v-if="dialogName"></component>
      </el-dialog>
    </div>
  </static-container>
</template>

<script type="text/jsx">
import SafetyMobile from "@/view/user/safety/mobile-validate";
import SafetyPassword from "@/view/user/safety/user-password";
import SafetyEmail from "@/view/user/safety/email-bind";
import SafetyCardBind from "@/view/user/safety/card-bind";
import SafetyWithdraw from "@/view/user/safety/safety-withdraw";

import SafetyCardGroup from "./safety-card-group";
import SafetyCard from "./safety-card";
import SafetyDetailContent from "./safety-detail-content";


import CustomerService from "@/components/customer-service/index";
import {user_bank_card_API} from '@/api/bank';
const consts = {
  DIALOG_SIZE_NORMAL: "600px"
};
import { mapState } from "vuex";
export default {
  name: "user-safety",

  components: {
    CustomerService,
    SafetyCard,
    SafetyCardGroup,
    SafetyDetailContent,
    SafetyPassword,
    SafetyMobile,
    SafetyWithdraw,
    SafetyCardBind,
    SafetyEmail,
  },


  provide() {
    return {
      closeSubContent: this.closeSubContent
    };
  },

  props: {
    action: {}
  },

  watch: {
    action: {
      handler(action) {
        if (action) {
          this[action]();
        }
      },
      immediate: true
    }
  },

  data() {
    return {
      dialogVisible: false,
      dialogTitle: "",
      dialogName: "",
      dialog_width: "574px",
      bankList:{
        cardList:[],
      },
      isSubContentOpen:false,
      currentSubView:"",//safety-card-bind
      currentSubViewName:"",
    };
  },

  computed: {
    ...mapState("user", {
      user: state => state.user
    }),
    isBindCard(){
      if(!this.bankList||!this.bankList.cardList) return false;
      if(this.bankList.cardList.length>0){
        return true;
      }else{
        return false;
      }
    }
  },

  methods: {
    //获取绑定的银行卡
    getUserBindCard(){
      user_bank_card_API({}).then(res=>{
          if(res.code!==1){

          }else{
            this.bankList=res.data;
          }
      })
    },
    
    openDialog(name) {
      this.dialogVisible = true;
      this.dialogName = name;
    },
    openSubContent(name){
      this.isSubContentOpen=true;
      this.currentSubView=name;
      this.currentSubViewName='绑定银行卡';
    },
    cardBind() {
      if (this.user.telephone) {
        this.openDialog('safety-card-bind');
        // this.openSubContent("safety-card-bind");
      } else {
        this.bindMobileMessage();
      }
    },
    openWithDrawDialog() {
      if (this.isBindMobile) {
        this.openDialog({ dialogName: "safety-withdraw" });
      } else {
        this.bindMobileMessage();
      }
    },
    bindMobileMessage() {
      const h = this.$createElement;
        this.$notify({
          title: '提示',
          message:h('span', { style: 'color: red'}, `绑定银行卡，需要您先绑定手机号码，以便我们更全面的为您提供服务`),
          duration: 3000
        });
      // const vm = this.$messageTip({
      //   goToIcon: 'mobile',
      //   message: '设置安全中心功能，需要您先绑定手机号码，以便我们更全面的为您提供服务。',
      //   width: consts.DIALOG_SIZE_NORMAL,
      //   goTo: <div class="icon-link" onClick={() => {vm.close();this.openDialog({dialogName: 'safety-mobile'});}}>
      //     <svg-icon icon-class="mobile" type="primary"></svg-icon>立即绑定
      //   </div>
      // });
    },
    mobileContact() {
      
      if (this.user.telephone) {
        // const vm = this.$messageTip({
        //   message: `您已绑定手机${this.user.telephone}，若要修改，请联系客服。`,
        //   width: consts.DIALOG_SIZE_NORMAL,
        //   goTo: <customer-service nativeOnClick={() => {vm.close();}}><el-button type="primary" block>联系客服</el-button></customer-service>
        // });
         const h = this.$createElement;
        this.$notify({
          title: '提示',
          message:h('span', { style: 'color: red'}, `您已绑定手机${this.user.telephone}，若要修改，请联系客服。`),
          duration: 3000
        });
      } else {
        this.dialogTitle='手机号码验证'
        this.openDialog("safety-mobile");
      }
    },
    emailContact() {
      // const vm = this.$messageTip({
      //   message: `您已绑定邮箱${this.user.email}，若要修改，请联系客服。`,
      //   width: consts.DIALOG_SIZE_NORMAL,
      //   goTo: <customer-service nativeOnClick={() => {vm.close();}}><el-button type="primary" block>联系客服</el-button></customer-service>
      // });
       const h = this.$createElement;
        this.$notify({
          title: '提示',
          message:h('span', { style: 'color: red'}, `您已绑定邮箱${this.user.email}，若要修改，请联系客服。`),
          duration: 3000
        });
    }
  },
   mounted(){
    this.getUserBindCard();
  }
 
};
</script>


<style lang="scss">
.safe{
  width: 80%;
  margin: 0 auto;
}
</style>
