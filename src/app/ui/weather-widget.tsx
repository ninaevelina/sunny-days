"use client";

import React, { ChangeEvent, useState } from "react";
import { fetchWeather } from "../lib/services/fetch-weather";
import { ApiResponse } from "../lib/types/api-response";
import WeatherCard from "./weather-card/weather-card";
import WeatherForm from "./weather-form/weather-form";

export default function WeatherWidget() {
  const [city, setCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<ApiResponse | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data: ApiResponse = await fetchWeather(city);
    setWeatherData(data);
    setCity("");
  };

  return (
    <section>
      <div>
        <WeatherForm
          city={city}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      </div>
      <div className="w-4/5 mx-auto">
        <WeatherCard weatherData={weatherData} />
      </div>
    </section>
  );
}
