<template>
    <el-header class="layout-header">
        <NavView/>
        <!-- logo+搜索 s -->
        <div class="layout-logo-container container">
            <div class="layout-logo">
                <router-link to="/"><img src="../../assets/image/logo.png" alt="logo"></router-link>
                <ul ref="scrollMain" class="scroll-main">
                    <li><a href="">sssss</a></li>
                    <li><a href="">sssfff</a></li>
                    <li><a href="">dd</a></li>
                    <li><a href="">sssss</a></li>
                </ul>
            </div>
            <div class="layout-search" @mouseleave="dropHide">
                <div class="search-frame">
                    <input class="search-btn" @click="searchData(input,searchKeyword)" type="button" value="搜索"><input v-model="input" @input="getSearchData" class="search-box" type="text" :placeholder="searchKeyword">
                    <ul :class="active?'drop-frame':'drop-frame active'">
                        <li class="drop-item" v-for="(item,index) in keyword" :key="index" @click="goSearch(item)">{{item}}</li>
                    </ul>
                </div>
                <ul class="search-quick">
                    <li class="keyword" v-for="item in quickKeyword" :key="item.id">
                        <span @click="goSearch(item)">{{item}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <!-- logo+搜索 e -->
    </el-header>
</template>
<script>
import NavView from "components/public/NavView";

export default {
    components: {
        NavView
    },
    name: "HeaderView",
    data() {
        return {
            // 搜索框里面的关键字
            input: "",
            searchKeyword: "咽喉痛",
            // 快捷搜索的关键字
            quickKeyword: [
                "营养保健",
                "护肤美肌",
                "立即优惠",
                "营养保健",
                "护肤美肌",
                "立即优惠"
            ],
            keyword: [],
            active: true
        };
    },
    mounted(){
        this.topScroll();
    },
    methods: {
        topScroll(){
            let time = null;
            let n = 0;
            time = setInterval(this.scrollNews(n),1000);
        },
        scrollNews(n){
            console.log(n);
            this.$refs.scrollMain.style.top = n + 10 +'px';
        },
        // 根据搜索框内容获取对应的搜索信息
        getSearchData() {
            this.$ajax({
                url: this.$pathUrl.getSearchData,
                method: "get"
            })
                .then(res => {
                    let data = res.data.data;
                    if (data.length > 0) {
                        this.active = false;
                        this.keyword = data;
                    } else {
                        this.active = true;
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },
        // 搜索框失去焦点时候下拉框隐藏
        dropHide() {
            this.active = true;
        },
        // 点击搜索页或者关键字跳转到搜索页
        goSearch(value) {
            console.log(value);
            this.$router.push({ path: "/Search", query: { keyword: value } });
        },
        // 点击搜索按钮搜索
        searchData(value, value1) {
            if (value !== "") {
                this.$router.push({
                    path: "/Search",
                    query: { keyword: value }
                });
            } else {
                this.$router.push({
                    path: "/Search",
                    query: { keyword: value1 }
                });
            }
        }
    }
};
</script>
<style lang="less">
.layout-header {
    width: 100%;
    padding: 0;
    height: auto !important;
}

// logo+搜索S
.layout-logo-container {
    height: 70px;
    display: flex;
    padding: 0 10px;
    margin-top: 30px;
    .layout-logo {
        margin-right: 120px;
    }
    .scroll-main{
        position: relative;
        height: 30px;
        overflow: hidden;
    }
    .search-frame {
        position: relative;
        // 搜索按钮
        .search-btn {
            position: absolute;
            top: 0;
            left: 450px;
            width: 78px;
            height: 40px;
            background-color: #0691f9;
            border-color: transparent;
            color: #fff;
            cursor: pointer;
            font-size: 16px;
        }
        // 搜索输入框
        .search-box {
            position: absolute;
            top: 0;
            left: 0;
            width: 450px;
            height: 40px;
            padding-left: 10px;
            border: 2px solid #0691f9;
        }
        // 搜索下拉框
        .drop-frame {
            display: none;
            position: absolute;
            top: 40px;
            left: 0;
            width: 449px;
            background-color: #fff;
            border: 1px solid #0691f9;
            border-top: 0;
            text-align: left;
            z-index: 999;
            &.active {
                display: block;
            }
            &:hover {
                display: block;
            }
        }
        .drop-item {
            height: 35px;
            line-height: 35px;
            padding-left: 10px;
            border-top: 1px solid #ddd;
            &:first-child {
                border: 0;
            }
            &:hover {
                background-color: #9bd3fd;
            }
        }
    }
    // 快捷搜索关键字
    .search-quick {
        display: flex;
        margin-top: 40px;
        cursor: pointer;
        .keyword {
            height: 30px;
            line-height: 30px;
            margin-right: 18px;
            span:hover {
                color: red;
            }
        }
    }
}
</style>
