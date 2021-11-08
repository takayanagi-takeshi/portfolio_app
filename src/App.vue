<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <topPage msg="Welcome to Your Vue.js App"/> -->
    <router-link to="/">Home</router-link>
    <router-link to="/routing">AdminPage</router-link>
    <router-link to="/test">TestPage</router-link>
    <router-view />
  </div>
</template>

<script>
// import topPage from './components/topPage.vue'

// export default {
//   name: 'App',
//   components: {
//     topPage
//   }
// }
</script>

<style>

</style>
