<template>
    <div class="personal-data">
        <p class="personal-title">
            <span> 个人资料</span>
        </p>
        <div class="personal-type">
            <span @click="tabType(1)" :class="state===1?'active':''">基本信息</span>
            <span @click="tabType(2)" :class="state===2?'active':''">更多个人信息</span>
        </div>
        <!-- 基本信息开始 -->
        <ul class="personal-main">
            <li class="user-image">
                <div>
                    <!-- <img :src="personalList.img" alt="img"> -->
                    <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                        <img v-if="personalList.img" :src="personalList.img" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </div>
                <div>{{personalList.userName}}</div>
            </li>
            <li class="progress-bar">
                资料完整度：
                <el-progress :text-inside="true" :stroke-width="16" :percentage="personalList.percentage"></el-progress>
                <span>完善资料可以获取100积分</span>
            </li>
            <li>
                <div class="info-title">用户名：</div>
                <el-input v-model="personalList.userName" :disabled="personalList.disabled"></el-input>
                <div v-if="personalList.isPrompt">
                    <span @click="prompt" v-if="isShow" class="modify-user-name">修改</span>
                    <span class="modify-prompt" v-text="personalList.disabled?'可用于登陆，请牢记':'您只要一次修改机会，请谨慎修改'"></span>
                </div>

            </li>
            <li>
                <div class="info-title">姓名：</div>
                <el-input v-model="personalList.name"></el-input>
            </li>
            <li>
                <div class="info-title"> 性别：</div>
                <el-radio v-model="personalList.radio" label="1">男</el-radio>
                <el-radio v-model="personalList.radio" label="2">女</el-radio>
            </li>
            <li>
                <div class="info-title">生日：</div>
                <div class="block">
                    <el-date-picker v-model="personalList.value1" type="date" placeholder="选择日期">
                    </el-date-picker>
                </div>
            </li>
            <li>
                <div class="info-title">电话：</div>
                <span>{{personalList.tel | asterisk}}</span>
                <router-link class="modify-btn" to="modify">修改</router-link>
            </li>
            <li>
                <div class="info-title">邮箱：</div>
                <span>{{personalList.email}}</span>
            </li>
            <li>
                <el-button type="primary" plain>提交</el-button>
            </li>
        </ul>
        <!-- 基本信息结束 -->
    </div>
</template>

<script>
import filter from "apis/filter";

export default {
    data() {
        return {
            isShow: true,
            state: 1,

            personalList: {
                img: require("../../assets/image/user-image.png"),
                percentage: 80,
                isPrompt: true,
                disabled: true,
                value1: "2018-06-27",
                userName: "k123456",
                name: "陈金龙",
                radio: "1",
                day: 1,
                tel: 12121546565,
                email: "132121@qq.com"
            }
        };
    },
    filters: {
        asterisk(value) {
            return filter.asterisk(value);
        }
    },
    methods: {
        // 基本信息和更多个人信息切换
        tabType(value) {
            this.state = value;
        },
        prompt() {
            this.personalList.disabled = false;
            this.isShow = false;
        },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === "image/jpeg";
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error("上传头像图片只能是 JPG 格式!");
            }
            if (!isLt2M) {
                this.$message.error("上传头像图片大小不能超过 2MB!");
            }
            return isJPG && isLt2M;
        }
    }
};
</script>

<style lang="less" scoped>
@import "~styles/public";
.personal-data {
    border: @b-border;
    .personal-title {
        padding: 20px;
        border-bottom: @b-border;
        .title();
        margin-bottom: 0;
    }

    .personal-type {
        padding: 10px 20px;
        border-bottom: @b-border;
        span {
            padding: 0 15px;
            cursor: pointer;
            border-right: @b-border;
            &:first-child {
                padding-left: 0;
            }
            &.active {
                color: #ff0000;
            }
        }
    }

    // 基本信息开始
    .personal-main {
        padding: 25px 22px;
        li {
            display: flex;
            align-items: center;
            color: #333;
            margin-bottom: 25px;
            &:first-child {
                display: block;
                margin-bottom: 0;
            }
        }
        .user-image {
            text-align: center;
            img {
                width: 100px;
                height: 100px;
            }
            div {
                &:last-child {
                    margin-top: 11px;
                    margin-bottom: 43px;
                }
            }
        }
        .progress-bar {
            .el-progress {
                width: 271px;
                margin: 0 10px;
                vertical-align: middle;
            }

            span {
                color: #ff952f;
            }
        }

        .el-input {
            width: 160px;
        }
        .modify-user-name {
            cursor: pointer;
            color: #3592f3;
            margin-left: 15px;
            &:hover {
                text-decoration: underline;
            }
        }
        .modify-prompt {
            margin-left: 15px;
            color: #ff0000;
        }

        .info-title {
            width: 60px;
        }
        .modify-btn {
            color: #ff0000;
            margin-left: 15px;
            &:hover {
                text-decoration: underline;
            }
        }
    }
    // 基本信息结束
}
</style>