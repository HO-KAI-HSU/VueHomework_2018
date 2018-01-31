import Vue from 'vue'



const types = {
    ADDTODO: 'ADDTODO',
    UPDATETODO: 'UPDATETODO',
    TOGGLETODO: 'TOGGLETODO',
    DELETETODO: 'DELETETODO'
}


const state = {
    todoList: [
        { key: 0, content: 'vue.js 2.0', done: true },
        { key: 1, content: 'vue.js 2.0', done: true },
        { key: 2, content: 'vue-router 2.0', done: false },
        { key: 3, content: 'vue-resource 2.0', done: false },
        { key: 4, content: 'webpack', done: false }
    ],
}
let todoKey = state.todoList.length;

const actions = {
    actionAddTodo ({ commit }, todo) {
        console.log('actionAddTodo');
        commit(types.ADDTODO, todo);
    },    
    actionUpdateTodo ({ commit }, obj) {
        console.log('actionUpdateTodo');
        commit(types.UPDATETODO, obj);
    },   
    actionDeleteTodo ({ commit }, key) {
        console.log('actionDeleteTodo');
        commit(types.DELETETODO, key);
    },   
    actionToggleTodo ({ commit }, obj) {
        console.log('actionToggleTodo');
        commit(types.TOGGLETODO, obj);
    }
}

const getters = {
    getTodoList: state => state.todoList.filter((item) => {
        return !item.done;
    }),
    getDoneList: state => state.todoList.filter((item) => {
        return item.done;
    })
}

const mutations = {
    [types.ADDTODO] (state, todo) {
        state.todoList.push({
            key: todoKey,
            content: todo,
            done: false
        });
        todoKey++;
    },
    [types.UPDATETODO] (state, obj) {
        for (var i in state.todoList){
            var item = state.todoList[i];
            if(item.key == obj.key){
                console.log("Update item key : " + obj.key);
                item.content = obj.content;
                break;
            }
        }
        todoKey++;
    },
    [types.DELETETODO] (state, key) {
        for (var i in state.todoList){
            var item = state.todoList[i];
            if(item.key == key){
                console.log("Delete item key : " + key);
                state.todoList.splice(i, 1);
                break;
            }
        }
    },
    [types.TOGGLETODO] (state, obj) {
        for (var i in state.todoList){
            var item = state.todoList[i];
            if(item.key == obj.key){
                item.done = obj.checked;
                break;
            }
        }
    }
}



export default {
    namespced: true,
    state,
    actions,
    getters,
    mutations
}