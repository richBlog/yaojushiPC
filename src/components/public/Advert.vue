<template>
    <div class="search-right">
        <p class="right-title">{{title}}</p>
        <ul class="right-product-sub">
            <li class="right-product-item" v-for="(item,index) in extendList" :key="index">
                <router-link to="product/1">
                    <div class="right-img"><img v-lazy="item.img" alt="img"></div>
                    <p class="right-name">{{item.name}}</p>
                    <p class="right-box">
                        <span>￥{{item.newPrice}}</span>
                        <span>￥{{item.oldPrice}}</span>
                    </p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ["extendList", "title"]
};
</script>

<style lang="less" scoped>
//   右边广告推广开始
.search-right {
    width: 180px;
    border: 1px solid #dadada;
    overflow: hidden;
    .right-title {
        padding: 10px;
        font-weight: bold;
        color: #333;
        background-color: #f4f4f4;
    }
    .right-product-item {
        padding: 10px 0;
        border-bottom: 1px dashed #dadada;
        &:last-child {
            border-bottom: none;
        }
        .right-img {
            padding: 20px;
            img {
                width: 100%;
            }
        }
        .right-name {
            padding: 0 5px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .right-box {
            display: flex;
            justify-content: space-between;
            padding: 0 5px;
            line-height: 26px;
            span {
                color: #999;
                &:first-child {
                    font-size: 20px;
                    color: #ff0000;
                }
                &:last-child {
                    text-decoration: line-through;
                }
            }
        }
    }
}

//   右边广告推广结束
</style>