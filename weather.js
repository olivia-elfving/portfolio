function fetchWeather() {
    fetch('https://secret-mountain-13843.herokuapp.com/gothenburg')
        .then(response => response.json())
        .then(function(data) {
            let icon = data.weather[0].icon;
            let kelvin = data.main.temp;
            let celcius = `${Math.floor(kelvin - 273)}°C`;
            
            document.getElementById('weather_img').src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
            document.getElementById('weather').innerHTML = celcius;
        });
};

window.addEventListener('DOMContentLoaded', fetchWeather);