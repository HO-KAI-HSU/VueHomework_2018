<template>
  <div class="container">
      <div>
        <input type="text"  placeholder="add Todo..." v-model="newTodo" @keyup.enter="addTodo">
        <button @click="addTodo">add Todo</button>
      </div>
      <h2>Todo List : </h2>
      <ol>
        <todoItem v-for="(todoitem, index) in todos" v-bind:todoitem="todoitem"></todoItem>
      </ol>
      <h2>Done List : </h2>
      <ol>
        <li v-for="(customitem, index) in donetodos">
          <customcheckbox v-bind:customitem="customitem" @actionToggleTodo1="actionToggleTodo"></customcheckbox>
        </li>
      </ol>
  </div>
  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import todoItem from '../components/todoitem.vue'
import customcheckbox from '../components/customcheckbox.vue'
export default {
  components: {
    todoItem,
    customcheckbox
  },
  data() {
    return {
      newTodo: '',
      IsEditMode: false,
      IsDone: ''
    }
  },
  computed: mapGetters({
      todos: 'getTodoList',
      donetodos: 'getDoneList'
  }),
  methods: {
    ...mapActions([
      'actionAddTodo',
      'actionToggleTodo'
    ]),
    addTodo: function() {
      this.actionAddTodo(this.newTodo);
    }
  }
}
</script>
