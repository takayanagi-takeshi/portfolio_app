import Vue from 'vue'
import AdminPage from './assets/views/AdminPage.vue'
import Router from 'vue-router'
import TopPage from './components/TopPage.vue'
import Test from './assets/views/Test.vue'

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
      component: TopPage
    },

    {
      path: '/admin',
      name: 'routing',
      component: AdminPage
    },

    {
      path: '/test',
      name: 'test',
      component: Test
    }

  ]
})