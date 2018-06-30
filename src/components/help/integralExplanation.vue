<template>
    <div class="integral-explanation help-container">
        <p class="layout-title">
            <span>积分说明</span>
        </p>
        <p class="layout-explain">药居士积分是一项会员专享的回馈计划：会员在药居士网上药店所获得的积分，可用于积分抵现、参加活动...每个小积分都有一个信念：积少能成多、聚沙可成塔！</p>
        <div class="layout-main">
            <div>
                <h3>一、积分获得渠道</h3>
                <div class="explain-box">
                    <el-row>
                        <el-col :span="3">获得积分渠道 </el-col>
                        <el-col :span="15">获取积分规则</el-col>
                        <el-col :span="3">获得积分值</el-col>
                        <el-col :span="3">每日封顶</el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="3">注册获取 </el-col>
                        <el-col :span="15">新用户注册即可获得100积分</el-col>
                        <el-col :span="3">100积分/人</el-col>
                        <el-col :span="3">一次性</el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="3">完善基本信息 </el-col>
                        <el-col :span="15">注册后，在“账户资料--个人资料”里填写完整的基本信息，即可获得100积分</el-col>
                        <el-col :span="3">100积分/人</el-col>
                        <el-col :span="3">一次性</el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="3">完善更多信息 </el-col>
                        <el-col :span="15">注册后，在“账户资料--个人资料”里填写更多的个人信息，即可获得100积分</el-col>
                        <el-col :span="3">100积分/人</el-col>
                        <el-col :span="3">一次性</el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="3">上传头像 </el-col>
                        <el-col :span="15">注册后，在“账户资料--个人资料--上传头像”里上传专属、代表自己的头像，即可获得100积分</el-col>
                        <el-col :span="3">100积分/人</el-col>
                        <el-col :span="3">一次性</el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="3">绑定邮箱 </el-col>
                        <el-col :span="15">注册后，在“账户资料--安全中心--邮箱”绑定邮箱，即可获得100积分</el-col>
                        <el-col :span="3">100积分/人</el-col>
                        <el-col :span="3">一次性</el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="3">绑定手机 </el-col>
                        <el-col :span="15">注册后，在“账户资料--安全中心--手机”绑定手机号码，即可获得100积分</el-col>
                        <el-col :span="3">100积分/人</el-col>
                        <el-col :span="3">一次性</el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="3">首单奖励 </el-col>
                        <el-col :span="15">新会员注册后，并成功购物完成，额外奖励100积分</el-col>
                        <el-col :span="3">100积分/人</el-col>
                        <el-col :span="3">一次性</el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="3">购物获取 </el-col>
                        <el-col :span="15">在药居士购物每消费1元，获得1积分（随着会员等级提高购物获得积分比例也会有对应增加）
                        </el-col>
                        <el-col :span="3">1积分/消费1元</el-col>
                        <el-col :span="3">无封顶</el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="3">商品评论获取 </el-col>
                        <el-col :span="15">购物后给商品评论（需审核）成功后获得10积分</el-col>
                        <el-col :span="3">10积分/条</el-col>
                        <el-col :span="3">无封顶</el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="3">签到获取 </el-col>
                        <el-col :span="15">每天在药居士签到送5积分，一个会员账号只能签到领取1次积分</el-col>
                        <el-col :span="3">5积分/人</el-col>
                        <el-col :span="3">一次性</el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="3">活动奖励 </el-col>
                        <el-col :span="15">不定期的举行积分相关活动，如抽奖、玩游戏等</el-col>
                        <el-col :span="3">活动的相应积分</el-col>
                        <el-col :span="3">无封顶</el-col>
                    </el-row>
                </div>
                <p>
                    1) 订单发货后 （订单状态变为“已发货”）， 帐户内即可收到相应购物积分， 但处于冻结状态。 若此期间无发生退货， 用户点击“确认收货”后即订单状态变为 “交易成功”该笔积分即可使用。
                    <br> 2) 如果订单发生退货情况， 将扣除所退商品的相应积分 （如果该商品产生的双倍积分、其他额外积分， 也会因为退货而全部扣回）， 剩余积分将在订单状态变为 “已退款”之后即可使用。
                    <br> 3) 不同等级的会员购物获赠不同倍数的积分特权，
                    <router-link to="vipGrade" class="jump">具体的会员等级获赠积分请见详情>></router-link>
                </p>
            </div>
            <div>
                <h3>二、积分消费渠道</h3>
                <p class="type-explain">
                    如果会员利用系统漏洞作弊等违规方式获得积分，经查证后，将查封会员账号，并追缴相关积分，并保留追究相应法律责任的权利。
                </p>
                <h4>积分抵现规则：</h4>
                <p class="type-explain">
                    1) 积分抵现比例是100:0.5，即100积分抵现0.5元；
                    <br> 2) 每次需以100积分的倍数进行抵现，如100积分抵现0.5元，200积分抵现1元，300积分抵现1.5元；
                    <br> 3) 积分抵现最多只能抵扣订单金额的10%，如订单金额100元最多能用积分抵扣10元。
                </p>
            </div>
            <div>
                <h3>三、如何查询积分</h3>
                <p class="type-explain">
                    1）药居士会员登录后，在"我的药居士-交易管理-我的积分"中，查询积分累积明细及积分消费情况；
                    <br> 2）拨打药居士服务热线027-83215071查询；
                    <br> 3) 药居士会不定期地推出各种积分促销活动，双倍积分、连环积分，惊喜不断，请随时关注关于积分促销的通知。
                </p>
            </div>
            <div>
                <h3>四、积分使用注意事项</h3>
                <p class="type-explain">
                    积分抵现使用，在药居士网上药店进行购物时在订单确认页抵现使用。
                </p>
            </div>
            <div>
                <h3>五、关于积分的常见问题：</h3>
                <ul>
                    <li>
                        <p>
                            <span class="ask">Q</span>积分有效期吗？
                        </p>
                        <p>
                            <span class="answer">A</span>没有。积分没有有效期，可以在药居士网上药店长期使用。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>积分有什么作用？
                        </p>
                        <p>
                            <span class="answer">A</span>会员可用积分参与抵扣订单金额的优惠！
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>不同帐户积分可以合并吗？
                        </p>
                        <p>
                            <span class="answer">A</span>不可以。不同帐户积分不可合并使用。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>我买了东西，为什么积分还没有被累计？
                        </p>
                        <p>
                            <span class="answer">A</span>订单状态变为交易成功的第二天，积分将记入您的账户。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>如果发生了退货，积分怎么算？
                        </p>
                        <p>
                            <span class="answer">A</span>若您的订单发生退货，将扣除因退货部分产生的积分。
                        </p>
                    </li>
                </ul>
            </div>
            <div>
                <h3>六、违规处理</h3>
                <p class="type-explain">
                    如果会员利用系统漏洞作弊等违规方式获得积分，经查证后，将查封会员账号，并追缴相关积分，并保留追究相应法律责任的权利。
                </p>
            </div>
            <div>
                <h3>七、修改及终止</h3>
                <p class="type-explain">
                    药居士在法律允许的范围内可对本活动细则进行解释，并有权根据需要取消本细则或增删、修订细则的权利（包括但不限于参加资格、积分计算及兑换标准）。
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style lang="less" scoped>
@import "~styles/help";

.integral-explanation {
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
    .explain-box {
        margin-bottom: 20px;
        text-align: center;
        border-top: @b-border;
    }
    .jump {
        color: #ff0000;
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>