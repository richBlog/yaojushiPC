<template>
    <div class="help-center">
        <headerView/>
        <classifiedView :active="true" />

        <div class="help-main container">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>帮助中心</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="help-box">
                <div class="help-public-left">
                    <div>
                        <h2>帮助中心</h2>
                        <div class="help-list" v-for="(item,index) in list" :key="index">
                            <h3 @click="tabList(index)">
                                <i :class="state===index?'active':''"></i>{{item.name}}</h3>
                            <div :class="state===index?'help-item active':'help-item'">
                                <router-link :class="routeState===i.url?'active':''" :to="i.url" v-for="(i,d) in item.secondList" :key="d">{{i.name}}</router-link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>关于药居士</h2>
                        <div class="help-list">
                            <router-link :class="routeState===item.url?'active':''" :to="item.url" v-for="(item,index) in about" :key="index">{{item.name}}</router-link>
                        </div>
                    </div>
                </div>
                <router-view :classifyList="list" :about="about"></router-view>
            </div>
        </div>
        <navigationView/>
        <footerView/>
    </div>
</template>

<script>
import headerView from "components/public/Header";
import classifiedView from "components/public/Classified-nav";
import footerView from "components/public/Footer";
import navigationView from "components/home/Home-navigation";
export default {
    components: {
        headerView,
        classifiedView,
        footerView,
        navigationView
    },
    data() {
        return {
            routeState: "state",
            state: "state",
            list: [
                {
                    name: "新手入门",
                    secondList: [
                        {
                            name: "新会员注册",
                            url: "userRegister"
                        },
                        {
                            name: "用户登录",
                            url: "userLogin"
                        },
                        {
                            name: "找回密码",
                            url: "retrievePassword"
                        },
                        {
                            name: "会员级别",
                            url: "vipGrade"
                        },
                        {
                            name: "积分说明",
                            url: "integralExplanation"
                        },
                        {
                            name: "优惠券",
                            url: "coupon"
                        },
                        {
                            name: "常见问题",
                            url: "commonProblem"
                        }
                    ]
                },
                {
                    name: "购物指南",
                    secondList: [
                        {
                            name: "购物流程",
                            url: "shoppingGuide"
                        },
                        {
                            name: "订单状态说明",
                            url: "orderState"
                        },
                        {
                            name: "服务说明",
                            url: "serviceExplain"
                        },
                        {
                            name: "服务协议",
                            url: "agreement"
                        },
                        // {
                        //     name: "隐私声明",
                        //     url: ""
                        // },
                        {
                            name: "发票制度",
                            url: "invoice"
                        },
                        {
                            name: "药居士掌上药店",
                            url: "palmar"
                        }
                    ]
                },
                {
                    name: "配送方式",
                    secondList: [
                        {
                            name: "配送范围及运费",
                            url: "deliveryFreight"
                        },
                        {
                            name: "隐私配送",
                            url: "deliveryPrivacy"
                        },
                        {
                            name: "易碎商品配送政策",
                            url: "fragile"
                        },
                        {
                            name: "包装流程",
                            url: "packing"
                        },
                        {
                            name: "商品验货及签收",
                            url: "receipt"
                        }
                    ]
                },
                {
                    name: "支付方式",
                    secondList: [
                        {
                            name: "货到付款",
                            url: "toPay"
                        },
                        {
                            name: "网上支付",
                            url: "onlinePay"
                        },
                        // {
                        //     name: "银行转账",
                        //     url: ""
                        // }
                    ]
                },
                {
                    name: "售后服务",
                    secondList: [
                        {
                            name: "退换货流程",
                            url: "returns"
                        },
                        {
                            name: "退换货政策",
                            url: "returnsPolicy"
                        },
                        {
                            name: "退款流程",
                            url: "refund"
                        }
                    ]
                },
                {
                    name: "特色服务",
                    secondList: [
                        // {
                        //     name: "会员俱乐部",
                        //     url: ""
                        // },
                        {
                            name: "投诉建议",
                            url: "/Personal/proposal"
                        },
                        // {
                        //     name: "用药咨询",
                        //     url: "medicalConsultation"
                        // },
                        {
                            name: "免责声明",
                            url: "relief"
                        }
                    ]
                }
            ],
            about: [
                {
                    name: "药居士介绍",
                    url: "introduce"
                },
                {
                    name: "实体药店",
                    url: "pharmacy"
                },
                {
                    name: "企业文化",
                    url: "enterprise"
                },
                {
                    name: "相关资质",
                    url: "aptitude"
                },
                // {
                //     name: "厂家授权",
                //     url: ""
                // },
                {
                    name: "加入药居士",
                    url: "recruit"
                },
                {
                    name: "联系我们",
                    url: "contact"
                },
                // {
                //     name: "法律声明",
                //     url: ""
                // },
                // {
                //     name: "版权声明",
                //     url: ""
                // }
            ]
        };
    },
    beforeRouteUpdate(to, from, next) {
        this.routeState = to.name;
        next();
    },
    created() {
        this.routeState = this.$route.name;
    },
    methods: {
        tabList(index) {
            if (this.state === index) {
                this.state = "state";
            } else {
                this.state = index;
            }
        }
    }
};
</script>

<style lang="less" scoped>
@import "~styles/public";
.help-box {
    display: flex;
    box-sizing: border-box;
    margin-bottom: 50px;
    .help-public-left {
        min-width: 200px;
        margin-right: 10px;
        text-align: center;
        h2 {
            line-height: 40px;
            background-color: #2b8ef3;
            color: #fff;
            font-size: 18px;
            font-weight: normal;
        }
        h3 {
            cursor: pointer;
            line-height: 40px;
            font-size: 16px;
            font-weight: normal;
            background-color: #efefef;
            border-bottom: 1px solid #fff;
            i {
                display: inline-block;
                width: 20px;
                height: 20px;
                background: url("http://res.360kad.com/theme/help/img/web2015/icon__03.png")
                    no-repeat;
                margin-right: 10px;
                margin-left: -15px;
                vertical-align: middle;
                &.active {
                    background-image: url("http://res.360kad.com/theme/help/img/web2015/icon__06.png");
                }
            }
        }

        a {
            display: block;
            line-height: 40px;
            font-size: 12px;
            &:hover {
                color: #ff0000;
            }
            &.active {
                color: #ff0000;
                text-decoration: underline;
            }
        }

        .help-list {
            border: @b-border;
        }

        .help-item {
            display: none;
            &.active {
                display: block;
            }
        }
    }
}
</style>