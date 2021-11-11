<template>
<div>
  <ul>
    <li v-for="user in users"  v-bind:key="user.name">{{ user.name }} ({{ user.email }})</li>
  </ul>
  <div class="month">
    <button type="button" @click="monthMinus" class="border">⇦</button>
    <div class="now_year">{{now_year}}年</div>
    <div class="now_month">{{now_month}}月</div>
    <button type="button" @click="monthPlus">⇨</button>
  </div>



  <div class="calemdar">
    <div class="calendar-day">
      <div  class="c-day" v-for="(day, index) in calendarData" :key="index">
        {{day.day}}
      </div>
    </div>
    <div class="calendar-week">
      <div  class="c-day" v-for="(day, index) in calendarData" :key="index">
      {{ dayList[day.week] }}
      </div>
    </div>
  </div>

  <!-- <select v-model="selected">
  <option disabled value="">名前を選択</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select> -->
<div class="selectbox" v-for="box in nameSelectboxList" :key="box.id">
  <div class="name">
    <select class="selectbox" v-model="box.selected">
      <option class="selectbox" v-for="s in $store.state.multiSelectOptions" :value="s.value" :key="s.id">
        {{s.label}}
      </option>
    </select>
  </div>
</div>
<button class="editbox" type="button" @click="addBox">追加</button>
<button class="editbox" type="button" @click="removeBox">削除</button>
      <!-- <div class="name1">
        <select v-model="$store.state.multiSelect">
      <option v-for="q in $store.state.multiSelectOptions" :value="q.value" :key="q">
        {{q.label}}
      </option>
    </select>
  </div> -->


</div>
</template>

<script>
export default {


      data() {
    return {
      dayList: ["日", "月", "火", "水", "木", "金", "土"],
      todays: new Date(),
      now_year: new Date().getFullYear(),
      now_month: new Date().getMonth()+1,
      // weeks: new Date(),

      nameSelectboxList: [
        {
          id: 0,
          selected: ''
        },
        {
          id: 1,
          selected: ''

        },
        {
          id: 2,
          selected: ''

        }
      ]

      }
    },
  computed: {

    // ----users---データをvuexで取り出し
    users: function() {
      return this.$store.state.users
    },
    // ーーーーーーーーーーーーーーーーーーー

    getTsuki() {
      return this.now_month
    },
    getNen() {
      return this.now_year
    },
    getMonthFirstDayweek() {
      return new Date(this.getNen, this.getTsuki -1, 0).getDay()
    },
    // getBeforeMonthLastDay() {
    //   return new Date(this.getNen, this.getTsuki - 1, 0).getDate()
    // },
    getMonthLastDay() {
      return new Date(this.getNen, this.getTsuki, 0).getDate()
    },

    calendarData() {
      let result = []
      // if(this.getMonthFirstDayweek != 0) {
      // for (let i=this.getBeforeMonthLastDay-(this.getMonthFirstDayweek-1); i <= this.getBeforeMonthLastDay; i++) {
      //   result.push(i)
      //   }
      // }
      for(let i = 1; i <= this.getMonthLastDay; i++) {
        const w = new Date(this.now_year, this.now_month - 1, i).getDay()
        result.push({
          day: i,
          week: w
        })
      }
      // let j = 1
      // for(let i=result.length; i < 31; i++) {
      //   result.push(j)
      //   j++
      // }
      return result
    },

  },
  created() {
      const date = new Date();
      this.day = date.getDay();
  },
  methods: {
    monthPlus() {
      if(this.now_month == 12) {
        this.now_month = 1
        this.now_year++
      } else {
        this.now_month++
      }
    },
    monthMinus() {
      if(this.now_month == 1) {
        this.now_month = 12
        this.now_year--
      } else {
        this.now_month--
      }
    },

    addBox() {
      this.nameSelectboxList.push({ id: this.nameSelectboxList.length })
      this.nameSelectboxList.splice()
    },
    removeBox() {
      // let nameSelectboxList = this.nameSelectboxList.filter((input) => { return input.id !== id })
      // let newNameSelectboxList = []
      // for (let i = 0; i < nameSelectboxList.length; i++) {
      //   newNameSelectboxList.push({
      //     id: i,
      //     selected: nameSelectboxList[i].selected
      //   })
      //   console.log(i)
      // }
      // this.nameSelectboxList = newNameSelectboxList
      // this.nameSelectboxList.splice()
            // this.nameSelectboxList.push({ id: this.nameSelectboxList.length })
      this.nameSelectboxList.splice(this.nameSelectboxList, 1)
    }
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.calemdar {
  margin-left: 90px;
  /* position: absolute; */
}

.calendar-day {
  display: flex;
  width: 300%;
  flex-wrap: wrap;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

}

.calendar-week {
  display: flex;
  width: 300%;
  flex-wrap: wrap;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

}

.c-day {
  display: flex;
  justify-content: center;
  border: solid 1px;
  width: 26px;
  height: 25px;
  white-space: nowrap;  
}

/* .c-week {
  font-size: 30px;
  width: 13.8%;
  border: solid 1px;
  height: 60px;
  padding-top: 10px;
} */

.month {
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  width: 200px;
}

.now_year {
  margin-top: 5px;
  width: 70px;
}

.now_month {
  width: 60px;
  font-size: 25px;
}

.name {
  margin-top: 5px;
  margin-bottom: 10px;
  /* display: flex; */
  justify-content: center;
  /* border: solid 1px; */
  width: 89px;
}

.name1 {
  margin-top: 29px;
  display: flex;
  justify-content: center;
  /* border: solid 1px; */
  width: 89px;
}

.selectbox {
  height: 30px;
}

.editbox {
  margin-top: 3px;
}
</style>