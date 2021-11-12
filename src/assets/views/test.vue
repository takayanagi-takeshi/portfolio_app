<template>
  <div>
    <router-link to="/">Home</router-link>
    <p class="text-green-600 text-center">閲覧ページ</p>
    <button class="btn">click</button>


    <div>
    <h1 v-if="items[0]">大阪府の{{items[0].datetime}}<h1>
      </div>
          </div>
</template>

<script>
// import axios from 'axios'
export default {
  data()  {
    return {
    // items: [],
  }
  },

    created(){
      // axios.get(
      //   "/api/v1/datetime.json"
      // )
      // .then(response => {
      //   // console.log(response);
      //   // commit('setCovidData',response.data.itemList)
      //   this.items = response.data.itemList
      // })
    },
      computed: {
    items() {
      return this.$store.state.items
    },
    count() {
      return this.$store.state.count
    },
    mounted() {
      this.$store.dispatch('getCovidData');
    },
  },

}
</script>
