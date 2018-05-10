<template>
    <div class="shopping-recommend">
        <el-tabs class="recommend-box" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="买过的人还买了" name="first"><ProductListView/></el-tab-pane>
            <el-tab-pane label="热门推荐" name="second">热门推荐</el-tab-pane>
            <el-tab-pane label="最近浏览" name="third">最近浏览</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import ProductListView from './ProductList'
export default {
    components:{
        ProductListView
    },
    data() {
        return {
            activeName: "first"
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
};
</script>

<style lang="less" scoped>

</style>