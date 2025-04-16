import { capitalizeFirstLetter } from "@/app/lib/hooks/capitalizeFirstLetter";
import { getDayOfWeek } from "@/app/lib/hooks/getDayOfWeek";
import { ForecastListItem } from "@/app/lib/types/forecast-list-item";

interface WeatherCardSmallProps {
  item: ForecastListItem;
}

export default function WeatherCardSmall({ item }: WeatherCardSmallProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-medium">{getDayOfWeek(item.dt)}</p>
      <p>{capitalizeFirstLetter(item.weather[0].description)}</p>
      <p>{item.main.temp}°C</p>
    </div>
  );
}
