<template>
  <div id="login">
      <div class="container">
          <div class="form-signin">
              <h2 class="form-signin-heading">Please sign in</h2>
              <label for="email" class="sr-only">Email address</label>
              <input type="email" v-model="email" id="email" class="form-control" placeholder="Email address" required autofocus />
              <label for="inputPassword" class="sr-only">Password</label>
              <input type="password" id="password" v-model="password" @keyup.enter="login" class="form-control" placeholder="Password" required />
              <button class="btn btn-lg btn-primary btn-block" type="submit" @click="login">Sign up</button>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
      return {
          email: "george@foxconn.com",
          password: ''  
      }
  },
  methods: {
    login () {
      this.$store.dispatch('actionLogin', {
          email: this.email,
          password: this.password
      })      
      .then(() => { // 接收 resolve
        console.log('3. get Promise resolve');
        setTimeout(() => {
          // 使用 $router.push 轉跳到 hello Page
          this.$router.push('/hello');
        }, 1000);
      })
      .catch(() => { // 接收 reject
        console.log('error get Promise reject!');
      });
    }
  },
  computed: mapGetters({
      isLoading: 'getIsLoading'
  })
}
</script>
