<template>
    <div>  
        <div class="w3-white w3-xlarge w3-padding-xlarge" style="max-width:1200px;margin:auto">
            <div class="w3-right">
                <router-link :to="{name: 'cart'}">
                    <!-- 顯示購物車總產品數 -->
                    <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"> {{ stotal }}</span>
                </router-link>
            </div>
            <div class="w3-center">Shop</div>
        </div>
        <productitem v-for="pitem in plist" v-bind:item="pitem"></productitem>
    </div>
</template>

<script>
import productitem from './productitem'
export default {
  components: {
    productitem
  },
  props: {
    plist : Array, 
    stotal : Number  
  },
  data () {
    return {
    }
  }
}
</script>

<!-- 載入 w3school - food blog template -->
<style src="../../static/css/w3.css"></style>