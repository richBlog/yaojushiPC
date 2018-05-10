<template>
    <div class="shopping-cart-main box">

        <!-- 数据加载时候的状态开始 -->
        <div v-if="dataState==='state'"></div>
        <!-- 数据加载时候的状态结束 -->

        <!-- 购物车没有产品时候的状态开始 -->
        <div v-else-if="dataState===0">

        </div>
        <!-- 购物车没有产品时候的状态结束 -->

        <!-- 购物车有产品时候的状态开始 -->
        <div v-else>
            <el-alert title="您还没有登录！登录后购物车的商品将保存到您账号中" type="warning" :closable="false">
                <el-button class="login-btn" size="mini" type="danger">登陆</el-button>
            </el-alert>
            <el-row class="shopping-info-title">
                <el-col :span="2">
                    <el-checkbox v-model="checked">全选</el-checkbox>
                </el-col>
                <el-col :span="10">商品名称</el-col>
                <el-col :span="3">数量</el-col>
                <el-col :span="3">单价</el-col>
                <el-col :span="3">小计</el-col>
                <el-col :span="3">操作</el-col>
            </el-row>
            <ul class="shopping-info-list" v-for="item in DataList" :key="item.id">
                <li>
                    <el-checkbox v-model="checked">药居士自营</el-checkbox>
                </li>
                <li v-for="i in item.ProductList" :key="i.id">
                    <el-row class="">
                        <el-col :span="2">
                            <el-checkbox v-model="checked"></el-checkbox>
                        </el-col>
                        <el-col :span="2" class="info-img">
                            <router-link :to="'/product/'+i.Url"><img :src="i.Img" alt="img"></router-link>
                        </el-col>
                        <el-col :span="8">{{i.Name}}</el-col>
                        <el-col :span="3">
                            <el-input-number v-model="i.Count" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                        </el-col>
                        <el-col :span="3" class="info-discount">
                            <p>￥{{i.Discount}}</p>
                            <div class="promotion-box">
                                <p class="promotion-title" @click="infoShow">促销信息</p>
                                <p :class="isHide?'cover active':'cover'"></p>
                                <p :class="isHide?'promotion-content active':'promotion-content'">{{i.SalesPromotion}}</p>
                            </div>
                        </el-col>
                        <el-col :span="3" class="info-subtotal">￥{{i.Subtotal}}</el-col>
                        <el-col :span="3">
                            <el-button>删除</el-button>
                        </el-col>
                    </el-row>
                </li>
            </ul>
        </div>
        <!-- 购物车有产品时候的状态结束 -->

        <!-- 产品推荐开始 -->
        <ShoppingRecommendView/>
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
            dataState: "state",
            checked: true,
            isHide: false,
            DataList: [
                {
                    Seller: "药居士自营",
                    ProductList: [
                        {
                            Url: 1,
                            Img: require("../../assets/image/loading.png"),
                            Name: "养方堂  红枣黑糖姜茶（固体饮料）",
                            Count: 1,
                            Discount: 12.0,
                            Subtotal: 15.9,
                            SalesPromotion:
                                "【5/9-5/13把肾透支的补回来】2盒一疗程！单盒下单立减10，两盒下单优惠30，三盒下单优惠50！五盒原价下单减60，再送原品一盒！治疗阳痿早泄搭配<固本回元口服液>效果好!"
                        },
                        {
                            Url: 1,
                            Img: require("../../assets/image/loading.png"),
                            Name: "养方堂  红枣黑糖姜茶（固体饮料）",
                            Count: 1,
                            Discount: 12.0,
                            Subtotal: 15.9,
                            SalesPromotion:
                                "【5/9-5/13把肾透支的补回来】2盒一疗程！单盒下单立减10，两盒下单优惠30，三盒下单优惠50！五盒原价下单减60，再送原品一盒！治疗阳痿早泄搭配<固本回元口服液>效果好!"
                        }
                    ]
                }
            ]
        };
    },
    created() {
        this.dataState = 1;
    },
    methods: {
        handleChange() {},
        infoShow(){
           
            this.isHide = !this.isHide;
             console.log(this.isHide)
        }
    }
};
</script>

<style lang="less" scoped>
.shopping-cart-main {
    margin-top: 30px;
    .login-btn {
        margin-left: 15px;
    }
    .shopping-info-title {
        margin: 10px 0;
        padding: 10px 0;
        background-color: #f3f4f3;
        border: 1px solid #eee;
        border-top: 2px solid #0066d4;
        box-sizing: border-box;
        .el-col {
            text-align: center;
            color: #666;
            border-right: 1px solid #ddd;
            &:first-child {
                padding-left: 15px;
                text-align: left;
            }
            &:last-child {
                border: none;
            }
        }
    }
    .shopping-info-list {
        border: 1px solid #eee;
        text-align: center;
        li {
            border-top: 1px solid #eee;
            padding: 10px 0;
            line-height: 80px;
            &:first-child {
                padding: 10px 0 10px 15px;
                text-align: left;
                border: none;
                line-height: 20px;
            }
            .el-col {
                &:first-child {
                    padding-left: 15px;
                    text-align: left;
                }
                .el-input-number {
                    width: 100%;
                }
            }

            .info-img {
                a {
                    display: block;
                    width: 80px;
                    height: 80px;
                    padding: 10px;
                    border: 1px solid #eee;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }

            .info-discount {
                line-height: 40px;
                .unit-price{

                }
            }

            .info-subtotal {
                color: #ff0000;
            }

            .promotion-box{
                position: relative;
                .promotion-title{
                    width: 50%;
                    height: 20px;
                    line-height: 18px;
                    margin: 0 auto;
                    color: #ff0000;
                    border: 1px solid #ff0000;
                    z-index: 100;
                    cursor: pointer;
                }
                .cover{
                    display: none;
                    position: absolute;
                    top: 19px;
                    left: 32px;
                    width: 49%;
                    border-bottom: 1px solid #fff;
                    z-index: 100;
                    &.active{
                        display: block;
                    }
                }
                .promotion-content{
                    display: none;
                    position: absolute;
                    top: 19px;
                    left: 31px;
                    width: 220px;
                    line-height: 18px;
                    padding: 5px;
                    border: 1px solid #ff0000;
                    background-color: #fff;
                    font-size: 12px;
                    color: #666;
                    z-index: 99;
                    &.active{
                        display: block;
                    }
                }
            }
        }
    }
}
</style>