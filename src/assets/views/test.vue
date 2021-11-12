<template>
  <div>
    <router-link to="/">Home</router-link>
    <p class="text-green-600 text-center">閲覧ページ</p>
    <button class="btn">click</button>


  <div class="hello">
    <h2>ボタンテスト</h2>
    <div class="ma-auto">
      
      <div row v-for="input in inputList" :key="input.id">
        <div>
          <!-- <div v-model="input.text" ></div>
                  <div> -->
          <button  @click="removeInput(input.id)">
              <div >remove</div>
          </button>
                  </div>
      </div>
              <div>
      <div  @click="addInput()">
          <button>add</button>
      </div>
              </div>
    </div>
  </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      inputList: [{id: 0, text: ''}]
    }
  },
  methods: {
    addInput () {
      let inputList = this.inputList
      inputList.push({
        id: inputList.length,
        text: ''
      })
    },
    removeInput (id) {
      let inputList = this.inputList
      inputList = inputList.filter((input) => { return input.id !== id })
      let newInputList = []
      for (let i = 0; i < inputList.length; i++) {
        newInputList.push({
          id: i,
          text: inputList[i].text
        })
        console.log(i)
      }
      this.inputList = newInputList
    }
  }
}
</script>
