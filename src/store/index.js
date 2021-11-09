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
    message: 'index.jsからのHello Hello',


      weeks: ["日", "月", "火", "水", "木", "金", "土"],
      todays: new Date(),
      now_year: new Date().getFullYear(),
      now_month: new Date().getMonth() + 1
    
  }
  
})
// export default store