cityLocation = document.querySelector('#location');
dateElement = document.querySelector('#date');
temperature = document.querySelector('#temperature');
weatherDescription = document.querySelector('#weather-description');
windSpeed = document.querySelector('#wind-speed');
humidity = document.querySelector('#humidity');
percipation = document.querySelector('#precipitation');
activestate = document.querySelector('#activestate');
currentTime = document.querySelector('#currentTime');
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    currentTime.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateTime, 1000);
updateTime();
