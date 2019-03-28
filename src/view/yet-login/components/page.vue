<template>
    <div class="zj-page__container">
        <div class="block">
            <span>选择页数:</span> 
            <input v-on:keyup.13="choose" v-model="pagenum" type="text">
        </div>
        <el-pagination
            layout="prev, pager, next"
            pager-count="4"
            @prev-click="prev"
            @next-click="next"
            @current-change ="currentChange"
            :current-page ="currentPage"
            :total="1000">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name:"page",
        data() {
            return {
             pagenum:1,
             currentPage: 1
            }
        },
        methods: {
            // prev(val) {
            //   console.log(val)
            //   this.pagenum = val
            // },
            // next(val) {
            //     console.log(val)
            //      this.pagenum = val
            // },
            choose() {
                this.currentPage = this.pagenum;
                 console.log('111',this.pagenum,this.currentPage)
            },
            currentChange(val) {
                 this.currentPage = this.pagenum = val
                console.log(val,111)
            }
        }
    }
</script>

<style lang="scss">
    .zj-page__container{
        display:flex;
        .block {
            display:flex;
            align-items:center;
            text-align: right;

            >span {
                font-size: 14px;
                font-family: MicrosoftYaHei-Bold;
                font-weight: bold;
                color: rgba(0, 0, 0, 1);
                margin-right: 12px;
                text-align: center;
            }

            >input {
                width: 55px;
                height: 36px;
                background: rgba(251, 251, 251, 1);
                border-radius: 5px;
                border: 1px solid RGBA(222, 222, 222, 1);
                margin-right: 25px;
                text-align: center;
                line-height: 36px;
                font-size: 14px;
                font-family: MicrosoftYaHei;
                color: rgba(0, 0, 0, 1);
            }
        }
        .el-pagination {
            .el-pagination__jump {
                font-size: 14px;
                font-family: MicrosoftYaHei-Bold;
                font-weight: bold;
                color: rgba(0, 0, 0, 1);
            }

            .el-input {
                margin-left: 12px;
                margin-right: 59px;
                height: 36px;
                width: 55px;

                .el-input__inner {
                    height: 36px;
                    width: 55px;
                    background: rgba(251, 251, 251, 1);
                    border-radius: 5px;
                    border: 1px solid RGBA(222, 222, 222, 1);
                    font-size: 14px;
                    font-family: MicrosoftYaHei;
                    color: rgba(0, 0, 0, 1);
                }

            }

            .el-pager {
                height: 36px;
                .number {
                    font-size: 14px;
                    font-family: MicrosoftYaHei-Bold;
                    font-weight: bold;
                    color: rgba(32, 33, 36, 1);
                    border-right: 1px solid RGBA(237, 237, 237, 1);
                    height: 36px;
                    line-height: 36px;
                    border-top: 1px solid RGBA(237, 237, 237, 1);
                    border-bottom: 1px solid RGBA(237, 237, 237, 1);
                    &:last-child {
                        border-right: none;
                    }
                }
                .el-icon-more {
                    border-top: 1px solid RGBA(237, 237, 237, 1);
                    border-bottom: 1px solid RGBA(237, 237, 237, 1);
                    border-right: 1px solid RGBA(237, 237, 237, 1);
                }
                .el-icon {
                    width: 39px;
                    height: 36px;
                    line-height: 36px;
                }

                .active {
                    width: 39px;
                    height: 36px;
                    background: rgba(30, 90, 220, 1);
                    @include box-shadow (0px, 7px, 21px, 0px, rgba(0, 0, 0, 0.18));
                    @include border-radius (5px);
                    font-size: 14px;
                    font-family: MicrosoftYaHei-Bold;
                    font-weight: bold;
                    color: rgba(255, 255, 255, 1);
                }
            }

            .btn-prev {
                width: 39px;
                height: 36px;
                border-radius: 5px 0 0 5px;
                border: 1px solid RGBA(237, 237, 237, 1);
                padding: 0;
                // text-align: center;
                .el-icon-arrow-left {
                    height:10px;
                    color:rgba(32,33,36,1);
                }
            }

            .btn-next {
                width: 39px;
                height: 36px;
                border-radius: 0px 5px 5px 0;
                border: 1px solid RGBA(237, 237, 237, 1);
                padding: 0;
                .el-icon-arrow-right {
                    height:10px;
                    color:rgba(32,33,36,1);
                }
            }
        }
    }
</style>
