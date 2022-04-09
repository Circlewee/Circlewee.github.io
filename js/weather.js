function onGeoOk(position) {
  const nowTime = document.querySelector(".time");
  const loadingIcon = document.querySelector(".loadingGif");
  let Now;

  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${API_KEY}&units=metric&lang=kr`;

  nowTime.children[0].addEventListener("click", refreshClick);

  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data; // response.json();
  }

  getData(url).then((data) => {
    Now = new Date(data.current.dt * 1000);

    nowTime.children[1].innerText = `${makePadStyle(Now.getHours())}:${makePadStyle(Now.getMinutes())}`;

    loadingIcon.remove();
    nowTime.classList.remove("hidden");
    paintWeatherInfo(data.current);
    paintWeatherInfo(data.daily[1]);
    paintWeatherInfo(data.daily[2]);
  });

  function paintWeatherInfo(data) {
    const weatherInfoBox = document.createElement("div");
    const weatherCel = document.createElement("span");
    const weatherIcon = new Image();
    const dateSpan = document.createElement("span");
    const date = new Date(data.dt * 1000);

    if (date.getMonth() === Now.getMonth() && date.getDate() === Now.getDate()) {
      dateSpan.innerText = `Current`;
      weatherCel.innerText = `${String(data.temp).split(".")[0]}º`;
    } else {
      dateSpan.innerText = `${date.getMonth() + 1}.${date.getDate()}`;
      weatherCel.innerText = `${String(data.temp.min).split(".")[0]}º / ${String(data.temp.max).split(".")[0]}º`;
    }

    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherInfoBox.classList.add("weatherInfoBox");
    weatherInfoBox.prepend(weatherIcon);
    weatherInfoBox.append(weatherCel);
    weatherInfoBox.prepend(dateSpan);
    weather.appendChild(weatherInfoBox);
  }

  function refreshClick() {
    // write refresh function...
  }

  function makePadStyle(input) {
    return String(input).padStart(2, "0");
  }
}

function onGeoError() {
  const loadingIcon = document.querySelector(".loadingGif");
  loadingIcon.remove();
  alert("Can't fint you. No weather for you.");
}

const weather = document.querySelector("#weather");
const API_KEY = "97dc4eed0898416e115593d823cf4e97";

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
