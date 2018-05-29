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
            isShow: false,
            ticking : false
        };
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll, false);
    },
    methods: {

        onScroll(){
            if(!this.ticking){
                requestAnimationFrame(this.scrollMonitor)
                this.ticking = true;
            }
        },
        //   电梯滚动监控
        scrollMonitor() {
            console.log('zhixingl ')
            let t =
                document.documentElement.scrollTop || document.body.scrollTop; //获取距离页面顶部的距离
            // t1-t7获取对应的楼层到顶部的距离
            let t1 = document.querySelector("#t1").offsetTop-340;
            let t2 = document.querySelector("#t2").offsetTop-240;
            let t3 = document.querySelector("#t3").offsetTop-240;
            let t4 = document.querySelector("#t4").offsetTop-240;
            let t5 = document.querySelector("#t5").offsetTop-240;
            let t6 = document.querySelector("#t6").offsetTop-240;
            let t7 = t6+500;

            //判断显示和隐藏的距离
            if (t > 1000 && t < t7) {
                this.isShow = true;
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
            } else {
                this.isShow = false;
            }

            this.ticking = false;
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
