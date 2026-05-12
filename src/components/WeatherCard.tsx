import type { WeatherData } from "../types/weather";

type WeatherCardProps = {
  weather: WeatherData;
};

function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>

      <p>🌡 Temperature: {weather.main.temp}°C</p>

      <p>
        ☁ Weather: {weather.weather[0].description}
      </p>

      <p>💧 Humidity: {weather.main.humidity}%</p>

      <p>🌬 Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherCard;