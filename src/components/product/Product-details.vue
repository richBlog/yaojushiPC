<template>
  <div class="product-details">
      <groomView/>
      <imageTextView/>
  </div>
</template>
<script>
import groomView from './Product-groom';
import imageTextView from './Product-image-text';
export default {
  components:{
      groomView,
      imageTextView
  }
}
</script>
<style lang="less" scoped>
.product-details{
    display: flex;
    width: 1200px;
    min-width: 1200px;
    margin: 0 auto;
    margin-top: 20px;
}
</style>
