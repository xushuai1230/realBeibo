<template>
  <div class="card-bind">
    <!-- <el-tip>
      为了资金安全考虑，第一次绑定银行卡填写的姓名无法再次修改；最多绑定3张银行卡。
    </el-tip> -->
    <static-container-header>
      绑定银行卡
      <div class="bank-list_header-brief">
        已绑定
        <span>{{bankData.cardList.length}}</span> 张银行卡，最多可添加
        <span>3</span> 张银行卡
      </div>
      <div class="bank-list_header-tips" v-if="bankData.cardList.length >= 3">
        若要添加新的银行卡，请先删除一张已绑定银行卡
      </div>
    </static-container-header>
    <!-- <el-tip type="warning" v-if="bankData.cardList.length >= 3">
      若要添加新的银行卡，请先删除一张已绑定银行卡
    </el-tip> -->

    <el-form class="card-bind__form" :model="form" :rules="rules" @submit.native.prevent="bindCard('form')" ref="form" :disabled="loading" size="medium" label-width="90px" v-if="bankData.cardList.length < 3">
      <el-form-item prop="name" label="姓名：" :rules="user.reallyName ? {} : {required: true, message: '请输入银行卡持有人姓名'}">
        <template v-if="user.reallyName">{{user.reallyName}}</template>
        <el-input v-model="form.name" v-else></el-input>
      </el-form-item>
      <el-form-item label="银行卡号：" prop="cardNo" :error="formError">
        <el-input v-model="form.cardNo" placeholder="请输入银行卡号"></el-input>
      </el-form-item>
      <el-form-item no-spacing="" label-width="0px">
        <el-button type="primary" native-type="submit">确定</el-button>
      </el-form-item>
    </el-form>
    <card-list :bank-data="bankData" @on-success="refresh"></card-list>

  </div>
</template>
<script>
const cache = [];
const requireAll = r => r.keys().forEach(key => (cache[key] = r(key)));
const req = require.context("./misc", true, /\.png$/);
requireAll(req);
import CardList from "./card-list";
import { mapState } from "vuex";
import {
  user_bank_card_API,
  bindcardUserbankcardApi,
  validateUserbankcardApi
} from "@/api/bank";
import { BANK_LIST } from "@/const/bank";
export default {
  name: "safety-card-bind",
  components: { CardList },
  inject: ["setViewName"],

  data() {
    return {
      bankData: {
        cardList: [],
        name: ""
      },
      form: {
        name: undefined,
        cardNo: undefined
      },
      rules: {
        // cardNo: factory.getRule('cardNumber'),
        cardNo: [
          {
            required: true,
            message: "银行卡号不能为空！",
            trigger: "blur"
          }
        ]
      },
      formError: undefined
    };
  },
  computed: {
    ...mapState("user", {
      user: state => state.user
    }),
    length() {
      return this.$refs.list.getCount();
    }
  },
  methods: {
    //获取绑定的银行卡
    getUserBindCard() {
      user_bank_card_API({}).then(res => {
        if (res.code !== 1) {
        } else {
          this.bankData = res.data;

          let list = res.data.cardList;
          list.forEach(item => {
            const bankName = BANK_LIST.find(model => {
              return item.bankId === model.value;
            }).name;
            item.name = bankName;
            item.pic = cache[`./${bankName}-small.png`];
          });
        }
      });
    },
    bindCard(formName) {
      if (this.bankData.cardList.length < 3) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.formError='';
            validateUserbankcardApi({
              name:this.user.reallyName||this.form['name'],
              cardNo: this.form["cardNo"]
            })
              .then(res => {
                if (res.code !== 1) {
                  this.formError=res.message;
                } else {
                  bindcardUserbankcardApi({
                    name: this.form["name"]||this.user.reallyName,
                    cardNo: this.form["cardNo"]
                  })
                    .then(res => {
                      if (res.code !== 1) {
                         this.formError=res.message;
                      } else {
                        this.getUserBindCard();
                      }
                    })
                    .catch(err => {
                      console.warn(err);
                    });
                }
              })
              .catch(err => {
                console.warn(err);
              });
          } else {
            return false;
          }
        });
      } else {
        this.$notify({
          title: "已超出最高3张银行卡绑卡限制，无法进行绑定！",
          // message: errorMessage,
          type: "error",
          duration: 2000
        });
      }
    },
    refresh() {
      this.getAll();
    }
  },

  mounted() {
    this.getUserBindCard();


    // this.bindSave(saveApi, "saveForm", "form", {
    //   beforeSend: data => {
    //     this.formError = "";
    //     return data;
    //   },
    //   afterSuccess: () => {
    //     this.$store.dispatch(types.OAUTH);
    //     this.detailContent.closeSubContent();
    //   },
    //   afterFail: ([result, data]) => {
    //     this.formError = data.message;
    //   }
    // });
  }
};
</script>

<style lang="scss" scoped>
@include b(card-bind) {
  border: 1px solid #eaeaea;
  border-radius: 9px;
  padding: 40px 60px;
  width: 100%;
  .bank-list_header-brief {
    font-size: 14px;

    color: rgba(0, 0, 0, 0.3);
    span {
      color: #1e5adc;
    }
  }
  .bank-list_header-tips,
  .bank-list_header-brief {
    margin-top: 11px;
    font-family: "MicrosoftYaHei";
  }
  .bank-list_header-tips {
    font-size: 14px;
    color: #ff5546;
  }
  .el-input {
    width: 380px;
  }
  .el-button {
    width: 260px;
  }

  @include e(form) {
    padding-bottom: 78px;
  }
}
</style>
