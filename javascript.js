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
console.log(dayOfWeekName); // 👉️ Sunday