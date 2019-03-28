<template>
    <div class="lcvTable">
        <el-table
            :data="tableData"
            style="width: 100%"
           >
            <el-table-column
                prop="date"
                label="日期">
            </el-table-column>
            <el-table-column
                prop="count"
                label="注册数">
            </el-table-column>
            <el-table-column
                prop="onedaylater"
                label="1天后">
            </el-table-column>
             <el-table-column
                prop="twodaylater"
                label="2天后">
            </el-table-column>
            <el-table-column
                prop="threedaylater"
                label="3天后">
            </el-table-column>
            <el-table-column
                prop="fourdaylater"
                label="4天后">
            </el-table-column>
             <el-table-column
                prop="fivedaylater"
                label="5天后">
            </el-table-column>
            <el-table-column
                prop="sixdaylater"
                label="6天后">
            </el-table-column>
            <el-table-column
                prop="sevendaylater"
                label="7天后">
            </el-table-column>
             <el-table-column
                prop="weeklater"
                label="14天后">
            </el-table-column>
            <el-table-column
                prop="monthlater"
                label="30天后">
            </el-table-column>
        </el-table>
        <div class="lcv-table-container">
            <page></page> 
        </div>
    </div>
</template>

<script>
    export default {
        name:"lcv-analysis",
        data() {
            return {
                tableData: [{
                date: '2016-05-02',
                count: '24',
                onedaylater: '30%',
                twodaylater:"40%",
                threedaylater:'60%',
                fourdaylater:"12%",
                fivedaylater:"30%",
                sixdaylater: "20%",
                sevendaylater: "",
                weeklater: "",
                monthlater:""
              }, {
                date: '2016-05-04',
                count: '34',
                 onedaylater: '30%',
                twodaylater:"40%",
                threedaylater:'60%',
                fourdaylater:"12%",
                fivedaylater:"30%",
                sixdaylater: "20%",
                sevendaylater: "",
                weeklater: "",
                monthlater:""
              }, {
                date: '2016-05-01',
                count: '14',
                 onedaylater: '30%',
                twodaylater:"40%",
                threedaylater:'60%',
                fourdaylater:"12%",
                fivedaylater:"30%",
                sixdaylater: "20%",
                sevendaylater: "",
                weeklater: "",
                monthlater:""
              }, {
                date: '2016-05-03',
                count: '46',
                 onedaylater: '30%',
                twodaylater:"40%",
                threedaylater:'60%',
                fourdaylater:"12%",
                fivedaylater:"30%",
                sixdaylater: "20%",
                sevendaylater: "",
                weeklater: "",
                monthlater:""
              }]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .lcvTable {
        width: 100%;
        height: auto;

        .el-table {
            margin-bottom: 37px;

            .el-table__header-wrapper {
                th {
                    text-align: center;
                    background: rgba(251, 251, 251, 1);

                    .cell {
                        font-size: 17px;
                        font-family: MicrosoftYaHei-Bold;
                        font-weight: bold;
                        color: rgba(32, 33, 36, 1);
                    }
                }
            }

            .el-table__body-wrapper {
                td {
                    text-align: center;

                    .cell {
                        font-size: 14px;
                        font-family: MicrosoftYaHei;
                        color: rgba(32, 33, 36, 1);
                    }
                }
            }
        }
    }

    @include b(lcv-table-container) {
        display:flex;
        justify-content:flex-end;
        padding-bottom:25px;
    }
</style>
