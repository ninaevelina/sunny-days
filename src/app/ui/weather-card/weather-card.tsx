import { ApiResponse } from "@/app/lib/types/api-response";
import { capitalizeFirstLetter } from "@/app/lib/hooks/capitalizeFirstLetter";

interface WeatherCardProps {
  weatherData: ApiResponse | null;
}

export default function WeatherCard({ weatherData }: WeatherCardProps) {
  if (!weatherData) {
    return null;
  }

  return (
    <div className="flex flex-col justify-between p-4 gap-4 w-full bg-black text-white rounded-lg border border-white font-semibold">
      <p className="self-start">{weatherData.name}</p>
      <p className="self-center text-4xl">{weatherData.main.temp}°C</p>
      <div className="flex justify-between">
        <p className="self-start">Feels like {weatherData.main.feels_like}°C</p>
        <p className="self-end">
          {capitalizeFirstLetter(weatherData.weather[0].description)}
        </p>
      </div>
    </div>
  );
}
