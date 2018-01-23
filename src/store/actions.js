import Vue from 'vue'

//方法實作
import mutations from './mutations'

//方法定義
import * as types from './mutations_type'

export const actionIncrease = ({ commit }, num) => {
    console.log("actionIncrease");
    commit(types.INCREASE, num);
}

export const actionDecrease = ({ commit }, num) => {
    console.log('actionDecrease');
    commit(types.DECREASE, num);
}

export const actionCountReset = ({ commit }) => {
    console.log('actionCountReset');
    commit(types.RESET);
}


