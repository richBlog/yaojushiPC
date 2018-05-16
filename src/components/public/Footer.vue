<template>
    <el-footer class="layout-footer-container">
        <!-- 认证 -->
        <div class="layout-footer-brank">
            <ul class="container brank-box">
                <li v-for="item in brankImg" :key="item.id" class="brank-box-item">
                    <div class="brank-item-img"><img v-lazy="item.img" alt="img" :data-src="item.img"></div>
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
                        <img v-lazy="wxImg" alt="手机">
                    </div>
                    <div>
                        <span>微信购药</span>
                        <img v-lazy="wxImg" alt="微信">
                    </div>
                </div>
                <div class="wx-sm">
                    <ul class="wx-sm-box">
                        <li class="wx-sm-item" v-for="item in wxHlep" :key="item.id">
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
                    <router-link :to="item.url" target="_blank" v-for="item in me" :key="item.id" v-text="item.name"></router-link>
                </div>
                <div class="me-box">
                    <a :href="item.url" target="_blank" v-for="item in governmentData" :key="item.id" v-text="item.name"></a>
                </div>
                <div class="copyright">©2010-2016
                    <router-link to="/">武汉药居士网上药店</router-link> 版权所有，并保留所有权利</div>
            </div>
        </div>
    </el-footer>
</template>
<script>
export default {
    name: "footerView",
    data() {
        return {
            brankImg: [],
            wxImg: '',
            wxHlep: [],
            wxTel: [],
            governmentLink: [],
            link:[],
            me:[],
            governmentData:[]
        };
    },
    created(){
        this.$ajax({
            url: 'https://easy-mock.com/mock/5af8e2bb0d7ff97d1fdc9341/footer',
            method: 'get'
        }).then(response=>{
            let data = response.data.data;
            this.brankImg = data.brankImg;
            this.wxImg = data.wxImg;
            this.wxHlep = data.wxHlep;
            this.wxTel = data.wxTel;
            this.governmentLink = data.governmentLink;
            this.link = data.link;
            this.me = data.me;
            this.governmentData = data.governmentData;
        }).catch(error=>{
            console.log(error)
        })
    }
};
</script>
<style lang="less">
@import "../../styles/Footer.less";
</style>
