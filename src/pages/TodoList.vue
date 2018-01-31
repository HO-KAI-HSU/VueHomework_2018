<template>
  <div class="container">
      <div class="row">
        <div class="input-group col-md-6">
          <input type="text" class="form-control"  placeholder="add Todo..." v-model="newTodo" @keyup.enter="addTodo">
          <span class="input-group-btn">
            <button @click="addTodo" class="btn btn-success"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
          </span>        
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <h2>Todo List : </h2>
          <ol>
            <todoItem v-for="(todoitem, index) in todos" v-bind:todoitem="todoitem"></todoItem>
          </ol>
        </div>
        <div class="col-md-6">
          <h2>Done List : </h2>
          <ol>
            <li v-for="(customitem, index) in donetodos">
              <customcheckbox v-bind:customitem="customitem" @actionToggleTodo1="actionToggleTodo"></customcheckbox>
            </li>
          </ol>
        </div>
      </div>
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
