function showTemperature(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function searchCity(event) {
  event.preventDefault();
  let apiKey = "f1064a94adcdf33252dd0ace190896af";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("#search-city");
form.addEventListener("submit", searchCity);

function formatDate() {
  let now = new Date();

  let date = now.getDate();
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let mins = now.getMinutes();
  if (mins < 10) {
    mins = `0${mins}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  let months = [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12];
  let month = months[now.getMonth()];

  let h2 = document.querySelector("h2");
  h2.innerHTML = `${day} ${date}/${month} ${hours}:${mins}`;
}
formatDate();
