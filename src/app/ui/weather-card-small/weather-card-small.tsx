import { formatTemperature } from "@/app/lib/hooks/format-temperature";
import { getDayOfWeek } from "@/app/lib/hooks/getDayOfWeek";
import { ForecastListItem } from "@/app/lib/types/forecast-list-item";
import Image from "next/image";

interface WeatherCardSmallProps {
  item: ForecastListItem;
}

export default function WeatherCardSmall({ item }: WeatherCardSmallProps) {
  return (
    <div className="grid grid-cols-3">
      <div className="w-40">
        <p className="font-medium">{getDayOfWeek(item.dt)}</p>
      </div>
      <div className="flex items-center w-14 justify-center">
        <div>
          <Image
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            alt={item.weather[0].description}
            width={24}
            height={24}
          />
        </div>
      </div>
      <div>
        <p>{formatTemperature(item.main.temp)}°C</p>
      </div>
    </div>
  );
}
