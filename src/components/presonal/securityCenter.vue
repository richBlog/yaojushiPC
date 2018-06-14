<template>
    <div class="security-center">
        <p class="security-title">
            <span>安全中心</span>
        </p>
        <div class="account">登陆账户：<span>，欢迎您！</span></div>
        <div class="level">账户安全级别</div> 

        <ul class="security-main">
            <li>
                <div><i></i>手机验证</div>
                <div class="prompt">您的验证手机： 如果已丢失、停用、更换，请立即重新验证，避免账户被盗</div>
                <div>
                    <span>修改</span>
                    <el-button type="danger">立即验证</el-button>
                </div>
            </li>
            <li>
                <div><i></i>邮箱验证</div>
                <div class="prompt">验证后，可用于快速找回登陆密码</div>
                <div>
                    <span>修改</span>
                    <el-button type="danger">立即验证</el-button>
                </div>
            </li>
            <li>
                <div><i></i>登陆密码</div>
                <div class="prompt">互联网账户存在被盗风险，建议您定期修改以保证账户安全</div>
                <div>
                    <span>修改</span>
                    <el-button type="danger">立即验证</el-button>
                </div>
            </li>
            <li>
                <div><i></i>QQ</div>
                <div>
                    <span>解绑</span>
                    <el-button type="danger">立即绑定</el-button>
                </div>
            </li>
            <li>
                <div><i></i>微信</div>
                <div>
                    <span>解绑</span>
                    <el-button type="danger">立即绑定</el-button>
                </div>
            </li>
            <li>
                <div><i></i>支付宝</div>
                <div>
                    <span>解绑</span>
                    <el-button type="danger">立即绑定</el-button>
                </div>
            </li>
            <li>
                <div><i></i>淘宝</div>
                <div>
                    <span>解绑</span>
                    <el-button type="danger">立即绑定</el-button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
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
    }

    .level{
        margin-left: 20px;
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
        }
    }
}
</style>