<template>
    <div class="search-box">
        <headerView/>
        <div class="search-main">
            <!-- 分类导航开始 -->
            <classifiedView :active="true" />
            <!-- 分类导航结束 -->

            <!-- 产品内容开始 -->

            <div class=" container flex search-content">
                <!-- 商品筛选开始 -->
                <div class="product-screen">
                    <span class="product-screen-title">商品筛选 &gt;</span>
                    <span class="product-screen-item">品牌：
                        <span class="product-screen-content">白云山</span> x</span>
                    <span class="product-screen-item">品牌：
                        <span class="product-screen-content">白云山</span> x</span>
                </div>
                <!-- 商品筛选结束 -->

                <div class="search-left">
                    <!-- 产品筛选功能开始 -->
                    <div class="screen-box">
                        <div class="screen-type" v-for="(item,index) in typeList" :key="index">
                            <div class="screen-name">{{item.name}}：</div>
                            <!-- 不是多选时候的状态展示开始 -->
                            <div class="screen-not-selection" v-show="isSelect!==index">
                                <div :class="isOpen===index?'screen-content active':'screen-content'">
                                    <router-link :to="{path:'search',query:i.url}" class="sreen-item" v-for="(i,d) in item.brandList" :key="d">{{i.name}}</router-link>
                                </div>
                                <div class="screen-more" @click="open(index)">
                                    <span>{{isOpen===index?'收缩':'更多'}}</span>
                                    <i :class="isOpen===index?'active':''"></i>
                                </div>
                                <div class="screen-checkbox" @click="onSelect(index)">
                                    <i></i>多选
                                </div>
                            </div>
                            <!-- 不是多选时候的状态展示结束 -->

                            <!-- 多选时候的状态展示开始 -->
                            <div class="screen-selection" v-show="isSelect===index">
                                <div class="screen-content">
                                    <el-checkbox v-model="i.checked" v-for="(i,d) in item.brandList" :key="d">{{i.name}}</el-checkbox>
                                </div>
                                <div class="select-btn">
                                    <el-button size="mini" type="primary" @click="onSubmit">提交</el-button>
                                    <el-button size="mini" @click="onNot">取消</el-button>
                                </div>
                            </div>
                            <!-- 多选时候的状态展示结束 -->
                        </div>
                    </div>
                    <!-- 产品筛选功能结束 -->

                    <!-- 产品按条件排序开始 -->
                    <div class="sort-box">
                        <el-tabs type="card">
                            <el-tab-pane>
                                <span slot="label">综合排序
                                    <i class="el-icon-arrow-down"></i>
                                </span>
                            </el-tab-pane>
                            <el-tab-pane>
                                <span slot="label">人气
                                    <i class="el-icon-arrow-down"></i>
                                </span>
                            </el-tab-pane>
                            <el-tab-pane>
                                <span slot="label">销量
                                    <i class="el-icon-arrow-down"></i>
                                </span>
                            </el-tab-pane>
                            <el-tab-pane>
                                <span slot="label">价格
                                    <i class="el-icon-d-caret"></i>
                                </span>
                            </el-tab-pane>
                            <div class="price-range">
                                <el-input v-model="input" placeholder="￥"></el-input>
                                &nbsp;-&nbsp;
                                <el-input v-model="input" placeholder="￥"></el-input>
                                <div class="range-btn">
                                    <el-button size="mini" type="primary" @click="onNot">确定</el-button>
                                    <el-button size="mini" @click="onNot">清空</el-button>
                                </div>
                            </div>

                            <div class="priduct-amount">
                                <div class="amount-box">共
                                    <span class="amount">452</span> 个商品</div>
                                <div class="paging-box">
                                    <i class="el-icon-arrow-left"></i>
                                    <span>
                                        <span class="current-page">1</span>
                                        /
                                        <span>11</span>
                                    </span>
                                    <i class="el-icon-arrow-right"></i>
                                </div>
                            </div>

                        </el-tabs>
                    </div>

                    <!-- 产品按条件排序结束 -->

                </div>

                <!-- 右侧产品推广开始 -->

                <div class="search-right">

                </div>

                <!-- 右侧产品推广结束 -->
            </div>

            <!-- 产品内容结束 -->
        </div>
        <footerView/>
    </div>
</template>

<script>
import headerView from "components/public/Header";
import classifiedView from "../components/public/Classified-nav";
import footerView from "components/public/Footer";
export default {
    components: {
        headerView,
        classifiedView,
        footerView
    },
    data() {
        return {
            isOpen: "static",
            isSelect: "static",
            activeName2: "first",
            input: "",
            typeList: [
                {
                    name: "品牌",
                    brandList: [
                        {
                            name: "潘艳",
                            checked: false,
                            url: {
                                keyword: "潘艳",
                                brand: "潘艳"
                            }
                        },
                        {
                            name: "白云山1",
                            checked: false,
                            url: {
                                keyword: "潘艳",
                                brand: "白云山1"
                            }
                        },
                        {
                            name: "白云山2",
                            checked: false,
                            url: {
                                keyword: "营养保健",
                                brand: "白云山2"
                            }
                        },
                        {
                            name: "白云山1",
                            checked: false,
                            url: {
                                keyword: "潘艳",
                                brand: "白云山1"
                            }
                        },
                        {
                            name: "白云山2",
                            checked: false,
                            url: {
                                keyword: "营养保健",
                                brand: "白云山2"
                            }
                        },
                        {
                            name: "白云山1",
                            checked: false,
                            url: {
                                keyword: "潘艳",
                                brand: "白云山1"
                            }
                        },
                        {
                            name: "白云山2",
                            checked: false,
                            url: {
                                keyword: "营养保健",
                                brand: "白云山2"
                            }
                        },
                        {
                            name: "白云山1",
                            checked: false,
                            url: {
                                keyword: "潘艳",
                                brand: "白云山1"
                            }
                        },
                        {
                            name: "白云山2",
                            checked: false,
                            url: {
                                keyword: "营养保健",
                                brand: "白云山2"
                            }
                        },
                        {
                            name: "白云山1",
                            checked: false,
                            url: {
                                keyword: "潘艳",
                                brand: "白云山1"
                            }
                        },
                        {
                            name: "白云山2",
                            checked: false,
                            url: {
                                keyword: "营养保健",
                                brand: "白云山2"
                            }
                        },
                        {
                            name: "白云山1",
                            checked: false,
                            url: {
                                keyword: "潘艳",
                                brand: "白云山1"
                            }
                        },
                        {
                            name: "白云山2",
                            checked: false,
                            url: {
                                keyword: "营养保健",
                                brand: "白云山2"
                            }
                        },
                        {
                            name: "白云山1",
                            checked: false,
                            url: {
                                keyword: "潘艳",
                                brand: "白云山1"
                            }
                        },
                        {
                            name: "白云山2",
                            checked: false,
                            url: {
                                keyword: "营养保健",
                                brand: "白云山2"
                            }
                        }
                    ]
                },
                {
                    name: "规格",
                    brandList: [
                        {
                            name: "12只装",
                            checked: false,
                            url: {
                                keyword: "营养保健",
                                brand: "白云山12"
                            }
                        },
                        {
                            name: "18只装",
                            checked: false,
                            url: {
                                keyword: "营养保健",
                                brand: "白云山18"
                            }
                        },
                        {
                            name: "22只装",
                            checked: false,
                            url: {
                                keyword: "营养保健",
                                brand: "白云山22"
                            }
                        }
                    ]
                },
                {
                    name: "是否进口",
                    brandList: [
                        {
                            name: "12只装",
                            checked: false,
                            url: {
                                keyword: "营养保健",
                                brand: "白云山12"
                            }
                        },
                        {
                            name: "18只装",
                            checked: false,
                            url: {
                                keyword: "营养保健",
                                brand: "白云山18"
                            }
                        },
                        {
                            name: "22只装",
                            checked: false,
                            url: {
                                keyword: "营养保健",
                                brand: "白云山22"
                            }
                        }
                    ]
                },
                {
                    name: "材质成份",
                    brandList: [
                        {
                            name: "12只装",
                            checked: false,
                            url: {
                                keyword: "营养保健",
                                brand: "白云山12"
                            }
                        },
                        {
                            name: "18只装",
                            checked: false,
                            url: {
                                keyword: "营养保健",
                                brand: "白云山18"
                            }
                        },
                        {
                            name: "22只装",
                            checked: false,
                            url: {
                                keyword: "营养保健",
                                brand: "白云山22"
                            }
                        }
                    ]
                }
            ]
        };
    },
    watch: {
        $route(to, from) {
            location.reload();
        }
    },
    methods: {
        // 更多
        open(index) {
            if (this.isOpen === "static") {
                this.isOpen = index;
            } else {
                this.isOpen = "static";
            }
        },
        // 多选
        onSelect(index) {
            this.isSelect = index;
        },
        // 取消多选
        onNot() {
            this.isSelect = "static";
        },
        // 确定多选
        onSubmit() {}
    }
};
</script>

<style lang="less" scoped>
@import "../styles/search-main.less";
</style>