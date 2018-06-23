<template>
    <div class="refundable-product">
        <div class="refundable-main">
            <p class="refundable-title">
                <span>申请退换货</span>
            </p>
            <div class="order-tab">
                <div>
                    <span @click="clickTab(1)" :class="state===1?'active':''">申请退换货</span>
                    <span @click="clickTab(2)" :class="state===2?'active':''">退换货记录</span>
                    <span @click="clickTab(3)" :class="state===3?'active':''">退款记录</span>
                </div>
                <router-link to="" tag="div">查看退换货政策</router-link>
            </div>

            <div class="order-info">
                <el-row class="order-title">
                    <el-col :span="4">订单编号</el-col>
                    <el-col :span="12">商品信息</el-col>
                    <el-col :span="4">金额</el-col>
                    <el-col :span="4">状态</el-col>
                </el-row>

                <div v-if="refundableList.length <=0" class="not-data">没有记录</div>

                <el-row class="order-item" v-for="(item,index) in refundableList" :key="index">
                    <el-col :span="4">{{item.orderCode}}</el-col>
                    <el-col :span="12">
                        <div class="item-info" v-for="(i,d) in item.list" :key="d">
                            <div><img :src="i.img" alt="img"></div>
                            <div>
                                <router-link :to="i.url">{{i.content}}</router-link>
                                <div class="item-count">x{{i.count}}</div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="4" class="item-money">
                        <div>￥{{item.price | money}}</div>
                        <div>(含运费：￥15.00)</div>
                        <div>{{item.pay}}</div>
                    </el-col>
                    <el-col :span="4">
                        <div>{{item.state}}</div>
                        <div class="waiter" v-if="item.state === '申请失败'">联系客服</div>
                        <div v-if="state===2">删除订单</div>
                    </el-col>
                </el-row>
            </div>
        </div>

        <div class="explain">
            <h2>退换货申请常见问题</h2>
            <p>1、部分商品不给予退换货如活动赠品</p>
            <p>2、查看
                <router-link to="">售后服务政策</router-link>
            </p>
            <p>3、如有疑问可以直接拨打售后热线027-83898312</p>
        </div>
    </div>
</template>

<script>
import filter from "apis/filter";
export default {
    data() {
        return {
            state: 1,
            refundableList: [
                {
                    orderCode: "1561651616655",
                    list: [
                        {
                            img: "http://p8pi9ribk.bkt.clouddn.com/loading.png",
                            content:
                                "999 感冒颗粒 快速水电费老师的离开家发生了看到了看法999 感冒颗粒 快速水电费老师的离开家发生了看到了看法",
                            url: "",
                            count: 1
                        },
                        {
                            img: "http://p8pi9ribk.bkt.clouddn.com/loading.png",
                            content:
                                "999 感冒颗粒 快速水电费老师的离开家发生了看到了看法999 感冒颗粒 快速水电费老师的离开家发生了看到了看法",
                            url: "",
                            count: 1
                        }
                    ],
                    id: 1,
                    freight: true,
                    price: 2265,
                    pay: "在线支付",
                    state: "申请失败"
                },
                {
                    orderCode: "1561651616655",
                    list: [
                        {
                            img: "http://p8pi9ribk.bkt.clouddn.com/loading.png",
                            content:
                                "999 感冒颗粒 快速水电费老师的离开家发生了看到了看法999 感冒颗粒 快速水电费老师的离开家发生了看到了看法",
                            url: "",
                            count: 1
                        }
                    ],
                    id: 1,
                    freight: true,
                    price: 2265,
                    pay: "在线支付",
                    state: "申请失败"
                }
            ]
        };
    },
    filters: {
        money(value) {
            return filter.moneyFilter(value);
        }
    },
    methods: {
        // 类型切换
        clickTab(value) {
            this.state = value;
            switch (value) {
                case 2:
                    this.refundableList = [];
                    break;
            }
        }
    }
};
</script>

<style lang="less" scoped>
@import "~styles/public";

.refundable-main {
    border: @b-border;
    .refundable-title {
        padding: 20px;
        border-bottom: @b-border;
        .title();
        margin: 0;
    }
    .not-data {
        height: 150px;
        line-height: 150px;
        text-align: center;
        border: @b-border;
    }
    .order-tab {
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        border-bottom: @b-border;
        span {
            cursor: pointer; 
            border-right: @b-border;
            padding: 0 20px;
            &.active {
                color: #ff0000;
            }
        }
        div {
            &:last-child {
                cursor: pointer;
                margin-right: 20px;
                color: #2d8ef3;
            }
        }
    }

    .order-info {
        padding: 20px;
        text-align: center;
    }

    .order-title {
        background-color: #e7e7e7;
        padding: 10px 0;
    }

    .order-item {
        margin-top: 20px;
        border: @b-border;
        overflow: hidden;
        .el-col {
            border-right: @b-border;
            padding: 15px 0;
            padding-bottom: 1000px;
            margin-bottom: -1000px;
            color: #999;
            &:last-child {
                border: none;
            }
        }
        .item-money {
            div {
                margin-bottom: 10px;
            }
        }
        .item-info {
            display: flex;
            align-items: center;
            padding: 15px;
            border-bottom: @b-border;
            &:first-child {
                padding-top: 0;
            }
            &:last-child {
                border: none;
            }
            img {
                width: 80px;
                height: 80px;
                padding: 10px;
                margin-right: 10px;
                border: @b-border;
                box-sizing: border-box;
            }
            a {
                &:hover {
                    color: #ff0000;
                    text-decoration: underline;
                }
            }

            .item-count {
                margin-top: 15px;
                color: #999;
                text-align: right;
            }
        }
        .waiter {
            .span();
            margin-top: 10px;
        }
    }
}

.explain {
    margin-top: 15px;
    padding: 41px 20px;
    border: @b-border;
    color: #666;
    p {
        margin-top: 20px;
    }
    a {
        .span();
    }
}
</style>