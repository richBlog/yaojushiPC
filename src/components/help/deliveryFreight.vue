<template>
    <div class="delivery-freight help-container">
        <p class="layout-title">
            <span>配送范围及运费</span>
        </p>
        <p class="layout-explain explain">药居士网上药店包邮政策：全场满79元免运费！<br>若订单小于79元，运费根据所选择的配送方式而不同。</p>
        <div class="layout-main">
            <p>药居士网上药店与各大物流公司合作，目前已开通的快递方式有：EMS、圆通。配送范围覆盖全国，具体的配送范围及运费以快递公司相关标准为准。</p>
            <div class="type-form">
                <el-row>
                    <el-col :span="5">配送方式（港澳台除外）</el-col>
                    <el-col :span="4">支付方式</el-col>
                    <el-col :span="5">收货城市</el-col>
                    <el-col :span="5">收费标准（运费）</el-col>
                    <el-col :span="5">配送方式（港澳台除外）</el-col>
                </el-row>
                <el-row>
                    <el-col :span="5">快递（EMS、申通）</el-col>
                    <el-col :span="4">款到发货</el-col>
                    <el-col :span="5">
                        <div>湖北省内</div>
                        <div>湖北省外</div>
                    </el-col>
                    <el-col :span="5">
                        <div>10元</div>
                        <div>15元</div>
                    </el-col>
                    <el-col :span="5">快递（EMS、申通）</el-col>
                </el-row>
                <el-row>
                    <el-col :span="5">快递（EMS、申通）</el-col>
                    <el-col :span="4">货到付款</el-col>
                    <el-col :span="5">
                        <div>湖北省内</div>
                        <div>湖北省外</div>
                    </el-col>
                    <el-col :span="5">
                        <div>15元</div>
                        <div>20元</div>
                    </el-col>
                    <el-col :span="5">快递（EMS、申通）</el-col>
                </el-row>

            </div>
            <p>
                <span>* </span>每日16：00前支付成功的订单一般当天即可发货，16：00之后的订单一般将于24小时内发货。</p>
            <p>
                <span>* </span>默认随机选择快递方式：正常情况根据物流可达区域随机选择物流配送包裹，如有特殊要求请在订单备注里说明。配送时间一般不超过3-6天，如遇特殊情况（天气等不可抗 因素）而造成延迟的敬请谅解。</p>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "~styles/help";

.delivery-freight {
    margin-bottom: 50px;
}

.layout-main {
    padding-left: 20px;
    padding-right: 20px;

    .type-form {
        margin-top: 20px;
        border-top: @b-border;
        text-align: center;
    }

    .el-row {
        display: flex;
    }
}
</style>