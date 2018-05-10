<template>
    <div class="product-details container">
        <groomView/>
        <imageTextView/>
    </div>
</template>
<script>
import groomView from "./Product-groom";
import imageTextView from "./Product-image-text";
export default {
    components: {
        groomView,
        imageTextView
    }
};
</script>
<style lang="less" scoped>
.product-details {
    display: flex;
    margin-top: 20px;
    padding: 0;
}
</style>
