<template>
    <div class="order-address">
        <p class="address-title">收货人</p>
        <!-- 有收获地址的情况开始 -->
        <!-- <div class="exist-address">
            <div>
                <span>收货人</span>
                <span>新增收货地址</span>
            </div>
            <ul>
                <li></li>
            </ul>
            <div>更多收货地址
                <i></i>
            </div>
        </div> -->
        <!-- 有收获地址的情况结束 -->
        <!-- 没有地址的情况开始 -->
        <div class="inexistence-address">
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
    </div>
</template>

<script>
import { regionData, CodeToText } from 'element-china-area-data'

export default {
    data() {
        return {
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
                        message: "请输入收货人姓名",
                        trigger: "blur"
                    },
                    {
                        min: 2,
                        max: 4,
                        message: "长度在 3 到 5 个字符",
                        trigger: "blur"
                    }
                ],
                region: [
                    {
                        required: true,
                        message: "请输入收货人所在地区",
                        trigger: "blur"
                    }
                ],
                address: [
                    {
                        required: true,
                        message: "请输入收货人详情地址",
                        trigger: "blur"
                    }
                ],
                phone: [
                    {
                        required: true,
                        message: "请输入手机号码",
                        trigger: "blur"
                    },
                    {
                        pattern: /^1[34578]\d{9}$/,
                        message: '您的手机号码格式不正确'
                    }
                ],
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    console.log(this.ruleForm.name)
                    for(let item of this.ruleForm.region){
                        console.log(CodeToText[item]);
                        
                    }
                    console.log(this.ruleForm.region)
                    console.log(this.ruleForm.address)
                    console.log(this.ruleForm.phone)
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        handleChange (value) {
            console.log(value)
        }
    }
};
</script>

<style lang="less" scoped>
.address-title {
    margin-bottom: 10px;
    padding: 5px 0 5px 20px;
    font-size: 18px;
    font-weight: bold;
    color: #999;
}

.inexistence-address{
    padding: 10px 20px;
    .demo-ruleForm{
        width: 40%;
    }
}
</style>