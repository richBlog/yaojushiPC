<template>
    <div class="vip-grade help-container">
        <p class="layout-title">
            <span>会员级别</span>
        </p>
        <p class="layout-explain">药居士网上药店的会员分为普通会员和VIP会员，不同级别的会员享有不同的会员优惠。</p>
        <div class="layout-main">
            <div>
                <h3>一、会员级别</h3>
                <p class="type-explain">
                    1. 药居士网上药店的会员分为普通会员和VIP会员；VIP会员分为4个等级：高级会员、黄金会员、铂金会员、钻石会员；
                    <br> 2. 会员级别的升降均由系统自动处理，无需申请；
                    <br> 3. 会员级别由成长值决定，成长值越高会员等级越高，享受的会员权益越大；
                    <br> 4. 会员成长值=合格累计消费金额，成长值按交易金额的个位数取整计算，如，购买88.4元的商品，则确认收货后可以得到88点，成长值不封顶。
                </p>
                <h4>具体级别界定详情如下：</h4>
                <div class="type-form">
                    <el-row class="form-title">
                        <el-col :span="8">会员级别</el-col>
                        <el-col :span="8">级别鉴定</el-col>
                        <el-col :span="8">会员有效期</el-col>
                    </el-row>
                    <el-row class="form-content" v-for="(item,index) in vip" :key="index">
                        <el-col :span="8">{{item.grade}}</el-col>
                        <el-col :span="8">{{item.range}}</el-col>
                        <el-col :span="8">{{item.time}}</el-col>
                    </el-row>
                </div>
            </div>
            <div>
                <h3>二、会员特权</h3>
                <p class="type-explain">
                    1. 各会员等级可享受的会员特权如下表：
                </p>
                <div class="type-form">
                    <el-row class="form-title">
                        <el-col :span="4">会员专属特权</el-col>
                        <el-col :span="4">普通会员</el-col>
                        <el-col :span="4">高级会员</el-col>
                        <el-col :span="4">黄金会员</el-col>
                        <el-col :span="4">铂金会员</el-col>
                        <el-col :span="4">钻石会员</el-col>
                    </el-row>
                    <el-row class="form-content">
                        <el-col :span="4">满79元包邮</el-col>
                        <el-col :span="4">√</el-col>
                        <el-col :span="4">√</el-col>
                        <el-col :span="4">√</el-col>
                        <el-col :span="4">√</el-col>
                        <el-col :span="4">√</el-col>
                    </el-row>
                    <el-row class="form-content">
                        <el-col :span="4">专享商品</el-col>
                        <el-col :span="4">√</el-col>
                        <el-col :span="4">√</el-col>
                        <el-col :span="4">√</el-col>
                        <el-col :span="4">√</el-col>
                        <el-col :span="4">√</el-col>
                    </el-row>
                    <el-row class="form-content">
                        <el-col :span="4">积分抵现</el-col>
                        <el-col :span="4">√</el-col>
                        <el-col :span="4">√</el-col>
                        <el-col :span="4">√</el-col>
                        <el-col :span="4">√</el-col>
                        <el-col :span="4">√</el-col>
                    </el-row>
                    <el-row class="form-content">
                        <el-col :span="4">购物获取积分倍数</el-col>
                        <el-col :span="4">1倍</el-col>
                        <el-col :span="4">1.1倍</el-col>
                        <el-col :span="4">1.3倍</el-col>
                        <el-col :span="4">1.5倍</el-col>
                        <el-col :span="4">2倍</el-col>
                    </el-row>
                </div>
                <p class="type-explain">
                    2. 特权简介：
                    <br> &lt;运费优惠&gt;：所有级别的会员享受全场满79免运费（EMS到付除外）。
                    <br> &lt;专享商品&gt;：不同级别的会员享受该级别的特价优惠商品。（不定期推出，详情请留意药居士网上药店的会员专场）
                    <br> &lt;积分抵现&gt;：所有级别的会员可享受200积分抵现1元，购物时在订单确认页中直接抵现使用。
                    <br> &lt;购物积分加倍&gt;：所有会员在药居士网上药店购买商品均可获得积分，可以使用积分兑换超值商品或抵现消费。但不同级别的会员享受的购物积分待遇不同，普通会员购物获赠1倍积分；高级会员购物获赠1.1倍积分；黄金会员购物获赠1.3倍积分；铂金会员购物获赠1.5倍积分；钻石会员购物获赠2倍积分。
                </p>
            </div>
            <div>
                <h3>三、会员级别查询</h3>
                <ul>
                    <li>
                        <p>
                            <span class="ask">Q</span>什么叫累计合格消费金额？
                        </p>
                        <p>
                            <span class="answer">A</span>合格累计消费金额是指订单实际支付金额，不包含退货商品金额、运费、优惠券等。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>我的VIP会员级别有有效期吗？
                        </p>
                        <p>
                            <span class="answer">A</span>没有。无论高级会员、黄金会员、铂金会员、钻石会员都没有有效期，可在药居士网上药店长期使用。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>什么叫VIP会员？
                        </p>
                        <p>
                            <span class="answer">A</span>VIP会员作为帮助中心里对高级会员、黄金会员、铂金会员、钻石会员的一个总称呼。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>满足会员成长值后，新的会员级别什么时候开始生效？
                        </p>
                        <p>
                            <span class="answer">A</span>根据药居士系统统计/确认时间，我们将在当天为您完成晋级。
                        </p>
                    </li>
                </ul>
            </div>
            <div>
                <h3>四、关于会员级别的常见问题：</h3>
                <p class="type-explain">
                    您可以在"我的药居士"中，查看您的会员级别及成长值。
                </p>
            </div>
            <div>
                <h3>五、免责条款</h3>
                <p class="type-explain">
                    1. 感谢您访问药居士网上药店的会员级别规则，本规则由广东药居士连锁药店有限公司提供。以上规则条款和条件，连同规则有关的任何促销内容的相应条款和条件，构成本规则会员与药居士网上药店 之间关于制度的完整协议。如果您使用药居士网上药店，您就参加了本规则并接受了这些条款、条件、限制和要求。请您注意，您对药居士网上药店的使用以及您的会员资格还受制于药居士网上药店网站上时常更新的所有条款、条件、限制和要求，请仔细阅读这些条款和条件。
                    <br> 2. 协议的变更:药居士网上药店可以在没有特殊通知的情况下自行变更本条款、以及任何其它条款和条件或会员资格的任何方面。对这些条款的任何修改将被包含在药居士网上药店的更新的条款中。如果任何变更被认定为无效、废止或因任何原因不可执行，则该变更是可分割的，且不影响其它变更或条件的有效性或可执行性。在我们变更这些条款后，您对药居士网上药店的继续使用，构成您对变更的接受。
                    <br> 3. 终止:药居士网上药店可以不经通知而自行决定终止全部或部分计划，或终止您的会员资格。即使药居士网上药店没有要求或强制您严格遵守这些条款，也并不构成对属于药居士网上药店的任何权利的放弃。如果您在药居士网上药店的客户帐户被关闭，那么您也将丧失您的会员资格。对于该会员资格的丧失，您对药居士网上药店不能主张任何权利或为此索赔
                    <br> 4. 责任限制:除了药居士网上药店的使用条件中规定的其它限制和除外情况之外，在中国法律法规所允许的限度内，对于因会员积分制度而引起的或与之有关的任何直接的、间接的、特殊的、附带的、后果性的或惩罚性的损害，或任何其它性质的损害，药居士网上药店、药居士网上药店的董事、管理人员、雇员、代理或其它代表在任何情况下都不承担责任。药居士网上药店的全部责任，不论是合同、保证、侵权（包括过失）项下的还是其它的责任，均不超过您所购买的与该索赔有关的商品价值额。这些责任排除和限制条款将在法律所允许的最大限度内适用，并在会员资格规则被撤销或终止后仍继续有效。
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            vip: [
                {
                    grade: "普通会员",
                    range: "0-1999",
                    time: "永久有效"
                },
                {
                    grade: "高级会员",
                    range: "2000-4999",
                    time: "永久有效"
                },
                {
                    grade: "黄金会员",
                    range: "5000-19999",
                    time: "永久有效"
                },
                {
                    grade: "铂金会员",
                    range: "20000-79999",
                    time: "永久有效"
                },
                {
                    grade: "钻石会员",
                    range: ">=80000",
                    time: "永久有效"
                }
            ]
        };
    }
};
</script>

<style lang="less" scoped>
@import "~styles/help";

.vip-grade {
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

    .type-explain {
        line-height: 25px;
        margin-bottom: 10px;
    }

    .type-form {
        padding: 10px 100px;
        text-align: center;
    }
    
}
</style>