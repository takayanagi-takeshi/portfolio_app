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
  <div class="calendar">
    <!-- <div  class="c-week" v-for="week in weeks" :key="week">
      {{week}}
    </div> -->
  </div>
  <div class="calendar">
    <div  class="c-day" v-for="(day, index) in calendarData" :key="index">
      {{day}}
    </div>
  </div>
</div>
</template>

<script>
export default {


      data() {
    return {
      // dayList: ["日", "月", "火", "水", "木", "金", "土"],
      todays: new Date(),
      now_year: new Date().getFullYear(),
      now_month: new Date().getMonth()+1,
      // weeks: new Date(),
    }
  },
  computed: {
    // weeks() {
    //   return this.dayList[this.now_month]
    // },
    users: function() {
      return this.$store.state.users
    },
    getTsuki() {
      return this.now_month
    },
    getNen() {
      return this.now_year
    },
    getMonthFirstDayweek() {
      return new Date(this.getNen, this.getTsuki - 1, 1).getDay()
    },
    // getBeforeMonthLastDay() {
    //   return new Date(this.getNen, this.getTsuki - 1, 0).getDate()
    // },
    getMonthLastDay() {
      return new Date(this.getNen, this.getTsuki, 0).getDate()
    },

    calendarData() {
      let result = []
      if(this.getMonthFirstDayweek != 0) {
      for (let i=this.getBeforeMonthLastDay-(this.getMonthFirstDayweek-1); i <= this.getBeforeMonthLastDay; i++) {
        result.push(i)
        }
      }
      for(let i = 1; i <= this.getMonthLastDay; i++) {
        result.push(i)
      }
      let j = 1
      for(let i=result.length; i < 31; i++) {
        result.push(j)
        j++
      }
      return result
    },
    // weekData() {
    //   let resultWeek = []
    //   if(this.getMonthFirstDayweek != 0) {
    //   for (let a=this.getBeforeMonthLastDay-(this.getMonthFirstDayweek-1); a <= this.getBeforeMonthLastDay; a++) {
    //     resultWeek.push(a)
    //     }
    //   }
    //   for(let a = 1; a <= this.getMonthLastDay; a++) {
    //     resultWeek.push(a)
    //   }
    //   let s = 1
    //   for(let s=result.length; s < 31; s++) {
    //     resultWeek.push(s)
    //     s++
    //   }
    //   return resultWeek
    // }

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
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.calendar {
  display: flex;
  width: 150%;
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
</style>