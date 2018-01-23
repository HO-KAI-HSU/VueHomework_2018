<template>
  <li>
    <div v-if="!IsEditMode">
      <label>
        <input type="checkbox" v-bind:checked="item.done" @change="actionToggleTodo( item.key )">
        {{ item.content }}
      </label>
      <button @click="showEditMode">修改</button>
      <button @click="actionDeleteTodo( item.key )">刪除</button>
    </div> 

    <div v-if="IsEditMode">
      <label>
        <input class="edit-input" v-focus="IsEditMode" placeholder="edit Todo..." v-bind:value="item.content" @keyup.enter="actionEdit" @blur="cancelEdit" @keyup.esc="cancelEdit">
      </label>
    </div> 
  </li>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: ['item'],
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
        console.log('userChange', this.item.key, userChange);
        this.actionUpdateTodo({
            key:this.item.key,
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
