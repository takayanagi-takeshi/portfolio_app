<template>
  <div id="appp">
    <router-link to="/">Home</router-link>
    <p class="text-green-600 text-center">テストてすとページ</p>

  <!-- <table>
  <tbody>
    <tr>
      <th></th>
      <th v-for="(day, index) in day"
            v-bind:key="index">
          {{day.id}}
        </th>
    </tr>
    <tr v-for="(content, index) in table" id="box" :key="index.id">
      <td class="name">{{content.tag_name}}</td> -->
      <!-- <td>
        <input type="text" name="" placeholder="ー" v-model="content.text">
      </td> -->
      

                      <!-- <th class="day" v-for="id in day" :key="id"> -->
    <!-- <div class="time">
      <div>
        <select class="box" v-model="content.select">
          <option v-for="option in oneday.countOptions" v-bind:value="option.value" :key="option.id">
            {{option.text}}
          </option>
        </select>
      </div>
      
      <div>
        <select class="box" v-model="content.select1">
          <option v-for="option1 in oneday.countOptions1" v-bind:value="option1.value" :key="option1.id">
            {{option1.text}}
          </option>
        </select>
      </div> -->
    <!-- </div> -->
    <!-- </div> -->
    <!-- </div> -->
    <!-- </th> -->
  <!-- </tr>
  </tbody>
  </table> -->

  

  </div>
  
</template>

<script>
export default {

  data: function() {
    return{
    oneday:{
      countOptions: [
        { text: '', value: '' },
        { text: '◯', value: '11' },
        { text: '７', value: '7' },
        { text: '8', value: '8' },
        { text: '9', value: '9' }
      ],
      countOptions1: [
        { text: '', value: '' },
        { text: '17', value: '17' },
        { text: '18', value: '18' },
        { text: '19', value: '19' },
        { text: '20', value: '20' }
      ],
    },
    sample: [
      {
        id: 1,
        name: '創造さん',
        shift: [
          {
            date: '2021-11-1',
            value: [10, 11]
          },
          {
            date: '2021-11-2',
            value: [11, 21]
          },
          {
            date: '2021-11-7',
            value: [8, 12]
          }        ]
      }
    ],
    table: [
      { tag_id: '1', tag_name: 'あああ', text: '', select: '',select1: ''},
      { tag_id: '2', tag_name: 'いいい', text: '', select: '',select1: ''},
      { tag_id: '3', tag_name: 'ううう', text: '', select: '',select1: ''},
      { tag_id: '4', tag_name: 'えええ', text: '', select: '',select1: ''}
    ],
    day: [
      {id:'1'},
      {id:'2'},
      {id:'3'},
      {id:'4'},
      {id:'5'},
      {id:'6'}
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

.day{
  display: flex;
}
</style>