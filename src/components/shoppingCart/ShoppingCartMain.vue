<template>
    <div class="shopping-cart-main box">
        <el-alert v-if="token" title="您还没有登录！登录后购物车的商品将保存到您账号中" type="warning" :closable="false">
            <el-button class="login-btn" size="mini" type="danger" @click="jumpLogin">登陆</el-button>
        </el-alert>
        <!-- 数据加载时候的状态开始 -->
        <div v-if="dataState==='state'"></div>
        <!-- 数据加载时候的状态结束 -->

        <!-- 购物车没有产品时候的状态开始 -->
        <div v-else-if="dataState===0">
            <el-row class="message">
                <el-col :span="10" class="message-img">
                    <img src="../../assets/image/no-login-icon.png" alt="img">
                </el-col>
                <el-col :span="14" class="message-content">
                    <p>购物车空空的哦~，去看看心仪的商品吧~</p>
                    <router-link to="/">去购物&gt;</router-link>
                </el-col>
            </el-row>
        </div>
        <!-- 购物车没有产品时候的状态结束 -->

        <!-- 购物车有产品时候的状态开始 -->
        <div v-else>
            <el-row class="shopping-info-title">
                <el-col :span="2">
                    <el-checkbox v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                </el-col>
                <el-col :span="10">商品名称</el-col>
                <el-col :span="3">数量</el-col>
                <el-col :span="3">单价</el-col>
                <el-col :span="3">小计</el-col>
                <el-col :span="3">操作</el-col>
            </el-row>
            <ul class="shopping-info-list" v-for="(item,index) in dataList.List" :key="item.id">
                <li>
                    <el-checkbox v-model="item.checked" @change="handleCheckedChange(index)">{{item.Seller}}</el-checkbox>
                </li>
                <li v-for="(i,dex) in item.ProductList" :key="i.id">
                    <el-row class="">
                        <el-col :span="2">
                            <el-checkbox v-model="i.checked" @change="CheckedChange(index,dex)"></el-checkbox>
                        </el-col>
                        <el-col :span="2" class="info-img">
                            <router-link :to="'/product/'+i.Url" target='_blank'><img v-lazy="i.Img" alt="img"></router-link>
                        </el-col>
                        <el-col :span="8">{{i.Name}}</el-col>
                        <el-col :span="3">
                            <el-input-number v-model="i.Count" @change="handleChange(Count)" :min="1" :max="10"></el-input-number>
                        </el-col>
                        <el-col :span="3" class="info-discount">
                            <p>￥{{i.Discount}}</p>
                            <div class="promotion-box" @mouseover="show(index,dex)" @mouseout="hide">
                                <p class="promotion-title">促销信息</p>
                                <p :class="isHide===index&&isShow===dex?'cover active':'cover'"></p>
                                <p :class="isHide===index&&isShow===dex?'promotion-content active':'promotion-content'">{{i.SalesPromotion}}</p>
                            </div>
                        </el-col>
                        <el-col :span="3" class="info-subtotal">￥{{i.Subtotal}}</el-col>
                        <el-col :span="3">
                            <el-button type="danger" size="mini" @click="del(dex)">删除</el-button>
                        </el-col>
                    </el-row>
                </li>

            </ul>
            <el-row class="balance-accounts">
                <el-col :span="2">
                    <el-checkbox v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                </el-col>
                <el-col :span="3" class="del-product" @click.native="delSelect">删除选中的商品</el-col>
                <el-col :span="13" class="add-collection">
                    <span @click="addCollection">移入到我的收藏夹</span>
                </el-col>
                <el-col :span="3" class="computed-price">
                    <p>总价：
                        <span class="total-price">￥{{dataList.TotalPrice}}</span>
                    </p>
                    <p>
                        已节省：
                        <span class="concession">-￥{{dataList.Concession}}</span>
                    </p>
                </el-col>
                <el-col :span="3">
                    <el-button type="danger">去结算</el-button>
                </el-col>
            </el-row>
        </div>
        <!-- 购物车有产品时候的状态结束 -->

        <!-- 产品推荐开始 -->
        <!-- <ShoppingRecommendView/> -->
        <!-- 产品推荐结束 -->
    </div>
</template>

<script>
import ShoppingRecommendView from "./ShoppingRecommend";

export default {
    components: {
        ShoppingRecommendView
    },
    data() {
        return {
            token: false,
            dataState: "state",
            isHide: "state",
            isShow: "state",
            checkAll: true,
            dataList: {}
        };
    },
    created() {
        
        this.$ajax({
            url: 'https://easy-mock.com/mock/5af8e2bb0d7ff97d1fdc9341/shoppingCart',
            method: 'get'
        }).then(response=>{
            if(response.status==200){
                this.dataList = response.data.data;
                this.dataState = 1;
            }
        }).catch(error=>{
            console.log(error);
        })
    },
    methods: {
        // 选中的商品移入到收藏夹
        addCollection() {
            let list = this.select();
            this.$confirm(
                `是否移入这${list.length}件产品到您的收藏夹?`,
                "提示",
                {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                }
            )
                .then(() => {
                    this.$message({
                        type: "success",
                        message: "移入成功!"
                    });
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消移入"
                    });
                });
        },
        // 删除选中的商品
        delSelect() {
            let list = this.select();
            this.$confirm(`是否删除这${list.length}件产品?`, "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    this.$message({
                        type: "success",
                        message: "删除成功!"
                    });
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消删除"
                    });
                });
        },
        // 获取选中的商品
        select() {
            let list = [];
            for (let item of this.DataList.List) {
                for (let key of item.ProductList) {
                    if (key["checked"] == true) {
                        list.push(key);
                    }
                }
            }
            return list;
        },
        // 单个产品是否选中
        CheckedChange(index, dex) {
            let list = this.DataList.List[index].ProductList;
            let flag = true;
            let flags = true;
            if (!list[dex]["checked"]) {
                this.DataList.List[index]["checked"] = false;
                this.checkAll = false;
            } else {
                // 一个商家下面的所有产品是的都选中
                for (let item of list) {
                    if (item["checked"] == false) {
                        flag = false;
                        break;
                    }
                }
                flag
                    ? (this.DataList.List[index]["checked"] = true)
                    : (this.DataList.List[index]["checked"] = false);
                // 所有商家是否都选中
                for (let key of this.DataList.List) {
                    if (key["checked"] == false) {
                        flags = false;
                        break;
                    }
                }
                flags ? (this.checkAll = true) : (this.checkAll = false);
            }
        },
        // 一个商家下面的所有产品全选
        handleCheckedChange(index) {
            let list = this.DataList.List;
            let ProductList = list[index].ProductList;
            let flag = true;
            if (!list[index]["checked"]) {
                this.checkAll = false;
                for (let item of ProductList) {
                    item["checked"] = false;
                }
            } else {
                for (let item of ProductList) {
                    item["checked"] = true;
                }
                for (let item of list) {
                    if (item["checked"] == false) {
                        flag = false;
                        break;
                    }
                }
                flag ? (this.checkAll = true) : (this.checkAll = false);
            }
        },
        // 所有商品的全选
        handleCheckAllChange(val) {
            if (val) {
                for (let item of this.DataList.List) {
                    item["checked"] = true;
                    for (let key of item.ProductList) {
                        key["checked"] = true;
                    }
                }
            } else {
                for (let item of this.DataList.List) {
                    item["checked"] = false;
                    for (let key of item.ProductList) {
                        key["checked"] = false;
                    }
                }
            }
        },
        handleChange(Count) {
            console.log(Count);
        },
        // 跳转到登陆页
        jumpLogin() {
            this.$router.push("/Login");
        },
        // 删除单个产品信息
        del(dex) {
            console.log(dex);
            this.$confirm("是否删除?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            }).then(() => {
                this.$message({
                    type: "success",
                    message: "删除成功!"
                });
            });
        },
        // 促销信息显示
        show(index, dex) {
            console.log(1);
            this.isHide = index;
            this.isShow = dex;
        },
        // 促销信息隐藏
        hide() {
            this.isHide = "state";
            this.isShow = "state";
        }
    }
};
</script>

<style lang="less" scoped>
@import "../../styles/ShoppingCartMain.less";
</style>