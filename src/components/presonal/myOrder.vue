<template>
    <div class="presonal-order">
        <p class="order-title">我的订单</p>

        <div class="order-main">
            <el-row class="order-static">
                <el-col :span="4">所有订单
                    <span></span>
                </el-col>
                <el-col :span="4">待付款
                    <span></span>
                </el-col>
                <el-col :span="4">待确认收货
                    <span></span>
                </el-col>
                <el-col :span="4">订单废除
                    <span></span>
                </el-col>
                <el-col :span="4">交易完成
                    <span></span>
                </el-col>
                <el-col :span="4">查看订单状态说明
                    <span></span>
                </el-col>
            </el-row>
            <el-row class="order-info">
                <el-col :span="9">订单商品</el-col>
                <el-col :span="3">收货人</el-col>
                <el-col :span="3">金额</el-col>
                <el-col :span="3">订单状态</el-col>
                <el-col :span="3">付款方式</el-col>
                <el-col :span="3">操作</el-col>
            </el-row>

            <el-row class="order-content" v-for="(item,index) in orderList" :key="index">
                <el-col :span="9">
                    <div class="ware-img">
                        <router-link to="/"><img v-lazy="item.img"></router-link>
                        <span>共{{item.count}}件商品</span>
                    </div>
                    <div>
                        <span>订单编号：{{item.identifier}}</span>
                        <span>下单日期：{{item.time}}</span>
                    </div>
                </el-col>
                <el-col :span="3">{{item.name}}</el-col>
                <el-col :span="3">
                    <div>￥{{item.money}}</div>
                    <div>(含运费：￥{{item.freight}})</div>
                </el-col>
                <el-col :span="3">{{item.static}}</el-col>
                <el-col :span="3">{{item.pay}}</el-col>
                <el-col :span="3">
                    <el-button size="mini" type="">重新购买</el-button>
                </el-col>
            </el-row>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            orderList: [
                {
                    id: '',
                    img: 'http://p8pi9ribk.bkt.clouddn.com/loading.png',
                    count: 1,
                    name: '药居士',
                    identifier: '123123112355',
                    time: '2017/11/02 13:34:48',
                    money: 37.5,
                    freight: 15,
                    static: '作废',
                    pay: '在线支付',
                }
            ]
        }
    },
    created(){
        console.log(110)
    }
};
</script>

<style lang="less" scoped>
.presonal-order {
    padding: 20px;
    .order-title {
        font-size: 16px;
        color: #333;
        padding-bottom: 20px;
    }

    .order-main{
        border: 1px solid #eee;
    }
    .order-static{
        padding: 7px;
        border-bottom: 1px solid #eee;
        .el-col-4{
            padding: 5px 0;
            border-right: 1px solid #eee;
            text-align: center;
            cursor: pointer;
            &:last-child{
                border-right: none;
            }
        }
    }

    .order-info{
        margin-top: 51px;
        padding: 11px;
        text-align: center;
        background-color: #e7e7e7;
        [class*=el-col-]{
            color: #999;
        }
    }

    .order-content{
        text-align: center;
        font-size: 12px;
        .el-col-9{
            padding-left: 10px;
            text-align: left;
            .ware-img{
                padding: 10px;
                
            }
            img{
                width: 70px;
                height: 60px;
            }
            span{
                margin-left: 10px;
            }
        }
    }

}
</style>