document.body.style.backgroundColor = "black";



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
    // pictureTime();
    pictureTimeTwo();
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

const year = new Date().getFullYear();
const month = new Date().getMonth();
const day = new Date().getDate();

const startDate = new Date(2022, 0, 20);
const currentDate = new Date(year, month, day);
const diffTime = Math.abs(currentDate - startDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

/*Need to go through and make sure there is an if for all 14 day cycles*/
function pictureTimeTwo(){
  const cycle = diffDays % 12;
  if(cycle==0){
    document.getElementById("muffin").src="muffin.png";
  }else if(cycle==1){
    document.getElementById("muffin").src="adventuretime.png";
  }else if(cycle==2){
    document.getElementById("muffin").src="banana.png";
  }else if(cycle==3){
    document.getElementById("muffin").src="bloodhound.png";
  }else if(cycle==4){
    document.getElementById("muffin").src="mirage.png";
  }else if(cycle==5){
    document.getElementById("muffin").src="regular-show.jpg";
  }else if(cycle==6){
    document.getElementById("muffin").src="wraith.png";
  }else if(cycle==7){
    document.getElementById("muffin").src="wraith.png";
  }else if(cycle==8){
    document.getElementById("muffin").src="wraith.png";
  }else if(cycle==9){
    document.getElementById("muffin").src="wraith.png";
  }else if(cycle==10){
    document.getElementById("muffin").src="wraith.png";
  }else if(cycle==11){
    document.getElementById("muffin").src="wraith.png";
  }
}