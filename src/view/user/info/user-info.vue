<template>
  <div class="user-info">
    <el-form class="user-info__form" size="small" label-width="80px">
      <el-form-item label="账户名：">
        {{user.username}}
      </el-form-item>
      <el-form-item label="注册时间：">
        {{user.registerDate | dataFormat('yyyy-MM-dd hh:mm:ss')}}
      </el-form-item>
      <el-form-item label="注册IP：">
        {{user.registerIp}}
      </el-form-item>
    </el-form>

    <el-form class="user-info__form" :model="form" :rules="rules" @submit.native.prevent="updateUser('form')" ref="form" :disabled="loading" size="medium" label-width="80px">

      <!-- 昵称 -->
      <el-form-item label="昵称：" prop="nickName" class="user-info__nickName">
        <div class="user-info__item-main">
          <div>
            <el-input class="user-info__item-input" v-model="form.nickName" placeholder="请输入您的昵称" />
          </div>
        </div>
      </el-form-item>

      <!-- 生日 -->
      <el-form-item prop="birthday" label="生日：" v-if="noBirthday">
        <div class="user-info__item-main">
          <div>
            <el-date-picker class="user-info__item-input" v-model="form.birthday" type="date" placeholder="选择日期">
            </el-date-picker>
          </div>
          <el-tip>Ps：生日填写后不可再次修改</el-tip>
        </div>
      </el-form-item>

      <el-form-item label="生日：" v-else>
        <div class="user-info__item-main">
          <div>{{form.birthday}}</div>
        </div>
      </el-form-item>

      <!-- 姓名 -->
      <el-form-item prop="reallyName" label="姓名：" v-if="noReallyName">
        <div class="user-info__item-main">
          <div>
            <el-input class="user-info__item-input" v-model="form.reallyName" placeholder="请输入您的姓名" />
          </div>
          <el-tip>Ps：姓名填写后不可再次修改</el-tip>
        </div>
      </el-form-item>

      <el-form-item label="姓名：" v-else>
        <div class="user-info__item-main">
          <div>{{form.reallyName}}</div>
        </div>
      </el-form-item>

      <el-form-item prop="sex" label="性别：">
        <el-radio-group v-model="form.sex">
          <el-radio :label="sex.value" :key="sex.value" v-for="sex in SEX">{{sex.title}}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label-width="0px">
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { updateUserApi } from "@/api/user";
import { mapState } from "vuex";
import form from '@/mixins/form';
export default {
  name: "user-info",
  mixins:[form],
  data() {
    return {
      form: {
        nickName: undefined,
        birthday: undefined,
        reallyName: undefined,
        sex: undefined
      },
      SEX: [{ title: "男", value: 1 }, { title: "女", value: 2 }],
      rules: {
        nickName: this.nickNameRules,
        birthday: this.dateRules,
        // birthday: factory.getRule('birthday'),
        // reallyName: factory.getRule('reallyName'),
        reallyName: this.reallyNameRules
      },
      loading: false
    };
  },

  methods: {
    updateInfo() {
      if (JSON.stringify(this.user) == "{}") return;
      this.form["nickName"] = this.user.nickName;
      this.form["sex"] = this.user.sex;
      this.form["birthday"] = this.user.birthday;
      this.form["reallyName"] = this.user.reallyName;
    },
    //更新个人资料
    updateUser(fromName) {
      this.$refs[fromName].validate(valid => {
        if (valid) {
          updateUserApi({
            nickName: this.form["nickName"],
            reallyName: this.form["reallyName"],
            birthday: this.form["birthday"],
            sex: this.form["sex"]
          })
            .then(res => {
              this.loading = true;
              if (res.code !== 1) {
                this.$notify({
                  title: res.message,
                  type: "error",
                  duration: 2000
                });
              } else {
                this.loading = false;
                this.$notify({
                  title: `保存成功`,
                  type: "success",
                  duration: 2000
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
    }
  },

  computed: {
    noBirthday() {
      return !this.user.birthday;
    },
    noReallyName() {
      return !this.user.reallyName;
    },
    ...mapState("user", {
      user: state => state.user
    })
  },

  created() {
    this.updateInfo();
    // this.bindGet(getApi, 'form');
    // this.bindSave(saveApi, 'saveForm', 'form', {
    //   afterSuccess: () => {
    //     this.$store.dispatch(types.OAUTH);
    //   }
    // });
    // this.getAll();
  },
  watch: {
    user() {
      this.updateInfo();
    }
  }
};
</script>

<style lang="scss" scoped>
@include b(static-container-header) {
  margin-bottom: 24px;
}
@include b(user-info) {
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 71px;
  @include e(nickName) {
    width: 380px;
  }

  @include e(item-main) {
    display: flex;
    .el-tip {
      margin-left: 30px;
      flex: 1;
    }
  }
  @include e(item-input) {
    width: 380px;
  }

  .el-button {
    width: 260px;
  }
}
</style>