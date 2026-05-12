import type { WeatherData } from "../types/weather";

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchWeather = async (
  city: string
): Promise<WeatherData> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  const data = await response.json();

  return data;
};