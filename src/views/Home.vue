<template>
    <div class="layout-home">
        <el-header>
            <headerView></headerView>
        </el-header>
        <el-main>
            <homeMain></homeMain>
        </el-main>
        <el-footer>
            <footerView></footerView>
        </el-footer>
        <lifeView :isShow=isShow></lifeView>
        <navigationView></navigationView>
    </div>
</template>
<script>
import headerView from "components/public/Header";
import homeMain from "components/home/Home-main";
import footerView from "components/public/Footer";
import lifeView from "components/home/Home-life";
import navigationView from "components/home/Home-navigation";
import cm from "apis/common";
export default {
    name: "Home",
    components: {
        headerView,
        homeMain,
        footerView,
        lifeView,
        navigationView
    },
    data() {
        return {
            isShow: false
        };
    },
    mounted() {
        let _this = this;
        this.checkImgs();
        window.addEventListener("scroll", this.scrollList);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.scrollList, false);
    },
    methods: {
        scrollList() {
            this.checkImgs();
            this.scrollMonitor();
        },
        isInSight(el) {
            const bound = el.getBoundingClientRect();
            const clientHeight = window.innerHeight;
            //如果只考虑向下滚动加载
            //const clientWidth = window.innerWeight;
            return bound.top <= clientHeight + 100;
        },
        checkImgs() {
            console.log(111);
            let _this = this;
            let index = 0;
            const imgs = document.querySelectorAll(".my-photo");
            Array.from(imgs).forEach(el => {
                console.log(el)
                if (this.isInSight(el)) {
                    this.loadImg(el);
                }
            });
        },
        loadImg(el) {
            if (!el.src) {
                const source = el.dataset.src;
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
            let t =
                document.documentElement.scrollTop || document.body.scrollTop; //获取距离页面顶部的距离
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
        }
    }
};
</script>
<style lang="less">
.el-header,
.el-footer {
    padding: 0;
    color: #333;
    text-align: center;
    line-height: 30px;
    height: auto !important;
}
</style>
