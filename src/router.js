import Vue from 'vue'
import adminPage from './assets/views/adminPage.vue'
import Router from 'vue-router'
// import Routing from './views/Routing.vue'
import topPage from './components/topPage.vue'
import test from './assets/views/test.vue'

Vue.use(Router)

export default new Router({
  // デフォルトの挙動では URL に `#` が含まれる.
  // URL から hash を取り除くには `mode:history` を指定する
  mode: 'history',                  
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'top',
      component: topPage
    },

    {
      path: '/routing',
      name: 'routing',
      component: adminPage
    },

    {
      path: '/test',
      name: 'test',
      component: test
    }

  ]
})