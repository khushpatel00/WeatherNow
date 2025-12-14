(function fetchWeather (url = null) {
  if(url == null) url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&forcast_days=7";

  
    console.log('fetch called')
    try {  
      fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
    } catch (error) {
      console.log(error);
    }
})();