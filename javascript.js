document.body.style.backgroundColor = "red";



function startTime() {
    const today = new Date();
    let h = today.getHours();
    if (h>12) { 
      h=h-12;
    }
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
    pictureTime();
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  const dayOfWeekDigit = new Date().getDay();
console.log(dayOfWeekDigit); // 👉️ 0

const dayOfWeekName = new Date().toLocaleString(
  'default', {weekday: 'long'}
);
console.log(dayOfWeekName); // 👉️ Sundayconsole.log(dayOfWeekName);

function pictureTime(){
  console.log(dayOfWeekName);
  if(dayOfWeekName==0){

  }else if(dayOfWeekName=="Tuesday"){
    document.getElementById("muffin").src="adventuretime.png";
  }else if(dayOfWeekName==2){
    document.getElementById("muffin").src="adventuretime.png";
  }else if(dayOfWeekName==3){

  }else if(dayOfWeekName==4){

  }else if(dayOfWeekName==5){

  }else if(dayOfWeekName==6){

  }
}