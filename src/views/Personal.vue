<template>
    <div class="layout-personal">
        <headerView/>
        <classifiedView :active="true" />

        <!-- 用户中心主体内容开始 -->
        <div class="container personal-main">
            <!-- 面包屑开始 -->
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            </el-breadcrumb>
            <!-- 面包屑结束 -->

            <div class="personal-nav">
                <!-- 左侧导航开始 -->
                <div class="personal-left">
                    <div class="personal-left-nav" v-for="(item,index) in navList" :key="index">
                        <p class="nav-title">{{item.name}}</p>
                        <div class="nav-second" v-for="(i,d) in item.list" :key="d">
                            <router-link :class="id===i.url?'active':''" :to="i.url">{{i.name}}</router-link>
                        </div>
                    </div>
                </div>
                <!-- 左侧导航结束 -->

                <!-- 右侧内容开始 -->
                <div class="personal-right">
                    <router-view></router-view>
                </div>
                <!-- 右侧内容结束 -->
            </div>

        </div>
        <!-- 用户中心主体内容结束 -->

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
            id: "myOrder",
            navList: [
                {
                    name: "交易管理",
                    list: [
                        {
                            name: "我的订单",
                            url: "myOrder"
                        },
                        {
                            name: "我的积分",
                            url: "myIntegral"
                        },
                        {
                            name: "我的优惠券",
                            url: "myCoupon"
                        },
                        {
                            name: "我的收藏",
                            url: "myCollect"
                        },
                        {
                            name: "我的评论",
                            url: "myDiscuss"
                        },
                        {
                            name: "我的处方笺",
                            url: "myPrescription"
                        }
                    ]
                },
                {
                    name: "账户资料",
                    list: [
                        {
                            name: "安全中心",
                            url: "securityCenter"
                        },
                        {
                            name: "个人资料",
                            url: "personalData"
                        },
                        {
                            name: "收货中心",
                            url: "receivingAddress"
                        },
                        {
                            name: "消息中心",
                            url: "messageCenter"
                        }
                    ]
                },
                {
                    name: "客户服务",
                    list: [
                        {
                            name: "申请退换货",
                            url: "refundableProduct"
                        },
                        {
                            name: "投诉建议",
                            url: "proposal"
                        },
                        {
                            name: "移动客服",
                            url: "waiter"
                        }
                    ]
                }
            ]
        };
    },
    beforeRouteUpdate(to, from, next) {
        this.id = to.name;
        next();
    },
    created() {
        this.id = this.$route.name;
    }
};
</script>

<style lang="less" scoped>
.personal-main {
    margin-bottom: 30px;
}
.el-breadcrumb {
    padding: 14px 0;
}

.personal-nav {
    display: flex;
}
// 左侧导航菜单开始

.personal-left {
    width: 180px;
    border: 1px solid #eee;
    margin-right: 20px;
    .personal-left-nav {
        border-bottom: 1px solid #eee;
        &:last-child {
            border-bottom: none;
        }
        .nav-title {
            padding: 18px 0 18px 20px;
            font-size: 16px;
            font-weight: bold;
            color: #808080;
            border-bottom: 1px solid #eee;
        }
        .nav-second {
            padding-top: 15px;
            padding-left: 20px;
            &:last-child {
                padding-bottom: 15px;
            }
            a {
                color: #808080;
                &.active {
                    color: #ff0000;
                }
                &:hover {
                    color: #ff0000;
                    text-decoration: underline;
                }
            }
        }
    }
}
// 左侧导航菜单结束

.personal-right {
    width: 1000px;
}
</style>