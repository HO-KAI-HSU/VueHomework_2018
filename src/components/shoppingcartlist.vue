<template>
    <div class="container">
      <h2>ShoppingCart Lists</h2> 
      <div class="panel panel-default">
        <div class="panel-heading panel-price">總計： <span>${{ getShoppingTotal }}</span> 元</div>
        <table class="table">
          <thead>
            <tr>
              <td>編號</td>
              <td>價錢</td>
              <td>項目</td>
              <td>取消預訂</td>
            </tr>
          </thead>  
          <tbody>  
            <shoppingcartitem v-for="(sitem, index) in slist" v-bind:item="sitem" v-bind:index1="index"></shoppingcartitem>
          </tbody>
        </table>  
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import shoppingcartitem from './shoppingcartitem'
export default {
  components: {
    shoppingcartitem
  },
  props: {
    slist : Array,  
  },
  data () {
    return {
    }
  },  
  computed: {
    ...mapGetters({
        getShoppingTotal: 'getShoppingCartTotal'
    })
  }  
}
</script>