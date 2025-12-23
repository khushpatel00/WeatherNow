input = document.querySelector('input[type="text"]');
cityLocation = document.querySelector('#location');
dateElement = document.querySelector('#date');
temperature = document.querySelector('#temperature');
apperantTemperature = document.querySelector('#apperant-temperature');
weatherDescription = document.querySelector('#weather-description');
windSpeed = document.querySelector('#wind-speed');
humidity = document.querySelector('#humidity');
percipation = document.querySelector('#precipitation');
activestate = document.querySelector('#activestate');
currentTime = document.querySelector('#currentTime');
cityList = document.querySelector('#city-list');
country = document.querySelector('#country');
windDirection = document.querySelector('#wind-direction');
windDirectionText = document.querySelector('#wind-direction-text');
elevation = document.querySelector('#elevation');
daynighttime = document.querySelector('#daynighttime');
daynighttimeText = document.querySelector('#daynighttime-text');
timezone = document.querySelector('#timezone');
menu = document.querySelector('#menu');
closeIcon = document.querySelector('#close-icon');
timezoneAbbreviation = document.querySelector('#timezoneAbbreviation')
timeclock = null;

// function updateTime() {
//     const now = new Date("GMT+1");
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const seconds = String(now.getSeconds()).padStart(2, '0');
//     currentTime.textContent = `${hours}:${minutes}:${seconds}`;
// }




gmt = 'GMT+1:30'
gmtinseconds = gmt.split('+').pop().split(':')
console.log(gmtinseconds[0] * 60 + gmtinseconds[1]);





function updateTime(timezone) {
    clearInterval(timeclock);
    timeclock = setInterval(() => {
        var now = new Date();
        var time = now.toLocaleString('en-US', {
            timeZone: timezone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
        currentTime.innerHTML = time.split(',').pop().split(' ')[0];
    }, 1000)
}




(async () => {

    try {
        const data = await fetchWeather(); // default
        console.log(data);
        showData(data, 'Berlin, DE', 'Germeny');

    } catch (error) {
        console.log(error);
    }

})()
function showData(fetchedData, cityName = '', countryData = '') {
    console.log(fetchedData);

    temperature.innerHTML = `${fetchedData.current.temperature_2m || 'undefined'} <span class="text-4xl font-bold -ms-2">${fetchedData.current_units.temperature_2m}</span>`;
    apperantTemperature.innerHTML = `<span class="text-xl content">apperant: </span>${fetchedData.current.apparent_temperature || 'undefined'}${fetchedData.current_units.apparent_temperature}`;
    windSpeed.innerHTML = `${fetchedData.current.wind_speed_10m} ${fetchedData.current_units.wind_speed_10m}`;

    const date = new Date(fetchedData.current.time);
    dateElement.innerHTML = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(date);
    // country.innerHTML = fetchedData.results.country;
    if (cityName) {
        cityLocation.innerHTML = cityName;
    } else cityLocation.innerHTML = `Latitude: ${fetchedData.latitude}, Longitude: ${fetchedData.longitude}`;
    country.innerHTML = countryData;

    windDirection.style.rotate = fetchedData.current.wind_direction_10m + 'deg';
    windDirectionText.innerHTML = fetchedData.current.wind_direction_10m + fetchedData.current_units.wind_direction_10m;
    elevation.innerHTML = fetchedData.elevation + ' m';
    if (fetchedData.current.is_day) {
        daynighttime.classList = 'ph-thin ph-sun';
        daynighttimeText.innerHTML = 'Day Time'
        document.querySelector('html').classList = '';
    }
    else {
        daynighttime.classList = 'ph-thin ph-moon-stars';
        daynighttimeText.innerHTML = 'Night Time';
        document.querySelector('html').classList = 'dark';
    }
    timezone.innerHTML = fetchedData.timezone;
    timezoneAbbreviation.innerHTML = fetchedData.timezone_abbreviation;
    
    if (fetchedData.current.rain) {
        document.querySelector('video#activestate').src = 'src/images/rain.mp4';
    }
    if (fetchedData.current.showers) {
        document.querySelector('video#activestate').src = 'src/images/water_droplets.mp4';
    }
    if (fetchedData.current.snowfall) {
        document.querySelector('video#activestate').src = 'src/images/snowfall.mp4';
    }

    weatherDescription.innerHTML = `${weathercode(fetchedData.current.weather_code)}`
    clearInterval(timeclock);
    updateTime(fetchedData.timezone);
}

input.addEventListener('keyup', async function (e) {

    if (input.value.length > 2) {

        const cityName = input.value;
        // cityList.innerHTML = ''
        try {
            response = await fetchWeatherByCity(cityName);
            document.querySelector('#citylist-parent').classList.remove('hidden');
            // cityNames = await fetchWeatherByCity('surat');
            // console.log(cityNames);
            console.log(response);
            cityList.innerHTML = '';
            if (response.results == undefined || null) {
                cityList.innerHTML = '<li class="py-1 border border-neutral-300 mx-3 my-1 rounded-lg px-3 relative flex flex-wrap"><span class="mb-1 text-sm text-black/50 w-full">No results found</span></li>'
            } else response.results.forEach(city => {
                cityList.innerHTML += `<li class="py-1 border border-neutral-300 mx-3 my-1 rounded-lg px-3 relative flex flex-wrap"><a onclick="return fetchWeatherandShow(${city.latitude}, ${city.longitude}, '${city.name}', '${city.country}')" data-lat="${city.latitude}" data-lon="${city.longitude}" data-city="${city.name}">${city.name}</a><span class="mb-1 text-sm text-black/50 w-full">${city.admin1}, ${city.country}</span></li>`;
            })

        } catch (error) {
            console.log(error);
        }
    }


});

async function fetchWeatherandShow(lat, lon, cityName, countryData = '') {
    fetchedData = await fetchWeather(lat, lon);
    document.querySelector('#citylist-parent').classList.add('hidden');
    showData(fetchedData, cityName, countryData);
}