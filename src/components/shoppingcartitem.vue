<template>
  <tr>
       <td>{{ index1 + 1 }}</td>
       <td>{{ item.price }}</td>
       <td>{{ item.title }}</td>
       <td><button @click="cancelCart( item.key )"  class="btn btn-default btn-xs glyphicon glyphicon-remove"></button></td>
  </tr>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: {
     item: Object,
     index1: Number
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
<style>
  .panel-price {
    font-size: 2em;
  }
  .panel-price span {
    color: #d9534f;
  }
</style>
