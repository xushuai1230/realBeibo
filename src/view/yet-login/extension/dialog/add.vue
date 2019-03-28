<template>
    <div class="add-domain">
        <el-form :model="form" label-position="top" :rules="rules" @submit.native.prevent='addDomain("form")' ref='form'>
            <el-form-item label="链接编号:" prop="name">
                <el-input v-model.trim="form.name" placeholder="请输入链接编号" auto-complete="off">
                    <template slot="prepend">
                        <icon-svg icon-class="email"></icon-svg>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item class="add-domain__hander">
                <el-button type="primary" class="bold" size="medium" native-type="submit" :loading="loading">生成链接</el-button>
                <el-button size="medium" class="bold" @click="$parent.$parent.dialogVisible=false">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { add_domain_Api } from "@/api/promotion";
export default {
  data: () => ({
    form: {
      name: undefined
    },
    loading: false,
    rules: {
      name: [
        {
          validator: (rule, value, callback) => {
            if (value === "" || value === undefined) {
              callback(new Error("链接编号不能为空"));
            } else if (!/^(0|[1-9][0-9]*|-[1-9][0-9]*)$/.test(value)&&!/[a-zA-Z]/.test(value)) {
              callback(new Error("只能填写字母和数字"));
            } else {
              callback();
            }
          },
          trigger: "change"
        }
      ]
    }
  }),
  methods: {
    //修改代理域名
    addDomain(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          add_domain_Api({
            name: this.form["name"],
          })
            .then(res => {
              if (res.code !== 1) {
                this.$message({
                  message: res.message,
                  type: "error"
                });
              } else {
                this.$parent.$parent.dialogVisible = false;
                this.$parent.$parent.getDomainList();
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
  }
};
</script>


<style lang="scss" scoped>
@include b(add-domain__hander) {
  margin-top: 45px;
  button {
    width: 219px;
  }
}
</style>
