import Vue from 'vue'
import Router from 'vue-router'
import path from './path'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: path.Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: path.Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: path.Register
    },
    {
      path: '/Product/:id',
      name: 'Product',
      component: path.Product
    },
    {
      path: '/ShoppingCart',
      name: 'ShoppingCart',
      component: path.ShoppingCart
    },
    {
      path: '/OrderConfirm',
      name: 'OrderConfirm',
      component: path.OrderConfirm
    },
  ],
  // 路由跳转时候滚动到顶部
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
