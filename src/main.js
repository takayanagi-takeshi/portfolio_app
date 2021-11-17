import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import store from './store'

import '@/assets/css/tailwind.css'

Vue.use(Vuex)
Vue.config.productionTip = false

// store.commit('increment')

// -----------------        firebase   -----------------------------------------
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvMBUCIflSACAIwZxXnPcRChFvzNV_EQc",
  authDomain: "shiftapp-98541.firebaseapp.com",
  projectId: "shiftapp-98541",
  storageBucket: "shiftapp-98541.appspot.com",
  messagingSenderId: "962110940479",
  appId: "1:962110940479:web:d05ed7d61ba22ed0689f8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = new getAuth();
// -----------------        firebase   -----------------------------------------

new Vue({
  router,
  store,
  app,
  render: h => h(App),
}).$mount('#app')