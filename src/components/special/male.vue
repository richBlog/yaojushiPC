<template>

    <div class="special-male">
        <!-- banner开始 -->
        <div class="male-banner"><img src="~assets/image/special/male/banner.png" alt="咨询"></div>
        <!-- banner结束 -->

        <!-- 类型切换开始 -->
        <div class="groom-main container">
            <ul class="groom-tab">
                <li :class="{active: type===1}" @click="tabGroom(1)">性功能障碍</li>
                <li :class="{active: type===2}" @click="tabGroom(2)">肾虚早泄</li>
                <li :class="{active: type===3}" @click="tabGroom(3)">前列腺疾病</li>
            </ul>
            <ul class="groom-container">
                <li v-for="(item,index) in maleList.groom" :key="index">
                    <div><img :src="item.img" alt="推荐产品"></div>
                    <p>{{item.name}}</p>
                    <div>
                        <router-link :to="'/product/'+item.url">查看详情</router-link>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 类型切换结束 -->

        <!-- 产品类型开始 -->
        <div class="product-main" :id="'type'+index" v-for="(item,index) in maleList.typeList" :key="index">
            <div class="type-suggest">
                <div class="container">
                    <div class="suggest">
                        <h1>{{item.title}}</h1>
                        <div class="suggest-content">
                            <p>主要症状</p>
                            <ul>
                                <li v-for="(value,key) in item.type" :key="key">
                                    <i></i>{{value}}</li>
                            </ul>
                            <div v-html="item.suggest"></div>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="container product-content">
                <li v-for="(i,d) in item.productList" :key="d">
                    <div class="product-img"><img :src="i.img" alt="推荐产品"></div>
                    <p>{{i.name}}</p>
                    <div>
                        <router-link :to="'/product/'+i.url">查看详情</router-link>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 产品类型结束 -->

        <!-- 前列腺日常护理说明开始 -->
        <div class="layout-prostate">
            <div class="prostate-main">
                <p class="prostate-img"><img src="~assets/image/special/male/cross@3x.png" alt=" 前列腺日常护理"></p>
                <p class="prostate-name">前列腺日常护理</p>
                <ul class="container">
                    <li v-for="(item,index) in 4" :key="index">
                        <div>{{index+1}}</div>
                        <p>坚持用药治疗,一旦发现阳痿早泄等性功能下降症状,应及时就医,切勿隐瞒病情,有助于早期治疗</p>
                    </li>

                </ul>
            </div>
        </div>
        <!-- 前列腺日常护理说明结束 -->

        <!-- 电梯导航开始 -->
        <aside class="aside-nav" v-show="show">
            <div :class="{active:state===1}" @click="jump(1)">
                <i></i>性功能障碍</div>
            <div :class="{active:state===2}" @click="jump(2)">
                <i></i>肾虚早泄</div>
            <div :class="{active:state===3}" @click="jump(3)">
                <i></i>男性不育</div>
            <div :class="{active:state===4}" @click="jump(4)">
                <i></i>前列腺疾病</div>

            <a href="#"></a>
        </aside>
        <!-- 电梯导航结束 -->
    </div>
</template>

<script>
import scrollTop from "apis/scrollTop";

export default {
    data() {
        return {
            state: 0,
            type: 1,
            maleList: {},
            show: false,
            elist: []
        };
    },
    created() {
        this.$ajax({
            url: "../../static/male.json",
            method: "GET"
        })
            .then(data => {
                this.maleList = data.data.maleList;
                this.elist = [];
                for (let i in this.maleList.typeList) {
                    this.elist.push(`#type${i}`);
                }
            })
            .catch(error => {
                console.log(error);
            });
    },
    mounted() {
        window.addEventListener(
            "scroll",
            scrollTop.debounce(this.scrollEvent, 300, 300)
        );
    },
    methods: {
        // 切换推荐商品
        tabGroom(index) {
            this.type = index;
        },
        // 滚动监听的事件
        scrollEvent() {
            let top = scrollTop.top();
            let list = scrollTop.floor(this.elist);
            let last = scrollTop.element(".layout-prostate").offsetTop;
            // 判断右侧楼层导航是否显示
            this.show = scrollTop.isShow(top, list, last);
            // 判断到达对应楼层高亮
            if (top >= list[0] && top < list[1]) {
                this.state = 1;
            } else if (top >= list[1] && top < list[2]) {
                this.state = 2;
            } else if (top >= list[2] && top < list[3]) {
                this.state = 3;
            } else if (top >= list[3]) {
                this.state = 4;
            } else {
                this.state = 0;
            }
        },
        // 跳转对应的楼层
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
            }
        }
    }
};
</script>

<style lang="less" scoped>
// banner开始
.male-banner {
    text-align: center;
    background-color: #e4e8ed;
}
// banner结束

// 类型切换开始
.groom-main {
    position: relative;
    .groom-tab {
        position: absolute;
        top: -62px;
        left: 0;
        display: flex;
        li {
            width: 164px;
            height: 57px;
            line-height: 57px;
            text-align: center;
            background-color: #2b4d6f;
            font-size: 24px;
            color: #fff;
            cursor: pointer;
            &.active {
                background-color: #5a7baf;
            }
            &:hover {
                color: #ff0000;
                text-decoration: underline;
            }
        }
    }

    .groom-container {
        display: flex;
        margin-top: 2px;
        margin-bottom: 64px;
        li {
            height: 297px;
            padding: 17px 42px 0 42px;
            margin-right: 4px;
            background-color: #5a7baf;
            color: #fff;
            &:last-child {
                margin-right: 0;
            }
            div {
                text-align: center;
            }
            p {
                margin-top: 12px;
                margin-bottom: 16px;
                font-size: 16px;
            }
            img {
                width: 155px;
                height: 149px;
            }

            a {
                display: inline-block;
                width: 170px;
                height: 46px;
                line-height: 46px;
                background-color: #ff8e49;
                font-size: 24px;
                color: #fff;
            }
        }
    }
}
// 类型切换结束

// 产品类型开始

.type-suggest {
    height: 447px;
    background-color: #eee;
    .container {
        height: 100%;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: top right;

        .suggest {
            position: relative;
            top: -20px;
            right: 10px;
            width: 630px;
            height: 486px;
            background: url("../../assets/image/special/male/introduce_bg_02.png")
                no-repeat;
            background-size: contain;

            h1 {
                padding-top: 21px;
                padding-left: 225px;
                margin-bottom: 29px;
                font-size: 32px;
                color: #fff;
            }
            .suggest-content {
                padding-left: 24px;
                p {
                    width: 153px;
                    padding: 2px 0;
                    color: #36608a;
                    font-size: 20px;
                    font-weight: bold;
                    font-family: "MicrosoftYaHei-bold";
                    text-align: center;
                    background-color: #fff;
                    border-top-right-radius: 60px;
                }
                ul {
                    display: flex;
                    flex-wrap: wrap;
                    margin-top: 22px;
                    li {
                        color: #fff;
                        font-size: 18px;
                        margin-right: 22px;
                        margin-bottom: 30px;
                        i {
                            width: 12px;
                            height: 12px;
                            display: inline-block;
                            margin-right: 7px;
                            border-radius: 50%;
                            background-color: #fff;
                        }
                    }
                }
                div {
                    color: #fff;
                    font-size: 16px;
                    line-height: 21px;
                }
            }
        }
    }
}

#type0 .type-suggest .container {
    background-image: url("../../assets/image/special/male/pic_04.png");
}
#type1 .type-suggest .container {
    background-image: url("../../assets/image/special/male/pic_03.png");
}
#type2 .type-suggest .container {
    background-image: url("../../assets/image/special/male/pic_01.png");
}
#type3 .type-suggest .container {
    background-image: url("../../assets/image/special/male/pic_02.png");
}

.product-main {
    margin-bottom: 30px;
    &:nth-child(2n) .container {
        background-position: top left;
    }

    &:nth-child(2n) .container .suggest {
        padding-left: 12px;
        left: 580px;
        background-image: url("../../assets/image/special/male/introduce_bg_01.png");
    }
}

.product-content {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    li {
        width: 297px;
        margin-right: 4px;
        margin-bottom: 12px;
        border: 2px solid #2b4d6f;
        box-sizing: border-box;
        &:nth-child(4n) {
            margin-right: 0;
        }

        a {
            display: inline-block;
            width: 100%;
            padding: 13px 0;
            color: #ff8e49;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            border-top: 2px solid #2b4d6f;
        }
        p {
            padding: 10px 42px;
            margin: 2px 0;
            color: #fff;
            font-size: 16px;
            background-color: #2b4d6f;
        }

        .product-img {
            padding: 20px;
            border-bottom: 2px solid #2b4d6f;
            img {
                width: 100%;
            }
        }
    }
}
// 产品类型结束

// 前列腺日常护理说明开始
.layout-prostate {
    margin-top: 34px;
    margin-bottom: 55px;
    .prostate-main {
        height: 499px;
        padding-top: 39px;
        text-align: center;
        background: url("../../assets/image/special/male/pic_05.png") no-repeat
            center;

        .prostate-name {
            margin-bottom: 40px;
            color: #fff;
            font-size: 30px;
            font-weight: bold;
        }

        ul {
            display: flex;
            justify-content: center;
            li {
                flex: 1;
                margin-right: 30px;
                &:last-child {
                    margin-right: 0;
                }
                div {
                    width: 128px;
                    height: 128px;
                    margin: 0 auto;
                    line-height: 128px;
                    color: #fff;
                    font-size: 60px;
                    font-family: "PalatinLinotype-Boldtalic";
                    border-radius: 50%;
                    border: 1px dashed #fff;
                    &::after {
                        content: "";
                        display: block;
                        width: 50%;
                        height: 2px;
                        margin: 0 auto;
                        margin-top: 23px;
                        background-color: #fff;
                    }
                }

                p {
                    margin-top: 60px;
                    color: #fff;
                    font-size: 16px;
                }
            }
        }
    }
}

// 前列腺日常护理说明结束

.aside-nav {
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translateX(-892px);
    width: 215px;
    height: 287px;
    padding-top: 30px;
    background-color: #2b4d6f;
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;

    div {
        color: #fff;
        height: 50px;
        line-height: 50px;
        font-size: 28px;
        font-weight: bold;
        padding-left: 20px;
        cursor: pointer;
        &:hover,
        &.active {
            color: #ff0000;
            text-decoration: underline;
        }

        i {
            display: inline-block;
            width: 22px;
            height: 22px;
            margin-right: 15px;
            border-radius: 50%;
            background-color: #fff;
        }
    }
    a {
        display: block;
        height: 50px;
        background: url("../../assets/image/special/male/b_t_top.png") no-repeat
            center;
    }
}
</style>