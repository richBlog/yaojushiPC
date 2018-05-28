<template>
    <el-main>

        <classifiedView :active="true"/>

        <!-- 面包屑导航开始 -->
        <div class="product-crumbs container">
            <router-link to="/" tag="div" class="product-crumbs-advert"><img v-lazy="ggImage" alt="img"></router-link>
            <p class="product-prompt">药品监管部门提示：如发现本网站有任何直接或变相销售处方药行为，请保留证据，拨打12331举报，举报查实给予奖励。</p>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item v-for="item in crumbs" :to="item.url" :key="item.id">{{item.name}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!-- 面包屑导航结束 -->

        <!-- 产品购买信息开始 -->
        <productInfoView/>
        <!-- 产品购买信息结束 -->

        <!-- 商品组合推荐开始 -->
        <combinationView :groutList="groutList" />
        <!-- 商品组合推荐结束 -->

        <!-- 产品介绍开始 -->
        <productDetailsView/>
        <!-- 产品介绍结束 -->

    </el-main>
</template>
<script>
import classifiedView from "../public/Classified-nav";
import productInfoView from "./Product-info";
import combinationView from "./Product-combination";
import productDetailsView from "./Product-details";
export default {
    components: {
        classifiedView,
        productInfoView,
        combinationView,
        productDetailsView
    },
    data() {
        return {
            ggImage: "",
            crumbs: [],
            groutList: []
        };
    },
    created() {
        this.$ajax({
            url: this.$pathUrl.getProduct,
            methods: "get"
        })
            .then(res => {
                if (res.status == 200) {
                    const data = res.data.data;
                    this.ggImage = data.ggImage;
                    this.crumbs = data.crumbs;
                    this.groutList = data.groutList;
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
};
</script>
<style lang="less" scoped>
.product-crumbs {
    // padding: 0 10px;
    padding-top: 10px;
    box-sizing: border-box;
    .product-crumbs-advert {
        cursor: pointer;
    }
    .product-prompt {
        padding: 8px 0;
        color: #888;
    }
}
</style>
