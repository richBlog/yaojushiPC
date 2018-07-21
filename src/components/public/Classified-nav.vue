<template>
    <div :class="{active:state==1,'container flex layout-main-nav':true}">
        <div :class="{active:state==1,active1:state==2,active2:state==3,'nav-classification':true}">
            <i></i>
            <router-link to="/AllClassify" target="_blank">全部分类</router-link>
            <classifyView v-if="active" />
        </div>
        <ul :class="{active:state==1||state==2||state==3,'nav-sub':true}">
            <li class="nav-item" :class="{active:state==1,active1:state==2,active2:state==3}" v-for="item in LateralClassification" :key="item.id">
                <router-link :class="{active:state==1||state==3}" :to="item.url" v-text="item.name" target="_blank"></router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import classifyView from "./Classify";
export default {
    props: ["active", "state"],
    components: {
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
                { name: "风湿骨痛", url: "/Special/ostalgia" },
                { name: "皮肤外用", url: "/Special/skin" },
                { name: "医疗器械", url: "/Special/apparatus" }
            ]
        };
    }
};
</script>
<style lang="less" scoped>
.layout-main-nav {
    line-height: 36px;
    font-size: 16px;
    text-align: center;
    &.active {
        border-radius: 30px;
        background-color: #ff788f;
    }
    .nav-classification {
        min-width: 180px; // 不知道为啥少3PX 所以强制最小180px
        height: 36px;
        background-color: #0066d4;
        &.active {
            border-radius: 30px;
            background-color: #e56c80;
        }
        &.active1{
            background-color: #D8DAD7;
            a{
                color: #333;
                font-weight: bold;
            }
        }
        &.active2{
            background-color: #5ec1d2;
            a{
                color: #fff;;
                font-weight: bold;
            }
        }
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
        .banner-classification {
            display: none;
        }
        &:hover .banner-classification {
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
        &.active {
            border-bottom: 0;
        }
        .nav-item {
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
            &.active {
                &:hover {
                    background-color: #e56c80;
                }
            }
            &.active1 {
                &:hover {
                    background-color: #C4C7C3;
                }
            }
            &.active2 {
                &:hover {
                    background-color: #fff;
                    a{
                        color: #5ec1d2;
                    }
                }
            }
            a {
                &.active {
                    color: #fff;
                }
            }
        }
    }
    // 横向分类E
}
</style>
