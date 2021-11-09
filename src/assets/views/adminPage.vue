<template>
  <div>
    <div >
      <router-link to="/">Home</router-link>
      <h1>{{$store.state.message}}</h1>
      <corender/>
      <!-- <corender v-bind:users="users"></corender> -->


    </div>
  </div>
</template>

<script>
// import Corender from '..../src/components/corender.vue'
import Corender from '@/components/Corender.vue'

export default {
  components: { Corender },
  name: 'Routing',
  data: function() {
    return {
      // users:[
      //   {name: 'John', email:'john@example.com', age:22},
      //   {name: 'Merry', email: 'merry@facebook.com',age:33},
      //   {name: 'Ken', email: 'ken@amazon.com',age:29}
      //   ]
      message: 'hehehehehehe'
      }
    },
}

</script>

<style>

</style>
