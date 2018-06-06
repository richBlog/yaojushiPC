<template>
    <div>
        <div class="integral-title">
            <p class="my-integral">
                <span>我的积分</span>
                <router-link to="/">查看积分说明</router-link>
            </p>
            <div class="integral-report-box">
                <div class="integral-report-item">
                    <p>可用积分</p>
                    <p>{{integralList.integral}}</p>
                </div>
                <div class="integral-report-item" @click="clickReport">

                    <div class="click-report">
                        点击签到
                        <div class="report-number">
                            <span>+ 5</span>
                            <br/>
                            <span>积分</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="integral-main">
            <div class="record-choice">
                <div class="integral-type">
                    <span :class="isActive?'active':''" @click="integralSelect">积分获取</span>
                    <span :class="!isActive?'active':''" @click="integralSelect">积分消费</span>
                </div>
                <el-select @change="selectTime" v-model="value" placeholder="请选择">
                    <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="integral-content">
                <el-row class="integral-content-title">
                    <el-col :span="6">积分用途</el-col>
                    <el-col :span="6">积分类型</el-col>
                    <el-col :span="6">积分变化</el-col>
                    <el-col :span="6">日期</el-col>
                </el-row>
                <div v-if="integralList.list.length <= 0" class="not-data">您目前尚未获得积分!</div>
                <el-row class="integral-content-sub" v-for="(item,index) in integralList.list" :key="index">
                    <el-col :span="6">{{item.purpose}}</el-col>
                    <el-col :span="6">{{item.type}}</el-col>
                    <el-col :span="6">{{item.integralChange}}</el-col>
                    <el-col :span="6">{{item.time}}</el-col>
                </el-row>
            </div>
            <el-pagination v-if="integralList.number > 0" class="paging" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="10" layout="total, prev, pager, next" :total="integralList.number">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: [
                {
                    value: "近一个月的积分记录",
                    label: "近一个月的积分记录"
                },
                {
                    value: "近三个月的积分记录",
                    label: "近三个月的积分记录"
                },
                {
                    value: "三个月前的积分记录",
                    label: "三个月前的积分记录"
                }
            ],
            value: "近一个月的积分记录",
            isActive: true,
            currentPage1: 1,
            integralList: {
                integral: 710,
                number: 2,
                list: [
                    {
                        purpose: "购物抵扣",
                        type: "支出",
                        integralChange: 710,
                        time: "2018/8/8"
                    },
                    {
                        purpose: "购物抵扣",
                        type: "支出",
                        integralChange: 610,
                        time: "2018/8/8"
                    }
                ]
            }
        };
    },
    methods: {
        // 选择查询的时间
        selectTime(value){
            console.log(value);
        },

        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        // 积分获取和积分消费查询切换
        integralSelect(e) {
            if (!e.target.classList.contains("active")) {
                this.isActive = !this.isActive;
            }
        },
        // 点击签到
        clickReport() {
            alert("该功能还在开发中！.....");
        }
    }
};
</script>

<style lang="less" scoped>
.integral-title {
    border: 1px solid #eee;
    .my-integral {
        display: flex;
        justify-content: space-between;
        padding: 20px 26px 20px 20px;
        border-bottom: 1px solid #eee;
        span {
            border-left: 3px solid #ff7e00;
            padding-left: 20px;
        }
        a {
            color: #2d8ef3;
            &:hover {
                text-decoration: underline;
            }
        }
    }

    .integral-report-box {
        display: flex;
        padding: 36px 0;
        align-items: center;
        text-align: center;
        .integral-report-item {
            width: 50%;
            p {
                font-size: 16px;
                color: #333;
                margin-bottom: 10px;
                &:last-child {
                    color: #ff0000;
                }
            }
        }
        .click-report {
            position: relative;
            width: 25%;
            margin: 0 auto;
            padding: 15px 51px 15px 5px;
            font-size: 16px;
            background-color: #ff7e00;
            border-radius: 6px;
            color: #fff;
            cursor: pointer;
            .report-number {
                position: absolute;
                top: 4px;
                right: 6px;
                padding: 2px 5px;
                border-radius: 4px;
                color: #ff7e00;
                font-size: 14px;
                background-color: #fff;
                span:first-child {
                    font-size: 16px;
                }
            }
        }
    }
}

.integral-main {
    margin-top: 12px;
    padding: 0 20px 18px 20px;
    border: 1px solid #eee;
    .record-choice {
        display: flex;
        padding: 10px 0;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        .integral-type {
            span {
                padding: 0 30px;
                border-right: 1px solid #eee;
                cursor: pointer;
                &.active {
                    position: relative;
                    color: #ff0000;
                    &::before {
                        content: "";
                        display: block;
                        position: absolute;
                        bottom: -22px;
                        left: 25%;
                        width: 50%;
                        height: 2px;
                        background-color: #ff0000;
                    }
                }
            }
        }
    }

    .integral-content {
        margin-top: 12px;
        padding-bottom: 20px;
        border: 1px solid #eee;
        .integral-content-title {
            padding: 10px 0;
            background-color: #eee;
            text-align: center;
        }

        .integral-content-sub {
            text-align: center;
            padding-top: 20px;
            .el-col {
                color: #666;
            }
        }

        .not-data {
            padding-top: 20px;
            text-align: center;
        }
    }

    .paging {
        padding-top: 20px;
        text-align: right;
        color: #666;
    }
}
</style>