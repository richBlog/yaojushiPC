<template>
  <div class="layout-home">
    <el-header>
      <HeaderView></HeaderView>
    </el-header>
    <el-main>
      <HomeMain></HomeMain>
    </el-main>
    <el-footer>
      <footerView></footerView>
    </el-footer>
  </div>
</template>
<script>
import HeaderView from '../Header/Header'
import HomeMain from './Home-main'
import footerView from '../layout/Footer'

export default {
  name: 'Home',
  components: {
    HeaderView,
    HomeMain,
    footerView
  }
}
</script>
<style lang="less">
  .el-header, .el-footer {
    padding: 0;
    color: #333;
    text-align: center;
    line-height: 30px;
    height: auto !important;
  }
</style>
