export type ApiResponse = {
  name: string;
  main: {
    temp: number;
    feels_like: number;
  };
  weather: {
    description: string;
  }[];
};
