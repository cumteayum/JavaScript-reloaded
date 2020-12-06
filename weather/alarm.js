let audio = new Audio('bell.mp3');
let btn = document.getElementById('btn');
let input = document.getElementById('inp');

function ring(){
  audio.play();
}

btn.addEventListener('click', setAlarm);

function setAlarm(e) {
  e.preventDefault();
  const alarm = input;
  let alarmDate = new Date(alarm.value);
  let now = new Date();
  let timeToAlarm = alarmDate - now;
  if(timeToAlarm >= 0){
    setTimeout(() => {
      console.log("Ringing now...");
      ring();
    }, timeToAlarm);
  }

}
