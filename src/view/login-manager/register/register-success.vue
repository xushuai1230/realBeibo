<template>
  <div class="main-container register-success">
    <div class="main-container__close">
      <i class="el-icon-close"></i>
    </div>
    <div class="main-container__main">
      <div class="main-container-main__title main-container-main__title--spacing-small">
        注册成功
      </div>
      <div class="main-container__img">
        <icon-svg icon-class="register-success"></icon-svg>
      </div>
      <div class="main-container__txt">
        代理账户注册申请已提交成功 工作人员会在3个工作日内通过注册手机号内与您取得联系！
      </div>
    </div>

  </div>
</template>

<script>
/*
  export default {
    name: "register-success",
    // mixins: [form],

    data() {
      return {
        form: {
          nickName: ``
          // nickName: `${Faker.Name.findName()}${_.random(9999)}`
        },
        rules: {
          // nickName: factory.getRule('nickName'),
          nickName: '',
        },
        nickNameCheck: false,
        isSubmit: false,
        formError: '',
      };
    },

    methods: {
      submit() {
        if (this.nickNameCheck) {
          this.doSave({action: 'saveForm', form: 'form'});
        } else {
          this.isSubmit = true;
          this.doSave({action: 'check', form: 'form'});
        }
      }
    },

    mounted() {
      // this.bindSave(checkApi, 'check', 'form', {
      //   beforeSend: (data) => {
      //     this.formError = '';

      //     return data;
      //   },
      //   callback: ([result, data]) => {
      //     if (!result) {
      //       this.formError = data.message;
      //     } else {
      //       this.nickNameCheck = true;
      //       this.formError = '';
      //       if (this.isSubmit) {
      //         this.submit();
      //       }
      //     }
      //   }
      // });
      // this.bindSave(saveApi, 'saveForm', 'form', {
      //   beforeSend: (data) => {
      //     this.formError = '';

      //     return data;
      //   },
      //   callback: ([result, data]) => {
      //     if (!result) {
      //       this.formError = data.message;
      //     } else {
      //       this.$message({
      //         message: '注册成功',
      //       });

      //       this.$store.dispatch(types.OAUTH);

      //       this.$router.replace(this.$route.query.redirect || {name: 'home'});
      //     }
      //   }
      // });
    }
  };
  */
</script>

<style lang="scss">
@include b(main-container) {
  @include e(close) {
    position: absolute;
    cursor: pointer;
    width: 42px;
    height: 42px;
    line-height: 42px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.24);
    border-radius: 50%;
    right: -12px;
    top: -20px;
    text-align: center;
    i{
      font-size: 20px;
      color: rgba(0,0,0,.25);
      
    }
  }

  &.register-success {
    overflow: inherit;
    padding: 20px 40px 40px 35px;
    @include e(main) {
      border-bottom: none;
      @include e(txt) {
        font-size: 14px;
        font-family: "MicrosoftYaHei";
        text-align: center;
        margin-top: 14px;
        color: rgba(0, 0, 0, 0.4);
      }
      @include e(img) {
        text-align: center;
        .svg-icon {
          width: 76px;
          height: 76px;
        }
      }
    }
  }
}
</style>
