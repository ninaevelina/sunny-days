import WeatherWidget from "./ui/weather-widget";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main>
        <WeatherWidget />
      </main>
    </div>
  );
}
