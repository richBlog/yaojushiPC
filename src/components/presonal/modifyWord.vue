<template>
    <div class="modify-word">
        <p class="modify-title">
            <span>修改密码</span>
        </p>
        <ul>
            <li>
                <span>请输入旧密码：</span>
                <el-input type="password" v-model="password" placeholder="请输入旧密码"></el-input>
            </li>
            <li>
                <span>请输入新密码：</span>
                <el-input type="password" v-model="newPassword" placeholder="请输入新密码"></el-input>
            </li>
            <li>
                <span>请确认密码：</span>
                <el-input type="password" v-model="repeatPassword" placeholder="请确认密码"></el-input>
            </li>
            <li>
                <el-button type="primary" plain @click="submission">提交</el-button>
            </li>
        </ul>
    </div>
</template>

<script>
import common from "apis/common";
export default {
    data() {
        return {
            password: "",
            newPassword: "",
            repeatPassword: ""
        };
    },
    methods: {
        submission() {
            if (common.removeAllSpace(this.password) === "") {
                return this.$message.error("请填写正确的旧密码");
            }
            if (common.removeAllSpace(this.newPassword) === "") {
                return this.$message.error("请填写正确的新密码");
            }
            if (this.newPassword !== this.repeatPassword) {
                return this.$message.error("两次密码不一致密码");
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
.modify-word {
    height: 649px;
    border: @b-border;
    .modify-title {
        padding: 20px;
        border-bottom: @b-border;
        .title();
    }
    ul {
        margin: 20px;
        padding: 20px;
        border: @b-border;
        li {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            span {
                width: 100px;
            }
            .el-input {
                width: 300px;
            }
        }
    }
}
</style>