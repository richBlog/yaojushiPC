<template>
  <el-footer class="layout-footer-container">
    <!-- 认证 -->
    <div
      class="layout-footer-brank"
      :class="{
        active: state == 2,
        active1: state == 3,
        active2: state == 4,
        active3: state == 1,
      }"
    >
      <ul class="container brank-box">
        <li v-for="item in brankImg" :key="item.id" class="brank-box-item">
          <div class="brank-item-img">
            <img v-lazy="item.img" alt="img" :data-src="item.img" />
          </div>
          <div class="brank-item-content">
            <p v-text="item.name"></p>
            <h5 v-text="item.explain"></h5>
          </div>
        </li>
      </ul>
    </div>
    <!-- 微信二维码 -->
    <div
      class="layout-footer-wx"
      :class="{
        active: state == 2,
        active1: state == 3,
        active2: state == 4,
        active3: state == 1,
      }"
    >
      <div class="container wx-container">
        <div
          class="wx"
          :class="{
            active: state == 2 || state == 3 || state == 4 || state == 1,
          }"
        >
          <div>
            <span>手机购药</span>
            <img v-lazy="wxImg" alt="手机" />
          </div>
          <div>
            <span>微信购药</span>
            <img v-lazy="wxImg" alt="微信" />
          </div>
        </div>
        <div
          class="wx-sm"
          :class="{
            active: state == 2 || state == 3 || state == 4 || state == 1,
          }"
        >
          <ul class="wx-sm-box">
            <li class="wx-sm-item" v-for="item in wxHlep" :key="item.id">
              <p v-text="item.title"></p>
              <router-link
                :to="items.url"
                v-for="items in item.text"
                :key="items.id"
                v-text="items.name"
              ></router-link>
            </li>
          </ul>
        </div>
        <!-- 联系电话 -->
        <ul class="wx-tel">
          <li
            class="wx-tel-item"
            v-for="item in wxTel"
            :key="item.id"
            v-text="item.name"
          ></li>
        </ul>
      </div>
    </div>
    <!-- 友情链接 -->
    <ul class="container flex layout-footer-government link">
      <li>
        <b>政府机构:</b>
      </li>
      <li v-for="item in governmentLink" :key="item.id">
        <a :href="item.url" target="_blank" v-text="item.name"></a>
      </li>
    </ul>
    <ul class="container flex layout-footer-link link">
      <li>
        <b>友情链接:</b>
      </li>
      <li v-for="item in link" :key="item.id">
        <a :href="item.url" target="_blank" v-text="item.name"></a>
      </li>
    </ul>
    <div class="layout-footer-me">
      <div class="container">
        <div class="me-box">
          <router-link
            :to="item.url"
            target="_blank"
            v-for="item in me"
            :key="item.id"
            v-text="item.name"
          ></router-link>
        </div>
        <div class="me-box">
          <a
            :href="item.url"
            target="_blank"
            v-for="item in governmentData"
            :key="item.id"
            v-text="item.name"
          ></a>
        </div>
        <div class="copyright">
          ©2017年-至今
          <router-link to="/" target="_blank">武汉药居士网上药店</router-link>
          版权所有，并保留所有权利
        </div>
        <div>
          <a
            class="ml5"
            :href="item.url"
            target="_blank"
            v-for="item in baList"
            :key="item.id"
          >
            <img :src="item.img" alt="" />
          </a>
        </div>
      </div>
    </div>
  </el-footer>
</template>
<script>
export default {
  props: ["state"],
  name: "footerView",
  data() {
    return {
      baList: [
        {
          url: "http://gaj.wuhan.gov.cn/",
          img: require("../../assets/image/ba1.png"),
        },
        {
          url: "http://beian.miit.gov.cn/publish/query/indexFirst.action",
          img: require("../../assets/image/ba2.png"),
        },
        {
          url: "https://www.12377.cn/",
          img: require("../../assets/image/ba3.png"),
        },
      ],
      brankImg: [
        {
          name: "正品保证",
          explain: "国家认证 正规合法",
          img: require("../../assets/image/zheng1.png"),
        },
        {
          name: "专业药师",
          explain: "用药全程指导 ",
          img: require("../../assets/image/zheng2.png"),
        },
        {
          name: "24h服务",
          explain: "24h客服 在线服务",
          img: require("../../assets/image/24H.png"),
        },
        {
          name: "货到付款",
          explain: "货到付款 购药无忧",
          img: require("../../assets/image/zheng4.png"),
        },
        {
          name: "隐私配送",
          explain: "安全放心 隐私配送",
          img: require("../../assets/image/zheng5.png"),
        },
        {
          name: "满88元包邮",
          explain: "全场满88元包邮",
          img: require("../../assets/image/88.png"),
        },
      ],
      wxImg: require("../../assets/image/wx1.png"),
      //   说明
      wxHlep: [
        {
          title: "新手指南",
          text: [
            {
              name: "购物流程",
              url: "/HelpCenter/shoppingGuide",
            },
            {
              name: "积分说明",
              url: "/HelpCenter/integralExplanation",
            },
            {
              name: "会员级别",
              url: "/HelpCenter/vipGrade",
            },
            {
              name: "优惠券",
              url: "/HelpCenter/coupon",
            },
            {
              name: "常见问题",
              url: "/HelpCenter/commonProblem",
            },
          ],
        },
        {
          title: "配送方式",
          text: [
            {
              name: "配送范围及运费",
              url: "/HelpCenter/deliveryFreight",
            },
            {
              name: "隐私配送",
              url: "/HelpCenter/deliveryPrivacy",
            },
            {
              name: "商品验收及签收",
              url: "/HelpCenter/receipt",
            },
          ],
        },
        {
          title: "支付方式",
          text: [
            {
              name: "货到付款",
              url: "/HelpCenter/toPay",
            },
            {
              name: "网上支付",
              url: "/HelpCenter/onlinePay",
            },
            // {
            //     name: "银行转账",
            //     url: "#"
            // }
          ],
        },
        {
          title: "售后服务",
          text: [
            {
              name: "退换货流程",
              url: "/HelpCenter/returns",
            },
            {
              name: "退换货政策",
              url: "/HelpCenter/returnsPolicy",
            },
            {
              name: "退款流程",
              url: "/HelpCenter/refund",
            },
          ],
        },
        {
          title: "特色服务",
          text: [
            // {
            //     name: "会员及俱乐部",
            //     url: "#"
            // },
            {
              name: "投诉建议",
              url: "/Personal/proposal",
            },
            // {
            //     name: "用药咨询",
            //     url: "#"
            // },
            {
              name: "免费声明",
              url: "/HelpCenter/relief",
            },
          ],
        },
      ],
      //   联系电话
      wxTel: [
        { name: "药居士订购热线" },
        { name: "027-83215071" },
        { name: "服务时间 08:30-23:00" },
        { name: "药居士售后专线" },
        { name: "027-83898312" },
        { name: "服务时间 08:30-23:00" },
      ],
      //   政府链接
      governmentLink: [
        {
          name: "国家卫生和计划生育委员会",
          url: "http://www.nhfpc.gov.cn/",
        },
        {
          name: "国家食品药品监督管理总局",
          url: "http://www.sfda.gov.cn/WS01/CL0001/",
        },
        {
          name: "湖北省卫生和计划生育委员会",
          url: "http://www.hbwsjs.gov.cn/",
        },
        {
          name: "湖北省食品药品监督管理局",
          url: "http://www.hubfda.gov.cn/",
        },
      ],
      //   友情链接
      link: [
        {
          name: "环球医药招商网",
          url: "http://www.qgyyzs.net",
        },
        {
          name: "皮肤病",
          url: "http://pfk.360kad.com/",
        },
        {
          name: "药品文章",
          url: "http://ypk.39.net",
        },
        {
          name: "摇篮育儿问答",
          url: "http://ask.yaolan.com/",
        },
        {
          name: "医药招商网",
          url: "http://www.yy960.com",
        },
        {
          name: "中华康网",
          url: "http://www.cnkang.com/",
        },
        {
          name: "69健康",
          url: "http://www.69jk.cn",
        },
        {
          name: "中药材",
          url: "http://www.zyctd.com/",
        },
      ],
      // 关于我们
      me: [
        {
          name: "关于我们",
          url: "/HelpCenter/introduce",
        },
        {
          name: "掌声药店",
          url: "/HelpCenter/palmar",
        },
        {
          name: "实体药店",
          url: "/HelpCenter/pharmacy",
        },
        {
          name: "加入药居士",
          url: "/HelpCenter/recruit",
        },
        {
          name: "联系我们",
          url: "/HelpCenter/contact",
        },
        {
          name: "经营认证",
          url: "/HelpCenter/aptitude",
        },
      ],
      governmentData: [
        {
          name: "国家食品药品监督管理总局-数据查询",
          url: "http://qy1.sfda.gov.cn/datasearch/face3/dir.html",
        },
        {
          name: "湖北省食品药品监督管理局-数据查询",
          url: "http://www.hubfda.gov.cn/info/iList.jsp?tm_id=254",
        },
      ],
    };
  },
};
</script>
<style lang="less">
@import "../../styles/Footer.less";
.ml5 {
  margin: 0 3px;
}
</style>
