<template>
    <div class="subMember">
        <div class="submemberTitle">
          <span>查询时间:</span>
          <div class="block">
            <el-date-picker
            v-model="dateSection"
            type="datetimerange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="['12:00:00']">
            </el-date-picker>
        </div>
         <span>会员账户:</span>
         <el-input v-model="input" placeholder="支持模糊查询"></el-input>
          <span>在线状态:</span>
          <el-select v-model="value" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
          </el-select>
          <el-row>
            <el-button type="primary">查询</el-button>
        </el-row>
      </div>
      <subtable></subtable>
    </div>
</template>

<script>
import subtable from "../../components/vip-table.vue";
export default {
  neme: "sub-member",
  data() {
    return {};
  },
  components: {
    subtable
  }
};
</script>

<style lang="scss" scoped>
  .subMember {
      width: 100%;
      height: auto;
  }
</style>
