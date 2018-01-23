<template>
    <div class="container">    
        <card v-for="pitem in clist" v-bind:citem="pitem"></card>
    </div>
</template>

<script>
import card from './card'
export default {
  components: {
    card
  },
  props: {
    clist : Array  
  },
  data () {
    return {
    }
  }
}
</script>