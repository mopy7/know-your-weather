# Know Your Weather 🌤️

A simple and responsive weather application built using **HTML, CSS, and JavaScript**.  
Users can enter a city name to fetch and display real-time weather information using the **WeatherAPI** service.

---

## Features

- Search weather by city name
- Display current temperature
- Show weather condition and icon
- Display humidity level
- Display wind speed
- Responsive UI for desktop and mobile
- Clean card-based interface
- Real-time API data fetching

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
3. A request is sent to the WeatherAPI endpoint.
4. The API returns weather data in JSON format.
5. The UI updates dynamically with:
   - City name
   - Temperature
   - Weather condition
   - Weather icon
   - Humidity
   - Wind speed

---

## API Used

Weather data is provided by:

**WeatherAPI**

https://www.weatherapi.com/

---

## Running the Project Locally

1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/weather-app.git
```
2. Navigate to the project folder
```bash
cd know-your-weather
```
3. Open `index.html` in your browser.

---

## Future Improvements

Planned upgrades for the project:

- Error handling for invalid city names
- Loading indicator while fetching weather data
- Hide results before the first search
- Display feels-like temperature
- Add weather forecast (5-day forecast)
- Use **async/await** instead of `.then()` for cleaner code
- Add geolocation support (get weather for current location)
- Improve UI design with icons and animations
- Add dark mode toggle
- Add unit switching (°C / °F)
- Better mobile responsiveness
- Deploy live demo with GitHub Pages

---

## Author

**Muhammad P**

GitHub: https://github.com/mopy7  
LinkedIn: https://www.linkedin.com/in/mopy

---

> _Miles to go before I sleep..._
