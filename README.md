# Know Your Weather 🌤️

A simple and responsive weather application built using **HTML, CSS, and JavaScript**.  
Users can search for a city and view real-time weather information powered by **WeatherAPI**.

---

## Features

- Search weather by city name
- Display:
  - City name
  - Temperature (°C)
  - Weather condition
  - Weather icon
  - Humidity
  - Wind speed
- Animated loader while fetching weather data
- Error handling for invalid city names
- Hide previous results while loading new data
- Responsive card-based UI

---

## Tech Stack

**Frontend**
- HTML5
- CSS3 (Flexbox)
- JavaScript (ES6)

**API**
- WeatherAPI.com

---

## Project Structure

```bash
know-your-weather/
│
├── index.html
├── style.css
├── script.js
│
├── assets/
│ └── icons/
│
├── preview/
│
└── README.md
```

---

## How It Works

1. User enters a city name.
2. JavaScript listens for the form submission.
3. The app sends a request to the WeatherAPI endpoint.
4. While fetching data, a loader animation is displayed.
5. Once the response arrives, the UI updates dynamically with weather data.

---

## API Used

Weather data is provided by:

**WeatherAPI**

https://www.weatherapi.com/

---

## Running the Project Locally

1. Clone the repository
```bash
git clone https://github.com/mopy7/know-your-weather.git
```
2. Navigate to the project folder
```bash
cd know-your-weather
```
3. Open `index.html` in your browser.

---

## Future Improvements

Possible upgrades for this project:

- Add 5-day weather forecast
- Add geolocation support (current location weather)
- Toggle between Celsius and Fahrenheit
- Add dark mode
- Add search history
- Improve UI with weather-based backgrounds
- Replace `.then()` with `async/await`

---

## Author

**Muhammad P**

GitHub: https://github.com/mopy7  
LinkedIn: https://www.linkedin.com/in/mopy

---

> _Miles to go before I sleep..._
