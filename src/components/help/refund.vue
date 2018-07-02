<template>
    <div class="refund help-container">
        <p class="layout-title">
            <span>退款流程</span>
        </p>

        <div class="layout-main">
            <p class="explain">1. 联系客服，或在线申请退款。
                <br>2. 满足退款申请后顾客提供相关账号信息，药居士根据原支付方式，将款额退回对应的账户：
            </p>
            <div class="layout-from">
                <el-row>
                    <el-col :span="6">支付方式</el-col>
                    <el-col :span="12">退款方式</el-col>
                    <el-col :span="6">退款周期</el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">网上支付</el-col>
                    <el-col :span="12">退至您提供的银行账号/卡号</el-col>
                    <el-col :span="6">3个工作日内</el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">银行转账</el-col>
                    <el-col :span="12">退至您提供的银行账号/卡号</el-col>
                    <el-col :span="6">3个工作日内</el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">邮局汇款</el-col>
                    <el-col :span="12">退至您提供的银行账号/卡号</el-col>
                    <el-col :span="6">3个工作日内</el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">药居士账户</el-col>
                    <el-col :span="12">退至您的药居士账户上</el-col>
                    <el-col :span="6">3个工作日内</el-col>
                </el-row>
            </div>
            <p>3. 顾客检查退款金额是否到账，退款完毕。</p>
            <h3>退款说明：</h3>
            <p class="explain">1. 因商品质量问题或其它药居士网上药店原因造成的，客户可整单退货，配送费及邮寄费将连同货款一并退还。
                <br> 2. 如果订单中部分金额使用现金券或优惠券支付，在办理退款时此部分金额仍按现金券或优惠券形式给予退回。
                <br>3. 送货上门、网上支付的订单办理退货时，商品先行由快递配送员取回，货款根据您的付款方式退回您的支付账号。
                <br>4. 如果由于办理退款的周期导致药居士现金券或优惠券使用时间过期，而顾客需要在效期内使用到的，客服人员可以先将优惠券补上供顾客使用。
            </p>
            <h3>退款途径：</h3>
            <p class="explain">1. 通过支付宝、微信帐户退款
                <br>2. 通过药居士帐户退款：需要顾客提供药居士帐户名称。
            </p>
            <h3>退款时间</h3>
            <p class="explain">如果提交退款后，符合退款条件，我们会在3个工作日内为顾客办理退款，如有退款异常请顾客在7个工作日内进行款项查询反馈。
            </p>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "~styles/help";

.refund {
    margin-bottom: 50px;
}

.layout-main {
    padding-left: 20px;
    padding-right: 20px;
    .layout-from{
        border-top: @b-border;
        text-align: center;
    }
}
</style>