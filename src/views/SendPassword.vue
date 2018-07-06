<template>
    <div class="send-password">
        <headerView/>
        <classifiedView :active="true" />

        <div class="send-password-main container">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>找回密码</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="send-password-box">
                <el-steps :active="active" finish-status="wait" process-status="finish" align-center>
                    <el-step title="填写用户名">

                    </el-step>

                    <el-step title="验证身份"></el-step>

                    <el-step title="设置新密码"></el-step>

                    <el-step title="完成"></el-step>
                </el-steps>

                <el-form v-if="active===0" :model="ruleForm1" status-icon :rules="rules1" ref="ruleForm1" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="账户名" prop="userName">
                        <el-input v-model.number="ruleForm1.userName" placeholder="手机号码"></el-input>
                    </el-form-item>
                </el-form>
                <el-form v-if="active===1" :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="手机号">
                        <span style="font-size:18px;">18186319991</span>
                    </el-form-item>
                    <el-form-item label="验证码" prop="code">
                        <el-input class="code" v-model.number="ruleForm2.code" placeholder="请输入右侧的图形验证码"></el-input>
                        <img src="http://user.360kad.com/register/GetValidateCode?t=1530864492332" alt="看不清？点击切换">
                    </el-form-item>
                    <el-form-item label="短信验证码" prop="phoneCode">
                        <el-input class="code" v-model.number="ruleForm2.userName" placeholder="请输入短信验证码"></el-input>
                        <el-button type="primary">获取验证码</el-button>
                    </el-form-item>
                </el-form>
                <el-form v-if="active===2" :model="ruleForm3" status-icon :rules="rules3" ref="ruleForm1" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm3.pass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="ruleForm3.checkPass" auto-complete="off"></el-input>
                    </el-form-item>
                </el-form>

                <div class="goods" v-if="active===3">
                    设置成功，请前往
                    <router-link to="/Login" style="color:red;text-decoration:underline">登陆</router-link>
                </div>
                <el-button type="primary" class="next-btn" v-if="active<3" @click="next">下一步</el-button>
            </div>
        </div>
        <navigationView/>
        <footerView/>
    </div>
</template>

<script>
import headerView from "components/public/Header";
import classifiedView from "components/public/Classified-nav";
import footerView from "components/public/Footer";
import navigationView from "components/home/Home-navigation";
export default {
    components: {
        headerView,
        classifiedView,
        footerView,
        navigationView
    },
    data() {
        let checkUserName = (rule, value, callback) => {
            if (!value) {
                return callback(new Error("账户名不能为空"));
            } else {
                callback();
            }
        };
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else {
                if (this.ruleForm2.checkPass !== "") {
                    this.$refs.ruleForm2.validateField("checkPass");
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请再次输入密码"));
            } else if (value !== this.ruleForm2.pass) {
                callback(new Error("两次输入密码不一致!"));
            } else {
                callback();
            }
        };

        return {
            activeName2: "first",
            active: 0,
            ruleForm1: {
                userName: ""
            },
            rules1: {
                userName: [{ validator: checkUserName, trigger: "blur" }]
            },
            ruleForm2: {
                userName: ""
            },
            rules2: {
                userName: [{ validator: checkUserName, trigger: "blur" }]
            },
            ruleForm3: {
                pass: "",
                checkPass: ""
            },
            rules3: {
                pass: [{ validator: validatePass, trigger: "blur" }],
                checkPass: [{ validator: validatePass2, trigger: "blur" }]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    alert("submit!");
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        next() {
            if (this.active++ > 3) this.active = 0;
        },
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
};
</script>

<style lang="less" scoped>
@import "~styles/public";
.send-password-main {
    padding: 20px 0;
    .send-password-box {
        margin: 20px 0;
        padding: 20px;
        border: 5px solid #ddd;

        .el-form {
            margin-top: 20px;
            width: 500px;
        }

        .el-tabs {
            padding: 20px 50px;
        }

        .code {
            width: 200px;
        }
        img {
            vertical-align: middle;
        }

        .goods {
            text-align: center;
            padding: 50px;
            font-size: 18px;
        }

        .next-btn {
            width: 180px;
            margin-top: 20px;
            margin-left: 45px;
        }
    }
}
</style>