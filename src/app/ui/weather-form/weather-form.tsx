import React, { ChangeEvent } from "react";

interface FormProps {
  city: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function WeatherForm({
  city,
  onInputChange,
  onSubmit,
}: FormProps) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={city}
        onChange={onInputChange}
        placeholder="Search weather by city"
        aria-label="City"
      />
      <button type="submit">Search</button>
    </form>
  );
}
