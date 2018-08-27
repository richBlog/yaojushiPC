<template>
    <section class="layout-main">
        <classifiedNavView/>
        <div class="container flex layout-main-banner">
            <classifyView :active='false' />
            <!-- 轮播S -->
            <el-carousel :interval="5000" arrow="always" class="banner">
                <el-carousel-item v-for="item in bannerUrl" :key="item.id">
                    <router-link :to="item.url" target="_blank"><img alt="轮播图" v-lazy="item.img"></router-link>
                </el-carousel-item>
            </el-carousel>
            <!-- 轮播E -->
            <!-- 广告S -->
            <div class="banner-menu">

                <div class="user-img">
                    <i></i>
                </div>
                <p class="user-name">Hi~欢迎来到药居士</p>
                <div class="operate-btn">
                    <el-button size="mini" type="primary" round>
                        <router-link to="/Login">登陆</router-link>
                    </el-button>
                    <el-button size="mini" type="primary" round>
                        <router-link to="/Register">注册</router-link>
                    </el-button>
                    <el-button v-show="false" size="mini" type="info" round>退出</el-button>
                </div>
                <ul class="user-operate">
                    <li>
                        <router-link to="">订单</router-link>
                    </li>
                    <li>
                        <router-link to="">物流</router-link>
                    </li>
                    <li>
                        <router-link to="">券卡</router-link>
                    </li>
                    <li>
                        <router-link to="">积分</router-link>
                    </li>
                </ul>
                <ul class="seller-promise">
                    <li v-for="(item,index) in 6" :key="index">
                        <i></i>
                    </li>
                </ul>
                <div class="notice-info">
                    <div class="info-title">
                        <span :class="{active:tabInfo}" @click="tabNotice(1)">公告</span>
                        <span :class="{active:!tabInfo}" @click="tabNotice(0)">咨询</span>
                    </div>
                    <div>
                        <div v-show="tabInfo" class="info">
                            <router-link to="">
                                <span>[公告]</span>硬皮病公益活动献爱心 健客持续关注罕见病群体</router-link>
                            <router-link to="">
                                <span>[公告]</span>硬皮病公益活动献爱心 健客持续关注罕见病群体</router-link>
                            <router-link to="">
                                <span>[公告]</span>硬皮病公益活动献爱心 健客持续关注罕见病群体</router-link>
                        </div>
                        <div v-show="!tabInfo" class="info">
                            <router-link to="">
                                <span>[咨询]</span>硬皮病公益活动献爱心 健客持续关注罕见病群体</router-link>
                            <router-link to="">
                                <span>[咨询]</span>硬皮病公益活动献爱心 健客持续关注罕见病群体</router-link>
                            <router-link to="">
                                <span>[咨询]</span>硬皮病公益活动献爱心 健客持续关注罕见病群体</router-link>
                        </div>
                    </div>
                </div>
                <!-- <div class="other">
                    <p>生活链接</p>
                    <ul class="other-link">
                        <li v-for="(item,index) in 7" :key="index"><a href=""></a></li>
                    </ul>
                </div> -->
            </div>
            <!-- 广告E -->
        </div>
        <!-- 秒杀倒计时S -->
        <div class="container flex layout-main-seckill">
            <div class="seckill-container container">
                <div class="seckill-title">
                    <span>超值秒杀</span>
                    <i></i>
                </div>
                <div class="seckill-time">
                    <span>当前场次</span>
                    <span>05</span>
                    <span>:</span>
                    <span>06</span>
                    <span>:</span>
                    <span>55</span>
                    <span>后结束抢购</span>
                </div>
            </div>
        </div>
        <!-- 秒杀倒计时E -->
        <!-- 秒杀产品S -->
        <hotView :seckillProduct="seckillProduct"></hotView>
        <!-- 秒杀产品E -->
        <!-- 特色会场S -->
        <div class="container layout-main-characteristic">
            <div class="characteristic-line container">
                <p></p>
            </div>
            <div class="characteristic-title">
                <h1>特色会场</h1>
            </div>
            <ul class="characteristic-container container">
                <li class="characteristic-item" v-for="item in characteristic" :key="item.id">
                    <router-link :to="item.url" class="characteristic-url">
                        <div class="characteristic-fff">
                            <div class="characteristic-border">
                                <h3 class="characteristic-h2" v-text="item.name"></h3>
                                <p class="characteristic-h5" v-text="'秒杀低至'+item.discount+'折'"></p>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- 特色会场E -->
        <!-- 热门类目S -->
        <div class="container layout-main-hot" id="t1">
            <h2>热门类目</h2>
            <hotView :seckillProduct="seckillProduct"></hotView>
        </div>
        <!-- 热门类目E -->
        <!-- 热门专题S -->
        <div class="container layout-main-hot">
            <h2>热门专题</h2>
            <hotView :seckillProduct="seckillProduct"></hotView>
        </div>
        <!-- 热门专题E -->
        <!-- 电梯楼层1F S -->
        <elevatorView v-for="item in elevator" :key="item.id" :elevator="item" :id="item.tId"></elevatorView>
        <!-- 电梯楼层1F E -->
        <!-- 热门品牌S -->
        <div class="container layout-main-brand">
            <h2>热门品牌</h2>
            <ul class="brand-container container">
                <li class="brand-item" v-for="item in brand" :key="item.id">
                    <router-link :to="item.url">
                        <img alt="品牌" v-lazy="item.img">
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- 热门品牌E -->
    </section>
</template>
<script>
import hotView from "./Home-hot";
import elevatorView from "./Home-elevator";
import classifiedNavView from "../public/Classified-nav";
import classifyView from "../public/Classify";
import cm from "apis/common";

export default {
  name: "homeMain",
  components: {
    hotView,
    elevatorView,
    classifiedNavView,
    classifyView
  },
  data() {
    return {
      // 轮播图片地址 后期后台返回数据
      bannerUrl: [],
      // 轮播右边认证
      authentication: [],
      // 轮播右下角广告图片地址
      advertisement: {
        url: "",
        img: ""
      },
      // 特色会场
      characteristic: [],
      // 楼层信息
      elevator: [],
      //   热门品牌
      brand: [],
      // 秒杀产品
      seckillProduct: [],
      tabInfo: 0
    };
  },
  created() {
    this.$ajax({
      url: this.$pathUrl.getHome,
      method: "get"
    })
      .then(res => {
        const data = res.data.data;
        this.advertisement = data.advertisement;
        this.bannerUrl = data.bannerUrl;
        this.authentication = data.authentication;
        this.characteristic = data.characteristic;
        this.elevator = data.elevator;
        this.brand = data.brand;
        this.seckillProduct = data.seckillProduct;
        window.addEventListener("scroll", this.onScroll);
      })
      .catch(error => {
        console.log(error);
      });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll, false);
  },
  methods: {
    /**
     *@tabNotice    公告和咨询的切换
     */
    tabNotice(index) {
      this.tabInfo = index;
    },

    menuInfo() {
      this.$router.push();
    },
    onScroll() {
      requestAnimationFrame(this.scrollMonitor);
    },
    //   电梯滚动监控
    scrollMonitor() {
      let t = document.documentElement.scrollTop || document.body.scrollTop; //获取距离页面顶部的距离
      // t1-t7获取对应的楼层到顶部的距离
      let t1 = document.querySelector("#t1").offsetTop - 340;
      let t2 = document.querySelector("#t2").offsetTop - 240;
      let t3 = document.querySelector("#t3").offsetTop - 240;
      let t4 = document.querySelector("#t4").offsetTop - 240;
      let t5 = document.querySelector("#t5").offsetTop - 240;
      let t6 = document.querySelector("#t6").offsetTop - 240;
      let t7 = t6 + 500;

      //判断显示和隐藏的距离
      if (t > 1000 && t < t7) {
        this.$store.commit("setShow", true);
        if (t >= t1 && t < t2) {
          this.move(".t1");
        } else if (t >= t2 && t < t3) {
          this.move(".t2");
        } else if (t >= t3 && t < t4) {
          this.move(".t3");
        } else if (t >= t4 && t < t5) {
          this.move(".t4");
        } else if (t >= t5 && t < t6) {
          this.move(".t5");
        } else if (t >= t6 && t < t7) {
          this.move(".t6");
        } else {
          cm.removeClass(".life-item", "active");
        }
      } else {
        this.$store.commit("setShow", false);
      }
    },
    move(item) {
      cm.removeClass(".life-item", "active");
      document.querySelector(item).classList.add("active");
    }
  }
};
</script>
<style lang="less">
@import "../../styles/Home-main.less";
</style>
