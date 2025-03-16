import { ApiResponse } from "@/app/lib/types/api-response";
import { capitalizeFirstLetter } from "@/app/lib/hooks/capitalizeFirstLetter";
import Image from "next/image";
import { getDayOfWeek } from "@/app/lib/hooks/getDayOfWeek";

interface WeatherCardProps {
  weatherData: ApiResponse | null;
}

export default function WeatherCard({ weatherData }: WeatherCardProps) {
  if (!weatherData) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col justify-between p-4 gap-4 w-full bg-black text-white rounded-lg border border-white font-semibold border-opacity-80">
        <div>
          <p>{getDayOfWeek(weatherData.dt)}</p>
          <p className="self-start">{weatherData.name}</p>
        </div>
        <p className="xs:self-center text-4xl">{weatherData.main.temp}°C</p>
        <div className="flex flex-col gap-1 xs:justify-between xs:flex-row">
          <p className="self-start">
            {capitalizeFirstLetter(weatherData.weather[0].description)}
          </p>
          <div className="flex xs:self-end gap-2">
            <p>H: {weatherData.main.temp_max}°C</p>
            <p>L: {weatherData.main.temp_min}°C</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="rounded-lg border border-white p-4 flex flex-col gap-4 border-opacity-80">
          <div className="flex gap-1">
            <Image
              src={"/icons/thermometer-simple.svg"}
              alt="Thermometer"
              width={16}
              height={16}
            />
            <p>Feels like</p>
          </div>
          <p className="font-semibold">{weatherData.main.feels_like}°C</p>
        </div>
        <div className="rounded-lg border border-white p-4 flex flex-col gap-4 border-opacity-80">
          <div className="flex gap-1">
            <Image src={"/icons/wind.svg"} alt="Wind" width={16} height={16} />
            <p>Wind</p>
          </div>
          <p className="font-semibold">{weatherData.wind.speed} m/s</p>
        </div>
        <div className="rounded-lg border border-white p-4 flex flex-col gap-4 border-opacity-80">
          <div className="flex gap-1">
            <Image
              src={"/icons/drop-half-bottom.svg"}
              alt="Drop"
              width={16}
              height={16}
            />
            <p>Humidity</p>
          </div>

          <p className="font-semibold">{weatherData.main.humidity}%</p>
        </div>
      </div>
    </div>
  );
}
