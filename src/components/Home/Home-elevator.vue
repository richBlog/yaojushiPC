<template>
  <div class="container layout-main-elevator">
    <!-- 广告图 -->
    <div class="elevator-advertisement">
      <router-link :to="elevator && elevator.advertisementImg.url">
        <img :src="elevator && elevator.advertisementImg.img" alt="图片" :data-src="elevator && elevator.advertisementImg.img">
      </router-link>
    </div>
    <!-- 电梯楼层 -->
    <h3 class="elevator-floor-nb"><span v-text="elevator && elevator.floor.nb"></span><span v-text="elevator && elevator.floor.name"></span></h3>
    <!-- 楼层内容 -->
    <div class="elevator-container">
      <!-- 分类 -->
      <div class="floor-classification">
        <ul class="floor-classification-container">
          <li class="floor-classification-item" v-for="item in elevator && elevator.floorClassification" :key="item.id">
            <router-link :to="item.url" v-text="item.name"></router-link>
          </li>
        </ul>
        <div class="floor-business-logo">
          <router-link :to="item.url" v-for="item in elevator && elevator.floorLogo" :key="item.id"><img :src="item.img" alt="logo" :data-src="item.img"></router-link>
        </div>
      </div>
      <!-- 轮播 -->
      <div class="block">
        <el-carousel width="380px" height="487px">
          <el-carousel-item v-for="item in elevator && elevator.floorImg" :key="item.id">
            <router-link :to='item.url'><img :src="item.img" alt="banner" :data-src="item.img"></router-link>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 四块 -->
      <div class="floor-four">
        <ul class="floor-four-container">
          <li class="floor-four-item" v-for="item in elevator && elevator.floorFour" :key="item.id">
            <router-link :to='item.url'>
              <img :src="item.img" alt="img" :data-src="item.img">
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
              <img :src="item.img" alt="img" :data-src="item.img">
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
  name: 'ElevatorView',
  props: ['elevator']
}
</script>
<style lang="less">
  .layout-main-elevator{
    margin-top: 50px;
    // 广告图
    .elevator-advertisement{
      width: 1200px;
      min-width: 1200px;
      overflow: hidden;
    }
    // 楼层标题
    .elevator-floor-nb{
      margin-top: 17px;
      margin-bottom: 21px;
      span{
        color: #ff3354;
        font-size: 24px;
        margin-right: 15px;
        font-weight: 500;
      }
    }
    // 楼层内容
    .elevator-container{
      display: flex;
      width: 1200px;
      min-width: 1200px;
      height: 491px;
      border: 1px solid #efefef;
      border-top: 2px solid #ff3351;
      .floor-classification{
        width: 167px;
        .floor-classification-container{
          display: flex;
          flex-wrap: wrap;
          .floor-classification-item{
            width: 50%;
            text-align: center;
          }
        }
      }
      // 轮播
      .block{
        width: 380px;
        min-width: 380px;
      }
      // 四块
      .floor-four-container{
        width: 418px;
        height: 491px;
        display: flex;
        flex-wrap: wrap;
        .floor-four-item{
          width: 50%;
          height: 50%;
          border-right: 1px solid #efefef;
          border-bottom: 1px solid #efefef;
          overflow: hidden;
          &:nth-child(3), &:nth-child(4){
            border-bottom: 0;
          }
          &:hover img{
            transition: all 0.2s linear;
            transform: translateX(-5px);
          }
          a{
            display: block;
            width: 160px;
            margin: 0 auto;
          }
          img{
            width: 160px;
            height: 160px;
            margin-top: 20px;
          }
          p{
            text-align: center;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-top: 20px;
          }
        }
      }
      // 三块
      .floor-three-container{
        height: 491px;
        .floor-three-item{
          height: 33.33%;
          border-bottom: 1px solid #efefef;
          overflow: hidden;
          &:last-child{
            border-bottom: 0;
          }
          &:hover img{
            transition: all 0.2s linear;
            transform: translateX(-6px);
          }
          a{
            display: block;
            width: 246px;
          }
          img{
            width: 110px;
            height: 110px;
            margin-left: 107px;
          }
          p{
            text-align: center;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-top: 20px;
          }
        }
      }
    }
  }
</style>
