import { formatTemperature } from "@/app/lib/hooks/format-temperature";
import { getDayOfWeek } from "@/app/lib/hooks/get-day-of-week";
import { ForecastListItem } from "@/app/lib/types/forecast-list-item";
import Image from "next/image";

interface WeatherCardSmallProps {
  item: ForecastListItem;
}

export default function WeatherCardSmall({ item }: WeatherCardSmallProps) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-1 md:gap-6">
      <div className="w-40 md:w-auto md:flex md:justify-center">
        <p className="font-medium">{getDayOfWeek(item.dt)}</p>
      </div>
      <div className="flex items-center w-14 justify-center">
        <div>
          <Image
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            alt={item.weather[0].description}
            width={24}
            height={24}
            className="md:w-12 md:h-12"
          />
        </div>
      </div>
      <div className="md:flex md:justify-center">
        <p>{formatTemperature(item.main.temp)}</p>
      </div>
    </div>
  );
}
