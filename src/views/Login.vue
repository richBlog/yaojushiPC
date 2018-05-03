<template>
	<el-container>
		<el-header>
			<div class="login-header">
				<router-link to="/">
					<img src="../assets/image/logo.png" alt="logo">
				</router-link>
			</div>			
		</el-header>
		<el-main class="login-main">
			<div class="login-container">
				<div class="login-main-wechat"></div>
				<div class="login-main-login"></div>
			</div>
		</el-main>
	</el-container>
</template>
<script>
export default {
  name: "Login"
};
</script>
<style lang="less">
.login-header {
  width: 960px;
  padding: 20px 0;
  margin: 0 auto;
  text-align: left;
}

.login-main {
  background-color: #4ec3ff;
  .login-container {
    width: 990px;
    height: 960px;
    margin: 0 auto;
  }
}
</style>

