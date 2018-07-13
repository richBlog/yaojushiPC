<template>
    <div class="container flex layout-main-nav">
        <div class="nav-classification">
            <i></i>
            <router-link to="/AllClassify" target="_blank">全部分类</router-link>
            <classifyView v-if="active"/>
        </div>
        <ul class="nav-sub">
            <li class="nav-item" v-for="item in LateralClassification" :key="item.id">
                <router-link :to="item.url" v-text="item.name" target="_blank"></router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import classifyView from "./Classify";
export default {
    props:["active"],
    components:{
        classifyView
    },
    data() {
        return {
            // 横向分类字段 后期会后台会提供接口获取
            LateralClassification: [
                { name: "首页", url: "/" },
                { name: "男性用药", url: "/Special/male" },
                { name: "儿科用药", url: "/Special/pediatrics" },
                { name: "妇科用药", url: "/Special/woman" },
                { name: "五官用药", url: "#" },
                { name: "皮肤外用", url: "#" },
                { name: "健康咨询", url: "#" }
            ]
        };
    }
};
</script>
<style lang="less" scoped>
.layout-main-nav {
    margin-top: 20px;
    line-height: 36px;
    font-size: 16px;
    text-align: center;
    .nav-classification {
        min-width: 180px; // 不知道为啥少3PX 所以强制最小180px
        height: 36px;
        background-color: #0066d4;
        a {
            color: #fff;
        }
        i {
            display: inline-block;
            position: relative;
            top: 3px;
            left: -26px;
            width: 15px;
            height: 17px;
            background: url(../../assets/image/fenlei.png) no-repeat -12px -343px;
        }
        .banner-classification{
            display: none;
        }
        &:hover .banner-classification{
            display: block;
        }
    }
    // 横向分类S
    .nav-sub {
        display: flex;
        width: 1020px;
        min-width: 1020px;
        height: 36px;
        border-bottom: 2px solid #0066d4;
        .nav-item {
            // width: 64px;
            padding: 0 15px;
            font-weight: 600;
            &:hover {
                background-color: #0066d4;
                a {
                    display: block;
                    width: 100%;
                    height: 100%;
                    color: #fff;
                    transition: none;
                    -webkit-transition: none;
                }
            }
        }
    }
    // 横向分类E
}
</style>
