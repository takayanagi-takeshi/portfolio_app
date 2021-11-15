<template>
  <div id="appp">
    <router-link to="/">Home</router-link>
    <p class="text-green-600 text-center">テストてすとページ</p>

  <table>
  <tbody>
  <tr v-for="(content, index) in table" id="box" :key="index.id">
    <td class="name">{{content.tag_name}}</td>
    <td>
      <!-- <input type="text" name="" placeholder="ー" v-model="content.text"> -->
    </td>
    <div class="time">
    <td>
      <select class="box" v-model="content.select">
        <option v-for="option in countOptions" v-bind:value="option.value" :key="option.id">
          {{option.text}}
        </option>
      </select>
      
    </td>
       <td>
      <select class="box" v-model="content.select">
        <option v-for="option1 in countOptions1" v-bind:value="option1.value" :key="option1.id">
          {{option1.text}}
        </option>
      </select>

      
    </td>
    </div>
  </tr>
</tbody>
</table>
  </div>
  
</template>

<script>
export default {

  data: function() {
    return{
    countOptions: [
      { text: '○', value: 'ー' },
      { text: '７', value: 'AAA' },
      { text: '8', value: '' },
      { text: '9', value: '' }
    ],
        countOptions1: [
      { text: 'ー', value: 'ー' },
      { text: 'D', value: '' },
      { text: 'F', value: '' },
      { text: 'G', value: '' }
    ],
    table: [
      { tag_id: '1', tag_name: 'あああ', text: '', select: ''},
      { tag_id: '2', tag_name: 'いいい', text: '', select: ''},
      { tag_id: '3', tag_name: 'ううう', text: '', select: ''},
      { tag_id: '4', tag_name: 'えええ', text: '', select: ''}
    ],
    }
  }
}
</script>
<style>
.name {
  height: 70px;
}
.time {
  display: flex;
  flex-direction: column;
  font-size: 20px;
  height: 30px;
}
.box {
  height: 30px;
}
</style>