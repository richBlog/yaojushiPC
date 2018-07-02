<template>
    <div class="shopping-guide help-container">
        <p class="layout-title">
            <span>购物流程</span>
        </p>
        <div class="layout-main">
            <div class="process-img"><img src="~assets/image/help/shopping_process.png" alt="img"></div>
            <div class="layout-item">
                <p>
                    <span class="layout-step">第一步：</span>进入药居士网上药店首页，点击页面顶部左上角【免费注册】；</p>
                <div class="item-img"><img src="~assets/image/help/free_register.png" alt="img"></div>
            </div>
            <div class="layout-item">
                <p>
                    <span class="layout-step">第二步：</span>按照网页提示，填写完信息后，选中“同意协议”，点击【立即注册】；</p>
                <div class="item-img"><img src="~assets/image/help/user_register.png" alt="img"></div>
            </div>
            <div class="layout-item">
                <p>
                    <span class="layout-step">第三步：</span>注册成功，即可开启您的购物之旅！</p>
                <div class="item-img"><img src="~assets/image/help/register_succeed.png" alt="img"></div>
            </div>
            <div class="layout-item">
                <p>
                    <span class="layout-step">第四步：</span>对于忘记密码，在登录页面，点击【忘记密码】，在验证身份时选择“手机找回密码”，输入您注册的手机号码，获取短信验证码，验证身份；也可以在验证身份时选择 “邮箱找回密码”输入您注册的邮箱，系统将发送找回密码的链接到您的邮箱，需登录您的个人邮箱，找到并打开“药居士找回密码”邮件点击“链接地址”的方式验证身 份。</p>
                <div class="item-img"><img src="~assets/image/help/mobile_find_back.png" alt="img"></div>
            </div>
            <div class="layout-item">
                <p>
                    <span class="layout-step">第五步：</span>挑选商品</p>
                <p>
                    <span class="layout-step">&nbsp;&nbsp;查找商品的方法一：</span>在全部商品分类中查找您要购买的商品</p>

                <div class="item-img"><img src="~assets/image/help/search_classify.png" alt="img"></div>
                <p>
                    <span class="layout-step">&nbsp;&nbsp;查找商品的方法二：</span>直接在搜索框搜索想要购买的商品</p>

                <div class="item-img"><img src="~assets/image/help/search_frame.png" alt="img"></div>
            </div>
             <div class="layout-item">
                <p>
                    <span class="layout-step">第六步：</span>找到您要购买的商品后，选择规格，点击【加入购物车】</p>
                <div class="item-img"><img src="~assets/image/help/product_info.png" alt="img"></div>
            </div>
             <div class="layout-item">
                <p>
                    <span class="layout-step">第七步：</span>确认购买商品全部加入购物车后，请点击【去结算】；若您还想购买，请点击【继续购物】</p>
                <div class="item-img"><img src="~assets/image/help/settlement.png" alt="img"></div>
            </div>
             <div class="layout-item">
                <p>
                    <span class="layout-step">第八步：</span>填写您的收货地址，点击【保存收货人信息】</p>
                <div class="item-img"><img src="~assets/image/help/save_address.png" alt="img"></div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "~styles/help";

.shopping-guide {
    margin-bottom: 50px;
}

.layout-main {
    padding-left: 20px;
    .process-img {
        padding: 0 100px;
        text-align: center;
        img {
            width: 100%;
        }
    }

    .layout-item {
        margin-top: 20px;
        .layout-step {
            font-weight: bold;
        }
        .item-img {
            margin-top: 10px;
            text-align: center;
        }
    }
}
</style>