<template>
    <div class="message-center">
        <p class="message-title">
            <span>消息中心</span>
        </p>

        <div v-if="messageList.length<=0" class="not-data">暂无消息记录</div>

        <ul class="message-main">
            <li v-for="(item,index) in messageList" :key="index">
                <div class="content-title">
                    <p>{{item.title}}</p>
                    <div class="message-content">{{item.content}}</div>
                    <div>
                        <span @click="shrink(index)" v-text="state === index?'收起详情': '查看详情'"></span>
                        <span @click="delMessage(index)">删除</span>
                    </div>
                </div>
                <div class="content" v-show="state === index">
                    <p>亲爱的药居士会员您好：</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.content}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            state: "state",
            messageList: [
                {
                    id: 1,
                    title: "恭喜您注册成为药居士新用户！",
                    content:
                        "恭喜您注册成为药居士新用户！恭喜您注册成为药居士新用户！恭喜您注册成为药居士新用户！恭喜您注册成为药居士新用户！恭喜您注册成为药居士新用户！恭喜您注册成为药居士新用户！恭喜您注册成为药居士新用户！恭喜您注册成为药居士新用户！恭喜您注册成为药居士新用户！恭喜您注册成为药居士新用户！恭喜您注册成为药居士新用户！恭喜您注册成为药居士新用户！恭喜您注册成为药居士新用户！恭喜您注册成为药居士新用户！恭喜您注册成为药居士新用户！"
                },
                {
                    id: 1,
                    title: "恭喜您注册成为药居士新用户！",
                    content:
                        "恭喜您注册成为药居士新用户！恭喜您注册成为药居士新用户！恭喜您注册成为药居士新用户！恭喜您注册成为药居士新用户！恭喜您注册成为药居士新用户！恭喜您注册成为药居士新用户！恭喜您注册成为药居士新用户！恭喜您注册成为药居士新用户！恭喜您注册成为药居士新用户！恭喜您注册成为药居士新用户！恭喜您注册成为药居士新用户！恭喜您注册成为药居士新用户！恭喜您注册成为药居士新用户！恭喜您注册成为药居士新用户！恭喜您注册成为药居士新用户！"
                },
            ]
        };
    },
    methods: {
        // 查看详情和收起详情
        shrink(index) {
            if (this.state === index) {
                this.state = "state";
            } else {
                this.state = index;
            }
        },
        // 删除消息
        delMessage(index){
            this.$confirm("是否删除该条消息", "提示", {
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
.message-center {
    border: @b-border;
    .message-title {
        padding: 20px;
        border-bottom: @b-border;
        .title();
    }

    .not-data{
        height: 150px;
        line-height: 150px;
        text-align: center;
    }

    .message-main {
        padding: 0 20px 20px 20px;
        li {
            border: @b-border;
            margin-bottom: 15px;
        }
        .content-title {
            display: flex;
            padding: 15px;
            justify-content: space-between;

            p {
                font-weight: bold;
            }
            span {
                color: #2d8ef3;
                margin-right: 5px;
                &:hover {
                    cursor: pointer;
                    text-decoration: underline;
                    color: #ff0000;
                }
            }
        }
        .message-content {
            width: 60%;
            color: #333;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .content {
            border-top: @b-border;
            padding: 15px;
            p {
                line-height: 25px;
                &:first-child {
                    font-weight: bold;
                }
            }
        }
    }
}
</style>