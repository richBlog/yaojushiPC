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
      component: resolve => require(['views/Personal'], resolve),
      children: [{
          path: '/Personal/myOrder',
          name: 'myOrder',
          component: resolve => require(['components/presonal/myOrder'], resolve),
        },
        {
          path: '/Personal/myCollect',
          name: 'myCollect',
          component: resolve => require(['components/presonal/myCollect'], resolve),
        },
        {
          path: '/Personal/myIntegral',
          name: 'myIntegral',
          component: resolve => require(['components/presonal/myIntegral'], resolve),
        },
        {
          path: '/Personal/myCoupon',
          name: 'myCoupon',
          component: resolve => require(['components/presonal/myCoupon'], resolve),
        },
        {
          path: '/Personal/myDiscuss',
          name: 'myDiscuss',
          component: resolve => require(['components/presonal/myDiscuss'], resolve),
        },
        {
          path: '/Personal/myPrescription',
          name: 'myPrescription',
          component: resolve => require(['components/presonal/myPrescription'], resolve),
        },
        {
          path: '/Personal/securityCenter',
          name: 'securityCenter',
          component: resolve => require(['components/presonal/securityCenter'], resolve),
        },
        {
          path: '/Personal/modify',
          name: 'modify',
          component: resolve => require(['components/presonal/modify'], resolve),
        },
        {
          path: '/Personal/modifyWord',
          name: 'modifyWord',
          component: resolve => require(['components/presonal/modifyWord'], resolve),
        },
        {
          path: '/Personal/personalData',
          name: 'personalData',
          component: resolve => require(['components/presonal/personalData'], resolve),
        },
        {
          path: '/Personal/receivingAddress',
          name: 'receivingAddress',
          component: resolve => require(['components/presonal/receivingAddress'], resolve),
        },
        {
          path: '/Personal/messageCenter',
          name: 'messageCenter',
          component: resolve => require(['components/presonal/messageCenter'], resolve),
        },
        {
          path: '/Personal/refundableProduct',
          name: 'refundableProduct',
          component: resolve => require(['components/presonal/refundableProduct'], resolve),
        },
        {
          path: '/Personal/proposal',
          name: 'proposal',
          component: resolve => require(['components/presonal/proposal'], resolve),
        },
        {
          path: '/Personal/waiter',
          name: 'waiter',
          component: resolve => require(['components/presonal/waiter'], resolve),
        },
      ]
    },
    {
      path: '/orderDetails/:id',
      name: 'orderDetails',
      component: resolve => require(['components/presonal/orderDetails'], resolve)
    },
    {
      path: '/HelpCenter/:id',
      component: resolve => require(['views/HelpCenter'], resolve),
      children: [
          {
            path: '/HelpCenter/help',
            name: 'help',
            component: resolve => require(['components/help/help'], resolve)
          },
          {
            path: '/HelpCenter/userRegister',
            name: 'userRegister',
            component: resolve => require(['components/help/userRegister'], resolve)
          },
          {
            path: '/HelpCenter/userLogin',
            name: 'userLogin',
            component: resolve => require(['components/help/userLogin'], resolve)
          },
          {
            path: '/HelpCenter/vipGrade',
            name: 'vipGrade',
            component: resolve => require(['components/help/vipGrade'], resolve)
          },
          {
            path: '/HelpCenter/integralExplanation',
            name: 'integralExplanation',
            component: resolve => require(['components/help/integralExplanation'], resolve)
          },
          {
            path: '/HelpCenter/commonProblem',
            name: 'commonProblem',
            component: resolve => require(['components/help/commonProblem'], resolve)
          },
          {
            path: '/HelpCenter/retrievePassword',
            name: 'retrievePassword',
            component: resolve => require(['components/help/retrievePassword'], resolve)
          },
          {
            path: '/HelpCenter/coupon',
            name: 'coupon',
            component: resolve => require(['components/help/coupon'], resolve)
          },
        ]
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
