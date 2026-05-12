import { useEffect, useState } from "react";

import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";

import { fetchWeather } from "./services/weatherApi";

import type { WeatherData } from "./types/weather";
function App() {
  const [city, setCity] = useState("Cairo");

  const [weather, setWeather] =
    useState<WeatherData | null>(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      setLoading(true);

      setError("");

      const data = await fetchWeather(city);

      setWeather(data);
    } catch (err) {
      setError("Failed to fetch weather");

      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="app">
      <h1>Weather App</h1>

      <SearchBox
        city={city}
        setCity={setCity}
        handleSearch={handleSearch}
      />

      {loading && <p>Loading...</p>}

      {error && <p className="error">{error}</p>}

      {weather && !loading && (
        <WeatherCard weather={weather} />
      )}
    </div>
  );
}

export default App;