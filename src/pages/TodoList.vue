<template>
  <div class="container">
      <div>
        <input type="text"  placeholder="add Todo..." v-model="newTodo" @keyup.enter="addTodo">
        <button @click="addTodo">add Todo</button>
      </div>
      <h2>Todo List : </h2>
      <ol>
        <todoItem v-for="(item, index) in todos" v-bind:item="item" />
      </ol>
      <h2>Done List : </h2>
      <ul>
        <li v-for="(todo, index) in donetodos">
          <label>
            <input type="checkbox" v-bind:checked="todo.done" @change="actionToggleTodo( todo.key )">
            {{ todo.content }}
          </label>
        </li>
      </ul>
  </div>
  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import todoItem from '../components/todoitem.vue'
export default {
  components: {
    todoItem
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
      'actionAddTodo'
    ]),
    addTodo: function() {
      this.actionAddTodo(this.newTodo);
    }
  }
}
</script>
