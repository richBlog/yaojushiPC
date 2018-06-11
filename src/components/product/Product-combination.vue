<template>
    <div class="product-combination container">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane :label="item.name" :name="''+index" v-for="(item,index) in groutList" :key="item.id">
                <div class="group-discount">
                    <div class="group-image">
                        <div class="image-list">
                            <div class="image-item" v-for="(key,dex) in item.list" :key="key.id">
                                <div>
                                    <router-link :to="key.url">
                                        <img v-lazy="key.img" alt="img">
                                    </router-link>
                                    <p class="image-item-name">{{key.name}}</p>
                                    <p class="image-item-price">
                                        <span>￥{{key.price | money}}</span>
                                    </p>
                                </div>
                                <div class="image-item-symbol" v-if="dex!==(item.list.length-1)"><img class="image-add" src="../../assets/image/jia.png" alt="jia"></div>
                            </div>
                        </div>
                        <div class="image-comments">
                            <span class="image-comments-title">药师点评：</span>
                            <span>{{item.comment}}</span>
                        </div>
                    </div>
                    <div class="group-info">
                        <p class="group-info-province"><img src="../../assets/image/yh.png" alt="yh">
                            <span>立省￥{{item.originalPrice-item.suitPrice | money}}</span>
                        </p>
                        <p class="group-info-suitPrice">套餐价
                            <span>￥{{item.suitPrice | money}}</span>
                        </p>
                        <p class="group-info-originalPrice">原价
                            <span>￥{{item.originalPrice | money}}</span>
                        </p>
                        <el-button type="primary">加入购物车</el-button>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import filterMoney from 'apis/filter.js'
export default {
    props: ["groutList"],
    data() {
        return {
            activeName: "0"
        };
    },
    filters:{
        money(value){
            return filterMoney.moneyFilter(value)
        }
    },
    methods: {
        handleClick(tab, event) {}
    }
};
</script>
<style lang="less" scoped>
.product-combination {
    margin-top: 20px;
    border: 1px solid #ddd;
    .group-discount {
        display: flex;
        .group-image {
            width: 963px;
            min-width: 963px;
            padding-top: 35px;
            border-right: 1px solid #ddd;
            box-sizing: border-box;
            overflow: hidden;
            text-align: center;
        }
        .group-info {
            width: 100%;
            padding: 95px 36px 0 36px;
            text-align: left;
            .el-button--primary {
                width: 100%;
            }

            .group-info-province {
                position: relative;
                span {
                    position: absolute;
                    top: 15%;
                    left: 28%;
                    color: #ff0000;
                }
            }
            .group-info-suitPrice {
                span {
                    font-size: 18px;
                    color: #ff0000;
                }
            }
            .group-info-originalPrice {
                margin-top: 12px;
                margin-bottom: 20px;
                color: #777;
                span {
                    text-decoration: line-through;
                }
            }
        }

        .image-list {
            display: flex;
            padding-left: 26px;
            padding-bottom: 28px;
            border-bottom: 1px dashed #ddd;
            .image-item {
                display: flex;
                align-items: center;
                .image-item-symbol {
                    margin-left: 20px;
                }
                .image-add {
                    width: 40px;
                    height: 40px;
                }
            }
            .image-item-name {
                margin-bottom: 12px;
            }
            .image-item-price {
                span {
                    color: #ff0000;
                }
            }
            img {
                height: 156px;
            }
        }

        .image-comments {
            display: flex;
            padding: 20px 22px 23px 41px;
            text-align: left;
            span {
                display: inline-block;
            }
            .image-comments-title {
                width: 90px;
                color: #4199f5;
            }
        }
    }
}
</style>

