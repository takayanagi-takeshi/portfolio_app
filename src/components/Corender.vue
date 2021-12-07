<template>
  <div>
    <!-- <ul>
      <li v-for="user in users" v-bind:key="user.name">
        {{ user.name }} ({{ user.email }})
      </li>
    </ul> -->

    <!--------------------------------------- ↓↓カレンダー機能 -------------------------------->

    <header>
      <!--- 年・月を選択 ---->
      <div class="month">
        <button type="button" @click="monthMinus" class="border">⇦</button>
        <div class="now_year">{{ now_year }}年</div>
        <div class="now_month">{{ now_month }}月</div>
        <button type="button" @click="monthPlus">⇨</button>
      </div>
      <!-- --------------- -->

      <!--------------------------------------- ↓↓シフト入力機能 -------------------------------->
      <div>
        <input class="select-carender" type="text" v-model="inputMonth" />月
        <input class="select-carender" type="text" v-model="inputDay" />日
        <!-- <div v-model="inputName"> -->
        氏名<select class="select-carender1" v-model="inputName">
          <option
            class="selectbox1"
            v-for="s in sample"
            :value="s.id"
            :key="s.id"
          >
            {{ s.name }}
          </option>
        </select>
        <!-- </div> -->
      </div>

      <div>
        出勤<select class="select-carender" v-model="sample.shift">
          <option
            class="selectbox"
            v-for="a in oneday.countOptions"
            :value="a.id"
            :key="a.id"
          >
            {{ a.text }}
          </option>
        </select>
        退勤<select class="select-carender" v-model="sample.shift">
          <option
            class="selectbox"
            v-for="a in oneday.countOptions1"
            :value="a.id"
            :key="a.id"
          >
            {{ a.text }}
          </option>
        </select>
        <span
          ><button class="add-carender" @click="addItem()">保 存</button></span
        >
        <!-- <span><button class="add-carender1">削除</button></span> -->
      </div>
      <!--------------------------------------- ↑↑シフト入力機能 -------------------------------->
    </header>

    <div class="flexbox">
      <!-- ----------------------------↓↓セレクトボックス表示 --------------------------->
      <div class="shift">
        <div class="shifts"></div>
        <div
          class="shifts"
          v-for="(box, index) in nameSelectboxList"
          :key="box.id"
        >
          <select class="selectbox" v-model="nameSelectboxList[index].id">
            <option
              class="selectbox"
              v-for="s in sample"
              :value="s.id"
              :key="s.id"
            >
              {{ s.name }}
            </option>
          </select>
        </div>
      </div>
      <!-- ----------------------------↑↑セレクトボックス表示 --------------------------->

      <!-- --日と曜日を表示 -->
      <!-- <div class="calendar">
      <div class="calendar-day">  -->
      <div class="a">
        <div
          class="time-data"
          v-for="(day, index) in calendarData"
          :class="fontColor(day.week)"
          :key="index"
        >
          <span class="days">
            {{ day.day }}<br />
            {{ dayList[day.week] }}
          </span>

          <div
            class="shifts"
            v-for="(box, index) in nameSelectboxList"
            :key="box.id"
          >
            <div
              v-if="
                requestUserShift(
                  requestUserData(nameSelectboxList[index].id)[0].shift,
                  day.day
                )[0]
              "
              @click="btnClicked(day.day, index)"
            >
              <div class="start_time" @click="btnClicked(day.day, index)">
                {{
                  requestUserShift(
                    requestUserData(nameSelectboxList[index].id)[0].shift,
                    day.day
                  )[0].start_time
                }}
              </div>
              <div class="end_time" @click="btnClicked(day.day, index)">
                {{
                  requestUserShift(
                    requestUserData(nameSelectboxList[index].id)[0].shift,
                    day.day
                  )[0].end_time
                }}
              </div>
            </div>
            <div v-else>
              &nbsp; <br />
              &nbsp;
            </div>
          </div>

          <!-- <div>
            <select v-model="sample.shift.start_time">
              <option
                class="selectbox"
                v-for="a in oneday.countOptions"
                :value="a.id"
                :key="a.id"
              >
                {{ a.text }} -->
          <!-- </option>
            </select> -->
          <!-- <select v-model="sample.shift.end_time">
            <option class="selectbox" v-for="a in oneday.countOptions1" :value="a.id" :key="a.id">
      {{a.text}}
      </option>
          </select> -->
          <!-- </div> -->

          <!-- 
        <div v-if="requestUserShift(requestUserData(nameSelectboxList[1].id)[0].shift, day.day)[0]">
          {{ requestUserShift(requestUserData(nameSelectboxList[1].id)[0].shift, day.day)[0].start_time }}<br>
          {{ requestUserShift(requestUserData(nameSelectboxList[1].id)[0].shift, day.day)[0].end_time }}
        </div>
                <div v-else> &nbsp; <br> &nbsp; </div>

        <div v-if="requestUserShift(requestUserData(nameSelectboxList[2].id)[0].shift, day.day)[0]">
          {{ requestUserShift(requestUserData(nameSelectboxList[2].id)[0].shift, day.day)[0].start_time }}<br>
          {{ requestUserShift(requestUserData(nameSelectboxList[2].id)[0].shift, day.day)[0].end_time }}
        </div>
                <div v-else> &nbsp; <br> &nbsp; </div> -->
          <!-- </div>
          </div> -->
          <!--------------------------------------- ↑↑カレンダー機能 -------------------------------->
        </div>
      </div>
    </div>
  </div>
</template>



          <!--------------------------------------- ↓↓データ -------------------------------->
          <!--------------------------------------- ↓↓データ -------------------------------->
          <!--------------------------------------- ↓↓データ -------------------------------->
<script>
export default {
  data() {
    return {
      dayList: ["日", "月", "火", "水", "木", "金", "土"],
      todays: new Date(),
      now_year: new Date().getFullYear(),
      now_month: new Date().getMonth() + 1,
      // weeks: new Date(),
      eventObject: "",
      box_selected: 1,
      oneday: {
        countOptions: [
          { text: "", value: "" },
          { text: "11", value: "11" },
          { text: "７", value: "7" },
          { text: "8", value: "8" },
          { text: "9", value: "9" },
        ],
        countOptions1: [
          { text: "", value: "" },
          { text: "17", value: "17" },
          { text: "18", value: "18" },
          { text: "19", value: "19" },
          { text: "20", value: "20" },
        ],
      },
      nameSelectboxList: [
        {
          id: 1,
          selected: "",
        },
        {
          id: 2,
          selected: "",
        },
        {
          id: 3,
          selected: "",
        },
        {
          id: 4,
          selected: "",
        },
        {
          id: 5,
          selected: "",
        },
      ],
      // selectedFruits: '',
      // optionFruits: [
      //     { id: 1, name: 'りんご' },
      //     { id: 2, name: 'みかん' },
      //     { id: 3, name: 'ぶどう' }
      // ],
      sample: [
        {
          id: 1,
          name: "創造さん",
          shift: [
            {
              date: "2021-11-4",
              start_time: 12,
              end_time: 20,
            },
            {
              date: "2021-11-2",
              start_time: 10,
              end_time: 12,
            },
            {
              date: "2021-11-7",
              start_time: 12,
              end_time: 13,
            },
            {
              date: "2021-11-25",
              start_time: 12,
              end_time: 13,
            },
          ],
        },
        {
          id: 2,
          name: "リカレントさん",
          shift: [
            {
              date: "2021-11-13",
              start_time: 10,
              end_time: 18,
            },
            {
              date: "2021-11-22",
              start_time: 12,
              end_time: 21,
            },
            {
              date: "2021-11-6",
              start_time: 8,
              end_time: 12,
            },
          ],
        },
        {
          id: 3,
          name: "qqqqqqqqさん",
          shift: [
            {
              date: "2021-11-16",
              start_time: 10,
              end_time: 18,
            },
            {
              date: "2021-11-22",
              start_time: 12,
              end_time: 21,
            },
            {
              date: "2021-11-28",
              start_time: 8,
              end_time: 12,
            },
          ],
        },
        {
          id: 4,
          name: "4aさん",
          shift: [],
        },
        {
          id: 5,
          name: "",
          shift: [],
        },
      ],
      inputMonth: new Date().getMonth() + 1,
      inputDay: "",
      inputName: "",
    };
  },
  // <!--------------------------------------- ↑↑データ -------------------------------->
  // <!--------------------------------------- ↑↑データ -------------------------------->
  // <!--------------------------------------- ↑↑データ -------------------------------->

  computed: {
    // ----usersデータをvuexで取り出し---
    users: function () {
      return this.$store.state.users;
    },
    // ----usersデータをvuexで取り出し---

    // -----------------------------↓↓年・月・曜日を取得-------------------------------
    getTsuki() {
      return this.now_month;
    },
    getNen() {
      return this.now_year;
    },
    getMonthFirstDayweek() {
      return new Date(this.getNen, this.getTsuki - 1, 0).getDay();
    },
    // getBeforeMonthLastDay() {
    //   return new Date(this.getNen, this.getTsuki - 1, 0).getDate()
    // },
    getMonthLastDay() {
      return new Date(this.getNen, this.getTsuki, 0).getDate();
    },

    calendarData() {
      let result = [];
      // if(this.getMonthFirstDayweek != 0) {
      // for (let i=this.getBeforeMonthLastDay-(this.getMonthFirstDayweek-1); i <= this.getBeforeMonthLastDay; i++) {
      //   result.push(i)
      //   }
      // }
      for (let i = 1; i <= this.getMonthLastDay; i++) {
        const w = new Date(this.now_year, this.now_month - 1, i).getDay();
        result.push({
          day: i,
          week: w,
          shifttime: "",
        });
      }
      // let j = 1
      // for(let i=result.length; i < 31; i++) {
      //   result.push(j)
      //   j++
      // }
      return result;
    },
  },

  created() {
    const date = new Date();
    this.day = date.getDay();
  },
  // --------------------------↑↑年・月・曜日を取得------------------------------------

  methods: {
    btnClicked(day, index) {
      // console.log(this.now_month + '月' + day + '日')
      this.inputDay = day;
      // console.log(this.sample[index].name)
      this.inputName = index + 1;
      // return (this.id = e.currentTarget.getAttribute("sample"));
      // this.eventObject = sTime
      // console.log(sTime)
    },

    addItem: function () {
      // this.sample.push(this.sample);
      // this.sample.shift = '';
      // console.log();
      const days = this.now_year + "-" + this.now_month + "-" + this.inputDay;
      const result = this.sample[1].shift.findIndex((d) => d.date === days);
      this.sample[1].shift[result].start_time = 99;
    },

    set() {
      localStorage.setItem(
        "obj",
        JSON.stringify({
          id: 10,
          name: "",
          shift: [
            {
              date: "",
              start_time: 12,
              end_time: 20,
            },
          ],
        })
      );
    },

    // ------------------------↓↓年・月を１ヶ月毎に切り替える---------------------------
    monthPlus() {
      if (this.now_month == 12) {
        this.now_month = 1;
        this.now_year++;
      } else {
        this.now_month++;
      }
      this.inputMonth = this.now_month;
    },
    monthMinus() {
      if (this.now_month == 1) {
        this.now_month = 12;
        this.now_year--;
      } else {
        this.now_month--;
      }
      this.inputMonth = this.now_month;
    },
    // ------------------------↑↑年・月を１ヶ月毎に切り替える---------------------------

    // ------------------------↓↓曜日の背景色を指定---------------------------
    fontColor(week, day) {
      if (week === 6) {
        return "textcolorblue";
      }
      if (week === 0) {
        return "textcolorred";
      }
      const d =
        String(this.now_year) +
        "-" +
        String(this.now_month) +
        "-" +
        String(day);
      if (d === this.$store.state.items) {
        return "textcolorred";
      }
    },
    // ------------------------↑↑曜日の背景色を指定---------------------------

    // ------------------------↓↓追加・削除ボタン---------------------------
    addBox() {
      this.sample.push({ name: this.sample.length });
      this.sample.splice();
    },
    removeBox() {
      this.sample.pop(this.sample, 1);
    },
    // ------------------------↑↑追加・削除ボタン---------------------------

    // --↓↓shiftデータの日付とカレンダーの日付を照合しあったものを取得----------------
    requestUserData(id) {
      return this.sample.filter((data) => data.id === id);
    },
    requestUserShift(shift, day) {
      const d =
        String(this.now_year) +
        "-" +
        String(this.now_month) +
        "-" +
        String(day);
      return shift.filter((data) => data.date === d);
    },
    // --↑↑shiftデータの日付とカレンダーの日付を照合しあったものを取得-----------

    // readUserDataShift(selected) {
    //   return this.sample.id(selected)
    // },

    findIndexId(id) {
      return this.nameSelectboxList.findIndex((d) => d.id === id);
    },
  },
};
</script>



<style scoped>
* {
  margin: 0;
  padding: 0;
}

.calendar {
  margin-left: 90px;
  /* position: absolute; */
}

header {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
}

.calendar-day {
  display: flex;
  width: 400%;
  flex-wrap: wrap;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  white-space: nowrap;
}

.calendar-week {
  /* display: flex; */
  width: 400%;
  flex-wrap: wrap;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  white-space: nowrap;
}

.c-day {
  display: flex;
  justify-content: center;
  border: solid 1px;
  width: 30px;
  /* height: 25px; */
  white-space: nowrap;
}

.a {
  display: flex;
}

.time-data {
  font-size: 20px;
  margin: auto;
  border-left: 1px solid darkslategray;
  text-align: center;
  width: 30px;
  padding-right: 1px;
}

.textcolorblue {
  color: blue;
}

.textcolorred {
  color: red;
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
  /* display:  flex; */
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

.select-carender1 {
  width: 160px;
  font-size: 16px;
  text-align: center;
  margin-bottom: 3px;
  height: 26px;
  margin-left: 5px;
}

.select-carender {
  width: 45px;
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px;
}

.add-carender {
  width: 80px;
  font-size: 15px;
  text-align: center;

  height: 26px;
  position: absolute;
  left: 200px;
}

.add-carender1 {
  width: 40px;
  font-size: 13px;
  text-align: center;

  height: 26px;
  position: absolute;
  left: 290px;
}

.selectbox {
  height: 50px;
  display: block;
}
.flexbox {
  display: flex;
}
.days {
  display: inline-block;
  height: 70px;
}

.end_time {
  border-top: dashed rgba(54, 53, 53, 0.219) 1px;
  margin-top: 3px;
  padding-top: 3px;
}

.shifts {
  height: 70px;
  background-color: rgba(127, 197, 255, 0.541);
  margin-top: 1px;
}

.editbox {
  margin-top: 3px;
}
</style>