<template>
    <div class="shopping-cart-header">
        <NavView/>
        <!-- 进度条开始 -->
        <el-row :gutter="20" class="layout-logo-container container">
            <el-col :span="12" class="layout-logo">
                <router-link to="/"><img src="../../assets/image/logo.png" alt="logo"></router-link>
            </el-col>
            <el-col :span="12" class="layout-steps">
                <el-steps :active="state" align-center>
                    <el-step title="我的购物车"></el-step>
                    <el-step title="填写核对信息"></el-step>
                    <el-step title="提交成功"></el-step>
                </el-steps>
            </el-col>
        </el-row>
        <!-- 进度条结束 -->
    </div>
</template>


<script>
import NavView from "components/public/NavView";

export default {
    components: {
        NavView
    },
    props: ["state"],
    data() {
        return {};
    }
};
</script>

<style lang="less" scoped>
.layout-logo-container {
    margin: 0 auto !important;
    padding-top: 15px;
    .layout-steps {
        padding-top: 10px;
    }
}
</style>