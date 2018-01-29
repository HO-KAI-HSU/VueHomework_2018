<template>
  <li>
      <span>{{ item.title }}</span>
      <span>{{ item.price }}</span>
      <button @click="cancelCart( item.key )">取消</button>
  </li>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: {
     item: Object
  },
  data () {
    return {
    }
  },
  methods: {
    cancelCart: function(key) {
        console.log('SelectItem', key);
        this.actionCancelCart(key);
    },
    ...mapActions([
        'actionCancelCart'
    ])
  }
}
</script>