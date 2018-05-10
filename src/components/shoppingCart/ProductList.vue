<template>
    <div class="product-list-box">
        <div class="direction-box">
            <span>&lt;</span>
            <span>&gt;</span>
        </div>
        <div class="list-slide-box">
            <ul class="product-list-sub">
                <li class="product-list-item">
                    <img src="" alt="img">
                    <p></p>
                    <p></p>
                    <el-button>加入购物车</el-button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ["list"]
};
</script>

<style lang="less" scoped>
.product-list-box {
    .list-slide-box{
        border: 1px dashed #cacaca;
    }
    .product-list-sub {
        display: flex;
        .product-list-item{
            width: 200px;
            padding: 20px;
            text-align: center;
            border-right: 1px dashed #cacaca;
            box-sizing: border-box;
            // &:last-child{
            //     border: none;
            // }
            img{
                width: 160px;
                height: 160px;
            }
        }
    }
}
</style>