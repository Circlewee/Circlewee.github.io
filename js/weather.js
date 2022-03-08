const weather = document.querySelector("#weather");
const API_KEY = "97dc4eed0898416e115593d823cf4e97";

function onGeoOk(position) {
  const nowTime = document.createElement("div");
  const loadingIcon = document.querySelector(".loadingGif");

  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${API_KEY}&units=metric&lang=kr`;

  nowTime.classList.add("time");

  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data; // response.json();
  }

  getData(url).then((data) => {
    const Now = new Date(data.current.dt * 1000);
    const Tomorrow = new Date(data.daily[1].dt * 1000);
    const Tomorrow_ = new Date(data.daily[2].dt * 1000);
    nowTime.innerText = `${makePadStyle(Now.getHours())}:${makePadStyle(Now.getMinutes())}`;

    loadingIcon.remove();
    weather.appendChild(nowTime);
    a(data.daily[0], Now);
    a(data.daily[1], Tomorrow);
    a(data.daily[2], Tomorrow_);
  });

  function a(data, date) {
    const weatherInfoBox = document.createElement("div");
    const weatherCel = document.createElement("span");
    const weatherIcon = new Image();
    const dateSpan = document.createElement("span");

    dateSpan.innerText = `${date.getMonth() + 1}.${date.getDate()}`;
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherInfoBox.classList.add("weatherInfoBox");
    weatherCel.innerText = `${data.temp.day}℃`;
    weatherInfoBox.prepend(weatherIcon);
    weatherInfoBox.append(weatherCel);
    weatherInfoBox.append(dateSpan);
    weather.appendChild(weatherInfoBox);
  }
}

function onGeoError() {
  alert("Can't fint you. No weather for you.");
  const loadingIcon = document.querySelector(".loadingGif");
  loadingIcon.remove();
}

function makePadStyle(input) {
  return String(input).padStart(2, "0");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// const weatherInfo = document.createElement("span");
// const icon = new Image();
// icon.src = `http://openweathermap.org/img/wn/04d@2x.png`;
// weatherInfo.innerText = `Seoul / cloud 3℃`;
// weatherInfo.append(icon);
// weather.appendChild(weatherInfo);

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     const date = new Date(data.current.dt * 1000);
//     weatherIcon.src = `http://openweathermap.org/img/wn/04d@2x.png`;

//     weatherInfo.innerText = `${makePadStyle(date.getHours())}:${makePadStyle(date.getMinutes())} / ${data.current.temp}℃`;
//   });
