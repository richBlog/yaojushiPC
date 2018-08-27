<template>
    <div class="aptitude">
        <div class="layout-main">
            <div><img src="../../assets/image/help/qlfct_banner.png" alt="img"></div>
            <ul>
                <li v-for="(item,index) in imgList" :key="index">
                    <div><img :src="item" alt="img"></div>
                    <div class="enlarge" @click="show(index)">点击放大</div>
                </li>
            </ul>
        </div>

        <div v-show="isShow" class="mask">
            <div>
                <img :src="state" alt="img">
                <i @click="hide"></i>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: false,
            state: "",
            imgList: [
                "http://p8pi9ribk.bkt.clouddn.com/aptitude_p_01.png",
                "http://p8pi9ribk.bkt.clouddn.com/aptitude_p_02.png",
                "http://p8pi9ribk.bkt.clouddn.com/aptitude_p_03.png",
                "http://p8pi9ribk.bkt.clouddn.com/aptitude_p_04.png",
                "http://p8pi9ribk.bkt.clouddn.com/aptitude_p_05.png",
                "http://p8pi9ribk.bkt.clouddn.com/aptitude_p_06.png"
            ]
        };
    },
    methods: {
        show(index) {
            this.isShow = true;
            switch (index) {
                case 0:
                    this.state =
                        "http://p8pi9ribk.bkt.clouddn.com/aptitude_p_d_01.jpg";
                    break;
                case 1:
                    this.state =
                        "http://p8pi9ribk.bkt.clouddn.com/aptitude_p_d_02.jpg";
                    break;
                case 2:
                    this.state =
                        "http://p8pi9ribk.bkt.clouddn.com/aptitude_p_d_03.jpg";
                    break;
                case 3:
                    this.state =
                        "http://p8pi9ribk.bkt.clouddn.com/aptitude_p_d_04.jpg";
                    break;
                case 4:
                    this.state =
                        "http://p8pi9ribk.bkt.clouddn.com/aptitude_p_d_05.jpg";
                    break;
                case 5:
                    this.state =
                        "http://p8pi9ribk.bkt.clouddn.com/aptitude_p_d_06.jpg";
                    break;
            }
        },
        hide() {
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
        padding: 0 32px;
    }
    li {
        width: 270px;
        height: 180px;
        margin-right: 58px;
        margin-bottom: 65px;
        text-align: center;
        &:nth-child(3n) {
            margin-right: 0;
        }
        img {
            width: 100%;
            height: 100%;
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
    div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    i {
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        width: 46px;
        height: 46px;
        background: url("../../assets/image/help/close.png") no-repeat top right;
        cursor: pointer;
    }
}
</style>
