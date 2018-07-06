<template>
    <div class="contact">
        <p class="layout-title">
            <span>联系我们</span>
        </p>
        <div class="layout-main">
            <ul>
                <li>
                    <div>方式</div>
                    <div>联系我们</div>
                </li>
                <li>
                    <div>药店服务</div>
                    <div>
                        &nbsp;&nbsp; 对药品有疑问，请咨询药师
                        <br>
                        <br>
                        <span class="consull" @click="beforeSale">售前咨询 》</span>
                        <span class="consull" @click="afterSale">售后咨询 》</span>
                    </div>
                </li>
                <li>
                    <div>咨询热线</div>
                    <div>
                        <span class="blue remind">027-83219909 | 027-83217781</span> <br>
                        <span class="blue remind">027-83217277 | 027-83215071</span><br>
                        <span class="blue remind"> 027-83216266 | 136 5723 0280</span>
                    </div>
                </li>
                <li>
                    <div>实体药店</div>
                    <div>
                        <span class="remind">武汉－花样城药店</span> <br> 咨询电话：027-83217781 <br> 药房地址：武汉市东西湖区金银湖环湖路西、张柏公路东C栋1层10室
                        <br>
                        <span class="remind">武汉－塔西路药店</span> <br> 咨询电话：027-83215071 <br> 药房地址：武汉市东西湖区径河农场永丰大队控制微电机生产项目（研发楼）第2幢一层1、2号门面
                        <br>
                        <span class="remind">武汉－环湖中路药店</span> <br> 咨询电话：027-83216266
                        <br> 药房地址：武汉市东西湖区金银湖办事处环湖中路6号6号门面
                        <br>
                        <span class="remind">武汉－中部慧谷药店</span> <br> 咨询电话：027-83217277 <br> 药房地址：武汉市东西湖区环湖路以北、南京二十一世纪以西中部慧谷一期B区3号楼/单元1层商11号
                        <br>
                        <span class="remind">武汉－金银湖药店</span> <br> 咨询电话：027-83219909 <br> 药房地址：武汉市东西湖区环湖路中部慧谷15区1层3号商铺
                    </div>
                </li>
                <li>
                    <div>总部联系</div>
                    <div>
                        湖北药居士健康药房网上药店 <br> 官方网址：<a class="red" href="http://www.yaojushi.com" target="_blank">www.yaojushi.com</a> <br> 行政总机：027-83898312   传真：027-83298312    邮政编码：430030 <br> E_Mail：Yaojushi@rongjiayy.com
                    </div>
                </li>
                <li>
                    <div>供应联系</div>
                    <div>
                        联 系 人：龚经理 <br> 联系电话：15377667986
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            state: 2,
            android: require("../../assets/image/zheng6.png"),
            iphone: require("../../assets/image/wx1.png")
        };
    },
    methods: {
        beforeSale() {
            this.$alert("该功能正在紧张的开发中，敬请期待......", "提示", {
                confirmButtonText: "确定"
            });
        },
        afterSale() {
            this.$alert("该功能正在紧张的开发中，敬请期待......", "提示", {
                confirmButtonText: "确定"
            });
        }
    }
};
</script>

<style lang="less" scoped>
@import "~styles/help";

.layout-main {
    width: 990px;
    padding: 0 20px;
    ul {
        width: 100%;
        border-top: @b-border;
        border-left: @b-border;
        li {
            width: 100%;
            display: table;
            &:first-child {
                background-color: #f7f7f7;
                text-align: center;
            }
            & > div {
                display: table-cell;
                vertical-align: middle;
                line-height: 25px;
                font-size: 14px;
                border-right: @b-border;
                border-bottom: @b-border;
                &:first-child {
                    width: 20%;
                    padding: 15px 0;
                    text-align: center;
                }
                &:last-child {
                    width: 80%;
                    padding: 15px;
                }
            }

            a:hover{
                text-decoration: underline;
            }
        }
        .consull {
            padding: 8px 15px;
            border: @b-border;
            border-radius: 6px;
            background-color: #f7f7f7;
            margin-right: 20px;
            margin-top: 20px;
            color: rgb(45, 142, 243);
            cursor: pointer;
            &:hover {
                background-color: #eee;
            }
        }
    }
}
</style>
