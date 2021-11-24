import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(Vuex, VueAxios, axios);

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

    // multiSelect: 'select1',
    // multiSelectOptions: [
    //   { label: 'セレクト1', value: 'select1' },
    //   { label: 'セレクト2', value: 'select2' },
    //   { label: 'セレクト3', value: 'select3' },
    //   { label: 'セレクト4', value: 'select4' },
    //   { label: 'セレクト5', value: 'select5' },
    //   { label: '', value: '' }
    // ],

  // actions: {//非同期処理はactionに書く
  //   getCovidData: function() { //{commit}
  //     return axios.get("/calendar/api/v3/reference#Channels")
  //     .then(response => {
  //       console.log(response);
  //       // commit('setCovidData',response.data.itemList)
  //     })
  //   }
  // },
  items: [],
  },
  mutations: {
    setCovidData(state, data) {
      state.items = data
    }
  },
  actions: {
    getCovidData: function({commit}) {
      return axios.get('/api/v1/date.json')
      .then(response => {
        commit('setCovidData',response.data)
      })
    }
  }

  
})
// export default store
