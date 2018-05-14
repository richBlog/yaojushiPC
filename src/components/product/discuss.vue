<template>
    <div class="discuss-box">
        <ul class="questionAndAnswer-sub">
            <li class="questionAndAnswer-item" v-for="item in discussList" :key="item.id">
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
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
</template>
<script>
export default {
    props:["discussList"]
};
</script>
<style lang="less" scoped>
.discuss-box {
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
    .el-pagination {
        padding-right: 20px;
        margin-top: 30px;
        text-align: right;
    }
}
</style>
