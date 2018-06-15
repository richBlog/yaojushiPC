<template>
    <div class="modify">
        <p class="modify-title">
            <span>修改手机号</span>
        </p>
        <ul v-if="state" class="modify-main">
            <li>手机号：{{phone}}</li>
            <li class="verification-code">
                <span>输入验证码：</span><el-input v-model="code" placeholder="请输入验证码"></el-input><img src="" alt="img"></li>
            <li>
                <el-button type="primary" plain @click="obtain">获取短信验证码</el-button>
            </li>
            <li>
                <span>请填写手机校验码：</span><el-input type="number" v-model="phoneCode" placeholder="请输入验证码"></el-input>
            </li>
            <li>
                <el-button type="primary" plain @click="submission">提交</el-button>
            </li>
            <li>
                <h5>为什么要进行身份验证？</h5>
                <p>1.为保障您的账户信息安全，在变更账户中的重要信息时需要进行身份验证，感谢您的理解和支持。</p>
                <p>2.验证身份遇到问题？请拨打客服电话027-83898312。</p>
            </li>
        </ul>
        <ul v-else class="modify-main">
            <li>请输入新号码：
                <el-input type="number" v-model="newPhone" placeholder="请输入验证码"></el-input>
            </li>
            <li>请输入验证码：
                <el-input type="number" v-model="newCode" placeholder="请输入验证码"></el-input>
            </li>
            <li>
                <el-button type="primary" plain @click="newSubmission">提交</el-button>
            </li>
        </ul>
    </div>
</template>

<script>
import common from "apis/common";
export default {
    data() {
        return {
            phone: "1818****567",
            code: "",
            phoneCode: "",
            newPhone: "",
            newCode: "",
            state: true
        };
    },
    methods: {
        // 获取短信验证码
        obtain() {
            this.$message(
                "获取短信验证码功能程序员小哥哥还在开发中，敬请期待....."
            );
        },
        // 提交手机号
        submission() {
            if (common.removeAllSpace(this.code) === "") {
                return this.$message.error("请填写正确的验证码");
            }
            if (common.removeAllSpace(this.phoneCode) === "") {
                return this.$message.error("请填写正确的手机验证码");
            }
            this.state = false;
        },
        // 重新绑定新的手机号码
        newSubmission() {
            if (common.removeAllSpace(this.newPhone) === "") {
                return this.$message.error("请填写正确的新手机号码");
            }
            if (common.removeAllSpace(this.newCode) === "") {
                return this.$message.error("请填写正确的手机验证码");
            }
            this.$alert("修改成功", "提示", {
                confirmButtonText: "确定",
                callback: action => {
                    this.$router.push("securityCenter");
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>
@import "~styles/public";
.modify {
    height: 649px;
    border: @b-border;
    .modify-title {
        padding: 20px;
        border-bottom: @b-border;
        .title();
    }

    .modify-main {
        margin: 20px;
        padding: 20px;
        border: @b-border;
        li {
            margin-bottom: 15px;
            &:last-child {
                padding-top: 50px;
                p {
                    margin-top: 10px;
                    color: #666;
                }
            }
            span{
                min-width: 130px;
            }
        }
        .verification-code {
            display: flex;
            align-items: center;
        }
        .el-input {
            width: 300px;
            margin: 0 10px;
        }
        .el-button {
            width: 140px;
        }
    }
}
</style>