<template>
    <div class="coupon help-container">
        <p class="layout-title">
            <span>优惠券</span>
        </p>
        <p class="layout-explain">优惠券指由药居士网上药店发出，在购物时可以充当现金使用的抵用券。</p>
        <div class="layout-main">
            <div>
                <h3>优惠券特征</h3>
                <p class="type-explain">
                    1. 具有明确的有效期
                    <br> 2. 可能具备使用上的部分限制
                </p>
                <h3>如何获得优惠券？</h3>
                <p class="type-explain">
                    1. 通过购买商品返利获得
                    <br> 2. 通过站内外的主题活动等获得
                </p>
                <h3>如何使用优惠券？</h3>
                <p class="type-explain">
                    1. 查看和管理：“我的康爱多--我的优惠券”，对您持有的优惠券进行查看和管理。
                    <br>&nbsp; 使用优惠券购物：填写核对订单信息时，点击“使用优惠券及积分”后选择优惠券，享受优惠（抵消部分商品金额，不能抵消运费）。
                    <img src="~assets/image/help/transition_management.png" alt="img">
                    <img src="~assets/image/help/use_coupon.png" alt="img">
                </p>
                <h3>使用规则：</h3>
                <p class="type-explain">
                    1. 优惠券在有效期内方可使用；
                    <br> 2. 每张订单只可使用一张优惠券，多不兑零；
                    <br> 3. 优惠券分产品专用券及普通券，都有一定金额使用限制，专用券只适用于指定产品的购买。
                </p>
                <h3>温馨提示：</h3>
                <p class="type-explain">
                    1. 每张优惠券都有其一定的有效期限，请在此时间前使用，以免过期失效使您不能享受优惠。
                    <br> 2. 优惠券最终解释权由康爱多所有。
                </p>
                
            </div>
          
        
           
           
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
          
        };
    }
};
</script>

<style lang="less" scoped>
@import "~styles/help";

.coupon {
    color: #666;
    margin-bottom: 50px;
}


.layout-content {
    padding: 10px 30px;
    img {
        width: 100%;
    }
}

.layout-main {
    padding: 20px;
    .type-form {
        padding: 10px 100px;
        text-align: center;
    }
    
}
</style>