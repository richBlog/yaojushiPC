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
            .then(res => {
                if (res.status == 200) {

                    const data = res.data.data;

                    this.imgList = data.imgList;
                    this.instructions = data.instructions;
                    this.discussList = data.discussList;
                    this.interlocutionList = data.interlocutionList;
                    this.tabList = data.tabList;
                    this.present = data.present;
                    this.progressList = data.progressList;
                    this.contentList = data.contentList;
                    this.progressType = data.progressType;
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
