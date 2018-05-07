<template>
  <div class="product-image-text">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="商品介绍" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="说明书" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="商品问答" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="相关文章" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
  </div>
</template>
<script>
export default {
    data(){
        return {
            activeName: 'first'
        }
    },
    methods: {
        handleClick(){

        }
    }
}
</script>
<style lang="less" scoped>
.product-image-text{
    width: 100%;
    border: 1px solid #ddd;
}
</style>
