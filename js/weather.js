const weatherInfo = document.querySelector("#weather span");
const API_KEY = "97dc4eed0898416e115593d823cf4e97";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weatherInfo.innerText = `${data.name} / ${data.weather[0].main} ${data.main["temp"]}℃`;
    });
}

function onGeoError() {
  alert("Can't fint you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
