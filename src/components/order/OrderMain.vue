<template>
    <div class="order-main container">
        <p class="order-title">填写核对订单信息</p>
        <OrderAddress/>
    </div>
</template>

<script>
    import OrderAddress from './OrderAddress'
    export default {
        components:{
            OrderAddress
        },
        data() {
            return {
            }
        },
    }
</script>

<style lang="less" scoped>
    .order-main{
        margin: 39px auto;
        border: 1px solid #ddd;
        border-top: 2px solid #0066d4;
        .order-title{
            padding: 12px 0 12px 19px;
            color: #666;
            font-size: 13px;
            font-weight: bold;
            border-bottom: 1px solid #ddd;
        }
    }
</style>