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
      children: [{
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
        {
          path: '/HelpCenter/shoppingGuide',
          name: 'shoppingGuide',
          component: resolve => require(['components/help/shoppingGuide'], resolve)
        },
        {
          path: '/HelpCenter/orderState',
          name: 'orderState',
          component: resolve => require(['components/help/orderState'], resolve)
        },
        {
          path: '/HelpCenter/serviceExplain',
          name: 'serviceExplain',
          component: resolve => require(['components/help/serviceExplain'], resolve)
        },
        {
          path: '/HelpCenter/deliveryFreight',
          name: 'deliveryFreight',
          component: resolve => require(['components/help/deliveryFreight'], resolve)
        },
        {
          path: '/HelpCenter/deliveryPrivacy',
          name: 'deliveryPrivacy',
          component: resolve => require(['components/help/deliveryPrivacy'], resolve)
        },
        {
          path: '/HelpCenter/fragile',
          name: 'fragile',
          component: resolve => require(['components/help/fragile'], resolve)
        },
        {
          path: '/HelpCenter/packing',
          name: 'packing',
          component: resolve => require(['components/help/packing'], resolve)
        },
        {
          path: '/HelpCenter/receipt',
          name: 'receipt',
          component: resolve => require(['components/help/receipt'], resolve)
        },
        {
          path: '/HelpCenter/toPay',
          name: 'toPay',
          component: resolve => require(['components/help/toPay'], resolve)
        },
        {
          path: '/HelpCenter/onlinePay',
          name: 'onlinePay',
          component: resolve => require(['components/help/onlinePay'], resolve)
        },
        {
          path: '/HelpCenter/returns',
          name: 'returns',
          component: resolve => require(['components/help/returns'], resolve)
        },
        {
          path: '/HelpCenter/returnsPolicy',
          name: 'returnsPolicy',
          component: resolve => require(['components/help/returnsPolicy'], resolve)
        },
        {
          path: '/HelpCenter/refund',
          name: 'refund',
          component: resolve => require(['components/help/refund'], resolve)
        },
        {
          path: '/HelpCenter/relief',
          name: 'relief',
          component: resolve => require(['components/help/relief'], resolve)
        },
        {
          path: '/HelpCenter/agreement',
          name: 'agreement',
          component: resolve => require(['components/help/agreement'], resolve)
        },
        {
          path: '/HelpCenter/invoice',
          name: 'invoice',
          component: resolve => require(['components/help/invoice'], resolve)
        },
        {
          path: '/HelpCenter/palmar',
          name: 'palmar',
          component: resolve => require(['components/help/palmar'], resolve)
        },
        {
          path: '/HelpCenter/recruit',
          name: 'recruit',
          component: resolve => require(['components/help/recruit'], resolve)
        },
        {
          path: '/HelpCenter/aptitude',
          name: 'aptitude',
          component: resolve => require(['components/help/aptitude'], resolve)
        },
        {
          path: '/HelpCenter/contact',
          name: 'contact',
          component: resolve => require(['components/help/contact'], resolve)
        },
        {
          path: '/HelpCenter/pharmacy',
          name: 'pharmacy',
          component: resolve => require(['components/help/pharmacy'], resolve)
        },
        {
          path: '/HelpCenter/introduce',
          name: 'introduce',
          component: resolve => require(['components/help/introduce'], resolve)
        },
        {
          path: '/HelpCenter/enterprise',
          name: 'enterprise',
          component: resolve => require(['components/help/enterprise'], resolve)
        },
      ]
    },
    {
      path: '/SendPassword',
      name: 'SendPassword',
      component: resolve => require(['views/SendPassword'], resolve)
    },
    {
      path: '/Special/:id',
      component: resolve => require(['views/Special'], resolve),
      children: [{
        path: '/Special/male',
        name: 'male',
        component: resolve => require(['components/special/male'], resolve)
      }, {
        path: '/Special/pediatrics',
        name: 'pediatrics',
        component: resolve => require(['components/special/pediatrics'], resolve)
      }, {
        path: '/Special/woman',
        name: 'woman',
        component: resolve => require(['components/special/woman'], resolve)
      }, {
        path: '/Special/ostalgia',
        name: 'ostalgia',
        component: resolve => require(['components/special/ostalgia'], resolve)
      }, {
        path: '/Special/skin',
        name: 'skin',
        component: resolve => require(['components/special/skin'], resolve)
      }, {
        path: '/Special/apparatus',
        name: 'apparatus',
        component: resolve => require(['components/special/apparatus'], resolve)
      }]
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
