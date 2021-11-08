<template>
<div id="top">
  <div class="hello">
    <header>
      <div class="header-in">
        <h1>シフト作成アプリ</h1>
      </div>
      <div class="header-tag">
        <nav>
          <ul>
            <li>
              <router-link to="/test" class="heder_txet">閲覧</router-link>
              <a href="#" class="heder_txet">シフト希望</a>
              <router-link to="/routing" class="heder_txet" >管理者(編集)</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  
  <div class="container">
    <div id="main_login_image">
      <h2>シフトをWeb上で管理するアプリ</h2>
    </div>
  <div class="text-input">
    <div class="login-title1">ID:</div>
    <input class="text1" type="text">
    <div class="login-title2">PASS:</div>
    <input class="text2" type="text">
  </div>
  <div class="main">
    <a href="#">ログイン</a>
    <a href="#">新規登録</a>
  </div>

  <ul>
    <div class="timer" id="timer"> 

    </div>
  </ul>
  </div>
  <!-- <script src="script.js"></script> -->

  </div>
  </div>
</template>

<script>
export default {
  name: 'topPage',
  props: {
    msg: String,


// document.addEventListener('DOMContentLoaded', function () {
//   let Timer = function (saleStartTime, saleEndTime, endMessage, outputDestination) {
//     this.saleStartTime = saleStartTime;
//     this.saleEndTime = saleEndTime;
//     this.endMessage = endMessage;
//     this.outputDestination = outputDestination;
//   }

//   Timer.prototype.countDown = function () {
//     let saleStartTime = new Date(this.saleStartTime);
//     let saleEndTime = new Date(this.saleEndTime);
//     let oneDay = 24 * 60 * 60 * 1000;
//     let countDownTimer = document.getElementById(this.outputDestination);
//     // let endMessage = this.endMessage;
//     let currentTimeCD = new Date();
//     // let untilStartTime = new Date();
//     let untilFinishTime = new Date();
//     let d = 0;
//     let h = 0;
//     let m = 0;
//     let s = 0;

//     setInterval(calculateTime, 500);

//     function calculateTime() {
//       currentTimeCD = new Date();
//       untilStartTime = saleStartTime - currentTimeCD;
//       untilFinishTime = saleEndTime - currentTimeCD;

//         d = Math.floor(untilFinishTime / oneDay);
//         h = Math.floor((untilFinishTime % oneDay) / (60 * 60 * 1000));
//         m = Math.floor((untilFinishTime % oneDay) / (60 * 1000)) % 60;
//         s = Math.floor((untilFinishTime % oneDay) / 1000) % 60 % 60;

//       showTime();
//     }

//     function showTime() {
//         countDownTimer.innerHTML = `次回シフト提出期限まで:<br>
//           ${d}日${h}時間${m}分${s}秒で終了`;
//     }
//   }

//   let myTimer = new Timer('2021/1/11 00:00:00', '2021/11/31 23:59:59', '終了！', 'timer');
//   myTimer.countDown();
// }, false)

  
}
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

.container {
  width: 100vw;
  height: 100vh;
  background: url('../assets/subject/4883106_l.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat
}

.header-tag {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

li {
  list-style: none;
}

.heder_txet {
  padding: 4px;
}

#main_login_image {
  color: #fff;
  text-shadow    : 
      2px  2px 1px #003366,
      -2px  2px 1px #003366,
      2px -2px 1px #003366,
      -2px -2px 1px #003366,
      2px  0px 1px #003366,
      0px  2px 1px #003366,
      -2px  0px 1px #003366,
      0px -2px 1px #003366;  
  width: 95%;
  font-size: 15px;
  text-align: center;
}

.text-input {
  display: flex;
  flex-direction: column;
  font-size: 30px;

}

.login-title1 {
margin-left: 20px;
position: absolute;
top: 280px;
}

.login-title2 {
margin-left: 20px;
position: absolute;
top: 360px;
}

.text-input input{
  padding: 10px;
  margin-top: 40px;
  width: 80%;
  margin-right: auto;
  margin-left : auto;

}

.text-input .text1 {
  margin-top: 100px;
}

@media screen and (min-width:768px)  {

  .login-title1 {
    margin-left: 160px;
    position: absolute;
    top: 310px;
    }
    
  .login-title2 {
  margin-left: 110px;
  position: absolute;
  top: 390px;
  }

  .text-input input{
    width: 50%;
  }
    
}

.main {
  padding: 30px;
  padding-top: 30px;
  /* color:  #fff;               文字色 */
  /* margin:  30px; 
  margin-bottom: 100px;             外側の余白 */
  font-size:  30px;           /* 文字サイズ */
  width: 100%;               /* 幅指定 */
  display: flex; 
  justify-content:  center;  
  flex-direction: column;      /* フレックスボックスにする */

}

.main a {
  margin-right: auto;
  margin-left : auto; 
}

#timer {
  display: inline-block;
  font-size: 23px;
  font-weight: 700;
  color: #fff;
  text-shadow    : 
      2px  2px 1px #003366,
     -2px  2px 1px #003366,
      2px -2px 1px #003366,
     -2px -2px 1px #003366,
      2px  0px 1px #003366,
      0px  2px 1px #003366,
     -2px  0px 1px #003366,
      0px -2px 1px #003366;
  letter-spacing : 2px;  
  width: 90%;
  margin: 0 auto;
  position: relative;
  top: 10px;
}



</style>
