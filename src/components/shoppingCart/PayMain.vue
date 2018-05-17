<template>
    <div class="pay-info container">
        <!-- 订单信息和支付金额开始 -->
        <div class="pay-order">
            <p>
                <i></i>
                感谢您！订单提交成功！订单ID：{{id}}
            </p>
            <p>应付金额：
                <span>￥{{price}}</span>
            </p>
            <p>请您在提交订单的
                <span>24小时</span>内付款，否则订单会自动取消</p>
        </div>
        <!-- 订单信息和支付金额结束 -->

        <!-- 支付方式开始 -->
        <div class="pay-type">
            <p>请在下方选择支付方式</p>
            <div class="pay-select">
                <div class="pay-type-box">
                    <span :class="active?'active':''" @click="payActive($event)"><img v-lazy="alipay"></span>
                    <span :class="!active?'active':''" @click="payActive"><img v-lazy="wxpay"></span>
                </div>
                <div class="submit-pay">
                    <el-button type="danger" @click="submitPay">确定支付</el-button>
                </div>
            </div>
        </div>
        <!-- 支付方式结束 -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: "",
            price: "",
            alipay: require("../../assets/image/alipay.png"),
            wxpay: require("../../assets/image/wxpay.png"),
            active: true
        };
    },
    created() {
        let data = this.$route.query;
        this.id = data.id;
        this.price = data.price;
    },
    methods: {
        // 确认支付
        submitPay() {
            alert("支付提交了！");
        },
        // 支付方式切换
        payActive(event) {
            let ev = event.currentTarget;
            if (!ev.classList.contains("active")) {
                this.active = !this.active;
            }
        }
    }
};
</script>

<style lang="less" scoped>
.pay-info {
    margin: 50px auto;
    // 订单信息和支付金额开始
    .pay-order {
        border: 1px solid #ade0ff;
        border-top: 2px solid #2d8ef3;
        background-color: #e7f6ff;
        font-size: 18px;
        color: #666;
        i {
            display: inline-block;
            width: 24px;
            height: 24px;
            background: url("../../assets/image/sprites.png") no-repeat -36px -462px;
            vertical-align: middle;
            margin-right: 15px;
        }
        p {
            margin: 20px 25px;
            font-size: 14px;
            span {
                color: #ff3f3f;
            }
        }
    }
    // 订单信息和支付金额结束

    // 支付方式开始
    .pay-type {
        margin-top: 10px;
        border: 1px solid #ddd;
        color: #666;
        p {
            padding: 15px 25px;
            font-size: 16px;
            border-bottom: 1px solid #ddd;
        }
        .pay-type-box {
            padding: 50px 25px;
            span {
                display: inline-block;
                margin-right: 20px;
                border: 2px solid #f1f1f1;
                box-sizing: border-box;
                padding:5px 5px 2px 5px;
                cursor:pointer;
                &.active {
                    border-color: #ff3f3f;
                    background: url("../../assets/image/actii.png") no-repeat
                        right bottom;
                }
            }
        }
        .submit-pay {
            padding: 30px;
            text-align: right;
        }
    }

    // 支付方式结束
}
</style>