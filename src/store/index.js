import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        Add_Count(state, playload) {
            state.count += playload;
        },
    },
    actions: {
        Add_Count({ commit }, playload) {
            commit('Add_Count', playload);
        },
    },
    modules: {
    },
    getters: {
        countAdd1(state) {
            return state.count + 1;
        },
    },
});
