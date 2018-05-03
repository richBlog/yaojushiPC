<template>
	<aside class="container layout-life" v-show="isShow">
		<ul class="life-container">
			<li :class="'life-item '+item.tId" v-for="item in menu" :key="item.id"><a :href="'#'+item.tId" v-text="item.name"></a></li>
			<li class="life-item" @click="upTop()"><span>顶部</span><i class="el-icon-caret-top"></i></li>
		</ul>
	</aside>
</template>
<script>
import cm from "../../apis/common";
export default {
  name: "lifeView",
  data() {
    return {
      menu: [
        {
          tId: "t1",
          name: "热门类目"
        },
        {
          tId: "t2",
          name: "家庭常备"
        },
        {
          tId: "t3",
          name: "母婴乐园"
        },
        {
          tId: "t4",
          name: "男科医药"
        },
        {
          tId: "t5",
          name: "滋补保健"
        },
        {
          tId: "t6",
          name: "医疗器械"
        }
      ],
      isShow: false
    };
  },
  created() {
    // this.elevatorScroll();
  },
  mounted() {
    this.$nextTick(() => {
      this.elevatorScroll();
    });
  },
  methods: {
    elevatorScroll() {
      window.onload = () => {
        this.checkImgs();
        window.onscroll = () => {
          // this.throttle(this.checkImgs);
          this.checkImgs();
          this.scrollMonitor();
        };
      };
    },

    isInSight(el) {
      const bound = el.getBoundingClientRect();
      const clientHeight = window.innerHeight;
      //如果只考虑向下滚动加载
      //const clientWidth=window.innerWeight;
      return bound.top <= clientHeight + 100;
    },
    checkImgs() {
      console.log(111);
      let _this = this;
      let index = 0;
      const imgs = document.querySelectorAll(".my-photo");
      for (let i = index; i < imgs.length; i++) {
        if (_this.isInSight(imgs[i])) {
          _this.loadImg(imgs[i]);
          index = i;
        }
      }
    },
    loadImg(el) {
      if (!el.src) {
        const source = el.dataset.src;
        console.log(source);
        el.src = source;
      }
    },
    throttle(fn, mustRun = 500) {
      const timer = null;
      let previous = null;
      return function() {
        const now = new Date();
        const context = this;
        const args = arguments;
        if (!previous) {
          previous = now;
        }
        const remaining = now - previous;
        if (mustRun && remaining >= mustRun) {
          fn.apply(context, args);
          previous = now;
        }
      };
    },
    //   电梯滚动监控
    scrollMonitor() {
      let t = document.documentElement.scrollTop || document.body.scrollTop; //获取距离页面顶部的距离
      // t1-t7获取对应的楼层到顶部的距离
      let t1 = document.querySelector("#t1").offsetTop - 1;
      let t2 = document.querySelector("#t2").offsetTop - 1;
      let t3 = document.querySelector("#t3").offsetTop - 1;
      let t4 = document.querySelector("#t4").offsetTop - 1;
      let t5 = document.querySelector("#t5").offsetTop - 1;
      let t6 = document.querySelector("#t6").offsetTop - 1;
      let t7 = t6 + 654;
      //判断显示和隐藏的距离
      if (t > 1000 && t < t7) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
      // 根据楼层距离让对应的楼层亮起背景色
      if (t >= t1 && t < t2) {
        cm.removeClass(".life-item", "active");
        document.querySelector(".t1").classList.add("active");
      } else if (t >= t2 && t < t3) {
        cm.removeClass(".life-item", "active");
        document.querySelector(".t2").classList.add("active");
      } else if (t >= t3 && t < t4) {
        cm.removeClass(".life-item", "active");
        document.querySelector(".t3").classList.add("active");
      } else if (t >= t4 && t < t5) {
        cm.removeClass(".life-item", "active");
        document.querySelector(".t4").classList.add("active");
      } else if (t >= t5 && t < t6) {
        cm.removeClass(".life-item", "active");
        document.querySelector(".t5").classList.add("active");
      } else if (t >= t6 && t < t7) {
        cm.removeClass(".life-item", "active");
        document.querySelector(".t6").classList.add("active");
      } else {
        cm.removeClass(".life-item", "active");
      }
    },
    // 回到顶部
    upTop() {
      cm.top(); // 调用公共回到顶部函数
    }
  }
};
</script>
<style lang="less">
.layout-life {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -670px;
  margin-top: -143px;
  .life-container {
    width: 34px;
    background-color: #918888;
    text-align: center;
    .life-item {
      padding: 5px;
      border-bottom: 1px solid #fff;
      &:last-child {
        border: 0;
      }
      &:hover {
        background-color: #1a82ee;
      }
      &.active {
        background-color: #1a82ee;
      }
    }
    a,
    span {
      font-size: 12px;
      color: #fff;
      cursor: pointer;
    }
    i {
      color: #fff;
    }
  }
}
</style>
