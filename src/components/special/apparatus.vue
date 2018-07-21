<template>
    <div class="apparatus">
        <!-- 轮播开始 -->
        <div class="apparatus-banner">
            <el-carousel height="800px" :interval="5000" arrow="always">
                <el-carousel-item v-for="(item,index) in bannerList" :key="index">
                    <router-link :to="'/Product/'+item.url"><img :src="item.img" alt="banner"></router-link>
                </el-carousel-item>
            </el-carousel>

        </div>
        <!-- 轮播结束 -->

        <!-- 热门推荐开始 -->
        <div class="hot">
            <p class="hot-title">
                <i></i>
                <span>热门推荐</span>
                <i></i>
            </p>
            <switchComponent :hot="hot" />
        </div>
        <!-- 热门推荐结束 -->

        <!-- 器械小贴士开始 -->
        <div class="apparatus-img"><img src="http://p8pi9ribk.bkt.clouddn.com/apparatus_banner_01.png" alt="器械小贴士"></div>
        <!-- 器械小贴士结束 -->

        <!-- 产品类型开始 -->
        <div class="apparatus-type">
            <ul>
                <li class="type-main" :id="'type'+index" v-for="(item,index) in floorList" :key="index">
                    <div class="type-box container">
                        <div class="type-img">
                            <router-link to="/Product/1"><img :src="item.titleImg" alt=""></router-link>
                        </div>
                        <ul>
                            <li v-for="(i,d) in item.list" :key="d">
                                <div class="product-img"><img v-lazy="i.img"></div>
                                <p class="product-name">{{i.name}}</p>
                                <p class="product-price">{{'￥'+i.price}}</p>
                                <div>
                                    <router-link class="product-jump" :to="'/Product/'+i.url">了解详情</router-link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 产品类型结束 -->

        <!-- 电梯导航开始 -->
        <aside class="aside-nav" v-show="show">
            <ul>
                <li :class="{active:state===1}" @click="jump(1)">家用常备</li>
                <li :class="{active:state===2}" @click="jump(2)">家用检测</li>
                <li :class="{active:state===3}" @click="jump(3)">治疗仪器</li>
                <li :class="{active:state===4}" @click="jump(4)">康复仪器</li>
                <li :class="{active:state===5}" @click="jump(5)">保健器材</li>
            </ul>
            <div>
                <a href="#"><img src="http://p8pi9ribk.bkt.clouddn.com/apparatus_b_t_top.png" alt="TOP"></a>
            </div>
        </aside>
        <!-- 电梯导航结束 -->
    </div>
</template>

<script>
import switchComponent from "components/public/switchComponent";
import scrollTop from "apis/scrollTop";
export default {
    components: {
        switchComponent
    },
    data() {
        return {
            bannerList: [],
            apparatusList: [],
            floorList: [],
            hot: [],
            state: 0,
            show: false,
            elist: []
        };
    },
    created() {
        this.$ajax({
            url: "../../../static/apparatus.json",
            method: "GET"
        })
            .then(data => {
                this.bannerList = data.data.bannerList;
                this.floorList = data.data.floorList;
                this.hot = data.data.hot;
                this.elist = [];
                for (let i in this.floorList) {
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
.apparatus-banner {
    width: 1920px;
    margin: 0 auto;
}

.hot {
    padding-top: 33px;
    padding-bottom: 104px;
    .hot-title {
        font-size: 24px;
        text-align: center;
        margin-bottom: 44px;
        span {
            color: #1ad198;
            font-family: "MicrosoftYaHei";
        }
        i {
            display: inline-block;
            width: 12px;
            height: 12px;
            background-color: #1ad198;
            transform: rotateZ(45deg);
        }
    }
}

.apparatus-img {
    font-size: 0;
    text-align: center;
    margin-bottom: 195px;
}

// 产品类型开始
.type-main {
    padding: 79px 0;
    &:nth-child(odd) {
        background-color: #f3f3f3;
    }
    .type-box {
        display: flex;
        ul {
            display: flex;
            flex-wrap: wrap;
            li {
                width: 215px;
                height: 285px;
                background-color: #fff;
                border: 1px solid #ddd;
                margin-right: 5px;
                margin-bottom: 5px;
                text-align: center;
                font-size: 18px;
                font-family: "MicrosoftYaHei-Bold";
                &:nth-child(4n) {
                    margin-right: 0;
                }
                .product-img {
                    height: 169px;
                }

                .product-name {
                    color: #878787;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }

                .product-price {
                    color: #fc1b04;
                    margin-top: 15px;
                    margin-bottom: 10px;
                }

                .product-jump {
                    display: block;
                    width: 128px;
                    height: 31px;
                    line-height: 31px;
                    margin: 0 auto;
                    color: #fff;
                    background-color: #fc5100;
                    border-radius: 15px;
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
    width: 216px;
    text-align: center;
    transform: translateX(-892px);
    border-radius: 50px;
    box-shadow: 0 0 20px #666;
    background-color: #fff;
    ul {
        padding-top: 37px;
        li {
            color: #1ad198;
            font-weight: bold;
            font-size: 30px;
            font-family: "MicrosoftYaHei-Bold";
            margin-bottom: 27px;
            cursor: pointer;
            &:hover,
            &.active {
                color: #ff0000;
                text-decoration: underline;
            }
        }
    }
    div {
        margin-bottom: 27px;
    }
}
</style>