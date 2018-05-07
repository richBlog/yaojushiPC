<template>
  <el-main>

      <classifiedNavView/>

      <!-- 面包屑导航 -->
      <div class="product-crumbs">
        <router-link to="/" tag="div" class="product-crumbs-advert"><img :src="productList.ggImage" alt="img"></router-link>
        <p class="product-prompt">药品监管部门提示：如发现本网站有任何直接或变相销售处方药行为，请保留证据，拨打12331举报，举报查实给予奖励。</p>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="item in productList.crumbs" :to="item.url"  :key="item.id">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 产品购买信息开始 -->
      <productInfoView/>
      <!-- 产品购买信息结束 -->

      <!-- 商品组合推荐开始 -->
      <combinationView/>
      <!-- 商品组合推荐结束 -->

      <!-- 产品介绍开始 -->
      <productDetailsView/>
      <!-- 产品介绍结束 -->
  </el-main>
</template>
<script>
import classifiedNavView from '../public/Classified-nav'
import productInfoView from './Product-info'
import combinationView from './Product-combination'
import productDetailsView from './Product-details'
export default {
  name: 'productMain',
  components: {
    classifiedNavView,
    productInfoView,
    combinationView,
    productDetailsView
  },
  data(){
    return {
      productList:{
        ggImage: require('../../assets/image/gg1.png'),
        crumbs:[
          {
            name: '中西药品 ',
            url: '#'
          },
          {
            name: '皮肤科 ',
            url: '#'
          },
          {
            name: '痤疮（青春痘） ',
            url: '#'
          },
          {
            name: ' 阿达帕林凝胶 ',
            url: '#'
          },
          {
            name: ' 达芙文 阿达帕林凝胶 ',
            url: '#'
          }
        ]
      }
    }
  }
}
</script>
<style lang="less" scoped>
.product-crumbs{
  width: 1200px;
  margin: 0 auto;
  padding: 0 10px;
  padding-top: 10px;
  box-sizing: border-box;
  .product-crumbs-advert{
    cursor: pointer;
  }
  .product-prompt{
    padding: 8px 0;
    color: #888;
  }

}
</style>
