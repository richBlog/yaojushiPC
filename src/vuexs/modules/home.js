// 创建变量
const state = {
  isShow: false
}

// 读取变量
const getters = {
  getShow() {
    return state.isShow;
  }
}

// 修改变量
const mutations = {
  // 两个参数，一个是要修改的变量，一个是要修改成的值
  setShow(state, data) {
    state.isShow = data
  }
}

// 暴露变量出去
export default {
  state,
  getters,
  mutations
}
