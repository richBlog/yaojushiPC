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
                <p>药居士药师<span>{{item.answerTime}}</span></p>
            </li>
        </ul>
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      discussList: [
        {
          problem: "高中长过水痘后有黑色的痘印，怎么办好",
          userName: "k12*****",
          time: "2017/11/11",
          answer:
            "你好，本品适用于粉刺、丘疹和脓包为主要表现的寻常型痤疮的皮肤治疗。建议您可以使用喜辽复痘印舒缓凝胶，具有淡化黑印，修复痘印的效果",
          answerTime: "2017/11/11"
        },
        {
          problem: "高中长过水痘后有黑色的痘印，怎么办好",
          userName: "k12*****",
          time: "2017/11/11",
          answer:
            "你好，本品适用于粉刺、丘疹和脓包为主要表现的寻常型痤疮的皮肤治疗。建议您可以使用喜辽复痘印舒缓凝胶，具有淡化黑印，修复痘印的效果",
          answerTime: "2017/11/11"
        },
        {
          problem: "高中长过水痘后有黑色的痘印，怎么办好",
          userName: "k12*****",
          time: "2017/11/11",
          answer:
            "你好，本品适用于粉刺、丘疹和脓包为主要表现的寻常型痤疮的皮肤治疗。建议您可以使用喜辽复痘印舒缓凝胶，具有淡化黑印，修复痘印的效果",
          answerTime: "2017/11/11"
        },
        {
          problem: "高中长过水痘后有黑色的痘印，怎么办好",
          userName: "k12*****",
          time: "2017/11/11",
          answer:
            "你好，本品适用于粉刺、丘疹和脓包为主要表现的寻常型痤疮的皮肤治疗。建议您可以使用喜辽复痘印舒缓凝胶，具有淡化黑印，修复痘印的效果",
          answerTime: "2017/11/11"
        },
        {
          problem: "高中长过水痘后有黑色的痘印，怎么办好",
          userName: "k12*****",
          time: "2017/11/11",
          answer:
            "你好，本品适用于粉刺、丘疹和脓包为主要表现的寻常型痤疮的皮肤治疗。建议您可以使用喜辽复痘印舒缓凝胶，具有淡化黑印，修复痘印的效果",
          answerTime: "2017/11/11"
        }
      ]
    };
  }
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
  .el-pagination{
      padding-right: 20px;
      margin-top: 30px;
      text-align: right;
  }
}
</style>
