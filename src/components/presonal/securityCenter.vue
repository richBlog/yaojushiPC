<template>
    <div class="security-center">
        <p class="security-title">
            <span>安全中心</span>
        </p>
        <div class="account">登陆账户：<span class="user-name">尊敬的{{securityList.userName}}，欢迎您！</span></div>
        <div class="level">
            账户安全级别：
            <el-progress :text-inside="true" :stroke-width="16" :percentage="50" status="exception"></el-progress>
            <div class="level-hints">验证手机、邮箱即可获取100积分 <router-link to="myCoupon">查看积分</router-link></div>    
        </div> 

        <ul class="security-main">
            <li>
                <div><i class="icon-yes"></i>手机验证</div>
                <div class="prompt">您的验证手机： 如果已丢失、停用、更换，请立即重新验证，避免账户被盗</div>
                <div class="security-btn">
                    <router-link to="modify">修改</router-link>
                </div>
            </li>
            <li>
                <div><i class="icon-sigh"></i>邮箱验证</div>
                <div class="prompt">验证后，可用于快速找回登陆密码</div>
                <div class="security-btn">
                    <router-link to="" v-if="securityList.email">修改</router-link>
                    <el-button v-else type="primary" plain @click="bindingEmail">立即验证</el-button>
                </div>
            </li>
            <li>
                <div><i class="icon-yes"></i>登陆密码</div>
                <div class="prompt">互联网账户存在被盗风险，建议您定期修改以保证账户安全</div>
                <div class="security-btn">
                    <router-link to="modifyWord" v-if="securityList.word">修改</router-link>
                    <el-button v-else type="primary" plain>立即验证</el-button>
                </div>
            </li>
            <li>
                <div><i class="icon-qq"></i>QQ</div>
                <div class="security-btn">
                    <router-link to="" v-if="securityList.qq">解绑</router-link>
                    <el-button v-else type="primary" plain @click="bindingQq">立即绑定</el-button>
                </div>
            </li>
            <li>
                <div><i class="icon-weChat"></i>微信</div>
                <div class="security-btn">
                    <router-link to="" v-if="securityList.wechat">解绑</router-link>
                    <el-button v-else type="primary" plain @click="bindingWechat">立即绑定</el-button>
                </div>
            </li>
            <li>
                <div><i class="icon-alipay"></i>支付宝</div>
                <div class="security-btn">
                    <router-link to="" v-if="securityList.alipay">解绑</router-link>
                    <el-button v-else type="primary" plain @click="bindingAlipay">立即绑定</el-button>
                </div>
            </li>
            <li>
                <div><i class="icon-taobao"></i>淘宝</div>
                <div class="security-btn">
                    <router-link to="" v-if="securityList.taobao">解绑</router-link>
                    <el-button v-else type="primary" plain @click="bindingTaobao">立即绑定</el-button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                securityList: {
                    userName: '奥斯丁',
                    email: false,
                    word: true,
                    qq: false,
                    wechat: false,
                    aipay: false,
                    taobao: false
                }
            }
        },
        methods:{
            // 邮箱认证
            bindingEmail(){
                this.$message.error('邮箱认证功能程序员小哥哥还在开发中，敬请期待.....');
            },
            // QQ绑定
            bindingQq(){
                this.$message.error('QQ绑定功能程序员小哥哥还在开发中，敬请期待.....');
            },
            // 微信绑定
            bindingWechat(){
                this.$message.error('微信绑定功能程序员小哥哥还在开发中，敬请期待.....');
            },
            // 支付宝绑定
            bindingAlipay(){
                this.$message.error('支付宝绑定功能程序员小哥哥还在开发中，敬请期待.....');
            },
            // 淘宝绑定
            bindingTaobao(){
                this.$message.error('淘宝绑定功能程序员小哥哥还在开发中，敬请期待.....');
            },
        }
    }
</script>

<style lang="less" scoped>
@import "~styles/icon";
@import "~styles/public";


.security-center{
    border: @b-border;
    .security-title{
        padding: 20px;
        border-bottom: @b-border;
        .title();
    }
    .account{
        margin: 20px;
        .user-name{
            color: #FF3939;
        }
    }

    .level{
        display: flex;
        margin-left: 20px;
        .el-progress{
            width: 20%;
            margin: 0 10px;
        }
        .level-hints{
            color: #FF8338;
            a{
                margin: 0 10px;
                color: #2d8ef3;
                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }

    .security-main{
        margin: 20px;
        border: @b-border;
        li{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 20px;
            border-bottom: @b-border;
            &:last-child{
                border-bottom: none;
            }
            .prompt{
                width: 60%;
                color: #666;
            }
            .security-btn{
                width: 100px;
                text-align: center;
                a{
                    &:hover{
                        color: #FF3939;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}
</style>