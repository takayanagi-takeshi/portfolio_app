<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <topPage msg="Welcome to Your Vue.js App"/> -->
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
  data: function(){
    return {
      message : 'Hello Vuex'
    }
  },
  //   components: {
  //     adminPage  
  // }
}

</script>

<style>

</style>
