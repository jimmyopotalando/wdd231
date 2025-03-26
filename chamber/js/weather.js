// API Key for OpenWeatherMap API (You should replace this with your own API key)
const apiKey = 'your_openweathermap_api_key';
const city = 'Timbuktu'; // The city for the weather data (you can change this to any location)

// Function to fetch the weather data from the OpenWeatherMap API
async function fetchWeather() {
    // Fetch current weather data from the OpenWeatherMap API
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const currentWeatherData = await response.json();

    // Fetch the 3-day forecast data from the OpenWeatherMap API
    const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
    const forecastData = await forecastResponse.json();

    // Extract current weather information
    const temperature = currentWeatherData.main.temp;
    const weatherDescription = currentWeatherData.weather[0].description;
    const weatherIcon = currentWeatherData.weather[0].icon;

    // Extract 3-day forecast data (ignoring the current day, starting from the next day)
    const forecast = forecastData.list.slice(1, 4).map(forecast => ({
        date: new Date(forecast.dt * 1000).toLocaleDateString(),
        temperature: forecast.main.temp,
        description: forecast.weather[0].description,
        icon: forecast.weather[0].icon,
    }));

    // Insert the current weather into the weather-info section of the page
    const weatherInfoContainer = document.getElementById('weather-info');
    weatherInfoContainer.innerHTML = `
        <p><strong>Current Temperature:</strong> ${temperature}°C</p>
        <p><strong>Description:</strong> ${capitalize(weatherDescription)}</p>
        <img src="https://openweathermap.org/img/wn/${weatherIcon}.png" alt="${weatherDescription}">
    `;

    // Insert the 3-day forecast into the weather-forecast section of the page
    const weatherForecastContainer = document.getElementById('weather-forecast');
    weatherForecastContainer.innerHTML = `
        <h3>3-Day Forecast</h3>
        <div class="forecast-cards">
            ${forecast.map(f => `
                <div class="forecast-card">
                    <h4>${f.date}</h4>
                    <img src="https://openweathermap.org/img/wn/${f.icon}.png" alt="${f.description}">
                    <p>${f.temperature}°C</p>
                    <p>${capitalize(f.description)}</p>
                </div>
            `).join('')}
        </div>
    `;
}

// Function to capitalize the first letter of each word in a string
function capitalize(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Call the fetchWeather function to load the weather data when the page loads
fetchWeather();
