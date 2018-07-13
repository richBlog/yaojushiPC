<template>
    <div class="introduce">
        <div v-for="(item,index) in imgList" :key="index"><img :src="item" alt="药居士介绍"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgList: [
                    require('../../assets/image/help/js_banner.png'),
                    require('../../assets/image/help/e_story.png'),
                    require('../../assets/image/help/d_idea.png'),
                    require('../../assets/image/help/b_policy.png'),
                ]
            }
        },
    }
</script>

<style lang="less" scoped>
.introduce{
    text-align: center;
    div:nth-child(3){
        margin-bottom: 50px;
    }
}
</style>