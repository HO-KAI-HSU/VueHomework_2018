import * as types from './mutations_type'
import Vue from 'vue'

export const state = {
    count : 0
}

export const mutations = {
    [types.INCREASE] (state, num) {
        state.count += parseInt(num);
    },
    [types.DECREASE] (state, num) {
        state.count -= parseInt(num);
    },
    [types.RESET] (state) {
        state.count = 0;
    }
}