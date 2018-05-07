<template>
  <div class="layout-product">
      <headerView/>
      <productView/>
      <footerView/>
      <navigationView/>
  </div>
</template>
<script>

import headerView from 'components/public/Header'
import productView from 'components/product/Product-main'
import footerView from "components/public/Footer";
import navigationView from "components/home/Home-navigation";

export default {
  name:'product',
  components:{
      headerView,
      productView,
      footerView,
      navigationView
  }
}
</script>
<style lang="less" scoped>

</style>

