import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Home',
      component: resolve => require(['views/Home'], resolve)
    },
    {
      path: '/Login',
      name: 'Login',
      component: resolve => require(['views/Login'], resolve)
    },
    {
      path: '/Register',
      name: 'Register',
      component: resolve => require(['views/Register'], resolve)
    },
    {
      path: '/Product/:id',
      name: 'Product',
      component: resolve => require(['views/Product'], resolve)
    },
    {
      path: '/ShoppingCart',
      name: 'ShoppingCart',
      component: resolve => require(['views/ShoppingCart'], resolve)
    },
    {
      path: '/OrderConfirm',
      name: 'OrderConfirm',
      component: resolve => require(['views/OrderConfirm'], resolve)
    },
    {
      path: '/Pay',
      name: 'Pay',
      component: resolve => require(['views/Pay'], resolve)
    },
    {
      path: '/Search',
      name: 'Search',
      component: resolve => require(['views/Search'], resolve)
    },
    {
      path: '/AllClassify',
      name: 'AllClassify',
      component: resolve => require(['views/AllClassify'], resolve)
    },
    {
      path: '/Category',
      name: 'Category',
      component: resolve => require(['views/Category'], resolve)
    },
    {
      path: '/Personal/:id',
      name: 'Personal',
      component: resolve => require(['views/Personal'], resolve)
    },
    {
      path: '/orderDetails/:id',
      name: 'orderDetails',
      component: resolve => require(['components/presonal/orderDetails'], resolve)
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
