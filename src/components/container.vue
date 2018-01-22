<template>
    <div class="container">
        <div class="col-md-4" v-for="item in clist">
        <h2>{{ item.title }}</h2>
        <p>{{ item.info }}</p>
        <p><a class="btn btn-default" href="#" role="button">{{ item.btntext }}</a></p>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    clist : Array  
  },
  data () {
    return {
    }
  }
}
</script>