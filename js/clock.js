const hour_minute = document.querySelector("#clock span:first-child");
const seconds = document.querySelector("#clock span:last-child");

function getClock() {
  const date = new Date();
  const nowHours = makePadStyle(date.getHours());
  const nowMinutes = makePadStyle(date.getMinutes());
  const nowSeconds = makePadStyle(date.getSeconds());

  hour_minute.innerText = `${nowHours}:${nowMinutes}`;
  seconds.innerText = `${nowSeconds}`;
}

function makePadStyle(input) {
  return String(input).padStart(2, "0");
}

getClock();
setInterval(getClock, 1000);
