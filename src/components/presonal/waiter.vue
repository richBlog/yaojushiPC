<template>
    <div class="layout-waiter">
        <p class="waiter-title">
            <span>移动客服</span>
        </p>
        <div class="waiter-main">
            <div class="waiter-img-phone">
                <img src="~assets/image/p_center.png" alt="p_center">
            </div>
            <div class="waiter-content">
                <div class="waiter-item">
                    <div class="item-img"><img src="~assets/image/blue.png" alt="red"></div>
                    <div><img class="item-wx" src="~assets/image/wx1.png" alt="wx"></div>
                    <div>
                        <p>药居士网上药房APP</p>
                        <p>
                            随时随地问药师、查物流
                            <br> 首次安装有惊喜、APP下单更便宜
                            <br> 手机扫一扫、下载安装
                        </p>
                    </div>
                </div>
                <div class="waiter-item">
                    <div class="item-img"><img src="~assets/image/green.png" alt="red"></div>
                    <div><img class="item-wx" src="~assets/image/wx1.png" alt="wx"></div>
                    <div>
                        <p>药居士微信公众号</p>
                        <p>
                            扫一扫、查物流、抢优惠券尽在掌握中
                            <br> 搜索药居士公众号yaojushi添加关注
                            <br> 手机扫一扫，免费关注
                        </p>
                    </div>
                </div>
                <div class="waiter-item">
                    <div class="item-img"><img src="~assets/image/red.png" alt="red"></div>
                    <div><img class="item-wx" src="~assets/image/wx1.png" alt="wx"></div>
                    <div>
                        <p>药居士官方微博</p>
                        <p>
                            扫一扫、查物流、抢优惠券尽在掌握中
                            <br> 手机扫一扫，免费关注
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "~styles/public";
.layout-waiter {
    padding-bottom: 100px;
    border: @b-border;
    .waiter-title {
        padding: 20px;
        .title();
        margin: 0;
    }

    .waiter-main {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 26px;
        .waiter-img-phone {
            position: relative;
            width: 300px;
            height: 500px;
            img {
                position: absolute;
                top: 50px;
                left: 20px;
                width: 300px;
                z-index: 1000;
            }
        }

        .waiter-item {
            display: flex;
            position: relative;
            padding: 26px 36px;
            margin-bottom: 15px;
            height: 160px;
            .item-img {
                position: absolute;
                top: 0;
                left: -73px;
                img {
                    height: 170px;
                }
            }
            p{
                color: #fff;
                line-height: 26px;
                &:first-child{
                    font-size: 18px;
                }
            }

            .item-wx {
                width: 100px;
                height: 100px;
                margin-right: 41px;
            }

            &:nth-child(1) {
                margin-left: 20px;
                background-color: #73b7fe;
            }
            &:nth-child(2) {
                margin-left: 35px;
                background-color: #7bb753;
            }
            &:nth-child(3) {
                margin-left: 50px;
                background-color: #ff717d;
            }
        }
    }
}
</style>