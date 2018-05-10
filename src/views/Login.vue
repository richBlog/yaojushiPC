<template>
    <el-container class="layout-login">

        <el-header class="login-header">
            <div class="login-header-container">
                <router-link to="/">
                    <img src="../assets/image/logo.png" alt="logo">
                </router-link>
            </div>
        </el-header>

        <el-main class="login-main">
            <div class="login-container">
                <div class="login-main-wechat">
                    <img src="../assets/image/login.jpg" alt="login">
                </div>
                <div class="login-main-login">

                    <div class="login-tab">
                        <div class="login-tab-td" @click="loginTab" :class="tab?'active':''">手机号码快捷登陆</div>
                        <div class="login-tab-td" @click="loginTab" :class="!tab?'active':''">账户密码登陆</div>
                    </div>

                    <div class="login-main-input" v-if="tab">
                        <el-input v-model="phone" placeholder="请输入手机号"></el-input>
                        <el-alert v-show="isPhone" class="phone-error" title="你的手机号码格式不正确" type="error" :closable="false" show-icon>
                        </el-alert>
                        <el-input v-model="phoneCode" placeholder="请输入验证码"> </el-input>
                        <el-button type="primary" class="login-main-phoneCode">发送验证码</el-button>
                        <el-alert v-show="isPhoneCode" class="phoneCode-error" title="你的验证码不正确" type="error" :closable="false" show-icon>
                        </el-alert>
                        <el-button type="primary" @click="loginPhone">登陆</el-button>
                    </div>

                    <div class="login-main-input tab" v-else>
                        <el-input v-model="userName" placeholder="请输入用户名"></el-input>
                        <el-alert v-show="isUserName" title="你的用户名不正确" type="error" :closable="false" show-icon>
                        </el-alert>
                        <el-input v-model="userPassword" placeholder="请输入密码"> </el-input>
                        <el-alert v-show="isUserPassword" class="phoneCode-error" title="你的密码不正确" type="error" :closable="false" show-icon>
                        </el-alert>
                        <el-button type="primary" @click="login">登陆</el-button>
                    </div>
                    <!-- <el-button type="primary" @click="login">登陆</el-button> -->
                    <div class="login-main-retrieve">
                        <router-link class="login-main-register" to="Register">免费注册></router-link>
                        <router-link to="Register">忘记密码？</router-link>
                    </div>
                </div>
            </div>
        </el-main>

        <el-footer>
            <div class="login-footer">
                <p>药居士－国家药监局认证的合法网上药店，致力于打造优质、低价、便捷的网上药店和最值得信赖的健康服务平台</p>
                <p>©2010-2016 武汉药居士网上药店 版权所有，并保留所有权利</p>
            </div>
        </el-footer>

    </el-container>
</template>
<script>
export default {
    name: "Login",
    data() {
        return {
            activeName: "second",
            tab: true,
            phone: "",
            phoneCode: "",
            userName: "",
            userPassword: "",
            isPhone: false,
            isPhoneCode: false,
            isUserName: false,
            isUserPassword: false
        };
    },
    methods: {
        // 登陆切换
        loginTab(e) {
            if (!e.target.classList[1]) {
                this.tab = !this.tab;
                this.isPhone = false;
                this.isPhoneCode = false;
                this.isUserName = false;
                this.isUserPassword = false;
            }
        },
        loginPhone() {
            if (this.phone == "") {
                this.isPhone = true;
            } else {
                this.isPhone = false;
            }
            if (this.phoneCode == "") {
                this.isPhoneCode = true;
            } else {
                this.isPhoneCode = false;
            }
        },
        login() {
            if (this.userName == "") {
                this.isUserName = true;
            } else {
                this.isUserName = false;
            }
            if (this.userPassword == "") {
                this.isUserPassword = true;
            } else {
                this.isUserPassword = false;
            }
        },
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
};
</script>
<style lang="less" scoped>
.login-header {
    height: auto !important;
    padding: 20px 0 !important;
}
.login-header-container {
    width: 960px;
    margin: 0 auto;
    text-align: left;
}

.login-main {
    background-color: #4fc3ff;
    .login-container {
        display: flex;
        width: 990px;
        margin: 0 auto;
    }
    .login-main-login {
        width: 370px;
        height: 350px;
        padding: 20px;
        margin-left: 30px;
        margin-top: 80px;
        background-color: #fff;
        border-radius: 10px;
    }
    .login-tab-td {
        display: inline-block;
        width: 48%;
        padding-bottom: 15px;
        text-align: center;
        box-sizing: border-box;
        cursor: pointer;
        &.active {
            border-bottom: 1px solid #0d8dfd;
        }
    }

    .login-main-input {
        padding-top: 30px;
        position: relative;
        .el-input {
            margin-bottom: 40px;
            &:nth-child(2) {
                width: 60%;
            }
        }

        .login-main-phoneCode {
            position: absolute;
            top: 110px;
            right: 0;
            width: 38%;
            margin-top: 0px;
        }

        .el-alert--error {
            position: absolute;
            top: 72px;
            left: 0;
        }
        .phoneCode-error {
            top: 152px;
        }
    }
    .el-button--primary {
        width: 100%;
        margin-left: 0;
    }
    .tab {
        .el-input {
            &:nth-child(2) {
                width: 100%;
            }
        }
    }

    .login-main-retrieve {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        .login-main-register {
            color: #0d8dfd;
        }
    }
}
.login-footer {
    padding-top: 20px;
    text-align: center;
    p {
        height: 30px;
        line-height: 30px;
    }
}
</style>

