<template>
  <div class="layout-product">
      <headerView/>
      <productView/>
      <footerView/>
  </div>
</template>
<script>

import headerView from 'components/public/Header'
import productView from 'components/product/Product-main'
import footerView from "components/public/Footer";


export default {
  name:'product',
  components:{
      headerView,
      productView,
      footerView
  }
}
</script>
<style lang="less" scoped>

</style>

