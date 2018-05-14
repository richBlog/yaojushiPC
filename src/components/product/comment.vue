<template>
    <div class="comment-box">

        <div class="progress-box">
            <div class="percentage">
                <p>好评率</p>
                <p>100%</p>
            </div>
            <ul class="progress-bar">
                <li class="progress-bar-item" v-for="item in progressList" :key="item.id">{{item}}</li>
            </ul>
        </div>
        <!-- 评价类型开始 -->
        <div class="evaluation-options">
            <el-radio v-model="radio" label="1">全部评价({{progressType.all}})</el-radio>
            <el-radio v-model="radio" label="2">精品评价({{progressType.delicate}})</el-radio>
            <el-radio v-model="radio" label="3">好评({{progressType.good}})</el-radio>
            <el-radio v-model="radio" label="4">中评({{progressType.commonly}})</el-radio>
            <el-radio v-model="radio" label="5">差评({{progressType.difference}})</el-radio>
        </div>
        <!-- 评价类型结束 -->

        <!-- 评论区内容开始 -->
        <div class="evaluation-content">
            <ul class="evaluation-sub">
                <li class="evaluation-item" v-for="item in contentList" :key="item.id">
                    <div class="content">{{item.content}}</div>
                    <div class="evaluation-info">
                        <span class="evaluation-time">{{item.time}}</span>
                        <span class="evaluation-name">{{item.name}}</span>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 评论区内容结束 -->

        <!-- 分页开始 -->
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
        <!-- 分页结束 -->
    </div>
</template>
<script>
export default {
    props:["progressList","contentList","progressType"],
    data() {
        return {
            radio: "1"
        };
    }
};
</script>
<style lang="less" scoped>
.comment-box {
    .progress-box {
        display: flex;
    }
    .percentage {
        width: 260px;
        height: 120px;
        text-align: center;

        font-weight: bold;
        p {
            color: #666;
            &:first-child {
                margin-top: 30px;
            }
            &:last-child {
                line-height: 60px;
                color: #ff4141;
                font-size: 48px;
            }
        }
    }
    .progress-bar {
        display: flex;
        flex-wrap: wrap;
        width: 60%;
        padding: 25px 0;
        .progress-bar-item {
            height: 25px;
            border: 1px solid #eee;
            padding: 2px 8px;
            margin-right: 10px;
            color: #999;
        }
    }

    .evaluation-options {
        padding: 10px 25px;
        background-color: #efefef;
    }

    .evaluation-sub {
        padding: 20px 25px;
        .evaluation-item {
            padding: 15px 0;
            border-bottom: 1px solid #ddd;
            .content {
                width: 60%;
                margin-bottom: 10px;
                color: #666;
            }
            .evaluation-info {
                display: flex;
                justify-content: space-between;
                span {
                    color: #999;
                }
            }
        }
    }

    .el-pagination {
        padding-right: 20px;
        text-align: right;
    }
}
</style>
