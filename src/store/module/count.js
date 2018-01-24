import Vue from 'vue'



const types = {
    ADDTODO = 'ADDTODO',
    UPDATETODO = 'UPDATETODO',
    TOGGLETODO = 'TOGGLETODO',
    DELETETODO = 'DELETETODO'
}

const actions = {
    actionIncrease = ({ commit }, num) => {
        console.log("actionIncrease");
        commit(types.INCREASE, num);
    },   
    actionDecrease = ({ commit }, num) => {
        console.log('actionDecrease');
        commit(types.DECREASE, num);
    },   
    actionMultiplication = ({ commit }, num) => {
        console.log('actionMultiplication');
        commit(types.MULTIPLICATION, num);
    }, 
    actionCountReset = ({ commit }) => {
        console.log('actionCountReset');
        commit(types.RESET);
    }
}

const getters = {
    getCount: state => state.count 
}

const mutations = {
    [types.INCREASE] (state, num) {
        state.count += parseInt(num);
    },
    [types.DECREASE] (state, num) {
        state.count -= parseInt(num);
    },
    [types.MULTIPLICATION] (state, num) {
        state.count *= parseInt(num);
    },
    [types.RESET] (state) {
        state.count = 0;
    }
}

const state = {
    count: 0
}

export default {
    state,
    actions,
    getters,
    mutations
}