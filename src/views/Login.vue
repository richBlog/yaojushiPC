<template>
	<el-container class="layout-login">
		<el-header class="login-header">
			<div class="login-header-container">
				<router-link to="/">
					<img src="../assets/image/logo.png" alt="logo">
				</router-link>
			</div>			
		</el-header>
		<el-main class="login-main">
			<div class="login-container">
				<div class="login-main-wechat">
					<img src="../assets/image/login.jpg" alt="login">
				</div>
				<div class="login-main-login">
					<div class="login-tab">
						<div class="login-tab-td" @click="loginTab" :class="tab?'active':''">手机号码快捷登陆</div>
						<div class="login-tab-td" @click="loginTab" :class="!tab?'active':''">账户密码登陆</div>
					</div>
					<div>
						<el-input v-model="input" placeholder="请输入内容"></el-input>
						<el-input v-model="input" placeholder="请输入内容"></el-input>
						<el-input v-model="input" placeholder="请输入内容"></el-input>
					</div>
				</div>
			</div>
		</el-main>
	</el-container>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      activeName: "second",
      tab: true,
      input: ""
    };
  },
  methods: {
    // 登陆切换
    loginTab(e) {
      if (!e.target.classList[1]) {
        this.tab = !this.tab;
      }
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style lang="less">
.login-header {
  height: auto !important;
  padding: 20px 0!important;
}
.login-header-container {
  width: 960px;
  margin: 0 auto;
  text-align: left;
}

.login-main {
  background-color: #4ec3ff;
  .login-container {
    display: flex;
    width: 990px;
    margin: 0 auto;
  }
  .login-main-login {
    width: 370px;
    padding: 20px;
    margin-left: 30px;
    margin-top: 80px;
    background-color: #fff;
    border-radius: 10px;
  }
  .login-tab-td {
    display: inline-block;
    width: 48%;
    padding-bottom: 15px;
    text-align: center;
    box-sizing: border-box;
    cursor: pointer;
    &.active {
      border-bottom: 1px solid #0d8dfd;
    }
  }
}
</style>

