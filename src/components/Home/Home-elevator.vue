<template>
    <div class="container layout-main-elevator">
        <!-- 广告图 -->
        <div class="elevator-advertisement container">
            <router-link :to="elevator && elevator.advertisementImg.url">
                <img class="my-photo" alt="图片" :data-src="elevator && elevator.advertisementImg.img">
            </router-link>
        </div>
        <!-- 电梯楼层 -->
        <h3 class="elevator-floor-nb">
            <span v-text="elevator && elevator.floor.nb"></span>
            <span v-text="elevator && elevator.floor.name"></span>
        </h3>
        <!-- 楼层内容 -->
        <div class="elevator-container container">
            <!-- 分类 -->
            <div class="floor-classification">
                <ul class="floor-classification-container">
                    <li class="floor-classification-item" v-for="item in elevator && elevator.floorClassification" :key="item.id">
                        <router-link :to="item.url" v-text="item.name"></router-link>
                    </li>
                </ul>
                <div class="floor-business-logo">
                    <router-link :to="item.url" v-for="item in elevator && elevator.floorLogo" :key="item.id"><img class="my-photo" alt="logo" :data-src="item.img"></router-link>
                </div>
            </div>
            <!-- 轮播 -->
            <div class="block">
                <el-carousel width="380px" height="487px">
                    <el-carousel-item v-for="item in elevator && elevator.floorImg" :key="item.id">
                        <router-link :to='item.url'><img class="my-photo" alt="banner" :data-src="item.img"></router-link>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <!-- 四块 -->
            <div class="floor-four">
                <ul class="floor-four-container">
                    <li class="floor-four-item" v-for="item in elevator && elevator.floorFour" :key="item.id">
                        <router-link :to='item.url'>
                            <img class="my-photo" alt="img" :data-src="item.img">
                            <p v-text="item.name"></p>
                        </router-link>
                    </li>
                </ul>
            </div>
            <!-- 三块 -->
            <div class="floor-three">
                <ul class="floor-three-container">
                    <li class="floor-three-item" v-for="item in elevator && elevator.floorThree" :key="item.id">
                        <router-link :to='item.url'>
                            <img class="my-photo" alt="img" :data-src="item.img">
                            <p v-text="item.name"></p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "elevatorView",
    props: ["elevator"]
};
</script>
<style lang="less">
@import "../../styles/Home-elevator.less";
</style>
