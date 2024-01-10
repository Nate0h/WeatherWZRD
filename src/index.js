async function getWeather(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=e3a2a8b3e8d34b518f0225440240901&q=${location}`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData.current.feelslike_f);
}

function returnWeatherDataObject(jsonObject) {}
getWeather("New York");
