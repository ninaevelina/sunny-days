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
    <section className="flex flex-col gap-8">
      <div className="flex flex-col justify-between p-4 gap-4 w-full bg-black text-white rounded-lg border border-white font-semibold">
        <p className="self-start">{weatherData.name}</p>
        <p className="self-center text-4xl">{weatherData.main.temp}°C</p>
        <div className="flex justify-between">
          <p className="self-start">
            {capitalizeFirstLetter(weatherData.weather[0].description)}
          </p>
          <div className="flex self-end gap-2">
            <p>H: {weatherData.main.temp_max}°C</p>
            <p>L:{weatherData.main.temp_min}°C</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="rounded-lg border border-white p-4 flex flex-col gap-4">
          <p>Feels like</p>
          <p className="font-semibold">{weatherData.main.feels_like}°C</p>
        </div>
        <div className="rounded-lg border border-white p-4 flex flex-col gap-4">
          <p>Wind</p>
          <p className="font-semibold">{weatherData.wind.speed}m/s</p>
        </div>
        <div className="rounded-lg border border-white p-4 flex flex-col gap-4">
          <p>Humidity</p>
          <p className="font-semibold">{weatherData.main.humidity}%</p>
        </div>
      </div>
    </section>
  );
}
