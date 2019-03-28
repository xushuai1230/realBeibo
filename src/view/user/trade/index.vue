<template>
  <static-container>
    <!-- <static-container-header>
      资金明细
    </static-container-header> -->
    <static-container-body>
      <el-form v-model="filters" label-position="top" :inline="true" size="medium" flex>
        <el-form-item label="交易类型:">
          <el-select v-model="filters.orderType">
            <el-option v-for="item in consts.TRADE_TYPE" :label="item.title" :key="item.value" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间:">
          <el-select v-model="time">
            <el-option v-for="item in consts.TIME_PERIOD" :label="item.title" :key="item.value" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态:">
          <el-select v-model="filters.status">
            <el-option v-for="item in consts.TRADE_STATUS" :label="item.title" :key="item.value" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <el-table :data="tableData.list" :loading="loading" element-loading-text="加载中..." :summary-method="getSummaries" show-summary wrapper-border border-radius>
        <el-table-column label="时间" align="center">
          <template slot-scope="{row}">
            {{row.lastUpdate | dataFormat('yyyy.MM.dd hh:mm:ss')}}
          </template>
        </el-table-column>
        <el-table-column prop="orderId" label="订单号" align="center"></el-table-column>
        <el-table-column label="交易类型" align="center">
          <template slot-scope="{row}">
            {{row.orderType | TodealType}}
          </template>
        </el-table-column>
        <!-- <el-table-column prop="orderDesc" label="子类型" align="center"></el-table-column> -->
        <el-table-column label="金额" align="center" prop="amount">
        </el-table-column>
        <el-table-column label="账变后钱包余额" align="center" prop="balance">
        </el-table-column>
        <el-table-column prop="status" label="状态" align="center">
          <template slot-scope="{row}">
            <badge-text :value="row.status" dic="TRADE_STATUS"></badge-text>
          </template>
        </el-table-column>
        <template slot="empty">
          <div class="el-table__empty">
            <icon-svg class="el-table__empty-icon" icon-class="grid-empty-1"></icon-svg>
            <div class="el-table-text">暂无资金明细</div>
          </div>
        </template>
      </el-table>

      <div class="el-pagination-container">
        <el-pagination bordered @size-change="gridSizeChange" @current-change="gridCurrentChange" :current-page="filters.page" :page-size="filters.size" :total="tableData.total">
        </el-pagination>
        <el-warning>所有数据只保留最近60天，如若查询更多请联系在线客服</el-warning>
      </div>
    </static-container-body>
  </static-container>
</template>

<script>
import {
  TRADE_TYPE,
  TRADE_STATUS,
  ALL,
  TIME_PERIOD,
  TODAY,
  ORDER_TYPE
} from "@/const";
import { historyAPI } from "@/api/Commission";
import pagination from "@/mixins/pagination";
import { returnNeedTime } from "@/utils/format";
export default {
  name: "user-trade",
  mixins: [pagination],
  data() {
    return {
      consts: {
        TRADE_TYPE,
        TRADE_STATUS,
        TIME_PERIOD
      },
      tableData: {},
      time: TODAY,
      filters: {
        orderType: ORDER_TYPE,
        startTime: undefined,
        endTime: undefined,
        status: ALL,
        page: 1,
        size: 10
      },

      statistic: [
        {
          index: 4,
          prop: "tableData.amountTotal",
          format: total => {
            return <div>{_.fixedConvert2yuan(total)}</div>;
          }
        }
      ]
    };
  },
  methods: {
    getHistory() {
      historyAPI({
        orderType: this.filters["orderType"],
        startTime: this.filters["startTime"],
        endTime: this.filters["endTime"],
        page: this.filters["page"],
        size: this.filters["size"],
        status: this.filters["status"]
      })
        .then(res => {
          if (res.code !== 1) {
            this.$message({
              message:res.message,
              type:'error',
            })
          } else {
            this.tableData = res.data;
          }
        })
        .catch(err => {
          console.warn(err);
        });
    },
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 2) {
          sums[index] = "总计:";
          return;
        }

        const values = data.map(item => Number(item[column.property]));
        if (index === 3) {
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += "";
          }
        } else {
          sums[index] = "";
        }
      });

      return sums;
    }
  },
  watch: {
    time: {
      handler(time) {
        this.filters["startTime"] = returnNeedTime(time)[0];
        this.filters["endTime"] = returnNeedTime(time)[1];
      },
      immediate: true
    },
    filters: {
      handler() {
        this.getHistory();
      },
      deep: true
    }
  },
  filters: {
    TodealType(type) {
      let typeStr = "";
      switch (type) {
        case 1:
          typeStr = "存款";
          break;
        case 2:
          typeStr = "提现";
          break;
        case 3:
          typeStr = "转账";
          break;
        case 4:
          typeStr = "红利";
          break;
        case 5:
          typeStr = "其他";
          break;
        case 6:
          typeStr = "系统加币";
          break;
        case 8:
          typeStr = "上级转入";
          break;
      }
      return typeStr || "-";
    },
    toState(status) {
      let statusStr = "";
      switch (status) {
        case -1:
          statusStr = "全部";
          break;
        case 0:
          statusStr = "处理中";
          break;
        case 1:
          statusStr = "成功";
          break;
        case 2:
          statusStr = "失败";
          break;
      }
      return statusStr || "-";
    }
  }
};
</script>
