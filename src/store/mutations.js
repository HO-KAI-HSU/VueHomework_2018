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
    ],
    isloading : false,
    token: '',
    productList: [
        {
            key: 0,
            title: 'IPhone8(Gold)64G',
            impage: '../assets/iphone_8.jpg',
            left:  2,
            price: 23990,
        },
        {
            key: 1,
            title: 'IPhoneX(Black)256G',
            impage: '',
            left:  1,
            price: 38900,

        },
        {
            key: 2,
            title: 'HTC-Ultra 64G',
            impage: '',
            left:  3,
            price: 9990,
        },
        {
            key: 3,
            title: 'HTC-U11 EYES 64G',
            impage: '',
            left:  4,
            price: 14900,
        },
        {
            key: 4,
            title: 'Sony XPERIA XZs 64G',
            impage: '',
            left:  1,
            price: 12900,
        },     
        {
            key: 5,
            title: 'HTC-U11 Plus(Black)64G',
            impage: '',
            left:  1,
            price: 19900,
        }   
    ],
    shoppingcartList: [],
    shoppingcartTotal : 0
}

let todoKey = state.todoList.length;

export const mutations = {
    [types.SETTOKEN] (state, token) {
        state.token = token;
    },
    [types.LOADING] (state, IsLoading) {
        state.isloading = IsLoading;
    },
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
    },
    [types.ADDCART] (state, key) {
        for (var i in state.productList){
            var item = state.productList[i];
            if(item.key == key){
                state.shoppingcartList.push({
                    key: item.key,
                    title: item.title,
                    price: item.price
                });
                item.left = item.left - 1;
                state.shoppingcartTotal = state.shoppingcartTotal + item.price;
                break;
            }
        }
    },
    [types.CANCELCART] (state, key) {
        for (var i in state.shoppingcartList){
            var sitem = state.shoppingcartList[i];
            if(sitem.key == key){
                state.shoppingcartList.splice(i, 1);
                state.shoppingcartTotal = state.shoppingcartTotal - sitem.price;
                for (var i in state.productList){
                    var pitem = state.productList[i];
                    if(sitem.key == pitem.key){
                        pitem.left = pitem.left + 1;
                        break;
                    }
                }
                break;
            }
        }
    }
}