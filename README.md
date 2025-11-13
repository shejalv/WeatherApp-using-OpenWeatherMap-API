🌦️ Weather App

<img width="1919" height="870" alt="Screenshot 2025-11-13 161156" src="https://github.com/user-attachments/assets/e7a46f68-7dc2-42d6-864c-c35c0695efd9" />


A modern, responsive, and user-friendly Weather Application built with React.js that provides live weather updates for any city using the OpenWeatherMap API.

This app is designed with a beautiful gradient background, glassmorphism-style weather card, and smooth animations to give users a pleasant and interactive experience.

🚀 Features

✅ Search weather by city name
✅ Live data from OpenWeatherMap API

✅ Displays:

City name

Temperature (°C)

Humidity (%)

Weather condition (Clear, Cloudy, Rainy, etc.)

Weather icons / emojis

✅ Loading spinner during fetch
✅ Error message if city not found
✅ Gradient background with glassmorphism design
✅ Fully responsive for mobile and desktop
✅ Clean typography and modern UI

🧩 Technologies Used

React.js (Frontend Framework)

Axios (for API requests)

CSS3 (for styling and animations)

OpenWeatherMap API (for live weather data)

📁 Folder Structure
weather-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Weather.js
│   │   ├── WeatherCard.js
│   │   ├── SearchBox.js
│   │   ├── Weather.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── .env
├── package.json
└── README.md

⚙️ Installation and Setup

Follow these simple steps to set up and run the project on your local machine.

1. Clone the repository
git clone https://github.com/your-username/weather-app.git

2. Navigate to the project folder
cd weather-app

3. Install dependencies
npm install

4. Create .env file in the root directory
REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key


⚠️ Make sure your variable name starts with REACT_APP_

5. Start the development server
npm start

🌍 API Reference

Base URL: https://api.openweathermap.org/data/2.5/weather

Example Request:

https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=YOUR_API_KEY&units=metric

💡 React Concepts Used

useState → To store city, weather data, and error states

useEffect → To handle side effects (API calls)

Props → To pass data between components

Conditional Rendering → To display loading, error, or weather data dynamically

🎨 UI Design Highlights

Glassmorphism Weather Card with blurred background

Soft Gradient Backgrounds (Sky blue → Purple tones)

Rounded Corners & Shadows for modern look

Google Font: Poppins / Roboto

Responsive Layout: Adapts to mobile, tablet, and desktop

Subtle Animations: Fade-in for weather results

🧠 Example Output

Input: Paris
Output:
☀️ Paris
Temperature: 25°C
Humidity: 58%
Condition: Clear Sky

🪄 Future Enhancements

Add 5-day weather forecast

Display background images based on weather condition

Add “Use My Location” (geolocation) support

Include sunrise/sunset and wind speed details

👩‍💻 Author

Shejal Pandey
B.Tech – Computer Science & Engineering
Frontend Developer | Java Enthusiast | Tech Explorer

📜 License

This project is open-source and available under the MIT License.


