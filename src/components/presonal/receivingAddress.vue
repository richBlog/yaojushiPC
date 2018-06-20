<template>
    <div class="receiving-address">
        <p class="address-title">
            <span>收货地址</span>

        </p>

        <p>现保留 {{addressList.length}} 个收货地址，还可以增加 {{10 - addressList.length}} 个地址。
            <span @click="showAddress">添加新的地址</span>
        </p>
        <p>系统仅能保留10个收货地址，还设置其中一个为默认地址，提交订单无须再次填写信息！</p>

        <div class="address-main">
            <el-row class="address-type">
                <el-col :span="4">收货人</el-col>
                <el-col :span="8">收货地址</el-col>
                <el-col :span="4">手机</el-col>
                <el-col :span="4">默认</el-col>
                <el-col :span="4">操作</el-col>
            </el-row>

            <div class="not-data" v-if="addressList.length <= 0">您还没有收货地址，请手动添加</div>

            <el-row class="address-item" v-for="(item,index) in addressList" :key="index">
                <el-col :span="4">{{item.name}}</el-col>
                <el-col :span="8">{{item.address}}</el-col>
                <el-col :span="4">{{item.phone}}</el-col>
                <el-col :span="4">
                    <i v-if="item.default" class="icon-yes"></i>
                    <span v-if="!item.default">设为默认</span>
                </el-col>
                <el-col :span="4">
                    <span>修改</span>
                    <span>删除</span>
                </el-col>
            </el-row>
        </div>

        <!-- 添加收货地址开始 -->
        <div class="add-address" v-if="state===1">
            <div class="add-main">
                <p>
                    <span>添加收货地址</span>
                    <span @click="hideAddress">X</span>
                </p>
                <div class="user-info">
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
                        <el-form-item label="邮编">
                            <el-input v-model="ruleForm.zipCode"></el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">保存收货人信息</el-button>
                            <el-button @click="submitForm('ruleForm')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
        <!-- 添加收货地址结束 -->

    </div>
</template>

<script>
import { regionData, CodeToText } from "element-china-area-data";
export default {
    data() {
        return {
            state: 0,
            addressList: [
                {
                    name: "陈大大",
                    address: "湖北省武汉市水电费困了就睡",
                    phone: 1324654656,
                    default: true,
                    id: 1
                },
                {
                    name: "陈大大1",
                    address: "湖北省武汉市水电费困了就睡",
                    phone: 2165125655,
                    default: false,
                    id: 1
                }
            ],
            options: regionData,
            ruleForm: {
                name: "",
                region: [],
                address: "",
                phone: "",
                zipCode: ''
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
            }
        };
    },
    methods: {
        showAddress(){
            this.state = 1;
        },
        hideAddress(){
            this.state = 0;
        },
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
                    this.state = 0;
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        handleChange(value) {
            console.log(value);
        }
    }
};
</script>

<style lang="less" scoped>
@import "~styles/public";
@import "~styles/icon";

.span() {
    cursor: pointer;
    color: #2d8ef3;
    &:hover {
        color: #ff0000;
        text-decoration: underline;
    }
}

.receiving-address {
    border: @b-border;
    color: #333;
    .address-title {
        .title();
        padding: 20px;
        border-bottom: @b-border;
    }
    p {
        padding-left: 20px;
        &:nth-child(2) {
            margin-bottom: 5px;
            span {
                .span();
            }
        }
    }

    .address-main {
        margin: 20px;
        text-align: center;
        border: @b-border;

        .address-type {
            padding: 10px 0;
            background-color: #eee;
        }

        .not-data {
            height: 180px;
            line-height: 180px;
            text-align: center;
        }

        .address-item {
            padding: 20px 0;
            border-bottom: @b-border;
            &:last-child {
                border-bottom: none;
            }
            .icon-yes {
                margin-right: 0;
            }
            span {
                .span();
            }
        }
    }

    // 添加收货地址开始
    .add-address {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 1000;

        .add-main {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 888px;
            transform: translate(-50%, -50%);
            background-color: #fff;
            p {
                display: flex;
                justify-content: space-between;
                background-color: #e7e7e7;
                padding: 12px 24px;
                margin-bottom: 34px;
                span {
                    &:last-child {
                        font-size: 16px;
                        cursor: pointer;
                    }
                }
            }
            .user-info {
                padding-left: 18px;
                padding-bottom: 29px;
                div {
                    display: flex;
                    align-items: center;
                    .el-input {
                        width: 280px;
                    }
                }
            }
        }
    }
    // 添加收货地址结束
}
</style>