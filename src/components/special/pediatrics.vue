<template>
    <div class="pediatrics">
        <div class="layout-bg">
            <img src="~assets/image/special/pediatrics/banner_01.png" alt="儿童专题">
            <img src="~assets/image/special/pediatrics/banner_02.png" alt="儿童专题">
            <img src="~assets/image/special/pediatrics/banner_03.png" alt="儿童专题">
        </div>
        <!-- 优惠券领取开始 -->
        <div class="layout-coupon">
            <ul class="coupon-sub">
                <li class="coupon-item" v-for="(item,index) in 3" :key="index">
                    <div>
                        &yen;
                        <span>5</span>优惠券</div>
                    <div @click="draw">立即领取</div>
                    <div>（满50元使用）</div>
                </li>
            </ul>
        </div>
        <!-- 优惠券领取结束 -->

        <!-- 产品分类开始 -->
        <ul class="layout-main">
            <li class="layout-item" :id="'type'+index" v-for="(item,index) in productList" :key="index">
                <p class="layout-title"><img :src="require(`../../assets/image/special/pediatrics/category_0${index+1}.png`)" alt="儿童感冒"></p>
                <ul class="container">
                    <li v-for="(i,d) in item.list" :key="d">
                        <div class="layout-img"><img :src="i.img" :alt="i.name"></div>
                        <div class="layout-suggest">
                            <p class="layout-name">{{i.name}}</p>
                            <p class="layout-suggest-item">{{i.suggest}}</p>
                            <div class="layout-operate">
                                &yen;
                                <span>{{i.price}}</span>
                                <router-link :to="'/product/'+i.url">立即购买</router-link>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
        <!-- 产品分类结束 -->

        <!-- 电梯导航开始 -->
        <aside class="aside-nav" v-show="show">
            <ul>
                <li>
                    <div :class="{active:state===1}" @click="jump(1)">儿童感冒</div>
                </li>
                <li>
                    <div :class="{active:state===2}" @click="jump(2)">儿童皮肤</div>

                </li>
                <li>
                    <div :class="{active:state===3}" @click="jump(3)">消化不良</div>

                </li>
                <li>
                    <div :class="{active:state===4}" @click="jump(4)">儿童咳嗽</div>

                </li>
                <li>
                    <div :class="{active:state===5}" @click="jump(5)">健体补脑</div>

                </li>
            </ul>

        </aside>
        <!-- 电梯导航结束 -->

        <navigationView/>
    </div>
</template>

<script>
import navigationView from "components/home/Home-navigation";
import scrollTop from "apis/scrollTop";
export default {
    components:{
navigationView
    },
    data() {
        return {
            productList: [],
            state: 0,
            show: false,
            elist: []
        };
    },
    created() {
        this.$ajax({
            url: "../../static/pediatrics.json",
            method: "GET"
        })
            .then(data => {
                this.productList = data.data;
                this.elist = [];
                for (let i in this.productList) {
                    this.elist.push(`#type${i}`);
                }
            })
            .catch(err => {
                console.log(err);
            });
    },
    mounted() {
        window.addEventListener(
            "scroll",
            scrollTop.debounce(this.scrollEvent, 300, 300)
        );
    },
    methods: {
        draw() {
            this.$alert("领取成功", "优惠券领取", {
                confirmButtonText: "确定"
            });
        },
        scrollEvent() {
            let top = scrollTop.top();
            let list = scrollTop.floor(this.elist);
            let last = scrollTop.element(".el-footer").offsetTop;
            // 判断右侧楼层导航是否显示
            this.show = scrollTop.isShow(top, list, last);
            // 判断到达对应楼层高亮
            if (top >= list[0] && top < list[1]) {
                this.state = 1;
            } else if (top >= list[1] && top < list[2]) {
                this.state = 2;
            } else if (top >= list[2] && top < list[3]) {
                this.state = 3;
            } else if (top >= list[3] && top < list[4]) {
                this.state = 4;
            } else if (top >= list[4]) {
                this.state = 5;
            } else {
                this.state = 0;
            }
        },
        jump(index) {
            let list = scrollTop.floor(this.elist);
            this.state = index;
            switch (this.state) {
                case 1:
                    window.scrollTo(0, list[0]);
                    break;
                case 2:
                    window.scrollTo(0, list[1]);
                    break;
                case 3:
                    window.scrollTo(0, list[2]);
                    break;
                case 4:
                    window.scrollTo(0, list[3]);
                    break;
                case 5:
                    window.scrollTo(0, list[4]);
                    break;
            }
        }
    }
};
</script>

<style lang="less" scoped>
@imaUrl: "../../assets/image/special/pediatrics/";

.layout-bg {
    font-size: 0;
    text-align: center;
}
.layout-coupon {
    width: 1920px;
    height: 599px;
    background: url("@{imaUrl}bg_02.jpg") no-repeat center;
    margin: 0 auto;
    .coupon-sub {
        position: relative;
        top: 167px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1011px;
        height: 327px;
        padding: 0 66px;
        margin: 0 auto;
        .coupon-item {
            width: 283px;
            height: 187px;
            margin-right: 24px;
            padding-top: 25px;
            background: url("@{imaUrl}coupon.png") no-repeat center;
            background-size: contain;
            text-align: center;
            &:last-child {
                margin-right: 0;
            }
            div {
                color: #fff;
                font-weight: bold;
                font-family: "MicrosoftYaHei-Bold";
                &:first-child {
                    font-size: 30px;
                    span {
                        font-size: 48px;
                    }
                }
                &:nth-child(2) {
                    margin-bottom: 8px;
                    color: #4cbcff;
                    font-size: 24px;
                    cursor: pointer;
                }
                &:last-child {
                    font-size: 18px;
                }
            }
        }
    }
}

.layout-main {
    .layout-item {
        width: 1920px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        margin: 0 auto;
        &:first-child {
            height: 1771px;
            background-image: url("@{imaUrl}bg_03.jpg");
        }
        &:nth-child(2) {
            height: 1762px;
            background-image: url("@{imaUrl}bg_04.jpg");
        }
        &:nth-child(3) {
            height: 1762px;
            background-image: url("@{imaUrl}bg_05.jpg");
        }
        &:nth-child(4) {
            height: 1763px;
            background-image: url("@{imaUrl}bg_06.jpg");
        }
        &:last-child {
            height: 1815px;
            background-image: url("@{imaUrl}bg_07.jpg");
        }
        .layout-title {
            text-align: center;
            img {
                width: 430px;
            }
        }
        ul {
            display: flex;
            flex-wrap: wrap;
            margin-top: 22px;
        }
        li {
            width: 368px;
            height: 484px;
            margin-right: 46px;
            margin-bottom: 30px;
            border-radius: 20px;
            background-color: #eee;
            overflow: hidden;
            &:nth-child(3n) {
                margin-right: 0;
            }

            .layout-img {
                width: 100%;
                height: 280px;
                padding: 30px 50px;
                background-color: #fff;
                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .layout-suggest {
                height: 204px;
                padding: 19px 32px;
                color: #fff;
                font-family: "MIcrosoftYaHei-Bold";
                background-color: #00bbff;

                .layout-name {
                    font-size: 30px;
                    font-weight: bold;
                }

                .layout-suggest-item {
                    font-size: 18px;
                    font-family: "MIcrosoftYaHei";
                }

                .layout-operate {
                    height: 75px;
                    // padding-left: 10px;
                    font-size: 30px;
                    text-align: center;
                    border: 4px dashed #fff;
                    border-radius: 25px;
                    color: #eb6100;
                    font-weight: bold;
                    span {
                        font-size: 48px;
                    }
                    a {
                        position: relative;
                        top: -6px;
                        margin-left: 12px;
                        padding: 10px 36.5px;
                        color: #eb6100;
                        font-size: 24px;
                        border-radius: 25px;
                        background-color: #fff;
                    }
                }
            }
        }
    }
}

.aside-nav {
    position: fixed;
    top: 10%;
    left: 50%;
    width: 276px;
    height: 787px;
    transform: translateX(-892px);
    background: url("@{imaUrl}d_btm.png") no-repeat;
    ul {
        padding: 312px 50px 48px 50px;
        li {
            width: 174px;
            height: 63px;
            // line-height: 63px;
            padding: 4px 6px;
            margin-bottom: 21px;
            text-align: center;
            border-radius: 15px;
            background-color: #ed6d3c;
            box-sizing: border-box;

            div {
                color: #fff;
                line-height: 50px;
                font-size: 34px;
                font-weight: bold;
                font-family: "MicrosoftYaHei-Bold";
                border: 2px dashed #fff;
                border-radius: 15px;
                cursor: pointer;
                &:hover,
                &.active {
                    color: #ff0000;
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>