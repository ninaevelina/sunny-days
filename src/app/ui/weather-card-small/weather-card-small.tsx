import { capitalizeFirstLetter } from "@/app/lib/hooks/capitalizeFirstLetter";
import { getDayOfWeek } from "@/app/lib/hooks/getDayOfWeek";
import { ForecastListItem } from "@/app/lib/types/forecast-list-item";
import Image from "next/image";

interface WeatherCardSmallProps {
  item: ForecastListItem;
}

export default function WeatherCardSmall({ item }: WeatherCardSmallProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-medium">{getDayOfWeek(item.dt)}</p>
      <div className="flex items-center gap-1">
        <div>
          <Image
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            alt={item.weather[0].description}
            width={24}
            height={24}
          />
        </div>
        <p>{capitalizeFirstLetter(item.weather[0].description)}</p>
      </div>

      <p>{item.main.temp}°C</p>
    </div>
  );
}
