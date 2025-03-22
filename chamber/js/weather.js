// weather.js
const apiKey = 'your_openweathermap_api_key';
const city = 'Timbuktu'; // Change to your chamber location

async function fetchWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const forecast = data.weather.map(weather => weather.main).join(", ");

    document.getElementById('weather-info').innerHTML = `
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${capitalize(weatherDescription)}</p>
        <p>Forecast: ${forecast}</p>
    `;
}

function capitalize(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

fetchWeather();
