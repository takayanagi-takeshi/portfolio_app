
<template>
  <div id="app">
  <div>
    <router-link to="/">Home</router-link>
    <p class="text-green-600 text-center">閲覧ページ</p>
    <button class="btn">click</button>
</div>

<div>
   <span class="btn-modal-close" @click="close($event)"></span>

   <div class="calendar-title">
     <span class="btn-monthMove prev fa fa-angle-left" @click="movePrevMonth"></span>
     {{currentYear+"/"+currentMonth}}
     <span class="btn-monthMove next fa fa-angle-right" @click="moveNextMonth"></span>
   </div>

   <div class="calendar-body">
     <div class="calendar-body__item">
       <div v-for="day in weeks" class="day">{{day}}</div>
     </div>
     <div class="calendar-body__item">
       <div v-for="day in calendarMake" :value="day">
         <span :class="chekcSelectedDay(day)">{{day}}</span>
       </div>
     </div>
   </div>
</div>
  </div>
</template>

<script>
new Vue({
	el:"#app",
  data:{
    today:"",
    selectedDay:"",
    currentYear:0,
    currentMonth:0,
    currentDate:0,
    weeks:["月","火","水","木","金","土","日"],
    calendar:[],
    holidays:[]
  },
  created(){
    const date  = new Date();
    [this.currentYear,  this.currentMonth, this.currentDate] = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
    this.today = this.selectedDay = `${this.currentYear}-${('0' + this.currentMonth).slice(-2)}-${this.currentDate}`;
  
  },
  methods:{
    chekcSelectedDay(day){
      return{
        'selectedDay':`${this.currentYear}-${('0' + this.currentMonth).slice(-2)}-${('0' + day).slice(-2)}` == this.selectedDay
      }
    },
    movePrevMonth(){
      this.currentMonth = this.currentMonth != 1 ? this.currentMonth - 1 : 12;
      this.currentYear = this.currentMonth != 12 ? this.currentYear : this.currentYear - 1;
    },
    moveNextMonth(){
      this.currentMonth = this.currentMonth != 12 ? this.currentMonth + 1 : 1;
      this.currentYear = this.currentMonth != 1 ? this.currentYear : this.currentYear + 1;
    },
  },
  computed:{
    calendarMake(){
      const firstday = new Date(this.currentYear, this.currentMonth - 1, 1).getDay();
      const lastdate = new Date(this.currentYear, this.currentMonth, 0).getDate();
      const necessarySpace = firstday == 0 ? 6 : firstday - 1;
      const list = [[...Array(necessarySpace)].map(i=>" "), [...Array(lastdate)].map((_, i) => i+1)];
      const week = list.reduce((pre,current) => {pre.push(...current);return pre},[]);
      return week;
    },
  }
});
</script>

<style>
.calendar-title{
  text-align: center;
}
.calendar-body{
    width:100%;
    table-layout:fixed;
    margin-bottom: 20px;
    color: #565656;
    font-size: 1.1rem;
    text-align: center;
    &__item{
      display: flex;
      flex-wrap: wrap;
      div{
        box-sizing: border-box;
        width: 14.28%;
        height: 48px;
        min-height: 48px;
        padding: 12px 0;
        text-align: center;
        cursor:pointer;
        font-size: 12px;
        &:nth-of-type(7n-1){
          color: #5a66a8;
        }
        &:nth-of-type(7n){
          color:#e29a9b;
        }
        span{
          vertical-align: -4px;
        }
        .selectedDay{
          display:inline-block;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: #f00;
          color: #fff; 
          line-height: 24px;     
        }
        &.holidays{
           color: #e29a9b;
        }
      }
    }
 
  }
</style>