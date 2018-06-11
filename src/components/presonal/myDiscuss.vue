<template>
    <div class="layout-discuss">
        <p class="discuss-title">
            <span>我的评论</span>
        </p>
        <div class="discuss-type">
            <span :class="state===1?'active':''" @click="tabType(1)">待评论</span>
            <span :class="state===2?'active':''" @click="tabType(2)">已评论</span>
        </div>

        <!-- 评论说明开始 -->
        <div v-if="state===1" class="explain-main">
            <p class="explain">评论说明:</p>
            <p class="explain">1、欢迎您发表商品质量相关、对其他用户具有参考价值。好的评论可获得10积分</p>
            <p class="explain">2、收到商品后及发表评论，每位顾客只能对该商品发表一条评论</p>
            <p class="explain">3、当涉及广告、比价、重复反馈、不实评论、粗口、危害国家安全等等不当言论，药居士网上药店有权予以管理</p>
        </div>
        <!-- 评论说明结束 -->

        <!-- 评论具体内容开始 -->
        <ul class="detailed-main">
            <li class="detailed-title">
                <div>商品信息</div>
                <div>价格</div>
                <div>操作</div>
            </li>

            <!-- 无数据的时候展示开始 -->
            <li class="not-data" v-if="discussList.length <= 0">暂无记录</li>
            <!-- 无数据的时候展示结束 -->

            <li class="detailed-item" v-for="(item,index) in discussList" :key="index">
                <div class="detailed-item-img">

                    <router-link :to="item.url"><img :src="item.img" alt="img"></router-link>
                    <router-link :to="item.url">{{item.name}}</router-link>
                </div>
                <div class="detailed-item-price">￥{{item.price | money}}</div>
                <div class="detailed-item-operate">
                    <span v-if="state===1" @click="comment">前往评论</span>
                    <span v-if="state===2" @click="seeComment">查看评论</span>

                    <span @click="repurchase">重新购买</span>
                    <span @click="delComment">删除</span>
                </div>
            </li>
        </ul>
        <!-- 评论具体内容结束 -->
    </div>
</template>

<script>
import moneyFilter from "apis/filter.js";

export default {
    data() {
        return {
            discussList: [
                {
                    img: "http://p8pi9ribk.bkt.clouddn.com/loading.png",
                    name:
                        "养方堂  红枣黑糖姜茶（固体饮料）养方堂  红枣黑糖姜茶（固体饮料）养方堂  红枣黑糖姜茶（固体饮料）",
                    price: 13.7,
                    url: "/product/1"
                },
                {
                    img: "http://p8pi9ribk.bkt.clouddn.com/loading.png",
                    name:
                        "养方堂  红枣黑糖姜茶（固体饮料）养方堂  红枣黑糖姜茶（固体饮料）养方堂  红枣黑糖姜茶（固体饮料）",
                    price: 13.7,
                    url: "/product/1"
                }
            ],
            state: 1
        };
    },
    filters: {
        money(value) {
            return moneyFilter.moneyFilter(value);
        }
    },
    methods: {
        // 状态切换
        tabType(value) {
            this.state = value;
        },
        // 前往评论
        comment() {
            this.$message("前往评论功能程序员小哥哥还在开发中，敬请期待.....");
        },
        // 查看评论
        seeComment() {
            this.$message("查看评论功能程序员小哥哥还在开发中，敬请期待.....");
        },
        // 删除
        delComment() {
            this.$message("删除功能程序员小哥哥还在开发中，敬请期待.....");
        },
        // 重新购买
        repurchase() {
            this.$message("重新购买功能程序员小哥哥还在开发中，敬请期待.....");
        }
    }
};
</script>

<style lang="less"  scoped>
.layout-discuss {
    padding: 20px;
    border: 1px solid #eee;
    .discuss-title {
        margin-bottom: 20px;
        span {
            border-left: 3px solid #ff7e00;
            padding-left: 20px;
        }
    }

    .discuss-type {
        padding: 10px 0;
        margin-bottom: 30px;
        border: 1px solid #eee;
        span {
            padding: 0 20px;
            border-right: 1px solid #eee;
            &.active {
                color: #ff0000;
            }
            &:hover {
                cursor: pointer;
                color: #ff0000;
                text-decoration: underline;
            }
        }
    }

    .explain {
        margin-bottom: 10px;
        color: #333;
    }

    .not-data {
        height: 130px;
        line-height: 130px;
        text-align: center;
    }

    .detailed-main {
        margin-top: 30px;
        border: 1px solid #eee;

        .detailed-title {
            display: flex;
            padding: 11px 20px;
            background-color: #e7e7e7;
            color: #4b4b4b;
            div {
                flex: 1;
                text-align: center;
                &:first-child {
                    flex: 2;
                }
            }
        }

        .detailed-item {
            display: flex;
            padding: 20px;
            align-items: center;
            border-bottom: 1px solid #eee;
            &:last-child {
                border-bottom: 0;
            }
            div {
                flex: 1;
                text-align: center;
                &.detailed-item-img {
                    display: flex;
                    align-items: center;
                    flex: 2;
                    text-align: left;
                    a {
                        display: inline-block;
                        &:first-child {
                            margin-right: 10px;
                        }
                        &:hover {
                            color: #ff0000;
                            text-decoration: underline;
                        }
                    }
                    img {
                        width: 80px;
                        height: 80px;
                        padding: 10px;
                        border: 1px solid #eee;
                    }
                }
            }

            .detailed-item-price {
                color: #ff0000;
            }

            .detailed-item-operate {
                color: #9f9f9f;
                span {
                    display: block;
                    padding: 5px;
                    &:hover {
                        cursor: pointer;
                        color: #ff0000;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}
</style>