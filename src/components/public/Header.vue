<template>
    <el-header class="layout-header">
        <NavView/>
        <!-- logo+搜索 s -->
        <div class="layout-logo-container container">
            <div class="layout-logo">
                <router-link to="/"><img src="../../assets/image/logo.png" alt="logo"></router-link>
                <div ref="scrollMain" class="scroll-main" @mouseleave=" moveOut" @mouseenter="moveInfo">
                    <ul ref="scrollBox" class="scroll-box">
                        <li class="licence" v-for="(item,index) in licence" :key="index">
                            <a :href="item.url" target="_blank">{{item.name}}</a>
                        </li>
                    </ul>
                </div>
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
            licence: [
                {
                    name: "互联网药品信息服务资格证：(鄂)-经营性-2018-0009",
                    url:
                        "http://qy1.sfda.gov.cn/datasearch/face3/base.jsp?tableId=28&tableName=TABLE28&title=%BB%A5%C1%AA%CD%F8%D2%A9%C6%B7%D0%C5%CF%A2%B7%FE%CE%F1&bcId=118715637133379308522963029631"
                },
                {
                    name: "药品经营许可证：鄂BA0277058",
                    url:
                        "http://59.175.169.148:8999/wssb/websearch/SearchCardAction.do?operate=searchGyEntCard&operPage=card_ypjyxkz_nsls_list&cardtype=15"
                },
                {
                    name: "药品GSP认证证书：B-HUB18-01-0031",
                    url:
                        "http://59.175.169.148:8999/wssb/websearch/SearchCardAction.do?operate=searchGyEntCard&operPage=card_ypgsp_list&cardtype=18"
                },
                {
                    name: "医疗器械经营备案：鄂汉食药监械经营备2018H006号",
                    url:
                        "http://syjj.wuhan.gov.cn/portal/portalAction!getPage.dhtml?channel_id=10095&channelparentid=10095&forward=menu_qytree&index=portal_oachannelWHADsWHDGportal_childchannelWHADc&pagesize=15&clear=true"
                },
                {
                    name: "食品经营许可证：JY14201340007600",
                    url:
                        "http://syjj.wuhan.gov.cn/portal/portalAction!getPage.dhtml?channel_id=10095&channelparentid=10095&forward=menu_qytree&index=portal_oachannelWHADsWHDGportal_childchannelWHADc&pagesize=15&clear=true"
                },
                {
                    name: "营业执照：91420112MA4KW4L44W",
                    url: "http://www.gsxt.gov.cn/index.html"
                }
            ],
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
            active: true,
            time: null,
            t: null,
            tep: 50,
            n: 0
        };
    },
    mounted() {
        let box = this.$refs.scrollBox;
        let item = document.querySelectorAll(".licence")[0].offsetHeight;
        box.innerHTML += box.innerHTML;
        clearInterval(this.time);
        clearTimeout(this.t);
        this.scrollMove(box, item);
    },
    methods: {
        // 鼠标移入时让信息许可证滚动停止
        moveInfo() {
            clearInterval(this.time);
            clearTimeout(this.t);
        },
        // 鼠标移出时让信息许可证滚动开启
        moveOut() {
            let box = this.$refs.scrollBox;
            let item = document.querySelectorAll(".licence")[0].offsetHeight;
            this.scrollMove(box, item);
        },
        // 信息许可证滚动事件
        scrollUp(box, item) {
            this.n++;
            if (this.n % item === 0) {
                clearInterval(this.time);
                // 等待2秒
                this.t = setTimeout(this.scrollMove, 2000, box, item);
            } else {
                if (this.n >= box.offsetHeight / 2) {
                    this.n = 0;
                } else {
                    box.style.top = -this.n + "px";
                }
            }
        },
        // 启用定时器开启信息许可证滚动事件
        scrollMove(box, item) {
            this.time = setInterval(this.scrollUp, this.tep, box, item);
        },

        // 根据搜索框内容获取对应的搜索信息
        getSearchData() {
            this.$ajax({
                url: this.$pathUrl.getSearch,
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
            this.$router.push({ path: "/Search", query: { keyword: value } });
        },
        // 点击搜索按钮搜索
        searchData(value, value1) {
            console.log(value);
            value = value.replace(/(^\s*)|(\s*$)/g, ""); 
            if (value !== "") {
                console.log('11111111111',value1);
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
        text-align: left;
    }
    .scroll-main {
        height: 30px;
        overflow: hidden;
        .scroll-box {
            position: relative;
            top: 0;
            .licence {
                height: 30px;
                line-height: 30px;
                text-align: left;
                a {
                    color: #666;
                    font-size: 12px;
                    &:hover {
                        color: #ff0000;
                        text-decoration: underline;
                    }
                }
            }
        }
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
