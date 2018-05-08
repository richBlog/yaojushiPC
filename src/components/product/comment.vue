<template>
  <div class="comment-box">
      <div class="percentage">100%</div>
      <div class="progress-bar">
          <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception">asd </el-progress>
      </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.comment-box {
  display: flex;
  .percentage {
    width: 260px;
    height: 120px;
    line-height: 120px;
    text-align: center;
    color: #ff4141;
    font-size: 48px;
    font-weight: bold;
  }
  .progress-bar{
      width: 30%;
      padding: 30px 0;
  }
}
</style>
