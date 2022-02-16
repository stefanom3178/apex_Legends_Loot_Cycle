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
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
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
  if(dayOfWeekName=="Monday"){
    document.getElementById("muffin").src="muffin.png";
  }else if(dayOfWeekName=="Tuesday"){
    document.getElementById("muffin").src="adventuretime.png";
  }else if(dayOfWeekName=="Wednesday"){
    document.getElementById("muffin").src="banana.png";
  }else if(dayOfWeekName=="Thursday"){
    document.getElementById("muffin").src="bloodhound.png";
  }else if(dayOfWeekName=="Friday"){
    document.getElementById("muffin").src="mirage.png";
  }else if(dayOfWeekName=="Saturday"){
    document.getElementById("muffin").src="regular-show.png";
  }else if(dayOfWeekName=="Sunday"){
    document.getElementById("muffin").src="wraith.png";
  }
}