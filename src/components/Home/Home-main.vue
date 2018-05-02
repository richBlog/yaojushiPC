<template>
  <section class="layout-main">
     <div class="container flex layout-main-nav">
       <div class="nav-classification"><i></i><span>全部分类</span></div>
       <ul class="nav-sub">
         <li class="nav-item" v-for="item in LateralClassification" :key="item.id"><router-link to="/" v-text="item.name"></router-link></li>
       </ul>
     </div>
     <div class="container flex layout-main-banner">
        <!-- 纵向分类S -->
       <div class="banner-classification">
         <ul class="banner-sub">
           <li class="banner-item" v-for="item in longitudinalClassification" :key="item.id">
             <i></i><router-link to="/" v-text="item.name"></router-link><span>&gt;</span>
             <!-- 二级分类S -->
             <div class="second-level-container">
               <ul class="second-level-sub" v-for="i in item.secondLevel" :key="i.id">
                 <li class="second-level-item"><router-link to="/" v-text="i.name"></router-link></li>
                 <li class="second-level-item" v-for="items in i.Submenu" :key="items.id"><router-link to="/" v-text="items.name"></router-link></li>
               </ul>
             </div>
             <!-- 二级分类E -->
           </li>
         </ul>
       </div>
       <!-- 纵向分类E -->
       <!-- 轮播S -->
        <el-carousel :interval="5000" arrow="always" class="banner">
          <el-carousel-item v-for="item in bannerUrl" :key="item.id">
            <router-link to="/"><img :src="item" alt="轮播图"></router-link>
          </el-carousel-item>
        </el-carousel>
       <!-- 轮播E -->
       <!-- 广告S -->
       <div class="banner-menu">
         <ul class="banner-menu-container">
           <li class="banner-menu-item" v-for="item in authentication" :key="item.id"><i></i><span v-text="item"></span></li>
         </ul>
         <div class="banner-menu-contact"><span>药师咨询</span><i></i><span>400-1234-123</span></div>
         <div class="banner-menu-info">监管信息发布</div>
         <div class="banner-menu-advertisement"><router-link to="/"><img :src="advertisement" alt="广告"></router-link></div>
       </div>
       <!-- 广告E -->
     </div>
     <!-- 秒杀倒计时S -->
     <div class="container flex layout-main-seckill">
       <div class="seckill-container">
         <div class="seckill-title">
           <span>超值秒杀</span><i></i>
         </div>
         <div class="seckill-time">
           <span>当前场次</span>
           <span>05</span>
           <span>:</span>
           <span>06</span>
           <span>:</span>
           <span>55</span>
           <span>后结束抢购</span>
         </div>
       </div>
     </div>
     <!-- 秒杀倒计时E -->
     <!-- 秒杀产品S -->
     <hotView></hotView>
     <!-- 秒杀产品E -->
     <!-- 特色会场S -->
     <div class="container layout-main-characteristic">
       <div class="characteristic-line"><p></p></div>
       <div class="characteristic-title">
         <h1>特色会场</h1>
       </div>
       <ul class="characteristic-container">
         <li class="characteristic-item" v-for="item in characteristic" :key="item.id">
           <router-link :to="item.url" class="characteristic-url">
             <img :src="item.imgUrl" :alt="item.name" class="characteristic-img">
             <div class="characteristic-fff">
               <div class="characteristic-border">
                 <h3 class="characteristic-h2" v-text="item.name"></h3>
                 <p class="characteristic-h5" v-text="'秒杀低至'+item.discount+'折'"></p>
               </div>
             </div>
           </router-link>
         </li>
       </ul>
     </div>
     <!-- 特色会场E -->
     <!-- 热门类目S -->
     <div class="container layout-main-hot">
       <h2>热门类目</h2>
       <hotView></hotView>
     </div>
     <!-- 热门类目E -->
     <!-- 热门专题S -->
    <div class="container layout-main-hot">
       <h2>热门专题</h2>
       <hotView></hotView>
     </div>
     <!-- 热门专题E -->
     <!-- 电梯楼层1F S -->
     <ElevatorView v-for="item in elevator" :key="item.id" :elevator = "item"></ElevatorView>
     <!-- 电梯楼层1F E -->
     <!-- 热门品牌S -->
     <div class="container layout-main-brand">
        <h2>热门品牌</h2>
        <ul class="brand-container">
            <li class="brand-item" v-for="item in brand" :key="item.id">
            <router-link :to="item.url">
                <img :src="item.img" alt="品牌" :data-src="item.img">
            </router-link>
            </li>
        </ul>
     </div>
     <!-- 热门品牌E -->
  </section>
</template>
<script>
import hotView from "./Home-hot";
import ElevatorView from "./Home-elevator";

export default {
  name: "HomeMain",
  components: {
    hotView,
    ElevatorView
  },
  data() {
    return {
      // 横向分类字段 后期会后台会提供接口获取
      LateralClassification: [
        { name: "首页", url: "#" },
        { name: "内科用药", url: "#" },
        { name: "儿科用药", url: "#" },
        { name: "妇科用药", url: "#" },
        { name: "五官用药", url: "#" },
        { name: "皮肤外用", url: "#" },
        { name: "健康咨询", url: "#" }
      ],
      // 纵向分类字段 后期会后台会提供接口获取
      longitudinalClassification: [
        { name: "中西药品", url: "#", secondLevel: [] },
        { name: "中药饮片", url: "#", secondLevel: [] },
        { name: "保健养生", url: "#", secondLevel: [] },
        { name: "食品营养", url: "#", secondLevel: [] },
        { name: "美妆美体", url: "#", secondLevel: [] },
        { name: "卫生消毒", url: "#", secondLevel: [] },
        { name: "医疗器械", url: "#", secondLevel: [] },
        { name: "科室分类", url: "#", secondLevel: [] },
        { name: "其他类", url: "#", secondLevel: [] }
      ],
      // 二级分类模拟数据
      secondLevel1: [
        {
          name: "男科疾病",
          url: "#",
          Submenu: [
            { name: "阳痿早泄", url: "#" },
            { name: "男性不育", url: "#" },
            { name: "前列腺炎", url: "#" },
            { name: "补肾", url: "#" },
            { name: "肾病", url: "#" }
          ]
        },
        {
          name: "风湿骨科",
          url: "#",
          Submenu: [
            { name: "风湿类风湿", url: "#" },
            { name: "骨关节炎", url: "#" },
            { name: "跌打骨伤", url: "#" },
            { name: "腰椎病", url: "#" },
            { name: "骨质疏松", url: "#" }
          ]
        },
        {
          name: "皮肤病",
          url: "#",
          Submenu: [
            { name: "皮炎癣症", url: "#" },
            { name: "脱发", url: "#" },
            { name: "银屑病", url: "#" },
            { name: "腰椎病", url: "#" },
            { name: "骨质疏松", url: "#" }
          ]
        },
        {
          name: "滋补调养",
          url: "#",
          Submenu: [
            { name: "风湿类风湿", url: "#" },
            { name: "骨关节炎", url: "#" },
            { name: "跌打骨伤", url: "#" },
            { name: "腰椎病", url: "#" },
            { name: "骨质疏松", url: "#" }
          ]
        },
        {
          name: "心脑血管",
          url: "#",
          Submenu: [
            { name: "风湿类风湿", url: "#" },
            { name: "骨关节炎", url: "#" },
            { name: "跌打骨伤", url: "#" },
            { name: "腰椎病", url: "#" },
            { name: "骨质疏松", url: "#" }
          ]
        },
        {
          name: "神经系统",
          url: "#",
          Submenu: [
            { name: "风湿类风湿", url: "#" },
            { name: "骨关节炎", url: "#" },
            { name: "跌打骨伤", url: "#" },
            { name: "腰椎病", url: "#" },
            { name: "骨质疏松", url: "#" }
          ]
        },
        {
          name: "内分泌科",
          url: "#",
          Submenu: [
            { name: "风湿类风湿", url: "#" },
            { name: "骨关节炎", url: "#" },
            { name: "跌打骨伤", url: "#" },
            { name: "腰椎病", url: "#" },
            { name: "骨质疏松", url: "#" }
          ]
        },
        {
          name: "科室分类",
          url: "#",
          Submenu: [
            { name: "风湿类风湿", url: "#" },
            { name: "骨关节炎", url: "#" },
            { name: "跌打骨伤", url: "#" },
            { name: "腰椎病", url: "#" },
            { name: "骨质疏松", url: "#" }
          ]
        }
      ],
      secondLevel2: [
        {
          name: "热门推荐",
          url: "#",
          Submenu: [
            { name: "阳痿早泄", url: "#" },
            { name: "男性不育", url: "#" },
            { name: "前列腺炎", url: "#" },
            { name: "补肾", url: "#" },
            { name: "肾病", url: "#" }
          ]
        },
        {
          name: "女士保养",
          url: "#",
          Submenu: [
            { name: "风湿类风湿", url: "#" },
            { name: "骨关节炎", url: "#" },
            { name: "跌打骨伤", url: "#" },
            { name: "腰椎病", url: "#" },
            { name: "骨质疏松", url: "#" }
          ]
        },
        {
          name: "男士保健",
          url: "#",
          Submenu: [
            { name: "皮炎癣症", url: "#" },
            { name: "脱发", url: "#" },
            { name: "银屑病", url: "#" },
            { name: "腰椎病", url: "#" },
            { name: "骨质疏松", url: "#" }
          ]
        },
        {
          name: "孝敬长辈",
          url: "#",
          Submenu: [
            { name: "风湿类风湿", url: "#" },
            { name: "骨关节炎", url: "#" },
            { name: "跌打骨伤", url: "#" },
            { name: "腰椎病", url: "#" },
            { name: "骨质疏松", url: "#" }
          ]
        },
        {
          name: "基础营养",
          url: "#",
          Submenu: [
            { name: "风湿类风湿", url: "#" },
            { name: "骨关节炎", url: "#" },
            { name: "跌打骨伤", url: "#" },
            { name: "腰椎病", url: "#" },
            { name: "骨质疏松", url: "#" }
          ]
        },
        {
          name: "神经系统",
          url: "#",
          Submenu: [
            { name: "风湿类风湿", url: "#" },
            { name: "骨关节炎", url: "#" },
            { name: "跌打骨伤", url: "#" },
            { name: "腰椎病", url: "#" },
            { name: "骨质疏松", url: "#" }
          ]
        },
        {
          name: "内分泌科",
          url: "#",
          Submenu: [
            { name: "风湿类风湿", url: "#" },
            { name: "骨关节炎", url: "#" },
            { name: "跌打骨伤", url: "#" },
            { name: "腰椎病", url: "#" },
            { name: "骨质疏松", url: "#" }
          ]
        },
        {
          name: "科室分类",
          url: "#",
          Submenu: [
            { name: "风湿类风湿", url: "#" },
            { name: "骨关节炎", url: "#" },
            { name: "跌打骨伤", url: "#" },
            { name: "腰椎病", url: "#" },
            { name: "骨质疏松", url: "#" }
          ]
        }
      ],
      // 轮播图片地址 后期后台返回数据
      bannerUrl: [
        require("../../assets/image/banner1.jpg"),
        require("../../assets/image/banner2.jpg"),
        require("../../assets/image/banner3.png")
      ],
      // 轮播右边认证
      authentication: [
        "正品保证",
        "专业药师",
        "厂家授权",
        "隐私包装",
        "货到付款",
        "满79包邮"
      ],
      // 轮播右下角广告图片地址
      advertisement: require("../../assets/image/gg.jpg"),
      // 特色会场
      characteristic: [
        {
          name: "男科用药", // 会场的名字
          url: "#", // 链接地址和参数
          discount: 3.5, // 折扣
          imgUrl: require("../../assets/image/hc1.png") // 图片地址
        },
        {
          name: "皮肤外用", // 会场的名字
          url: "#", // 链接地址和参数
          discount: 3.5, // 折扣
          imgUrl: require("../../assets/image/hc2.png") // 图片地址
        },
        {
          name: "骨科用药", // 会场的名字
          url: "#", // 链接地址和参数
          discount: 3.5, // 折扣
          imgUrl: require("../../assets/image/hc3.png") // 图片地址
        },
        {
          name: "心脑血管", // 会场的名字
          url: "#", // 链接地址和参数
          discount: 3.5, // 折扣
          imgUrl: require("../../assets/image/hc4.png") // 图片地址
        },
        {
          name: "理疗用药", // 会场的名字
          url: "#", // 链接地址和参数
          discount: 3.5, // 折扣
          imgUrl: require("../../assets/image/hc1.png") // 图片地址
        },
        {
          name: "中医用药", // 会场的名字
          url: "#", // 链接地址和参数
          discount: 3.5, // 折扣
          imgUrl: require("../../assets/image/hc2.png") // 图片地址
        },
        {
          name: "美妆美体", // 会场的名字
          url: "#", // 链接地址和参数
          discount: 3.5, // 折扣
          imgUrl: require("../../assets/image/hc3.png") // 图片地址
        },
        {
          name: "食品保健", // 会场的名字
          url: "#", // 链接地址和参数
          discount: 3.5, // 折扣
          imgUrl: require("../../assets/image/hc4.png") // 图片地址
        }
      ],
      // 楼层信息
      elevator: [
        {
          // 楼层的大广告图
          advertisementImg: {
            img: require("../../assets/image/floor1.jpg"),
            url: "#"
          },
          floor: {
            nb: "1F",
            name: "家庭常备"
          },
          // 楼层分类信息
          floorClassification: [
            {
              name: "风寒感冒",
              url: "#"
            },
            {
              name: "清热解毒",
              url: "#"
            }
          ],
          // 楼层分类信息下面的厂家LOGO
          floorLogo: [
            {
              img: require("../../assets/image/cj_logo1.jpg"),
              url: "#"
            },
            {
              img: require("../../assets/image/cj_logo2.jpg"),
              url: "#"
            },
            {
              img: require("../../assets/image/cj_logo3.jpg"),
              url: "#"
            }
          ],
          // 楼层中的轮播图
          floorImg: [
            {
              img: require("../../assets/image/lc_banner1.jpg"),
              url: "#"
            },
            {
              img: require("../../assets/image/lc_banner2.jpg"),
              url: "#"
            },
            {
              img: require("../../assets/image/lc_banner3.jpg"),
              url: "#"
            }
          ],
          // 四块
          floorFour: [
            {
              img: require("../../assets/image/s1.jpg"),
              url: "#",
              name: "小麦纤维素颗粒(非比麸)"
            },
            {
              img: require("../../assets/image/s2.jpg"),
              url: "#",
              name: "艾司奥美拉唑镁肠溶片(曾用名:埃索美拉唑镁肠溶片)"
            },
            {
              img: require("../../assets/image/s3.jpg"),
              url: "#",
              name: "益气聪明丸(孙医生)"
            },
            {
              img: require("../../assets/image/s4.jpg"),
              url: "#",
              name: "感冒灵颗粒(999)"
            }
          ],
          // 三块
          floorThree: [
            {
              img: require("../../assets/image/s5.jpg"),
              url: "#",
              name: "吸入用布地奈德混悬液(普米克令舒)"
            },
            {
              img: require("../../assets/image/s6.jpg"),
              url: "#",
              name: "百令胶囊(百令)"
            },
            {
              img: require("../../assets/image/s7.jpg"),
              url: "#",
              name: "布地奈德福莫特罗粉吸入剂(信必可都保)"
            }
          ]
        },
        {
          advertisementImg: {
            img: require("../../assets/image/floor2.jpg"),
            url: "#"
          },
          floor: {
            nb: "2F",
            name: "母婴乐园"
          },
          // 楼层分类信息
          floorClassification: [
            {
              name: "风寒感冒",
              url: "#"
            },
            {
              name: "清热解毒",
              url: "#"
            }
          ],
          // 楼层分类信息下面的厂家LOGO
          floorLogo: [
            {
              img: require("../../assets/image/cj_logo1.jpg"),
              url: "#"
            },
            {
              img: require("../../assets/image/cj_logo2.jpg"),
              url: "#"
            },
            {
              img: require("../../assets/image/cj_logo3.jpg"),
              url: "#"
            }
          ],
          // 楼层中的轮播图
          floorImg: [
            {
              img: require("../../assets/image/lc_banner1.jpg"),
              url: "#"
            },
            {
              img: require("../../assets/image/lc_banner2.jpg"),
              url: "#"
            },
            {
              img: require("../../assets/image/lc_banner3.jpg"),
              url: "#"
            }
          ],
          // 四块
          floorFour: [
            {
              img: require("../../assets/image/s1.jpg"),
              url: "#",
              name: "小麦纤维素颗粒(非比麸)"
            },
            {
              img: require("../../assets/image/s2.jpg"),
              url: "#",
              name: "艾司奥美拉唑镁肠溶片(曾用名:埃索美拉唑镁肠溶片)"
            },
            {
              img: require("../../assets/image/s3.jpg"),
              url: "#",
              name: "益气聪明丸(孙医生)"
            },
            {
              img: require("../../assets/image/s4.jpg"),
              url: "#",
              name: "感冒灵颗粒(999)"
            }
          ],
          // 三块
          floorThree: [
            {
              img: require("../../assets/image/s5.jpg"),
              url: "#",
              name: "吸入用布地奈德混悬液(普米克令舒)"
            },
            {
              img: require("../../assets/image/s6.jpg"),
              url: "#",
              name: "百令胶囊(百令)"
            },
            {
              img: require("../../assets/image/s7.jpg"),
              url: "#",
              name: "布地奈德福莫特罗粉吸入剂(信必可都保)"
            }
          ]
        },
        {
          advertisementImg: {
            img: require("../../assets/image/floor3.jpg"),
            url: "#"
          },
          floor: {
            nb: "3F",
            name: "男科药馆"
          },
          // 楼层分类信息
          floorClassification: [
            {
              name: "风寒感冒",
              url: "#"
            },
            {
              name: "清热解毒",
              url: "#"
            }
          ],
          // 楼层分类信息下面的厂家LOGO
          floorLogo: [
            {
              img: require("../../assets/image/cj_logo1.jpg"),
              url: "#"
            },
            {
              img: require("../../assets/image/cj_logo2.jpg"),
              url: "#"
            },
            {
              img: require("../../assets/image/cj_logo3.jpg"),
              url: "#"
            }
          ],
          // 楼层中的轮播图
          floorImg: [
            {
              img: require("../../assets/image/lc_banner1.jpg"),
              url: "#"
            },
            {
              img: require("../../assets/image/lc_banner2.jpg"),
              url: "#"
            },
            {
              img: require("../../assets/image/lc_banner3.jpg"),
              url: "#"
            }
          ],
          // 四块
          floorFour: [
            {
              img: require("../../assets/image/s1.jpg"),
              url: "#",
              name: "小麦纤维素颗粒(非比麸)"
            },
            {
              img: require("../../assets/image/s2.jpg"),
              url: "#",
              name: "艾司奥美拉唑镁肠溶片(曾用名:埃索美拉唑镁肠溶片)"
            },
            {
              img: require("../../assets/image/s3.jpg"),
              url: "#",
              name: "益气聪明丸(孙医生)"
            },
            {
              img: require("../../assets/image/s4.jpg"),
              url: "#",
              name: "感冒灵颗粒(999)"
            }
          ],
          // 三块
          floorThree: [
            {
              img: require("../../assets/image/s5.jpg"),
              url: "#",
              name: "吸入用布地奈德混悬液(普米克令舒)"
            },
            {
              img: require("../../assets/image/s6.jpg"),
              url: "#",
              name: "百令胶囊(百令)"
            },
            {
              img: require("../../assets/image/s7.jpg"),
              url: "#",
              name: "布地奈德福莫特罗粉吸入剂(信必可都保)"
            }
          ]
        },
        {
          advertisementImg: {
            img: require("../../assets/image/floor1.jpg"),
            url: "#"
          },
          floor: {
            nb: "4F",
            name: "滋补保健"
          },
          // 楼层分类信息
          floorClassification: [
            {
              name: "风寒感冒",
              url: "#"
            },
            {
              name: "清热解毒",
              url: "#"
            }
          ],
          // 楼层分类信息下面的厂家LOGO
          floorLogo: [
            {
              img: require("../../assets/image/cj_logo1.jpg"),
              url: "#"
            },
            {
              img: require("../../assets/image/cj_logo2.jpg"),
              url: "#"
            },
            {
              img: require("../../assets/image/cj_logo3.jpg"),
              url: "#"
            }
          ],
          // 楼层中的轮播图
          floorImg: [
            {
              img: require("../../assets/image/lc_banner1.jpg"),
              url: "#"
            },
            {
              img: require("../../assets/image/lc_banner2.jpg"),
              url: "#"
            },
            {
              img: require("../../assets/image/lc_banner3.jpg"),
              url: "#"
            }
          ],
          // 四块
          floorFour: [
            {
              img: require("../../assets/image/s1.jpg"),
              url: "#",
              name: "小麦纤维素颗粒(非比麸)"
            },
            {
              img: require("../../assets/image/s2.jpg"),
              url: "#",
              name: "艾司奥美拉唑镁肠溶片(曾用名:埃索美拉唑镁肠溶片)"
            },
            {
              img: require("../../assets/image/s3.jpg"),
              url: "#",
              name: "益气聪明丸(孙医生)"
            },
            {
              img: require("../../assets/image/s4.jpg"),
              url: "#",
              name: "感冒灵颗粒(999)"
            }
          ],
          // 三块
          floorThree: [
            {
              img: require("../../assets/image/s5.jpg"),
              url: "#",
              name: "吸入用布地奈德混悬液(普米克令舒)"
            },
            {
              img: require("../../assets/image/s6.jpg"),
              url: "#",
              name: "百令胶囊(百令)"
            },
            {
              img: require("../../assets/image/s7.jpg"),
              url: "#",
              name: "布地奈德福莫特罗粉吸入剂(信必可都保)"
            }
          ]
        },
        {
          advertisementImg: {
            img: require("../../assets/image/floor2.jpg"),
            url: "#"
          },
          floor: {
            nb: "5F",
            name: "器械商城"
          },
          // 楼层分类信息
          floorClassification: [
            {
              name: "风寒感冒",
              url: "#"
            },
            {
              name: "清热解毒",
              url: "#"
            }
          ],
          // 楼层分类信息下面的厂家LOGO
          floorLogo: [
            {
              img: require("../../assets/image/cj_logo1.jpg"),
              url: "#"
            },
            {
              img: require("../../assets/image/cj_logo2.jpg"),
              url: "#"
            },
            {
              img: require("../../assets/image/cj_logo3.jpg"),
              url: "#"
            }
          ],
          // 楼层中的轮播图
          floorImg: [
            {
              img: require("../../assets/image/lc_banner1.jpg"),
              url: "#"
            },
            {
              img: require("../../assets/image/lc_banner2.jpg"),
              url: "#"
            },
            {
              img: require("../../assets/image/lc_banner3.jpg"),
              url: "#"
            }
          ],
          // 四块
          floorFour: [
            {
              img: require("../../assets/image/s1.jpg"),
              url: "#",
              name: "小麦纤维素颗粒(非比麸)"
            },
            {
              img: require("../../assets/image/s2.jpg"),
              url: "#",
              name: "艾司奥美拉唑镁肠溶片(曾用名:埃索美拉唑镁肠溶片)"
            },
            {
              img: require("../../assets/image/s3.jpg"),
              url: "#",
              name: "益气聪明丸(孙医生)"
            },
            {
              img: require("../../assets/image/s4.jpg"),
              url: "#",
              name: "感冒灵颗粒(999)"
            }
          ],
          // 三块
          floorThree: [
            {
              img: require("../../assets/image/s5.jpg"),
              url: "#",
              name: "吸入用布地奈德混悬液(普米克令舒)"
            },
            {
              img: require("../../assets/image/s6.jpg"),
              url: "#",
              name: "百令胶囊(百令)"
            },
            {
              img: require("../../assets/image/s7.jpg"),
              url: "#",
              name: "布地奈德福莫特罗粉吸入剂(信必可都保)"
            }
          ]
        }
      ],
      //   热门品牌
      brand: [
        {
          img: require("../../assets/image/p1.jpg"),
          url: "#"
        },
        {
          img: require("../../assets/image/p2.jpg"),
          url: "#"
        },
        {
          img: require("../../assets/image/p3.jpg"),
          url: "#"
        },
        {
          img: require("../../assets/image/p1.jpg"),
          url: "#"
        },
        {
          img: require("../../assets/image/p2.jpg"),
          url: "#"
        },
        {
          img: require("../../assets/image/p3.jpg"),
          url: "#"
        },
        {
          img: require("../../assets/image/p1.jpg"),
          url: "#"
        },
        {
          img: require("../../assets/image/p2.jpg"),
          url: "#"
        },
        {
          img: require("../../assets/image/p3.jpg"),
          url: "#"
        },
        {
          img: require("../../assets/image/p1.jpg"),
          url: "#"
        },
        {
          img: require("../../assets/image/p2.jpg"),
          url: "#"
        },
        {
          img: require("../../assets/image/p3.jpg"),
          url: "#"
        },
        {
          img: require("../../assets/image/p1.jpg"),
          url: "#"
        },
        {
          img: require("../../assets/image/p2.jpg"),
          url: "#"
        }
      ]
    };
  },
  created() {
    this.longitudinalClassification[0].secondLevel = this.secondLevel1;
    this.longitudinalClassification[1].secondLevel = this.secondLevel2;
    this.longitudinalClassification[2].secondLevel = this.secondLevel1;
    this.longitudinalClassification[3].secondLevel = this.secondLevel2;
    this.longitudinalClassification[4].secondLevel = this.secondLevel1;
    this.longitudinalClassification[5].secondLevel = this.secondLevel2;
    this.longitudinalClassification[6].secondLevel = this.secondLevel1;
    this.longitudinalClassification[7].secondLevel = this.secondLevel2;
    this.longitudinalClassification[8].secondLevel = this.secondLevel1;
  }
};
</script>
<style lang="less">
.layout-main {
  overflow: hidden;
  padding-bottom: 20px;
}
.layout-main-nav {
  line-height: 36px;
  font-size: 16px;
  text-align: center;
  .nav-classification {
    min-width: 180px; // 不知道为啥少3PX 所以强制最小180px
    height: 36px;
    background-color: #0066d4;
    span {
      color: #fff;
    }
    i {
      display: inline-block;
      position: relative;
      top: 3px;
      left: -26px;
      width: 15px;
      height: 17px;
      background: url(../../assets/image/fenlei.png) no-repeat -12px -343px;
    }
  }
  // 横向分类S
  .nav-sub {
    display: flex;
    width: 1020px;
    min-width: 1020px;
    height: 36px;
    border-bottom: 2px solid #0066d4;
    .nav-item {
      // width: 64px;
      padding: 0 15px;
      font-weight: 600;
      &:hover {
        background-color: #0066d4;
        a {
          color: #fff;
          transition: none;
          -webkit-transition: none;
        }
      }
    }
  }
  // 横向分类E
}
// 轮播图最外层的壳子
.layout-main-banner {
  height: 460px;
  // 轮播左边的分类
  .banner-classification {
    position: relative;
    width: 180px;
    min-width: 180px;
    height: 100%;
    text-align: center;
    background-color: #197ee9;
    .banner-item {
      padding: 14px 0;
      color: #fff;
      i {
        position: relative;
        display: inline-block;
        top: 5px;
        left: -25px;
        width: 15px;
        height: 17px;
        background: url(../../assets/image/fenlei.png) no-repeat -12px -304px;
      }
      a {
        display: inline-block;
        width: 56px;
        color: #fff;
      }
      span {
        font-size: 12px;
        position: relative;
        right: -30px;
      }
      &:nth-child(2) i {
        background-position: -51px -65px;
      }
      &:nth-child(3) i {
        background-position: -51px -382px;
      }
      &:nth-child(5) i {
        background-position: -12px -262px;
      }
      &:nth-child(6) i {
        background-position: -51px -104px;
      }
      &:nth-child(7) i {
        background-position: -12px -185px;
      }
      &:nth-child(4) i {
        background-position: -11px -62px;
      }
      &:nth-child(8) i {
        background-position: -12px -104px;
      }
      &:nth-child(9) i {
        background-position: -51px -382px;
      }
      // 移入分类
      &:hover {
        background-color: #0066d4;
      }
      &:nth-child(1):hover .second-level-container,
      &:nth-child(2):hover .second-level-container,
      &:nth-child(3):hover .second-level-container,
      &:nth-child(4):hover .second-level-container,
      &:nth-child(5):hover .second-level-container,
      &:nth-child(6):hover .second-level-container,
      &:nth-child(7):hover .second-level-container,
      &:nth-child(8):hover .second-level-container,
      &:nth-child(9):hover .second-level-container {
        display: flex;
      }
      // 二级分类
      .second-level-container {
        display: none;
        position: absolute;
        top: 0;
        left: 180px;
        width: 1020px;
        min-width: 1020px;
        background-color: #eee;
        flex-wrap: wrap;
        padding: 5px 20px;
        z-index: 1000;
        .second-level-sub {
          display: flex;
          width: 25%;
          flex-wrap: wrap;
          margin-bottom: 13px;
          .second-level-item {
            margin-right: 10%;
            margin-bottom: 5px;
            &:nth-child(1) {
              width: 100%;
              margin-bottom: 5px;
            }
            &:nth-child(1) a {
              display: block;
              width: 100%;
              font-weight: 900;
              font-size: 14px;
              text-align: left;
            }
          }
          a {
            white-space: nowrap;
            text-align: left;
            color: #333;
            font-size: 12px;
            &:hover {
              color: red;
            }
          }
        }
      }
    }
  }
  // 轮播
  .banner {
    width: 810px;
    min-width: 810px;
    height: 460px;
    .el-carousel__container {
      height: 460px;
    }
  }
  // 广告
  .banner-menu {
    width: 210px;
    min-width: 210px;
    height: 460px;
    // 认证6个图标S
    .banner-menu-container {
      display: flex;
      flex-wrap: wrap;
      height: 155px;
      text-align: center;
      .banner-menu-item {
        width: 33.33%;
        &:nth-child(2) i {
          background: url(../../assets/image/zheng2.png) no-repeat;
        }
        &:nth-child(3) i {
          background: url(../../assets/image/zheng6.png) no-repeat;
        }
        &:nth-child(4) i {
          background: url(../../assets/image/zheng4.png) no-repeat;
        }
        &:nth-child(5) i {
          background: url(../../assets/image/zheng5.png) no-repeat;
        }
        &:nth-child(6) i {
          background: url(../../assets/image/zheng3.png) no-repeat;
        }
        i,
        span {
          display: block;
        }
        i {
          width: 43px;
          height: 42px;
          margin: 5px auto;
          background: url(../../assets/image/zheng1.png) no-repeat;
        }
        span {
          font-size: 12px;
        }
      }
    }
    // 认证6个图标E
    .banner-menu-contact {
      height: 40px;
      line-height: 40px;
      border-top: 1px solid #efefef;
      border-bottom: 1px solid #efefef;
      padding-left: 10px;
      span:last-child {
        color: #ff0700;
        font-weight: 600;
      }
      i {
        display: inline-block;
        position: relative;
        top: 2px;
        width: 13px;
        height: 13px;
        margin-left: 15px;
        margin-right: 8px;
        background: url(../../assets/image/ico_t2.png) no-repeat -3px -48px;
      }
    }
    // 监管信息
    .banner-menu-info {
      height: 40px;
      line-height: 40px;
      padding-left: 10px;
    }
    // 广告
    .banner-menu-advertisement {
      img {
        width: 210px;
        height: 225px;
      }
    }
  }
}
// 秒杀倒计时壳子
.layout-main-seckill {
  margin-top: 35px;
  padding: 0;
  .seckill-container {
    display: flex;
    justify-content: space-between;
    min-width: 1200px;
    height: 44px;
    line-height: 44px;
    margin-left: 10px;
    background-color: #e01222;
    .seckill-title {
      margin-left: 30px;
      span {
        font-size: 20px;
        color: #fff;
      }
      i {
        display: inline-block;
        position: relative;
        top: 6px;
        left: 20px;
        width: 27px;
        height: 30px;
        background: url(../../assets/image/fenlei.png) no-repeat -51px -10px;
      }
    }
    .seckill-time {
      margin-right: 23px;
      span {
        color: #fff;
        &:nth-child(2n) {
          background-color: #440106;
          padding: 5px;
          font-size: 20px;
        }
      }
    }
  }
}
// 特色会场壳子
.layout-main-characteristic {
  position: relative;
  margin-top: 50px;
  .characteristic-line {
    position: relative;
    top: 30px;
    width: 1200px;
    min-width: 1200px;
    height: 50px;
    p {
      height: 1px;
      border: 1px solid #e44b7d;
    }
  }
  .characteristic-title {
    position: absolute;
    top: 0;
    left: 50%;
    width: 200px;
    margin-left: -100px;
    text-align: center;
    background-color: #fff;
    z-index: 10;
    h1 {
      font-weight: 100;
      font-size: 40px;
      background-image: -webkit-gradient(
        linear,
        0 0,
        0 bottom,
        from(rgba(227, 100, 81, 1)),
        to(rgba(235, 137, 166, 1))
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  // 特色会场
  .characteristic-container {
    width: 1200px;
    min-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    .characteristic-item {
      width: 24%;
      margin-right: 1.15%;
      margin-bottom: 3px;
      &:nth-child(4n) {
        margin-right: 0;
      }
      a {
        display: block;
        position: relative;
        .characteristic-fff {
          position: absolute;
          bottom: 20px;
          width: 255px;
          height: 135px;
          background: url(../../assets/image/pro_bg.png) no-repeat;
          left: 20px;
          text-align: center;
          padding: 37px 25px 0;
          cursor: pointer;
          h3 {
            font-size: 18px;
          }
          p {
            margin-top: 10px;
            padding-top: 10px;
            border-top: 1px dashed #999;
          }
        }
      }
    }
  }
}
// 热门类目
.layout-main-hot {
  margin-top: 20px;
  h2 {
    font-size: 24px;
    font-weight: 100;
  }
}
//   热门品牌
.layout-main-brand {
  margin-top: 20px;
  h2 {
    font-size: 24px;
  }
  .brand-container {
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
    min-width: 1200px;
    margin-top: 20px;
    border-right: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
    .brand-item {
      border-left: 1px solid #efefef;
      border-top: 1px solid #efefef;
    }
  }
}
</style>
