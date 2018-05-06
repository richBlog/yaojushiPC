<template>
  <div class="product-info">
        <!-- 放大镜图片START -->
        <div class="info-img" ref="samllBox">
            <!-- 大图开始 -->
            <div class="small-box" @mouseover="show" @mouseout="hide"  @mousemove="magnifier">
                <img ref="img" src="../../assets/image/cp1.jpg" alt="img" >
                <div v-show="isImg" id="lay" ref="lay"></div>
            </div>
            <!-- 大图结束 -->
            <!-- 左右滑动开始 -->
            <div class="info-img-list">
                <span class="el-icon-arrow-left"></span>
                <span class="el-icon-arrow-right"></span>
                <ul class="img-list">
                    <li class="img-item" v-for="item in imgList" :key="item.id">
                        <img :src="item.img" alt="img" :data-small="item.imgSmall" :data-big="item.imgBig">
                    </li>
                </ul>
            </div>
            <!-- 左右滑动结束 -->
            <!-- 放大的图片开始 -->
            <div class="big-box" v-show="isImg">
                <img ref="big"  src="../../assets/image/cpmax1.jpg" alt="img">
            </div>
            <!-- 放大的图片结束 -->
            <div></div>
        </div>
        <!-- 放大镜图片END -->

        <!-- 产品信息开始 -->
        <div class="info-words">
            <!-- 产品信息标题 -->
            <p class="info-words-name" v-text="productList.name"></p>
            <!-- 产品信息优惠活动 -->
            <p class="info-words-discount">
                {{productList.discount}}
                <router-link :to="productList.discountUrl">{{productList.discountUrlName}}</router-link>
            </p>
            <!-- 产品信息优惠价格活动 -->
            <div class="info-words-price">
                <div></div>
                <div></div>
            </div>
            <!-- 产品信息厂家及部分药品相关信息描述 -->
            <div class="info-title-big">
                <p class="info-title-sub"><span class="product-info-title">通用名</span><span>{{productList.trivialName}}</span><img :src="productList.rx" alt="img"></p>
                <p class="info-title-sub"><span class="product-info-title">批准文号</span><span>{{productList.approvalNumber}}</span><a href="http://app1.sfda.gov.cn/datasearch/face3/dir.html" target="_blank" class="administration">（国家食药局查询）</a></p>
                <p class="info-title-sub"><span class="product-info-title">生产企业</span><span>{{productList.manufacturing}}</span></p>
                <div class="info-spec">
                    <div class="product-info-title">规格</div>
                    <ul class="info-spec-class">
                        <router-link class="info-spec-class-item" :class="index===0?'active':''" :to="item.url" tag="li" v-for="(item,index) in productList.spec" :key="item.id" v-text="item.info"></router-link>
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
                    <p>{{productList.prompt}} <span>400-8811-020</span>）</p>
                </div>
                <div class="info-promise">
                    <div class="product-info-title">承诺</div>
                    <div>
                        <i class="el-icon-check"></i><span>正品保证</span>
                        <i class="el-icon-check"></i><span>专业药师</span>
                        <i class="el-icon-check"></i><span>隐私包装</span>
                    </div>
                </div>

            </div>
            
        </div>
        <!-- 产品信息结束 -->

        <!-- 联系方式开始 -->
        <div class="info-other">
            <div class="info-other-promise">
                <div class="promise-item" v-for="item in promiseList" :key="item.id">
                    <img :src="item.img" alt="img">
                    <p>{{item.name}}</p>
                </div>
            </div>
            <div class="info-other-phone">
                <img src="../../assets/image/tel.png" alt="tel">
            </div>
            <div class="info-other-wx">
                <img src="../../assets/image/wx1.png" alt="">
                <p>微信扫码关注</p>    
                <p><span>立领200元</span>优惠券</p>    
            </div>
        </div>
        <!-- 联系方式结束 -->
  </div>
</template>
<script>
export default {
  name: "productInfo",
  data() {
    return {
      imgList: [
        {
          img: require("../../assets/image/cpmin1.jpg"),
          imgSmall: require("../../assets/image/cp1.jpg"),
          imgBig: require("../../assets/image/cpmax1.jpg")
        },
        {
          img: require("../../assets/image/cpmin2.jpg"),
          imgSmall: require("../../assets/image/cp2.jpg"),
          imgBig: require("../../assets/image/cpmax2.jpg")
        },
        {
          img: require("../../assets/image/cpmin3.jpg"),
          imgSmall: require("../../assets/image/cp3.jpg"),
          imgBig: require("../../assets/image/cpmax3.jpg")
        },
        {
          img: require("../../assets/image/cpmin4.jpg"),
          imgSmall: require("../../assets/image/cp4.jpg"),
          imgBig: require("../../assets/image/cpmax4.jpg")
        },
        {
          img: require("../../assets/image/cpmin5.jpg"),
          imgSmall: require("../../assets/image/cp5.jpg"),
          imgBig: require("../../assets/image/cpmax5.jpg")
        }
      ],
      productList: {
        name: "达芙文 阿达帕林凝胶 0.1%:30g",
        rx: require("../../assets/image/rx.png"),
        discount:
          "【月中钜惠】低至50元，满3盒送价值27元眼贴+棉签+湿巾，数量有限哦！ 全场低至11.11元，美",
        discountUrlName: " 颜就趁现在啦！抢>>",
        discountUrl: "/",
        originalPrice: 57,
        concessionalRate: 0,
        exchangeFor:
          "满10.00元加15.90元，即可获得价值39.90元的 爱及恩牌天然维生素E咀嚼片20g(1g*20片) 1件；加5.90元，即可获得价值15.00元的白云山 蛇油护手霜 80g/瓶 1件",
        fullSubtraction:
          "满3件+0.01元，即可获得：仙琚 棉签 1包1件+舒瞳 双金眼贴 2贴1件+优选通用清洁湿巾160mm*180mm*10片1件",
        trivialName: "阿达帕林凌胶",
        approvalNumber: "注册证号H20160022",
        manufacturing: "Lzboratoires  GALDERMA",
        spec: [
          {
            url: "#",
            info: "0.1%:30g"
          },
          {
            url: "#",
            info: "10支起 | 50元/支"
          },
          {
            url: "#",
            info: "20支起 | 70元/支"
          },
          {
            url: "#",
            info: "30支起 | 80元/支"
          },
          {
            url: "#",
            info: "40支起 | 82元/支"
          }
        ],
        prompt:
          "本品为处方药，您成功预订后，展示药品的药店会根据处方审核结果主动与您联系。（如需协助请拨打"
      },
      num1: 1,
      tel: "",
      promiseList: [
        {
          name: "正品保证",
          img: require("../../assets/image/zheng1.png")
        },
        {
          name: "专业药师",
          img: require("../../assets/image/zheng2.png")
        },
        {
          name: "79元包邮",
          img: require("../../assets/image/zheng3.png")
        },
        {
          name: "隐私包装",
          img: require("../../assets/image/zheng4.png")
        }
      ],
      isImg: false
    };
  },
  mounted() {
    window.onload = () => {
      let lay = this.$refs.lay;
      let img = this.$refs.img;
      let w = img.offsetWidth;
      let h = img.offsetHeight;

      let scale = 4;
      console.log(h);
      lay.style.width = w / scale + "px";
      lay.style.height = h / scale + "px";
    };
  },
  methods: {
    show() {
      this.isImg = true;
    },
    hide() {
      this.isImg = false;
    },
    //   放大镜效果
    magnifier(e) {
      let img = this.$refs.img;
      let lay = this.$refs.lay;
      let box = this.$refs.samllBox;
      let big = this.$refs.big;
      let x = e.clientX - box.offsetLeft - lay.offsetWidth / 2;
      let y =
        e.clientY - box.getBoundingClientRect().top - 20 - lay.offsetHeight / 2;
      if (x <= 0) {
        x = 0;
      }
      if (y <= 0) {
        y = 0;
      }
      if (x > img.offsetWidth - lay.offsetWidth) {
        console.log("1");
        x = img.offsetWidth - lay.offsetWidth; //右侧边界判断
      }
      if (y > img.offsetHeight - lay.offsetHeight) {
        console.log("2");
        y = img.offsetHeight - lay.offsetHeight; //右侧边界判断
      }

      lay.style.left = x + "px";
      lay.style.top = y + "px";

      big.style.left = -x * 2.1 + "px";
      big.style.top = -y * 2.1 + "px";
    },
    handleChange() {}
  }
};
</script>
<style lang="less" scoped>
@import "../../styles/product-info.less";
</style>
