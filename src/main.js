// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {
  Container,
  Icon,
  Button,
  Checkbox,
  Input,
  InputNumber,
  Rate,
  Form,
  Progress,
  Pagination,
  Alert,
  Tabs,
  Breadcrumb,
  Carousel,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Footer,
  FormItem,
  TabPane,
  Header,
  BreadcrumbItem,
  Main,
  Radio
} from 'element-ui'
import App from './App'
import router from './router'


Vue.use(Container)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Checkbox)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Rate)
Vue.use(Form)
Vue.use(Progress)
Vue.use(Pagination)
Vue.use(Alert)
Vue.use(Tabs)
Vue.use(Breadcrumb)
Vue.use(Carousel)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Footer)
Vue.use(FormItem)
Vue.use(TabPane)
Vue.use(Header)
Vue.use(BreadcrumbItem)
Vue.use(Main)
Vue.use(Radio)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
