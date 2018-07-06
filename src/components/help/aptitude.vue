<template>
    <div class="aptitude">
        <div class="layout-main">
            <div><img src="../../assets/image/help/qlfct_banner.png" alt="img"></div>
            <ul>
                <li v-for="(item,index) in imgList" :key="index">
                    <div><img :src="item" alt="img"></div>
                    <div class="enlarge" @click="show(item)">点击放大</div>
                </li>
            </ul>
        </div>

        <div v-show="isShow" class="mask">
            <img :src="state" alt="img">
            <i @click="hide"></i>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: false,
            state: require("../../assets/image/help/qlfct_00.png"),
            imgList: [
                require("../../assets/image/help/qlfct_00.png"),
                require("../../assets/image/help/qlfct_01.png"),
                require("../../assets/image/help/qlfct_02.png"),
                require("../../assets/image/help/qlfct_03.png"),
                require("../../assets/image/help/qlfct_04.png"),
                require("../../assets/image/help/qlfct_05.png"),
                require("../../assets/image/help/qlfct_06.png"),
                require("../../assets/image/help/qlfct_07.png"),
                require("../../assets/image/help/qlfct_08.png"),
                require("../../assets/image/help/qlfct_09.png"),
                require("../../assets/image/help/qlfct_10.png"),
                require("../../assets/image/help/qlfct_11.png"),
                require("../../assets/image/help/qlfct_12.png")
            ]
        };
    },
    methods: {
        show(value) {
            this.isShow = true;
            this.state = value;
        },
        hide(){
            this.isShow = false;
        }
    }
};
</script>

<style lang="less" scoped>
@import "~styles/help";

.aptitude {
    width: 990px;
}
.layout-main {
    ul {
        margin-top: 40px;
        display: flex;
        flex-wrap: wrap;
    }
    li {
        width: 23.5%;
        height: 330px;
        margin-right: 2%;
        margin-bottom: 30px;
        text-align: center;
        &:nth-child(4n) {
            margin-right: 0;
        }
        img {
            width: 100%;
            height: 300px;
        }
        .enlarge {
            font-size: 28px;
            color: #666;
            cursor: pointer;
            &:hover {
                color: #ff0000;
                text-decoration: underline;
            }
        }
    }
}

.mask {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 100;
    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    i {
        position: absolute;
        top: 0;
        right: 25%;
        display: block;
        width: 46px;
        height: 46px;
        background: url("../../assets/image/help/close.png") no-repeat top right;
        cursor: pointer;
    }
}
</style>
