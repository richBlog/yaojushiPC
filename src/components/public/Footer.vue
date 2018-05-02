<template>
	<footer class="layout-footer-container">
		<!-- 认证 -->
		<div class="layout-footer-brank">
			<ul class="container brank-box">
				<li v-for="item in brankImg" :key="item.id" class="brank-box-item">
					<div class="brank-item-img"><img :src="item.img" alt="img" :data-src="item.img"></div>
					<div class="brank-item-content">
						<p v-text="item.name"></p>
						<h5 v-text="item.explain"></h5>
					</div>
				</li>
			</ul>
		</div>
		<!-- 微信二维码 -->
		<div class="layout-footer-wx">
			<div class="container wx-container">
				<div class="wx">
					<div>
						<span>手机购药</span>
						<img :src="wxImg" alt="手机">
					</div>
					<div>
						<span>微信购药</span>
						<img :src="wxImg" alt="微信">
					</div>
				</div>
				<div class="wx-sm">
					<ul class="wx-sm-box">
						<li class="wx-sm-item"  v-for="item in wxHlep" :key="item.id">
							<p v-text="item.title"></p>
							<router-link :to="items.url" v-for="items in item.text" :key="items.id" v-text="items.name"></router-link>
						</li>
					</ul>
				</div>
				<!-- 联系电话 -->
				<ul class="wx-tel">
					<li class="wx-tel-item" v-for="item in wxTel" :key="item.id" v-text="item.name"></li>
				</ul>
			</div>
		</div>
		<!-- 友情链接 -->
		<ul class="container flex layout-footer-government link">
			<li><b>政府机构:</b></li>
			<li v-for="item in governmentLink" :key="item.id"><router-link :to="item.url" v-text="item.name"></router-link></li>
		</ul>
		<ul class="container flex layout-footer-link link">
			<li><b>友情链接:</b></li>
			<li v-for="item in link" :key="item.id"><router-link :to="item.url" v-text="item.name"></router-link></li>
		</ul>
    <div class="layout-footer-me">
      <div class="container">
        <div class="me-box">
          <router-link :to="item.url" v-for="item in me" :key="item.id" v-text="item.name"></router-link>
        </div>
        <div class="me-box">
          <router-link :to="item.url" v-for="item in governmentData" :key="item.id" v-text="item.name"></router-link>
        </div>
        <div class="copyright">©2010-2016 <router-link to="/">武汉药居士网上药店</router-link> 版权所有，并保留所有权利</div>
      </div>
    </div>
	</footer>
</template>
<script>
export default {
  name: "footerView",
  data() {
    return {
      brankImg: [
        {
          name: "正品保证",
          explain: "国家认证 正规合法",
          img: require("../../assets/image/zheng1.png")
        },
        {
          name: "专业药师",
          explain: "用药全程指导 ",
          img: require("../../assets/image/zheng2.png")
        },
        {
          name: "厂家授权 ",
          explain: "厂家授权 正品渠道",
          img: require("../../assets/image/zheng6.png")
        },
        {
          name: "货到付款",
          explain: "货到付款 购药无忧",
          img: require("../../assets/image/zheng4.png")
        },
        {
          name: "隐私配送",
          explain: "安全放心 隐私配送",
          img: require("../../assets/image/zheng5.png")
        },
        {
          name: "满79元包邮",
          explain: "全场满79元包邮",
          img: require("../../assets/image/zheng3.png")
        }
      ],
      wxImg: require("../../assets/image/wx1.png"),
      //   说明
      wxHlep: [
        {
          title: "新手指南",
          text: [
            {
              name: "购物流程",
              url: "#"
            },
            {
              name: "积分说明",
              url: "#"
            },
            {
              name: "会员级别",
              url: "#"
            },
            {
              name: "优惠券",
              url: "#"
            },
            {
              name: "常见问题",
              url: "#"
            }
          ]
        },
        {
          title: "配送方式",
          text: [
            {
              name: "配送范围及运费",
              url: "#"
            },
            {
              name: "隐私配送",
              url: "#"
            },
            {
              name: "商品验收及签收",
              url: "#"
            }
          ]
        },
        {
          title: "支付方式",
          text: [
            {
              name: "货到付款",
              url: "#"
            },
            {
              name: "网上支付",
              url: "#"
            },
            {
              name: "银行转账",
              url: "#"
            }
          ]
        },
        {
          title: "售后服务",
          text: [
            {
              name: "退换货流程",
              url: "#"
            },
            {
              name: "退换货政策",
              url: "#"
            },
            {
              name: "退款流程",
              url: "#"
            }
          ]
        },
        {
          title: "特色服务",
          text: [
            {
              name: "会员及俱乐部",
              url: "#"
            },
            {
              name: "投诉建议",
              url: "#"
            },
            {
              name: "用药咨询",
              url: "#"
            },
            {
              name: "免费声明",
              url: "#"
            }
          ]
        }
      ],
      //   联系电话
      wxTel: [
        { name: "药居士订购热线" },
        { name: "400-8001-123" },
        { name: "服务时间 08:30-23:00" },
        { name: "药居士售后专线" },
        { name: "020-89898981" },
        { name: "服务时间 08:30-23:00" }
      ],
      //   政府链接
      governmentLink: [
        {
          name: "国家卫生和计划生育委员会",
          url: "http://www.nhfpc.gov.cn/"
        },
        {
          name: "国家食品药品监督管理总局",
          url: "http://www.sfda.gov.cn/WS01/CL0001/"
        },
        {
          name: "广东省卫生和计划生育委员会",
          url: "http://www.gdwst.gov.cn/"
        },
        {
          name: "广东省食品药品监督管理局",
          url:
            "http://www.gdda.gov.cn/publicfiles/business/htmlfiles/jsjzz/index.htm"
        }
      ],
      //   友情链接
      link: [
        {
          name: "环球医药招商网",
          url: "http://www.qgyyzs.net"
        },
        {
          name: "皮肤病",
          url: "http://pfk.360kad.com/"
        },
        {
          name: "药品文章",
          url: "http://ypk.39.net"
        },
        {
          name: "摇篮育儿问答",
          url: "http://ask.yaolan.com/"
        },
        {
          name: "医药招商网",
          url: "http://www.yy960.com"
        },
        {
          name: "中华康网",
          url: "http://www.cnkang.com/"
        },
        {
          name: "69健康",
          url: "http://www.69jk.cn"
        },
        {
          name: "中药材",
          url: "http://www.zyctd.com/"
        }
      ],
      // 关于我们
      me: [
        {
          name: "批发商洽",
          url: "#"
        },
        {
          name: "关于我们",
          url: "#"
        },
        {
          name: "掌声药店",
          url: "#"
        },
        {
          name: "实体药店",
          url: "#"
        },
        {
          name: "加入药居士",
          url: "#"
        },
        {
          name: "联系我们",
          url: "#"
        },
        {
          name: "经营认证",
          url: "#"
        },
        {
          name: "友情链接",
          url: "#"
        },
        {
          name: "TAG列表",
          url: "#"
        },
        {
          name: "网站地图",
          url: "#"
        },
        {
          name: "CPS联盟",
          url: "#"
        }
      ],
      governmentData: [
        {
          name: "国家食品药品监督管理总局-数据查询",
          url: "http://qy1.sfda.gov.cn/datasearch/face3/dir.html"
        },
        {
          name: "广东省食品药品监督管理局-数据库查询",
          url: "http://219.135.157.143/gdyj/sjwz/Main.faces?menuId=1&navId=1"
        }
      ]
    };
  }
};
</script>
<style lang="less">
// 品牌认证
.layout-footer-brank {
  background-color: #1a82ee;
  height: 105px;
  border-bottom: 1px solid #0c74df;
  .brank-box {
    height: 105px;
    display: flex;
    align-items: center;
    .brank-box-item {
      flex-grow: 1;
      div {
        display: inline-block;
        text-align: left;
        &:first-child {
          margin-right: 10px;
        }
        p {
          font-size: 19px;
          color: #fff;
        }
        h5 {
          color: #fff;
        }
      }
    }
  }
}
// 微信和手机二维码
.layout-footer-wx {
  background-color: #1a82ee;
  height: 245px;
  margin-bottom: 14px;
  // 二维码
  .wx-container {
    height: 245px;
    padding: 42.5px 0;
    display: flex;
    .wx {
      display: flex;
      border-right: 1px solid #0c74df;
      div {
        margin-right: 35px;
      }
      span {
        display: block;
        color: #fff;
      }
    }
  }
  // 帮助说明
  .wx-sm {
    padding-left: 40px;
    border-right: 1px solid #0c74df;
    .wx-sm-box {
      display: flex;
      .wx-sm-item {
        margin-right: 47px;
        &:last-child {
          margin-right: 40px;
        }
        p {
          font-size: 20px;
          color: #fff;
        }
        a {
          display: block;
          color: #fff;
          &:hover {
            color: red;
          }
        }
      }
    }
  }
  //   联系电话
  .wx-tel {
    margin-left: 47px;
    .wx-tel-item {
      color: #fff;
      text-align: left;
      font-size: 12px;
      &:nth-child(2),
      &:nth-child(5) {
        font-size: 26px;
      }
    }
  }
}
// 友情链接
.link {
  padding-left: 10px;
  li {
    margin-right: 15px;
    a:hover {
      color: red;
    }
  }
}
// 底部信息
.layout-footer-me {
  margin-top: 10px;
  border-top: 1px solid #efefef;
  padding-top: 10px;
  padding-bottom: 100px;
  .me-box {
    a {
      color: #777;
      padding: 0 8px;
      border-right: 1px solid #777;
      &:last-child {
        border: 0;
      }
      &:hover {
        color: red;
      }
    }
  }
  .copyright{
    color: #777;
    a{
      color: #777;
      &:hover{
        color: red;
      }
    }
  }
}
</style>
