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
    <container v-bind:clist="plist"></container>
  </div>
</template>

<script>
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
      plist: [
        {
            title: 'Heading',
            info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
            btntext: 'View details »'
        },
        {
            title: 'Heading',
            info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
            btntext: 'View details »'
        },
        {
            title: 'Heading',
            info: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            btntext: 'View details »'
        } 
      ]
    }
  }
}
</script>

<style>
  /* Move down content because we have a fixed navbar that is 50px tall */
  #jumbotron {
    padding-bottom: 20px;
  }
</style>