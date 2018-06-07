<template>
    <div class="layout-coupon">
        <p class="coupon-title">
            <span>我的优惠券</span>
        </p>
        <div class="coupon-main">
            <div class="coupon-info">
                <div class="coupon-info-title">
                    <span :class="state===1?'active':''" @click="couponTab(1)">未使用 {{couponList.notUsed}}</span>
                    <span :class="state===2?'active':''" @click="couponTab(2)">已使用 {{couponList.alreadyUsed}}</span>
                    <span :class="state===3?'active':''" @click="couponTab(3)">已过期 {{couponList.overdue}}</span>
                </div>
                <div class="coupon-info-content">
                    <el-row class="info-type">
                        <el-col :span="6">面值</el-col>
                        <el-col :span="6">所需消费金额</el-col>
                        <el-col :span="6">使用限制</el-col>
                        <el-col :span="6">有效期</el-col>
                    </el-row>
                    <el-row v-if="paging() > 0" class="info-sub" v-for="(item,index) in couponList.list" :key="index">
                        <el-col :span="6" class="money">￥{{item.faceValue | money}}</el-col>
                        <el-col :span="6">￥{{item.value | money}}</el-col>
                        <el-col :span="6">{{item.title}}</el-col>
                        <el-col :span="6">
                            <span>{{item.time}}</span>
                            <br>
                            <span class="info-prompt">{{item.static}}</span>
                        </el-col>
                    </el-row>
                    <div class="not-data" v-if="paging() <= 0">您目前还没有优惠券，祝您<router-link to="/">购物</router-link>愉快</div>
                </div>
                <el-pagination v-if="paging() > 0" class="paging" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="10" layout="total, prev, pager, next" :total="paging()">
                </el-pagination>
            </div>
            <div class="coupon-activation">
                <p>优惠券激活</p>
                <div class="coupon-account">优惠券账号：<el-input v-model="account" placeholder="请输入账号"></el-input></div>
                <div class="coupon-password">
                    优惠券密码：<el-input v-model="password" placeholder="请输入密码"></el-input>
                    <el-button type="primary" size="medium" @click="activation">激活</el-button>
                    <el-button type="primary" size="medium" @click="reset">重置</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import filterMoney from "apis/filter.js";
export default {
    data() {
        return {
            account:'',
            password:'',
            state: 1,
            currentPage1: 1,
            couponList: {
                notUsed: 2,
                alreadyUsed: 1,
                overdue: 0,
                list: [
                    {
                        faceValue: 10,
                        value: 100,
                        title: "新人红包",
                        time: "2018.06.06至2018.08.08",
                        static: ""
                    },
                    {
                        faceValue: 10,
                        value: 100,
                        title: "五一特惠",
                        time: "2018.06.06至2018.08.08",
                        static: "即将过期"
                    }
                ]
            }
        };
    },
    filters: {
        money(value) {
            return filterMoney.moneyFilter(value);
        }
    },
    methods: {
        // 激活优惠券
        activation(){
            if(this.account == ''){
                this.$message.error('激活失败，账户不能为空');
            }else if(this.password == ''){
                this.$message.error('激活失败，密码不能为空');
            }else{
                this.$message('该功能程序员小哥哥还在开发中，敬请期待.....');
            }
        },
        reset(){
            this.account = '';
            this.password = '';
        },
        // 优惠券状态切换
        couponTab(value){
            this.state = value;
        },
        // 分页显示判断
        paging(){
            if(this.state === 1) {
                return this.couponList.notUsed
            }else if(this.state === 2){
                return this.couponList.alreadyUsed
            }else{
                return this.couponList.overdue
            }
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    }
};
</script>

<style lang="less" scoped>
.layout-coupon {
    border: 1px solid #eee;
    .coupon-title {
        padding: 20px;
        border-bottom: 1px solid #eee;
        span {
            border-left: 3px solid #ff7e00;
            padding-left: 20px;
        }
    }
    .coupon-main {
        padding: 20px;
        .coupon-info {
            border: 1px solid #eee;
            padding: 0 20px;
            .coupon-info-title {
                padding: 10px 0;
                border-bottom: 1px solid #eee;
                span {
                    position: relative;
                    padding: 0 20px;
                    border-right: 1px solid #eee;
                    cursor: pointer;
                    &.active {
                        color: #ff0000;
                        &::before {
                            content: "";
                            display: block;
                            position: absolute;
                            bottom: -11px;
                            left: 0;
                            right: 0;
                            width: 60%;
                            height: 2px;
                            margin: 0 auto;
                            background-color: #ff0000;
                        }
                    }
                }
            }
            .coupon-info-content {
                margin-top: 12px;
                border: 1px solid #eee;

                .info-type {
                    background-color: #eee;
                    padding: 10px 0;
                    text-align: center;
                    .el-col {
                        color: #333;
                        font-size: 16px;
                        font-weight: bold;
                    }
                }

                .info-sub {
                    text-align: center;
                    .el-col {
                        padding: 20px 0;
                        color: #666;
                    }
                    .money {
                        color: #ff0000;
                    }
                    .info-prompt {
                        color: #ff0000;
                    }
                }

                .not-data{
                    padding: 66px 0;
                    text-align: center;
                    a{
                        color: #2d8ef3;
                    }
                }
            }

            .paging{
                padding: 20px 0;
                text-align: right;
            }
        }

        .coupon-activation{
            margin-top: 20px;
            padding: 20px;
            border: 1px solid #eee;
            font-size: 16px;
            color: #666;
            p{
                margin-bottom: 20px;
            }
            .coupon-account{
                margin-bottom: 20px;
            }

            .el-input{
                width: 30%;
            }

            .el-button{
                margin-left: 30px;
            }
        }
    }
}
</style>