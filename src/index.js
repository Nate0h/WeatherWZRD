//Getting JSON data from Weather API using await fetch
async function getWeather(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=e3a2a8b3e8d34b518f0225440240901&q=${location}`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  const weatherDataObject = returnWeatherDataObject(weatherData);
  console.log(weatherDataObject.weatherCondition);
}

//Using Factory Function to return weather Data object from JSON
function returnWeatherDataObject(jsonObject) {
  const city = jsonObject.location.name;
  const country = jsonObject.location.name;
  const weatherCondition = jsonObject.current.condition.text;
  const tempF = jsonObject.current.temp_f;
  const tempC = jsonObject.current.temp_c;
  const feelsLikeF = jsonObject.current.feelslike_f;
  const feelsLikeC = jsonObject.current.feelslike_c;
  const windMPH = jsonObject.current.wind_mph;
  const windKPH = jsonObject.current.wind_kph;
  const humidity = jsonObject.current.humidity;
  const UV = jsonObject.current.uv;

  return {
    city,
    country,
    weatherCondition,
    tempF,
    tempC,
    feelsLikeF,
    feelsLikeC,
    windMPH,
    windKPH,
    humidity,
    UV,
  };
}

getWeather("New York");
