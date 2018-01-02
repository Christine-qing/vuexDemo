import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import getters from './getters';
import * as mutations from './mutations'
import sample_one from './modules/sample_one'  
import sample_two from './modules/sample_two' 


Vue.use(Vuex);

const state = {};

export default new Vuex.Store({
    state,
    actions,
    mutations,
    modules: {
        sample_one,
        sample_two,
    }
});


// Vue.Store({state,mutations})

