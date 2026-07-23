// scripts/weather.js
// Fetch and display current weather + 3-day forecast for Timbuktu

const apiKey = '23163ab0e1319019afb7469e82d2d453'; // your valid API key
const city = 'Timbuktu';
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

async function getWeather() {
  const container = document.getElementById('weather');
  container.innerHTML = '<p>Loading weather...</p>';

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();

    // Current weather
    const current = data.list[0];
    let html = `
      <h3>Current Weather</h3>
      <p>🌡️ ${current.main.temp.toFixed(1)} °C</p>
      <p>☁️ ${current.weather[0].description}</p>
    `;

    // Forecast for next 3 days (approx every 24h at noon)
    html += '<h3>3-Day Forecast</h3>';
    for (let i = 1; i <= 3; i++) {
      const forecastIndex = i * 8; // 8 intervals = 24 hours
      if (data.list[forecastIndex]) {
        const forecast = data.list[forecastIndex];
        const day = new Date(forecast.dt_txt).toLocaleDateString(undefined, {
          weekday: 'long',
          month: 'short',
          day: 'numeric'
        });
        html += `<p>${day}: ${forecast.main.temp.toFixed(1)} °C, ${forecast.weather[0].description}</p>`;
      }
    }

    container.innerHTML = html;
  } catch (error) {
    console.error('Weather fetch error:', error);
    container.innerHTML = '<p>Unable to load weather data. Please try again later.</p>';
  }
}

getWeather();
