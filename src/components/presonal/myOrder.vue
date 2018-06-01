<template>
    <div class="presonal-order">
        <p class="order-title">我的订单</p>

        <div class="order-main">
            <el-row class="order-static">
                <el-col :span="4" :class="statice==='所有订单'?'active':''" @click.native="tabOrder('所有订单')">
                    所有订单( {{order.allOrder}} )
                </el-col>
                <el-col :span="4" :class="statice==='待付款'?'active':''" @click.native="tabOrder('待付款')">
                    待付款( {{order.obligation}} )
                </el-col>
                <el-col :span="4" :class="statice==='待确认收货'?'active':''" @click.native="tabOrder('待确认收货')">
                    待确认收货( {{order.waitComfig}} )
                </el-col>
                <el-col :span="4" :class="statice==='订单失效'?'active':''" @click.native="tabOrder('订单失效')">
                    订单失效( {{order.abateOrder}} )
                </el-col>
                <el-col :span="4" :class="statice==='交易完成'?'active':''" @click.native="tabOrder('交易完成')">
                    交易完成( {{order.dealEnd}} )
                </el-col>
                <el-col :span="4">
                    <span>查看订单状态说明</span>
                </el-col>
            </el-row>
            <el-row class="order-info">
                <el-col :span="12">订单商品</el-col>
                <el-col :span="3">收货人</el-col>
                <el-col :span="3">金额</el-col>
                <el-col :span="3">订单状态</el-col>
                <el-col :span="3">操作</el-col>
            </el-row>

            <div class="home-box" v-if="order.orderList.length ===0">
                暂无订单,去
                <router-link to="/" class="home">药居士首页</router-link> 看看
            </div>

            <div class="order-content" v-for="(item,index) in order.orderList" :key="index">
                <p class="order-time">
                    <span>订单编号：{{item.identifier}}</span>
                    <span>下单日期：{{item.time}}</span>
                    <i class="el-icon-delete"></i>
                </p>
                <el-row>
                    <el-col :span="12">
                        <div class="ware-img" v-for="(i,d) in item.list" :key="d">
                            <router-link to="/"><img v-lazy="i.img"></router-link>
                            <div class="ware-title">{{i.title}}</div>
                            <div class="ware-count">X{{i.count}}</div>
                        </div>
                    </el-col>
                    <el-col :span="3">{{item.name}}</el-col>
                    <el-col :span="3">
                        <div>￥{{item.money}}</div>
                        <div>(含运费：￥{{item.freight}})</div>
                        <div>{{item.pay}}</div>
                    </el-col>
                    <el-col :span="3">{{item.static}}</el-col>
                    <el-col :span="3" class="operate">
                        <el-button size="mini" type="danger" v-if="item.static==='作废'">重新购买</el-button>
                        <el-button size="mini" type="danger" v-else-if="item.static==='进行中'">确认收货</el-button>
                        <el-button size="mini" type="danger" v-else>申请售后</el-button>
                        <div>订单详情</div>
                        <div>取消订单</div>
                    </el-col>
                </el-row>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            statice: "所有订单",
            order: {
                allOrder: 3,
                obligation: 0,
                waitComfig: 1,
                abateOrder: 1,
                dealEnd: 1,
                orderList: [
                    {
                        id: "",
                        name: "药居士",
                        identifier: "123123112355",
                        time: "2017/11/02 13:34:48",
                        money: 37.5,
                        freight: 15,
                        static: "作废",
                        pay: "在线支付",
                        list: [
                            {
                                img:
                                    "http://p8pi9ribk.bkt.clouddn.com/loading.png",
                                count: 1,
                                title:
                                    "999 感冒颗粒 快速水电费老师的离开家发生了看到了看法999 感冒颗粒 快速水电费老师的离开家发生了看到了看法",
                                url: "1"
                            },
                            {
                                img:
                                    "http://p8pi9ribk.bkt.clouddn.com/loading.png",
                                count: 99,
                                title:
                                    "999 感冒颗粒 快速水电费老师的离开家发生了看到了看法",
                                url: "1"
                            }
                        ]
                    },
                    {
                        id: "",
                        name: "药居士",
                        identifier: "123123112355",
                        time: "2017/11/02 13:34:48",
                        money: 37.5,
                        freight: 15,
                        static: "已完成",
                        pay: "在线支付",
                        list: [
                            {
                                img:
                                    "http://p8pi9ribk.bkt.clouddn.com/loading.png",
                                count: 1,
                                title:
                                    "999 感冒颗粒 快速水电费老师的离开家发生了看到了看法",
                                url: "1"
                            }
                        ]
                    },
                    {
                        id: "",
                        name: "药居士",
                        identifier: "123123112355",
                        time: "2017/11/02 13:34:48",
                        money: 37.5,
                        freight: 15,
                        static: "进行中",
                        pay: "在线支付",
                        list: [
                            {
                                img:
                                    "http://p8pi9ribk.bkt.clouddn.com/loading.png",
                                count: 1,
                                title:
                                    "999 感冒颗粒 快速水电费老师的离开家发生了看到了看法999 感冒颗粒 快速水电费老师的离开家发生了看到了看法",
                                url: "1"
                            },
                            {
                                img:
                                    "http://p8pi9ribk.bkt.clouddn.com/loading.png",
                                count: 99,
                                title:
                                    "999 感冒颗粒 快速水电费老师的离开家发生了看到了看法",
                                url: "1"
                            }
                        ]
                    }
                ]
            }
        };
    },
    created() {
        // console.log(110);
    },
    methods: {
        // 订单类型切换
        tabOrder(title) {
            this.statice = title;
        }
    }
};
</script>

<style lang="less" scoped>
.presonal-order {
    padding: 20px;

    .home-box {
        padding: 80px 0;
        margin-top: 12px;
        text-align: center;
        border: 1px solid #eee;
        .home {
            color: #2d8ef3;
        }
    }

    .order-title {
        font-size: 16px;
        color: #333;
        padding-bottom: 20px;
    }

    .order-static {
        padding: 7px;
        border: 1px solid #eee;
        .el-col-4 {
            padding: 5px 0;
            border-right: 1px solid #eee;
            text-align: center;
            cursor: pointer;
            &:last-child {
                border-right: none;
            }
            &.active {
                color: #ff0000;
            }
        }
    }

    .order-info {
        margin-top: 51px;
        padding: 11px;
        text-align: center;
        background-color: #e7e7e7;
        [class*="el-col-"] {
            color: #999;
        }
    }

    .order-content {
        margin-top: 15px;
        font-size: 12px;
        color: #666;
        border: 1px solid #eee;
        .order-time {
            position: relative;
            padding: 10px 0 10px 20px;
            background-color: rgb(231, 231, 231);
            color: #666;
            span {
                margin-right: 40px;
            }
            i {
                position: absolute;
                right: 50px;
                cursor: pointer;
                font-size: 16px;
            }
        }
        .el-col-12 {
            text-align: left;
            border-right: 1px solid #eee;
            .ware-img {
                display: flex;
                height: 120px;
                justify-content: space-between;
                align-items: center;
                padding: 10px;
                border-bottom: 1px solid #eee;

                &:last-child {
                    border-bottom: none;
                }
            }
            a {
                display: block;
                img {
                    width: 70px;
                    height: 60px;
                    padding: 5px;
                    vertical-align: middle;
                }
            }
            div {
                padding: 10px;
            }
            .ware-title {
                width: 100%;
            }
            .ware-count {
                width: 40px;
            }
        }
        .el-col-3 {
            padding-top: 20px;
            text-align: center;
        }
        .operate {
            div {
                margin-top: 10px;
                color: #999;
                cursor: pointer;
                &:hover {
                    color: #ff0000;
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>