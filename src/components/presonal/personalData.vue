<template>
    <div class="personal-data">
        <p class="personal-title">
            <span> 个人资料</span>
        </p>
        <div class="personal-type">
            <span @click="tabType(1)" :class="state===1?'active':''">基本信息</span>
            <span @click="tabType(2)" :class="state===2?'active':''">更多个人信息</span>
        </div>

        <div v-if="state===1" class="user-image">
            <div>
                <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                    <img v-if="personalList.img" :src="personalList.img" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </div>
            <div>{{personalList.userName}}</div>
        </div>
        <div class="progress-bar">
            资料完整度：
            <el-progress :text-inside="true" :stroke-width="16" :percentage="personalList.percentage"></el-progress>
            <span>完善资料可以获取100积分</span>
        </div>
        <!-- 基本信息开始 -->
        <ul v-if="state === 1" class="personal-main">
            <li>
                <div class="info-title">用户名：</div>
                <el-input v-model="personalList.userName" :disabled="personalList.disabled"></el-input>
                <div v-if="personalList.isPrompt">
                    <span @click="prompt" v-if="isShow" class="modify-user-name">修改</span>
                    <span class="modify-prompt" v-text="personalList.disabled?'可用于登陆，请牢记':'您只有一次修改机会，请谨慎修改'"></span>
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
                <el-button type="primary" plain @click="subData">提交</el-button>
            </li>
        </ul>
        <!-- 基本信息结束 -->

        <!-- 更多个人信息开始 -->
        <ul v-if="state === 2" class="personal-box">
            <li>
                教育程度：
                <el-select v-model="education" placeholder="请选择">
                    <el-option v-for="item in moreList.education" :key="item.id" :value="item">
                    </el-option>
                </el-select>
            </li>
            <li>
                婚姻状况：
                <el-select v-model="marriage" placeholder="请选择">
                    <el-option v-for="item in moreList.marriage" :key="item.id" :value="item">
                    </el-option>
                </el-select>
            </li>
            <li>
                从事职业：
                <el-select v-model="work" placeholder="请选择">
                    <el-option v-for="item in moreList.work" :key="item.id" :value="item">
                    </el-option>
                </el-select>
            </li>
            <li>
                月均收入：
                <el-select v-model="income" placeholder="请选择">
                    <el-option v-for="item in moreList.income" :key="item.id" :value="item">
                    </el-option>
                </el-select>
            </li>
            <li>
                <el-button type="primary" plain @click="subMore">提交</el-button>
            </li>
        </ul>
        <!-- 更多个人信息结束 -->
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
            },
            moreList: {
                education: [
                    "初中及以下",
                    "高中及中专",
                    "专科",
                    "本科",
                    "硕士",
                    "博士及以上"
                ],
                marriage: ["未婚", "已婚", "保密"],
                work: [
                    "学生",
                    "事业单位",
                    "企业职员",
                    "个体业主",
                    "自由职业",
                    "军人",
                    "离退休",
                    "其他"
                ],
                income: [
                    "少于1000元",
                    "2000-3000元",
                    "3000-5000元",
                    "5000-8000元",
                    "8000元以上"
                ]
            },
            education: '',
            marriage: '',
            work: '',
            income: ''
        };
    },
    filters: {
        asterisk(value) {
            return filter.asterisk(value);
        }
    },
    methods: {
        // 更多个人信息提交
        subMore(){
            this.$alert(
                `修改成功,${this.education}、${
                    this.marriage
                }、${this.work}、${this.income}`,
                "提示",
                {
                    confirmButtonText: "确定",
                    callback: action => {}
                }
            );
        },
        // 提交修改信息
        subData() {
            this.$alert(
                `修改成功,${this.personalList.userName}、${
                    this.personalList.name
                }、${this.personalList.radio}、${this.personalList.value1}`,
                "提示",
                {
                    confirmButtonText: "确定",
                    callback: action => {}
                }
            );
        },
        // 基本信息和更多个人信息切换
        tabType(value) {
            this.state = value;
        },
        // 用户名第一次修改的切换
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

    .user-image {
        padding-top: 30px;
        text-align: center;
        img {
            width: 100px;
            height: 100px;
        }
    }
    .progress-bar {
        display: flex;
        padding: 0 22px;
        margin-top: 43px;
        .el-progress {
            width: 271px;
            margin: 0 10px;
            vertical-align: middle;
        }

        span {
            color: #ff952f;
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

    // 更多个人信息开始
    .personal-box {
        padding: 22px;
        li{
            margin-bottom: 20px;
        }
    }
    // 更多个人信息结束
}
</style>