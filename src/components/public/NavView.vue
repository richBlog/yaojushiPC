<template>
    <!-- 顶部导航s -->
    <div class="layout-nav">
        <div class="layout-nav-container container">
            <div class="layout-nav-left">
                <span>欢迎来到药居士网上药店!</span>
                <router-link to="/Login" class="layout-login">登录</router-link>
                <router-link to="/Register">注册</router-link>
            </div>
            <ul class="layout-nav-right">
                <li class="layout-nav-right-item">
                    <div>
                        <span>我的药居士</span>
                        <i></i>
                    </div>
                    <div class="item-menu">
                        <router-link :to="item.url" v-for="item in myYaoJuShi" :key="item.id" v-text="item.name"></router-link>
                    </div>
                </li>
                <li class="layout-nav-right-item">
                    <i></i>
                    <span>027-83215071</span>
                </li>
                <li class="layout-nav-right-item">
                    <div>
                        <router-link to="/Personal/myOrder">我的订单</router-link>
                        <i></i>
                    </div>
                    <div class="item-menu">
                        <router-link :to="{path:item.url,query:{id:item.id}}" v-for="item in myOrder" :key="item.id" v-text="item.name"></router-link>
                    </div>
                </li>
                <li class="layout-nav-right-item">
                    <router-link to="/ShoppingCart">
                        <i></i>购物车
                        <span style="color:red;" v-text="commodityNum"></span>件</router-link>
                </li>
                <li class="layout-nav-right-item">
                    <div>
                        <span>客户服务</span>
                        <i></i>
                    </div>
                    <div class="item-menu">
                        <router-link to="/" v-for="item in helpCenter" :key="item.id" v-text="item.name"></router-link>
                    </div>
                </li>
                <li class="layout-nav-right-item">
                    <div>
                        <span>网站导航</span>
                        <i></i>
                    </div>
                    <div class="item-menu">
                        <router-link to="/" v-for="item in webNavigation" :key="item.id" v-text="item.name"></router-link>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <!-- 顶部导航e -->
</template>

<script>
export default {
    data() {
        return {
            commodityNum: 1, // 购物车数量
            myYaoJuShi: [
                { name: "我的收藏", url: "/Personal/myCollect" },
                { name: "我的优惠券", url: "/Personal/myCoupon" },
                { name: "我的处方", url: "/Personal/myPrescription" }
            ], // 我的药居士
            myOrder: [
                { name: "待付款订单", url: "/Personal/myOrder",id:'待付款' },
                { name: "待确认收货", url: "/Personal/myOrder",id:'待确认收货' }
            ], // 我的订单
            helpCenter: [
                { name: "帮助中心", url: "#" },
                { name: "联系我们", url: "#" },
                { name: "投诉建议", url: "#" }
            ], // 客户服务
            webNavigation: [
                { name: "特色频道", url: "#" },
                { name: "健康工具", url: "#" },
                { name: "健康知多点", url: "#" }
            ] // 网站导航
        };
    }
};
</script>

<style lang="less" scoped>
// 顶部导航S
.layout-nav {
    width: 100%;
    background-color: #f1f1f1;
    .layout-nav-container {
        height: 30px;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        //导航左边s
        .layout-nav-left {
            a {
                color: #2c7fe8;
                &.layout-login {
                    margin: 0 14px;
                }
            }
        }
        //导航左边e
        //导航右边s
        .layout-nav-right {
            display: flex;
            .layout-nav-right-item {
                position: relative;
                height: 30px;
                line-height: 30px;
                margin-left: 15px;
                padding: 0 3px;
                text-align: center;
                &:nth-child(1),
                &:nth-child(3),
                &:nth-child(5),
                &:nth-child(6) {
                    width: 96px;
                }
                // 下拉小箭头
                i {
                    display: inline-block;
                    width: 10px;
                    height: 5px;
                    background-image: url(../../assets/image/ico_t2.png);
                    background-repeat: no-repeat;
                    background-position-y: -123px;
                }
                // 联系电话
                &:nth-child(2) i,
                &:nth-child(4) i {
                    width: 13px;
                    height: 13px;
                    background-position-x: -3px;
                    background-position-y: -48px;
                    margin-right: 8px;
                }
                // 购物车
                &:nth-child(4) i {
                    background-position-y: -13px;
                }
                //鼠标移入时弹出菜单
                .item-menu {
                    display: none;
                    z-index: 999;
                    border: 1px solid #efefef;
                    width: 100%;
                    a {
                        display: block;
                        text-align: center;
                        // padding: 5px 0;
                    }
                }
                &:nth-child(1):hover,
                &:nth-child(3):hover,
                &:nth-child(5):hover,
                &:nth-child(6):hover {
                    background-color: #fff;
                }
                &:nth-child(1):hover .item-menu,
                &:nth-child(3):hover .item-menu,
                &:nth-child(5):hover .item-menu,
                &:nth-child(6):hover .item-menu {
                    display: block;
                    position: absolute;
                    left: 0;
                    width: 96px;
                    background-color: #fff;
                    a {
                        display: block;
                        border-top: 1px solid #efefef;
                        &:first-child {
                            border-top: 0;
                        }
                        &:hover {
                            background-color: #f1f1f1;
                        }
                    }
                }
                // 下拉图片切换
                &:nth-child(1):hover i,
                &:nth-child(3):hover i,
                &:nth-child(5):hover i,
                &:nth-child(6):hover i {
                    background-position-y: -136px;
                }
            }
        }
        //导航右边e
    }
}
// 顶部导航E
</style>