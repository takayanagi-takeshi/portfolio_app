<template>
  <div>
    <div id="app">
      <router-link to="/">Home</router-link>
      <!-- <h1>{{$store.state.message}}</h1> -->
      <Corender></Corender>
      <!-- <corender v-bind:users="users"></corender> -->


    </div>
  </div>
</template>

<script>
import Corender from '@/components/Corender.vue'

export default {

  name: '',
    components: { 
    Corender
    },
    
}

</script>

<style>

</style>
