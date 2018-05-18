<template>
    <div class="search-box">
        <headerView/>
        <div class="search-main">
            <!-- 分类导航开始 -->
            <classifiedView :active="true" />
            <!-- 分类导航结束 -->

            <!-- 产品内容开始 -->

            <div class=" container flex search-content">
                <div class="search-left">
                    <!-- 产品筛选功能开始 -->
                    <div class="screen-box">
                        <div class="screen-type">
                            <div class="screen-name">品牌：</div>
                            <div class="screen-content">
                                <div class="sreen-item" v-for="(item,index) in brandList" :key="index">{{item}}</div>
                            </div>
                            <div class="screen-more">
                                 更多<i></i>
                            </div>
                            <div class="screen-checkbox">
                                <i></i>多选
                            </div>
                        </div>
                    </div>
                    <!-- 产品筛选功能结束 -->
                </div>

                <!-- 右侧产品推广开始 -->

                <div class="search-right">

                </div>

                <!-- 右侧产品推广结束 -->
            </div>

            <!-- 产品内容结束 -->
        </div>

    </div>
</template>

<script>
import headerView from "components/public/Header";
import classifiedView from "../components/public/Classified-nav";
export default {
    components: {
        headerView,
        classifiedView
    },
    data() {
        return {
            brandList:[
                "白云山",
                "白云山",
                "白云山",
                "白云山",
                "阿萨德",
                "白云山",
                "白云山",
                "白云山",
                "白云山",
                "白云山",
                "白云山",
                "白云山电饭锅",
                "白云山",
                "白云山",
                "白云山",
                "白云山",
                "白云山",
                "白云山",
                "白云山",
                "白云山d",
                "白云山s",
                "白云山",
                "白云山",
                "白云山",
                "白云山",
                "白云山",
                "白云山",
                "白云山",
                "白云山d",
                "白云山s",
            ]
        };
    },
    watch: {
        $route(to, from) {
            console.log(from);
            location.reload();
        }
    }
};
</script>

<style lang="less" scoped>
@import "../styles/search-main.less";
</style>