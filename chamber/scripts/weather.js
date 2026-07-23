// scripts/weather.js
// Fetch and display current weather + 3-day forecast for Timbuktu

const apiKey = '23163ab0e1319019afb7469e82d2d453'; // Replace with your actual API key
const city = 'Timbuktu';
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

async function getWeather() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    // Current weather (first item in list)
    const current = data.list[0];
    document.getElementById('current-temp').textContent =
      `Temperature: ${current.main.temp.toFixed(1)} °C`;
    document.getElementById('current-desc').textContent =
      `Conditions: ${current.weather[0].description}`;

    // Forecast for next 3 days (approx every 24h at noon)
    const forecastDiv = document.getElementById('forecast');
    forecastDiv.innerHTML = '<h3>3-Day Forecast</h3>';

    for (let i = 1; i <= 3; i++) {
      const forecastIndex = i * 8; // 8 intervals = 24 hours
      if (data.list[forecastIndex]) {
        const forecast = data.list[forecastIndex];
        const day = new Date(forecast.dt_txt).toLocaleDateString(undefined, {
          weekday: 'long',
          month: 'short',
          day: 'numeric'
        });
        forecastDiv.innerHTML += `
          <p>${day}: ${forecast.main.temp.toFixed(1)} °C, 
          ${forecast.weather[0].description}</p>`;
      }
    }
  } catch (error) {
    console.error('Weather fetch error:', error);
    document.getElementById('current-temp').textContent =
      'Unable to load weather data.';
    document.getElementById('current-desc').textContent = '';
    document.getElementById('forecast').textContent = '';
  }
}

getWeather();

