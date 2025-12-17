async function fetchWeather(latitude = 52.52, longitude = 13.41) {
	// "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&forcast_days=7";
	const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,sunrise,sunset,uv_index_clear_sky_max,uv_index_max&hourly=temperature_2m,rain,showers,precipitation_probability,snowfall,precipitation,pressure_msl,weather_code,surface_pressure&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m&timezone=auto&forecast_hours=1`;
	const response = await fetch(url);
	// console.log(response.json());
	return response.json();
}

async function fetchWeatherByCity(cityName) {
	const url = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=5&language=en&format=json`;
	const response = await fetch(url);
	return response.json();
}
