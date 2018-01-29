<template>
    <!-- 
    產品列表
    當產品庫存為: 0 
    使用 :class 加上 "w3-grayscale-max" class
    -->
    <div class="col-md-4"  v-bind:class="{ 'w3-grayscale-max': !item.left }">
    <img :src="item.image" style="width: 100%;">
    <h3>{{ item.title }}</h3>
    <h4>${{ item.price }}</h4>
    <!-- 
        數據驅動 UI
        根據條件變化不同 class
        當庫存為:0 的時候 ":disabled"
    -->
    <button 
        class="w3-btn w3-round-large w3-large w3-padding-large"
        v-bind:class="{
        'w3-red':  item.left == 1,
        'w3-green': item.left >= 2,
        'w3-dark-grey': !item.left
        }"
        v-bind:disabled="!item.left"
        @click="addCart( item.key )">
        <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
        <!-- 
        數據驅動 UI
        按鈕顯示文案
        -->
        <span v-if="item.left == 1">最後 {{ item.left }} 客</span>
        <span v-if="item.left >= 2">限量 {{ item.left }} 客</span>
        <span v-if="!item.left">Sold out</span>
    </button>
    </div><!-- end preduct -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: {
     item: Object

  },
  data () {
    return {
      btntext: 'Add Cart'
    }
  },
  methods: {
    ...mapActions([
        'actionAddCart'
    ]),
    addCart: function(key) {
        console.log('SelectItem', key);
        this.actionAddCart(key);
    }
  }
}
</script>