<template>
    <div>
        <div class="layout-proposal">
            <p class="proposal-title">
                <span>投诉建议</span>
            </p>
            <div class="proposal-img"><img src="~assets/image/jy.png" alt="jy"></div>
            <ul class="proposal-form">
                <li>
                    <div class="type-name"> 选择投诉类型：</div>
                    <el-radio v-model="radio" label="1">商品问题</el-radio>
                    <el-radio v-model="radio" label="2">网站问题</el-radio>
                    <el-radio v-model="radio" label="3">售后问题</el-radio>
                    <el-radio v-model="radio" label="4">活动问题</el-radio>
                    <el-radio v-model="radio" label="5">投诉客服</el-radio>
                    <el-radio v-model="radio" label="6">其他</el-radio>
                </li>
                <li>
                    <div class="type-name"> 投诉详情：</div>

                    <el-input type="textarea" :rows="6" placeholder="感谢您第一眼的信赖！从相识到熟识，可能会经历很多误会。我们的不足，可能让您难受。但，请相信沟通的力量！有堵的地方请在这留言反馈，我们会尽快为您解决。" v-model="textarea">
                    </el-input>
                </li>
                <li>
                    <div class="type-name"> 您的手机号码：</div>
                    <el-input type="number" v-model="input" placeholder="请输入您的手机号码"></el-input>
                </li>
                <li>
                    <el-button type="primary" @click="submitForm">提交</el-button>
                </li>
            </ul>
        </div>

        <ul class="proposal-channel">
            <li>
                <div>
                    <i class="bg-tel"></i>
                    打电话
                </div>
                <p>
                    027-83898312
                    <br> (服务时间为早上9:00-晚上5:30)
                </p>
            </li>
            <li>
                <div>
                    <i class="bg-message"></i>
                    发短信
                </div>
                <p>
                    发送至：13612345678
                    <br> (正常10分钟内您将收到受理短信的回复， 请注意暂不支持呼入接电功能)
                </p>
            </li>
            <li>
                <div>
                    <i class="bg-leave"></i>
                    在线留言</div>
                <p>
                    请在上框输入内容并点击
                    <br> “留言投诉”提交
                </p>
            </li>
            <li>
                <div>
                    <i class=" bg-complaint"></i>
                    在线投诉</div>
                <p>
                    服务时间为早上9:00-晚上5:30
                </p>
            </li>
            <li>
                <div>
                    <i class=" bg-wchart"></i>
                    药居士-官方微信</div>
                <p>
                    <img src="~assets/image/wx1.png" alt="wx">
                </p>
            </li>
            <li>
                <div>
                    <i class=" bg-email"></i>
                    邮件投诉</div>
                <p>
                    发送至：yaojushi@163.com
                </p>
            </li>
        </ul>

    </div>
</template>

<script>
import common from "apis/common";
export default {
    data() {
        return {
            input: "",
            textarea: "",
            radio: "",
            list: {}
        };
    },
    methods: {
        submitForm() {
            if (this.radio == "") {
                this.$message.error("请选择投诉的类型");
                return;
            }
            if (common.removeAllSpace(this.textarea) === "") {
                this.$message.error("请输入你要提交的内容");
                return;
            }

            if (!/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.input)) {
                this.$message.error("请输入正确的手机号码");
                return;
            }

            this.$alert("感谢您的宝贵建议，我们会尽快根据您的建议进行相关处理", "提交成功", {
                confirmButtonText: "确定",
                callback:action=>{
                    this.input = "";
                    this.textarea = "";
                    this.radio = "";
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>
@import "~styles/public";
.layout-proposal {
    padding-bottom: 31px;
    border: @b-border;
    .proposal-title {
        padding: 20px;
        .title();
        margin: 0;
    }
    .proposal-img {
        padding-left: 204px;
    }

    .proposal-form {
        padding-left: 58px;
        padding-right: 19px;
        li {
            display: flex;
            margin-top: 20px;
            &:nth-child(3) {
                align-items: center;
                .el-input {
                    width: 300px;
                }
            }
        }
        .type-name {
            min-width: 120px;
            &::before {
                content: "*";
                color: red;
            }
        }
        .el-button {
            margin-left: 120px;
        }
    }
}

.proposal-channel {
    padding: 50px 20px 20px 20px;
    display: flex;
    flex-wrap: wrap;
    li {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 33%;
        height: 200px;
        padding-top: 33px;
        padding-bottom: 28px;
        margin-right: 0.1%;
        margin-bottom: 0.1%;
        color: #fff;
        text-align: center;
        font-size: 18px;
        cursor: pointer;
        &:hover p {
            display: block;
        }
        &:hover div {
            display: none;
        }
        p {
            display: none;
        }
        &:nth-child(3n) {
            margin-right: 0.5%;
        }
        &:nth-child(1) {
            background-color: #0aa1e4;
        }
        &:nth-child(2) {
            background-color: #f596b3;
        }
        &:nth-child(3) {
            background-color: #4282e0;
        }
        &:nth-child(4) {
            background-color: #55c6c8;
        }
        &:nth-child(5) {
            background-color: #c290e6;
            img {
                width: 100px;
                height: 100px;
            }
        }
        &:nth-child(6) {
            background-color: #f8bd82;
        }
        i {
            display: block;
            margin: 0 auto;
            margin-bottom: 20px;
            background: url("../../assets/image/css_sprites1.png") -10px -128px;
        }
        .bg-tel {
            width: 98px;
            height: 104px;
            margin-bottom: 10px;
        }
        .bg-message {
            width: 111px;
            height: 78px;
            margin-top: 15px;
            background-position: -10px -252px;
        }

        .bg-leave {
            width: 98px;
            height: 92px;
            background-position: -279px -10px;
        }
        .bg-complaint {
            width: 89px;
            height: 103px;
            background-position: -128px -128px;
        }
        .bg-wchart {
            width: 113px;
            height: 92px;
            margin-top: 5px;
            background-position: -146px -10px;
        }
        .bg-email {
            width: 116px;
            height: 98px;
            background-position: -10px -10px;
        }
    }
}
</style>