import { ApiResponse } from "../types/api-response";

export async function fetchWeather(city: string): Promise<ApiResponse> {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  if (!apiKey) {
    throw new Error("API key not found");
  }

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  const data: ApiResponse = await response.json();
  console.log(`Weather data for ${city}:`, data);
  const filteredData = data.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );
  console.log("filtered data", filteredData);

  return {
    city: data.city,
    list: filteredData,
  };
}
