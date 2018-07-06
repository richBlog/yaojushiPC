<template>
    <div class="layout-help">
        <ul class="help-type">

            <!-- 自助服务开始 -->
            <li class="help-type-item">
                <p class="type-item-title">
                    <span>自助服务</span>
                </p>
                <div class="service-type">
                    <router-link to=""><img src="http://res.360kad.com/theme/help/img/web2015/icon_index_03.jpg" alt="img"></router-link>
                    <router-link to=""><img src="http://res.360kad.com/theme/help/img/web2015/icon_index_05.jpg" alt="img"></router-link>
                    <router-link to=""><img src="http://res.360kad.com/theme/help/img/web2015/icon_index_07.jpg" alt="img"></router-link>
                    <router-link to=""><img src="http://res.360kad.com/theme/help/img/web2015/icon_index_09.jpg" alt="img"></router-link>
                    <router-link to=""><img src="http://res.360kad.com/theme/help/img/web2015/icon_index_11.jpg" alt="img"></router-link>
                    <router-link to=""><img src="http://res.360kad.com/theme/help/img/web2015/icon_index_18.jpg" alt="img"></router-link>
                    <router-link to=""><img src="http://res.360kad.com/theme/help/img/web2015/icon_index_60.png" alt="img"></router-link>
                    <router-link to=""><img src="http://res.360kad.com/theme/help/img/web2015/icon_index_22.jpg" alt="img"></router-link>
                    <router-link to=""><img src="http://res.360kad.com/theme/help/img/web2015/icon_index_23.jpg" alt="img"></router-link>
                    <router-link to=""><img src="http://res.360kad.com/theme/help/img/web2015/icon_index_21.jpg" alt="img"></router-link>
                </div>
            </li>
            <!-- 自助服务结束 -->

            <!-- 新手引导开始 -->
            <li class="help-type-item">
                <p class="type-item-title">
                    <span>新手引导</span>
                </p>
                <div class="guide">
                    <img src="http://res4.360kad.com/theme/help/img/web2015/icon_index_36.jpg" alt="img">
                </div>
                <div class="guide-list">
                    <router-link class="guide-item" to="">1.免费注册</router-link>
                    <router-link class="guide-item" to="">2.挑选商品</router-link>
                    <router-link class="guide-item" to="">3.确认下单</router-link>
                    <router-link class="guide-item" to="">4.订单跟踪</router-link>
                    <router-link class="guide-item" to="">5.验货签收</router-link>
                </div>
            </li>
            <!-- 新手引导结束 -->

            <!-- 帮助中心主题分类开始 -->
            <li class="help-type-item">
                <p class="type-item-title">
                    <span>帮助中心主题分类</span>
                </p>
                <ul class="classify-main">
                    <li v-for="(item,index) in classifyList" :key="index">
                        <p>
                            <span>{{item.name}}</span>
                        </p>
                        <div>
                            <router-link :to="i.url" v-for="(i,d) in item.secondList" :key="d">{{i.name}}</router-link>
                        </div>
                    </li>
                    <li>
                        <p>
                            <span>关于药居士</span>
                        </p>
                        <div>
                            <router-link :to="item.url" v-for="(item,index) in about" :key="index">{{item.name}}</router-link>
                        </div>
                    </li>
                </ul>
            </li>
            <!-- 帮助中心主题分类结束 -->
        </ul>

        <!-- 常见问题开始 -->
        <div class="problem">
            <p class="problem-title">常见问题
                <router-link to="commonProblem">更多>></router-link>
            </p>
            <ul class="problem-list">
                <li class="problem-item">
                    <p>
                        <span>Q</span>1. 积分有效期吗？
                    </p>
                    <p>
                        <span>A</span>没有。积分没有有效期，可以在药居士网上药店长期使用。
                    </p>
                </li>
                <li class="problem-item">
                    <p>
                        <span>Q</span>2. 积分有什么作用？
                    </p>
                    <p>
                        <span>A</span>会员可用积分参与抵扣订单金额的优惠！
                    </p>
                </li>
                <li class="problem-item">
                    <p>
                        <span>Q</span>3. 不同帐户积分可以合并吗？
                    </p>
                    <p>
                        <span>A</span>不可以。不同帐户积分不可合并使用。
                    </p>
                </li>
                <li class="problem-item">
                    <p>
                        <span>Q</span>4. 我的VIP会员级别有有效期吗？
                    </p>
                    <p>
                        <span>A</span>没有。无论高级会员、黄金会员、铂金会员、钻石会员都没有有效期，可在药居士网上药店长期使用。
                    </p>
                </li>
                <li class="problem-item">
                    <p>
                        <span>Q</span>5. 满足会员成长值后，新的会员级别什么时候开始生效？
                    </p>
                    <p>
                        <span>A</span>根据药居士系统统计/确认时间，我们将在当天为您完成晋级。
                    </p>
                </li>
            </ul>
        </div>
        <!-- 常见问题结束 -->
    </div>
</template>

<script>
export default {
    props: ["classifyList", "about"]
};
</script>

<style lang="less" scoped>
@import "~styles/public";
.layout-help {
    width: 100%;
    display: flex;
    .help-type {
        width: 720px;
        .help-type-item {
            margin-bottom: 20px;
            border: @b-border;
            .type-item-title {
                .title();
                padding-left: 20px;
                padding-top: 20px;
            }
        }
        .service-type {
            display: flex;
            flex-wrap: wrap;
            padding-left: 20px;
            a {
                margin-right: 10px;
                margin-bottom: 5px;
                &:nth-child(5n) {
                    margin-right: 0;
                }
            }
            img {
                width: 128px;
                height: 128px;
            }
        }

        .guide {
            text-align: center;
            img {
                width: auto;
            }
        }
        .guide-list {
            padding-bottom: 10px;
        }
        .guide-item {
            display: inline-block;
            width: 19.5%;
            line-height: 30px;
            text-align: center;
            color: #666;
            font-size: 16px;
            &:hover {
                color: #ff0000;
                text-decoration: underline;
            }
        }
    }

    .classify-main {
        margin-bottom: 20px;
        p {
            margin-bottom: 15px;
            span {
                color: #fff;
                padding: 5px 10px;
                background-color: #2b8ef3;
            }
        }

        li {
            margin-top: 20px;
            padding-left: 20px;
            a {
                margin-right: 20px;
                color: #777;
                &:hover {
                    color: #ff0000;
                    text-decoration: underline;
                }
            }
        }
    }

    .problem {
        width: 260px;
        height: 710px;
        margin-left: 10px;
        border: @b-border;
        .problem-title {
            position: relative;
            padding-left: 22px;
            background-color: #efefef;
            line-height: 40px;
            a {
                position: absolute;
                right: 20px;
                font-size: 12px;
                color: #777;
                &:hover {
                    color: #ff0000;
                    text-decoration: underline;
                }
            }
        }

        .problem-list {
            padding: 0 20px;
            .problem-item {
                padding-bottom: 10px;
                border-bottom: 1px dashed #eee;
                &:last-child{
                    border-bottom: none;
                }
                p {
                    line-height: 30px;
                    margin-top: 10px;
                    color: #777;
                    font-size: 12px;
                    span {
                        color: #fff;
                        background-color: #2b8ef3;
                        padding: 2px 6px;
                        margin-right: 10px;
                    }
                    &:first-child {
                        font-weight: bold;
                        span {
                            background-color: #fd951a;
                            padding: 2px 5px;
                        }
                    }
                }
            }
        }
    }
}
</style>