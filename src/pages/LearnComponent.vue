<template>
  <div id="jumbotron">
    <!-- 3.1 ActionBar -->
    <navbar>
      <div slot="right">
        <div class="form-group">
          <input type="text" placeholder="Email" class="form-control">
        </div>
        <div class="form-group">
          <input type="password" placeholder="Password" class="form-control">
        </div>
        <button type="submit" class="btn btn-success">Sign in</button>
      </div>
    </navbar>
	
    <!-- 3.2  主要內容-->
	  <jumbotron></jumbotron>

    <!-- 3.3  -->
    <container v-bind:clist="learnList"></container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// 1. 引用 component
import navbar from '../components/navbar.vue'
import container from '../components/container.vue'
import jumbotron from '../components/jumbotron.vue'

export default {
  // 2. 在 vue 宣告使用
  components: {
    navbar,
    container,
    jumbotron
  },
  data () {
    return {
    }
  },
  computed: mapGetters({
      learnList: 'getLearnList'
  })
}
</script>

<style>
  /* Move down content because we have a fixed navbar that is 50px tall */
  #jumbotron {
    padding-bottom: 20px;
  }
</style>