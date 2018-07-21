<template>
    <div class="skin">
        <!-- bannner开始 -->
        <div class="skin-banner">
            <img src="http://p8pi9ribk.bkt.clouddn.com/skin_banner_01.png" alt="皮肤外用专题">
            <img src="http://p8pi9ribk.bkt.clouddn.com/skin_banner_02.png" alt="皮肤外用专题">
        </div>
        <!-- bannner结束 -->

        <!-- 导言开始 -->
        <div class="skin-leadin">
            <img src="http://p8pi9ribk.bkt.clouddn.com/skin_bg_01.png" alt="导言">
            <img src="http://p8pi9ribk.bkt.clouddn.com/skin_bg_02.png" alt="导言">
            <div class="leadin">
                <img src="http://p8pi9ribk.bkt.clouddn.com/skin_f_01.png" alt="导言">
            </div>
        </div>
        <!-- 导言结束 -->

        <!-- 内容专题开始 -->
        <div class="skin-body">
            <ul class="skin-main">
                <li class="skin-item" :id="'type'+index" v-for="(item,index) in skinList" :key="index">
                    <img :src="item.bg1" alt="产品信息">
                    <img :src="item.bg2" alt="产品信息">
                    <div class="skin-box">
                        <div class="skin-title"><img :src="item.titleImg" alt="产品信息"></div>
                        <ul class="skin-sub">
                            <li class="skin-info" v-for="(i,d) in item.list" :key="d">
                                <div class="info-box">
                                    <div class="price-box">
                                        <div class="price-new">
                                            <span>￥</span>
                                            <span class="price-integer">{{i.newPrice | integer}}</span>
                                            <span>.{{i.newPrice | decimal}}</span>
                                        </div>
                                        <div class="price-old">
                                            <span>￥</span>
                                            <span>{{i.oldPrice | money}}</span>
                                        </div>
                                    </div>
                                    <div class="info-img"><img src="" alt=""></div>
                                    <p class="info-name">{{i.suggest}}</p>
                                </div>
                                <div>
                                    <router-link class="info-open" :to="'/Product/'+i.url">查看详情</router-link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="skin-item">
                    <div><img :src="healthyList.bg" alt="产品信息"></div>
                    <div class="skin-box">
                        <div><img :src="healthyList.titleImg" alt="产品信息"></div>
                        <ul class="healthy-sub">
                            <li class="healthy-item" v-for="(i,d) in healthyList.list" :key="d">
                                <div class="healthy-img"><img src="" alt=""></div>
                                <p>{{i.suggest}}</p>
                                <div>
                                    <router-link class="info-open" :to="'/Product/'+i.url">进入专区</router-link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>

        </div>

        <!-- 内容专题结束 -->
        <!-- 电梯导航开始 -->
        <aside class="aside-nav" v-show="show">
            <ul>
                <li :class="{active:state===1}" @click="jump(1)">外伤感染</li>
                <li :class="{active:state===2}" @click="jump(2)">传染疾病</li>
                <li :class="{active:state===3}" @click="jump(3)">皮肤过敏</li>
                <li :class="{active:state===4}" @click="jump(4)">驱除蚊虫</li>
                <li :class="{active:state===5}" @click="jump(5)">祛暑清热</li>
            </ul>
            <div><a href="#"><img src="http://p8pi9ribk.bkt.clouddn.com/skin_b_t_top.png" alt="top"></a></div>
        </aside>
        <!-- 电梯导航结束 -->
    </div>
</template>

<script>
import filter from "apis/filter.js";
import scrollTop from "apis/scrollTop";
export default {
    data() {
        return {
            skinList: [],
            healthyList: {},
            state: 0,
            show: false,
            elist: []
        };
    },
    filters: {
        money(value) {
            return filter.moneyFilter(value);
        },
        integer(value) {
            let money = filter.moneyFilter(value);
            return filter.moneyInteger(money);
        },
        decimal(value) {
            let money = filter.moneyFilter(value);
            return filter.moneyDecimal(money);
        }
    },
    created() {
        this.$ajax({
            url: "../../static/skin.json",
            method: "GET"
        })
            .then(data => {
                console.log(data.data);
                this.skinList = data.data.skinList;
                this.healthyList = data.data.healthyList;
                this.elist = [];
                for (let i in this.skinList) {
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
.skin-banner,
.skin-leadin {
    text-align: center;
}
.skin-banner {
    font-size: 0;
}
.skin-leadin {
    position: relative;
    font-size: 0;
    .leadin {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }
}

.skin-main {
    text-align: center;
    font-size: 0;
    font-family: "MicrosoftYaHei";
    .skin-item {
        position: relative;
        .skin-box {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
        }

        .skin-sub {
            width: 1200px;
            display: flex;
            flex-wrap: wrap;
            margin-top: 30px;
            .skin-info {
                width: 236px;
                height: 355px;
                margin-bottom: 29px;
                margin-right: 5px;
                background-color: #376c70;
                border-radius: 10px;
                box-shadow: 5px 5px 20px #333;
                &:nth-child(5n) {
                    margin-right: 0;
                }

                .info-box {
                    height: 280px;
                    padding: 24px 10px 0 10px;
                    margin: 16px 6px 12px 6px;
                    background-color: #fff;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                }

                .price-box {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .price-new {
                        font-size: 0;
                        color: #f67942;
                        span {
                            font-size: 20px;
                            &.price-integer {
                                font-size: 32px;
                                font-family: "CharlemagneStd-Bold";
                            }
                        }
                    }

                    .price-old {
                        color: #9a9a9a;
                        font-size: 16px;
                        text-decoration: line-through;
                    }
                }

                .info-img {
                    height: 169px;
                    img {
                        width: 209px;
                    }
                }

                .info-name {
                    color: #4d4d4d;
                    font-size: 16px;
                }

                .info-open {
                    display: block;
                    color: #f67942;
                    font-size: 32px;
                }
            }
        }

        .healthy-sub {
            display: flex;
            .healthy-item {
                width: 295px;
                height: 341px;
                background: url("http://p8pi9ribk.bkt.clouddn.com/skin_frame_c_02.png")
                    no-repeat;
                background-size: contain;

                .healthy-img {
                    height: 236px;
                }

                p {
                    font-size: 24px;
                    color: #fff;
                }

                .info-open {
                    width: 164px;
                    height: 46;
                    line-height: 46px;
                    color: #fff;
                    margin: 15px auto;
                    padding: 2px 15px;
                    font-size: 30px;
                    border-radius: 10px;
                    background-color: #ffd373;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
        }
    }
}

.aside-nav {
    position: fixed;
    top: 10%;
    left: 50%;
    width: 227px;
    height: 540px;
    transform: translateX(-892px);
    background-color: #376c70;
    border-radius: 30px;
    ul {
        margin: 4px;
        padding: 31px 0;
        background-color: #effeff;
        border-top-right-radius: 30px;
        border-top-left-radius: 30px;
        li {
            margin-bottom: 32px;
            color: #376c70;
            font-size: 44px;
            font-weight: bold;
            text-align: center;
            cursor: pointer;
            &:hover,
            &.active {
                color: #ff0000;
                text-decoration: underline;
            }
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
    div {
        margin-top: 12px;
        text-align: center;
        cursor: pointer;
    }
}
</style>