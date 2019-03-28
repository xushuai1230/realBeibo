<template>
    <div class="main-resources">
        <div class="main-resources__header">
            <el-form :model="filters" inline>
                <el-form-item label="图片类型:">
                    <el-select v-model="filters.type">
                        <el-option v-for="item in consts.EXTENSIONTYPE" :label="item.name" :key="item.value" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="图片宽尺寸:">
                    <el-select v-model="filters.size">
                        <el-option v-for="item in consts.EXTENSIONSIZE" :label="item.name" :key="item.value" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </div>
        <div class="main-resources_body">
            <el-table :data="tableData" :loading="loading" element-loading-text="加载中..." border border-radius class="is-group">
                <el-table-column label="图片" align="center" width="600">
                </el-table-column>
                <el-table-column prop="" label="类型" align="center"></el-table-column>
                <el-table-column label="尺寸" align="center" prop=""></el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="{row}">
                        <link-button :w='"auto"' border>修改</link-button>
                    </template>
                </el-table-column>
                <template slot="empty">
                    <div class="el-table__empty">
                        <div class="el-table-text">暂无数据</div>
                    </div>
                </template>
            </el-table>
        </div>
    </div>
</template>

<script>
import { EXTENSIONTYPE, EXTENSIONSIZE } from "@/const";
import { materialApi } from "@/api/promotion";
export default {
  name: "resources",
  data() {
    return {
      tableData: [],
      filters: {
        type: -1,
        size: -1
      },
      consts: {
        EXTENSIONTYPE,
        EXTENSIONSIZE
      },
      loading: false
    };
  },
  methods: {
    //获取推广素材
    Getmaterial() {
      materialApi({
        materialType: this.filters["type"],
        materialSize: this.filters["size"]
      }) 
        .then(res => {
          if (res.code !== 1) {
            this.$message({
              message: res.message,
              type: "error"
            });
          } else {
            this.tableData = res.data.map(item => {
              item.typeName = this.getTypeName(item.materialType);
              item.sizeName = this.getImageSize(item.materialSize);
              return item;
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //转化图片类型
    getTypeName(ImgType) {
      let cloneObj = this.consts.EXTENSIONTYPE.find(item => {
        return item.type === ImgType;
      });
      return (cloneObj && cloneObj.typeName) || "未知";
    },
    //转化图片类型
    getImageSize(type) {
      let cloneObj = this.consts.EXTENSIONSIZE.find(item => {
        return item.value === type;
      });
      return (cloneObj && cloneObj.name) || "未知";
    }
  },
  mounted() {
    this.Getmaterial();
  }
};
</script>

<style lang="scss" scoped>
@include b(main-resources) {
  padding: 24px 45px;
  @include e(header) {
    // margin-bottom: 35px;
  }
}
</style>
