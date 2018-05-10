<template>
    <div class="layout-register">
        <header class="register-logo">
            <router-link to="/" tag="p">
                <img src="../assets/image/logo.png" alt="logo">
            </router-link>
            <div class="register-login">
                <span>如已注册，点此</span>
                <router-link to="login" tag="button">登陆</router-link>
            </div>
        </header>
        <section class="register-main">
            <h1 class="register-main-title">新用户注册</h1>
            <div class="register-frame">
                <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="手机号" prop="phone">
                        <el-input v-model="ruleForm2.phone" placeholder="请输入您的手机号码"></el-input>
                    </el-form-item>
                    <el-form-item label="手机验证码" prop="phoneCode">
                        <el-input v-model="ruleForm2.phoneCode" placeholder="请输入手机验证码"></el-input>
                        <el-button type="primary" class="codePhone" :disabled="codeChecked" @click="codePhone">获取短信验证码</el-button>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="密码长度为6-16位字符（区分大小写）"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="两次输入的密码必须一致"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" class="confirm" :disabled="!checked" @click="setRegister('ruleForm2')">注册</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox v-model="checked">我已阅读并同意</el-checkbox>
                        <router-link to="/">《药居士用户使用条款》</router-link>
                    </el-form-item>
                </el-form>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: "Register",
    data() {
        let phone = (rule, value, callback) => {
            let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
            let re = reg.test(value);
            if (!re) {
                callback(new Error("手机号码格式不正确"));
            } else {
                callback();
            }
        };
        let validatePass = (rule, value, callback) => {
            let reg = /^\w{6,16}$/g;
            let re = reg.test(value);
            if (!re) {
                callback(new Error("密码格式不正确"));
            } else {
                callback();
            }
        };
        let validatePass2 = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请再次输入密码"));
            } else if (value !== this.ruleForm2.pass) {
                callback(new Error("两次输入密码不一致!"));
            } else {
                callback();
            }
        };
        return {
            ruleForm2: {
                pass: "",
                checkPass: "",
                phone: "",
                phoneCode: ""
            },
            rules2: {
                pass: [{ validator: validatePass, trigger: "blur" }],
                checkPass: [{ validator: validatePass2, trigger: "blur" }],
                phone: [{ validator: phone, trigger: "blur" }]
            },
            checked: true,
            codeChecked: false
        };
    },
    methods: {
        //   获取验证码
        codePhone(e) {
            let time = 60;
            let _this = this;
            _this.codeChecked = true;
            window.clearInterval(timer);
            let timer = setInterval(function() {
                if (time > 0) {
                    time--;
                    e.target.innerHTML = `重新发送 ${time}`;
                } else {
                    _this.codeChecked = false;
                    e.target.innerHTML = "获取短信验证码";
                    window.clearInterval(timer);
                }
            }, 1000);
        },
        //   提交注册
        setRegister(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    if (!this.ruleForm2.phoneCode) {
                        this.$message.error("手机验证码不能为空");
                        return;
                    }
                } else {
                    return false;
                }
            });
        }
    }
};
</script>
<style lang="less">
.layout-register {
    background-image: url(../assets/image/register-bg.png);
    background-repeat: no-repeat;
    min-height: 960px;
    height: 100%;
}

.register-logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 990px;
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 50px;
    p {
        cursor: pointer;
    }
}

.register-main {
    width: 990px;
    margin: 0 auto;
    background-color: #e7f2f9;
    border-radius: 10px;
    box-sizing: border-box;
    text-align: center;
    .register-main-title {
        padding: 30px;
        color: #32a1e8;
        border-bottom: 1px solid #32a1e8;
    }
    .register-frame {
        margin-top: 50px;
        padding-bottom: 50px;
        .el-form-item__label {
            position: relative;
            left: 260px;
        }
        .el-form-item__error {
            left: 270px;
        }
        .codePhone {
            width: 140px;
        }
    }
    .el-form-item {
        margin-bottom: 30px;
        &:nth-child(2) .el-input {
            width: 200px;
            margin-right: 5px;
        }
    }
    .el-input {
        width: 350px;
    }
    .confirm {
        width: 350px;
    }

    .register-frame-name {
        display: inline-block;
        width: 70px;
        margin-right: 10px;
        text-align: right;
    }

    .register-frame-checked {
        margin-top: 30px;
        .el-checkbox {
            margin-left: 20px;
        }
    }
}
</style>
