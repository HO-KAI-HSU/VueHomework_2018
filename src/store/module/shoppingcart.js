import Vue from 'vue'



const types = {
    ADDCART: 'ADDCART',
    CANCELCART: 'CANCELCART'
}

const actions = {
    actionAddCart ({ commit }, key) {
        console.log('actionAddCart');
        commit(types.ADDCART, key);
    },
    actionCancelCart ({ commit }, key) {
        console.log('actionAddCart');
        commit(types.CANCELCART, key);
    }
}

const getters = {
    getShoppingCartList: state => { return state.shoppingcartList },
    
    getProductList: state => { return state.productList },
    
    getShoppingCartListTotal: state => { return state.shoppingcartList.length },
    
    getShoppingCartTotal: state =>  {    
        var total = 0;
        for (var i in state.shoppingcartList) {
            total = total + state.shoppingcartList[i].price;
        }
        return total;
    }
}

const mutations = {
    [types.ADDCART] (state, key) {
        var pitem = state.productList.find( item => item.key === key );
        state.shoppingcartList.push({
            key: pitem.key,
            title: pitem.title,
            price: pitem.price
        });
        pitem.left = pitem.left - 1;
    },
    [types.CANCELCART] (state, key) {
        var sitem = state.shoppingcartList.findIndex( item => item.key === key );
        state.shoppingcartList.splice(sitem, 1);
        var pitem = state.productList.find( item => item.key === key );
        pitem.left += 1;
    }
}

const state = {
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
    shoppingcartList: []
}

export default {
    namespced: true,
    state,
    actions,
    getters,
    mutations
}