import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Hello from '@/pages/Hello'
import LearnComponent from '@/pages/LearnComponent'
import Count from '@/pages/Count'
import C2F from '@/pages/C2F'
import TodoList from '@/pages/TodoList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/C2F',
      name: 'C2F',
      component: C2F
    },
    {
      path: '/LearnComponent',
      name: 'LearnComponent',
      component: LearnComponent
    },
    {
      path: '/Count',
      name: 'Count',
      component: Count
    },
    {
      path: '/TodoList',
      name: 'TodoList',
      component: TodoList
    }
  ]
})
