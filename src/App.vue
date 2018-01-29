<template>
  <div id="app">
    <nav class="navbar navbar-default ">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" :to="{path: '/'}">Ironman2017vue</router-link>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><router-link :to="{name: 'Hello'}">Hello</router-link></li>
            <li><router-link :to="{name: 'C2F'}">C2F</router-link></li>
            <li><router-link :to="{name: 'LearnComponent'}">LearnComponent</router-link></li>
            <li><router-link :to="{name: 'Count'}">Count</router-link></li>
            <li><router-link :to="{name: 'TodoList'}">TodoList</router-link></li>
            <li><router-link :to="{name: 'Login'}">Login</router-link></li>
            <li><router-link :to="{name: 'ShoppingCart'}">ShoppingCart</router-link></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
