<template>
    <div class="swich-body">
        <div class="swich-box">
            <ul ref="move">
                <li v-for="(item,index) in hot" :key="index">
                    <div class="swich-img"><img v-lazy="item.img"></div>
                    <p class="swich-name">{{item.name}}</p>
                    <div>
                        <router-link class="swich-jump" :to="'/Product/'+item.url">了解详情</router-link>
                    </div>
                </li>
            </ul>
        </div>
        <div @click="moveLeft" class="btn btn-left"><img :src="lState?l:ld" alt=""></div>
        <div @click="moveRight" class="btn btn-right"><img :src="rState?r:rd" alt=""></div>
    </div>
</template>

<script>
export default {
    props: ["hot"],
    data() {
        return {
            lState: true,
            rState: false,
            l: "http://p8pi9ribk.bkt.clouddn.com/apparatus_l_01.png",
            ld: "http://p8pi9ribk.bkt.clouddn.com/apparatus_l_01_un.png",
            r: "http://p8pi9ribk.bkt.clouddn.com/apparatus_r_01.png",
            rd: "http://p8pi9ribk.bkt.clouddn.com/apparatus_r_01_un.png",
            num: 0
        };
    },
    methods: {
        getEvent() {
            let move = this.$refs.move;
            let event = move.querySelectorAll("li");
            return {
                move: move,
                event: event,
                moveWight: move.offsetWidth,
                dist: event[0].offsetWidth + 42,
                left: move.style.left
            };
        },
        // 向左移动
        moveLeft() {
            let e = this.getEvent();
            if (this.num >= e.event.length - 5) {
                this.lState = false;
            }
            if (this.num < e.event.length - 4) {
                this.num++;
                e.move.style.left = -this.num * e.dist + "px";
                this.rState = true;
            }
        },
        // 向右移动
        moveRight() {
            let e = this.getEvent();
            if (this.num <= 1) {
                this.rState = false;
            }
            if (this.num > 0) {
                if (this.num > e.event.length - 4) {
                    this.num = e.event.length - 4;
                    this.num--;
                }
                this.num--;
                e.move.style.left = -(this.num * e.dist) + "px";
                this.lState = true;
            }
        }
    }
};
</script>

<style lang="less" scoped>
.swich-body {
    position: relative;
    width: 1200px;
    height: 371px;
    margin: 0 auto;
    .swich-box {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        ul {
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            li {
                width: 268px;
                height: 371px;
                text-align: center;
                border: 2px solid #1ad198;
                margin-right: 42px;
                &:last-child {
                    margin-right: 0;
                }
                .swich-img{
                    height: 244px;
                    padding: 10px;
                }

                .swich-name{
                    color: #1db3d5;
                    font-size: 22px;
                    font-family: "MicrosoftYaHei-Bold";
                    margin-bottom: 33px;
                }

                .swich-jump{
                    display: block;
                    width: 203px;
                    height: 38px;
                    line-height: 38px;
                    margin: 0 auto;
                    color: #fff;
                    font-size: 20px;
                    font-family: "MicrosoftYaHei";
                    background-color: #fc5100;
                    border-radius: 15px;
                }
            }
        }
    }

    .btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }
    .btn-left {
        left: -74px;
    }
    .btn-right {
        right: -74px;
    }



}
</style>