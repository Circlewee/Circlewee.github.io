//https://api.openweathermap.org/data/2.5/weather?lat=37.361458&lon=127.111533&appid=97dc4eed0898416e115593d823cf4e97

const API_KEY = "97dc4eed0898416e115593d823cf4e97";
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");

      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
}

function onGeoError() {
  alert("Can't fint you. No weather for you/.");
}
