<template>
  <div>
    <input type="checkbox" v-bind:id="getID" v-bind:checked="customitem.done" @change="handleChange" />
    <label v-bind:for="getID" class="checkbox-icon"></label>
    <label v-bind:for="getID">{{ customitem.content }}</label>
  </div>
</template>

<script>
export default {
  props: {
      customitem: Object
  },
  computed: {
      getID() {
          return 'custom_${Math.floor(Math.random() * 9999)}';
      }
  },
  methods: {
    //當下 checkbox input 物件節點
    handleChange($event) {
        // $emit 向上傳遞
        this.$emit( 'actionToggleTodo1', {
            key: this.customitem.key,
            //當下 checkbox input 狀態
            checked: $event.target.checked
        })
    }
  }
}
</script>
