<template>
    <el-header class="layout-header">
        <NavView/>
        <!-- logo+搜索 s -->
        <div class="layout-logo-container container">
            <div class="layout-logo">
                <router-link to="/"><img src="../../assets/image/logo.png" alt="logo"></router-link>
            </div>
            <div class="layout-search">
                <input class="search-btn" type="button" value="搜索"><input class="search-box" type="text" :placeholder="searchKeyword">
                <ul class="search-quick">
                    <li class="keyword" v-for="item in quickKeyword" :key="item.id">
                        <router-link to="/" v-text="item"></router-link>
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
            searchKeyword: "咽喉痛", // 搜索框里面的关键字
            quickKeyword: [
                "营养保健",
                "护肤美肌",
                "立即优惠",
                "营养保健",
                "护肤美肌",
                "立即优惠"
            ] // 快捷搜索的关键字
        };
    }
};
</script>
<style lang="less">
.layout-header {
    width: 100%;
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
    .layout-search {
        position: relative;
        // 搜索按钮
        .search-btn {
            width: 78px;
            height: 40px;
            background-color: #0a75e7;
            border-color: transparent;
            color: #fff;
            position: absolute;
            top: 0;
            left: 513px;
            cursor: pointer;
            font-size: 16px;
        }
        // 搜索输入框
        .search-box {
            width: 513px;
            height: 40px;
            padding-left: 10px;
            border: 2px solid #0a75e7;
            position: absolute;
            top: 0;
            left: 0;
        }
    }
    // 快捷搜索关键字
    .search-quick {
        display: flex;
        margin-top: 40px;
        .keyword {
            height: 30px;
            line-height: 30px;
            margin-right: 18px;
            a:hover {
                color: red;
            }
        }
    }
}
</style>
