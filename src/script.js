input = document.querySelector('input[type="text"]');
cityLocation = document.querySelector('#location');
dateElement = document.querySelector('#date');
temperature = document.querySelector('#temperature');
weatherDescription = document.querySelector('#weather-description');
windSpeed = document.querySelector('#wind-speed');
humidity = document.querySelector('#humidity');
percipation = document.querySelector('#precipitation');
activestate = document.querySelector('#activestate');
currentTime = document.querySelector('#currentTime');
cityList = document.querySelector('#city-list');
country = document.querySelector('#country');

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    currentTime.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateTime, 1000);
updateTime();
(async () => {

    try {
        const data = await fetchWeather(); // default
        console.log(data);
        showData(data);

    } catch (error) {
        console.log(error);
    }

})()

function showData(fetchedData, cityName = '') {
    console.log(fetchedData);
    temperature.innerHTML = `${fetchedData.current_weather.temperature} <span class="text-4xl font-bold -ms-2">${fetchedData.current_weather_units.temperature}</span>`;
    windSpeed.innerHTML = `${fetchedData.current_weather.windspeed} ${fetchedData.current_weather_units.windspeed}`;

    const date = new Date(fetchedData.current_weather.time);
    dateElement.innerHTML = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(date);
    // country.innerHTML = fetchedData.results.country;
    if (cityName) {
        cityLocation.innerHTML = cityName;
    }else cityLocation.innerHTML = `Latitude: ${fetchedData.latitude}, Longitude: ${fetchedData.longitude}`;
}

input.addEventListener('keypress', async function (e) {
    if (e.key === 'Enter') {
        const cityName = input.value;
        try {
            response = await fetchWeatherByCity(cityName);
            document.querySelector('#citylist-parent').classList.remove('hidden');
            // cityNames = await fetchWeatherByCity('surat');
            // console.log(cityNames);
            console.log(response);
            cityList.innerHTML = '';
            response.results.forEach(city => {
                cityList.innerHTML += `<li class="py-1 border border-neutral-300 mx-3 my-1 rounded-lg px-3 relative flex flex-wrap"><a onclick="return fetchWeatherandShow(${city.latitude}, ${city.longitude}, '${city.name}')" data-lat="${city.latitude}" data-lon="${city.longitude}" data-city="${city.name}">${city.name}</a><span class="mb-1 text-sm text-black/50 w-full">${city.admin1}, ${city.country}</span></li>`;
            })

        } catch (error) {
            console.log(error);
        }
    }

});   

async function fetchWeatherandShow(lat, lon, cityName) {
    fetchedData = await fetchWeather(lat, lon);
    document.querySelector('#citylist-parent').classList.add('hidden');
    showData(fetchedData, cityName);
}