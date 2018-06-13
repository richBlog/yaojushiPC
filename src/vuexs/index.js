import Vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product'
import home from './modules/home'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules:{
        product,
        home
    }
})

export default store