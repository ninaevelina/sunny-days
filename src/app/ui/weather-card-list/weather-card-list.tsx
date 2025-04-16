import { ForecastListItem } from "@/app/lib/types/forecast-list-item";
import WeatherCardSmall from "../weather-card-small/weather-card-small";

interface WeatherCardListProps {
  items: ForecastListItem[];
}

export default function WeatherCardList({ items }: WeatherCardListProps) {
  const slicedItems = items.slice(1, 5);
  console.log("sliced items in list", slicedItems);
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {slicedItems.map((item, index) => (
        <li
          key={index}
          className="rounded-lg border border-white p-4 border-opacity-80"
        >
          <WeatherCardSmall item={item} />
        </li>
      ))}
    </ul>
  );
}
