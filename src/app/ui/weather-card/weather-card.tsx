import { ApiResponse } from "@/app/lib/types/api-response";
import { capitalizeFirstLetter } from "@/app/lib/hooks/capitalizeFirstLetter";
import Image from "next/image";
import { getDayOfWeek } from "@/app/lib/hooks/getDayOfWeek";
import DropHalfBottom from "../icons/drop-half-bottom";
import Thermometer from "../icons/thermometer";
import Wind from "../icons/wind";
import { getFeelsLikeMessage } from "@/app/lib/hooks/get-feels-like-message";
import { getWindDescription } from "@/app/lib/hooks/get-wind-description";
import { getHumidityMessage } from "@/app/lib/hooks/get-humidity-message";

interface WeatherCardProps {
  weatherData: ApiResponse | null;
}

export default function WeatherCard({ weatherData }: WeatherCardProps) {
  if (!weatherData) {
    return null;
  }

  const feelsLike = weatherData.list[0].main.feels_like;
  const temp = weatherData.list[0].main.temp;
  const feelsLikeMessage = getFeelsLikeMessage(feelsLike, temp);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col justify-between p-4 gap-4 w-full bg-white text-black rounded-lg border border-black font-semibold border-opacity-80">
        <div>
          <p>{getDayOfWeek(weatherData.list[0].dt)}</p>
          <p className="self-start">{weatherData.city.name}</p>
        </div>
        <p className="xs:self-center text-4xl">
          {weatherData.list[0].main.temp}°C
        </p>
        <div className="flex flex-col gap-1 xs:justify-between xs:flex-row">
          <div className="self-start flex gap-1 items-center">
            <div>
              <Image
                src={`https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`}
                alt={weatherData.list[0].weather[0].description}
                height={24}
                width={24}
              />
            </div>
            <p>
              {capitalizeFirstLetter(
                weatherData.list[0].weather[0].description
              )}
            </p>
          </div>

          <div className="flex xs:self-end gap-2">
            <p>H: {weatherData.list[0].main.temp_max}°C</p>
            <p>L: {weatherData.list[0].main.temp_min}°C</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="rounded-lg border border-black p-4 flex flex-col gap-4 border-opacity-80">
          <div className="flex gap-1 items-center">
            <Thermometer width={16} height={16} fill={"#000000"} />
            <p>Feels like</p>
          </div>
          <p className="font-semibold">
            {weatherData.list[0].main.feels_like}°C
          </p>
          <p>{feelsLikeMessage}</p>
        </div>
        <div className="rounded-lg border border-black p-4 flex flex-col gap-4 border-opacity-80">
          <div className="flex gap-1 items-center">
            <Wind width={16} height={16} fill={"#000000"} />
            <p>Wind</p>
          </div>
          <p className="font-semibold">{weatherData.list[0].wind.speed} m/s</p>
          <p>{getWindDescription(weatherData.list[0].wind.speed)}</p>
        </div>
        <div className="rounded-lg border border-black p-4 flex flex-col gap-4 border-opacity-80">
          <div className="flex gap-1 items-center">
            <DropHalfBottom width={16} height={16} fill={"#000000"} />
            <p>Humidity</p>
          </div>
          <p className="font-semibold">{weatherData.list[0].main.humidity}%</p>
          <p>{getHumidityMessage(weatherData.list[0].main.humidity)}</p>
        </div>
      </div>
    </div>
  );
}
