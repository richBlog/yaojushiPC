<template>
    <div class="details-box">
        <p class="details-title">{{present}}</p>
        <div class="datails-tab">
            <ul class="tab-sub">
                <li class="tab-item">商品名称：{{tabList.CommodityName}}</li>
                <li class="tab-item">规格：{{tabList.Specifications}}</li>
                <li class="tab-item">生产企业：{{tabList.ManufacturingEnterprise}}</li>
                <li class="tab-item">通用名称：{{tabList.GeneralName}}</li>
                <li class="tab-item">有效期：{{tabList.TermOfValidity}}</li>
                <li class="tab-item">剂型：{{tabList.DosageForm}}</li>
                <li class="tab-item">批准文号：{{tabList.ApprovalNumber}}</li>
                <li class="tab-item">适应症/功能主治：{{tabList.Indication}}</li>
                <li class="tab-item">用法用量：{{tabList.Usage}}</li>
                <li class="tab-item">不良反应：{{tabList.AdverseReaction}}</li>
            </ul>
            <p>温馨提示：请仔细阅读说明书并在医师指导下使用。依据《药品经营质量管理规范》，除药品质量原因外，药品一经售出，不得退换。</p>
        </div>
        <p class="image-text-title">
            <span>图文详情</span>
        </p>
        <div class="datails-img-box">
            <img v-lazy="item" alt="img" v-for="item in tabList.imgList" :key="item.id">
        </div>
        <div class="questionAndAnswer">
            <P class="questionAndAnswer-title">
                <span>商品问答</span>预定前如有疑问，可在下方留言咨询：或拨打免长途热线
                <span>027-83215071</span>
            </P>
            <ul class="questionAndAnswer-sub">
                <li class="questionAndAnswer-item" v-for="item in interlocutionList" :key="item.id">
                    <div class="asking-box">
                        <div class="asking-left-box">
                            <span>Q</span>
                            <span>{{item.problem}}</span>
                        </div>
                        <div class="asking-right-box">
                            <span>{{item.userName}}</span>
                            <span>{{item.time}}</span>
                        </div>
                    </div>
                    <div class="answer-box">
                        <span>A</span>
                        <span>{{item.answer}}</span>
                    </div>
                    <p>药居士药师
                        <span>{{item.answerTime}}</span>
                    </p>
                </li>
            </ul>
            <p class="want-ask">
                <span>我要提问</span>
            </p>

            <div class="problem-content">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="问题内容">
                        <el-input type="textarea" :rows='form.rows' v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" :disabled="!form.checked" @click="onSubmit">提交问题</el-button>
                        <el-checkbox v-model="form.checked">药师回复发到我的邮箱</el-checkbox>
                    </el-form-item>
                </el-form>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    props: ["interlocutionList", "tabList", "present"],
    data() {
        return {
            form: {
                desc: "",
                checked: true,
                rows: 6
            }
        };
    },
    methods: {
        onSubmit() {}
    }
};
</script>
<style lang="less" scoped>
.details-title {
    padding: 20px 0 20px 25px;
    border-bottom: 1px solid #ddd;
}

.datails-tab {
    padding: 22px 25px;
    border-bottom: 2px solid #ddd;
    .tab-sub {
        display: flex;
        flex-wrap: wrap;
        .tab-item {
            width: 33.33%;
            margin-bottom: 10px;
            color: #888;
            font-size: 12px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    p {
        font-size: 12px;
        color: #888;
    }
}

.image-text-title {
    padding: 15px 0;
    border-bottom: 1px solid #ddd;
    span {
        padding-left: 15px;
        font-size: 18px;
        color: #000;
        border-left: 6px solid #0073fe;
    }
}

.datails-img-box {
    font-size: 0;
    text-align: center;
}

.questionAndAnswer {
    margin-top: 50px;
    padding: 18px 0;
    border-top: 1px solid #ddd;
    .questionAndAnswer-title {
        padding-bottom: 18px;
        color: #595959;
        border-bottom: 1px solid #ddd;
        span {
            font-size: 18px;
            &:first-child {
                padding: 0 16px;
                border-left: 6px solid #0073fe;
            }
            &:last-child {
                color: #ff0000;
                font-size: 14px;
            }
        }
    }

    .questionAndAnswer-sub {
        padding: 0 25px;
        .questionAndAnswer-item {
            padding: 25px 0;
            border-bottom: 1px solid #ddd;
            .asking-box {
                display: flex;
                justify-content: space-between;
                margin-bottom: 40px;
            }
            .asking-left-box {
                span {
                    font-size: 12px;
                    &:first-child {
                        color: #fff;
                        padding: 5px 8px;
                        margin-right: 6px;
                        background-color: #adcef5;
                    }
                }
            }

            .asking-right-box {
                color: #9a9a9a;
                span {
                    &:last-child {
                        margin-left: 16px;
                    }
                }
            }

            .answer-box {
                margin-bottom: 10px;
                span {
                    color: #9a9a9a;
                    &:first-child {
                        margin-right: 5px;
                        padding: 5px 8px;
                        background-color: #fabe92;
                        color: #fff;
                    }
                }
            }

            p {
                text-align: right;
                color: #9a9a9a;
                span {
                    margin-left: 16px;
                }
            }
        }
    }

    .want-ask {
        padding: 30px 25px 0 25px;
        span {
            display: block;
            color: #1a82ee;
            padding-bottom: 8px;
            border-bottom: 1px solid #ddd;
        }
    }
    .problem-content {
        padding: 16px 25px 0 25px;
        .el-checkbox {
            top: 10px;
            left: 20px;
        }
    }
}
</style>
