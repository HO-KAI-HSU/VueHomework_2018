<template>
    <div class="col-md-4">
        <h2>{{ citem.title }}</h2>
        <p>{{ citem.info }}</p>
        <p><a class="btn btn-default" href="#" role="button">{{ citem.btntext  }}</a></p>
    </div>
</template>

<script>
import card from './card'
export default {
  props: {
     citem: Object
  },
  data () {
    return {
    }
  }
}
</script>