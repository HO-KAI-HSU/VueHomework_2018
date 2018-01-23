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

export const actionMultiplication = ({ commit }, num) => {
    console.log('actionMultiplication');
    commit(types.MULTIPLICATION, num);
}

export const actionCountReset = ({ commit }) => {
    console.log('actionCountReset');
    commit(types.RESET);
}

export const actionAddTodo = ({ commit }, todo) => {
    console.log('actionAddTodo');
    commit(types.ADDTODO, todo);
}

export const actionUpdateTodo = ({ commit }, obj) => {
    console.log('actionUpdateTodo');
    commit(types.UPDATETODO, obj);
}

export const actionDeleteTodo = ({ commit }, key) => {
    console.log('actionDeleteTodo');
    commit(types.DELETETODO, key);
}

export const actionToggleTodo = ({ commit }, obj) => {
    console.log('actionToggleTodo');
    commit(types.TOGGLETODO, obj);
}


