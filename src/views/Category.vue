<template>
    <div>
        <headerView/>
        <classifiedView :active="true" />

        <!-- 主体内容部分开始 -->
        <div class="container category-main">

            <!-- 面包屑开始 -->
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>{{categoryName}}</el-breadcrumb-item>
            </el-breadcrumb>
            <!-- 面包屑结束 -->

            <!-- 产品内容开始 -->
            <div class="category-box">

                <!-- 产品内容左侧开始 -->
                <div class="category-content-left">
                    <div class="category-jump">
                        <p>{{categoryName}}</p>
                        <ul class="jump-sub">
                            <li class="jump-item" v-for="(item,index) in category.categoryList" :key="index">
                                <router-link target="_blank" :to="{path:item.url,query:{name:item.name}}">{{item.name}}</router-link>
                            </li>
                        </ul>
                    </div>
                    <advertView :title="'看过的用户还浏览了'" :extendList="category.extendList" />
                </div>
                <!-- 产品内容左侧结束 -->

                <!-- 产品内容右侧开始 -->
                <div class="category-content-right">
                    <ul class="category-product-sub">
                        <li class="category-product-item" v-for="(item,index) in category.productList" :key="index">
                            <router-link :to="item.url">
                                <p class="product-img-box"><img class="product-img" v-lazy="item.imgProduct" alt="img"></p>
                                <p class="product-name-box">
                                    <img class="recipe-sign" v-lazy="item.img" alt="img">
                                    <span class="product-name">{{item.name}}</span>
                                </p>
                                <p class="category-price">
                                    <span class="new-price">￥{{item.newPrice}}</span>
                                    <span class="old-price">￥{{item.oldPrice}}</span>
                                </p>
                            </router-link>
                        </li>
                    </ul>

                    <!-- 分页开始 -->
                    <div class="block">
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="100" layout="total, prev, pager, next" :total="1000">
                        </el-pagination>
                    </div>
                    <!-- 分页结束 -->

                </div>
                <!-- 产品内容右侧结束 -->
            </div>
            <!-- 产品内容结束 -->
        </div>

        <!-- 主体内容部分结束 -->

        <footerView/>

    </div>
</template>

<script>
import headerView from "components/public/Header";
import classifiedView from "components/public/Classified-nav";
import advertView from "components/public/Advert";
import footerView from "components/public/Footer";

export default {
    components: {
        headerView,
        classifiedView,
        footerView,
        advertView
    },
    data() {
        return {
            currentPage1: 5,
            categoryName: "",
            category: {}
        };
    },
    created() {
        this.categoryName = this.$route.query.name;

        this.$ajax({
            url: this.$pathUrl.getCategory,
            method: 'get'
        }).then(res=>{
            this.category = res.data.data;
        }).catch(error=>{
            console.log(error)
        })
    },
    methods: {
        handleSizeChange() {},
        handleCurrentChange() {}
    }
};
</script>

<style lang="less" scoped>
.category-main {
    margin-bottom: 30px;
}

// 面包屑开始
.el-breadcrumb {
    padding: 10px 0;
}

// 面包屑结束

// 产品内容开始
.category-box {
    display: flex;
    // 产品内容左侧开始
    .category-content-left {
        width: 180px;
        margin-right: 20px;
        .category-jump {
            margin-bottom: 20px;
            border: 1px solid #ddd;
            p {
                padding: 8px 10px;
                background-color: #f4f4f4;
                font-weight: bold;
                border-bottom: 1px solid #ddd;
            }
            .jump-sub {
                padding: 0 8px;
                .jump-item {
                    padding: 10px 0;
                    border-bottom: 1px dashed #ddd;
                    font-size: 12px;
                    &:last-child {
                        border-bottom: none;
                    }
                    a {
                        color: #666;
                        &:hover {
                            color: #ff0000;
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
    }
    // 产品内容左侧结束

    // 产品内容右侧开始
    .category-content-right {
        width: 1000px;
        .category-product-sub {
            display: flex;
            flex-wrap: wrap;

            .category-product-item {
                width: 25%;
                height: 320px;
                border: 2px solid transparent;
                box-sizing: border-box;
                overflow: hidden;
                &:hover {
                    border-color: #ff0000;
                    .product-name-box {
                        height: inherit;
                    }
                }
                a {
                    display: block;
                    padding: 20px;
                    color: #666;
                }

                .product-name-box {
                    height: 38px;
                    overflow: hidden;
                }

                .product-name {
                    font-size: 12px;
                    &:hover {
                        color: #ff0000;
                        text-decoration: underline;
                    }
                }

                .product-img-box {
                    padding: 20px;
                }

                .recipe-sign {
                    width: 26px;
                    height: 14px;
                    vertical-align: middle;
                }

                .product-img {
                    width: 100%;
                }

                .category-price {
                    display: flex;
                    justify-content: space-between;
                    line-height: 26px;
                    .new-price {
                        font-size: 20px;
                        color: #ff0000;
                    }
                    .old-price {
                        text-decoration: line-through;
                    }
                }
            }
        }
        .block {
            text-align: right;
        }
    }
    // 产品内容右侧结束
}

// 产品内容结束
</style>