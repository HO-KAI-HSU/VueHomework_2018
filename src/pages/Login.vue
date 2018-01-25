<template>
  <div id="login">
      <div class="container">
          <div class="form-signin">
              <h2 class="form-signin-heading">Please sign in</h2>
              <label for="email" class="sr-only">Email address</label>
              <input type="email" v-model="email" id="email" class="form-control" placeholder="Email address" required autofocus />
              <label for="inputPassword" class="sr-only">Password</label>
              <input type="password" id="password" type="password" @keyup.enter="login" class="form-control" placeholder="Password" required />
              <button class="btn btn-lg btn-primary btn-block" type="submit" @click="login">Sign up</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>
