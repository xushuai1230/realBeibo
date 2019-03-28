import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import state from './state';
Vue.use(Vuex)
import user from './modules/user';
export default new Vuex.Store ({
    modules: {
        user
    },
    state,
    mutations
})