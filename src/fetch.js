async function fetchWeather(latitude, longitude) { 
  if (latitude == undefined || longitude == undefined) url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&forcast_days=7";
  else url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&forcast_days=7`;
  // url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&forcast_days=7"
  const response = await fetch(url);
  return response.json();
}

async function fetchWeatherByCity(cityName) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=5&language=en&format=json`;
  const response = await fetch(url);
  return response.json();
}
