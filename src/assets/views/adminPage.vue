<template>
  <div>
    <div id="app">
      <router-link to="/">Home</router-link>
      <button class="siguout" @click="signout" >ログアウト</button>
      <!-- <h1>{{$store.state.message}}</h1> -->
      <Corender></Corender>
      <!-- <corender v-bind:users="users"></corender> -->


    </div>
  </div>
</template>

<script>
import Corender from '@/components/Corender.vue'
import { getAuth, signOut } from 'firebase/auth'

export default {

  name: '',
    components: { 
    Corender
    },
    
    methods: {
    signout () {
    const auth = getAuth()
    signOut(auth).then(() => {
      // Sign-out successful.
      this.$router.push({ path: "/" })
      alert('サインアウトしました。')
      console.log('サインアウト成功')
    }).catch((error) => {
      // An error happened.
      console.error(error)
      console.log('サインアウト失敗')
    })
  },
  }
}



</script>

<style>
.siguout {
  display: block;
  margin-left: auto;
  width: 40%;
  margin-bottom: 20px;
  padding: 5px;
  background-color: rgba(237, 100, 130, 0.548);
  font-size: 15px;
  border-radius: 100px;
  position: relative;
  bottom: 20px;
  right: 10px;
  display: flex;
  justify-content: space-around;
}

@media screen and (min-width:768px)  {

.siguout {
  display: block;
  margin-left: auto;
  width: 30%;
  margin-bottom: 20px;
  padding: 5px;
  background-color: rgba(237, 100, 130, 0.548);
  font-size: 15px;
  border-radius: 100px;
  position: relative;
  bottom: 20px;
  right: 10px;
}
}


</style>
