import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Hello from '@/pages/Hello'
import LearnComponent from '@/pages/LearnComponent'
import Count from '@/pages/Count'
import C2F from '@/pages/C2F'
import TodoList from '@/pages/TodoList'
import Login from '@/pages/Login'
import ShoppingCart from '@/pages/ShoppingCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: { requiresAuth: true } // 需驗證
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello,
      meta: { requiresAuth: true } // 需驗證
    },
    {
      path: '/C2F',
      name: 'C2F',
      component: C2F,
      meta: { requiresAuth: true } // 需驗證
    },
    {
      path: '/LearnComponent',
      name: 'LearnComponent',
      component: LearnComponent,
      meta: { requiresAuth: true } // 需驗證
    },
    {
      path: '/Count',
      name: 'Count',
      component: Count,
      meta: { requiresAuth: true } // 需驗證
    },
    {
      path: '/TodoList',
      name: 'TodoList',
      component: TodoList,
      meta: { requiresAuth: true } // 需驗證
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: { requiresAuth: false } // 不需驗證
    },
    {
      path: '/ShoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart,
      meta: { requiresAuth: true } // 不需驗證
    },
    {
      path: '/*',
      redirect: '/Login'
    }
  ]
})
