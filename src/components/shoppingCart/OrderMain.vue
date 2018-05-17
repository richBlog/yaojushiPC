<template>
    <div class="order-main container">
        <p class="order-title">填写核对订单信息</p>
        <!-- <OrderAddress/> -->
        <div class="order-address">
            <p class="address-title">收货人信息</p>

            <!-- 在没有数据的情况 -->
            <div v-if="status==='status'"></div>

            <!-- 没有地址的情况开始 -->
            <div class="inexistence-address" v-else-if="status===0">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="收货人姓名" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="所在地区" prop="region">
                        <el-cascader size="large" :options="options" v-model="ruleForm.region" @change="handleChange"></el-cascader>
                    </el-form-item>
                    <el-form-item label="详细地址" prop="address">
                        <el-input v-model="ruleForm.address"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号码" prop="phone">
                        <el-input v-model="ruleForm.phone"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">保存收货人信息</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <!-- 没有地址的情况结束 -->

            <!-- 有收获地址的情况开始 -->
            <div class="exist-address" v-else>
                <div>
                    <span>{{addressInfo.name}}</span>
                    <span>{{addressInfo.phone}}</span>
                </div>
                <div>{{addressInfo.address}}</div>
            </div>
            <!-- 有收获地址的情况结束 -->

            <!-- 配送、支付方式开始 -->
            <div class="distribution-mode">
                <p>选择支付及配送方式</p>
                <div>
                    <span>配送方式：</span>
                    <el-radio v-model="radio" label="1">普通快递</el-radio>
                    <el-radio v-model="radio" label="2">顺丰快递</el-radio>
                </div>
                <div>
                    <span>支付方式：</span>
                    <el-radio v-model="pay" label="1">在线支付</el-radio>
                    <el-radio v-model="pay" label="2">货到付款</el-radio>
                </div>
            </div>

            <!-- 配送、支付方式结束 -->

            <!-- 商品清单开始 -->
            <div class="product-bill">
                <p class="bill-title">商品清单</p>
                <ul>
                    <li class="bill-title">
                        <el-row>
                            <el-col :span="10">药居士</el-col>
                            <el-col :span="4">会员价</el-col>
                            <el-col :span="4">数量</el-col>
                            <el-col :span="4">优惠金额</el-col>
                            <el-col :span="2">小计</el-col>
                        </el-row>
                    </li>
                    <li class="bill-item" v-for="(item,index) in billList.productList" :key="index">
                        <el-row>
                            <el-col :span="10" class="bill-name-box">
                                <span class="activity-type">[{{item.type}}]</span>
                                <router-link :to="'/product/' + item.productId" target="_blank">{{item.name}}</router-link>
                            </el-col>
                            <el-col :span="4" class="vip-price">￥{{item.price}}</el-col>
                            <el-col :span="4">{{item.count}}</el-col>
                            <el-col :span="4">￥{{item.discountPrice}}</el-col>
                            <el-col :span="2">￥{{item.subtotal}}</el-col>
                        </el-row>
                    </li>
                    <li class="sum-price">合计：￥{{billList.sum}}</li>
                </ul>
                <!-- 备注开始 -->
                <div class="remarks checkbox">
                    <div>
                        <el-checkbox v-model="remarks">备注</el-checkbox>
                    </div>
                    <div v-show="remarks">
                        <el-input class="remarks-text" type="textarea" :rows="3" placeholder="限50字" v-model="remarksTextarea">
                        </el-input>
                    </div>
                </div>

                <!-- 备注结束 -->

                <!-- 发票开始 -->
                <div class="invoice checkbox">
                    <div>
                        <el-checkbox v-model="invoice">商品发票</el-checkbox>
                    </div>
                    <div v-show="invoice" class="invoice-content">
                        <p>发票类型：普通发票</p>
                        <div>发票抬头：
                            <el-input class="invoice-input" v-model="invoiceInput" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                </div>

                <!-- 发票结束 -->

                <!-- 优惠券开始 -->
                <div class="coupon checkbox">
                    <div>
                        <el-checkbox v-model="coupon">使用优惠券及积分</el-checkbox>
                    </div>
                    <div v-show="coupon">
                        <el-tabs type="border-card">
                            <el-tab-pane label="使用电子优惠券">您的账户目前没有优惠券</el-tab-pane>
                            <el-tab-pane label="使用积分">您的账户目前没有积分</el-tab-pane>
                        </el-tabs>
                    </div>
                </div>

                <!-- 优惠券结束 -->

                <!-- 价格计算开始 -->
                <div class="price-computed">
                    <p>
                        <span>已节省：￥{{billList.TotalDiscount}}</span>
                        <span>商品总价：￥{{billList.sum}}</span>
                    </p>
                    <p>
                        运费：￥{{billList.freight}}
                    </p>
                    <p>
                        积分抵扣金额：-￥{{billList.integralDiscount}}
                    </p>
                    <p>
                        您需要为订单共支付：
                        <span class="final-price">￥{{billList.finalPrice}}</span>
                    </p>
                </div>

                <!-- 价格计算结束 -->

                <div class="submit-box">
                    <el-button type="primary" size="medium" @click="submitOrder">提交订单</el-button>
                </div>

            </div>
            <!-- 商品清单结束 -->

        </div>
    </div>
</template>

<script>
import { regionData, CodeToText } from "element-china-area-data";
export default {
    data() {
        return {
            status: "status",
            radio: "1",
            pay: "1",
            remarks: false,
            invoice: false,
            coupon: false,
            remarksTextarea: "",
            invoiceInput: "",
            options: regionData,
            ruleForm: {
                name: "",
                region: [],
                address: "",
                phone: ""
            },
            rules: {
                name: [
                    {
                        required: true,
                        message: "请输入收货人姓名"
                    },
                    {
                        min: 2,
                        max: 4,
                        message: "长度在 3 到 5 个字符"
                    }
                ],
                region: [
                    {
                        required: true,
                        message: "请输入收货人所在地区"
                    }
                ],
                address: [
                    {
                        required: true,
                        message: "请输入收货人详情地址"
                    }
                ],
                phone: [
                    {
                        required: true,
                        message: "请输入手机号码"
                    },
                    {
                        pattern: /^1[34578]\d{9}$/,
                        message: "您的手机号码格式不正确"
                    }
                ]
            },
            addressInfo: {},
            billList: {}
        };
    },
    created() {
        this.status = 1;
        this.getAjax(
            "https://easy-mock.com/mock/5af8e2bb0d7ff97d1fdc9341/addressDefult",
            this.getAddress
        );
        this.getAjax(
            "https://easy-mock.com/mock/5af8e2bb0d7ff97d1fdc9341/bill",
            this.getBill
        );
    },
    methods: {
        // 发送ajax
        getAjax(url, callback) {
            this.$ajax({
                url: url,
                method: "get"
            })
                .then(response => {
                    callback(response);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        // 获取默认地址接口
        getAddress(data) {
            this.addressInfo = data.data.data;
        },
        // 获取商品清单接口
        getBill(data) {
            this.billList = data.data.data;
        },
        // 获取用户地址信息
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    console.log(this.ruleForm.name);
                    for (let item of this.ruleForm.region) {
                        console.log(CodeToText[item]);
                    }
                    console.log(this.ruleForm.region);
                    console.log(this.ruleForm.address);
                    console.log(this.ruleForm.phone);
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        // 提交订单
        submitOrder() {
            this.$router.push({
                path: "/Pay",
                query: { id: "19965165484654", price: "17.00" }
            });
        },
        handleChange(value) {
            console.log(value);
        }
    }
};
</script>

<style lang="less" scoped>
.order-main {
    margin: 39px auto;
    border: 1px solid #ddd;
    border-top: 2px solid #0066d4;
    .order-title {
        padding: 12px 0 12px 19px;
        color: #666;
        font-size: 13px;
        font-weight: bold;
        border-bottom: 1px solid #ddd;
    }
}
.address-title {
    margin-bottom: 10px;
    padding: 5px 0 5px 20px;
    font-size: 18px;
    font-weight: bold;
    color: #999;
}

.inexistence-address {
    padding: 10px 20px;
    .demo-ruleForm {
        width: 40%;
    }
}

.exist-address {
    &:extend(.inexistence-address);
    padding-top: 0;
    border-bottom: 1px solid #ddd;
    font-size: 13px;
    color: #666;
    div {
        margin-bottom: 20px;
    }
    span:nth-child(odd) {
        margin-right: 30px;
    }
}
// 配送、支付方式开始
.distribution-mode {
    &:extend(.exist-address);
    p {
        padding: 20px 0;
    }
    span {
        margin-right: 20px;
    }
    div {
        margin-bottom: 20px;
    }
}
// 配送、支付方式结束

// 商品清单开始
.product-bill {
    color: #666;
    font-size: 14px;
    .bill-title {
        font-weight: bold;
        padding: 20px 0 20px 20px;
        border-bottom: 1px solid #ddd;
    }

    li {
        padding: 10px 0 10px 20px;
        border-bottom: 1px solid #ddd;
    }
    .bill-name-box {
        padding-right: 10px;
    }
    .activity-type {
        color: #ff3f3f;
    }
    .vip-price {
        color: #ff3f3f;
    }
    .sum-price {
        padding-right: 56px;
        text-align: right;
        font-size: 16px;
    }

    .checkbox {
        margin: 20px 20px 0 0;
        padding-left: 20px;
        div:nth-child(odd) {
            margin-bottom: 20px;
        }
        .remarks-text {
            width: 66%;
        }
        .invoice-content {
            border: 1px solid #ddd;
            padding: 20px 50px;
            p {
                padding-bottom: 10px;
            }
            .invoice-input {
                width: 50%;
                margin: 0;
            }
        }
    }

    .price-computed {
        padding: 10px 20px;
        text-align: right;
        p {
            padding: 5px 0;
            span:nth-child(2n) {
                margin-left: 20px;
            }
            .final-price {
                font-size: 20px;
                color: #ff0000;
                font-weight: bold;
            }
        }
    }

    .submit-box {
        border-top: 1px solid #ddd;
        background-color: #eee;
        &:extend(.product-bill .price-computed);
    }
}

// 商品清单结束
</style>