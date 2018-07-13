<template>
    <el-header class="layout-header">
        <NavView/>
        <!-- logo+搜索 s -->
        <HeadSearch/>
        <!-- logo+搜索 e -->
    </el-header>
</template>
<script>
import NavView from "components/public/NavView";
import HeadSearch from "components/public/HeadSearch";

export default {
    components: {
        NavView,
        HeadSearch
    },
    name: "HeaderView"
};
</script>
<style lang="less">
.layout-header {
    width: 100%;
    padding: 0;
    height: auto !important;
}
</style>
