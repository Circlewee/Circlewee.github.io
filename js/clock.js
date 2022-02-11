
const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = makePadStyle(date.getHours());
  const minutes = makePadStyle(date.getMinutes());
  const seconds = makePadStyle(date.getSeconds());
  
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function makePadStyle(input) {
  return String(input).padStart(2, "0");
}

getClock();
setInterval(getClock, 1000);