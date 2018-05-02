<template>
  <div class="container flex layout-main-product">
    <ul class="product-container">
      <li class="produce-item" v-for="item in seckillProduct" :key="item.id">
        <div class="produce-img">
          <router-link :to="item.url" class="produce-url">
            <img :src="item.imgUrl" :alt="item.name">
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
          url: '#', // 秒杀产品链接地址和参数
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
    // 推荐产品壳子
  .layout-main-product{
    position: relative;
    margin-top: 12px;
    padding: 10px;
    // 产品信息
    .product-container{
      display: flex;
      width: 1200px;
      min-width: 1200px;
      .produce-item{
        width: 20%;
        border-right: 1px solid #efefef;
        text-align: center;
        &:last-child{
          border: 0;
        }
        .produce-img{
          position: relative;
          img{
            width: 150px;
            height: 150px;
          }
          .produce-discount{
            position: absolute;
            top: 10px;
            right: 20px;
            display: block;
            width: 40px;
            height: 40px;
            line-height: 40px;
            background-color: #fe4b47;
            border-radius: 50%;
            color: #fff;
            text-align: center;
          }
        }
        .produce-name{
          color: #666;
          margin-top: 10px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .produce-price{
          margin-top: 5px;
          span{
            font-size: 12px;
            color: #ccc;
            &:first-child{
              color: #ff002f;
              font-size: 14px;
              margin-right: 20px;
            }
            &:last-child{
              text-decoration:line-through;
            }
          }
        }
      }
    }
    // 换一换
    .product-change{
      position: absolute;
      bottom: -19px;
      right: 0;
      span{
        color: #1e1e1e;
      }
      i{
        display: inline-block;
        position: relative;
        top: 5px;
        right: -5px;
        width: 20px;
        height: 20px;
        background: url(../../assets/image/fenlei.png) no-repeat -51px -140px;
      }
    }
  }
</style>
