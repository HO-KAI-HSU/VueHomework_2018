import * as types from './mutations_type'
import Vue from 'vue'

export const state = {
    count : 0,
    todoList: [
        { key: 0, content: 'vue.js 2.0', done: true },
        { key: 1, content: 'vue.js 2.0', done: true },
        { key: 2, content: 'vue-router 2.0', done: false },
        { key: 3, content: 'vue-resource 2.0', done: false },
        { key: 4, content: 'webpack', done: false }
    ],
    learnList: [
        {
            title: 'Heading',
            info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
            btntext: 'View details »'
        },
        {
            title: 'Heading',
            info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
            btntext: 'View details »'
        },
        {
            title: 'Heading',
            info: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            btntext: 'View details »'
        } 
    ]   
}

let todoKey = state.todoList.length;

export const mutations = {
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
    },
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