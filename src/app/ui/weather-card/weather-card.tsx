import { ApiResponse } from "@/app/lib/types/api-response";

interface WeatherCardProps {
  weatherData: ApiResponse | null;
}

export default function WeatherCard({ weatherData }: WeatherCardProps) {
  if (!weatherData) {
    return null;
  }

  return (
    <div>
      <p>{weatherData.name}</p>
      <p>{weatherData.main.temp}°C</p>
      <p>Feels like {weatherData.main.feels_like}°C</p>
    </div>
  );
}
