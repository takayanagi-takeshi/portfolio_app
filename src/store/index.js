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
    users:[
      {name: 'John', email:'john@example.com', age:22},
      {name: 'Merry', email: 'merry@facebook.com',age:33},
      {name: 'Ken', email: 'ken@amazon.com',age:29}
      ],

    multiSelect: 'select1',
    multiSelectOptions: [
      { label: 'セレクト1', value: 'select1' },
      { label: 'セレクト2', value: 'select2' },
      { label: 'セレクト3', value: 'select3' },
      { label: 'セレクト4', value: 'select4' },
      { label: 'セレクト5', value: 'select5' }
    ]
  }
  
})
// export default store
