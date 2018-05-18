<template>
    <!-- 纵向分类S -->
    <div class="banner-classification">
        <ul class="banner-sub">
            <li class="banner-item" v-for="item in classifyList" :key="item.id">
                <i></i>
                <router-link to="/" v-text="item.name"></router-link>
                <span>&gt;</span>
                <!-- 二级分类S -->
                <div class="second-level-container">
                    <ul class="second-level-sub" v-for="i in item.secondLevel" :key="i.id">
                        <li class="second-level-item">
                            <router-link to="/" v-text="i.name"></router-link>
                        </li>
                        <li class="second-level-item" v-for="items in i.Submenu" :key="items.id">
                            <router-link to="/" v-text="items.name"></router-link>
                        </li>
                    </ul>
                </div>
                <!-- 二级分类E -->
            </li>
        </ul>
    </div>
    <!-- 纵向分类E -->
</template>

<script>
export default {
    data() {
        return {
            classifyList: []
        };
    },
    created() {
        this.$ajax({
            url: "https://easy-mock.com/mock/5af8e2bb0d7ff97d1fdc9341/classify",
            method: "get"
        })
            .then(response => {
                console.log(response)
                this.classifyList = response.data.data;
            })
            .catch(error => {
                console.log(error);
            });
    }
};
</script>

<style lang="less" scoped>
.banner-classification {
    position: relative;
    width: 180px;
    min-width: 180px;
    height: 460px;
    text-align: center;
    background-color: #197ee9;
    font-size: 14px;
    line-height: 20px;
    z-index: 999;
    .banner-item {
        padding: 14px 0;
        color: #fff;
        i {
            position: relative;
            display: inline-block;
            top: 5px;
            width: 15px;
            height: 17px;
            background: url(../../assets/image/fenlei.png) no-repeat -12px -304px;
        }
        a {
            display: inline-block;
            width: 100px;
            color: #fff;
        }
        span {
            font-size: 14px;
            font-weight: bold;
        }
        &:nth-child(2) i {
            background-position: -51px -65px;
        }
        &:nth-child(3) i {
            background-position: -51px -382px;
        }
        &:nth-child(5) i {
            background-position: -12px -262px;
        }
        &:nth-child(6) i {
            background-position: -51px -104px;
        }
        &:nth-child(7) i {
            background-position: -12px -185px;
        }
        &:nth-child(4) i {
            background-position: -11px -62px;
        }
        &:nth-child(8) i {
            background-position: -12px -104px;
        }
        &:nth-child(9) i {
            background-position: -51px -382px;
        }
        // 移入分类
        &:hover {
            background-color: #0066d4;
        }
        &:nth-child(1):hover .second-level-container,
        &:nth-child(2):hover .second-level-container,
        &:nth-child(3):hover .second-level-container,
        &:nth-child(4):hover .second-level-container,
        &:nth-child(5):hover .second-level-container,
        &:nth-child(6):hover .second-level-container,
        &:nth-child(7):hover .second-level-container,
        &:nth-child(8):hover .second-level-container,
        &:nth-child(9):hover .second-level-container {
            display: flex;
        }
        // 二级分类
        .second-level-container {
            display: none;
            position: absolute;
            top: 0;
            left: 180px;
            width: 1020px;
            min-width: 1020px;
            background-color: #eee;
            flex-wrap: wrap;
            padding: 5px 20px;
            z-index: 1000;
            .second-level-sub {
                display: flex;
                width: 25%;
                flex-wrap: wrap;
                margin-bottom: 13px;
                .second-level-item {
                    margin-right: 10%;
                    margin-bottom: 5px;
                    &:nth-child(1) {
                        width: 100%;
                        margin-bottom: 5px;
                    }
                    &:nth-child(1) a {
                        display: block;
                        width: 100%;
                        font-weight: 900;
                        font-size: 14px;
                        text-align: left;
                    }
                }
                a {
                    white-space: nowrap;
                    text-align: left;
                    color: #333;
                    font-size: 12px;
                    &:hover {
                        color: red;
                    }
                }
            }
        }
    }
}
</style>