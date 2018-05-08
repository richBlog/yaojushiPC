<template>
  <div class="product-image-text">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="商品介绍" name="first">
                <detailsView/>
            </el-tab-pane>
            <el-tab-pane label="说明书" name="second">
                <instructionsView/>
            </el-tab-pane>
            <el-tab-pane label="用户评论（1000）" name="third">
                <commentView/>
            </el-tab-pane>
            <el-tab-pane label="商品问答" name="fourth">
                <discussView/>
            </el-tab-pane>
        </el-tabs>
  </div>
</template>
<script>
import detailsView from './details'
import instructionsView from './instructions'
import discussView from './discuss'
import commentView from './comment'

export default {
    components: {
        detailsView,
        instructionsView,
        discussView,
        commentView
    },
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
