<template>
  <div class="card-list" v-show="bankData.cardList.length">
    <div class="bank-card"
         :class="[
         'bank-card--' + cardInfo.name
         ]"
         :style="`background-image:url(${cardInfo.pic})`" v-for="cardInfo in bankData.cardList" :key="cardInfo.cardId">
      <!-- <div class="bank-card__select" :class="{'is-select': !!cardInfo.selected}" @click="setDefault(cardInfo)">
        <svg viewBox="0 0 100 100">
          <polygon class="bank-card__select-polygon" points="0 0 100 0 100 100" fill="#000"></polygon>
        </svg>
        <svg-icon class="bank-card__select-check" icon-class="check" type="white" width="50"></svg-icon>
      </div> -->
      <div class="bank-card__top">
        <div class="bank-card__title">{{cardInfo.bankName}}</div>
        <div class="bank-card__delete" @click="deleteCard(cardInfo),dialogVisible=true">删除</div>
      </div>
      <div class="bank-card__number">{{cardInfo.cardNo}}</div>
    </div>

    <div v-transfer-dom>
      <el-dialog :visible.sync="dialogVisible" :before-close="() => {dialogVisible = false}" :title="dialogTitle"
                 :width="consts.DIALOG_SIZE_NORMAL">
        <component :is="dialogName"
                   @on-success="refresh"
                   :card-info="dialogProps"
                   v-if="dialogName"
        ></component>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import dialog from '@/mixins/dialog';

  import CardUnbind from './card-unbind';

  // import {
  //   bankCardUpdate as setDefaultApi
  // } from "@/services/api/user";

  export default {
    name: "card-list",

    components: {
      CardUnbind
    },

    mixins: [dialog],

    props: ['bankData'],

    data() {
      return {
        defaultCardId: undefined,
      };
    },


    methods: {
      setDefault(cardInfo) {
        //未选择
        if (cardInfo.selected === 0) {
          this.defaultCardId = cardInfo.cardId;
          this.doSave({action: 'setDefault'});
        }
      },
      deleteCard(cardInfo) {
        // this.openDialog({
        //   dialogName: 'card-unbind',
        //   props: cardInfo
        // });
        this.dialogName='card-unbind';
        this.dialogProps=cardInfo;
        this.dialogTitle='解绑银行卡';
      },
      refresh() {
        this.dialogVisible = false;
        this.$emit('on-success');
      },
    },

    mounted() {

      // this.bindSave(setDefaultApi, 'setDefault', 'defaultCardId', {
      //   successMessage: '设置默认银行卡成功',
      //   afterSuccess:() => {
      //     this.$emit('on-success');
      //   }
      // });
    }
  };
</script>

<style lang="scss" scoped>
  @include b(card-list) {
    margin-bottom: 62px;
    border-top: 1px solid $--border-color-base;
    padding-top: 55px;

  }
  @include b(bank-card) {
    width:255px;
    height: 90px;
    color: #ffffff;
    font-size: $--font-size-small;
    box-sizing: border-box;
    padding: 16px 30px 0 54px;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    display: inline-block;
    margin-right: 10px;
    background: $--color-primary no-repeat 8px 8px;

    @include m(zhaoshang) {
      background-color: #ef3f57;
    }
    @include m(gongshang) {
      background-color: #e95a64;
    }
    @include m(jianshe) {
      background-color: #4f83bd;
    }
    @include m(nongye) {
      background-color: #0099b3;
    }
    @include m(zhongguo) {
      background-color: #fa4c52;
    }
    @include m(jiaotong) {
      background-color: #4f83bd;
    }
    @include m(guangfa) {
      background-color: #eb4d60;
    }
    @include m(guangda) {
      background-color: #fbbd00;
    }
    @include m(pufa) {
      background-color: #4373aa;
    }
    @include m(minsheng) {
      background-color: #5aa572;
    }
    @include m(pingan) {
      background-color: #ec681b;
    }
    @include m(xinye) {
      background-color: #4f83bd;
    }
    @include m(zhongxin) {
      background-color: #ff4150;
    }
    @include m(youzheng) {
      background-color: #009174;
    }


    &:last-of-type {
      margin-right: 0;
    }

    @include e(top) {
      display: flex;
    }

    @include e(title) {
      margin-bottom: 24px;
      font-weight: bold;
      flex: 1;
    }
    @include e(delete) {
      cursor: pointer;
    }

    @include e(number) {
      font-size: $--font-size-base;
      letter-spacing: 2px;
    }
    @include e(select) {
      position: absolute;
      top: 0;
      right: 0;
      width: 37px;
      height: 37px;
      cursor: pointer;

      @include when(select) {
        cursor: default;
        @include e(select-check) {
          fill: #ffffff;
        }
      }
    }

    @include e(select-polygon) {
      opacity: .2;
    }
    @include e(select-check) {
      position: absolute;
      top: 2px;
      right: 4px;
      width: 15px;
      fill: $--color-black-4;
    }
  }
</style>