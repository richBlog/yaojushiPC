<template>
    <div class="container flex layout-main-product">
        <ul class="product-container container">
            <li class="produce-item" v-for="item in seckillProduct" :key="item.id">
                <div class="produce-img">
                    <router-link :to="item.url" class="produce-url">
                        <img class="my-photo" :alt="item.name" :data-src="item.imgUrl">
                    </router-link>
                    <span class="produce-discount" v-text="item.discount+'折'"></span>
                </div>
                <p class="produce-name" v-text="item.name"></p>
                <div class="produce-price">
                    <span v-text="'￥'+item.newPrice"></span>
                    <span v-text="item.oldPrice"></span>
                </div>
            </li>
        </ul>
        <div class="product-change">
            <span>换一批</span>
            <i></i>
        </div>
    </div>
</template>
<script>
export default {
    name: "hotView",
    props:["seckillProduct"]

};
</script>
<style lang="less">
@import "../../styles/Home-hot.less";
</style>
