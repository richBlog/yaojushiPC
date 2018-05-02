<template>
  <div class="layout-header">
     <!-- 顶部导航s -->
    <div class="layout-nav">
      <div class="layout-nav-container">
          <div class="layout-nav-left">
            <span>欢迎来到药居士网上药店!</span>
            <router-link to="login" class="layout-login">登录</router-link>
            <router-link to="register">注册</router-link>
          </div>
          <ul class="layout-nav-right">
            <li class="layout-nav-right-item">
              <div><span>我的药居士</span><i></i></div>
              <div class="item-menu"><router-link to=""  v-for="item in myYaoJuShi" :key="item.id" v-text="item.name"></router-link></div>
            </li>
            <li class="layout-nav-right-item">
              <i></i><span>400-1234-123</span>
            </li>
            <li class="layout-nav-right-item">
              <div><span>我的订单</span><i></i></div>
              <div class="item-menu"><router-link to="/" v-for="item in myOrder" :key="item.id" v-text="item.name"></router-link></div>
            </li>
            <li class="layout-nav-right-item">
              <i></i><span v-text="'购物车'+ commodityNum +'件'"></span>
            </li>
            <li class="layout-nav-right-item">
              <div><span>客户服务</span><i></i></div>
              <div class="item-menu"><router-link to="" v-for="item in helpCenter" :key="item.id" v-text="item.name"></router-link></div>
            </li>
            <li class="layout-nav-right-item">
              <div><span>网站导航</span><i></i></div>
              <div class="item-menu"><router-link to="" v-for="item in webNavigation" :key="item.id" v-text="item.name"></router-link></div>
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
  </div>
</template>
<script>
export default {
  name: 'HeaderView',
  data () {
    return {
      commodityNum: 1, // 购物车数量
      myYaoJuShi: [
        {name: '我的收藏', url: '#'},
        {name: '我的优惠券', url: '#'},
        {name: '我的处方', url: '#'}
      ], // 我的药居士
      myOrder: [
        {name: '待付款订单', url: '#'},
        {name: '待确认收货', url: '#'}
      ], // 我的订单
      helpCenter: [
        {name: '帮助中心', url: '#'},
        {name: '联系我们', url: '#'},
        {name: '投诉建议', url: '#'}
      ], // 客户服务
      webNavigation: [
        {name: '特色频道', url: '#'},
        {name: '健康工具', url: '#'},
        {name: '健康知多点', url: '#'}
      ], // 网站导航
      searchKeyword: '咽喉痛', // 搜索框里面的关键字
      quickKeyword: ['营养保健', '护肤美肌', '立即优惠', '营养保健', '护肤美肌', '立即优惠'] // 快捷搜索的关键字
    }
  }
}
</script>
<style lang="less">
  // 顶部导航S
  .layout-nav{
    width: 100%;
    background-color: #f1f1f1;
    .layout-nav-container{
      width: 1200px;
      height: 30px;
      margin: 0 auto;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      //导航左边s
      .layout-nav-left{
        a{
          color: #2c7fe8;
          &.layout-login{
            margin: 0 14px;
          }
        }
      }
      //导航左边e
      //导航右边s
      .layout-nav-right{
        display: flex;
        .layout-nav-right-item{
          position: relative;
          margin-left: 15px;
          padding: 0 3px;
          &:nth-child(1),
          &:nth-child(3),
          &:nth-child(5),
          &:nth-child(6){
            width: 86px;
          }
          // 下拉小箭头
          i{
            display: inline-block;
            width: 10px;
            height: 5px;
            background-image: url(../../assets/image/ico_t2.png);
            background-repeat: no-repeat;
            background-position-y: -123px;
          }
          // 联系电话
          &:nth-child(2) i,
          &:nth-child(4) i{
            width: 13px;
            height: 13px;
            background-position-x: -3px;
            background-position-y: -48px;
            margin-right: 8px;
          }
          // 购物车
          &:nth-child(4) i{
            background-position-y: -13px;
          }
          //鼠标移入时弹出菜单
          .item-menu{
            display: none;
            z-index: 999;
          }
          &:nth-child(1):hover,
          &:nth-child(3):hover,
          &:nth-child(5):hover,
          &:nth-child(6):hover{
            background-color: #fff;
          }
          &:nth-child(1):hover .item-menu,
          &:nth-child(3):hover .item-menu,
          &:nth-child(5):hover .item-menu,
          &:nth-child(6):hover .item-menu{
            display: block;
            position: absolute;
            left: 0;
            width: 86px;
            background-color: #fff;
            a{
              display: block;
              &:hover{
                background-color: #f1f1f1;
              }
            }
          }
          // 下拉图片切换
          &:nth-child(1):hover i,
          &:nth-child(3):hover i,
          &:nth-child(5):hover i,
          &:nth-child(6):hover i{
            background-position-y: -136px;
          }
        }
      }
      //导航右边e
    }
  }
  // 顶部导航E
  // logo+搜索S
  .layout-logo-container{
    width: 1200px;
    display: flex;
    padding: 0 10px;
    margin: 0 auto;
    margin-top: 30px;
    .layout-logo{
      margin-right: 120px;
    }
    .layout-search{
      position: relative;
      // 搜索按钮
      .search-btn{
        width: 78px;
        height: 40px;
        background-color: #0a75e7;
        border-color: transparent;
        color: #fff;
        position: absolute;
        top: 0;
        left: 513px;
        cursor: pointer;
        font-size: 16px;
      }
      // 搜索输入框
      .search-box{
        width: 513px;
        height: 40px;
        padding-left: 10px;
        border: 2px solid #0a75e7;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    // 快捷搜索关键字
    .search-quick{
      display: flex;
      margin-top: 40px;
      .keyword {
        margin-right: 18px;
        a:hover{
          color: red;
        }
      }
    }
  }
    // logo+搜索E
</style>
