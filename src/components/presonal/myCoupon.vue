<template>
    <div class="layout-coupon">
        <p class="coupon-title">
            <span>我的优惠券</span>
        </p>
        <div class="coupon-main">
            <div class="coupon-info">
                <div class="coupon-info-title">
                    <span class="active">未使用 </span>
                    <span>已使用 </span>
                    <span>已过期 </span>
                </div>
                <div class="coupon-info-content">
                    <el-row class="info-type">
                        <el-col :span="6">面值</el-col>
                        <el-col :span="6">所需消费金额</el-col>
                        <el-col :span="6">使用限制</el-col>
                        <el-col :span="6">有效期</el-col>
                    </el-row>
                    <el-row class="info-sub">
                        <el-col :span="6" class="money">￥10.00</el-col>
                        <el-col :span="6">￥100.00</el-col>
                        <el-col :span="6">新人满100-10</el-col>
                        <el-col :span="6">
                            <span>2018.06.08至2018.06.10</span>
                            <br>
                            <span class="info-prompt">即将过期</span>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="coupon-activation">

            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.layout-coupon {
    border: 1px solid #eee;
    .coupon-title {
        padding: 20px;
        border-bottom: 1px solid #eee;
        span {
            border-left: 3px solid #ff7e00;
            padding-left: 20px;
        }
    }
    .coupon-main {
        padding: 20px;
        .coupon-info {
            border: 1px solid #eee;
            padding: 0 20px;
            .coupon-info-title {
                padding: 10px 0;
                border-bottom: 1px solid #eee;
                span {
                    position: relative;
                    padding: 0 20px;
                    border-right: 1px solid #eee;
                    cursor: pointer;
                    &.active {
                        color: #ff0000;
                        &::before {
                            content: "";
                            display: block;
                            position: absolute;
                            bottom: -11px;
                            left: 0;
                            right: 0;
                            width: 60%;
                            height: 2px;
                            margin: 0 auto;
                            background-color: #ff0000;
                        }
                    }
                }
            }
            .coupon-info-content {
                margin-top: 12px;
                border: 1px solid #eee;

                .info-type {
                    background-color: #eee;
                    padding: 10px 0;
                    text-align: center;
                    .el-col {
                        color: #333;
                        font-size: 16px;
                        font-weight: bold;
                    }
                }

                .info-sub {
                    text-align: center;
                    .el-col {
                        padding: 20px 0;
                        color: #666;
                    }
                    .money {
                        color: #ff0000;
                    }
                    .info-prompt {
                        color: #ff0000;
                    }
                }
            }
        }
    }
}
</style>