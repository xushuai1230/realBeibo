<template>
    <div class="qr-code">
        <div class="qr-code__img">
            <qriously :value='value_code' :size='169' id='mycanvas'></qriously>
        </div>
        <div class="qr-code__handle">
            <el-button size="small" @click="CopyUrl">复制二维码</el-button>
            <el-button type="primary" size="small" @click="saveImg">下载二维码</el-button>
        </div>
    </div>
</template>

<script>
//二维码
import { API_ROOT } from "@/api/config";
import qriously from "vue-qriously";
import VueClipboard from "vue-clipboard2";
VueClipboard.config.autoSetContainer = true // add this line
import Vue from "vue";
Vue.use(qriously);
Vue.use(VueClipboard)
export default {
  props: ["thisData"],
  data: () => ({
    value_code:'',      
  }),
  methods: {
    // 将canvas生成的二维码保存为图片
    saveImg() {
      this.$message({
        message: "下载成功",
        type: "success"
      });
      let canvas = document.querySelector("#mycanvas>canvas");
      let imgSrc = canvas.toDataURL("image/png");
      let a = document.createElement("a");
      a.href = imgSrc;
      a.download = "drcQrcode";
      a.click();
    },
    CopyUrl() {
       
      this.$copyText(this.value_code).then(
        (e)=> {
            this.$message({
                message:'复制成功!',
                type:'success'
                
            })
        },
        (e) =>{
          alert("Can not copy");
          console.log(e);
        }
      );
    }
  },
  created() {
      this.value_code="http://" + this.thisData.domain + "." + API_ROOT.replace("http://", "")
  }
};
</script>



<style lang="scss" scoped>
@include b(qr-code) {
  @include e(img) {
    text-align: center;
  }
  @include e(handle) {
    margin-top: 47px;
    button {
      width: 219px;
    }
  }
}
</style>
