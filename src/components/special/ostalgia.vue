<template>
    <div class="ostalgia">
        <!-- banner开始 -->
        <div class="ostalgia-banner">
            <div><img src="http://p8pi9ribk.bkt.clouddn.com/ostalgia_banner.png" alt="风湿骨痛"></div>
        </div>
        <!-- banner结束 -->

        <!-- 产品推荐开始 -->
        <div class="ostalgia-groom container">
            <div class="groom-img"><img :src="groom.titleImg" alt="新品推荐"></div>
            <ul>
                <li v-for="(item,index) in groom.list" :key="index">
                    <div class="product-img"><img src="" alt=""></div>
                    <p class="product-name">{{item.name}}</p>
                    <p class="product-depict">{{item.depict}}</p>
                    <p class="product-remind">正品正货,如有问题请咨询药师。</p>
                    <p>
                        <router-link class="product-jump" :to="'/Product/'+item.url">立即购买</router-link>
                    </p>
                    <p class="product-price">RMB:￥{{item.price}}起</p>
                </li>
            </ul>
        </div>
        <!-- 产品推荐结束 -->

        <!-- 产品类型开始 -->
        <div class="ostalgia-body">
            <ul class="ostalgia-type">
                <li class="type-item" :style="{backgroundImage: 'url('+item.bg+')'}" v-for="(item,index) in ostalgiaList" :key="index">
                    <div><img :src="item.img" alt="风湿骨痛专题"></div>
                    <ul class="product-main container">
                        <li class="product-item" v-for="(i,d) in item.list" :key="d">
                            <div class="product-bg"><img src="" alt=""></div>
                            <div class="product-info">
                                <div>
                                    <router-link :to="'/Product/'+i.url"></router-link>
                                </div>
                                <div>
                                    <p class="product-name">{{i.name}}</p>
                                    <p class="product-price">价格：
                                        <span>￥{{i.price}}</span>
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li class="type-item-last"></li>
            </ul>
        </div>
        <!-- 产品类型结束 -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            ostalgia: [],
            groom: {},
            ostalgiaList: []
        };
    },
    created() {
        this.$ajax({
            url: "../../static/ostalgia.json",
            method: "GET"
        })
            .then(data => {
                console.log(data);
                this.groom = data.data.groom;
                this.ostalgiaList = data.data.ostalgiaList;
            })
            .catch(err => {
                consoel.log(err);
            });
    }
};
</script>

<style lang="less" scoped>
.ostalgia-banner {
    height: 800px;
    position: relative;
    overflow: hidden;
    div {
        width: 1920px;
        max-width: 1920px;
        position: absolute;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        img {
            width: 100%;
            height: 100%;
        }
    }
}

// 产品推荐开始
.ostalgia-groom {
    margin-top: 42px;
    font-family: "MicrosoftYaHei";
    text-align: center;
    ul {
        display: flex;
        margin-top: 62px;
        margin-bottom: 123px;
        li {
            width: 268px;
            color: #3f403f;
            margin-right: 35px;
            &:last-child {
                margin-right: 0;
            }

            .product-img {
                width: 100%;
                height: 280px;
                background: url("http://p8pi9ribk.bkt.clouddn.com/ostalgia_commodity_bg_02.png")
                    no-repeat center;
                background-size: contain;
            }

            .product-name {
                margin-top: 8px;
                margin-bottom: 10px;
                font-size: 18px;
                font-weight: bold;
            }

            .product-remind {
                font-size: 14px;
            }

            .product-jump {
                display: block;
                width: 94px;
                height: 24px;
                margin: 8px auto;
                padding: 5px 15px;
                color: #fbfffb;
                border-radius: 10px;
                background-color: #a40000;
            }
        }
    }
}
// 产品推荐结束

// 产品类型开始
.ostalgia-type {
    position: relative;
    overflow: hidden;
    .type-item-last{
        // width: 100%;
        position: relative;
        top: -80px;
        height: 159px;
        background: url('http://p8pi9ribk.bkt.clouddn.com/ostalgia_c_bg_05.png') no-repeat center;
        z-index: -1;
        margin-bottom: -80px;
    }
    .type-item {
        // width: 1920px;
        height: 1616px;
        background-repeat: no-repeat;
        background-position: center;
        text-align: center;
        z-index: 100;
        &:first-child {
            height: 1713px;
            padding-top: 41px;
        }
        &:nth-child(2) {
            height: 1713px;
        }
    }

    .product-main {
        margin-top: 345px;
        display: flex;
        flex-wrap: wrap;
        .product-item {
            margin-top: 60px;
            margin-right: 32px;
            &:nth-child(4n) {
                margin-right: 0;
            }
            .product-info {
                display: flex;
                justify-content: center;
            }
            a {
                display: block;
                width: 29px;
                height: 53px;
                margin-right: 10px;
                background: url("../../assets/image/special/ostalgia/b_buy.png")
                    no-repeat;
                background-size: contain;
            }
            .product-name {
                padding: 3px 0;
                color: #3f403f;
                font-size: 20px;
                font-weight: bold;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

            .product-price {
                color: #000;
                font-size: 16px;
                font-family: "MicrosoftYaHei";
                text-align: left;
                span {
                    color: #a40000;
                }
            }
        }
        .product-bg {
            width: 266px;
            height: 279px;
            background: url("http://p8pi9ribk.bkt.clouddn.com/ostalgia_comodity_bg_01.png")
                no-repeat;
            background-size: contain;
        }
    }
}
// 产品类型结束
</style>