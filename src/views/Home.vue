<template>
    <div class="layout-home">
        <el-header>
            <headerView></headerView>
        </el-header>
        <el-main>
            <homeMain></homeMain>
        </el-main>
        <el-footer>
            <footerView></footerView>
        </el-footer>
        <lifeView></lifeView>
        <navigationView></navigationView>
    </div>
</template>
<script>
import headerView from "components/public/Header";
import homeMain from "components/home/Home-main";
import footerView from "components/public/Footer";
import lifeView from "components/home/Home-life";
import navigationView from "components/home/Home-navigation";
import cm from "apis/common";
export default {
    name: "Home",
    components: {
        headerView,
        homeMain,
        footerView,
        lifeView,
        navigationView
    }
};
</script>
<style lang="less">
.el-header,
.el-footer {
    padding: 0;
    color: #333;
    text-align: center;
    line-height: 30px;
    height: auto !important;
}
</style>
