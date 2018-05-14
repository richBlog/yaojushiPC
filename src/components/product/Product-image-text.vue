<template>
    <div class="product-image-text">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="商品介绍" name="first">
                <detailsView :interlocutionList="interlocutionList" :tabList="tabList" :present="present"/>
            </el-tab-pane>
            <el-tab-pane label="说明书" name="second">
                <instructionsView :instructions="instructions"/>
            </el-tab-pane>
            <el-tab-pane label="用户评论（1000）" name="third">
                <commentView :contentList="contentList" :progressList="progressList" :progressType="progressType"/>
            </el-tab-pane>
            <el-tab-pane label="商品问答" name="fourth">
                <discussView :discussList="discussList" />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import detailsView from "./details";
import instructionsView from "./instructions";
import discussView from "./discuss";
import commentView from "./comment";

export default {
    components: {
        detailsView,
        instructionsView,
        discussView,
        commentView
    },
    data() {
        return {
            activeName: "first",
            instructions:{},
            discussList:[],
            interlocutionList:[],
            tabList:{},
            present:"",
            progressList:[],
            contentList:[],
            progressType:{}
        };
    },
    created(){
        this.$ajax({
            url: "https://easy-mock.com/mock/5af8e2bb0d7ff97d1fdc9341/productImgText",
            methods: "get"
        })
            .then(response => {
                if (response.status == 200) {
                    this.imgList = response.data.data.imgList;
                    this.instructions = response.data.data.instructions;
                    this.discussList = response.data.data.discussList;
                    this.interlocutionList = response.data.data.interlocutionList;
                    this.tabList = response.data.data.tabList;
                    this.present = response.data.data.present;
                    this.progressList = response.data.data.progressList;
                    this.contentList = response.data.data.contentList;
                    this.progressType = response.data.data.progressType;
                }
            })
            .catch(error => {
                console.log(error);
            });
    },
    methods: {
        handleClick() {}
    }
};
</script>
<style lang="less" scoped>
.product-image-text {
    width: 100%;
    border: 1px solid #ddd;
}
</style>
