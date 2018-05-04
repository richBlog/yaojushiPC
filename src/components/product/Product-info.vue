<template>
  <div class="product-info">
      
        <div class="info-img">
            <div>
                <img src="" alt="">
            </div>
            <div>
                <span class="el-icon-arrow-left"></span>
                <span class="el-icon-arrow-right"></span>
                <ul>
                    <li><img src="" alt=""></li>
                </ul>
            </div>
            <div></div>
            <div></div>
        </div>


        <div class="info-words">
            <p class="info-words-name"><img :src="productList.rx" alt="img"><span v-text="productList.name"></span></p>
            <p class="info-words-discount">
                {{productList.discount}}
                <router-link :to="productList.discountUrl">{{productList.discountUrlName}}</router-link>
            </p>
            <div class="info-words-price">
                <div></div>
                <div></div>
            </div>
            <p><span></span><span></span></p>
            <p><span></span><span></span></p>
            <p><span></span><span></span></p>
        </div>

        <div class="info-other">
            
        </div>

  </div>
</template>
<script>
export default {
  name: 'productInfo',
  data(){
      return {
          productList:{
              name:'阿达帕林凝胶(达芙文)',
              rx: require('../../assets/image/rx.png'),
              discount:'【月中钜惠】低至50元，满3盒送价值27元眼贴+棉签+湿巾，数量有限哦！ 全场低至11.11元，美',
              discountUrlName: ' 颜就趁现在啦！抢>>',
              discountUrl: '/',
              originalPrice: 57,
              concessionalRate: 0,
              exchangeFor:'满10.00元加15.90元，即可获得价值39.90元的 爱及恩牌天然维生素E咀嚼片20g(1g*20片) 1件；加5.90元，即可获得价值15.00元的白云山 蛇油护手霜 80g/瓶 1件',
              fullSubtraction:'满3件+0.01元，即可获得：仙琚 棉签 1包1件+舒瞳 双金眼贴 2贴1件+优选通用清洁湿巾160mm*180mm*10片1件'

          }
      }
  }
}
</script>
<style lang="less" scoped>
.product-info{
    display: flex;
    width: 1200px;
    padding: 10px;
    margin: 0 auto;
}

.info-img{
    width: 405px;
    height: 1000px;
}

.info-words{
    width: 608px;
    .info-words-name{
        padding-top: 20px;
        img{
            vertical-align:middle
        }
        span{
            margin-left: 10px;
            font-size: 18px;
        }
    }
    .info-words-discount{
        padding: 5px 0;
        line-height: 20px;
        color: red;
        text-align: left;
        a{
            color: #5e69ad;
            text-decoration:underline;
        }
    }
    .info-words-price{
        background-color: #f3f3f3;
        height: 156px;
    }
}
</style>
