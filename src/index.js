import { weatherIcons } from "./icons";
const form = document.getElementById("form");
const input = document.getElementById("location");

const city = document.querySelector(".city");
const country = document.querySelector(".country");
const time = document.querySelector(".time");
const temperatureFahr = document.querySelector(".temperature .temp-data");
const weatherState = document.querySelector(".state");
const temperatureFeelsFahr = document.querySelector(
  ".weather-descr .temp-data"
);
const weatherIcon = document.querySelector(".weather-icon");

//Listen to when form is submitted and calls getWeather function
form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeather(input.value);
  input.value = "";
});

//Getting JSON data from Weather API using await fetch
async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=e3a2a8b3e8d34b518f0225440240901&q=${location}`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    const weatherDataObject = returnWeatherDataObject(weatherData);
    populateUI(weatherDataObject);
    console.log(weatherData);
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
  const weatherCode = jsonObject.current.condition.code;
  const tempF = jsonObject.current.temp_f;
  const tempC = jsonObject.current.temp_c;
  const feelsLikeF = jsonObject.current.feelslike_f;
  const feelsLikeC = jsonObject.current.feelslike_c;
  const windMPH = jsonObject.current.wind_mph;
  const windKPH = jsonObject.current.wind_kph;
  const humidity = jsonObject.current.humidity;
  const UV = jsonObject.current.uv;
  const isDay = jsonObject.current.is_day;

  return {
    city,
    country,
    time,
    weatherCondition,
    weatherCode,
    tempF,
    tempC,
    feelsLikeF,
    feelsLikeC,
    windMPH,
    windKPH,
    humidity,
    UV,
    isDay,
  };
}

function populateUI(weatherDataObject) {
  city.textContent = weatherDataObject.city;
  country.textContent = weatherDataObject.country;
  time.textContent = weatherDataObject.time;
  temperatureFahr.textContent = weatherDataObject.tempF;
  temperatureFeelsFahr.textContent = weatherDataObject.feelsLikeF;
  weatherState.textContent = weatherDataObject.weatherCondition;

  if (weatherDataObject.isDay) {
    weatherIcon.src = `./images/day/${weatherIcons.get(
      weatherDataObject.weatherCode
    )}.png`;
  } else {
    weatherIcon.src = `./images/night/${weatherIcons.get(
      weatherDataObject.weatherCode
    )}.png`;
  }
}

function generateWeatherImage(weatherState) {}
