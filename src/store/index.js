import Vue from 'vue'
import Vuex from 'vuex'
import {state, mutations } from './mutations'
import * as getters from './getters'
import * as actions from './actions'
import  count from './module/count'
import  learncomponent from './module/learncomponent'
import  shoppingcart from './module/shoppingcart'
import  todolist from './module/todolist'

Vue.use( Vuex );

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,

    modules: {
        count: count,
        learncomponent: learncomponent,
        shoppingcart: shoppingcart,
        todolist: todolist
    },

    strict: true
});