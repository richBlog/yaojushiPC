<template>
  <div class="container flex layout-main-product">
    <ul class="product-container">
      <li class="produce-item" v-for="item in seckillProduct" :key="item.id">
        <div class="produce-img">
          <router-link :to="item.url" class="produce-url">
            <img class="my-photo" :alt="item.name" :data-src="item.imgUrl">
          </router-link>
          <span class="produce-discount" v-text="item.discount+'折'"></span>
        </div>
        <p class="produce-name" v-text="item.name"></p>
        <div class="produce-price"><span v-text="'￥'+item.newPrice"></span><span v-text="item.oldPrice"></span></div>
      </li>
    </ul>
    <div class="product-change"><span>换一批</span><i></i></div>
  </div>
</template>
<script>
export default {
  name: 'hotView',
  data () {
    return {
      // 秒杀产品的信息
      seckillProduct: [
        {
          name: '强爱 创口贴 超弹防水型 10贴', // 秒杀产品的名字
          url: 'product/1', // 秒杀产品链接地址和参数
          oldPrice: 9.9, // 秒杀产品的之前的价格
          newPrice: 1, // 秒杀产品的现价
          discount: 1.0, // 秒杀产品的折扣
          imgUrl: require('../../assets/image/ms1.jpg') // 秒杀产品的图片地址
        },
        {
          name: 'WINNER稳健医疗 医用护理口罩 灭菌级挂耳型 17cm×9cm-3P 1只',
          url: '#',
          oldPrice: 9.9,
          newPrice: 1,
          discount: 1.0,
          imgUrl: require('../../assets/image/ms2.jpg')
        },
        {
          name: '恩惠 医用棉签 12cm*50支',
          url: '#',
          oldPrice: 9.9,
          newPrice: 1,
          discount: 1.0,
          imgUrl: require('../../assets/image/ms3.jpg')
        },
        {
          name: '约斯夫 医用酒精消毒棉片 10片',
          url: '#',
          oldPrice: 9.9,
          newPrice: 1,
          discount: 1.0,
          imgUrl: require('../../assets/image/ms5.jpg')
        },
        {
          name: '珍视明 护眼贴 2贴/袋',
          url: '#',
          oldPrice: 9.9,
          newPrice: 1,
          discount: 1.0,
          imgUrl: require('../../assets/image/ms6.jpg')
        }
      ]
    }
  }
}
</script>
<style lang="less">
 @import '../../styles/Home-hot.less';
</style>
