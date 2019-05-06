<template>
    <div class="product-info container">
        <!-- 放大镜图片START -->
        <div class="info-img" ref="samllBox">
            <!-- 大图开始 -->
            <div class="small-box" @mouseover="show" @mouseout="hide" @mousemove="magnifier">
                <img ref="img" v-lazy="img.imgSmall">
                <div v-show="isImg" id="lay" ref="lay"></div>
            </div>
            <!-- 大图结束 -->
            <!-- 左右滑动开始 -->
            <div class="info-img-list">
                <span class="el-icon-arrow-left" @click="toRigth"></span>
                <div class="img-box" ref="imgBox">
                    <ul class="img-list" ref="imgList" style="left:0;">
                        <li class="img-item" @click="isActive(index,$event)" :class="active == index?'active':''" v-for="(item,index) in imgList" :key="item.id">
                            <img :data-big="item.imgBig" v-lazy="item.imgBig" :data-small="item.imgSmall">
                        </li>
                    </ul>
                </div>
                <span class="el-icon-arrow-right" @click="toLeft"></span>
            </div>
            <!-- 左右滑动结束 -->
            <!-- 放大的图片开始 -->
            <div class="big-box" v-show="isImg">
                <img ref="big" v-lazy="img.imgBig">
            </div>
            <!-- 放大的图片结束 -->
            <p class="commodity-coding">商品编码：{{productList.coding}}</p>
            <p class="info-reminder">
                <span>温馨提示：</span>图片均为药居士对原品的真实拍摄，仅供参考；如遇新包装上市可能存在上新滞后，请以实物为准。</p>
        </div>
        <!-- 放大镜图片END -->

        <!-- 产品信息开始 -->
        <div class="info-words">
            <!-- 产品信息标题 -->
            <p class="info-words-name" v-text="productList.name"></p>
            <!-- 产品信息优惠活动 -->
            <p class="info-words-discount">
                {{productList.discount}}
                <a :href="'#'+productList.discountUrl">{{productList.discountUrlName}}</a>
            </p>
            <!-- 产品信息优惠价格活动 -->
            <div class="info-words-price">
                <div class="price-box">
                    <span class="words-title">门店价</span>
                    ￥
                    <span class="price">{{productList.originalPrice | money}}</span>
                </div>
                <div class="info-box">
                    <div class="words-title">活动</div>
                    <div>
                        <div class="discount-info-box">
                            <div class="discount-info">换取</div>
                            <div class="discount-info-content">{{productList.exchangeFor}}</div>
                        </div>
                        <div class="discount-info-box">
                            <div class="discount-info">满减</div>
                            <div class="discount-info-content">{{productList.fullSubtraction}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 产品信息厂家及部分药品相关信息描述 -->
            <div class="info-title-big">
                <p class="info-title-sub">
                    <span class="product-info-title">通用名</span>
                    <span>{{productList.trivialName}}</span><img v-lazy="productList.rx" alt="img"></p>
                <p class="info-title-sub">
                    <span class="product-info-title">批准文号</span>
                    <span>{{productList.approvalNumber}}</span>
                    <a href="http://app1.sfda.gov.cn/datasearch/face3/dir.html" target="_blank" class="administration">（国家食药局查询）</a>
                </p>
                <p class="info-title-sub">
                    <span class="product-info-title">生产企业</span>
                    <span>{{productList.manufacturing}}</span>
                </p>
                <div class="info-spec">
                    <div class="product-info-title">规格</div>
                    <ul class="info-spec-class">
                        <router-link @click.native="specSwitch(index)" class="info-spec-class-item" :class="index===specTab?'active':''" :to="item.url" tag="li" v-for="(item,index) in productList.spec" :key="item.id" v-text="item.info"></router-link>
                    </ul>
                </div>
                <div class="info-amount">
                    <div class="product-info-title">数量</div>
                    <div>
                        <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                        <div>
                            <el-button type="primary">加入购物车</el-button>
                            <el-input class="phone" placeholder="请输入您的手机号码" v-model="tel">
                                <el-button slot="append">药师回拨</el-button>
                            </el-input>
                        </div>
                    </div>
                </div>
                <div class="info-prompt">
                    <div class="product-info-title">提示</div>
                    <p>{{productList.prompt}}
                        <span>027-83215071</span>）</p>
                </div>
                <div class="info-promise">
                    <div class="product-info-title">承诺</div>
                    <div>
                        <i class="el-icon-check"></i>
                        <span>正品保证</span>
                        <i class="el-icon-check"></i>
                        <span>专业药师</span>
                        <i class="el-icon-check"></i>
                        <span>隐私包装</span>
                    </div>
                </div>

            </div>

        </div>
        <!-- 产品信息结束 -->

        <!-- 联系方式开始 -->
        <div class="info-other">
            <div class="info-other-promise">
                <div class="promise-item" v-for="item in promiseList" :key="item.id">
                    <img v-lazy="item.img" alt="img">
                    <p>{{item.name}}</p>
                </div>
            </div>
            <div class="info-other-phone">
                <img src="../../assets/image/tel.jpg" alt="tel">
            </div>
            <div class="info-other-wx">
                <img src="../../assets/image/wx1.png" alt="">
                <p>微信扫码关注</p>
                <p>
                    <span>立领200元</span>优惠券</p>
            </div>
        </div>
        <!-- 联系方式结束 -->
    </div>
</template>
<script>
import filterMoney from 'apis/filter.js'
export default {
    name: "productInfo",
    data() {
        return {
            specTab: 0,
            active: 0,
            storageDist: 0,
            num1: 1,
            tel: "",
            isImg: false,
            imgList:[],
            img:{},
            productList:{},
            promiseList:[]
        };
    },
    filters: {
        money(value) {
            return filterMoney.moneyFilter(value);
        }
    },
    created() {
         this.$ajax({
            url: this.$pathUrl.getProductInfo,
            methods: "get"
        })
            .then(res => {
                if (res.status == 200) {
                    const data = res.data.data;
                    this.imgList = data.imgList;
                    this.img = this.imgList[0];
                    this.productList = data.productList;
                    this.promiseList = data.promiseList;
                }
            })
            .catch(error => {
                console.log(error);
            });
    },
    mounted() {
        this.$nextTick(() => {
            let lay = this.$refs.lay;
            let img = this.$refs.img;
            let w = img.offsetWidth;
            let scale = 4;
            lay.style.width = w / scale + "px";
            lay.style.height = w / scale + "px";
        });
    },
    methods: {
        // 规格切换
        specSwitch(index) {
            console.log(index);
            this.specTab = index;
        },
        // 向左滑动
        toLeft() {
            let imgBox = this.$refs.imgBox;
            let imgList = this.$refs.imgList;
            let dist = -74;
            if (
                -(imgList.offsetWidth - imgBox.offsetWidth) <
                this.storageDist - 3
            ) {
                this.storageDist += dist;
                imgList.style.left = this.storageDist + "px";
            }
        },
        // 向右滑动
        toRigth() {
            let imgBox = this.$refs.imgBox;
            let imgList = this.$refs.imgList;
            let dist = 74;
            if (this.storageDist + 3 < 0) {
                this.storageDist += dist;
                imgList.style.left = this.storageDist + "px";
            }
        },
        // 放大镜效果的大中小图片切换
        isActive(index, e) {
            let smallSrc = e.path[0].getAttribute("data-small");
            let bigSrc = e.path[0].getAttribute("data-big");
            let img = this.$refs.img;
            let big = this.$refs.big;
            img.src = smallSrc;
            big.src = bigSrc;
            this.active = index;
        },
        // 放大镜的大图片显示
        show() {
            this.isImg = true;
        },
        // 放大镜的大图片隐藏
        hide() {
            this.isImg = false;
        },
        //   放大镜效果
        magnifier(e) {
            let img = this.$refs.img;
            let lay = this.$refs.lay;
            let box = this.$refs.samllBox;
            let big = this.$refs.big;
            let x = e.clientX - box.offsetLeft - lay.offsetWidth / 2; //获取遮罩框的位置=鼠标的位置-图片容器到视口的距离-遮罩框一半的大小
            let y =
                e.clientY -
                box.getBoundingClientRect().top -
                20 -
                lay.offsetHeight / 2;
            if (x <= 0) {
                x = 0;
            }
            if (y <= 0) {
                y = 0;
            }
            if (x > img.offsetWidth - lay.offsetWidth) {
                x = img.offsetWidth - lay.offsetWidth; //右侧边界判断
            }
            if (y > img.offsetHeight - lay.offsetHeight) {
                y = img.offsetHeight - lay.offsetHeight; //右侧边界判断
            }

            lay.style.left = x + "px";
            lay.style.top = y + "px";

            big.style.left = -x * 2 + "px";
            big.style.top = -y * 2 + "px";
        },
        handleChange() {}
    }
};
</script>
<style lang="less" scoped>
@import "../../styles/product-info.less";
</style>
