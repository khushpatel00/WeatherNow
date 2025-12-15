async function fetchWeather(latitude = 52.52, longitude = 13.41) {
	// "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&forcast_days=7";
	const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,rain,snowfall&current=temperature_2m,showers,rain,snowfall,surface_pressure,is_day,relative_humidity_2m&forcast_days=1,`;
	const response = await fetch(url);
	// console.log(response.json());
	return response.json();
}

async function fetchWeatherByCity(cityName) {
	const url = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=5&language=en&format=json`;
	const response = await fetch(url);
	return response.json();
}
