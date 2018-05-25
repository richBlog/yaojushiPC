<template>
    <div class="search-box">
        <headerView/>
        <div class="search-main">
            <!-- 分类导航开始 -->
            <classifiedView :active="true" />
            <!-- 分类导航结束 -->
            <div v-show="isData==='static'"></div>

            <!-- 没有搜索结果时候的状态开始 -->
            <div class="container flex not-product" v-show="isData===0">
                <div><img src="../assets/image/loading.png" alt="img"></div>
                <div class="not-product-title">
                    <p>抱歉，居士没有找到“{{keyWord}}”相关的商品，要不您换个关键字我帮您再找找看</p>
                    <p>建议您：</p>
                    <p>1、看看输入的文字是否有误</p>
                    <p>2、调整关键字,如"同仁堂五子衍宗丸"改成"五子衍宗丸"或"五子衍宗"</p>
                </div>
            </div>

            <!-- 没有搜索结果时候的状态结束 -->

            <!-- 商品筛选开始 -->
            <div class=" flex product-screen container" v-show="isData===1">
                <div class="product-screen-title">全部结果 &gt;</div>
                <div class="product-screen-sub" v-for="(item, index) in result" :key="index">
                    <div class="product-screen-item" @click="onClose(item)">
                        <span>{{item.name}}：</span>
                        <span class="product-screen-content">{{item.content}}</span>
                        <span>x</span>
                    </div>
                    <b>&gt;</b>
                </div>
                <span>"{{keyWord}}"</span>
            </div>
            <!-- 商品筛选结束 -->

            <!-- 产品内容开始 -->

            <div class=" container flex search-content" v-if="isData===1">

                <div class="search-left">
                    <!-- 产品筛选功能开始 -->
                    <div class="screen-box">
                        <div class="screen-type" v-for="(item,index) in dataList.typeList" :key="index">
                            <div class="screen-name">{{item.name}}：</div>
                            <!-- 不是多选时候的状态展示开始 -->
                            <div class="screen-not-selection" v-show="isSelect!==index">
                                <div :class="isOpen===index?'screen-content active':'screen-content'">
                                    <span @click="onSubmit(i.name,item.name)" class="sreen-item" v-for="(i,d) in item.brandList" :key="d">{{i.name}}</span>
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
                                    <el-button size="mini" type="primary" @click="onSubmit(item.brandList,item.name)">提交</el-button>
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
                            <!-- 价格范围开始 -->
                            <div class="price-range">
                                <el-input v-model="input" placeholder="￥"></el-input>
                                &nbsp;-&nbsp;
                                <el-input v-model="input" placeholder="￥"></el-input>
                                <div class="range-btn">
                                    <el-button size="mini" type="primary" @click="onNot">确定</el-button>
                                    <el-button size="mini" @click="onNot">清空</el-button>
                                </div>
                            </div>
                            <!-- 价格范围结束 -->

                            <!-- 商品总数开始 -->
                            <div class="priduct-amount">
                                <div class="amount-box">共
                                    <span class="amount">{{dataList.productList.length}}</span> 个商品</div>
                                <div class="paging-box">
                                    <i class="el-icon-arrow-left"></i>
                                    <span>
                                        <span class="current-page">1</span>
                                        /
                                        <span>1</span>
                                    </span>
                                    <i class="el-icon-arrow-right"></i>
                                </div>
                            </div>
                            <!-- 商品总数结束 -->

                            <!-- 处方、非处方、是否有货选项开始 -->
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox label="仅显示有货"></el-checkbox>
                                <el-checkbox label="处方"></el-checkbox>
                                <el-checkbox label="非处方"></el-checkbox>
                            </el-checkbox-group>

                            <!-- 处方、非处方、是否有货选项结束 -->

                        </el-tabs>
                    </div>

                    <!-- 产品按条件排序结束 -->

                    <!-- 搜索出来的产品结果开始 -->
                    <div class="search-content-box">
                        <ul class="search-product-sub">
                            <li class="search-product-item" v-for="(item,index) in dataList.productList" :key="index">
                                <i></i>
                                <router-link class="pic" to="product/1">
                                    <div class="pic-img"><img :src="item.img" alt="item.name"></div>
                                    <p class="pic-name" v-html="item.name.replace('避孕套',`<font style='color:red'> 避孕套</font>`)"></p>
                                    <p class="pic-box">
                                        <span class="new-pic">￥{{item.newPrice}}</span>
                                        <span class="old-pic">￥{{item.oldPrice}}</span>
                                    </p>
                                </router-link>
                            </li>
                        </ul>
                        <el-pagination v-if="dataList.productList.length>32" background layout="prev, pager, next" :total="1000"></el-pagination>
                    </div>
                    <!-- 搜索出来的产品结果结束 -->
                </div>

                <!-- 右侧产品推广开始 -->

                <div class="search-right">
                    <p class="right-title">搜索该关键词的人还买了</p>
                    <ul class="right-product-sub">
                        <li class="right-product-item" v-for="(item,index) in dataList.extendList" :key="index">
                            <router-link to="product/1">
                                <div class="right-img"><img :src="item.img" alt="img"></div>
                                <p class="right-name">{{item.name}}</p>
                                <p class="right-box">
                                    <span>￥{{item.newPrice}}</span>
                                    <span>￥{{item.oldPrice}}</span>
                                </p>
                            </router-link>
                        </li>
                    </ul>
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
            checkList: [],
            isData: "static",
            isOpen: "static",
            isSelect: "static",
            result: [],
            input: "",
            keyWord: "",
            dataList: {}
        };
    },
    watch: {
        $route(to, from) {
            location.reload();
        }
    },
    created() {
        // 截取关键词
        this.keyWord = this.$route.query.keyword;
        let fil = this.$route.query.filed;
        if (fil) {
            fil = JSON.parse(fil);
            this.result = fil;
            console.log(fil);
        }

        // 获取搜索结果数据
        this.$ajax({
            url:
                "https://easy-mock.com/mock/5af8e2bb0d7ff97d1fdc9341/searchData",
            method: "get"
        })
            .then(res => {
                if (res.status === 200) {
                    this.dataList = res.data.data;
                    if (this.dataList.productList.length > 0) {
                        this.isData = 1;
                    } else {
                        this.isData = 0;
                    }
                }
            })
            .catch(error => {
                console.log(error);
            });
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
        // 确定多选和单独点击某个类型中的选项
        onSubmit(list, name) {
            let arr = "";
            let data = {};
            let isExist = true;
            let query = this.$route.query.filed;

            if (typeof list === Object) {
                list.forEach((item, index) => {
                    if (item.checked) {
                        arr += item.name + ",";
                    }
                });
                arr = arr.substring(0, arr.length - 1);
            } else {
                arr = list;
            }

            if (query) {
                query = JSON.parse(query);
                for (let item of query) {
                    if (item.name === name) {
                        if (typeof list === Object) {
                            item.content += "," + arr;
                        } else {
                            item.content = arr;
                        }
                        isExist = false;
                    }
                }
            } else {
                query = [];
            }

            if (isExist) {
                data = {
                    name: name,
                    content: arr
                };
                query.push(data);
            }

            query = JSON.stringify(query);
            this.$router.push({
                path: "search",
                query: { keyword: this.keyWord, filed: query }
            });
        },
        // 关闭二次筛选的搜索条件
        onClose(key) {
            let query = JSON.parse(this.$route.query.filed);

            query.forEach((item, index) => {
                if (item.name === key.name) {
                    query.splice(index, 1);
                }
            });

            query = JSON.stringify(query);

            this.$router.push({
                path: "search",
                query: { keyword: this.keyWord, filed: query }
            });
        }
    }
};
</script>

<style lang="less" scoped>
@import "../styles/search-main.less";
</style>