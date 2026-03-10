const form = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");
const weatherResult = document.getElementById("weather-result")

const cityName = document.getElementById("city-name");
const loader = document.querySelector(".loader");
const weatherIcon = document.querySelector("#weather-result img");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = cityInput.value.trim();
  if (!city) return;

  const apiKey = "b652a5d3a52e479495c100522261003";
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  loader.style.display = "block";
  weatherResult.style.display = "none";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      loader.style.display = "none";

      if (data.error) {
        alert(data.error.message);
        return;
      }

      weatherResult.style.display = "flex";

      cityName.textContent = data.location.name;
      weatherIcon.src = data.current.condition.icon;
      temperature.textContent = `${data.current.temp_c}°C`;
      condition.textContent = data.current.condition.text;
      humidity.textContent = `Humidity: ${data.current.humidity}%`;
      wind.textContent = `Wind: ${data.current.wind_kph} km/h`;
    });
});
