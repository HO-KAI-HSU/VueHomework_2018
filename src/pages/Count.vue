<template>
    <div class="container">
        <h2 style="color: red;">count: {{ count }}</h2>

        <input type='number' v-model='num' style="width: 50px;"><br/>

        <button @click="actionIncrease(num)">+{{ num }}</button>
        <button @click="actionDecrease(num)">-{{ num }}</button>
        <button @click="actionMultiplication(num)">*{{ num }}</button>

        <button @click="actionCountReset()">歸零</button>
    </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  data () {
      return {
          num : 1
      }
  },
  computed: mapGetters({
      count: 'getCount'
  }),
  methods: mapActions([
      'actionIncrease',
      'actionDecrease',
      'actionMultiplication',
      'actionCountReset'
  ])
}
</script>
