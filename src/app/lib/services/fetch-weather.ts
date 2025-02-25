import { ApiResponse } from "../types/api-response";

export async function fetchWeather(city: string): Promise<ApiResponse> {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  if (!apiKey) {
    throw new Error("API key not found");
  }

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  const data = await response.json();
  console.log(`Weather data for ${city}:`, data);

  return data;
}
