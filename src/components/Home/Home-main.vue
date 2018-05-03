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
            <router-link to="/"><img class="my-photo" alt="轮播图" :data-src="item"></router-link>
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
         <div class="banner-menu-advertisement"><router-link to="/"><img class="my-photo" :data-src="advertisement" alt="广告"></router-link></div>
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
     <div class="container layout-main-hot" id="t1">
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
     <elevatorView v-for="item in elevator" :key="item.id" :elevator = "item" :id="item.tId"></elevatorView>
     <!-- 电梯楼层1F E -->
     <!-- 热门品牌S -->
     <div class="container layout-main-brand">
        <h2>热门品牌</h2>
        <ul class="brand-container">
            <li class="brand-item" v-for="item in brand" :key="item.id">
            <router-link :to="item.url">
                <img class="my-photo" alt="品牌" :data-src="item.img">
            </router-link>
            </li>
        </ul>
     </div>
     <!-- 热门品牌E -->
  </section>
</template>
<script>
import hotView from "./Home-hot";
import elevatorView from "./Home-elevator";
import cm from "apis/common";

export default {
  name: "homeMain",
  components: {
    hotView,
    elevatorView
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
          tId: "t2",
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
          tId: "t3",
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
          tId: "t4",
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
          tId: "t5",
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
          tId: "t6",
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
  @import '../../styles/Home-main.less';
</style>
