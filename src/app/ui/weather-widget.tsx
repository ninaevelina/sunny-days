"use client";

import React, { ChangeEvent, useState } from "react";
import { fetchWeather } from "../lib/services/fetch-weather";

export default function WeatherWidget() {
  const [city, setCity] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchWeather(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        placeholder="Search weather by city"
      />
      <button type="submit">Search</button>
    </form>
  );
}
