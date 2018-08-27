<template>
    <div class="woman">
        <!-- banner开始 -->
        <div class="woman-banner">
            <div>
                <img src="http://p8pi9ribk.bkt.clouddn.com/woman_banner_01.png" alt="女性分类">
                <img src="http://p8pi9ribk.bkt.clouddn.com/woman_banner_02.png" alt="女性分类">
                <img src="http://p8pi9ribk.bkt.clouddn.com/woman_banner_03.png" alt="女性分类">
            </div>
        </div>
        <!-- banner结束 -->
        <!-- 新品推荐开始 -->
        <div class="groom-main container">
            <div class="groom-title">新品推荐</div>
            <div class="groom-box">
                <div class="product-box">
                    <ul>
                        <li v-for="(item,index) in groomList" :key="index">
                            <p class="product-price">
                                <span>￥</span>
                                <span class="price-intager">{{item.price | intager}}</span>.
                                <span class="price-decimal">{{item.price | decimal}}</span>
                            </p>
                            <div class="product-img"><img :src="item.img" :alt="item.name"></div>
                            <p class="product-name">{{item.name}}</p>
                            <p class="product-depict">{{item.depict}}</p>
                            <div>
                                <router-link :to="'/Product/'+item.url">查看详情</router-link>
                            </div>
                        </li>

                    </ul>
                </div>
                <a class="btn btn-left"></a>
                <a class="btn btn-right"></a>
            </div>
        </div>
        <!-- 新品推荐结束 -->

        <!-- 产品类型开始 -->
        <ul class="woman-type">
            <li class="type-item" :id="'type'+index" v-for="(item,index) in productList" :key="index">
                <div class="groom-title">{{item.name}}</div>
                <ul class="item-main">
                    <li class="item" v-for="(i,d) in item.list" :key="d">
                        <div>
                            <p class="product-name">{{i.name}}</p>
                            <p class="product-depict">{{i.depict}}</p>
                            <p class="product-price">
                                <span>￥</span>
                                <span class="price-intager">{{i.price | intager}}</span>
                                .
                                <span>{{i.price | decimal}}</span>
                            </p>
                            <p class="product-jump">
                                <router-link :to="'/Product/'+i.url">查看详情</router-link>
                            </p>
                        </div>
                        <div class="product-img"><img :src="i.img" :alt="i.name"></div>
                    </li>
                    <li class="more">
                        <router-link :to="{path: '/Search',query:{keyword: item.name}}">MORE</router-link>
                    </li>
                </ul>
            </li>
        </ul>

        <!-- 产品类型结束 -->

        <!-- 电梯导航开始 -->
        <aside class="aside-nav" v-show="show">
            <ul>
                <li :class="{active:state===1}" @click="jump(1)">益气补血</li>
                <li :class="{active:state===2}" @click="jump(2)">妇科炎症</li>
                <li :class="{active:state===3}" @click="jump(3)">排卵验孕</li>
                <li :class="{active:state===4}" @click="jump(4)">美体瘦身</li>
                <li :class="{active:state===5}" @click="jump(5)">产后恢复</li>
            </ul>

        </aside>
        <!-- 电梯导航结束 -->

    </div>
</template>

<script>
import filterMoney from "apis/filter.js";
import scrollTop from "apis/scrollTop";
export default {
    data() {
        return {
            state: 0,
            show: false,
            elist: [],
            groomList: [],
            productList: []
        };
    },
    filters: {
        intager(value) {
            return filterMoney.moneyInteger(value);
        },
        decimal(value) {
            return filterMoney.moneyDecimal(value);
        }
    },
    created() {
        this.$ajax({
            url: "../../static/woman.json",
            method: "GET"
        })
            .then(data => {
                console.log(data);
                this.groomList = data.data.groom;
                this.productList = data.data.productList;
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
@imaUrl: "../../assets/image/special/woman/";
@font-face {
    font-family: 'woman';
    src: url("../../assets/fonts/造字工房毅黑体.otf");
}
.woman-banner {
    height: 799px;
    position: relative;
    overflow: hidden;
    font-size: 0;
    div {
        width: 1920px;
        max-width: 1920px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        font-size: 0;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
// 新品推荐开始
.groom-main {
    position: relative;
    padding-top: 168px;
}
.groom-title {
    position: absolute;
    top: -66.5px;
    left: 50%;
    transform: translateX(-50%);
    width: 676px;
    height: 133px;
    line-height: 133px;
    color: #ff788f;
    text-align: center;
    font-size: 72px;
    font-family: "woman";
    border-radius: 30px;
    background-color: #fff;
    box-shadow: 0 0 20px #b9b9b9;
}
.groom-box {
    position: relative;
    .product-box {
        padding: 20px;
        overflow: hidden;
        box-sizing: border-box;
    }
    ul {
        display: flex;
        li {
            width: 360px;
            height: 494px;
            margin-right: 59px;
            border-radius: 30px;
            overflow: hidden;
            box-shadow: 0 0 20px #b9b9b9;
            &:nth-child(3n) {
                margin-right: 0;
            }
        }
        .product-price {
            margin-top: 28px;
            padding-left: 23px;
            color: #ff788f;
            font-size: 25px;
            font-family: "MicrosoftYaHei";
            .price-intager {
                font-size: 50px;
            }
        }

        .product-img {
            width: 100%;
            height: 234px;
            padding: 15px 50px;
            img {
                width: 100%;
                height: 100%;
            }
        }

        .product-name {
            padding: 0 15px;
            color: #ff788f;
            font-size: 34px;
            font-weight: bold;
            font-family: "MicrosoftYaHei-Bold";
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .product-depict {
            padding: 0 18px;
            color: #ff788f;
            font-size: 24px;
            font-family: "SimHei";
        }

        a {
            display: block;
            margin-top: 9px;
            color: #fffefe;
            font-size: 40px;
            font-family: "AdobeHeitiStd-Regular";
            text-align: center;
            background-color: #ff788f;
        }
    }
    .btn {
        position: absolute;
        top: 50%;
        width: 105px;
        height: 105px;
        transform: translateY(-50%);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    .btn-left {
        left: -148px;
        background-image: url("@{imaUrl}l@3x.png");
    }
    .btn-right {
        right: -148px;
        background-image: url("@{imaUrl}r@3x.png");
    }
}

// 新品推荐结束

// 产品类型开始
.woman-type {
    margin-top: 284.5px;
    .type-item {
        position: relative;
        padding-top: 100.5px;
        padding-bottom: 76px;
        margin: 0 auto;
        margin-bottom: 142px;
        background-color: #ffb3b5;
        .item-main {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            width: 1285px;
            height: 1058px;
            margin: 0 auto;
            border-radius: 30px;
            border-top-right-radius: 0;
            background-color: #fff;
            box-shadow: 0 0 20px #b9b9b9;
        }
        .more {
            position: absolute;
            top: 61px;
            right: -123px;
            width: 184px;
            height: 62px;
            line-height: 62px;
            font-size: 36px;
            font-weight: bold;
            font-family: "MicrosoftYaHei-Bold";
            text-align: center;
            border-top-left-radius: 30px;
            border-top-right-radius: 30px;
            background-color: #fff;
            box-shadow: 0 2px 20px #b9b9b9;
            transform: rotate(90deg);
            a {
                color: #ff788f;
            }
        }
        .item {
            display: flex;
            flex-wrap: wrap;
            width: 50%;
            div {
                width: 50%;
                &:first-child {
                    padding: 48px 0 45.5px 50px;

                    .product-name {
                        color: #ff788f;
                        font-size: 30px;
                        font-weight: bold;
                        font-family: "MicrosoftYaHei-Bold";
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }

                    .product-depict {
                        // padding: 0 18px;
                        color: #727272;
                        font-size: 20px;
                        font-family: "SimHei";
                    }

                    .product-price {
                        margin-top: 47px;
                        color: #ff788f;
                        font-size: 25px;
                        font-family: "MicrosoftYaHei";
                        .price-intager {
                            font-size: 50px;
                        }
                    }
                    .product-jump {
                        margin-top: 26px;
                        text-align: right;
                    }

                    a {
                        padding: 10px 33px;
                        color: #fffefe;
                        font-size: 30px;
                        border-radius: 30px;
                        background-color: #ff788f;
                    }
                }
                &.product-img {
                    padding: 20px;
                    height: 340px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
}
// 产品类型结束
.aside-nav {
    position: fixed;
    top: 10%;
    left: 50%;
    width: 208px;
    height: 482px;
    transform: translateX(-892px);
    background-color: #ff92a9;
    border-radius: 100px;
    ul {
        padding: 83px 19px;
        li {
            line-height: 60px;
            color: #ff788f;
            text-align: center;
            font-size: 30px;
            // font-weight: bold;
            font-family: "woman";
            background-color: #fff;
            cursor: pointer;
            &:hover,
            &.active {
                color: #ff0000;
                text-decoration: underline;
            }
            &:first-child {
                padding-top: 10px;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
            }
            &:last-child {
                padding-bottom: 10px;
                border-bottom-left-radius: 20px;
                border-bottom-right-radius: 20px;
            }
        }
    }
}
</style>