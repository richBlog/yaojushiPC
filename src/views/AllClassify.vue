<template>
    <div class="all-classify">
        <headerView/>
        <classifiedView :active="true" />
        <div class=" container classify-main">
            <h1>更多优惠产品请进入以下专科</h1>

            <!-- 一级分类开始 -->
            <div class="flex first-classify">
                <router-link :class="item.isKeyWord" :to="item.url" v-for="(item,index) in classifyList.firstList" :key="index">{{item.name}}</router-link>
            </div>
            <!-- 一级分类结束 -->

            <!-- 二级分类开始 -->
            <div class="second-classify">
                <div class="second-box" v-for="(item,index) in classifyList.secondList" :key="index">
                    <p>{{item.name}}</p>
                    <div class="second-main" v-for="(key,dex) in item.classify" :key="dex">
                        <div class="classify-title">
                            <router-link :to="key.url">{{key.name}}</router-link>
                        </div>
                        <div class="classify-content">
                            <router-link :to="i.url" v-for="(i,k) in key.content" :key="k">{{i.name}}</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 二级分类结束 -->
        </div>
        <footerView/>
    </div>
</template>

<script>
import headerView from "components/public/Header";
import classifiedView from "components/public/Classified-nav";
import footerView from "components/public/Footer";

export default {
    components: {
        headerView,
        classifiedView,
        footerView
    },
    data() {
        return {
            classifyList: {}
        };
    },
    created() {
        this.$ajax({
            url:
                "https://easy-mock.com/mock/5af8e2bb0d7ff97d1fdc9341/allClassify",
            method: "get"
        })
            .then(res => {
                if (res.status === 200) {
                    this.classifyList = res.data.data;
                    console.log(res);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
};
</script>

<style lang="less" scoped>
.classify-main {
    text-align: center;
    h1 {
        margin: 30px 0;
        color: #666;
    }
}
// 一级分类开始
.first-classify {
    display: flex;
    flex-wrap: wrap;
    padding: 0 20px;
    margin-top: 20px;
    a {
        display: block;
        width: 100px;
        height: 50px;
        line-height: 50px;
        margin-bottom: 30px;
        margin-left: 25px;
        border: 1px solid #dadada;
        border-radius: 5px;
        color: #005aa0;
        &:hover {
            color: #ff0000;
        }
        &.active {
            color: #ff0000;
        }
    }
}
// 一级分类结束

// 二级分类开始
.second-classify {
    &::after {
        display: block;
        content: "";
        clear: both;
        zoom: 1;
    }
}

.second-box {
    float: left;
    width: 49%;
    height: auto;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    text-align: left;
    margin-right: 1%;
    &:nth-child(2n) {
        margin-right: 0;
        margin-left: 1%;
    }
    &:last-child {
        margin-left: 1%;
        margin-right: 0;
    }
    p {
        padding: 10px;
        font-size: 16px;
        font-weight: bold;
        background-color: #f3f3f3;
        color: #666;
    }
    .second-main {
        display: flex;
        font-size: 12px;
        border-bottom: 1px dashed #ddd;
        &:last-child {
            border-bottom: none;
        }
        .classify-title {
            min-width: 60px;
            padding: 10px;
            padding-right: 0px;
            a {
                display: block;
                color: #ff0000;
            }
        }
        .classify-content {
            padding: 10px;
            a {
                display: inline-block;
                margin-right: 15px;
                margin-bottom: 5px;
                &:hover {
                    color: #ff0000;
                    text-decoration: underline;
                }
            }
        }
    }
}

// 二级分类结束
</style>