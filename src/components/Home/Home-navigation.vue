<template>
    <aside class="layout-navigation">
        <el-menu class="el-menu-vertical-demo" background-color="#2d8ef3" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-service"></i>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">
                        <router-link to="/" class="customer">
                            <i class="el-icon-service"></i>
                            <span>售前客服</span>
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <router-link to="/" class="customer">
                            <i class="el-icon-service"></i>
                            <span>售后客服</span>
                        </router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
                <i class="iconfont icon-ren"></i>
                <span slot="title">我的账户</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-goods"></i>
                <span slot="title">我的购物车</span>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                    <i class="iconfont icon-erweima"></i>
                    <span slot="title">二维码</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1" class="app">
                        <img src="../../assets/image/wx1.png" alt="二维码">
                        <p>关注微信有礼赠送</p>
                    </el-menu-item>
                    <el-menu-item index="1-2" class="app">
                        <img src="../../assets/image/wx1.png" alt="二维码">
                        <p>下载APP端有礼赠送</p>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="5">
                <i class="el-icon-edit-outline"></i>
                <span slot="title">用户反馈</span>
            </el-menu-item>
            <el-menu-item index="6" @click="top()">
                <i class="iconfont icon-top02"></i>
                <span>TOP</span>
                <span slot="title">回到顶部</span>
            </el-menu-item>
        </el-menu>
    </aside>
</template>
<script>
import cm from "../../apis/common";

export default {
    name: "navigationView",
    data() {
        return {
            isCollapse: true
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        top() {
            cm.top(); // 调用公共回到顶部函数
        }
    }
};
</script>
<style lang="less">
@import "../../styles/Home-navigation.less";
</style>
