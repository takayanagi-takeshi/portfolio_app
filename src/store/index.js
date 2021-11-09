import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// const store = new Vuex.Store({
//   state: {
//   },
// mutations: {
//   }
// })

// store.commit('increment')

export default new Vuex.Store({
  state: {
    message: 'index.jsからのHello Hello'
  },
})