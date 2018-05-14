const state =  {
    productData:{}        
}

const getters = {
    getInfo(state){
        return state.productData
    }
}

const mutations = {
    getData(state,data){
        state.productData = data.data;
    }
}


const actions = {
    // getData({commit,state},data){
    //     state.productData = data.data;
    // }
}

export default {
    state,
    getters,
    mutations,
    actions
}