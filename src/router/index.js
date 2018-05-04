import Vue from 'vue'
import Router from 'vue-router'
import path from './path'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: path.home
    },
    {
      path: '/Login',
      name: 'Login',
      component: path.login
    },
    {
      path: '/Register',
      name: 'Register',
      component: path.register
    },
    {
      path: '/Product/:id',
      name: 'Product',
      component: path.product
    },
  ]
})
