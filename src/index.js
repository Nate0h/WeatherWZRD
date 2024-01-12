const form = document.getElementById("form");
const input = document.getElementById("location");
const switchTemp = document.getElementById("switch");
const city = document.querySelector(".city");
const country = document.querySelector(".country");
const time = document.querySelector(".time");
const temperature = document.querySelector(".temperature .temp-data");
const weatherState = document.querySelector(".state");
const temperatureFeelsLike = document.querySelector(
  ".weather-descr .temp-data"
);
let unit = "°F";

const tempUnit = document.querySelectorAll(".temp-unit");
const weatherIcon = document.querySelector(".weather-icon");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const UVIndex = document.querySelector(".uv-index");

//Listen to when form is submitted and calls getWeather function
form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeather(input.value, unit);
  form.reset();
});

//Getting JSON data from Weather API using await fetch
async function getWeather(location, unit) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=e3a2a8b3e8d34b518f0225440240901&q=${location}`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    const weatherDataObject = returnWeatherDataObject(weatherData);
    populateUI(weatherDataObject, unit);
  } catch (error) {
    alert(
      "Location Not Found.\nPlease make sure search is a valid Zipcode, City, State or Country"
    );
    console.log(error);
  }
}
//Using Factory Function to return weather Data object from JSON
function returnWeatherDataObject(jsonObject) {
  const time = jsonObject.location.localtime;
  const city = jsonObject.location.name;
  const country = jsonObject.location.country;
  const weatherCondition = jsonObject.current.condition.text;
  const icon = jsonObject.current.condition.icon;
  const tempF = jsonObject.current.temp_f;
  const tempC = jsonObject.current.temp_c;
  const feelsLikeF = jsonObject.current.feelslike_f;
  const feelsLikeC = jsonObject.current.feelslike_c;
  const wind = jsonObject.current.wind_mph;
  const humidity = jsonObject.current.humidity;
  const uv = jsonObject.current.uv;

  return {
    city,
    country,
    time,
    weatherCondition,
    icon,
    tempF,
    tempC,
    feelsLikeF,
    feelsLikeC,
    wind,
    humidity,
    uv,
  };
}

function populateUI(weatherDataObject, unit) {
  if (unit === "°F") {
    temperature.textContent = weatherDataObject.tempF;
    temperatureFeelsLike.textContent = weatherDataObject.feelsLikeF;
    tempUnit[0].textContent = unit;
    tempUnit[1].textContent = unit;
  } else {
    temperature.textContent = weatherDataObject.tempC;
    temperatureFeelsLike.textContent = weatherDataObject.feelsLikeC;
    tempUnit[0].textContent = unit;
    tempUnit[1].textContent = unit;
  }
  city.textContent = weatherDataObject.city;
  country.textContent = weatherDataObject.country;
  time.textContent = weatherDataObject.time;
  weatherState.textContent = weatherDataObject.weatherCondition;
  wind.textContent = weatherDataObject.wind;
  humidity.textContent = weatherDataObject.humidity;
  UVIndex.textContent = weatherDataObject.uv;
  weatherIcon.src = weatherDataObject.icon;
}

switchTemp.addEventListener("click", (e) => {
  unit = unit === "°F" ? "°C" : "°F";
  getWeather(city.textContent, unit);
  e.stopPropagation();
  e.preventDefault();
});

getWeather("Tokyo", unit);
