<template>
    <div class="layout-prescription">
        <p class="prescription-title">
            <span>我的处方笺</span>
            <span @click="prescriptionShow">点击添加</span>
        </p>
        <p class="prescription-explain">为了药师能快速的响应您的处方需求，您可以点击"上传处方图"来上传您的处方图</p>
        <p class="prescription-explain">如果您目前还没有处方笺,如需添加,您可以点击下方的"添加处方"</p>
        <!-- 上传药方开始 -->
        <div v-if="state===1" class="upload-prescription">
            <div class="sample">
                <el-upload class="upload-demo" action="http://localhost:8089" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </div>
            <div class="info-fill">
                <h1>处方笺</h1>
                <p>注：本单为方便药师审核使用，非医院正规处方单</p>
                <ul>
                    <li>
                        医院：
                        <el-input v-model="medicine"></el-input>
                    </li>
                    <li>
                        科别：
                        <el-input v-model="department"></el-input>
                    </li>
                    <li>
                        姓名：
                        <el-input v-model="fullName"></el-input>
                    </li>
                </ul>
                <ul>
                    <li>
                        年龄：
                        <el-input v-model="age" type="number"></el-input>
                    </li>
                    <li>
                        联系方式：
                        <el-input v-model="tel" type="number"></el-input>
                    </li>
                    <li>
                        性别：&nbsp;&nbsp;
                        <el-radio v-model="radio" label="1">男</el-radio>
                        <el-radio v-model="radio" label="2">女</el-radio>
                    </li>
                </ul>
                <div class="diagnosis">
                    临床诊断：&nbsp;&nbsp;
                    <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="textarea"></el-input>
                </div>

                <div>
                    <el-button type="primary" @click="submitPrescription">确定</el-button>
                    <el-button @click="prescriptionOut">取消</el-button>
                </div>
            </div>
        </div>
        <!-- 上传药方结束 -->

        <!-- 处方内容显示列表开始 -->
        <div v-if="state===2">
            <h3 class="prescription-list-title">处方列表</h3>
            <ul class="prescription-list">
                <li class="prescription-type">
                    <div>姓名</div>
                    <div>临床诊断</div>
                    <div>科室</div>
                    <div>操作</div>
                </li>
                <li v-if="prescriptionList.length <=0" class="not-data">暂无处方笺</li>
                <li class="prescription-item" v-for="(item,index) in prescriptionList" :key="index">
                    <div>{{item.name}}</div>
                    <div>{{item.symptom}}</div>
                    <div>{{item.content}}</div>
                    <div>
                        <span @click="prescriptionShow">编辑</span>
                        <span @click="delPrescription">删除</span>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 处方内容显示列表结束 -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            state: 2,
            radio: "1",
            medicine: "",
            department: "",
            fullName: "",
            age: "",
            tel: "",

            textarea: "",
            fileList: [
                {
                    name: "food.jpeg",
                    url:
                        "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
                },
                {
                    name: "food2.jpeg",
                    url:
                        "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
                }
            ],
            prescriptionList: [
                {
                    name: "东皇太一",
                    symptom: "前列腺",
                    content: "男科",
                    id: "1"
                },
                {
                    name: "东皇太一",
                    symptom: "前列腺",
                    content: "男科",
                    id: "1"
                }
            ]
        };
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            console.log(111);
            this.$message.warning(
                `当前限制选择 3 个文件，本次选择了 ${
                    files.length
                } 个文件，共选择了 ${files.length + fileList.length} 个文件`
            );
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${file.name}？`);
        },
        removeAllSpace(str) {
            return str.replace(/\s+/g, "");
        },
        // 显示处方提交功能
        prescriptionShow(){
            this.state = 1;
        },
        // 提交处方笺
        submitPrescription() {
            if (this.removeAllSpace(this.medicine) === "") {
                return this.$message.error("请填写医院信息");
            }
            if (this.removeAllSpace(this.department) === "") {
                return this.$message.error("请填写科别信息");
            }
            if (this.removeAllSpace(this.fullName) === "") {
                return this.$message.error("请填写您的姓名");
            }
            if (this.removeAllSpace(this.age) === "") {
                return this.$message.error("请填写您的年龄");
            }
            if (this.removeAllSpace(this.tel) === "") {
                return this.$message.error("请填写联系方式");
            }
            if (this.removeAllSpace(this.textarea) === "") {
                return this.$message.error("请填写您的诊断信息");
            }

            this.$alert(
                `你提交的信息如下：医院：${this.medicine}、科别：${
                    this.department
                }、姓名：${this.fullName}、年龄：${this.age}、联系方式：${
                    this.tel
                }、性别：${this.radio}、诊断信息：${this.textarea}`,
                "提示",
                {
                    confirmButtomText: "确定",
                    callback: action => {}
                }
            );
        },
        // 返回处方列表
        prescriptionOut(){
            this.state = 2;
        },
        // 删除处方
        delPrescription() {
            this.$confirm("删除处方, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    this.$message({
                        type: "success",
                        message: "删除成功!"
                    });
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消删除"
                    });
                });
        }
    }
};
</script>

<style lang="less" scoped>
@import "~styles/public";
.s-prescription-item() {
    display: flex;
    padding: 10px 0;
    text-align: center;
    div {
        flex: 1;
        color: #494949;
    }
}

.upload-prescription {
    display: flex;
    background-color: #fbfbfb;
    .sample {
        width: 200px;
        padding: 15px 32px;
    }
    .info-fill {
        width: 100%;
        padding-top: 15px;
        padding-bottom: 25px;
        text-align: center;
        h1 {
            font-weight: normal;
            margin-bottom: 11px;
            color: #5c5c5c;
        }
        p {
            color: #5c5c5c;
        }

        ul {
            display: flex;
            margin-top: 35px;
            li {
                flex: 1;
                display: flex;
                align-items: center;
                margin-right: 10px;
                white-space: nowrap;
                .el-input {
                    margin-left: 5px;
                }
            }
        }
        .diagnosis {
            display: flex;
            margin-top: 35px;
            margin-bottom: 20px;
            padding-right: 20px;
            white-space: nowrap;
        }
        .el-button {
            margin: 20px;
        }
    }
}

.layout-prescription {
    padding-bottom: 20px;
    border: @b-border;
    .prescription-title {
        padding: 20px;
        border-bottom: @b-border;
        .title();
        span {
            &:last-child {
                cursor: pointer;
                border: 0;
                font-size: 12px;
                font-weight: bold;
                color: #2d8ef3;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
    .prescription-explain {
        padding-left: 20px;
        margin-bottom: 10px;
        color: #333;
    }
    .prescription-list-title {
        &:extend(.layout-prescription .prescription-explain);
        margin-top: 30px;
    }

    .prescription-list {
        margin: 0 20px;
        border: @b-border;
        .prescription-type {
            .s-prescription-item();

            background-color: #d8d7d7;
        }
        .prescription-item {
            .s-prescription-item();
            padding: 0;
            &:last-child {
                div {
                    border-bottom: 0;
                }
            }
            div {
                padding: 10px 0;
                border-right: @b-border;
                border-bottom: @b-border;
                &:last-child {
                    border-right: 0;
                    span {
                        cursor: pointer;
                        color: #2d8ef3;
                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
    }

    .not-data {
        height: 130px;
        line-height: 130px;
        text-align: center;
    }
}
</style>