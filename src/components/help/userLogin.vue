<template>
    <div class="user-login help-container">
        <p class="layout-title">
            <span>用户登录</span>
        </p>
        <div class="layout-main">
            <p>注册成功后，您可以登录到我的药居士查看账户信息或修改个人信息。</p>
            <h3>登录步骤详解如下：</h3>
            <p class="layout-content">第一步：点击药居士网上药店首页顶部左上角的"请登录"；</p>
            <p class="layout-content"><img src="~assets/image/help/login.png" alt="l1"></p>
            <p class="layout-content">第二步：照网页提示填写您的手机号或用户名、密码后，点击“登录”即可。</p>
            <p class="layout-content"><img src="~assets/image/help/user_login.png" alt="l2"></p>
            <h3>关于用户登录的常见问题：</h3>
            <p>
                <span class="ask">Q</span>为什么在登陆过程中，系统总提示“Email地址用户名或密码输入错误，请重新填写”？</p>
            <p>
                <span class="answer">A</span>出现这种情况，大部分情况下是因为：
                <br>&nbsp;&nbsp;1）您输入的邮箱地址或是用户名有误；若您曾修改过邮箱地址或是用户名，请用修改后的信息登陆；
                <br>&nbsp;&nbsp;2）您输入的密码有误；若您曾修改过注册密码，请用修改后的信息的登陆；忘记密码，请点击“忘记密码”
                <br>&nbsp;&nbsp;3）若您未在药居士网上药店成功注册，请点击“马上注册”进行注册，注册成功后，再登陆。
            </p>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "~styles/help";

.user-login {
    margin-bottom: 50px;
}

.layout-main{
    padding-left: 20px;
}

.layout-content {
    padding: 10px 30px;
    img {
        width: 100%;
    }
}
</style>