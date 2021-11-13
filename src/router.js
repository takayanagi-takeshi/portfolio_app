import Vue from 'vue'
import AdminPage from './assets/views/AdminPage.vue'
import Router from 'vue-router'
import TopPage from './assets/views/TopPage.vue'
import ApiData from './components/ApiData.vue'
import DemoTest from './components/DemoTest.vue'

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
      path: '/apidata',
      name: 'apidata',
      component: ApiData
    },

    {
      path: '/demotest',
      name: 'demotest',
      component: DemoTest
    }

  ]
})