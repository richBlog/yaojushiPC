<template>
    <section class="layout-main">
        <classifiedNavView/>
        <div class="container flex layout-main-banner">
            <classifyView :active='false'/>
            <!-- 轮播S -->
            <el-carousel :interval="5000" arrow="always" class="banner">
                <el-carousel-item v-for="item in bannerUrl" :key="item.id">
                    <router-link to="/"><img alt="轮播图" v-lazy="item"></router-link>
                </el-carousel-item>
            </el-carousel>
            <!-- 轮播E -->
            <!-- 广告S -->
            <div class="banner-menu">
                <ul class="banner-menu-container">
                    <li class="banner-menu-item" v-for="item in authentication" :key="item.id">
                        <i></i>
                        <span v-text="item"></span>
                    </li>
                </ul>
                <div class="banner-menu-contact">
                    <span>药师咨询</span>
                    <i></i>
                    <span>400-1234-123</span>
                </div>
                <div class="banner-menu-info">监管信息发布</div>
                <div class="banner-menu-advertisement">
                    <router-link to="/">
                        <img v-lazy="advertisement" alt="广告">
                    </router-link>
                </div>
            </div>
            <!-- 广告E -->
        </div>
        <!-- 秒杀倒计时S -->
        <div class="container flex layout-main-seckill">
            <div class="seckill-container container">
                <div class="seckill-title">
                    <span>超值秒杀</span>
                    <i></i>
                </div>
                <div class="seckill-time">
                    <span>当前场次</span>
                    <span>05</span>
                    <span>:</span>
                    <span>06</span>
                    <span>:</span>
                    <span>55</span>
                    <span>后结束抢购</span>
                </div>
            </div>
        </div>
        <!-- 秒杀倒计时E -->
        <!-- 秒杀产品S -->
        <hotView :seckillProduct="seckillProduct"></hotView>
        <!-- 秒杀产品E -->
        <!-- 特色会场S -->
        <div class="container layout-main-characteristic">
            <div class="characteristic-line container">
                <p></p>
            </div>
            <div class="characteristic-title">
                <h1>特色会场</h1>
            </div>
            <ul class="characteristic-container container">
                <li class="characteristic-item" v-for="item in characteristic" :key="item.id">
                    <router-link :to="item.url" class="characteristic-url">
                        <div class="characteristic-fff">
                            <div class="characteristic-border">
                                <h3 class="characteristic-h2" v-text="item.name"></h3>
                                <p class="characteristic-h5" v-text="'秒杀低至'+item.discount+'折'"></p>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- 特色会场E -->
        <!-- 热门类目S -->
        <div class="container layout-main-hot" id="t1">
            <h2>热门类目</h2>
            <hotView :seckillProduct="seckillProduct"></hotView>
        </div>
        <!-- 热门类目E -->
        <!-- 热门专题S -->
        <div class="container layout-main-hot">
            <h2>热门专题</h2>
            <hotView :seckillProduct="seckillProduct"></hotView>
        </div>
        <!-- 热门专题E -->
        <!-- 电梯楼层1F S -->
        <elevatorView v-for="item in elevator" :key="item.id" :elevator="item" :id="item.tId"></elevatorView>
        <!-- 电梯楼层1F E -->
        <!-- 热门品牌S -->
        <div class="container layout-main-brand">
            <h2>热门品牌</h2>
            <ul class="brand-container container">
                <li class="brand-item" v-for="item in brand" :key="item.id">
                    <router-link :to="item.url">
                        <img alt="品牌" v-lazy="item.img">
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- 热门品牌E -->
    </section>
</template>
<script>
import hotView from "./Home-hot";
import elevatorView from "./Home-elevator";
import classifiedNavView from "../public/Classified-nav";
import classifyView from "../public/Classify"
import cm from "apis/common";

let timer = null;

export default {
    name: "homeMain",
    components: {
        hotView,
        elevatorView,
        classifiedNavView,
        classifyView
    },
    data() {
        return {
            // 轮播图片地址 后期后台返回数据
            bannerUrl: [],
            // 轮播右边认证
            authentication: [],
            // 轮播右下角广告图片地址
            advertisement: "",
            // 特色会场
            characteristic: [],
            // 楼层信息
            elevator: [],
            //   热门品牌
            brand: [],
            // 秒杀产品
            seckillProduct: []
        };
    },
    created() {
        this.$ajax({
            url: "https://easy-mock.com/mock/5af8e2bb0d7ff97d1fdc9341/home",
            method: "get"
        })
            .then(res => {
                const data = res.data.data;
                this.bannerUrl = data.bannerUrl;
                this.authentication = data.authentication;
                this.advertisement = data.advertisement;
                this.characteristic = data.characteristic;
                this.elevator = data.elevator;
                this.brand = data.brand;
                this.seckillProduct = data.seckillProduct;
            })
            .catch(error => {
                console.log(error);
            });
    }
};
</script>
<style lang="less">
@import "../../styles/Home-main.less";
</style>
