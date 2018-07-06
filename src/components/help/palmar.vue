<template>
    <div class="palmar">
        <div class="layout-main">
            <div class="phone-download">
                <div>
                    <div class="iphone-download download" @click="tab(1)">
                        <span>免费下载<br>iphone</span>
                    </div>
                    <div class="android-download download" @click="tab(2)">
                        <span>免费下载<br>Android</span>
                    </div>
                </div>
                <div class="code">
                    <img :src="state===1?android:iphone" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            state: 2,
            android: require("../../assets/image/zheng6.png"),
            iphone: require("../../assets/image/wx1.png")
        };
    },
    methods:{
        tab(value){
            this.state = value;
        }
    }
};
</script>

<style lang="less" scoped>
@import "~styles/help";

.palmar {
    width: 990px;
}
.layout-main {
    width: 100%;
    height: 100%;
    position: relative;
    background: url(../../assets/image/help/bg_app_dl.png) no-repeat top left;

    .phone-download {
        position: absolute;
        display: flex;
        top: 245px;
        left: 128px;
    }
    .iphone-download {
        margin-bottom: 10px;
        background: url(../../assets/image/help/iphone.png) no-repeat 10px
            center;
    }
    .android-download {
        background: url(../../assets/image/help/android.png) no-repeat 10px
            center;
    }

    .download {
        padding: 5px 15px 5px 40px;
        border: 1px solid #fff;
        border-radius: 5px;
        color: #fff;
        text-align: center;
        cursor: pointer;
    }

    .code {
        margin-left: 18px;
        img {
            width: 94px;
            height: 94px;
        }
    }
}
</style>
