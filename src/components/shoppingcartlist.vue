<template>
    <div class="container">  
        <h2>ShoppingCart Lists</h2> 
        <div class="panel-heading panel-price">總計： <span>{{ getShoppingTotal }}</span> 元</div>     
        <shoppingcartitem v-for="sitem in slist" v-bind:item="sitem"></shoppingcartitem>
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