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
                                <router-link :to="i.url" v-for="(i,d) in item.secondList" :key="d">{{i.name}}</router-link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>关于药居士</h2>
                        <div class="help-list">
                            <router-link :to="item.url" v-for="(item,index) in about" :key="index">{{item.name}}</router-link>
                        </div>
                    </div>
                </div>
                <router-view :classifyList="list" :about="about"></router-view>
            </div>
        </div>

        <footerView/>
    </div>
</template>

<script>
import headerView from "components/public/Header";
import classifiedView from "components/public/Classified-nav";
import footerView from "components/public/Footer";
export default {
    components: {
        headerView,
        classifiedView,
        footerView
    },
    data() {
        return {
            state: "state",
            list: [
                {
                    name: "新手入门",
                    secondList: [
                        {
                            name: "新会员注册",
                            url: ""
                        },
                        {
                            name: "用户登录",
                            url: ""
                        },
                        {
                            name: "找回密码",
                            url: ""
                        },
                        {
                            name: "会员级别",
                            url: ""
                        },
                        {
                            name: "积分说明",
                            url: ""
                        },
                        {
                            name: "优惠券",
                            url: ""
                        }
                    ]
                },
                {
                    name: "购物指南",
                    secondList: [
                        {
                            name: "购物流程",
                            url: ""
                        },
                        {
                            name: "放心购",
                            url: ""
                        },
                        {
                            name: "订单状态说明",
                            url: ""
                        },
                        {
                            name: "服务说明",
                            url: ""
                        },
                        {
                            name: "服务协议",
                            url: ""
                        },
                        {
                            name: "隐私声明",
                            url: ""
                        },
                        {
                            name: "发票制度",
                            url: ""
                        },
                        {
                            name: "药居士掌上药店",
                            url: ""
                        }
                    ]
                },
                {
                    name: "配送方式",
                    secondList: [
                        {
                            name: "配送范围及运费",
                            url: ""
                        },
                        {
                            name: "隐私配送",
                            url: ""
                        },
                        {
                            name: "冷藏易碎商品配送政策",
                            url: ""
                        },
                        {
                            name: "包装流程",
                            url: ""
                        },
                        {
                            name: "商品验货及签收",
                            url: ""
                        }
                    ]
                },
                {
                    name: "支付方式",
                    secondList: [
                        {
                            name: "货到付款",
                            url: ""
                        },
                        {
                            name: "网上支付",
                            url: ""
                        },
                        {
                            name: "银行转账",
                            url: ""
                        }
                    ]
                },
                {
                    name: "售后服务",
                    secondList: [
                        {
                            name: "退换货流程",
                            url: ""
                        },
                        {
                            name: "退换货政策",
                            url: ""
                        },
                        {
                            name: "退款流程",
                            url: ""
                        }
                    ]
                },
                {
                    name: "特色服务",
                    secondList: [
                        {
                            name: "会员俱乐部",
                            url: ""
                        },
                        {
                            name: "投诉建议",
                            url: ""
                        },
                        {
                            name: "用药咨询",
                            url: ""
                        },
                        {
                            name: "免责声明",
                            url: ""
                        }
                    ]
                }
            ],
            about: [
                {
                    name: "药居士介绍",
                    url: ""
                },
                {
                    name: "实体药店",
                    url: ""
                },
                {
                    name: "企业文化",
                    url: ""
                },
                {
                    name: "荣誉长廊",
                    url: ""
                },
                {
                    name: "厂家授权",
                    url: ""
                },
                {
                    name: "加入药居士",
                    url: ""
                },
                {
                    name: "联系我们",
                    url: ""
                },
                {
                    name: "法律声明",
                    url: ""
                },
                {
                    name: "版权声明",
                    url: ""
                }
            ]
        };
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
            &:hover{
                color: #ff0000;
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