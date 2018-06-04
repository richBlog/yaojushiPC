<template>
    <div class="order-details">

        <headerView/>

        <classifiedView/>
        <!-- 订单详情内容主体开始 -->
        <div class=" container detail-main">

            <!-- 面包屑开始 -->
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>订单详情</el-breadcrumb-item>
            </el-breadcrumb>
            <!-- 面包屑结束 -->

            <!-- 订单状况开始 -->
            <div class="order-static">
                <p>
                    <span class="order-static-title">订单状况</span>
                </p>
                <div>订单编号：{{number}}</div>
                <div>订单状态：{{orderInfo.orderState}}</div>
                <div>订单总计：
                    <span class="order-total">￥{{orderInfo.orderTotal | money}}</span>
                </div>
                <div>收货信息：{{orderInfo.userName}}，{{orderInfo.userPhone}}，{{orderInfo.userAddress}}</div>
                <div>配送方式：{{orderInfo.distributionMode}}</div>
                <div>发票信息：{{orderInfo.invoiceInfo}}</div>
                <div>付款方式：{{orderInfo.paymentMethod}}</div>
                <div>订单备注：{{orderInfo.orderRemarks}}</div>
            </div>
            <!-- 订单状况结束 -->

            <!-- 付款信息开始 -->
            <div class="money-info">
                <p>
                    <span>订单状况</span>
                </p>
                <div class="payment-method">付款方式：{{orderInfo.paymentMethod}}</div>
                <div>
                    <div>商品金额：￥{{orderInfo.orderTotal | money}}</div>
                    <div>运费金额：￥{{orderInfo.freight | money}}</div>
                    <div>订单优惠：￥{{orderInfo.discount | money}}</div>
                    <div>积分抵扣金额：￥{{orderInfo.integral | money}}</div>
                    <div>应支付金额：￥{{orderInfo.actualPayment | money}}</div>
                    <div>已支付金额：￥{{orderInfo.alreadyPayment | money}}</div>
                </div>
            </div>
            <!-- 付款信息结束 -->

            <!-- 订单跟踪开始 -->
            <div class="order-track">
                <p>
                    <span>订单跟踪</span>
                </p>
                <el-steps :active="orderInfo.orderTrack" align-center>
                    <el-step title="提交订单"></el-step>
                    <el-step title="等待发货"></el-step>
                    <el-step title="商品以发货"></el-step>
                    <el-step title="确认发货"></el-step>
                </el-steps>

                <div class="operating-state">
                    <ul>
                        <li>操作时间</li>
                        <li v-for="(item,index) in orderInfo.trackList" :key="index">{{item.time}}</li>

                    </ul>
                    <ul>
                        <li>订单跟踪</li>
                        <li v-for="(item,index) in orderInfo.trackList" :key="index">{{item.content}}</li>

                    </ul>
                </div>

            </div>
            <!-- 订单跟踪结束 -->

            <!-- 商品清单开始 -->
            <div class="product-bill">
                <p class="product-bill-title">
                    <span>商品清单</span>
                </p>
                <el-row>
                    <el-col :span="8">商品</el-col>
                    <el-col :span="4">会员价</el-col>
                    <el-col :span="4">数量</el-col>
                    <el-col :span="4">优惠金额</el-col>
                    <el-col :span="4">小计</el-col>
                </el-row>
                <el-row v-for="(item,index) in orderInfo.productList" :key="index">
                    <el-col :span="8">
                        <div>{{item.name}}</div>
                        <div>{{item.format}}</div>
                    </el-col>
                    <el-col class="vip-price" :span="4">￥{{item.vipPrice | money}}</el-col>
                    <el-col :span="4">{{item.count}}</el-col>
                    <el-col :span="4">￥{{item.discount | money}}</el-col>
                    <el-col :span="4">￥{{item.total | money}}</el-col>
                </el-row>
                <div></div>
                <div class="order-total-box">
                    <p>合计：￥{{orderInfo.orderTotal | money}}</p>
                    <p>
                        <span>已节省：￥{{orderInfo.actualPayment | money}}</span>
                        <span>商品总价：￥{{orderInfo.orderTotal | money}}</span>
                    </p>
                    <p>运费金额：￥{{orderInfo.freight | money}}</p>
                    <p>积分抵扣金额：￥{{orderInfo.integral | money}}</p>
                    <p>订单金额：￥{{orderInfo.orderTotal | money}}</p>
                </div>
            </div>
            <!-- 商品清单结束 -->

        </div>
        <!-- 订单详情内容主体结束 -->

        <footerView/>

    </div>
</template>

<script>
import headerView from "components/public/Header";
import classifiedView from "components/public/Classified-nav";
import footerView from "components/public/Footer";
import filter from "apis/filter.js";

export default {
    components: {
        headerView,
        classifiedView,
        footerView
    },
    data() {
        return {
            number: "",
            orderInfo: {}
        };
    },
    filters: {
        money(value) {
            return filter.moneyFilter(value);
        }
    },
    created() {
        this.number = this.$route.params.id;
        this.$ajax({
            url: this.$pathUrl.getOrderDetails,
            method: 'get'
        }).then(res=>{
            this.orderInfo = res.data.data;
        }).catch(error=>{
            console.log(error);
        })
    }
};
</script>

<style lang="less" scoped>
.detail-main {
    margin-bottom: 30px;
}
// 面包屑开始
.el-breadcrumb {
    padding: 14px 0;
}
// 面包屑结束

// 订单状况开始
.order-static {
    padding: 21px 0 31px 21px;
    margin-bottom: 20px;
    border: 1px solid #eee;
    .order-static-title {
        padding-left: 18px;
        border-left: 3px solid #ff7e00;
        font-weight: bold;
        font-size: 18px;
        color: #333;
    }
    div {
        color: #666;
        margin-bottom: 18px;
        &:first-of-type {
            margin-top: 31px;
        }
        &:last-of-type {
            margin-bottom: 0;
        }
    }
    .order-total {
        color: #ff0000;
    }
}
// 订单状况结束

// 付款信息开始
.money-info {
    padding: 21px 21px 0 21px;
    margin-bottom: 20px;
    border: 1px solid #eee;
    span {
        &:extend(.order-static .order-static-title);
    }
    .payment-method {
        margin-top: 31px;
    }
    div {
        &:extend(.order-static div);
        &:last-of-type {
            width: 50%;
            display: flex;
            flex-wrap: wrap;
            div {
                width: 50%;
            }
        }
    }
}
// 付款信息结束

// 订单跟踪开始
.order-track {
    padding: 20px;
    border: 1px solid #eee;
    p {
        padding-bottom: 20px;
        border-bottom: 1px solid #eee;
        span {
            &:extend(.order-static .order-static-title);
        }
    }
    .el-steps--horizontal {
        margin-top: 28px;
        padding-bottom: 28px;
        border-bottom: 1px solid #eee;
    }

    .operating-state {
        margin-top: 20px;
        display: flex;
        width: 50%;
        ul {
            width: 50%;
            li {
                margin-bottom: 20px;
                color: #898989;
                &:first-child {
                    font-weight: bold;
                    color: #666;
                }
            }
        }
    }
}
// 订单跟踪结束

// 商品清单开始
.product-bill {
    margin-top: 80px;
    padding-bottom: 20px;
    border: 1px solid #eee;
    color: #666;
    .product-bill-title {
        padding: 15px 20px;
        border-bottom: 1px solid #eee;
        span {
            &:extend(.order-static .order-static-title);
        }
    }

    .el-row {
        padding: 20px;
        border-bottom: 1px solid #eee;
    }
    .el-col-4 {
        text-align: center;
    }
    .vip-price {
        color: #ff0000;
    }
    .order-total-box {
        text-align: right;
        p {
            padding-right: 20px;
            margin-top: 18px;
            color: #8c8c8c;
            &:first-child {
                padding: 20px;
                margin: 0;
                border-bottom: 1px solid #eee;
                color: #666;
            }
            &:nth-child(2) span {
                margin-left: 20px;
            }
        }
    }
}
// 商品清单结束
</style>