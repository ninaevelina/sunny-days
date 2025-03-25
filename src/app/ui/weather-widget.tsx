"use client";

import React, { ChangeEvent, useState } from "react";
import { fetchWeather } from "../lib/services/fetch-weather";
import { ApiResponse } from "../lib/types/api-response";
import WeatherCard from "./weather-card/weather-card";
import WeatherForm from "./weather-form/weather-form";

export default function WeatherWidget() {
  const [city, setCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<ApiResponse | null>(null);
  const [isloading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const data: ApiResponse = await fetchWeather(city);
      setWeatherData(data);
    } catch (error) {
      console.error("Failed to fetch weather data", error);
      setWeatherData(null);
    } finally {
      setIsLoading(false);
      setCity("");
    }
  };

  return (
    <section className="flex flex-col gap-12 py-5 px-0">
      <div className="w-4/5 mx-auto flex justify-end">
        <WeatherForm
          city={city}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
          loading={isloading}
        />
      </div>
      <div className="w-4/5 mx-auto">
        <WeatherCard weatherData={weatherData} />
      </div>
    </section>
  );
}
