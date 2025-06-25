import { ForecastListItem } from "@/app/lib/types/forecast-list-item";
import WeatherCardSmall from "../weather-card-small/weather-card-small";
import CalendarIcon from "../icons/calendar";

interface WeatherCardListProps {
  items: ForecastListItem[];
}

export default function WeatherCardList({ items }: WeatherCardListProps) {
  const slicedItems = items.slice(1, 5);
  console.log("sliced items in list", slicedItems);
  return (
    <div className="rounded-lg border border-black p-4 flex flex-col gap-6">
      <div className="flex gap-1 items-center">
        <CalendarIcon width={16} height={16} fill={"#000000"} />
        <h2>Weather next 4 days</h2>
      </div>

      <div>
        <ul className="flex flex-col">
          {slicedItems.map((item, index) => (
            <li
              key={index}
              className="border-b border-black last:border-b-0 flex items-center py-2"
            >
              <WeatherCardSmall item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
