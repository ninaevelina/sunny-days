export type ForecastListItem = {
  dt: number;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
};
