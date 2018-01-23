<template>
  <li>
    <div v-if="!IsEditMode">
      <customcheckbox v-bind:customitem="todoitem" @actionToggleTodo1="actionToggleTodo"></customcheckbox>
      <button @click="showEditMode">修改</button>
      <button @click="actionDeleteTodo( todoitem.key )">刪除</button>
    </div> 

    <div v-if="IsEditMode">
      <label>
        <input class="edit-input" v-focus="IsEditMode" placeholder="edit Todo..." v-bind:value="todoitem.content" @keyup.enter="actionEdit" @blur="cancelEdit" @keyup.esc="cancelEdit">
      </label>
    </div> 
  </li>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import customcheckbox from './customcheckbox'
export default {
  components: {
    customcheckbox
  },
  props: ['todoitem'],
  data () {
    return {
      IsEditMode: false           
    }
  },

  //directives 主要切換 focus 模式之後 focus input 的功能，input 的 value 為 IsEditMode，$nextTick 主要是，當上個動作完成之後，才會執行裡面包含的程式。
  directives: {
    focus (el, { value }, { context }) {
      if (value) {
        context.$nextTick(() => {
          console.log("aaaa");
          el.focus();
        })
      }
    }
  },
  methods: {
    ...mapActions([
        'actionDeleteTodo',
        'actionUpdateTodo',
        'actionToggleTodo'
    ]),
    showEditMode() {
        this.IsEditMode = true;
    },
    actionEdit(e) {
        const userChange = e.target.value.trim();
        console.log('userChange', this.todoitem.key, userChange);
        this.actionUpdateTodo({
            key: this.todoitem.key,
            content: userChange
        })
        this.IsEditMode = false;
    },
    cancelEdit(e) {
        this.IsEditMode = false;
    }
  }
}
</script>
