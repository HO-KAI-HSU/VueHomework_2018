<template>
  <div id="jumbotron">
    
    <!--商品列表--> 
	  <productlist v-bind:plist="getProductList" v-bind:stotal="getShoppingCartTotal"></productlist>
      
    <!--購物車列表-->
      <shoppingcartlist v-bind:slist="getShoppingCartList"></shoppingcartlist>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// 1. 引用 component
import shoppingcartlist from '../components/shoppingcartlist.vue'
import productlist from '../components/productlist.vue'

export default {
  // 2. 在 vue 宣告使用
  components: {
    shoppingcartlist,
    productlist
  },
  data () {
    return {
    }
  },
  computed: mapGetters({
      getShoppingCartList: 'getShoppingCartList',
      getProductList: 'getProductList',
      getShoppingCartTotal: 'getShoppingCartListTotal'
  })
}
</script>

<style>
  /* Move down content because we have a fixed navbar that is 50px tall */
  #jumbotron {
    padding-bottom: 20px;
  }
</style>