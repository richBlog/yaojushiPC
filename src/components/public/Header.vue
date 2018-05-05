<template>
  <el-header class="layout-header">
     <!-- 顶部导航s -->
    <div class="layout-nav">
      <div class="layout-nav-container">
          <div class="layout-nav-left">
            <span>欢迎来到药居士网上药店!</span>
            <router-link to="/Login" class="layout-login">登录</router-link>
            <router-link to="/Register">注册</router-link>
          </div>
          <ul class="layout-nav-right">
            <li class="layout-nav-right-item">
              <div><span>我的药居士</span><i></i></div>
              <div class="item-menu"><router-link to="/"  v-for="item in myYaoJuShi" :key="item.id" v-text="item.name"></router-link></div>
            </li>
            <li class="layout-nav-right-item">
              <i></i><span>400-1234-123</span>
            </li>
            <li class="layout-nav-right-item">
              <div><span>我的订单</span><i></i></div>
              <div class="item-menu"><router-link to="/" v-for="item in myOrder" :key="item.id" v-text="item.name"></router-link></div>
            </li>
            <li class="layout-nav-right-item">
              <router-link to="#"><i></i>购物车<span style="color:red;" v-text="commodityNum"></span>件</router-link>
            </li>
            <li class="layout-nav-right-item">
              <div><span>客户服务</span><i></i></div>
              <div class="item-menu"><router-link to="/" v-for="item in helpCenter" :key="item.id" v-text="item.name"></router-link></div>
            </li>
            <li class="layout-nav-right-item">
              <div><span>网站导航</span><i></i></div>
              <div class="item-menu"><router-link to="/" v-for="item in webNavigation" :key="item.id" v-text="item.name"></router-link></div>
            </li>
          </ul>
      </div>
    </div>
     <!-- 顶部导航e -->
    <!-- logo+搜索 s -->
    <div class="layout-logo-container">
      <div class="layout-logo"><router-link to="/"><img src="../../assets/image/logo.png" alt="logo"></router-link></div>
      <div class="layout-search">
        <input class="search-btn" type="button" value="搜索"><input class="search-box" type="text" :placeholder="searchKeyword">
        <ul class="search-quick">
          <li class="keyword" v-for="item in quickKeyword" :key="item.id">
            <router-link to="/"  v-text="item"></router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- logo+搜索 e -->
  </el-header>
</template>
<script>
export default {
  name: "HeaderView",
  data() {
    return {
      commodityNum: 1, // 购物车数量
      myYaoJuShi: [
        { name: "我的收藏", url: "#" },
        { name: "我的优惠券", url: "#" },
        { name: "我的处方", url: "#" }
      ], // 我的药居士
      myOrder: [
        { name: "待付款订单", url: "#" },
        { name: "待确认收货", url: "#" }
      ], // 我的订单
      helpCenter: [
        { name: "帮助中心", url: "#" },
        { name: "联系我们", url: "#" },
        { name: "投诉建议", url: "#" }
      ], // 客户服务
      webNavigation: [
        { name: "特色频道", url: "#" },
        { name: "健康工具", url: "#" },
        { name: "健康知多点", url: "#" }
      ], // 网站导航
      searchKeyword: "咽喉痛", // 搜索框里面的关键字
      quickKeyword: [
        "营养保健",
        "护肤美肌",
        "立即优惠",
        "营养保健",
        "护肤美肌",
        "立即优惠"
      ] // 快捷搜索的关键字
    };
  }
};
</script>
<style lang="less">
@import "../../styles/Header.less";
</style>
