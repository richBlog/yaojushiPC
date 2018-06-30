<template>
    <div class="common-problem help-container">
        <p class="layout-title">
            <span>常见问题</span>
        </p>
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="账户类" name="first">
                <ul>
                    <li>
                        <p>
                            <span class="ask">Q</span>如何提高我的账户安全？</p>
                        <p>
                            <span class="answer">A</span>您可以登录药居士账户，在“我的药居士-账户资料-安全中心”里，通过经常性修改密码、绑定账户到邮箱和手机的方式增加账户安全系数，保证账户安全。</p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>为什么登录时提示“Email地址用户或密码输入错误，请重新填写”？</p>
                        <p>
                            <span class="answer">A</span>出现这种情况，大部分情况下是因为：
                            <br> 1) 您输入的邮箱地址或是用户名有误；若您曾修改过邮箱地址或是用户名，请用修改后的信息登陆；
                            <br> 2) 您输入的密码有误；若您曾修改过注册密码，请用修改后的信息的登陆；忘记密码，请点击“忘记密码”；
                            <br> 3) 若您未在药居士网上药店成功注册，请点击“马上注册”进行注册，注册成功后，再登陆。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>如何验证手机和邮箱？</p>
                        <p>
                            <span class="answer">A</span>您可以登录药居士账户，在“我的药居士-账户资料-安全中心”里，您可以修改密码、绑定账户到邮箱和手机。</p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>如何进入安全中心？</p>
                        <p>
                            <span class="answer">A</span>1) 首先，点击页面右上角的“我的药居士”，进入到“我的药居士”页面；
                            <br>&nbsp;&nbsp;2) 其次，点击右侧的导航栏“账户资料-安全中心”，进入到“安全中心”页面；
                            <br>&nbsp;&nbsp;3) 最后，在“账户安全“页面里，有”修改密码“”邮箱验证“”手机验证“”支付密码“四种方式保护账户安全。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>密码设置有哪些？</p>
                        <p>
                            <span class="answer">A</span>为了您的账户安全，在设置密码时，请参考以下建议：
                            <br>&nbsp;&nbsp;1) 密码由6-20位字符组成（字母区分大小写）。
                            <br>&nbsp;&nbsp;2) 请使用数字、字母或符号的组合，如：gklfd_157、89712am%&等。
                            <br>&nbsp;&nbsp;3) 如果设置如下安全性较低的密码，系统会提醒您修改密码以保证安全性：
                            <br>&nbsp;&nbsp;&nbsp;&nbsp;a) 全部由数字组成；
                            <br>&nbsp;&nbsp;&nbsp;&nbsp;b) 全部由字母组成；
                            <br>&nbsp;&nbsp;&nbsp;&nbsp;c) 全部由同一字符组成；
                            <br>&nbsp;&nbsp;&nbsp;&nbsp;d) 与用户名或邮箱相同。
                            <br>&nbsp;&nbsp;4) 定期修改密码，并做好记录工作，以免忘记。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>如何找回密码？</p>
                        <p>
                            <span class="answer">A</span>登录账号时，忘记密码，点击“忘记密码”；可以通过验证的邮箱及手机找回密码。
                            <router-link to="retrievePassword">查看操作详情</router-link>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>手机、邮箱想修改怎么办？</p>
                        <p>
                            <span class="answer">A</span>1) 对于未验证的手机或邮箱，若希望更改，您可以访问我的药居士，点击左侧导航“安全中心”，进入到“安全中心”页面验证手机及邮箱即可。
                            <br>&nbsp;&nbsp;2) 对于已验证的手机或邮箱，您可以访问我的药居士，点击左侧导航“安全中心”，进入到“安全中心”页面进行修改。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>验证邮箱时，提示被他人验证了，怎么办？</p>
                        <p>
                            <span class="answer">A</span>遇到这种情况时，说明您需要验证的邮箱已经被他人验证了，请您更换您需要验证的邮箱，谢谢。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>积分有效期吗？</p>
                        <p>
                            <span class="answer">A</span>没有。积分没有有效期，可以在药居士网上药店长期使用。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>积分有什么作用？</p>
                        <p>
                            <span class="answer">A</span>会员可用积分参与抵扣订单金额的优惠！
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>不同帐户积分可以合并吗？</p>
                        <p>
                            <span class="answer">A</span>不可以。不同帐户积分不可合并使用。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>我买了东西，为什么积分还没有被累计？</p>
                        <p>
                            <span class="answer">A</span>订单状态变为交易成功的第二天，积分将记入您的账户。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>如果发生了退货，积分怎么算？</p>
                        <p>
                            <span class="answer">A</span>若您的订单发生退货，将扣除因退货部分产生的积分。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>为什么要进行邮箱验证？</p>
                        <p>
                            <span class="answer">A</span>1) 确保您的帐户安全
                            <br>&nbsp;&nbsp;2) 确保您能享受到更周到、更周全的服务。例：及时准确地接收到订单处理通知邮件；及时接收到优惠活动信息邮件。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>什么叫累计合格消费金额？</p>
                        <p>
                            <span class="answer">A</span>合格累计消费金额是指订单实际支付金额，不包含退货商品金额、运费、优惠券等。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>我的VIP会员级别有有效期吗？</p>
                        <p>
                            <span class="answer">A</span>没有。无论高级会员、黄金会员、铂金会员、钻石会员都没有有效期，可在药居士网上药店长期使用。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>什么叫VIP会员？</p>
                        <p>
                            <span class="answer">A</span>VIP会员作为帮助中心里对高级会员、黄金会员、铂金会员、钻石会员的一个总称呼。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>满足会员成长值后，新的会员级别什么时候开始生效？</p>
                        <p>
                            <span class="answer">A</span>根据药居士系统统计/确认时间，我们将在当天为您完成晋级。
                        </p>
                    </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="购物类" name="second">
                <ul>
                    <li>
                        <p>
                            <span class="ask">Q</span>你们的药是正品吗？</p>
                        <p>
                            <span class="answer">A</span>请放心，我们网站的商品都是正规渠道进货，正品有保证。我们是通过国家药监局GSP质量管理认证的药品零售连锁企业，而且我们可以开具药品发票，请您放心选购！
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>这种药品有副作用吗？</p>
                        <p>
                            <span class="answer">A</span>您好，因个人体质不同，药品的副作用也会出现差异化表现，少数人可能会出现不适，一般都比较轻微，如果是对症治疗，一般不需处理停药后会逐渐消失；请在医师的指导下正确使用药品。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>怎样辨认真伪？</p>
                        <p>
                            <span class="answer">A</span>您好，产品包装是有防伪编码的，您可以直接查询或者是联系厂家报产品生产批号去核实。也可以通过以下方式查询药品真伪：
                            <br>&nbsp;&nbsp;1）登录国家食品药品监督管理局
                            <a href="http://www.sda.gov.cn/" target="_blank">http://www.sda.gov.cn/</a>
                            <br>&nbsp;&nbsp;2）在首页“数据查询”处点击“国产药品”（或其他类型药品）查询入口；
                            <br>&nbsp;&nbsp;3）输入您需要查询的商品，即可查询到相关的信息。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>怎么查电子监管码？</p>
                        <p>
                            <span class="answer">A</span>您可以进入中国药品电子监管网：
                            <a href="http://www.drugadmin.com" target="_blank">http://www.drugadmin.com</a> ，在首页顶端输入药品盒子上的电子监管码条码进行查询。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>药品和保健品的区别？</p>
                        <p>
                            <span class="answer">A</span>您好，现在药品和部份保健品都是国家食药监局审批的，正品的质量都是有保证的。两者区别简单来说，药品是经过严格的临床验证，疗效确切；保健食品是辅助改善身体，不是治疗性的。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>可以再优惠吗？</p>
                        <p>
                            <span class="answer">A</span>抱歉，我们网站上的产品价格已经是最优惠的价格了，都是最低的优惠价格给到您的。
                            <br>&nbsp;&nbsp; 有些产品在套餐购买和多盒购买方面还是可以为您省一些费用的，并且有积分，在下次购买时可以再省一点。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>为什么上次买的价格与现在的不一样？</p>
                        <p>
                            <span class="answer">A</span>您好，影响商品售价变化的原因有很多。比如促销活动的时间、商品进价的调整、物价因素等，都会导致价格的调整。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>你们的价格为什么比别的地方贵？</p>
                        <p>
                            <span class="answer">A</span>您好，药品是治病救人的特殊商品，保证正品第一位，质量是企业的生命。药居士质管部从源头严格控制采购渠道去保证产品的质量，所以不排除有部分商品为了确保质量而出现进货价偏高的可能。但是，和医院售价相比，药居士的价格是优惠很多了。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>购药，医保能报销吗？</p>
                        <p>
                            <span class="answer">A</span>能否报销，要根据您当地的医保目录而定，我们无法明确是否在您当地医保目录上。不过我们可以帮您开发票，若在当地医保目录，就可以报销。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>为什么处方药无法在网上购买/加不了购物车？</p>
                        <p>
                            <span class="answer">A</span>您好，处方药在网站信息仅供展示，如需购买您可以致电热线027-83215071咨询门店药师。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>购买处方药，怎样上传处方笺？</p>
                        <p>
                            <span class="answer">A</span>您好，购买处方药是需要提供处方给门店，在“我的药居士-我的处方笺”上传处方笺。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>无货商品什么时候到货？</p>
                        <p>
                            <span class="answer">A</span>您好，无货商品无法明确具体到货时间，您可以通过商品详情页面的“到货通知”功能获得商品到货提醒。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>不同厂家的药品有何区别？</p>
                        <p>
                            <span class="answer">A</span>理论上讲，具有同种通用名的药物所具性质应该是完全一样的。
                            <br>&nbsp;&nbsp;第一、它们具备同样的药理作用，用来治疗同一种疾病。
                            <br>&nbsp;&nbsp;第二、剂型相同时，使用方法和剂量基本相同。
                            <br>&nbsp;&nbsp;第三、剂型相同时的保存方法相同。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>胶囊与片剂有什么区别？</p>
                        <p>
                            <span class="answer">A</span>胶囊服用后分解更快，片剂崩解时间稍长一点，可以理解为胶囊是更先进的剂型，但只要有效成份一样，其功能主治和疗效基本上可以说是无差别的。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>收到的包装与网页显示不一致？</p>
                        <p>
                            <span class="answer">A</span>非常抱歉，由于产品包装经常有更替，可能网站上没有做好及时通知，真的很抱歉。
                            <br>&nbsp;&nbsp;但药物的疗效是一样的，您完全可以放心。而且药居士购进售出的每一盒药品都是经国家食品药品监督管理局批准的正规药品，请您放心！
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>收到的产品，厂家、名称跟医院的一样，为什么包装规格与医药的不一样？</p>
                        <p>
                            <span class="answer">A</span>厂家在不同的渠道销售的时候，采取不一样销售方式，会有不同的包装和规格。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>收到的产品，厂家、规格都跟医院的一样，批号不一样，为什么包装跟医院的不一样呢？</p>
                        <p>
                            <span class="answer">A</span>不同批号药品在外包装使用材料，印刷颜色等细节会有些许不同，但不影响产品质量。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>如何使用优惠券？</p>
                        <p>
                            <span class="answer">A</span>您好，您可以根据优惠劵使用范围，在提交订单的时候选择添加优惠劵。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>我的优惠券到期了，可以延期使用吗？</p>
                        <p>
                            <span class="answer">A</span>您可以在“我的药居士-交易管理-我的优惠券”中查看优惠券的使用期限和使用范围。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>订单取消成功后，优惠券如何返回？</p>
                        <p>
                            <span class="answer">A</span>您好，订单取消成功后优惠券会自动返还到您的账户中。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>怎么在网上确认收货？</p>
                        <p>
                            <span class="answer">A</span>请您登录“我的订单”，查找到您想要确认收货的订单，在操作区域中点击“确认收货”，点击此按钮即可。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>为什么我的订单总是提示提交不成功？</p>
                        <p>
                            <span class="answer">A</span>可能存在以下几种情况：
                            <br>&nbsp;&nbsp;1）订单信息填写不完整；
                            <br>&nbsp;&nbsp;2）订单商品库存不足或者库存无货；
                            <br>&nbsp;&nbsp;3）订单商品不能配送到您所填写的收货地址。
                            <br>&nbsp;&nbsp;4）网络延时以上各种情况都会在页面中弹出提示信息，可以通过修改订单信息（提示信息）或者稍后再试，即可成功提交订单。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>如何取消订单？</p>
                        <p>
                            <span class="answer">A</span>1）货到付款订单，订单处于未审核状态，您可以直接点击订单后面取消按钮即可；如货物已经打包好等待发货，订单已经无法取消，建议您直接拒收商品；
                            <br>&nbsp;&nbsp;2）在线支付订单，您可以直接点击订单后面取消按钮，然后申请退款即可，如后期货物送去，建议您直接拒收。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>订单取消后还能恢复吗？</p>
                        <p>
                            <span class="answer">A</span>订单一旦取消后将无法恢复，请您慎重操作。
                        </p>
                    </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="支付类" name="third">
                <ul>
                    <li>
                        <p>
                            <span class="ask">Q</span>订单已提交成功，如何付款？</p>
                        <p>
                            <span class="answer">A</span>您好，付款方式分为以下几种，先付款后发货的订单请您在订单提交成功后24小时之内付款完毕：
                            <br>&nbsp;&nbsp;1） 在线支付：请您进入“我的订单”，点击“去付款”，按流提示操作；
                            <br>&nbsp;&nbsp;2） 银行转账：提交订单后，系统会发送一条转账的账号信息给收货人，请您按提示到银行操作转账，转账成功后致电给药居士售后客服027-83898312。
                            <br>&nbsp;&nbsp;3） 货到付款：请您在订单送达时签收付款；
                            <br>&nbsp;&nbsp;4） 现金支付：只支持药店自提时使用，您去门店自提时现金付款。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>怎么判断网上支付是否成功？</p>
                        <p>
                            <span class="answer">A</span>1) 当您完成网上在线支付过程后，系统应提示支付成功；如果系统没有提示支付失败或成功，您可通过电话、ATM 、柜台或登录网上银行等各种方式查询银行卡余额，如果款项已被扣除，说明您已支付成功。
                            <br>&nbsp;&nbsp;2) 如果出现信用卡超额透支、存折余额不足、意外断线等导致支付不成功，请您登录药居士网-"我的帐户"，找到该张“未支付成功的订单”，重新完成支付。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>如何使用快捷支付？</p>
                        <p>
                            <span class="answer">A</span>快捷支付的使用条件是：您已是注册用户且您有关联的银行卡。在该登录状态下您的快捷支付的支付流程：①选择绑定的银行卡→②输入短信验证码→③支付成功。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>如何开通网上银行在线支付的功能？</p>
                        <p>
                            <span class="answer">A</span>各地银行政策不同，您可以拨打所在地银行的客服电话，咨询该行可供网上支付的银行卡种类及开通手续，或者亲自去到银行营业厅办理开通网银支付功能的业务。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>造成“支付被拒绝”的原因有哪些？</p>
                        <p>
                            <span class="answer">A</span>1) 所持银行卡尚未开通网上在线支付功能，建议您到当地营业厅开通网上银行；
                            <br>&nbsp;&nbsp;2) 所持银行卡已过期、作废、挂失，建议您咨询您的开户行
                            <br>&nbsp;&nbsp;3) 所持银行卡内余额不足，请您更换银行卡试试
                            <br>&nbsp;&nbsp;4) 输入银行卡卡号或密码不符，建议您重新输入正确的卡卡号及卡密码，如果您忘记了密码，请您及时与所属银行联系办理密码重置
                            <br>&nbsp;&nbsp;5) 输入证件号不符，建议您重新输入正确的证件号
                            <br>&nbsp;&nbsp;6) 银行系统数据传输出现异常，建议您刷新页面或者稍后重启电脑
                            <br>&nbsp;&nbsp;7) 网络中断
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>货到付款可以用POS机刷卡吗？</p>
                        <p>
                            <span class="answer">A</span>您好，能否使用具体需看当地快递是否支持，建议您选择在线支付更方便。
                        </p>
                    </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="配送类" name="fourth">
                <ul>
                    <li>
                        <p>
                            <span class="ask">Q</span>运费收取？</p>
                        <p>
                            <span class="answer">A</span>全场满79元可以享受包邮的优惠（EMS到付除外）。在线支付的，不满79元，湖北省内收取8到10元的快递费用，湖北省外收取15元的快递费用。货到付款的，湖北省内需要收取15元运费，湖北省外需要收取20元的快递费用。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>运费贵？</p>
                        <p>
                            <span class="answer">A</span>您好，快递费用是由快递公司实收实付，我们只是收取药品费用的，如满79元（EMS到付除外）您就可享有减免运费的优惠！
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>发货及到货时间？</p>
                        <p>
                            <span class="answer">A</span>您好，我们会根据您下单付款的先后顺序发出，正常情况24小时内发货，最迟不超过三天，我们是委托快递给您送货，具体到货时间需由快递安排，正常湖北省内2-3天左右到，湖北省外3-6天左右。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>在线支付的订单发什么快递？</p>
                        <p>
                            <span class="answer">A</span>在线支付默认发申通或EMS。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>订单已经提交成功，可以改送到其他地方吗？</p>
                        <p>
                            <span class="answer">A</span>订单提交成功后，订单状态还未处于“已审核”，进入“我的药居士-我的订单”找到相应的订单进入订单详情页，点击【修改】可进行收货人信息的修改；若订单状态处于“已审核”则无法修改收货人信息。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>付款以后可以当场验收商品吗？</p>
                        <p>
                            <span class="answer">A</span>您付款签收后，可以当场验收商品，如商品本身有问题请您在“我的药居士”中提交退换货申请，将有专业售后人员为您解决。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>签收时发现商品包装破损，该如何处理？</p>
                        <p>
                            <span class="answer">A</span>您好，商品签收时如包装有破损，请您直接拒收；商品签收后如商品本身有问题请您在“我的药居士”中提交退换货申请，将有专业售后人员为您解决。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>订单收取了运费，若后期发生退货的情况，之前的运费会退还吗？</p>
                        <p>
                            <span class="answer">A</span>如果是商品因质量问题产生退换货，我们将返还运费，如果非商品质量问题产生的退换货，运费将不予返还。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>可以指定送货时间吗？</p>
                        <p>
                            <span class="answer">A</span>药居士不提供指定时间段的配送服务，但是快递人员在配送前电话联系您的时候，您可以与快递员协商您的需求。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>订单取消了，还想要，能不能再配送过来？</p>
                        <p>
                            <span class="answer">A</span>您好，您可以自己重新下单或联系我们的客服给您下单再配送。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>什么是保密配送？</p>
                        <p>
                            <span class="answer">A</span>药居士连锁药店充分尊重客户的隐私，产品一律保密配送，外包装箱和快递单不会出现有关于医药及产品的相关字眼。
                        </p>
                    </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="售后类" name="five">
                <ul>
                    <li>
                        <p>
                            <span class="ask">Q</span>药居士所售的商品是否都支持7天无理由退换货？</p>
                        <p>
                            <span class="answer">A</span>药居士不支持7天无理由退换货，详情请您查看退换货政策；符合条件的均支持退换货服务。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>如何自行进行退货、换货？</p>
                        <p>
                            <span class="answer">A</span>请你登录药居士账户，在“我的药居士-客户服务-申请退换货”申请相应的售后服务，我们会为您处理的。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>购买的商品出现质量问题如何处理？</p>
                        <p>
                            <span class="answer">A</span>您好，药居士承诺符合售后退换货规则的商品，由售出之日（以实际收货日期为准）起7日内可以退换货，您可以登陆“我的药居士-客户服务-申请退换货”提交退换货申请，将有专业售后人员为您处理。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>商品发错货了怎么办？</p>
                        <p>
                            <span class="answer">A</span>非常抱歉！您可自行在"会员中心-申请退换货"在线申请退换货或联系售后客服申请退换货。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>签收时发现商品包装破损，该如何处理？</p>
                        <p>
                            <span class="answer">A</span>您好，商品签收时如包装有破损，请您直接拒收；商品签收后如商品本身有问题请您在“我的药居士-客户服务-申请退换货”中提交退换货申请，将有专业售后人员为您解决。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>怎么查看售后服务单的审核结果？</p>
                        <p>
                            <span class="answer">A</span>请您登录药居士账户，在“我的药居士-客户服务-申请退换货”页面，查看相应退换货记录。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>我的商品退换货申请进展到哪了？</p>
                        <p>
                            <span class="answer">A</span>请您登录药居士账户，在“我的药居士-客户服务-申请退换货-退换货记录”页面中，查看“跟踪详情”即可了解商品退换货申请的进展。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>在线支付订单已收到商品，但是显示未完成状态，为什么不能申请退换货？</p>
                        <p>
                            <span class="answer">A</span>在线支付订单需要确认收货后才能申请退换货。请您进入您的订单中心，查找到您想要确认收货的订单，在操作区点击“确认收货”即可
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>退换货运费如何收取的？</p>
                        <p>
                            <span class="answer">A</span>商品因质量问题发生的退换货，运费是由药居士承担退换货运费；如果由于您的原因产生退换货，需要您自己承担退换货运费。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>办理退换货时需要将商品寄回到哪里？</p>
                        <p>
                            <span class="answer">A</span>您的退换货申请通过后，药居士售后客服会通知您退货的地址及注意事项的。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>什么时候可以收到退款？</p>
                        <p>
                            <span class="answer">A</span>满足退款申请后顾客提供相关账号信息，我们会在3个工作日内为您办理退款，具体到款时间请联系您的开卡行。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>订单拒收后，退款什么时候返还？</p>
                        <p>
                            <span class="answer">A</span>如果订单进行了拒收，需要订单商品入库后才能办理相关退款，您可以在拒收商品后联系客服进行处理，给您带来的不便请谅解！
                        </p>
                    </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="发票类" name="six">
                <ul>
                    <li>
                        <p>
                            <span class="ask">Q</span>怎样获得发票？</p>
                        <p>
                            <span class="answer">A</span>下单时在订单确认页，选择“商品发票”按照提示填写发票抬头、选择发票内容，此发票可用作单位报销凭证，发票将会随您的订单商品一起送达。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>发票为何没有明细？</p>
                        <p>
                            <span class="answer">A</span>发货小票是包含药品明细，这个会随附发票，是可以报销的。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>下单时，未选择开发票可以补开发票？</p>
                        <p>
                            <span class="answer">A</span>可以，但补开发票的期限为7日内（收到订单商品算起）。请接收到商品在补开发票期限内，联系我们的客服，并说明您的订单号、发票抬头、发票内容、邮寄地址、邮编及收件人，我们会在48小时内为您开具发票并以平信方式为您寄出。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>收到的发票，内容开错了，可以换吗？</p>
                        <p>
                            <span class="answer">A</span>您在收到发票后如果发现因药居士原因，票据抬头、内容或金额错误，请您致电客服热线(027-83215071)，由客服人员为您办理换发票事宜，往返快递费用由药居士承担。
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="ask">Q</span>发票是否有显示运费金额？</p>
                        <p>
                            <span class="answer">A</span>发票金额，药居士网上药店仅开具现金购物金额的发票，不含运费、礼券、礼品卡金额。
                        </p>
                    </li>
                </ul>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeName2: "first"
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
};
</script>

<style lang="less" scoped>
@import "~styles/help";

.el-tabs--card {
    padding: 0 20px;
    color: #666;
}

li {
    border-bottom: 1px dashed #ddd;
    a {
        color: #ff0000;
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>