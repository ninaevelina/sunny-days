"use client";

import React, { ChangeEvent, useState } from "react";
import { fetchWeather } from "../lib/services/fetch-weather";
import { ApiResponse } from "../lib/types/api-response";
import WeatherCard from "./weather-card/weather-card";
import WeatherForm from "./weather-form/weather-form";
import WeatherCardList from "./weather-card-list/weather-card-list";

export default function WeatherWidget() {
  const [city, setCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<ApiResponse | null>(null);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    try {
      const data: ApiResponse = await fetchWeather(city);
      setWeatherData(data);
    } catch (error) {
      console.error("Failed to fetch weather data", error);
      setWeatherData(null);
      setIsError(true);
      return error;
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
          error={isError}
        />
      </div>
      {isError && (
        <div className="w-4/5 mx-auto mt-20 flex flex-col text-center gap-2">
          <h1 className="font-bold">Oops!</h1>
          <p className="font-medium">
            We couldn&apos;t find the city you searched for.
          </p>
          <p className="font-medium">Please try again.</p>
        </div>
      )}
      <div className="w-4/5 mx-auto flex flex-col gap-4">
        {weatherData ? (
          <div>
            <h1 className="font-medium">Today&apos;s weather</h1>
          </div>
        ) : null}
        <WeatherCard weatherData={weatherData} />
      </div>
      <div className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2">
        {/*TODO: Remove the heading and add sunrise/sunset data*/}
        {weatherData ? (
          <div>
            <h2 className="font-medium">Weather next 4 days</h2>
          </div>
        ) : null}
        <div>{weatherData && <WeatherCardList items={weatherData.list} />}</div>
      </div>
    </section>
  );
}
