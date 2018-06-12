<template>
    <div class="layout-prescription">
        <p class="prescription-title">
            <span>我的处方笺</span>
            <span>点击添加</span>
        </p>
        <p class="prescription-explain">为了药师能快速的响应您的处方需求，您可以点击"上传处方图"来上传您的处方图</p>
        <p class="prescription-explain">如果您目前还没有处方笺,如需添加,您可以点击上方的"添加处方"</p>
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
                    <span>编辑</span>
                    <span>删除</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
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
    }
};
</script>

<style lang="less" scoped>
@import "~styles/public";
@b-border: 1px solid #eee;

.s-prescription-item() {
    display: flex;
    padding: 10px 0;
    text-align: center;
    div {
        flex: 1;
        color: #494949;
    }
}

.layout-prescription {
    padding-bottom: 20px;
    border: @b-border;
    .prescription-title {
        padding: 20px;
        border-bottom: @b-border;
        .title();
        span{
            &:last-child{
                cursor: pointer;
                border: 0;
                font-size: 12px;
                font-weight: bold;
                color: #2d8ef3;
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
                    span{
                        cursor: pointer;
                        color: #2d8ef3;
                        &:hover{
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
    }

    .not-data{
        height: 130px;
        line-height: 130px;
        text-align: center;
    }
}
</style>