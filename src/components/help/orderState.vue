<template>
    <div class="order-state help-container">
        <p class="layout-title">
            <span>订单状态说明</span>
        </p>
        <p class="layout-explain explain">在药居士网上药店购物的过程中，一个新的订单从下单到订单完成，会经历各种状态，我们会将各种状态显示在订单详情页面，希望以此种方式让您更好的了解订单情况，及时跟踪订单状态，打消疑惑并顺利完成购物。您可以在“我的订单”中查看到您订单的状态：</p>
        <div class="layout-main">
           <div class="layout-item">
               <h3>未付款</h3>
               <p class="explain">&nbsp;&nbsp;您的订单刚提交成功，如果您选择的支付方式是在线支付、银行转账、邮局汇款等非货到付款方式，在药居士网上药店还未收到您的款项时，此时等待您去付款。您还可以取消订单、修改订单信息、更改在线支付的支付方式。</p>
           </div>
            
           <div class="layout-item">
               <h3>已付款</h3>
               <p class="explain">&nbsp;&nbsp;您的订单已经支付成功，正在等待系统或者我们的客服进行人工审核、确认。药品不同于其它商品，我们对于每一张新的订单都会通过系统或人工进行审核确认。</p>
           </div>

           <div class="layout-item">
               <h3>RX未审核</h3>
               <p class="explain">&nbsp;&nbsp;您的订单中有处方药，正在等待执业药师对您的处方笺进行审方。</p>
           </div>

           <div class="layout-item">
               <h3>RX已审核</h3>
               <p class="explain">&nbsp;&nbsp;您的处方药订单已经审方通过。</p>
           </div>

           <div class="layout-item">
               <h3>已审核</h3>
               <p class="explain">&nbsp;&nbsp;您的订单已经审核通过，发往仓库等待拣货，此时您不能修改订单信息。。</p>
           </div>
            
           <div class="layout-item">
               <h3>部分生成</h3>
               <p class="explain">&nbsp;&nbsp;如果您订购的商品有缺货或商品数量较多较大，需要分包裹派送，订单中的部分商品已经生成包裹。。</p>
           </div>

           <div class="layout-item">
               <h3>完成生成</h3>
               <p class="explain">&nbsp;&nbsp;您的订单商品已经全部生成包裹，等待发货。。</p>
           </div>
            
           <div class="layout-item">
               <h3>部分出库</h3>
               <p class="explain">&nbsp;&nbsp;您的订单商品分了多个包裹，部分包裹已经发出，正在运送的途中，想要了解包裹的送达时间，请点击“物流跟踪”查看详细的物流信息。</p>
           </div>
            
           <div class="layout-item">
               <h3>完全出库</h3>
               <p class="explain">&nbsp;&nbsp;您订购的商品已经全部发出，正在运送的途中，想要了解包裹的送达时间，请点击“物流跟踪”查看详细的物流信息。若已收到商品，请点击“确认收货”完成交易。</p>
           </div>
            
           <div class="layout-item">
               <h3>已完成</h3>
               <p class="explain">&nbsp;&nbsp;您已收到订购的商品并在“我的药居士”点击“确认收货”。对收到的商品感到满意，可以点击“去评论”对商品进行评价。若收到的商品有质量问题，您可以点击“申请退换货”服务。</p>
           </div>
            
           <div class="layout-item">
               <h3>已作废</h3>
               <p class="explain">&nbsp;&nbsp;如果您订购的商品有缺货、或您的订单超过等款的保留期限，您的订单将被系统取消；如果您在“我的订单”操作栏中点击了“取消订单”，取消后您的订单也显示“已作废”。若您还想购买此商品，点击“重新购买”将商品加入购物车。</p>
           </div>
            
            <p>
                <span class="remind">注意事项：</span>
                <br>&nbsp;&nbsp;1. 您的订单还未审核处于“未付款”或“已付款”的状态，您可以取消订单、修改订单信息、更改网上支付的支付方式。
                <br>&nbsp;&nbsp;2. 取消订单后，系统会自动判别订单是否已付款，已付款的订单取消订单后会自动生成退款申请表。
                <br>&nbsp;&nbsp;3. 如果您的订单已经生成包裹，您将不能随意取消您的订单，如有问题请和我们的客服联系。
            </p>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "~styles/help";

.order-state {
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
        padding-right: 15px;
    }
}
</style>