import React, { ChangeEvent } from "react";

interface FormProps {
  city: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading?: boolean;
}

export default function WeatherForm({
  city,
  onInputChange,
  onSubmit,
  loading = false,
}: FormProps) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={city}
        onChange={onInputChange}
        placeholder="Search weather by city"
        aria-label="City"
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Searching" : "Search"}
      </button>
    </form>
  );
}
